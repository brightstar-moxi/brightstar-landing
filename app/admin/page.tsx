"use client";

import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const sendUpdateEmail = useAction(api.sendUpdateEmail.sendUpdateEmail);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!subject || !message) {
      toast.error("Please enter both a subject and message!");
      return;
    }

    setIsSending(true);
    try {
      const result = await sendUpdateEmail({ subject, message });
      toast.success(`✅ Sent update to ${result.count} subscribers!`);
      setSubject("");
      setMessage("");
    } catch (err) {
      toast.error("❌ Failed to send updates. Try again!");
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };
const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin-logout", { method: "POST" });
    router.push("/admin/login");
  };
  return (
 <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">👑 Admin Dashboard</h1>
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-6">
      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-gray-900 rounded-2xl p-8 shadow-2xl border border-teal-500/30"
      >
        <h1 className="text-3xl font-extrabold text-white text-center mb-6">
          ✉️ Send Update to Subscribers
        </h1>

        <form onSubmit={handleSend} className="space-y-4">
          <input
            type="text"
            placeholder="Email subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-teal-500 outline-none"
          />

          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-teal-500 outline-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSending}
            className={`w-full py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 transition-all shadow-lg ${
              isSending ? "opacity-50 cursor-not-allowed" : "hover:shadow-[0_0_30px_rgba(45,255,196,0.7)]"
            }`}
          >
            {isSending ? "Sending..." : "Send Update 🚀"}
          </motion.button>
        </form>
      </motion.div>
  <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold"
      >
        Logout
      </button>
    </div>
</div>
  );
}



// "use client";

// import { useRouter } from "next/navigation";

// export default function AdminDashboard() {
//   const router = useRouter();

//   const handleLogout = async () => {
//     await fetch("/api/admin-logout", { method: "POST" });
//     router.push("/admin/login");
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-4xl font-bold mb-6">👑 Admin Dashboard</h1>
//       <p>Welcome, Admin! You can now manage updates and subscribers.</p>
//       <button
//         onClick={handleLogout}
//         className="mt-6 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
