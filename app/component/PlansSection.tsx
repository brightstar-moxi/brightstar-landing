// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const plans = [
//   {
//     name: "Basic",
//     price: "$45",
//     gradient: "from-teal-400 to-cyan-500",
//     description: "Perfect for small one-time projects and quick fixes.",
//     features: [
//       "1-page landing website",

// "Mobile responsive",

// "Basic UI design",

// "Contact form",

// "WhatsApp integration",

// "Basic SEO setup",

// "2 revisions",

// "Delivery: 3 days"
//     ],
//   },
//   {
//     name: "Pro",
//     price: "$99",
//     gradient: "from-blue-400 to-indigo-500",
//     description: "Ideal for startups and growing projects.",
//     features: [
//        " Up to 5 pages",

// "Professional UI design",

// "Mobile responsive",

// "Contact/booking forms",

// "Basic animations (smooth scroll, fade-in)",

// "SEO Optimization (standard)",

// "Google Analytics setup",

// "4 revisions",

// "Delivery: 5–7 days"
//     ],
//   },
//   {
//     name: "Premium",
//     price: "$199",
//     gradient: "from-purple-500 to-pink-500",
//     description: "For businesses needing top-quality work and speed.",
//     features: [
//       "Up to 10 custom-designed pages",

// "Fully responsive + premium animations",

// "Full backend ",

// "Admin dashboard",

// "Database ",

// "Authentication ",

// "Payment integration ",

// "SEO advanced optimization",

// "Performance optimization",

// "6 revisions",

// "Delivery: 10–14 days"
//     ],
//   },
//   {
//     name: "Silver",
//     price: "$299",
//     gradient: "from-amber-400 to-orange-500",
//     description: "Full premium service + maintenance and consulting.",
//     features: [
//       "Everything in Premium, plus:",

// "Custom UX/UI design (professional mockups)",

// "Complex backend features (APIs, dashboards, admin tools)",

// "Fully automated workflows",

// "Email automation setup",

// "Chat system or real-time features",

// "Cloud deployment ",

// "12 revisions",

// "Delivery: 3–4 weeks"
//     ],
//   },
// ];

// export default function PlansSection() {
//   return (
//     <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-6">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
//       >
//          Choose Your Plan
//       </motion.h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
//         {plans.map((plan, index) => (
//          <motion.div
//   key={index}
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: index * 0.2 }}
//   whileHover={{ scale: 1.05 }}
//   className={`relative p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all h-[600px] flex flex-col`}
// >
//   {/* Gradient overlay */}
//   <div
//     className={`absolute inset-0 rounded-2xl opacity-10 bg-gradient-to-r ${plan.gradient}`}
//   />

//   {/* Title, price, description */}
//   <h2 className="text-2xl font-bold mb-2 relative z-10">{plan.name}</h2>
//   <p className="text-4xl font-extrabold mb-4 relative z-10">{plan.price}</p>
//   <p className="text-gray-300 mb-4 relative z-10">{plan.description}</p>

//   {/* Scrollable Feature list */}
//   <ul
//     className="
//       space-y-2 
//       mb-6 
//       relative 
//       z-10 
//       overflow-y-auto 
//       pr-2 
//       flex-1
//       scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-800
//     "
//   >
//     {plan.features.map((feature, i) => (
//       <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
//         ✅ {feature}
//       </li>
//     ))}
//   </ul>

//   {/* Button */}
//   <Link
//     href={`/hire/${plan.name.toLowerCase()}`}
//     className={`relative z-10 w-full block text-center font-semibold py-3 rounded-xl bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition`}
//   >
//     Choose {plan.name}
//   </Link>
// </motion.div>

//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₦10,000",
    description: "Perfect for small projects",
    features: [
      "Basic Features",
      "2 Revisions",
      "5 Days Delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₦30,000",
    description: "Best for growing businesses",
    features: [
      "All Starter Features",
      "Unlimited Revisions",
      "Priority Support",
      "3 Days Delivery",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₦60,000",
    description: "For large scale projects",
    features: [
      "All Professional Features",
      "Dedicated Support",
      "Custom Solutions",
      "24/7 Support",
    ],
    popular: false,
  },
];

export default function PlansSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#030817] py-20 px-6 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

    <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-400">
            Choose a Plan
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Simple, Transparent Pricing
          </h2>

          <div className="mx-auto mt-3 h-px w-48 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -4,
              }}
              className={`relative flex min-h-[44px] flex-col overflow-hidden rounded-xl border p-6 transition-all ${
                plan.popular
                  ? "border-purple-500/60 bg-gradient-to-b from-[#11123b] to-[#081226] shadow-[0_0_35px_rgba(124,58,237,0.12)]"
                  : "border-white/[0.08] bg-[#081226]/90"
              }`}
            >

              {/* Popular glow */}
              {plan.popular && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-600/20 blur-[70px]" />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-2.5 py-1 text-[8px] font-bold text-white">
                  Most Popular
                </span>
              )}

              {/* Plan name */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold">
                  {plan.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="relative z-10 mt-4">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold">
                    {plan.price}
                  </span>

                  {/* <span className="mb-2 text-xs text-slate-500">
                    /project
                  </span> */}
                </div>
              </div>

              {/* Features */}
              <ul className="relative z-10 mt-7 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                   className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={11}
                      className="shrink-0 text-cyan-400"
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href={`/hire/${plan.name.toLowerCase()}`}
                className={`relative z-10 mt-7 flex h-12 w-fullitems-center justify-center rounded-lg border text-sm font-semibold pt-4 transition ${
                  plan.popular
                    ? "border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
                    : "border-white/20 bg-transparent text-white hover:border-purple-400/50 hover:bg-white/[0.04]"
                }`}
              >
                Get Started
              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}