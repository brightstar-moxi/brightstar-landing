"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "$45",
    gradient: "from-teal-400 to-cyan-500",
    description: "Perfect for small one-time projects and quick fixes.",
    features: [
      "1-page landing website",

"Mobile responsive",

"Basic UI design",

"Contact form",

"WhatsApp integration",

"Basic SEO setup",

"2 revisions",

"Delivery: 3 days"
    ],
  },
  {
    name: "Pro",
    price: "$99",
    gradient: "from-blue-400 to-indigo-500",
    description: "Ideal for startups and growing projects.",
    features: [
       " Up to 5 pages",

"Professional UI design",

"Mobile responsive",

"Contact/booking forms",

"Basic animations (smooth scroll, fade-in)",

"SEO Optimization (standard)",

"Google Analytics setup",

"4 revisions",

"Delivery: 5–7 days"
    ],
  },
  {
    name: "Premium",
    price: "$199",
    gradient: "from-purple-500 to-pink-500",
    description: "For businesses needing top-quality work and speed.",
    features: [
      "Up to 10 custom-designed pages",

"Fully responsive + premium animations",

"Full backend ",

"Admin dashboard",

"Database ",

"Authentication ",

"Payment integration ",

"SEO advanced optimization",

"Performance optimization",

"6 revisions",

"Delivery: 10–14 days"
    ],
  },
  {
    name: "Silver",
    price: "$299",
    gradient: "from-amber-400 to-orange-500",
    description: "Full premium service + maintenance and consulting.",
    features: [
      "Everything in Premium, plus:",

"Custom UX/UI design (professional mockups)",

"Complex backend features (APIs, dashboards, admin tools)",

"Fully automated workflows",

"Email automation setup",

"Chat system or real-time features",

"Cloud deployment ",

"12 revisions",

"Delivery: 3–4 weeks"
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
  className={`relative p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all h-[600px] flex flex-col`}
>
  {/* Gradient overlay */}
  <div
    className={`absolute inset-0 rounded-2xl opacity-10 bg-gradient-to-r ${plan.gradient}`}
  />

  {/* Title, price, description */}
  <h2 className="text-2xl font-bold mb-2 relative z-10">{plan.name}</h2>
  <p className="text-4xl font-extrabold mb-4 relative z-10">{plan.price}</p>
  <p className="text-gray-300 mb-4 relative z-10">{plan.description}</p>

  {/* Scrollable Feature list */}
  <ul
    className="
      space-y-2 
      mb-6 
      relative 
      z-10 
      overflow-y-auto 
      pr-2 
      flex-1
      scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-800
    "
  >
    {plan.features.map((feature, i) => (
      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
        ✅ {feature}
      </li>
    ))}
  </ul>

  {/* Button */}
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
