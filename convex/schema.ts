import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  subscribers: defineTable({
    email: v.string(),
    createdAt: v.number(),
  }),
    admins: defineTable({
    email: v.string(),
    passwordHash: v.string(), // bcrypt hash
     role: v.string(),
    createdAt: v.number(),
    name: v.string(), // optional
  }).index("by_email", ["email"]),

});
