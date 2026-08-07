"use client";

import Image from "next/image";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import Reveal from "./Reveal";
import { glanceStats, whyDifferent } from "@/data/project";
import { useModal } from "./ModalContext";

import towerFacade from "@/assets/tower-facade-1.webp";
import towerDusk from "@/assets/tower-dusk-balconies.webp";
import golfAerial from "@/assets/golf-aerial.webp";
import balconyAllround from "@/assets/balcony-allround.webp";
import livingPanorama from "@/assets/living-panorama.webp";
import lobbyEntrance from "@/assets/lobby-entrance.webp";

const gallery = [
  { src: towerFacade, alt: "Trecento Residences tower facade rising above Jaypee Greens" },
  { src: towerDusk, alt: "All-round balconies of the cylindrical tower lit at dusk" },
  { src: golfAerial, alt: "Aerial view of the 18-hole international golf course at Jaypee Greens" },
  { src: balconyAllround, alt: "Continuous glass-railed balcony wrapping each condominium" },
  { src: livingPanorama, alt: "Panoramic living space inside a 4 BHK condominium" },
  { src: lobbyEntrance, alt: "Secure entrance lobby at Trecento Residences" },
];

export default function AboutProject({ heading = false }) {
  const { openModal } = useModal();
  const Title = heading ? "h1" : "h2";

  return (
    <section id="overview" className="w-full bg-cream py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Imagery */}
          <Reveal className="w-full lg:w-[47%] flex-shrink-0">
            <div className="relative">
              <div className="relative h-[340px] md:h-[520px] overflow-hidden shadow-[0_30px_70px_-30px_rgba(13,32,41,0.55)]">
                <ImageSlider images={gallery} />
              </div>
              {/* Gilded offset frame */}
              <div className="hidden md:block absolute -bottom-5 -right-5 w-full h-full border border-gold/45 -z-10" />
            </div>

            {/* Floating fact card */}
            <div className="relative z-10 -mt-10 md:-mt-14 ml-4 md:ml-8 mr-8 md:mr-16 bg-ink text-cream px-6 py-5 shadow-2xl">
              <p className="eyebrow eyebrow-light">Entire Supply · Forever</p>
              <p className="mt-2 font-display text-3xl md:text-4xl text-gold-light font-light">
                60 homes. 30 floors.
              </p>
              <p className="mt-1.5 text-[12px] text-cream/60 leading-relaxed">
                Two condominiums per floor — that is all there will ever be.
              </p>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="w-full lg:flex-1">
            <Reveal>
              <p className="eyebrow">The Project</p>
              <Title className="mt-4 text-ink font-light leading-[1.06] text-[clamp(2rem,4.4vw,3.2rem)]">
                An Italian Renaissance,
                <br />
                <span className="text-gold-dark">Reborn at Jaypee Greens</span>
              </Title>
              <span className="rule-gold mt-6" />
            </Reveal>

            <Reveal delay={90} className="mt-7 space-y-5 text-slate text-[14.5px] leading-[1.9]">
              <p>
                Trecento Residences - A by Gaurs is a newly launched, deliberately low-density
                residential landmark by the Gaursons Group at Jaypee Greens, Greater Noida. Its
                name and character are drawn from the <em className="text-ink">Trecento</em> —
                the 14th-century Italian age of art that seeded the Renaissance — and that
                inspiration shapes everything from the tower&rsquo;s cylindrical silhouette to
                the artistry of its landscape.
              </p>
              <p>
                The tower ascends 30 storeys from within 182.92 hectares (452 acres) of Jaypee
                Greens, standing in the middle of an international 18-hole golf course. Only two
                condominiums occupy each floor, each wrapped in a continuous all-round balcony, so
                every residence enjoys uninterrupted panoramic views, cross ventilation and a
                sense of complete privacy. Sixty homes are the entire supply — permanently.
              </p>
            </Reveal>

            {/* Glance counters */}
            <Reveal delay={140} className="mt-9 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-sand-deep">
              {glanceStats.map((s) => (
                <div key={s.label} className="border-b border-r border-sand-deep px-4 py-5">
                  <p className="font-display text-[22px] text-gold-dark leading-none">{s.value}</p>
                  <p className="mt-2 text-[8.5px] uppercase tracking-[0.18em] text-mist leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={190} className="mt-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink mb-4">
                Why This Address Is Different
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {whyDifferent.map((item) => (
                  <li key={item} className="flex gap-3 text-[13px] text-slate leading-relaxed">
                    <span className="mt-[9px] w-3 h-px bg-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={230} className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => openModal()} className="btn-gold">
                Download Brochure
              </button>
              <Link
                href="/about-trecento-residences"
                className="btn-ghost !text-gold-dark !border-gold-dark/45"
              >
                Explore The Project
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Pull quote */}
        <Reveal className="mt-20 md:mt-24 border-y border-gold/25 py-10 md:py-14">
          <blockquote className="max-w-3xl mx-auto text-center font-display italic text-ink font-light text-[clamp(1.3rem,3vw,2.1rem)] leading-[1.45]">
            &ldquo;Cradled within a sea of greenery, a premium tower stands as a testament to
            refined elegance — only 60 residences for 60 select families.&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
