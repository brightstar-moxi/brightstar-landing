// import { action } from "./_generated/server";
// import { v } from "convex/values";

// export const sendWelcomeEmail = action({
//   args: { email: v.string() },
//   handler: async (ctx, args) => {
//     const serviceId = ctx.env.get("EMAILJS_SERVICE_ID");
//     const templateId = ctx.env.get("EMAILJS_TEMPLATE_ID");
//     const userId = ctx.env.get("EMAILJS_PUBLIC_KEY");

//     if (!serviceId || !templateId || !userId) {
//       console.error("⚠️ Missing EmailJS environment variables");
//       return;
//     }

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
//               <p>We’re thrilled to have you onboard — you’ll now receive updates, news, and exclusive releases.</p>
//               <p>Stay bright! ✨<br>— The Brightstar Team</p>
//             `,
//           },
//         }),
//       });

//       if (!res.ok) {
//         console.error("❌ Email send failed:", await res.text());
//       } else {
//         console.log("✅ Welcome email sent to", args.email);
//       }
//     } catch (err) {
//       console.error("⚠️ EmailJS error:", err);
//     }
//   },
// });



import { action } from "./_generated/server";
import { v } from "convex/values";

export const sendWelcomeEmail = action({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const serviceId = process.env.EMAILJS_SERVICE_ID!;
    const templateId = process.env.EMAILJS_TEMPLATE_ID!;
    const userId = process.env.EMAILJS_PUBLIC_KEY!;

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: {
            to_email: args.email,
            subject: "Welcome to Brightstar Tech 🌟",
            message: `
              <h2>Hi there 👋</h2>
              <p>Thanks for subscribing to <strong>Brightstar Tech</strong>!</p>
              <p>You’ll now receive updates, news, and exclusive releases.</p>
              <p>Stay bright! ✨<br>— The Brightstar Team</p>
            `,
          },
        }),
      });

      if (!res.ok) {
        console.error("❌ Email send failed:", await res.text());
      } else {
        console.log("✅ Welcome email sent to", args.email);
      }
    } catch (err) {
      console.error("⚠️ Error sending email:", err);
    }
  },
});
