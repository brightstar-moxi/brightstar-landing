"use client";

import Link from "next/link";
import { ebooks } from "../data/ebook";

export default function FeaturedEbooks() {
  return (
    <section id="ebooks" className="py-16 px-6 bg-white text-center">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">
        Featured Ebooks
      </h3>

      <div className="flex overflow-x-auto gap-6 justify-start sm:justify-center pb-4 scrollbar-hide">
        {ebooks.map((book) => (
          <div
            key={book.id}
            className="min-w-[250px] bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition shrink-0"
          >
            <img
              src={book.image}
              alt={book.title}
              className="rounded-t-xl w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h4 className="font-semibold text-gray-800 mb-2">{book.title}</h4>
              <p className="text-gray-600 mb-3">₦{book.price.toFixed(2)}</p>
              
              <Link
                href="https://selar.com/m/moses-jojolola1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-teal-500 text-white font-medium px-4 py-2 rounded-full hover:bg-teal-400 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
