"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020817] text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/5 blur-[120px]" />

        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-16 md:px-10 lg:py-20">

        {/* Main footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">

          {/* ================================= */}
          {/* BRAND */}
          {/* ================================= */}

          <div className="lg:col-span-1">

            <div className="mb-5 flex items-center gap-3">

              <Image
                src="/bright_enhanced(2).png"
                alt="Brightstar Tech"
                width={52}
                height={52}
                className="rounded-full"
              />

              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Bright<span className="text-purple-400">Star</span>
                </h2>

                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Tech
                </p>
              </div>

            </div>

            <p className="max-w-xs text-sm leading-6 text-slate-400">
              Building digital solutions that help businesses grow and
              succeed in the digital world.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">

              <a
                href="https://www.facebook.com/profile.php?id=100075277795478"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://x.com/BrightstarMoxiz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
              >
                <Twitter size={16} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
              >
                <Instagram size={16} />
              </a>

            </div>

          </div>

          {/* ================================= */}
          {/* QUICK LINKS */}
          {/* ================================= */}

          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="#home"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#ebooks"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  E-books
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* ================================= */}
          {/* RESOURCES */}
          {/* ================================= */}

          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="#blog"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#learning"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Learning Hub
                </a>
              </li>

              <li>
                <a
                  href="#ebooks"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  E-books
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#support"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Support
                </a>
              </li>

            </ul>
          </div>

          {/* ================================= */}
          {/* LEGAL */}
          {/* ================================= */}

          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              Legal
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="#privacy"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#refund"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Refund Policy
                </a>
              </li>

              <li>
                <a
                  href="#cookies"
                  className="text-slate-400 transition hover:text-purple-400"
                >
                  Cookie Policy
                </a>
              </li>

            </ul>
          </div>

          {/* ================================= */}
          {/* CONTACT */}
          {/* ================================= */}

          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              {/* Email */}
              <div className="flex items-start gap-3">

                <Mail
                  size={16}
                  className="mt-1 shrink-0 text-purple-400"
                />

                <a
                  href="mailto:brightstartech@gmail.com"
                  className="text-sm text-slate-400 transition hover:text-purple-400"
                >
                  brightstartech@gmail.com
                </a>

              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">

                <Phone
                  size={16}
                  className="mt-1 shrink-0 text-blue-400"
                />

                <a
                  href="tel:+2348012345678"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  +234 801 234 5678
                </a>

              </div>

              {/* Location */}
              <div className="flex items-start gap-3">

                <MapPin
                  size={16}
                  className="mt-1 shrink-0 text-cyan-400"
                />

                <span className="text-sm text-slate-400">
                  Ekiti State, Nigeria
                </span>

              </div>

            </div>
          </div>

        </div>

        {/* ================================= */}
        {/* DIVIDER */}
        {/* ================================= */}

        <div className="my-12 h-px bg-white/[0.08]" />

        {/* ================================= */}
        {/* BOTTOM */}
        {/* ================================= */}

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Brightstar Tech. All rights reserved.
          </p>

          <p className="text-xs text-slate-600">
            Made with{" "}
            <span className="text-purple-400">♥</span>{" "}
            by Brightstar Tech
          </p>

        </div>

      </div>
    </footer>
  );
}