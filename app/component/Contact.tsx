// "use client";

// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import SubscribeForm from "./SubscribeForm";

// export default function Contact() {
//   const form = useRef<HTMLFormElement | null>(null);
//   const [status, setStatus] = useState("");

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.current) return;

//     setStatus("Sending...");

//     emailjs
//       .sendForm(
//         "service_rzefjsw", // 🔹 Replace this with your EmailJS Service ID
//         "template_zhv71uo", // 🔹 Replace with your Template ID
//         form.current,
//         "Fs764_0eKc5hqNHEo" // 🔹 Replace with your EmailJS Public Key
//       ) //emailjs.send("service_rzefjsw","template_zhv71uo");
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           form.current?.reset();
//         },
//         (error) => {
//           console.error(error);
//           setStatus("Failed to send message. Try again later.");
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="bg-linear-to-b from-blue-900 to-indigo-900 text-white py-16 px-6 text-center"
//     >
//       <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
//       <p className="max-w-md mx-auto mb-8 text-gray-200">
//         Have a question or want to collaborate? Send us a message below.
//       </p>

//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="max-w-lg mx-auto bg-white text-gray-800 rounded-xl shadow-md p-6 space-y-4"
//       >
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Your Name"
//           required
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <input
//           type="email"
//           name="user_email"
//           placeholder="Your Email"
//           required
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <textarea
//           name="message"
//           rows={5}
//           placeholder="Your Messages"
//           required
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full bg-teal-500 text-white font-semibold py-2 rounded-md hover:bg-teal-400 transition"
//         >
//           Send Message
//         </button>

//         {status && <p className="text-sm text-center text-gray-700">{status}</p>}
//       </form>
//       <SubscribeForm/>
//     </section>
//   );
// }






// "use client";

// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import SubscribeForm from "./SubscribeForm";

// export default function Contact() {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   const [status, setStatus] = useState("");

//   const sendEmail = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     setStatus("Sending...");

//     try {
//       await emailjs.sendForm(
//         "service_rzefjsw",     // ✅ Your EmailJS Service ID
//         "template_zhv71uo",    // ✅ Your EmailJS Template ID
//         formRef.current,
//         "Fs764_0eKc5hqNHEo"    // ✅ Your EmailJS Public Key
//       );

//       setStatus("✅ Message sent successfully!");
//       formRef.current.reset();
//     } catch (error) {
//       console.error("Email sending error:", error);
//       setStatus("❌ Failed to send message. Please try again later.");
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white py-16 px-6 text-center"
//     >
//       <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
//       <p className="max-w-md mx-auto mb-8 text-gray-200">
//         Have a question or want to collaborate? Send us a message below.
//       </p>

//       <form
//         ref={formRef}
//         onSubmit={sendEmail}
//         className="max-w-lg mx-auto bg-white text-gray-800 rounded-xl shadow-md p-6 space-y-4"
//       >
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Your Name"
//           required
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />

//         <input
//           type="email"
//           name="user_email"
//           placeholder="Your Email"
//           required
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />

//         <textarea
//           name="message"
//           rows={5}
//           placeholder="Your Message"
//           required
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-teal-500 text-white font-semibold py-2 rounded-md hover:bg-teal-400 transition"
//         >
//           Send Message
//         </button>

//         {status && <p className="text-sm text-center text-gray-700 mt-2">{status}</p>}
//       </form>

//       <SubscribeForm />
//     </section>
//   );
// }


// "use client";

// import { useRef, useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";
// import SubscribeForm from "./SubscribeForm";

// function RotatingSphere() {
//   return (
//     <mesh rotation={[0.3, 0.2, 0]}>
//       <sphereGeometry args={[1.5, 32, 32]} />
//       <meshStandardMaterial color="#14b8a6" wireframe />
//     </mesh>
//   );
// }

// export default function Contact() {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   const [status, setStatus] = useState("");

//   const sendEmail = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;
//     setStatus("Sending...");

//     try {
//       await emailjs.sendForm(
//         "service_rzefjsw",
//         "template_zhv71uo",
//         formRef.current,
//         "Fs764_0eKc5hqNHEo"
//       );
//       setStatus("✅ Message sent successfully!");
//       formRef.current.reset();
//     } catch (error) {
//       console.error("Email sending error:", error);
//       setStatus("❌ Failed to send message. Please try again later.");
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 via-indigo-900 to-blue-900 text-white py-16 px-6"
//     >
//       {/* --- 3D Background --- */}
//       <div className="absolute inset-0 z-0">
//         <Canvas camera={{ position: [0, 0, 4] }}>
//           <ambientLight intensity={0.6} />
//           <directionalLight position={[5, 5, 5]} />
//           <Suspense fallback={null}>
//             <RotatingSphere />
//           </Suspense>
//           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
//         </Canvas>
//       </div>

//       {/* --- Foreground content --- */}
//       <div className="relative z-10 max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
//         <motion.h3
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold text-teal-400 mb-4 text-center"
//         >
//           Get in Touch
//         </motion.h3>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-gray-200 text-center mb-6"
//         >
//           Have a question or want to collaborate? Send us a message below.
//         </motion.p>

//         <motion.form
//           ref={formRef}
//           onSubmit={sendEmail}
//           className="space-y-4"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="w-full border border-teal-500/50 bg-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-300"
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="w-full border border-teal-500/50 bg-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-300"
//           />
//           <textarea
//             name="message"
//             rows={5}
//             placeholder="Your Message"
//             required
//             className="w-full border border-teal-500/50 bg-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-300"
//           ></textarea>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold py-2 rounded-md transition"
//           >
//             Send Message
//           </motion.button>

//           {status && (
//             <p className="text-sm text-center text-gray-200 mt-2">{status}</p>
//           )}
//         </motion.form>
//       </div>

//       <div className="relative z-10 mt-10">
//         <SubscribeForm />
//       </div>
//     </section>
//   );
// }



"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  Rocket,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";
import SubscribeForm from "./SubscribeForm";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        "service_rzefjsw",
        "template_zhv71uo",
        formRef.current,
        "Fs764_0eKc5hqNHEo"
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020817] px-6 py-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================================= */}
        {/* TOP CTA */}
        {/* ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 shadow-[0_20px_70px_rgba(79,70,229,0.25)] md:p-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* CTA text */}
            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                <Rocket size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Ready to Grow Your Business?
                </h2>

                <p className="mt-1 text-sm text-blue-100 md:text-base">
                  Let's build something amazing together.
                </p>
              </div>

            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">

              <a
                href="#services"
                className="rounded-xl bg-white px-7 py-3 text-center text-sm font-semibold text-indigo-700 transition hover:scale-105"
              >
                Start a Project
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-3 text-center text-sm font-semibold backdrop-blur-md transition hover:bg-white/20"
              >
                Book a Consultation
              </a>

            </div>
          </div>
        </motion.div>

        {/* ================================= */}
        {/* THREE COLUMN CONTACT AREA */}
        {/* ================================= */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* ================================= */}
          {/* CONTACT INFORMATION */}
          {/* ================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#071126] p-7"
          >

            {/* subtle glow */}
            <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl" />

            <div className="relative z-10">

              <h3 className="text-2xl font-bold">
                Let's Work Together
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                Have a project in mind? Send me a message and let's get
                started.
              </p>

              <div className="mt-8 space-y-6">

                {/* Email */}
                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                    <Mail size={19} className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Email
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      brightstartech@gmail.com
                    </p>
                  </div>

                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10">
                    <MessageCircle
                      size={19}
                      className="text-green-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      +234 801 234 5678
                    </p>
                  </div>

                </div>

                {/* Location */}
                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                    <MapPin size={19} className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Location
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Ekiti State, Nigeria
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

          {/* ================================= */}
          {/* MESSAGE FORM */}
          {/* ================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-h-[430px] rounded-2xl border border-purple-500/20 bg-[#071126] p-7 shadow-[0_0_50px_rgba(99,102,241,0.08)]"
          >

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-4"
            >

              <div className="grid gap-3 sm:grid-cols-2">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="h-12 w-full rounded-lg border border-white/10 bg-[#050d1e] px-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-purple-500/60"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="h-12 w-full rounded-lg border border-white/10 bg-[#050d1e] px-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-purple-500/60"
                />

              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="h-12 w-full rounded-lg border border-white/10 bg-[#050d1e] px-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-purple-500/60"
              />

              <textarea
                name="message"
                rows={7}
                placeholder="Your Message"
                required
                className="w-full resize-none rounded-lg border border-white/10 bg-[#050d1e] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-purple-500/60"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold transition hover:opacity-90"
              >
                <Send size={16} />
                Send Message
              </motion.button>

              {status && (
                <p className="text-center text-xs text-slate-400">
                  {status}
                </p>
              )}

            </form>

          </motion.div>

          {/* ================================= */}
          {/* NEWSLETTER */}
          {/* ================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#071126] p-7"
          >

            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative z-10">

              <h3 className="text-2xl font-bold">
                Join 5,000+ Professionals
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Subscribe to get updates on new eBooks, tutorials,
                tools and special offers.
              </p>

              <div className="mt-8">
                <SubscribeForm />
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}