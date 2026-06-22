import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { blogsCollection } from "@/lib/collections";
import { verifyAdmin } from "@/lib/admin-auth";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

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

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } =
    await params;

  const blogs =
    await blogsCollection();

  const blog =
    await blogs.findOne({
      _id: new ObjectId(id),
    });

  if (!blog) {
    return NextResponse.json(
      {
        message: "Not Found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    id: blog._id.toString(),
    ...blog,
  });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const admin = await verifyAdmin();

  if (!admin) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;

  const formData = await req.formData();
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim().toLowerCase();
  const content = String(formData.get("content") ?? "").trim();
  const status = String(formData.get("status") ?? "draft");
  const metaTitle = String(formData.get("metaTitle") ?? "").trim();
  const metaDescription = String(formData.get("metaDescription") ?? "").trim();
  const coverImageFile = formData.get("coverImage");

  const updateData: Record<string, unknown> = {
    title,
    slug,
    content,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || "",
    status: status === "published" ? "published" : "draft",
    updatedAt: new Date(),
  };

  if (coverImageFile instanceof File && coverImageFile.size > 0) {
    updateData.coverImage = await saveUpload(coverImageFile);
  }

  const blogs = await blogsCollection();

  await blogs.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: updateData,
    }
  );

  return NextResponse.json({
    success: true,
  });
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await verifyAdmin();

  if (!admin) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;

  const blogs = await blogsCollection();

  await blogs.deleteOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json({
    success: true,
  });
}
