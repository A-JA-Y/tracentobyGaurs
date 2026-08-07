"use client";

import Image from "next/image";

import golfCourse from "@/assets/golf-aerial.webp";
import township from "@/assets/township.webp";
import sportsComplex from "@/assets/pool-olympic.webp";
import resort from "@/assets/lounge-club.webp";
import temple from "@/assets/pray-temple.webp";

const cards = [
  {
    title: "18-Hole Greg Norman Golf Course",
    image: golfCourse,
  },
  {
    title: "452-Acre Jaypee Greens Township",
    image: township,
  },
  {
    title: "The Atlantic Sports Complex & Olympic Pool",
    image: sportsComplex,
  },
  {
    title: "Golf & Spa Resort and Boomerang Club",
    image: resort,
  },
  {
    title: "Temple, School, Town Centre & Gated Security",
    image: temple,
  },
];

export default function GaurTownship() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <h6 className="text-center uppercase mb-3 text-[#c8922a] tracking-widest text-sm">
          The Setting
        </h6>

        {/* Heading */}
        <h2 className="text-center font-semibold text-gray-900 mb-4 text-[clamp(2rem,4vw,2.6rem)] leading-tight">
          Inside Jaypee Greens
        </h2>

        {/* Description */}
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-sm leading-relaxed">
          Trecento Residences does not have to grow its own township — it stands inside one that
          is already built, lived in and green. Jaypee Greens spans 182.92 hectares (452 acres)
          and is developed and managed by Jaiprakash Associates Ltd. Certain facilities are
          members-only and/or chargeable.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                quality={80}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Title */}
              <div className="absolute bottom-0 p-4">
                <p className="text-white text-sm font-medium leading-snug">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
