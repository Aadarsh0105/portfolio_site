import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { blogsCollection } from "@/lib/collections";
import { verifyAdmin } from "@/lib/admin-auth";
import cloudinary from "@/lib/cloudinary";

async function saveUpload(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());

  return await new Promise<{
    secure_url: string;
    public_id: string;
  }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "blogs",
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Cloudinary upload failed"));
          return;
        }

        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
        });
      }
    );

    uploadStream.end(buffer);
  });
}

function getCloudinaryPublicId(value?: string | null) {
  if (!value) return "";

  if (value.startsWith("http")) {
    try {
      const url = new URL(value);
      const parts = url.pathname.split("/");
      const uploadIndex = parts.indexOf("upload");
      if (uploadIndex === -1) return "";
      const filePath = parts.slice(uploadIndex + 2).join("/");
      return filePath.replace(/\.[^.]+$/, "");
    } catch {
      return "";
    }
  }

  return value.replace(/^\/+/, "").replace(/\.[^.]+$/, "");
}

async function deleteUpload(publicId?: string | null) {
  const normalizedPublicId = getCloudinaryPublicId(publicId);

  if (!normalizedPublicId) return;

  try {
    await cloudinary.uploader.destroy(normalizedPublicId);
  } catch (error) {
    console.error("Failed to delete Cloudinary asset:", error);
  }
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

  const blogs = await blogsCollection();
  const existingBlog = await blogs.findOne({
    _id: new ObjectId(id),
  });

  if (coverImageFile instanceof File && coverImageFile.size > 0) {
    const uploadedImage = await saveUpload(coverImageFile);
    updateData.coverImage = uploadedImage.secure_url;
    updateData.coverImagePublicId = uploadedImage.public_id;

    await deleteUpload(existingBlog?.coverImagePublicId ?? existingBlog?.coverImage);
  }

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
  const blog = await blogs.findOne({
    _id: new ObjectId(id),
  });

  if (!blog) {
    return NextResponse.json(
      { message: "Not Found" },
      { status: 404 }
    );
  }

  await deleteUpload(blog.coverImagePublicId ?? blog.coverImage);

  await blogs.deleteOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json({
    success: true,
  });
}
