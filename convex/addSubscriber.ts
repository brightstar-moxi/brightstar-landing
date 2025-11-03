// import { mutation } from "./_generated/server";
// import { v } from "convex/values";

// // ✅ use a *named export*, not default
// export const addSubscriber = mutation({
//   args: { email: v.string() },
//   handler: async (ctx, args) => {
//     const existing = await ctx.db
//       .query("subscribers")
//       .filter(q => q.eq(q.field("email"), args.email))
//       .first();

//     if (existing) return { status: "already_subscribed" };

//     await ctx.db.insert("subscribers", {
//       email: args.email,
//       createdAt: Date.now(),
//     });

//     return { status: "success" };
//   },
// });


// import { mutation } from "./_generated/server";
// import { v } from "convex/values";

// export const addSubscriber = mutation({
//   args: { email: v.string() },
//   handler: async (ctx, args) => {
//     // Check if subscriber exists
//     const existing = await ctx.db
//       .query("subscribers")
//       .filter(q => q.eq(q.field("email"), args.email))
//       .first();

//     if (existing) return { status: "already_subscribed" };

//     // Save new subscriber
//     await ctx.db.insert("subscribers", {
//       email: args.email,
//       createdAt: Date.now(),
//     });

//     // ✅ Access env vars from Convex
//     const serviceId = ctx.env.get("EMAILJS_SERVICE_ID");
//     const templateId = ctx.env.get("EMAILJS_TEMPLATE_ID");
//     const userId = ctx.env.get("EMAILJS_PUBLIC_KEY");

//     if (!serviceId || !templateId || !userId) {
//       console.error("⚠️ Missing one or more EmailJS environment variables");
//       return { status: "missing_env" };
//     }

//     // ✅ Send welcome email
//     try {
//       const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           service_id: serviceId,
//           template_id: templateId,
//           user_id: userId,
//           template_params: {
//             to_email: args.email,
//             subject: "Welcome to Brightstar Tech 🌟",
//             message: `
//               <h2>Hi there 👋</h2>
//               <p>Thank you for subscribing to <strong>Brightstar Tech</strong>!</p>
//               <p>We're thrilled to have you onboard — get ready for updates, news, and exclusive releases.</p>
//               <p>Stay bright! ✨<br>— The Brightstar Team</p>
//             `,
//           },
//         }),
//       });

//       if (!res.ok) {
//         console.error("❌ Failed to send welcome email:", await res.text());
//       } else {
//         console.log("✅ Welcome email sent successfully to", args.email);
//       }
//     } catch (err) {
//       console.error("⚠️ Error sending welcome email:", err);
//     }

//     return { status: "success" };
//   },
// });



// import { mutation } from "./_generated/server";
// import { v } from "convex/values";

// // ✅ use a *named export*, not default
// export const addSubscriber = mutation({
//   args: { email: v.string() },
//   handler: async (ctx, args) => {
//     const existing = await ctx.db
//       .query("subscribers")
//       .filter(q => q.eq(q.field("email"), args.email))
//       .first();

//     if (existing) return { status: "already_subscribed" };

//     // ✅ Save the new subscriber in Convex
//     await ctx.db.insert("subscribers", {
//       email: args.email,
//       createdAt: Date.now(),
//     });

//     // ✅ Send welcome email using EmailJS REST API
//     try {
//       const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           service_id: process.env.EMAILJS_SERVICE_ID,
//           template_id: process.env.EMAILJS_TEMPLATE_ID,
//           user_id: process.env.EMAILJS_PUBLIC_KEY,
//           template_params: {
//             to_email: args.email,
//             subject: "Welcome to Brightstar Tech 🌟",
//             message: `
//               Hi there 👋,
//               <br><br>
//               Thank you for subscribing to <strong>Brightstar Tech</strong>!
//               <br>
//               We're excited to have you onboard — you'll now receive updates, news, and exclusive releases.
//               <br><br>
//               Stay bright! ✨<br>
//               — The Brightstar Team
//             `,
//           },
//         }),
//       });

//       if (!res.ok) {
//         console.error("❌ Failed to send welcome email:", await res.text());
//       } else {
//         console.log("✅ Welcome email sent successfully to", args.email);
//       }
//     } catch (err) {
//       console.error("⚠️ Error sending welcome email:", err);
//     }

//     return { status: "success" };
//   },
// });


// import { mutation } from "./_generated/server";
// import { v } from "convex/values";

// export const addSubscriber = mutation({
//   args: { email: v.string() },
//   handler: async (ctx, args) => {
//     const existing = await ctx.db
//       .query("subscribers")
//       .filter(q => q.eq(q.field("email"), args.email))
//       .first();

//     if (existing) return { status: "already_subscribed" };

//     await ctx.db.insert("subscribers", {
//       email: args.email,
//       createdAt: Date.now(),
//     });

//     return { status: "success" };
//   },
// });


import { mutation } from "./_generated/server";
import { v } from "convex/values";

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

    // Just confirm it's saved
    return { status: "success" };
  },
});
