import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 px-6 text-center">
      <h3 className="text-2xl font-bold mb-8 text-gray-900">
        What Our Readers Say
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-md rounded-xl p-6 text-gray-800 hover:shadow-lg transition"
          >
            <p className="italic mb-4">“{t.quote}”</p>
            <h4 className="font-semibold text-teal-600">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
