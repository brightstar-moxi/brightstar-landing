"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "$49",
    gradient: "from-teal-400 to-cyan-500",
    description: "Perfect for small one-time projects and quick fixes.",
    features: [
      "1-page design or task",
      "Email support",
      "Delivery in 3 days",
    ],
  },
  {
    name: "Pro",
    price: "$99",
    gradient: "from-blue-400 to-indigo-500",
    description: "Ideal for startups and growing projects.",
    features: [
      "Up to 3 pages or modules",
      "Priority email support",
      "Delivery in 5 days",
    ],
  },
  {
    name: "Premium",
    price: "$199",
    gradient: "from-purple-500 to-pink-500",
    description: "For businesses needing top-quality work and speed.",
    features: [
      "Up to 7 pages / full project",
      "24/7 support",
      "Delivery in 7 days",
    ],
  },
  {
    name: "Silver",
    price: "$299",
    gradient: "from-amber-400 to-orange-500",
    description: "Full premium service + maintenance and consulting.",
    features: [
      "Unlimited revisions",
      "Monthly maintenance",
      "Dedicated support",
    ],
  },
];

export default function PlansSection() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
      >
         Choose Your Plan
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`relative p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all`}
          >
            <div
              className={`absolute inset-0 rounded-2xl opacity-10 bg-gradient-to-r ${plan.gradient}`}
            />
            <h2 className="text-2xl font-bold mb-2 relative z-10">{plan.name}</h2>
            <p className="text-4xl font-extrabold mb-4 relative z-10">{plan.price}</p>
            <p className="text-gray-300 mb-6 relative z-10">{plan.description}</p>

            <ul className="space-y-2 mb-6 relative z-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`/hire/${plan.name.toLowerCase()}`}
              className={`relative z-10 w-full block text-center font-semibold py-3 rounded-xl bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition`}
            >
              Choose {plan.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
