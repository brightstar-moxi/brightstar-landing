"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    const blob1 = document.getElementById("blob1")!;
    const blob2 = document.getElementById("blob2")!;
    const blob3 = document.getElementById("blob3")!;

    let x = 0, y = 0;

    const animate = () => {
      x += 0.4;
      y += 0.3;

      blob1.style.transform = `translate(${Math.sin(x) * 40}px, ${Math.cos(y) * 40}px)`;
      blob2.style.transform = `translate(${Math.cos(x) * 50}px, ${Math.sin(y) * 50}px)`;
      blob3.style.transform = `translate(${Math.sin(x) * 60}px, ${Math.sin(y) * 30}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative text-center text-white overflow-hidden pt-32 pb-24">

      {/* 🔥 Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/nice.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 🔥 Glowing Blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          id="blob1"
          className="absolute w-[550px] h-[550px] bg-teal-500 blur-[150px] opacity-40 rounded-full -top-20 -left-20"
        ></div>

        <div
          id="blob2"
          className="absolute w-[600px] h-[600px] bg-cyan-500 blur-[170px] opacity-40 rounded-full top-40 -right-32"
        ></div>

        <div
          id="blob3"
          className="absolute w-[500px] h-[500px] bg-blue-500 blur-[180px] opacity-35 rounded-full bottom-0 left-1/3"
        ></div>
      </div>

      {/* Overlay (strong for readability) */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10"></div>

      {/* 🎯 Hero Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-xl">
          WE CREATE. WE TEACH. WE SOLVE.
        </h2>

        <p className="text-lg sm:text-xl mb-8 text-gray-200 drop-shadow-md">
          From professional services to premium eBooks and interactive tools, we help you build the future.
        </p>

        <a
          href="#ebooks"
          className="bg-teal-400 text-black font-bold py-3 px-8 rounded-full hover:bg-teal-300 transition shadow-lg hover:shadow-teal-400/50"
        >
          Browse Ebooks
        </a>
      </div>
    </section>
  );
}
