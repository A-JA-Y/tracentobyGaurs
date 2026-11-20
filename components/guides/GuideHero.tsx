import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type HeroImage = {
  src: StaticImageData;
  alt: string;
  /** Tailwind object-position utility, e.g. "object-center" or "object-[50%_30%]". */
  position?: string;
};

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** One photograph, or two for a split "this versus that" hero. */
  images: HeroImage[];
  /** Label of this page in the visible breadcrumb trail. */
  breadcrumb: string;
  /** Small line under the buttons, e.g. "Updated November 2026 · 8 min read". */
  meta?: string;
  /** Call-to-action row. */
  children?: ReactNode;
};

/**
 * Photographic page hero for the buyer-guide pages. Carries the page's single H1.
 */
export default function GuideHero({
  eyebrow,
  title,
  subtitle,
  images,
  breadcrumb,
  meta,
  children,
}: Props) {
  const split = images.length > 1;

  return (
    <section className="relative w-full overflow-hidden bg-ink-deep">
      {/* Photography */}
      <div className="absolute inset-0 flex">
        {images.map((image, index) => (
          <div key={index} className="relative h-full flex-1">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes={split ? "50vw" : "100vw"}
              className={`object-cover ${image.position ?? "object-center"}`}
            />
          </div>
        ))}
      </div>

      {/* Scrim keeps the white type legible over any frame */}
      <div className="absolute inset-0 bg-linear-to-b from-ink-deep/85 via-ink-deep/70 to-ink-deep/90" />
      {split ? (
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 w-px bg-linear-to-b from-transparent via-gold/60 to-transparent"
        />
      ) : null}

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-24 text-center text-white">
        <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
          <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
            <li>
              <Link href="/" className="hover:text-[#DCA54A] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white/85">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <p className="text-[#DCA54A] text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-5">
          {eyebrow}
        </p>

        <h1 className="text-[2rem] sm:text-4xl md:text-5xl text-white !leading-[1.14] text-balance">
          {title}
        </h1>

        <span
          aria-hidden="true"
          className="block h-px w-24 mx-auto mt-7 bg-linear-to-r from-transparent via-[#DCA54A] to-transparent"
        />

        <p className="mt-7 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {children ? <div className="mt-9">{children}</div> : null}

        {meta ? (
          <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-white/55">{meta}</p>
        ) : null}
      </div>
    </section>
  );
}
