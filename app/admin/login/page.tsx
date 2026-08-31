"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

type Orb = {
  id: number;
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
};

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // ✅ Generate once (NO useEffect, NO re-renders)
  const [orbs] = useState<Orb[]>(() =>
    Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * 600 - 300,
      y: Math.random() * 600 - 300,
      scale: Math.random() + 0.5,
      duration: 6 + Math.random() * 5,
      delay: Math.random() * 4,
    }))
  );

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

      {/* Background */}
      <motion.div
        className="absolute inset-0 opacity-60 blur-3xl"
        animate={{
          backgroundImage: [
            "linear-gradient(to bottom right, #06b6d4, #9333ea, #ec4899)",
            "linear-gradient(to bottom right, #6366f1, #06b6d4, #f43f5e)",
            "linear-gradient(to bottom right, #10b981, #3b82f6, #a855f7)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "400% 400%" }}
      />

      {/* Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute w-3 h-3 bg-cyan-300 rounded-full opacity-50 blur-sm"
          initial={{ x: orb.x, y: orb.y, scale: orb.scale }}
          animate={{ y: [orb.y, orb.y - 40, orb.y], opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
          }}
        />
      ))}

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative z-10 bg-gray-900/80 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-cyan-500/30 w-[90%] max-w-md text-center"
      >
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Admin email"
            className="p-4 rounded-xl bg-black/40 border border-cyan-400/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded-xl bg-black/40 border border-cyan-400/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            disabled={loading}
            type="submit"
            className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-bold py-4 rounded-2xl"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}