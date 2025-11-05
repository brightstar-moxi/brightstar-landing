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


"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import SubscribeForm from "./SubscribeForm";

function RotatingSphere() {
  return (
    <mesh rotation={[0.3, 0.2, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#14b8a6" wireframe />
    </mesh>
  );
}

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
      setStatus("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 via-indigo-900 to-blue-900 text-white py-16 px-6"
    >
      {/* --- 3D Background --- */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <RotatingSphere />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>

      {/* --- Foreground content --- */}
      <div className="relative z-10 max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-teal-400 mb-4 text-center"
        >
          Get in Touch
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-200 text-center mb-6"
        >
          Have a question or want to collaborate? Send us a message below.
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border border-teal-500/50 bg-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-300"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border border-teal-500/50 bg-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-300"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full border border-teal-500/50 bg-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-300"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </motion.button>

          {status && (
            <p className="text-sm text-center text-gray-200 mt-2">{status}</p>
          )}
        </motion.form>
      </div>

      <div className="relative z-10 mt-10">
        <SubscribeForm />
      </div>
    </section>
  );
}
