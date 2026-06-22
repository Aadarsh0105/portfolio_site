import { cookies } from "next/headers";

export async function verifyAdmin() {
  const cookieStore = await cookies();

  const adminCookie =
    cookieStore.get("naxora_admin");

  if (!adminCookie) {
    return null;
  }

  try {
    return JSON.parse(adminCookie.value);
  } catch {
    return null;
  }
}