// app/api/flutterwave/initialize/route.ts
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const FLW_SECRET = process.env.FLW_SECRET_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!FLW_SECRET || !baseUrl) {
      console.error("Missing env");
      return NextResponse.json({ error: "Missing server env" }, { status: 500 });
    }

    // Create unique tx_ref
    const tx_ref = `bs_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

    // Flutterwave expects amount in DECIMAL (no minor currency conversion)
    // We'll charge the local currency amount (e.g., NGN) — passed by client
    const payload = {
      tx_ref,
      amount: body.localAmount?.toString() ?? body.usdAmount?.toString(),
      currency: body.currency ?? "NGN",
      redirect_url: `${baseUrl}/payments/success?tx_ref=${tx_ref}`,
      customer: {
        email: body.email,
        name: body.name,
      },
      meta: {
        planId: body.planId,
        planName: body.planName,
        usdAmount: body.usdAmount,
      },
      customizations: {
        title: "Brightstar Tech Payment",
        description: `Payment for ${body.planName} plan`,
        logo: "https://your-site.vercel.app/mnt/data/Gemini_Generated_Image_z85lbvz85lbvz85l.png", // when deployed replace with actual URL to logo
      },
    };

    const resp = await fetch("https://api.flutterwave.com/v3/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${FLW_SECRET}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await resp.json();

    if (!resp.ok) {
      console.error("Flutterwave init error", json);
      return NextResponse.json({ error: json }, { status: 500 });
    }

    // Return the object to frontend
    return NextResponse.json(json);
  } catch (err) {
    console.error("init error", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
