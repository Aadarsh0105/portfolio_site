// app/nxr-admin-portal-9x7k/(admin)/blogs/create/page.tsx

import Link from "next/link";
import BlogEditor from "@/components/admin/BlogEditor";

export default function CreateBlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-blue-600 uppercase tracking-[0.2em]">
          Content Studio
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-950">
          Create Blog Post
        </h1>
        <p className="mt-2 text-slate-500 max-w-2xl">
          Craft a polished article with cover image, content, and SEO metadata.
        </p>

        <Link
          href="/nxr-admin-portal-9x7k/blogs"
          className="inline-flex items-center mt-4 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Back to Blogs
        </Link>
      </div>

      <BlogEditor
        mode="create"
        title="Create Blog Post"
        description="Write a new article, refine the SEO fields, and publish when ready."
        primaryActionLabel="Publish Post"
        secondaryActionLabel="Save Draft"
      />
    </div>
  );
}
