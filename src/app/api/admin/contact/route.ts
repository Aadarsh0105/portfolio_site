import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { verifyAdmin } from "@/lib/admin-auth";
import { contactsCollection } from "@/lib/collections";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function toPlainContact(contact: Record<string, unknown>) {
  return {
    id:
      contact._id instanceof ObjectId
        ? contact._id.toString()
        : typeof contact._id === "string"
          ? contact._id
          : undefined,
    ...contact,
  };
}

export async function GET(request: Request) {
  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const rawPage = Number(url.searchParams.get("page") || "1");
  const rawLimit = Number(url.searchParams.get("limit") || "20");
  const page = Number.isFinite(rawPage) ? Math.max(Math.floor(rawPage), 1) : 1;
  const limit = Number.isFinite(rawLimit)
    ? Math.min(Math.max(Math.floor(rawLimit), 1), 100)
    : 20;
  const skip = (page - 1) * limit;

  const collection = await contactsCollection();
  const [items, total] = await Promise.all([
    collection
      .find({})
      .sort({ updatedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray(),
    collection.countDocuments({}),
  ]);

  const totalPages = Math.max(Math.ceil(total / limit), 1);

  return NextResponse.json({
    ok: true,
    data: items.map((item) => toPlainContact(item as Record<string, unknown>)),
    page,
    limit,
    total,
    totalPages,
    hasPrevPage: page > 1,
    hasNextPage: page < totalPages,
  });
}
