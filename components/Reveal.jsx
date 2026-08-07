"use client";

import { useEffect, useRef } from "react";

/**
 * Fades + lifts children into view once, the first time they cross the viewport.
 * Uses a single IntersectionObserver per instance and unobserves after firing,
 * so long pages stay cheap. Honours prefers-reduced-motion via globals.css.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add("is-visible");
        io.unobserve(el);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
