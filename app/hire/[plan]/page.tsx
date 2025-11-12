"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function HireForm() {
  const { plan } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/sendHireEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan }),
      });

      if (res.ok) {
        toast.success("✅ Successfully submitted! You’ll receive a reply soon.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Try again!");
      }
    } catch (err) {
      toast.error("⚠️ Error sending form!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full bg-gray-900 p-8 rounded-2xl shadow-2xl border border-teal-500/30"
      >
   <motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-6"
>
  <span className="block text-4xl font-extrabold text-white mb-2">
     HIRE ME
  </span>
  <span className="block text-xl font-semibold text-teal-400 tracking-wide">
    {plan?.toString().toUpperCase()} PLAN
  </span>
</motion.h2>


        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" 
          placeholder="Your Name" 
          value={form.name} 
          onChange={handleChange} 
          className="w-full p-3 rounded-lg bg-gray-800 text-white" 
          required />
          <input name="email" 
          type="email" 
          placeholder="Your Email" 
          value={form.email} 
          onChange={handleChange} 
          className="w-full p-3 rounded-lg bg-gray-800 text-white" required />
          <input name="phone" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white" />
          <textarea name="message" placeholder="Tell us about your project..." rows={5} value={form.message} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white" required />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 transition-all shadow-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-[0_0_20px_rgba(45,255,196,0.5)]"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Form ✉️"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
