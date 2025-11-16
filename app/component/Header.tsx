"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-pink-500/80 backdrop-blur-xl shadow-lg border-b border-white/10 py-3"
          : "bg-black py-5"
      }`}
    >
      <div className="flex items-center justify-between px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <Image
            src="/bright_enhanced(2).png"
            alt="Brightstar Tech Logo"
            width={42}
            height={42}
            className="rounded-full shadow-lg"
            priority
          />
          <h1 className="text-xl font-bold tracking-wide text-white">
            Brightstar <span className="text-teal-400">Tech</span>
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-8 text-sm font-medium text-white">
          <a className="hover:text-teal-400 transition-colors" href="#ebooks">Ebooks</a>
          <a className="hover:text-teal-400 transition-colors" href="#services">Services</a>
          <a className="hover:text-teal-400 transition-colors" href="#testimonials">Testimonials</a>
          <a className="hover:text-teal-400 transition-colors" href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="text-teal-400" size={26} /> : <Menu className="text-white" size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4 text-amber-50">
              <a onClick={() => setMenuOpen(false)} className="hover:text-teal-400" href="#ebooks">Ebooks</a>
              <a onClick={() => setMenuOpen(false)} className="hover:text-teal-400" href="#services">Services</a>
              <a onClick={() => setMenuOpen(false)} className="hover:text-teal-400" href="#testimonials">Testimonials</a>
              <a onClick={() => setMenuOpen(false)} className="hover:text-teal-400" href="#contact">Contact</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
