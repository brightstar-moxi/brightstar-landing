// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// export function proxy(req: NextRequest) {
//   const token = req.cookies.get("admin_token")?.value;

//   if (req.nextUrl.pathname.startsWith("/admin")) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/admin/login", req.url));
//     }

//     try {
//       jwt.verify(token, process.env.JWT_SECRET!);
//       return NextResponse.next();
//     } catch (err) {
//       return NextResponse.redirect(new URL("/admin/login", req.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*"],
// };


// src/proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  const url = req.nextUrl.clone();

  // Protect all /admin routes except /admin/login
  if (url.pathname.startsWith("/admin") && url.pathname !== "/admin/login") {
    if (!token) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return NextResponse.next();
    } catch {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Define the paths where the proxy applies
export const config = {
  matcher: ["/admin/:path*"],
};
