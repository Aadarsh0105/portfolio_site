import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";

import { BlogPostPage } from "@/components/BlogPostPage";
import BlogSchema from "@/schema/BlogSchema";
import BreadcrumbSchema from "@/schema/BreadcrumbSchema";
import { blogsCollection } from "@/lib/collections";

async function getBlogBySlug(slug: string) {
  const blogs = await blogsCollection();
  const blog = await blogs.findOne({ slug, status: "published" });

  if (!blog) return null;

  return {
    id: blog._id instanceof ObjectId ? blog._id.toString() : String(blog._id),
    title: blog.title ?? "",
    slug: blog.slug ?? slug,
    coverImage: blog.coverImage,
    metaTitle: blog.metaTitle ?? blog.title ?? "",
    metaDescription: blog.metaDescription ?? "",
    status: blog.status ?? "published",
    content: blog.content ?? "",
    createdAt: blog.createdAt ?? new Date(),
    updatedAt: blog.updatedAt ?? blog.createdAt ?? new Date(),
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

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
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await blogsCollection())
    .find({ status: "published", slug: { $ne: slug } })
    .sort({ updatedAt: -1, createdAt: -1 })
    .limit(2)
    .toArray();

  const related = await relatedPosts;

  return (
    <>
      <BlogSchema
        title={post.title}
        description={post.metaDescription}
        slug={post.slug}
        datePublished={new Date(post.updatedAt ?? post.createdAt).toISOString()}
        image={post.coverImage}
      />

      <BreadcrumbSchema
        title={post.title}
        slug={post.slug}
      />

      <BlogPostPage
        post={post}
        relatedPosts={related.map((item) => ({
          title: item.title ?? "",
          slug: item.slug ?? "",
          coverImage: item.coverImage ?? "/logo1.png",
          metaTitle: item.metaTitle ?? "",
          metaDescription: item.metaDescription ?? "",
          status: item.status ?? "published",
          content: item.content ?? "",
          createdAt: item.createdAt,
          updatedAt: item.updatedAt ?? item.createdAt,
        }))}
      />
    </>
  );
}
