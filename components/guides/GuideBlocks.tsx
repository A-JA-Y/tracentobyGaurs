import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import GuideActions, { type GuideAction } from "./GuideActions";

/* ──────────────────────────────────────────────────────────────
   Layout primitives shared by the buyer-guide pages.
   They follow the inner-page palette (white / #FAF8F4 / gold)
   used on Price, Residences and Amenities.
   ────────────────────────────────────────────────────────────── */

/** Body-copy style for guide paragraphs. */
export const guideText = "text-gray-700 text-base md:text-[17px] leading-[1.8]";

/** In-copy link style. */
export const guideLink =
  "text-[#a8761c] font-semibold underline decoration-[#DCA54A]/50 underline-offset-4 hover:decoration-[#a8761c] transition-colors";

export function GuideSection({
  id,
  tone = "white",
  width = "default",
  className = "",
  children,
}: {
  id?: string;
  tone?: "white" | "cream";
  width?: "default" | "narrow";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`w-full px-6 py-14 md:py-20 ${tone === "cream" ? "bg-[#FAF8F4]" : "bg-white"} ${className}`}
    >
      <div className={`${width === "narrow" ? "max-w-3xl" : "max-w-5xl"} mx-auto`}>{children}</div>
    </section>
  );
}

export function GuideHeading({
  eyebrow,
  children,
  align = "start",
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-3">{eyebrow}</p>
      ) : null}
      <h2 className="text-[1.7rem] md:text-4xl text-gray-900 !leading-[1.18] text-balance">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className={`rule-gold mt-5 ${align === "center" ? "rule-gold-center" : ""}`}
      />
    </div>
  );
}

/** Photograph with an optional caption, cropped to a fixed aspect ratio. */
export function GuideFigure({
  src,
  alt,
  caption,
  aspect = "aspect-[3/2]",
  position = "object-center",
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  aspect?: string;
  position?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={`relative w-full overflow-hidden rounded-lg shadow-md ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          className={`object-cover ${position}`}
        />
      </div>
      {caption ? (
        <figcaption className="mt-2.5 text-xs text-gray-500 leading-relaxed">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/** Gold tick list. */
export function GuideCheckList({ items, className = "" }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-gray-700 text-[15px] md:text-base leading-relaxed">
          <span aria-hidden="true" className="text-[#c8922a] mt-0.5 flex-shrink-0">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Full-width call-to-action band. "ink" is the dark variant, "cream" a bordered card. */
export function GuideCtaBand({
  eyebrow,
  title,
  body,
  actions,
  tone = "ink",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  actions: GuideAction[];
  tone?: "ink" | "cream";
}) {
  if (tone === "cream") {
    return (
      <section className="w-full bg-white px-6 pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] px-6 py-9 md:px-12 md:py-11 flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-12">
          <div className="flex-1">
            {eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-3">{eyebrow}</p>
            ) : null}
            <h2 className="text-2xl md:text-3xl text-gray-900 !leading-[1.2] text-balance">{title}</h2>
            {body ? <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">{body}</p> : null}
          </div>
          <GuideActions actions={actions} tone="light" className="lg:flex-shrink-0 lg:max-w-[420px]" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-ink px-6 py-14 md:py-16 text-center">
      <div className="max-w-3xl mx-auto">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#DCA54A] mb-4">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl md:text-4xl text-white !leading-[1.2] text-balance">{title}</h2>
        {body ? (
          <p className="mt-4 text-white/75 text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto">
            {body}
          </p>
        ) : null}
        <GuideActions actions={actions} tone="dark" align="center" className="mt-8" />
      </div>
    </section>
  );
}

/** FAQ accordion built on <details>, so every answer stays in the HTML. */
export function GuideFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.q}
          open={index === 0}
          className="group rounded-lg border border-[#e5dcc5] bg-white overflow-hidden"
        >
          <summary className="flex items-start justify-between gap-4 px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-[#FAF8F4] transition-colors">
            <h3 className="text-base md:text-lg text-gray-900 !leading-snug !font-normal">{item.q}</h3>
            <span
              aria-hidden="true"
              className="mt-1 flex-shrink-0 text-[#c8922a] text-sm transition-transform duration-200 group-open:rotate-180"
            >
              ▾
            </span>
          </summary>
          <p className="px-5 pb-5 text-gray-600 text-[15px] leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
