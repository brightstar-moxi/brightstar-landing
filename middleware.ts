// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Allow the login page
//   if (pathname === "/admin/login") {
//     return NextResponse.next();
//   }

//   // Only protect admin routes
//   if (pathname.startsWith("/admin")) {
//     const token = request.cookies.get("admin_token")?.value;

//     // No token → login
//     if (!token) {
//       return NextResponse.redirect(
//         new URL("/admin/login", request.url)
//       );
//     }

//     try {
//       jwt.verify(token, process.env.JWT_SECRET!);

//       // Token is valid
//       return NextResponse.next();
//     } catch {
//       // Invalid/expired token
//       const response = NextResponse.redirect(
//         new URL("/admin/login", request.url)
//       );

//       // Remove invalid cookie
//       response.cookies.delete("admin_token");

//       return response;
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*"],
// };




// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtVerify } from "jose";

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Allow the admin login page
//   if (pathname === "/admin/login") {
//     return NextResponse.next();
//   }

//   // Protect all /admin routes
//   if (pathname.startsWith("/admin")) {
//     const token = request.cookies.get("admin_token")?.value;

//     // No login cookie → send to login
//     if (!token) {
//       return NextResponse.redirect(
//         new URL("/admin/login", request.url)
//       );
//     }

//     try {
//       const secret = new TextEncoder().encode(
//         process.env.JWT_SECRET
//       );

//       await jwtVerify(token, secret);

//       // Valid token → allow access
//       return NextResponse.next();
//     } catch {
//       // Invalid or expired token
//       const response = NextResponse.redirect(
//         new URL("/admin/login", request.url)
//       );

//       response.cookies.delete("admin_token");

//       return response;
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*"],
// };\





import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow login page
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // Protect admin pages
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }

    try {
      const secret = process.env.JWT_SECRET;

      if (!secret) {
        throw new Error("JWT_SECRET is missing");
      }

      await jwtVerify(
        token,
        new TextEncoder().encode(secret)
      );

      return NextResponse.next();
    } catch (error) {
      console.error("JWT verification failed:", error);

      const response = NextResponse.redirect(
        new URL("/admin/login", request.url)
      );

      response.cookies.delete("admin_token");

      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};