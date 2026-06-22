import { BlogPostPage } from "@/components/BlogPostPage";
import BlogSchema from "@/schema/BlogSchema";
import BreadcrumbSchema from "@/schema/BreadcrumbSchema";
import { blogPosts } from "@/data/blogPosts";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.metaTitle || post.title,

    description: post.metaDescription,

    alternates: {
      canonical: `https://naxoratechnology.com/blog/${slug}`,
    },

    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      url: `https://naxoratechnology.com/blog/${slug}`,
      type: "article",
      images: [
        {
          url: post.coverImage,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    return <BlogPostPage slug={slug} />;
  }

  return (
    <>
      <BlogSchema
        title={post.title}
        description={post.metaDescription}
        slug={post.slug}
        datePublished={ post.createdAt.toISOString() }
      />

      <BreadcrumbSchema
        title={post.title}
        slug={post.slug}
      />

      <BlogPostPage slug={slug} />
    </>
  );
}