import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { blogsCollection } from "@/lib/collections";
import { verifyAdmin } from "@/lib/admin-auth";

export async function PATCH(
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

  const body = await req.json();

  const blogs = await blogsCollection();

  await blogs.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        status: body.status,
        updatedAt: new Date(),
      },
    }
  );

  return NextResponse.json({
    success: true,
  });
}