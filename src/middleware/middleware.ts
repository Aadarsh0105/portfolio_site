import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const adminCookie =
    req.cookies.get("naxora_admin");

  const isAdminRoute =
    req.nextUrl.pathname.startsWith(
      "/nxr-admin-portal-9x7k"
    );

  const isLoginPage =
    req.nextUrl.pathname ===
    "/nxr-admin-portal-9x7k/login";

  if (isAdminRoute && !isLoginPage) {
    if (!adminCookie) {
      return NextResponse.redirect(
        new URL(
          "/nxr-admin-portal-9x7k/login",
          req.url
        )
      );
    }
  }

  if (isLoginPage && adminCookie) {
    return NextResponse.redirect(
      new URL(
        "/nxr-admin-portal-9x7k/dashboard",
        req.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/nxr-admin-portal-9x7k/:path*",
  ],
};