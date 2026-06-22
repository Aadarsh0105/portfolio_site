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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ ok: false, error: "Invalid enquiry id" }, { status: 400 });
  }

  const collection = await contactsCollection();
  const contact = await collection.findOne({ _id: new ObjectId(id) });

  if (!contact) {
    return NextResponse.json({ ok: false, error: "Enquiry not found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true, data: toPlainContact(contact as Record<string, unknown>) });
}
