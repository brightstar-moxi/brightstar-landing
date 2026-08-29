// "use client";
// import { useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   useEffect(() => {
//     const blob1 = document.getElementById("blob1")!;
//     const blob2 = document.getElementById("blob2")!;
//     const blob3 = document.getElementById("blob3")!;

//     let x = 0, y = 0;

//     const animate = () => {
//       x += 0.4;
//       y += 0.3;

//       blob1.style.transform = `translate(${Math.sin(x) * 40}px, ${Math.cos(y) * 40}px)`;
//       blob2.style.transform = `translate(${Math.cos(x) * 50}px, ${Math.sin(y) * 50}px)`;
//       blob3.style.transform = `translate(${Math.sin(x) * 60}px, ${Math.sin(y) * 30}px)`;

//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, []);

//   return (
//     <section className="relative text-center text-white overflow-hidden pt-32 pb-24">

//       {/* 🔥 Background image */}
//       <div className="absolute inset-0 -z-20">
//         <Image
//           src="/nice.jpg"
//           alt="Hero background"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//       </div>

//       {/* 🔥 Glowing Blobs */}
//       <div className="absolute inset-0 -z-10">
//         <div
//           id="blob1"
//           className="absolute w-[550px] h-[550px] bg-teal-500 blur-[150px] opacity-40 rounded-full -top-20 -left-20"
//         ></div>

//         <div
//           id="blob2"
//           className="absolute w-[600px] h-[600px] bg-cyan-500 blur-[170px] opacity-40 rounded-full top-40 -right-32"
//         ></div>

//         <div
//           id="blob3"
//           className="absolute w-[500px] h-[500px] bg-blue-500 blur-[180px] opacity-35 rounded-full bottom-0 left-1/3"
//         ></div>
//       </div>

//       {/* Overlay (strong for readability) */}
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10"></div>

//       {/* 🎯 Hero Content */}
//       <div className="relative z-10 px-6 max-w-3xl mx-auto">
//         <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-xl">
//           WE CREATE. WE TEACH. WE SOLVE.
//         </h2>

//         <p className="text-lg sm:text-xl mb-8 text-gray-200 drop-shadow-md">
//           From professional services to premium eBooks and interactive tools, we help you build the future.
//         </p>

//         <a
//           href="#ebooks"
//           className="bg-teal-400 text-black font-bold py-3 px-8 rounded-full hover:bg-teal-300 transition shadow-lg hover:shadow-teal-400/50"
//         >
//           Browse Ebooks
//         </a>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import {
  Code2,
  Palette,
  Bot,
  Headphones,
  Play,
  Star,
  Users,
  Briefcase,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030817] text-white pt-24 pb-8">

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px] -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[150px] top-20 right-0" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] bottom-0 left-1/3" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HERO CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-4 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-2xl">

            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/5 text-[11px] text-slate-300 mb-6">
              <Sparkles size={12} className="text-blue-400" />
              Welcome to Brightstar Tech
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.05] tracking-tight">

              Building Digital
              <br />

              Solutions That
              <br />

              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                Grow Businesses
              </span>

            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-6 text-slate-400">
              Software Developer, Graphic Designer, AI Prompt Engineer and
              Technical Troubleshooter helping brands and businesses scale
              through technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-7">

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition"
              >
                Get Started
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 bg-white/[0.02] text-sm font-medium text-white hover:bg-white/[0.06] transition"
              >
                <Play size={14} fill="currentColor" />
                View Portfolio
              </a>

            </div>

            {/* Happy clients */}
            <div className="flex items-center gap-4 mt-6">

              <div className="flex -space-x-2">

                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="w-8 h-8 rounded-full border-2 border-[#030817] bg-gradient-to-br from-slate-400 to-slate-700 flex items-center justify-center"
                  >
                    <Users size={13} className="text-white" />
                  </div>
                ))}

              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  500+
                </p>

                <p className="text-[11px] text-slate-500">
                  Happy Clients
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="relative min-h-[520px] hidden md:block">

            {/* Main glow */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-blue-500/20 blur-[80px] top-20 left-1/2 -translate-x-1/2" />

            {/* Purple/Blue ring */}
            <div className="absolute w-[330px] h-[330px] rounded-full border border-blue-500/40 top-16 left-1/2 -translate-x-1/2 shadow-[0_0_80px_rgba(59,130,246,0.25)]" />

            <div className="absolute w-[300px] h-[300px] rounded-full border border-purple-500/30 top-20 left-1/2 -translate-x-1/2" />

            {/* Developer image */}
            <div className="absolute inset-x-0 -top-16 flex justify-center">

              <div className="relative w-[370px] h-[480px]">

                <Image
                  src="/nice.png"
                  alt="Brightstar Tech Developer"
                  fill
                  priority
                  className="object-contain object-bottom"
                />

              </div>

            </div>


            {/* WEB DEVELOPMENT CARD */}
            <div className="absolute left-0 top-8 w-[150px] rounded-xl border border-blue-500/30 bg-[#0a1429]/80 backdrop-blur-xl p-4 shadow-xl">

              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                <Code2 size={19} className="text-blue-400" />
              </div>

              <h3 className="text-xs font-semibold">
                Web Development
              </h3>

              <p className="text-[9px] text-slate-500 mt-2 leading-4">
                Building fast and scalable web applications.
              </p>

            </div>


            {/* UI/UX CARD */}
            <div className="absolute left-0 top-[220px] w-[150px] rounded-xl border border-purple-500/30 bg-[#0a1429]/80 backdrop-blur-xl p-4">

              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3">
                <Palette size={18} className="text-purple-400" />
              </div>

              <h3 className="text-xs font-semibold">
                UI/UX Design
              </h3>

              <p className="text-[9px] text-slate-500 mt-2 leading-4">
                Designing beautiful and user-friendly interfaces.
              </p>

            </div>


            {/* AI CARD */}
            <div className="absolute right-0 top-16 w-[150px] rounded-xl border border-purple-500/30 bg-[#0a1429]/80 backdrop-blur-xl p-4">

              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3">
                <Bot size={18} className="text-purple-400" />
              </div>

              <h3 className="text-xs font-semibold">
                AI Solutions
              </h3>

              <p className="text-[9px] text-slate-500 mt-2 leading-4">
                Intelligent solutions using AI and modern technology.
              </p>

            </div>


            {/* SUPPORT CARD */}
            <div className="absolute right-0 top-[235px] w-[150px] rounded-xl border border-blue-500/30 bg-[#0a1429]/80 backdrop-blur-xl p-4">

              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                <Headphones size={18} className="text-blue-400" />
              </div>

              <h3 className="text-xs font-semibold">
                Tech Support
              </h3>

              <p className="text-[9px] text-slate-500 mt-2 leading-4">
                Troubleshooting and technical support.
              </p>

            </div>

          </div>

        </div>


        {/* STATISTICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8 lg:-mt-2 relative z-20">

          {/* Rating */}
          <StatCard
            icon={<Star size={20} />}
            value="4.9/5"
            label="Client Rating"
          />

          {/* Clients */}
          <StatCard
            icon={<Users size={20} />}
            value="500+"
            label="Happy Clients"
          />

          {/* Projects */}
          <StatCard
            icon={<Briefcase size={20} />}
            value="150+"
            label="Projects Completed"
          />

          {/* Products */}
          <StatCard
            icon={<BookOpen size={20} />}
            value="20+"
            label="Digital Products"
          />

        </div>

      </div>
    </section>
  );
}


/* STAT CARD */

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-blue-500/20 bg-[#071329]/80 backdrop-blur-xl px-5 py-4 hover:border-blue-400/40 transition">

      <div className="w-11 h-11 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-lg font-bold text-white">
          {value}
        </p>

        <p className="text-[10px] text-slate-500">
          {label}
        </p>
      </div>

    </div>
  );
}