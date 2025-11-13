import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const emailBody = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: "brightstartech11@gmail.com",
        from_name: data.name,
        from_email: data.email,
        plan: data.plan,
        phone: data.phone,
        message: data.message,
      },
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailBody),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const error = await res.text();
      console.error("EmailJS Error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }
  } catch (err) {
    console.error("Request Error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
