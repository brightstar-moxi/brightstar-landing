import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, link } = await req.json();

    const { error } = await resend.emails.send({
      from: "CV Builder <onboarding@resend.dev>", // default works for now
      to: email,
      subject: "Your CV is Ready",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Your CV is ready</h2>
          <p>You can edit your CV anytime using the link below:</p>
          <a href="${link}" style="
            display:inline-block;
            padding:10px 16px;
            background:#4F46E5;
            color:white;
            text-decoration:none;
            border-radius:6px;
          ">
            Open Your CV
          </a>
        </div>
      `,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}