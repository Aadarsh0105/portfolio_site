export interface Blog {
  _id?: string;

  title: string;
  slug: string;

  coverImage: string;

  content: string; // Tiptap HTML

  metaTitle: string;
  metaDescription: string;

  status: "draft" | "published";

  publishedAt?: Date;

  createdAt: Date;
  updatedAt: Date;
}