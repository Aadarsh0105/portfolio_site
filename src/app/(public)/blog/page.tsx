import Link from 'next/link';
import { SiteShell } from '@/components/SiteShell';
import Image from 'next/image';
import { Metadata } from 'next';
import { blogsCollection } from '@/lib/collections';
import { ArrowLeft, ArrowRight, Calendar, Loader2 } from 'lucide-react';

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
  const limit = 9;
  const { data: posts, total } = await getPublishedBlogs(page, limit);
  const totalPages = Math.max(Math.ceil(total / limit), 1);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://naxoratechnology.com";

  const getImageProps = (src?: string) => {
    const rawValue = src || "/logo1.png";
    const value = rawValue.startsWith("/uploads/") ? `${siteUrl}${rawValue}` : rawValue;
    const isRemote = /^https?:\/\//i.test(value);
    return {
      src: value,
      unoptimized: isRemote,
    };
  };

  return (
    <SiteShell>
      <main className="bg-white text-dark pt-12">
        <section
          id="blog"
          className="pt-10 pb-5 md:pt-16 bg-gray-50/50 dark:bg-white/[0.02]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
                  Insights
                </h2>

                <h3 className="text-3xl md:text-4xl font-bold">
                  Latest from our Blog
                </h3>
              </div>
            </div>

            {posts.length === 0 ? (
              <div className="flex min-h-[240px] items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-white/60">
                <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  No blog posts found.
                </span>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <div key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          {...getImageProps(post.coverImage)}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>

                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-4">
                          <div className="flex items-center gap-2 text-xs text-light font-medium">
                            <Calendar className="w-3 h-3" />
                            <span>
                              {post.createdAt
                                ? new Date(post.createdAt).toLocaleString("en-IN", {
                                    dateStyle: "medium",
                                    timeStyle: "short",
                                  })
                                : ""}
                            </span>
                          </div>

                          <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {totalPages > 1 ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
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

              <div className="flex items-center gap-2 flex-wrap justify-center">
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
