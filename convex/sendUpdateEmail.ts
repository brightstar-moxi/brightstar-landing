import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const sendUpdateEmail = action({
  args: {
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args): Promise<{ status: string; count: number }> => {
    // ✅ use query, not mutation
    const subscribers = await ctx.runQuery(api.getSubscribers.getSubscribers);

    let successCount = 0;

    for (const s of subscribers) {
      try {
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            accessToken: process.env.EMAILJS_PRIVATE_KEY,
            template_params: {
              to_email: s.email,
              subject: args.subject,
              message: args.message,
            },
            
          }),
          
        });
console.log("📤 Sending email to", s.email);
console.log("📦 Body:", JSON.stringify({
  service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
}));
const text = await res.text();
console.log("📬 EmailJS Response:", res.status, text);
        if (res.ok) successCount++;
      } catch (err) {
        console.error(`❌ Failed for ${s.email}:`, err);
      }
    }

    return { status: "sent", count: successCount };
  },
});
