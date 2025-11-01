import { mutation } from "./_generated/server";
import { v } from "convex/values";

// ✅ use a *named export*, not default
export const addSubscriber = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("subscribers")
      .filter(q => q.eq(q.field("email"), args.email))
      .first();

    if (existing) return { status: "already_subscribed" };

    await ctx.db.insert("subscribers", {
      email: args.email,
      createdAt: Date.now(),
    });

    return { status: "success" };
  },
});
