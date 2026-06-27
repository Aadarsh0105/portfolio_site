import Link from 'next/link';
import { SiteShell } from '@/components/SiteShell';
import { Blog, type PublicBlogPost } from '@/components/Blog';
import { Metadata } from 'next';
import { blogsCollection } from '@/lib/collections';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog | Naxora Technology",
  description:
    "Insights on AI, software development, SEO, automation, cloud solutions, and digital transformation from Naxora Technology.",
  alternates: {
    canonical: "https://naxoratechnology.com/blog",
  },
  openGraph: {
    title: "Blog | Naxora Technology",
    description:
      "Insights on AI, software development, SEO, automation and digital transformation.",
    url: "https://naxoratechnology.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

type BlogApiResponse = {
  data: Array<{
    id: string;
    title: string;
    slug: string;
    coverImage?: string;
    metaTitle?: string;
    metaDescription?: string;
    status?: string;
    content?: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
  }>;
  total: number;
};

async function getPublishedBlogs(page = 1, limit = 12): Promise<BlogApiResponse> {
  const blogs = await blogsCollection();
  const total = await blogs.countDocuments({ status: "published" });
  const posts = await blogs
    .find({ status: "published" })
    .sort({ updatedAt: -1, createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();

  return {
    data: posts.map((post) => ({
      id: post._id.toString(),
      title: post.title ?? "",
      slug: post.slug ?? "",
      coverImage: post.coverImage,
      metaTitle: post.metaTitle ?? "",
      metaDescription: post.metaDescription ?? "",
      status: post.status ?? "draft",
      content: post.content ?? "",
      createdAt: post.createdAt,
      updatedAt: post.updatedAt ?? post.createdAt,
    })),
    total,
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const pageParam = resolvedSearchParams.page;
  const page = Math.max(
    Number(Array.isArray(pageParam) ? pageParam[0] : pageParam ?? "1") || 1,
    1
  );
  const limit = 6;
  const { data: posts, total } = await getPublishedBlogs(page, limit);
  const totalPages = Math.max(Math.ceil(total / limit), 1);

  return (
    <SiteShell>
      <main className="bg-white text-dark pt-12">
        <Blog posts={posts} />

        {totalPages > 1 ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Link
                aria-disabled={page <= 1}
                href={page > 1 ? `/blog?page=${page - 1}` : '/blog?page=1'}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  page <= 1
                    ? 'pointer-events-none border-slate-200 text-slate-400'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Prev
              </Link>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
                  <Link
                    key={item}
                    href={`/blog?page=${item}`}
                    className={`min-w-10 h-10 px-3 inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      item === page
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <Link
                aria-disabled={page >= totalPages}
                href={page < totalPages ? `/blog?page=${page + 1}` : `/blog?page=${totalPages}`}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  page >= totalPages
                    ? 'pointer-events-none border-slate-200 text-slate-400'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : null}
      </main>
    </SiteShell>
  );
}
