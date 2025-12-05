// app/api/_storePayment/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const record = await req.json();

    // Example: call Convex action through fetch to a special endpoint or use Convex server SDK.
    // I will show a simple POST to Convex HTTP action endpoint (you must adapt to your Convex deployment).
    // Use environment variables to build correct URL and include a server key if needed.

    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
    const convexServerKey = process.env.CONVEX_SERVER_KEY; // if required

    if (!convexUrl) {
      console.error("Missing convex url");
      return NextResponse.json({ error: "Missing convex url" }, { status: 500 });
    }

    // NOTE: The exact Convex HTTP API path can change. If you have the Convex server SDK, use SDK instead.
    // Below is a placeholder example showing how you'd POST to a Convex action endpoint if you expose one.
    // Replace this with the correct call for your Convex setup (or use the server SDK).
    const storeResp = await fetch(`${convexUrl}/api/actions/storePayment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(convexServerKey ? { Authorization: `Bearer ${convexServerKey}` } : {}),
      },
      body: JSON.stringify({ record }),
    });

    // If you're using the Convex server SDK (recommended), replace the fetch above with the SDK call:
    // const { ConvexHttpClient } = require('convex/server');
    // const convexClient = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    // await convexClient.runAction("storePayment", record);

    if (!storeResp.ok) {
      const err = await storeResp.text();
      console.error("Convex store error", err);
      // Still return OK => webhook processed, but we couldn't store
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("storePayment route error", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
