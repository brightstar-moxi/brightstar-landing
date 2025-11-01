"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import SubscribeForm from "./SubscribeForm";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_rzefjsw", // 🔹 Replace this with your EmailJS Service ID
        "template_zhv71uo", // 🔹 Replace with your Template ID
        form.current,
        "Fs764_0eKc5hqNHEo" // 🔹 Replace with your EmailJS Public Key
      ) //emailjs.send("service_rzefjsw","template_zhv71uo");
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-linear-to-b from-blue-900 to-indigo-900 text-white py-16 px-6 text-center"
    >
      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
      <p className="max-w-md mx-auto mb-8 text-gray-200">
        Have a question or want to collaborate? Send us a message below.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto bg-white text-gray-800 rounded-xl shadow-md p-6 space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Messages"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-semibold py-2 rounded-md hover:bg-teal-400 transition"
        >
          Send Message
        </button>

        {status && <p className="text-sm text-center text-gray-700">{status}</p>}
      </form>
      <SubscribeForm/>
    </section>
  );
}
