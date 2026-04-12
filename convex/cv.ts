import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";


export const getCV = query({
  args: { id: v.id("cvs") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
export const saveCV = mutation({
  args: {
    email: v.string(),
    data: v.any(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("cvs", {
      email: args.email,
      data: args.data,
      createdAt: Date.now(),
    });

    return id;
  },
});