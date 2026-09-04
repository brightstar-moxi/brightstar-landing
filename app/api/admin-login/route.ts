// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export async function POST(req: Request) {
//   const { email, password } = await req.json();

//   if (
//     // email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
//     // password === process.env.ADMIN_PASSWORD

    
//   email === process.env.ADMIN_EMAIL &&
//   password === process.env.ADMIN_PASSWORD
 
//   ) {
//     const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET!, {
//       expiresIn: "2h",
//     });

//     const response = NextResponse.json({ success: true });

//     // Set secure HttpOnly cookie
//     response.cookies.set("admin_token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 2 * 60 * 60, // 2 hours
//       path: "/",
//     });

//     return response;
//   }

//   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
// }
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      console.error("JWT_SECRET is missing");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      { role: "admin" },
      secret,
      { expiresIn: "2h" }
    );

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 2 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}