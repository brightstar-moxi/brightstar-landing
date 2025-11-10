"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      toast.success("✅ Login successful!");
      router.push("/admin");
    } else {
      toast.error("❌ Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold mb-8">Admin Login</h1>
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="Admin email"
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 transition-all font-bold py-3 rounded-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
}
