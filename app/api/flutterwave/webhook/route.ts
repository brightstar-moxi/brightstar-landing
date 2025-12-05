// app/api/flutterwave/webhook/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const FLW_SECRET = process.env.FLW_SECRET_KEY;
    if (!FLW_SECRET) {
      console.error("Missing FLW_SECRET");
      return NextResponse.json({ error: "Missing FLW_SECRET" }, { status: 500 });
    }

    // Read raw text (we verify by server-to-server verify call)
    const text = await req.text();
    const payload = JSON.parse(text);

    // Example payload structure: { event: 'payment.completed', data: { id: ..., tx_ref: ..., status: 'successful', ... } }
    const event = payload.event;
    const data = payload.data;

    // Only process successful payments
    if (!data || !data.id) {
      console.warn("Webhook missing data.id");
      return NextResponse.json({ ok: false });
    }

    // Verify transaction server-side with Flutterwave (recommended)
    const verifyResp = await fetch(`https://api.flutterwave.com/v3/transactions/${data.id}/verify`, {
      headers: { Authorization: `Bearer ${FLW_SECRET}` },
    });
    const verifyJson = await verifyResp.json();
    if (!verifyResp.ok) {
      console.error("Flutterwave verify failed", verifyJson);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    // verifyJson.data.status should be "successful"
    const tx = verifyJson.data;
    if (tx.status !== "successful") {
      console.warn("Transaction not successful", tx.status);
      return NextResponse.json({ ok: true });
    }

    // Build record to store in Convex
    const record = {
      paymentId: tx.id?.toString(),
      receipt: `BS-${Date.now()}-${Math.floor(Math.random() * 9000) + 1000}`,
      status: tx.status,
      amountUSD: tx.meta?.usdAmount ?? null,
      amountLocal: tx.amount,
      currency: tx.currency,
      paidAt: tx.created_at ?? new Date().toISOString(),
      customer: {
        name: tx.customer?.name ?? tx.meta?.name ?? "",
        email: tx.customer?.email ?? tx.meta?.email ?? "",
      },
      plan: tx.meta?.planName ?? tx.meta?.planId ?? tx.flw_ref ?? null,
      raw: tx,
    };

    // ---------- Store using Convex ----------
    // TWO options: (A) Call Convex server SDK here; (B) call an internal Next.js route that uses Convex server SDK.
    // I provide an example that POSTS to an internal endpoint `/api/_storePayment` which you create to call Convex.
    try {
      // POST to internal API that will call Convex action (safer and easier to keep Convex SDK usage in one place)
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/_storePayment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (err) {
      console.error("Error storing payment via internal API", err);
    }

    // Optionally: send receipt via SendGrid here (server side) — omitted in this snippet
    console.log("Stored payment", record.paymentId);
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
