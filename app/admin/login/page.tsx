// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch("/api/admin-login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     if (res.ok) {
//       toast.success("✅ Login successful!");
//       router.push("/admin");
//     } else {
//       toast.error("❌ Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
//       <Toaster position="top-center" />
//       <h1 className="text-3xl font-bold mb-8">Admin Login</h1>
//       <form
//         onSubmit={handleLogin}
//         className="bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col gap-4"
//       >
//         <input
//           type="email"
//           placeholder="Admin email"
//           className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-teal-500 hover:bg-teal-600 transition-all font-bold py-3 rounded-xl"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orbs, setOrbs] = useState<{ id: number; x: number; y: number; scale: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 🌌 Only generate orbs client-side
  useEffect(() => {
    const orbData = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2,
      scale: Math.random() + 0.5,
    }));
    setOrbs(orbData);
  }, []);

  // 🚀 Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      toast.success("✅ Login successful!");
      setTimeout(() => router.push("/admin"), 1200);
    } else {
      toast.error("❌ Invalid credentials");
    }

    setLoading(false);
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-black text-white">
      <Toaster position="top-center" />

      {/* 🌈 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-purple-500 via-cyan-400 to-pink-500 opacity-60 blur-3xl"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          backgroundImage: [
            "linear-gradient(to bottom right, #06b6d4, #9333ea, #ec4899)",
            "linear-gradient(to bottom right, #6366f1, #06b6d4, #f43f5e)",
            "linear-gradient(to bottom right, #10b981, #3b82f6, #a855f7)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "400% 400%" }}
      />

      {/* ✨ Floating Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute w-3 h-3 bg-cyan-300 rounded-full opacity-50 blur-sm"
          initial={{ x: orb.x, y: orb.y, scale: orb.scale }}
          animate={{ y: [orb.y, orb.y - 40, orb.y], opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* 💎 Floating (Breathing) Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0], // subtle breathing motion
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 bg-gray-900/80 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-cyan-500/30 w-[90%] max-w-md text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mb-6 bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          Admin Login
        </motion.h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
            type="email"
            placeholder="Admin email"
            className="p-4 rounded-xl bg-black/40 border border-cyan-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
            type="password"
            placeholder="Password"
            className="p-4 rounded-xl bg-black/40 border border-cyan-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* ⚡ Animated Login Button */}
          <motion.button
            whileHover={{
              scale: !loading ? 1.05 : 1,
              boxShadow: !loading ? "0 0 30px rgba(34,211,238,0.8)" : "none",
            }}
            whileTap={!loading ? { scale: 0.95 } : {}}
            disabled={loading}
            type="submit"
            className={`relative overflow-hidden bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-extrabold py-4 rounded-2xl transition-all duration-300 ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-[0_0_40px_rgba(45,255,196,0.8)]"
            }`}
          >
            {loading ? (
              <motion.div
                className="flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
                <span className="text-white text-lg font-semibold">
                  Logging in...
                </span>
              </motion.div>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
