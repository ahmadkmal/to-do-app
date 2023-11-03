import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get("token");
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (!token) {
      return NextResponse.next();
    }
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};
