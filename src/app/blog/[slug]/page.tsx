import { BlogPostPage } from "@/components/BlogPostPage";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <BlogPostPage slug={slug} />;
}
