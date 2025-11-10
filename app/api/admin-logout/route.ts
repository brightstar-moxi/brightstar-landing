// // app/api/admin-logout/route.ts
// import { NextResponse } from "next/server";

// export async function POST() {
//   const res = NextResponse.json({ ok: true });
//   res.cookies.set("admin_token", "", { httpOnly: true, expires: new Date(0), path: "/" });
//   return res;
// }


import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("admin_token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });

  return response;
}
