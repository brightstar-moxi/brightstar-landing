// import { testimonials } from "../data/testimonials";

// export default function Testimonials() {
//   return (
//     <section
//       id="testimonials"
//       className="relative bg-gray-50 py-20 px-6 overflow-hidden"
//     >
//       {/* Background Blur Glows */}
//       <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-300 opacity-30 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-10 -right-16 w-80 h-80 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>

//       <h3 className="text-3xl font-extrabold mb-12 text-gray-900 text-center">
//         What Our Client Says
//       </h3>

//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {testimonials.map((t) => (
//           <div
//             key={t.id}
//             className="
//               bg-white/80 backdrop-blur-xl 
//               shadow-[0_20px_40px_rgba(0,0,0,0.08)] 
//               border border-white/50 
//               rounded-2xl p-8 text-gray-800 
//               hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]
//               transition-all duration-300 
//               hover:-translate-y-3 
//               hover:scale-[1.03]
//               hover:border-teal-400/70
//             "
//           >
//             {/* Avatar */}
//             <div className="flex justify-center mb-6">
//               <img
//                 src={t.photo}
//                 alt={t.name}
//                 className="
//                   w-20 h-20 rounded-full object-cover shadow-md 
//                   border-4 border-white 
//                   hover:scale-105 transition-transform duration-300
//                 "
//               />
//             </div>

//             {/* Quote */}
//             <p className="italic text-gray-700 leading-relaxed mb-6 text-center text-lg">
//               {t.quote}
//             </p>

//             {/* Name */}
//             <h4 className="font-semibold text-teal-700 text-lg">{t.name}</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// "use client";

// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { testimonials } from "../data/testimonials";

// export default function Testimonials() {
//   return (
//     <section
//       id="testimonials"
//       className="relative overflow-hidden bg-[#030817] px-6 py-16 text-white"
//     >
//       {/* Background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/3 -top-32 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
//         <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-6xl">

//         {/* Heading */}
//         <div className="mb-8 text-center">
//           <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400">
//             Testimonials
//           </p>

//           <h2 className="text-2xl font-bold sm:text-3xl">
//             What Clients Say
//           </h2>

//           <div className="mx-auto mt-3 h-px w-40 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
//         </div>

//         {/* Testimonials */}
//         <div className="relative">

//           {/* Left arrow */}
//           <button
//             type="button"
//             aria-label="Previous testimonials"
//             className="absolute left-[-16px] top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-[#101936] text-slate-300 shadow-lg transition hover:border-purple-400 hover:bg-purple-500/20"
//           >
//             <ChevronLeft size={17} />
//           </button>

//           <div className="grid gap-4 md:grid-cols-3">
//             {testimonials.slice(0, 3).map((t) => (
//               <div
//                 key={t.id}
//                 className="group rounded-xl border border-white/[0.08] bg-[#081226]/90 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-500/30"
//               >
//                 {/* Client information */}
//                 <div className="flex items-center gap-3">

//                   <img
//                     src={t.photo}
//                     alt={t.name}
//                     className="h-10 w-10 rounded-full border border-white/10 object-cover"
//                   />

//                   <div>
//                     <h3 className="text-xs font-bold text-white">
//                       {t.name}
//                     </h3>

//                     <p className="mt-0.5 text-[9px] text-slate-500">
//   {t.role}
// </p>
//                   </div>

//                 </div>

//                 {/* Rating */}
//                 <div className="mt-3 flex gap-0.5">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                       key={star}
//                       size={10}
//                       className="fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>

//                 {/* Quote */}
//                 <div className="mt-3 rounded-lg border border-white/[0.06] bg-[#0a1429] p-3">
//                   <p className="text-[10px] leading-5 text-slate-400">
//                     {t.quote}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right arrow */}
//           <button
//             type="button"
//             aria-label="Next testimonials"
//             className="absolute right-[-16px] top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-[#101936] text-slate-300 shadow-lg transition hover:border-purple-400 hover:bg-purple-500/20"
//           >
//             <ChevronRight size={17} />
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }

// /*
//   Temporary role display.
//   You can later move `role` into your testimonials data.
// */
// // function getRole(name: string) {
// //   const roles: Record<string, string> = {
// //     "Sarah Johnson": "Business Owner",
// //     "Michael Brown": "Entrepreneur",
// //     "David Wilson": "CEO, TechCorp",
// //   };

// //   return roles[name] || "Client";
// // }



"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import Image from "next/image";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#030817] px-6 py-20 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
            Testimonials
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            What Clients Say
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
            See what people and businesses have to say about working with
            Brightstar Tech.
          </p>

          <div className="mx-auto mt-5 h-px w-52 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous testimonial"
            className="absolute left-[-20px] top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-[#111936] text-white shadow-xl transition hover:scale-105 hover:border-purple-400 hover:bg-purple-600/30"
          >
            <ChevronLeft size={24} />
          </button>

          {/* TESTIMONIAL LIST */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-2 pb-6 scrollbar-hide"
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="w-[340px] shrink-0 rounded-2xl border border-white/[0.08] bg-[#081226] p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 sm:w-[370px]"
              >

                {/* Client */}
                <div className="flex items-center gap-4">

                  <Image
                    src={t.photo}
                    alt={t.name}
                    className="h-12 w-12 rounded-full border-2 border-white/10 object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {t.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {t.role}
                    </p>
                  </div>

                </div>

                {/* Stars */}
                <div className="mt-5 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-5 text-sm leading-6 text-slate-400">
                  "{t.quote}"
                </p>

              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next testimonial"
            className="absolute right-[-20px] top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-[#111936] text-white shadow-xl transition hover:scale-105 hover:border-purple-400 hover:bg-purple-600/30"
          >
            <ChevronRight size={24} />
          </button>

        </div>

      </div>
    </section>
  );
}