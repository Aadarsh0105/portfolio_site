import { ObjectId } from "mongodb";
import BlogEditor from "@/components/admin/BlogEditor";
import { blogsCollection } from "@/lib/collections";

async function getBlog(id: string) {
  const blogs = await blogsCollection();
  const blog = await blogs.findOne({ _id: new ObjectId(id) });

  if (!blog) {
    return null;
  }

  return {
    id: blog._id.toString(),
    title: blog.title ?? "",
    slug: blog.slug ?? "",
    content: blog.content ?? "",
    metaTitle: blog.metaTitle ?? "",
    metaDescription: blog.metaDescription ?? "",
    coverImage: blog.coverImage ?? "",
    status: (blog.status === "published" ? "published" : "draft") as
      | "published"
      | "draft",
  } as const;
}

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-950">
          Blog not found
        </h1>
        <p className="mt-2 text-slate-500">
          The blog you are trying to edit does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-blue-600 uppercase tracking-[0.2em]">
          Content Studio
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-950">
          Edit Blog Post
        </h1>
        <p className="mt-2 text-slate-500 max-w-2xl">
          Update the article content, polish metadata, and republish changes.
        </p>
      </div>

      <BlogEditor
        mode="edit"
        blogId={id}
        title="Edit Blog Post"
        description="Revise the blog content, update SEO details, and save your changes."
        primaryActionLabel="Update Post"
        secondaryActionLabel="Save Changes"
        initialData={blog}
      />
    </div>
  );
}
