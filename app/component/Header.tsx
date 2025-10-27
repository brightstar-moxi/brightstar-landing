"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* ✅ Logo */}
        <div className="flex items-center gap-2">
          {/* Use absolute path from /public folder */}
          <Image
            src="/bright_enhanced(2).png" // ✅ Must be in /public/
            alt="Brightstar Tech Logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-xl font-semibold">Brightstar Tech</h1>
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden sm:flex gap-6">
          <a href="#ebooks" className="hover:text-teal-400 transition-colors">
            Ebooks
          </a>
          <a href="#testimonials" className="hover:text-teal-400 transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">
            Contact
          </a>
        </nav>
      </div>

      {/* ✅ Mobile Menu (dropdown) */}
      {menuOpen && (
        <nav className="sm:hidden bg-black border-t border-gray-800 flex flex-col gap-4 px-6 py-4">
          <a
            href="#ebooks"
            className="hover:text-teal-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Ebooks
          </a>
          <a
            href="#testimonials"
            className="hover:text-teal-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="hover:text-teal-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
