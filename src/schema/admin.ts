import { ObjectId } from "mongodb";

export interface AdminUser {
  _id?: ObjectId;

  email: string;

  passwordHash: string;

  role: "super_admin";

  createdAt: Date;
  updatedAt: Date;
}