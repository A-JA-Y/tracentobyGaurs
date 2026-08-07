"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavLinks } from "@/data/siteNav";
import { project } from "@/data/project";
import Logo, { Monogram } from "./Logo";
import { useModal } from "./ModalContext";

export default function HomePageHeader({ overlay = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  /* Transparent over the hero, solid ink once the page scrolls. */
  const floating = overlay && !scrolled;

  return (
    <>
      {/* Utility strip */}
      <div className="hidden lg:flex w-full bg-ink-deep items-center justify-between px-6 xl:px-10 py-2 text-[10.5px] tracking-[0.16em] fixed top-0 left-0 right-0 z-40 border-b border-gold/10">
        <span className="text-gold/70 uppercase">
          UP RERA {project.rera} · Jaypee Greens, Greater Noida
        </span>
        <span className="flex items-center gap-6">
          <span className="text-mist uppercase">Mon–Sun · 10am–7pm</span>
          <a
            href={`tel:${project.phoneHref}`}
            className="text-gold hover:text-gold-light transition-colors font-semibold"
          >
            ☏ {project.phone}
          </a>
        </span>
      </div>

      {/* Main header */}
      <header
        className={`w-full fixed left-0 right-0 z-40 top-0 lg:top-[33px] transition-all duration-500 ${
          floating
            ? "bg-linear-to-b from-ink-deep/85 to-transparent"
            : "bg-ink/97 backdrop-blur-md shadow-[0_1px_0_rgba(198,164,92,0.18)]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center gap-6 h-[74px]">
          <Link href="/" aria-label="Trecento Residences — home" className="flex-shrink-0">
            <Logo tone="light" compact />
          </Link>

          <nav className="hidden xl:flex items-center flex-1 justify-center">
            {siteNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-[11px] font-medium uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-300
                  ${
                    isActive(item.href)
                      ? "text-gold after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-px after:bg-gold"
                      : "text-cream/65 hover:text-gold"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => openModal()}
            className="hidden xl:inline-flex flex-shrink-0 items-center gap-2 border border-gold/60 hover:bg-gold hover:border-gold text-gold hover:text-white text-[10px] font-semibold uppercase tracking-[0.22em] px-6 py-3 transition-all duration-300 cursor-pointer"
          >
            Brochure
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M6 1v8m0 0L2.8 5.8M6 9l3.2-3.2M1.5 11h9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            className="xl:hidden ml-auto flex items-center justify-center w-11 h-11 border border-gold/40 flex-shrink-0"
            onClick={() => setOpen(true)}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" aria-hidden="true">
              <line x1="0" y1="1" x2="20" y2="1" stroke="#C6A45C" strokeWidth="1.4" />
              <line x1="0" y1="6" x2="20" y2="6" stroke="#C6A45C" strokeWidth="1.4" />
              <line x1="0" y1="11" x2="13" y2="11" stroke="#C6A45C" strokeWidth="1.4" />
            </svg>
          </button>
        </div>

        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(198,164,92,.25) 22%,rgba(198,164,92,.7) 50%,rgba(198,164,92,.25) 78%,transparent)",
          }}
        />
      </header>

      {!overlay && <div className="h-[74px] lg:h-[107px]" />}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] z-[60] flex flex-col bg-ink transition-transform duration-500 xl:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "min(88vw, 380px)" }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
          <Logo tone="light" compact />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-gold/70 hover:text-gold text-2xl leading-none w-8 h-8"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {siteNavLinks.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 px-6 py-3.5 border-b border-white/5 text-[13px] uppercase tracking-[0.16em] transition-colors ${
                isActive(item.href) ? "text-gold bg-gold/5" : "text-cream/70 hover:text-gold"
              }`}
            >
              <span className="text-[9px] text-gold/45 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-gold/15 flex flex-col gap-3">
          <button onClick={() => { setOpen(false); openModal(); }} className="btn-gold w-full">
            Download Brochure
          </button>
          <a
            href={`tel:${project.phoneHref}`}
            className="text-center text-gold text-[11px] tracking-[0.2em] uppercase"
          >
            ☏ {project.phone}
          </a>
        </div>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-ink-deep/70 backdrop-blur-sm z-50 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export { Monogram };
