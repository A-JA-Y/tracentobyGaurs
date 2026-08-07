"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroStats, project } from "@/data/project";
import { Monogram } from "./Logo";
import { useModal } from "./ModalContext";

import heroTower from "@/assets/hero-tower.webp";
import heroGolf from "@/assets/hero-golf-dusk.webp";
import heroSkyline from "@/assets/hero-skyline-gold.webp";

const slides = [
  {
    img: heroTower,
    alt: "The 30-storey Trecento Residences tower silhouetted against a golden Greater Noida sky",
    kicker: "Only 60 residences · 30 storeys · one tower",
  },
  {
    img: heroGolf,
    alt: "The international 18-hole golf course at Jaypee Greens at twilight",
    kicker: "Rising from the middle of an 18-hole golf course",
  },
  {
    img: heroSkyline,
    alt: "Greater Noida skyline at dusk near Pari Chowk",
    kicker: "452 acres of Jaypee Greens, already built and living",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-[104vh] overflow-hidden bg-ink-deep grain">
      {/* Photography */}
      {slides.map((s, i) => (
        <div
          key={s.alt}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.img}
            alt={i === active ? s.alt : ""}
            fill
            priority={i === 0}
            quality={82}
            sizes="100vw"
            className={`object-cover object-center ${i === active ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}

      {/* Scrims — keeps the gold type legible over any frame */}
      <div className="absolute inset-0 bg-linear-to-b from-ink-deep/85 via-ink-deep/45 to-ink-deep/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(7,18,25,0.72)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[100svh] lg:min-h-[104vh] pt-[110px] lg:pt-[150px] pb-10 px-6">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="animate-rise" style={{ animationDelay: "120ms" }}>
            <Monogram size={54} className="mx-auto opacity-90" />
          </div>

          <p
            className="mt-7 eyebrow eyebrow-light animate-rise"
            style={{ animationDelay: "240ms", letterSpacing: "0.4em" }}
          >
            {project.eyebrow}
          </p>

          <h1
            className="mt-6 font-display text-cream font-light leading-[0.94] animate-rise"
            style={{ animationDelay: "340ms", fontSize: "clamp(2.9rem,8.6vw,6.6rem)" }}
          >
            Trecento
            <span className="block mt-1 text-gold-light">Residences</span>
          </h1>

          <span
            className="block h-px w-32 mt-8 animate-draw mx-auto"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(230,210,160,.9),transparent)",
            }}
          />

          <p
            className="mt-7 font-display italic text-gold-light/95 animate-rise"
            style={{ animationDelay: "560ms", fontSize: "clamp(1.15rem,2.6vw,1.75rem)" }}
          >
            {project.tagline}
          </p>

          <p
            className="mt-5 max-w-2xl text-cream/70 text-[13.5px] md:text-[15px] leading-[1.85] animate-rise"
            style={{ animationDelay: "660ms" }}
          >
            Only 60 lavish 4 BHK condominiums for 60 select families — a single cylindrical
            tower of 30 storeys rising in the middle of an international 18-hole golf course
            at Jaypee Greens, Greater Noida.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-rise"
            style={{ animationDelay: "780ms" }}
          >
            <button onClick={() => openModal()} className="btn-gold w-full sm:w-auto">
              Download Brochure
            </button>
            <a href="#enquire" className="btn-ghost w-full sm:w-auto">
              Request Price List
            </a>
          </div>

          {/* Slide kicker + dots */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <p key={active} className="text-[10.5px] tracking-[0.28em] uppercase text-gold/75 animate-rise">
              {slides[active].kicker}
            </p>
            <div className="flex gap-2.5">
              {slides.map((s, i) => (
                <button
                  key={s.alt}
                  onClick={() => setActive(i)}
                  aria-label={`View slide ${i + 1}`}
                  className={`h-px transition-all duration-500 ${
                    i === active ? "w-12 bg-gold" : "w-5 bg-cream/30 hover:bg-cream/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics rail — the brochure cover numbers */}
        <div
          className="mt-10 lg:mt-0 max-w-6xl w-full mx-auto animate-rise"
          style={{ animationDelay: "900ms" }}
        >
          <div className="border-t border-gold/20 pt-6 grid grid-cols-3 lg:grid-cols-6 gap-y-6">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center px-2">
                <p className="font-display text-[26px] md:text-[34px] leading-none gilt">
                  {s.value}
                </p>
                <p className="mt-2 text-[8.5px] md:text-[9.5px] uppercase tracking-[0.2em] text-cream/45 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 animate-softpulse">
        <span className="text-[8.5px] tracking-[0.3em] uppercase text-gold/60">Scroll</span>
        <span className="w-px h-10 bg-linear-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
