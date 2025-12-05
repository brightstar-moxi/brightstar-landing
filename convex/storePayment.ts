// convex/storePayment.ts
"use node";
import { action } from "convex/action";
import { v } from "convex/values";

export const storePayment = action({
  args: {
    record: v.any(),
  },
  handler: async (ctx, { record }) => {
    // ensure there's a payments table in your Convex schema
    await ctx.db.insert("payments", {
      paymentId: record.paymentId,
      receipt: record.receipt,
      status: record.status,
      amountUSD: record.amountUSD,
      amountLocal: record.amountLocal,
      currency: record.currency,
      paidAt: record.paidAt,
      customer: record.customer,
      plan: record.plan,
      raw: record.raw,
    });
    return true;
  },
});
