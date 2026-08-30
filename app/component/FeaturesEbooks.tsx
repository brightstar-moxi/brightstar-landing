// "use client";

// import Link from "next/link";
// import { ebooks } from "../data/ebook";
// // import Image from "next/image";

// export default function FeaturedEbooks() {
//   return (
//     <section id="ebooks" className="py-16 px-6 bg-white text-center">
//       <h3 className="text-2xl font-bold mb-6 text-gray-900">
//         Featured Ebooks
//       </h3>

//       <div className="flex overflow-x-auto gap-6 justify-start sm:justify-center pb-4 scrollbar-hide">
//         {ebooks.map((book) => (
//           <div
//             key={book.id}
//             className="min-w-[250px] bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition shrink-0"
//           >
//             <img
//               src={book.image}
//               alt={book.title}
//               className="rounded-t-xl w-full h-40 object-cover"
//             />
//             <div className="p-4 flex flex-col items-center">
//               <h4 className="font-semibold text-gray-800 mb-2">{book.title}</h4>
//               <p className="text-gray-600 mb-3">₦{book.price.toFixed(2)}</p>
              
//               <Link
//                 href="https://selar.com/m/moses-jojolola1"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="bg-teal-500 text-white font-medium px-4 py-2 rounded-full hover:bg-teal-400 transition">
//                   Buy Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { ebooks } from "../data/ebook";

export default function FeaturedEbooks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="ebooks"
      className="relative overflow-hidden bg-[#030817] py-16 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[130px]" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-xl font-bold sm:text-2xl">
            Featured E-books
          </h2>

          <Link
            href="https://selar.com/m/moses-jojolola1"
            className="group flex items-center gap-1 text-xs font-medium text-purple-400 transition hover:text-purple-300"
          >
            View All E-books
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Ebook carousel */}
        <div className="relative">

          {/* Left button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous ebooks"
            className="absolute left-[-14px] top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-[#111936] text-slate-300 shadow-xl transition hover:border-purple-400 hover:bg-purple-600/20"
          >
            <ChevronLeft size={17} />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          >
            {ebooks.map((book) => (
              <div
                key={book.id}
                className="group w-[180px] shrink-0 overflow-hidden rounded-xl border border-white/[0.07] bg-[#091329] transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1933]"
              >
                {/* Cover */}
                <div className="relative h-[150px] overflow-hidden bg-[#050b18] p-2">

                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full rounded-sm object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  {/* subtle overlay */}
                  <div className="pointer-events-none absolute inset-2 rounded-sm ring-1 ring-white/10" />
                </div>

                {/* Details */}
                <div className="p-3">

                  <h3 className="line-clamp-1 text-[11px] font-semibold text-white">
                    {book.title}
                  </h3>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-1">
                    <Star
                      size={10}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-[9px] text-slate-400">
                      4.9
                    </span>

                    <span className="text-[9px] text-slate-600">
                      (20)
                    </span>
                  </div>

                  {/* Price */}
                  <p className="mt-2 text-[12px] font-bold text-white">
                    ₦{Number(book.price).toLocaleString()}
                  </p>

                  {/* Buy */}
                  <Link
                    href="https://selar.com/m/moses-jojolola1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-[9px] font-medium text-purple-400 transition hover:text-purple-300"
                  >
                    View E-book →
                  </Link>

                </div>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next ebooks"
            className="absolute right-[-14px] top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-[#111936] text-slate-300 shadow-xl transition hover:border-purple-400 hover:bg-purple-600/20"
          >
            <ChevronRight size={17} />
          </button>

        </div>

      </div>
    </section>
  );
}