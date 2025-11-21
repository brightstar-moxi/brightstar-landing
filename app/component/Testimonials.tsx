import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-gray-50 py-20 px-6 overflow-hidden"
    >
      {/* Background Blur Glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-16 w-80 h-80 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>

      <h3 className="text-3xl font-extrabold mb-12 text-gray-900 text-center">
        What Our Readers Say
      </h3>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="
              bg-white/80 backdrop-blur-xl 
              shadow-[0_20px_40px_rgba(0,0,0,0.08)] 
              border border-white/50 
              rounded-2xl p-8 text-gray-800 
              hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]
              transition-all duration-300 
              hover:-translate-y-3 
              hover:scale-[1.03]
              hover:border-teal-400/70
            "
          >
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <img
                src={t.photo}
                alt={t.name}
                className="
                  w-20 h-20 rounded-full object-cover shadow-md 
                  border-4 border-white 
                  hover:scale-105 transition-transform duration-300
                "
              />
            </div>

            {/* Quote */}
            <p className="italic text-gray-700 leading-relaxed mb-6 text-center text-lg">
              {t.quote}
            </p>

            {/* Name */}
            <h4 className="font-semibold text-teal-700 text-lg">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
