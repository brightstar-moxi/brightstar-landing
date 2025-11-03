// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function SubscribeForm() {
//   // ✅ Now this works
//   const addSubscriber = useMutation(api.addSubscriber.addSubscriber);
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = await addSubscriber({ email });

//     if (result.status === "already_subscribed") {
//       alert("You're already subscribed!");
//     } else {
//       alert("Subscribed successfully! THANK YOU");
//     }

//     setEmail("");
//   };

//   return (
//   <form
//       onSubmit={handleSubmit}
//       className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
//     >
//       {/* Email Input */}
//       <motion.input
//         whileFocus={{ scale: 1.05 }}
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="border-2 border-teal-400 bg-black/20 text-white placeholder-gray-400 p-4 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
//       />

//       {/* Animated Neon Button */}
//       <motion.button
//         type="submit"
//         whileHover={{
//           scale: 1.1,
//           boxShadow: "0 0 20px rgba(45,255,196,0.7)",
//         }}
//         whileTap={{
//           scale: 0.95,
//           boxShadow: "0 0 30px rgba(45,255,196,1)",
//         }}
//         animate={{
//           rotate: isClicked ? [0, -2, 2, -2, 2, 0] : 0,
//           transition: { duration: 0.4 },
//         }}
//         className={`relative bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-teal-500/40 transition-all duration-300 ${
//           isClicked
//             ? "ring-4 ring-cyan-400 shadow-[0_0_30px_rgba(45,255,196,0.7)]"
//             : "hover:ring-2 hover:ring-cyan-300"
//         }`}
//       >
//         Subscribe
//         {/* Glowing background pulse */}
//         <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-50 blur-xl animate-pulse -z-10"></span>
//       </motion.button>
//     </form>
//   );
// }


// "use client";

// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function SubscribeForm() {
//   const addSubscriber = useMutation(api.addSubscriber.addSubscriber);
//   const [email, setEmail] = useState("");
//   const [isClicked, setIsClicked] = useState(false); // ✅ added missing state

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsClicked(true);

//     try {
//       const result = await addSubscriber({ email });

//       if (result.status === "already_subscribed") {
//         alert("You're already subscribed!");
//       } else {
//         alert("Subscribed successfully! THANK YOU 🙌");
//       }
//     } catch (error) {
//       console.error("Error subscribing:", error);
//       alert("Something went wrong. Please try again.");
//     }

//     setTimeout(() => setIsClicked(false), 400);
//     setEmail("");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
//     >
//       {/* Email Input */}
//       <motion.input
//         whileFocus={{ scale: 1.05 }}
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="border-2 border-teal-400 bg-black/20 text-white placeholder-gray-400 p-4 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
//       />

//       {/* Animated Neon Button */}
//       <motion.button
//         type="submit"
//         whileHover={{
//           scale: 1.1,
//           boxShadow: "0 0 20px rgba(45,255,196,0.7)",
//         }}
//         whileTap={{
//           scale: 0.95,
//           boxShadow: "0 0 30px rgba(45,255,196,1)",
//         }}
//         animate={{
//           rotate: isClicked ? [0, -2, 2, -2, 2, 0] : 0,
//           transition: { duration: 0.4 },
//         }}
//         className={`relative bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-teal-500/40 transition-all duration-300 ${
//           isClicked
//             ? "ring-4 ring-cyan-400 shadow-[0_0_30px_rgba(45,255,196,0.7)]"
//             : "hover:ring-2 hover:ring-cyan-300"
//         }`}
//       >
//         Subscribe
//         {/* Glowing background pulse */}
//         <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-50 blur-xl animate-pulse -z-10"></span>
//       </motion.button>
//     </form>
//   );
// }


// "use client";

// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// export default function SubscribeForm() {
//   const addSubscriber = useMutation(api.addSubscriber.addSubscriber);
//   const [email, setEmail] = useState("");
//   const [isClicked, setIsClicked] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsClicked(true);

//     try {
//       const result = await addSubscriber({ email });

//       if (result.status === "already_subscribed") {
//         toast.error("You're already subscribed!", {
//           style: { background: "#333", color: "#fff" },
//         });
//       } else {
//         toast.success("Subscribed successfully! 🎉", {
//           style: { background: "#0f766e", color: "#fff" },
//         });
//       }
//     } catch (err) {
//       toast.error("Something went wrong. Try again later!");
//     }

//     setIsClicked(false);
//     setEmail("");
//   };

//   return (
//     <>
//       {/* Toast notifications */}
//       <Toaster position="top-center" reverseOrder={false} />

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
//       >
//         {/* Email Input */}
//         <motion.input
//           whileFocus={{ scale: 1.05 }}
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="border-2 border-teal-400 bg-black/30 text-white placeholder-gray-400 p-4 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
//         />

//         {/* Animated Neon Button */}
//         <motion.button
//           type="submit"
//           whileHover={{
//             scale: 1.1,
//             boxShadow: "0 0 25px rgba(45,255,196,0.8)",
//           }}
//           whileTap={{
//             scale: 0.95,
//             boxShadow: "0 0 30px rgba(45,255,196,1)",
//           }}
//           animate={{
//             rotate: isClicked ? [0, -3, 3, -3, 3, 0] : 0,
//             transition: { duration: 0.4 },
//           }}
//           className={`relative text-white font-bold text-lg px-10 py-5 rounded-3xl shadow-xl transition-all duration-300 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 hover:shadow-[0_0_40px_rgba(45,255,196,0.6)] ${
//             isClicked
//               ? "ring-4 ring-cyan-400 shadow-[0_0_40px_rgba(45,255,196,0.9)]"
//               : "hover:ring-2 hover:ring-cyan-300"
//           }`}
//         >
//           Subscribe
//           {/* Glowing background pulse */}
//           <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-40 blur-xl animate-pulse -z-10"></span>
//         </motion.button>
//       </form>
//     </>
//   );
// }


// "use client";

// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// export default function SubscribeForm() {
//   const addSubscriber = useMutation(api.addSubscriber.addSubscriber);
//   const [email, setEmail] = useState("");
//   const [isClicked, setIsClicked] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsClicked(true);

//     try {
//       const result = await addSubscriber({ email });

//       if (result.status === "already_subscribed") {
//         toast.error("You're already subscribed!", {
//           style: {
//             background: "#1f2937",
//             color: "#fff",
//             border: "2px solid #06b6d4",
//             fontSize: "1.1rem",
//           },
//         });
//       } else {
//         toast.success("Subscribed successfully! 🎉", {
//           style: {
//             background: "#0f766e",
//             color: "#fff",
//             border: "2px solid #06b6d4",
//             fontSize: "1.1rem",
//           },
//         });
//       }
//     } catch (err) {
//       toast.error("Something went wrong. Try again later!", {
//         style: {
//           background: "#7f1d1d",
//           color: "#fff",
//           border: "2px solid #f87171",
//           fontSize: "1.1rem",
//         },
//       });
//     }

//     setIsClicked(false);
//     setEmail("");
//   };

//   return (
//     <>
//       {/* Toast notifications — centered in screen */}
//       <Toaster
//         position="top-center"
//         containerStyle={{
//           top: "50%",
//           transform: "translateY(-50%)",
//         }}
//         toastOptions={{
//           style: {
//             borderRadius: "12px",
//             background: "#111827",
//             color: "#fff",
//             boxShadow: "0 0 25px rgba(45,255,196,0.5)",
//           },
//         }}
//       />

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
//       >
//         {/* Email Input */}
//         <motion.input
//           whileFocus={{ scale: 1.05 }}
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="border-2 border-teal-400 bg-black/30 text-white placeholder-gray-400 p-4 rounded-xl w-80 sm:w-96 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 shadow-inner"
//         />

//         {/* Animated Neon Button */}
//         <motion.button
//           type="submit"
//           whileHover={{
//             scale: 1.1,
//             boxShadow: "0 0 40px rgba(45,255,196,0.8)",
//           }}
//           whileTap={{
//             scale: 0.95,
//             boxShadow: "0 0 50px rgba(45,255,196,1)",
//           }}
//           animate={{
//             rotate: isClicked ? [0, -3, 3, -3, 3, 0] : 0,
//             transition: { duration: 0.4 },
//           }}
//           className={`relative text-white font-extrabold text-xl px-12 py-6 rounded-3xl transition-all duration-300 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 hover:shadow-[0_0_50px_rgba(45,255,196,0.8)] ${
//             isClicked
//               ? "ring-4 ring-cyan-400 shadow-[0_0_50px_rgba(45,255,196,1)]"
//               : "hover:ring-2 hover:ring-cyan-300"
//           }`}
//         >
//           Subscribe
//           {/* Glowing background pulse */}
//           <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-40 blur-2xl animate-pulse -z-10"></span>
//         </motion.button>
//       </form>
//     </>
//   );
// }






"use client";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function SubscribeForm() {
  const addSubscriber = useMutation(api.addSubscriber.addSubscriber);
  const [email, setEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsClicked(true);

    try {
      const result = await addSubscriber({ email });

      if (result.status === "already_subscribed") {
        toast.error("You're already subscribed!", {
          style: {
            background: "#1f2937",
            color: "#fff",
            border: "2px solid #06b6d4",
            fontSize: "1.1rem",
          },
        });
      } else {
        toast.success("Subscribed successfully! 🎉", {
          style: {
            background: "#0f766e",
            color: "#fff",
            border: "2px solid #06b6d4",
            fontSize: "1.1rem",
          },
        });

        // ✅ Send welcome email directly from frontend (browser)
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            template_params: {
              to_email: email,
              subject: "Welcome to Brightstar Tech 🌟",
              // message: `
              //   <h2>Hi there 👋</h2>
              //   <p>Thank you for subscribing to <strong>Brightstar Tech</strong>!</p>
              //   <p>We're thrilled to have you onboard — you'll now receive updates, news, and exclusive releases.</p>
              //   <p>Stay bright! ✨<br>— The Brightstar Team</p>
              // `,
            },
          }),
        });
      }
    } catch (err) {
      console.error("Error sending email:", err);
      toast.error("Something went wrong. Try again later!", {
        style: {
          background: "#7f1d1d",
          color: "#fff",
          border: "2px solid #f87171",
          fontSize: "1.1rem",
        },
      });
    }

    setIsClicked(false);
    setEmail("");
  };

  return (
    <>
      {/* Toast notifications centered on screen */}
      <Toaster
        position="top-center"
        containerStyle={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        toastOptions={{
          style: {
            borderRadius: "12px",
            background: "#111827",
            color: "#fff",
            boxShadow: "0 0 25px rgba(45,255,196,0.5)",
          },
        }}
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
      >
        {/* Email Input */}
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-2 border-teal-400 bg-black/30 text-white placeholder-gray-400 p-4 rounded-xl w-80 sm:w-96 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 shadow-inner"
        />

        {/* Animated Neon Button */}
        <motion.button
          type="submit"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 40px rgba(45,255,196,0.8)",
          }}
          whileTap={{
            scale: 0.95,
            boxShadow: "0 0 50px rgba(45,255,196,1)",
          }}
          animate={{
            rotate: isClicked ? [0, -3, 3, -3, 3, 0] : 0,
            transition: { duration: 0.4 },
          }}
          className={`relative text-white font-extrabold text-xl px-12 py-6 rounded-3xl transition-all duration-300 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 hover:shadow-[0_0_50px_rgba(45,255,196,0.8)] ${
            isClicked
              ? "ring-4 ring-cyan-400 shadow-[0_0_50px_rgba(45,255,196,1)]"
              : "hover:ring-2 hover:ring-cyan-300"
          }`}
        >
          Subscribe
          {/* Glowing pulse background */}
          <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-40 blur-2xl animate-pulse -z-10"></span>
        </motion.button>
      </form>
    </>
  );
}
