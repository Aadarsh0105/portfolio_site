import { connectDB } from "./mongodb";

export const COLLECTIONS = {
  CONTACTS: "contacts",
  BLOGS: "blogs",
  ADMINS: "admin",
} as const;

export async function contactsCollection() {
  const db = await connectDB();
  return db.collection(COLLECTIONS.CONTACTS);
}

export async function blogsCollection() {
  const db = await connectDB();
  return db.collection(COLLECTIONS.BLOGS);
}

export async function adminsCollection() {
  const db = await connectDB();
  return db.collection(COLLECTIONS.ADMINS);
}