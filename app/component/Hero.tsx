import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-center text-white overflow-hidden pt-21 sm:pt-25">
      {/* ✅ Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/nice.jpg" // ✅ place your background image in /public
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* ✅ Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* ✅ Hero content */}
      <div className="py-16 sm:py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-3 leading-snug">
          EMPOWERING YOUTH THROUGH DIGITAL SKILLS & KNOWLEDGE
        </h2>
        <p className="text-base sm:text-lg mb-6 text-gray-200">
          Explore our affordable Ebooks and start your journey toda
        </p>
        <a
          href="#ebooks"
          className="bg-teal-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-teal-300 transition"
        >
          Browse Ebooks
        </a>
      </div>
    </section>
  );
}

