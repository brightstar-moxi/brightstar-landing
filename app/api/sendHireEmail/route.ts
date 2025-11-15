import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // -----------------------------------------
    // 1. SEND EMAIL TO YOU (ADMIN EMAIL)
    // -----------------------------------------
    const adminEmailBody = {
      service_id: process.env.EMAILJS_ADMIN_SERVICE_ID,
      template_id: process.env.EMAILJS_ADMIN_TEMPLATE_ID,
      user_id: process.env.EMAILJS_CLIENT_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_CLIENT_PRIVATE_KEY,
      template_params: {
        to_email: "brightstartech11@gmail.com",
        from_name: data.name,
        from_email: data.email,
        plan: data.plan,
        phone: data.phone,
        message: data.message,
      },
    };

    const adminRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminEmailBody),
    });

    if (!adminRes.ok) {
      const error = await adminRes.text();
      console.error("Admin Email Error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    // -----------------------------------------
    // 2. SEND AUTO-REPLY EMAIL TO CUSTOMER
    // -----------------------------------------
    const clientEmailBody = {
      service_id: process.env.EMAILJS_ADMIN_SERVICE_ID,
      template_id: process.env.EMAILJS_CLIENT_TEMPLATE_ID, // NEW TEMPLATE
      user_id: process.env.EMAILJS_CLIENT_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_CLIENT_PRIVATE_KEY,
      template_params: {
        to_email: data.email,
        name: data.name,
        plan: data.plan,
      },
    };

    const clientRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clientEmailBody),
    });

    if (!clientRes.ok) {
      const error = await clientRes.text();
      console.error("Client Email Error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    // SUCCESS
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Request Error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
