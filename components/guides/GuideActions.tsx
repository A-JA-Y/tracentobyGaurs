"use client";

import Link from "next/link";
import { FaDownload, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useModal } from "@/components/ModalContext";
import { project } from "@/data/project";

/**
 * Call-to-action buttons shared by the buyer-guide pages.
 *
 *  - enquire  → jumps to the enquiry form at the foot of the page (#book-site-visit)
 *  - brochure → opens the lead modal (the page must render <ModalWrapper />)
 *  - call     → tel: link to the sales line
 *  - whatsapp → wa.me chat with a pre-filled, page-specific message
 *  - link     → an ordinary internal link
 *
 * The first action is drawn as the primary (filled) button; the rest are outlined.
 */
export type GuideAction =
  | { kind: "enquire"; label: string }
  | { kind: "brochure"; label?: string }
  | { kind: "call"; label?: string }
  | { kind: "whatsapp"; label?: string; message: string }
  | { kind: "link"; label: string; href: string };

type Props = {
  actions: GuideAction[];
  /** "dark" for buttons sitting on photography or ink panels. */
  tone?: "light" | "dark";
  align?: "start" | "center";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-md px-6 py-3.5 text-xs md:text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer text-center";

const primary = "bg-[#DCA54A] text-white hover:bg-[#C49A2B] shadow-md";

const secondary = {
  light: "border border-[#c8922a] text-[#a8761c] hover:bg-[#DCA54A] hover:border-[#DCA54A] hover:text-white",
  dark: "border border-white/60 text-white hover:bg-white hover:text-gray-900",
};

export default function GuideActions({
  actions,
  tone = "light",
  align = "start",
  className = "",
}: Props) {
  const { openModal } = useModal();

  return (
    <div
      className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 ${
        align === "center" ? "sm:justify-center" : ""
      } ${className}`}
    >
      {actions.map((action, index) => {
        const style = `${base} ${index === 0 ? primary : secondary[tone]}`;

        switch (action.kind) {
          case "enquire":
            return (
              <a key={index} href="#book-site-visit" className={style}>
                {action.label}
              </a>
            );

          case "brochure":
            return (
              <button key={index} type="button" onClick={() => openModal()} className={style}>
                <FaDownload aria-hidden="true" className="w-3.5 h-3.5" />
                {action.label ?? "Download Brochure"}
              </button>
            );

          case "call":
            return (
              <a key={index} href={`tel:${project.phoneHref}`} className={style}>
                <FaPhoneAlt aria-hidden="true" className="w-3.5 h-3.5" />
                {action.label ?? `Call ${project.phone}`}
              </a>
            );

          case "whatsapp":
            return (
              <a
                key={index}
                href={`https://wa.me/${project.whatsapp}?text=${encodeURIComponent(action.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={style}
              >
                <FaWhatsapp aria-hidden="true" className="w-4 h-4" />
                {action.label ?? "WhatsApp Us"}
              </a>
            );

          case "link":
            return (
              <Link key={index} href={action.href} className={style}>
                {action.label}
              </Link>
            );
        }
      })}
    </div>
  );
}
