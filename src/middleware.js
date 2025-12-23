import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow home page
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Redirect everything else to home
  return NextResponse.redirect(new URL("/", request.url));
}

// Apply middleware to ALL routes except static assets
export const config = {
  matcher: [
    "/((?!_next|favicon.ico|images|icon.png).*)",
  ],
};
