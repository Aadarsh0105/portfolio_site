import { NextResponse } from "next/server";
import { blogsCollection } from "@/lib/collections";
import { verifyAdmin } from "@/lib/admin-auth";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function saveUpload(file: File) {
  const uploadsDir = path.join(process.cwd(), "public", "uploads", "blogs");
  await mkdir(uploadsDir, { recursive: true });

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const fileName = `${Date.now()}-${safeName}`;
  const filePath = path.join(uploadsDir, fileName);
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(filePath, buffer);

  return `/uploads/blogs/${fileName}`;
}

export async function POST(req: Request) {
  const admin = await verifyAdmin();

  if (!admin) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const formData = await req.formData();

    const title = String(formData.get("title") ?? "").trim();
    const slug = String(formData.get("slug") ?? "").trim().toLowerCase();
    const content = String(formData.get("content") ?? "").trim();
    const status = String(formData.get("status") ?? "draft");
    const metaTitle = String(formData.get("metaTitle") ?? "").trim();
    const metaDescription = String(formData.get("metaDescription") ?? "").trim();
    const coverImageFile = formData.get("coverImage");

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          message: "Title, slug and content are required",
        },
        {
          status: 400,
        }
      );
    }

    const blogs = await blogsCollection();

    const existingBlog = await blogs.findOne({
      slug,
    });

    if (existingBlog) {
      return NextResponse.json(
        {
          message: "A blog with this slug already exists",
        },
        {
          status: 409,
        }
      );
    }

    let coverImage = "";
    if (coverImageFile instanceof File && coverImageFile.size > 0) {
      coverImage = await saveUpload(coverImageFile);
    }

    const blog = {
      title,
      slug,

      content,

      coverImage,

      metaTitle: metaTitle || title,

      metaDescription: metaDescription || "",

      status:
        status === "published"
          ? "published"
          : "draft",

      author: "Naxora Technology",

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await blogs.insertOne(blog);

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
      message: "Blog created successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } =
      new URL(req.url);

    const status =
      searchParams.get("status");
    const page = Math.max(Number(searchParams.get("page") ?? "1") || 1, 1);
    const limit = Math.max(Number(searchParams.get("limit") ?? "12") || 12, 1);

    const blogs = await blogsCollection();

    const query =
      status && status !== "all"
        ? { status }
        : {};

    const total = await blogs.countDocuments(query);

    const data = await blogs
      .find(query)
      .sort({
        createdAt: -1,
      })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json(
      {
        data: data.map((blog) => ({
          id: blog._id.toString(),
          ...blog,
        })),
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      }
    );
  } catch {
    return NextResponse.json(
      {
        data: [],
        page: 1,
        limit: 12,
        total: 0,
        totalPages: 0,
      },
      { status: 500 }
    );
  }
}
