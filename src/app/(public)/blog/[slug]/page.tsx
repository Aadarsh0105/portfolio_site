import { BlogPostPage } from "@/components/BlogPostPage";
import BlogSchema from "@/schema/BlogSchema";
import { blogPosts } from "@/data/blogPosts";
import { Metadata } from "next";
import BreadcrumbSchema from "@/schema/BreadcrumbSchema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,

    keywords: [
      post.category,
      "AI",
      "Software Development",
      "Naxora Technology",
    ],

    alternates: {
      canonical: `https://naxoratechnology.com/blog/${slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://naxoratechnology.com/blog/${slug}`,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <BlogPostPage slug={slug} />;
  }

  return (
    <>
      <BlogSchema
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        datePublished={post.date}
      />
      <BreadcrumbSchema
        title={post.title}
        slug={post.slug}
      />
      <BlogPostPage slug={slug} />
    </>
  );
}