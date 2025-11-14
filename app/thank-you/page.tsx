"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ThankYouPage() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 300);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* Confetti Dots */}
      {showConfetti &&
        [...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: i * 0.03,
              type: "spring",
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              background: `hsl(${Math.random() * 360}, 90%, 60%)`,
            }}
          />
        ))}

      {/* Main Success Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="bg-gray-900/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-teal-400/20 max-w-lg text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg"
        >
          <span className="text-4xl">🎉</span>
        </motion.div>

        <h1 className="text-4xl font-extrabold mb-3">
          Thank You!
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          Your request has been successfully submitted.  
          We’ll contact you shortly. 🚀
        </p>

        <Link href="/" className="inline-block w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 shadow-lg text-lg"
          >
            Go Back Home
          </motion.button>
        </Link>
      </motion.div>

      {/* Soft glow effect at bottom */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-teal-500/10 to-transparent blur-xl"></div>
    </div>
  );
}
