// "use client";

// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Detect scroll to change header style
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-pink-500/80 backdrop-blur-xl shadow-lg border-b border-white/10 py-3"
//           : "bg-black py-5"
//       }`}
//     >
//       <div className="flex items-center justify-between px-6">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.4 }}
//           className="flex items-center gap-2"
//         >
//           <Image
//             src="/bright_enhanced(2).png"
//             alt="Brightstar Tech Logo"
//             width={42}
//             height={42}
//             className="rounded-full shadow-lg"
//             priority
//           />
//           <h1 className="text-xl font-bold tracking-wide text-white">
//             Brightstar <span className="text-teal-400">Tech</span>
//           </h1>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden sm:flex gap-8 text-sm font-medium text-white">
//           <a className="hover:text-teal-400 transition-colors" href="#ebooks">Ebooks</a>
//           <a className="hover:text-teal-400 transition-colors" href="#services">Services</a>
//           <a className="hover:text-teal-400 transition-colors" href="#testimonials">Testimonials</a>
//           <a className="hover:text-teal-400 transition-colors" href="#contact">Contact</a>
//         </nav>

//         {/* Mobile Menu Icon */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="sm:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md"
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X className="text-teal-400" size={26} /> : <Menu className="text-white" size={26} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.nav
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="sm:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 overflow-hidden"
//           >
//             <div className="flex flex-col gap-4 px-6 py-4 text-amber-50">
//               <a onClick={() => setMenuOpen(false)} className="hover:text-teal-400" href="#ebooks">Ebooks</a>
//               <a onClick={() => setMenuOpen(false)} className="hover:text-teal-400" href="#services">Services</a>
//               <a onClick={() => setMenuOpen(false)} className="hover:text-teal-400" href="#testimonials">Testimonials</a>
//               <a onClick={() => setMenuOpen(false)} className="hover:text-teal-400" href="#contact">Contact</a>
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "E-books", href: "#ebooks" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
  ? "bg-[#07152d]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-blue-950/20"
  : "bg-[#061226]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="h-16 flex items-center justify-between"> */}
<div className="h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/bright_enhanced(2).png"
              alt="Brightstar Tech"
              width={32}
              height={32}
              className="object-contain"
              priority
            />

            <div className="leading-none">
             <h1 className="text-lg font-bold tracking-wide text-white">
                BRIGHT<span className="text-purple-400">STAR</span>
              </h1>

              {/* <span className="text-[8px] tracking-[0.25em] text-slate-500"> */}
              <span className="text-[8px] tracking-[0.3em] text-blue-300/60">
                TECH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // className="text-[11px] text-slate-400 hover:text-white transition-colors"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Theme Button */}
            <button
              className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition"
              aria-label="Toggle theme"
            >
              <Moon size={13} />
            </button>

            {/* Login */}
            <a
              href="/login"
              // className="px-4 py-2 rounded-lg bg-white/[0.06] border border-white/[0.06] text-[11px] text-slate-300 hover:bg-white/[0.1] transition"
           className="px-5 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-sm font-medium text-slate-200 hover:bg-white/[0.1] transition"
           >
              Login
            </a>

            {/* Get Started */}
            <a
              href="#get-started"
              // className="px-5 py-2 rounded-lg text-[11px] font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition shadow-lg shadow-purple-500/20"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition shadow-lg shadow-blue-600/20"
            >
              Get Started
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#080c18]/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-6 py-6 space-y-2">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/[0.05] transition"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">

                <a
                  href="/login"
                  className="w-full text-center py-3 rounded-lg border border-white/[0.08] text-sm text-slate-300"
                >
                  Login
                </a>

                <a
                  href="#get-started"
                  className="w-full text-center py-3 rounded-lg text-sm text-white bg-gradient-to-r from-blue-500 to-purple-500"
                >
                  Get Started
                </a>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
