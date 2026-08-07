"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Cross-fading slider. Accepts either raw static imports or
 * `{ src, alt }` objects so every frame can carry its own alt text.
 */
export default function ImageSlider({ images = [], interval = 4200, showCaption = false }) {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);

  const slides = images.map((i) =>
    i && typeof i === "object" && "src" in i && i.alt !== undefined ? i : { src: i, alt: "" }
  );

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  const start = useCallback(() => {
    stop();
    if (slides.length < 2) return;
    timer.current = setInterval(() => setCurrent((p) => (p + 1) % slides.length), interval);
  }, [slides.length, interval, stop]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  if (!slides.length) return null;

  const go = (dir) => {
    setCurrent((p) => (p + dir + slides.length) % slides.length);
    start();
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-ink"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={i === current ? s.alt : ""}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            quality={82}
            className="object-cover"
          />
        </div>
      ))}

      {/* Bottom scrim so controls and captions stay legible */}
      <div className="absolute inset-x-0 bottom-0 h-28 z-10 bg-linear-to-t from-ink-deep/80 to-transparent pointer-events-none" />

      {showCaption && slides[current].alt && (
        <p className="absolute bottom-14 left-5 right-16 z-20 text-cream/85 text-[11.5px] leading-snug">
          {slides[current].alt}
        </p>
      )}

      {slides.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-gold/45 text-gold hover:bg-gold hover:text-white transition-colors duration-300 flex items-center justify-center backdrop-blur-sm"
          >
            <span className="-mt-0.5">‹</span>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-gold/45 text-gold hover:bg-gold hover:text-white transition-colors duration-300 flex items-center justify-center backdrop-blur-sm"
          >
            <span className="-mt-0.5">›</span>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  start();
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-px transition-all duration-500 ${
                  i === current ? "w-8 bg-gold" : "w-4 bg-cream/40 hover:bg-cream/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
