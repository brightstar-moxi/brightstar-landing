import { query } from "./_generated/server";

export const getSubscribers = query({
  handler: async (ctx) => {
    return await ctx.db.query("subscribers").collect();
  },
});
