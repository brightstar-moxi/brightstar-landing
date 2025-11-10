"use client";

import { useState, useEffect } from "react";
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
  const [orbs, setOrbs] = useState<{ id: number; x: number; y: number; scale: number }[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const orbData = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
        scale: Math.random() + 0.5,
      }));
      setOrbs(orbData);
    }
  }, []);

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

  const handleLogout = async () => {
    await fetch("/api/admin-logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <Toaster position="top-center" />

      {/* 🌈 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-teal-500 via-purple-600 to-blue-600 opacity-70"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "400% 400%" }}
      />

      {/* ✨ Floating Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute w-3 h-3 bg-cyan-300 rounded-full opacity-30"
          initial={{ x: orb.x, y: orb.y, scale: orb.scale }}
          animate={{ y: [orb.y, orb.y - 60, orb.y], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* 💎 3D Tilt Professional Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          rotateX: -3,
          rotateY: 3,
          scale: 1.02,
          boxShadow: "0px 0px 50px rgba(0,255,255,0.25)",
        }}
        className="relative z-10 w-full max-w-2xl bg-[#10151A] rounded-3xl shadow-[0_0_40px_rgba(0,255,255,0.15)] border border-cyan-400/40 p-10 transform-gpu transition-all duration-500"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
          👑 Admin Dashboard
        </h1>

        <form onSubmit={handleSend} className="space-y-5">
          <input
            type="text"
            placeholder="Email subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#0B0F14] border border-cyan-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />

          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
            className="w-full p-4 rounded-xl bg-[#0B0F14] border border-cyan-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: !isSending ? 1.05 : 1 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSending}
            className={`w-full py-4 rounded-xl font-bold text-lg text-white bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300 ${
              isSending
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-[0_0_25px_rgba(45,255,196,0.7)]"
            }`}
          >
            {isSending ? (
              <motion.div
                className="flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
                <span>Sending...</span>
              </motion.div>
            ) : (
              "Send Update 🚀"
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* 🔴 Logout Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,0,0,0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}
        className="relative z-10 mt-8 px-8 py-3 rounded-xl font-bold text-white bg-red-500 hover:bg-red-600 transition-all shadow-lg"
      >
        Logout
      </motion.button>
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
