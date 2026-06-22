import { loadEnvConfig } from "@next/env";
import bcrypt from "bcryptjs";
import { adminsCollection } from "@/lib/collections";

loadEnvConfig(process.cwd());

async function seedAdmin() {
  try {
    const admins = await adminsCollection();

    const existingAdmin = await admins.findOne({
      email: "admin@naxora.com",
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      process.exit(0);
    }

    const passwordHash = await bcrypt.hash(
      "NaxoraAdmin@1106",
      12
    );

    await admins.insertOne({
      email: "admin@naxora.com",
      passwordHash,
      role: "super_admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log("✅ Admin created successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  }
}

seedAdmin();
