"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import plan1 from "@/assets/tower-1.webp";
import plan2 from "@/assets/tower-2.webp";
import sitePlan from "@/assets/tower-6.webp";

import { areaTable, layoutProgramme, project } from "@/data/project";
import { useModal } from "./ModalContext";

/* The two condominium layouts — 60 homes, two to a floor, across 30 storeys. */
const condominiumPlans = [
  {
    id: "type-1",
    type: "Type 1",
    size: "5050 sq. ft. saleable",
    carpet: "3112.63 sq. ft. carpet (RERA)",
    config: "4 BHK",
    price: "On request",
    image: plan1,
    description:
      "The larger of the two layouts — 469.16 sq. mt. saleable, with a 3112.63 sq. ft. RERA carpet area and the full 806.65 sq. ft. all-round balcony wrapping the residence.",
    features: [
      "4 Bedrooms",
      "5 Toilets",
      "4 Dress Rooms",
      "Puja Room",
      "Servant Room with Toilet",
      "806.65 sq. ft. all-round balcony",
    ],
  },
  {
    id: "type-2",
    type: "Type 2",
    size: "5000 sq. ft. saleable",
    carpet: "3059.99 sq. ft. carpet (RERA)",
    config: "4 BHK",
    price: "On request",
    image: plan2,
    description:
      "464.51 sq. mt. saleable with an identical programme to Type 1 — same four bedrooms, same five toilets, same continuous balcony, on a marginally tighter footprint.",
    features: [
      "4 Bedrooms",
      "5 Toilets",
      "4 Dress Rooms",
      "Puja Room",
      "Servant Room with Toilet",
      "806.65 sq. ft. all-round balcony",
    ],
  },
];

const sitePlanElements = [
  "Main entry / exit with dedicated drop-off at Tower A",
  "Swimming pool, stepped pool and waterfall area",
  "Sky walk winding above the landscape",
  "Amphitheatre and wooden decks with planting beds",
  "Outdoor open gym, pre-teen, teen and senior citizen areas",
  "Pray area (deity place) and landscaped pathways",
];

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState<(typeof condominiumPlans)[0] | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  return (
    <section
      className="w-full py-16 px-6"
      id="floor-plans"
      aria-label="Trecento Residences Floor Plans"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* H1 Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trecento Residences Floor Plan — Condominium Type 1 &amp; Type 2
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Trecento Residences has just two floor plans, because it has just two homes per floor.
            Across 30 storeys that makes 60 condominiums in total — Condominium Type 1 at 5050 sq.
            ft. saleable and Condominium Type 2 at 5000 sq. ft. saleable, both 4 BHK, both wrapped
            in a continuous 806.65 sq. ft. all-round balcony. The pages below set out the carpet,
            covered, balcony, common and saleable areas for each, alongside the site plan for the
            Renaissance landscape at the base of the tower.
          </p>
          <button
            onClick={() => openModal()}
            className="mt-6 bg-[#DCA54A] text-white text-sm px-8 py-3 rounded uppercase font-semibold hover:bg-[#c9943a] transition"
            aria-label="Download Floor Plan PDF"
          >
            Download Floor Plan PDF
          </button>
        </div>

        {/* H2 - Area comparison */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Area Comparison — Type 1 vs Type 2
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-8">
            Both layouts run the identical room programme. The difference between them is a little
            under 53 sq. ft. of carpet area — everything else, including the balcony and the share
            of floor common area, is the same.
          </p>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#DCA54A] text-white">
                  <th className="px-4 py-3 text-left">Area Detail</th>
                  <th className="px-4 py-3 text-left">Condominium Type 1</th>
                  <th className="px-4 py-3 text-left">Condominium Type 2</th>
                </tr>
              </thead>
              <tbody>
                {areaTable.map((item, idx) => (
                  <tr
                    key={item.detail}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-semibold">{item.detail}</td>
                    <td className="px-4 py-3">{item.type1}</td>
                    <td className="px-4 py-3">{item.type2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Areas are reproduced from the official brochure and are subject to final measurement.
            Verify against the RERA filing for {project.rera} at up-rera.in/projects.
          </p>
        </div>

        {/* H2 - Plan cards */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Trecento Residences Floor Plan Configurations
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-10">
            Every home at Trecento is a 4 BHK condominium in a single cylindrical tower — not a
            villa, not a cluster. With two condominiums to a floor, each residence gets cross
            exposure, its own private lift lobby approach and an uninterrupted panoramic outlook
            over the 18-hole golf course.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {condominiumPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-100"
                onClick={() => {
                  if (!isUnlocked) {
                    openModal();
                  } else {
                    setActivePlan(plan);
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={`Condominium ${plan.type} ${plan.config} floor plan at Trecento Residences — ${plan.size}`}
                    className={`w-full h-full object-cover transition duration-500 ${
                      !isUnlocked ? "blur-[2px] scale-105" : "hover:scale-105"
                    }`}
                    loading="lazy"
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-semibold">
                      🔒 Unlock to View
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-xs px-3 py-1 rounded">
                    {plan.type}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Condominium {plan.type}{" "}
                    <span className="text-sm font-normal">({plan.size})</span>
                  </h3>
                  <p className="text-sm text-[#DCA54A] font-semibold">
                    {plan.config} · {plan.price}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{plan.carpet}</p>
                  <p className="text-xs text-gray-600 mt-2">{plan.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {plan.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {plan.features.length > 3 && (
                      <span className="text-[10px] text-gray-500">
                        +{plan.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2 - Room programme */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            What Both Layouts Contain
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-8">
            Type 1 and Type 2 run the same programme end to end. The list below is the complete
            room schedule for either home.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {layoutProgramme.map((room) => (
              <li key={room} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-[9px] w-3 h-px bg-[#DCA54A] flex-shrink-0" />
                <span>{room}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* H2 - Which layout */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Choosing Between Type 1 and Type 2
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">If You Are…</th>
                  <th className="px-4 py-3 text-left">Consider</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    buyer: "Maximising internal space",
                    plan: "Type 1 (5050 sq. ft.)",
                    why: "The larger carpet area of the two, at 3112.63 sq. ft.",
                  },
                  {
                    buyer: "Prioritising a specific orientation",
                    plan: "Either — ask for availability",
                    why: "Orientation over the golf course matters more than the 50 sq. ft. between layouts",
                  },
                  {
                    buyer: "Buying for the view premium",
                    plan: "Higher floors, either type",
                    why: "Floor level drives the view premium across the 30-storey tower",
                  },
                  {
                    buyer: "Comparing on price per sq. ft.",
                    plan: "Type 2 (5000 sq. ft.)",
                    why: "Marginally smaller saleable area with an identical room schedule",
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-medium">{item.buyer}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.plan}</td>
                    <td className="px-4 py-3 text-sm">{item.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2 - Site plan */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Trecento Residences Site Plan
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-6">
            The site plan covers approximately 5,139.50 sq. mt. at the foot of the tower — the
            Renaissance landscape, the arrival sequence at Tower A, and the position of the future
            development tower with which the community facilities are shared.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-sm mb-6">
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              {sitePlanElements.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              {sitePlanElements.slice(3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer group max-w-4xl mx-auto"
            onClick={() => {
              if (!isUnlocked) {
                openModal();
              } else {
                setIsMasterOpen(true);
              }
            }}
          >
            <Image
              src={sitePlan}
              alt="Trecento Residences site plan — Renaissance landscape, tower footprint and arrival court"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">📐 Trecento Residences Site Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button
                className="mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="View Site Plan"
              >
                {isUnlocked ? "View Site Plan" : "Unlock Now"}
              </button>
            </div>
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Premium
            </span>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => {
                if (!isUnlocked) openModal();
                else setIsMasterOpen(true);
              }}
              className="bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
            >
              View Site Plan PDF
            </button>
          </div>
        </div>

        {/* H2 - PDF Download Section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 md:p-8 text-center border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trecento Residences Floor Plan PDF — Download
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
            The official brochure contains the Type 1 and Type 2 drawings, the cluster plan, the
            site plan, dimensions, specifications and orientation references. It is shared directly
            with verified buyers so that distribution stays accurate and RERA-aligned.
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            Share your name, phone and preferred condominium type below. Our channel partner team
            will email the latest PDF along with the current price sheet within a few hours.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Your Name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Phone Number"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Email Address"
              />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Preferred Condominium Type"
              >
                <option value="">Preferred Condominium Type</option>
                <option value="Type 1">Type 1 — 5050 sq. ft. · 4 BHK</option>
                <option value="Type 2">Type 2 — 5000 sq. ft. · 4 BHK</option>
                <option value="Either">Either — advise me</option>
              </select>
              <button
                onClick={() => openModal()}
                className="bg-[#DCA54A] text-white font-semibold px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
              >
                Email Me the Floor Plan PDF
              </button>
            </div>
          </div>
        </div>

        {/* H2 - Price Info */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trecento Residences Floor Plan Price
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pricing for both Type 1 and Type 2 is shared on request, with an offer currently
            available on booking. Quotes are unit-specific — floor level, orientation over the golf
            course, payment plan and live availability across only 60 units all move the final
            number, which is why a single published rate would be misleading.
          </p>
          <p className="mt-3">
            For the current sheet, visit the{" "}
            <a href="/price" className="text-[#DCA54A] hover:underline">
              Price page
            </a>{" "}
            or request a callback through the{" "}
            <a href="/contact-us" className="text-[#DCA54A] hover:underline">
              Contact form
            </a>
            .
          </p>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Condominium ${activePlan.type} ${activePlan.config} floor plan`}
          onClick={() => setActivePlan(null)}
        >
          <div
            className="relative bg-white p-3 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close plan preview"
            >
              ✕
            </button>

            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-900">
                Condominium {activePlan.type} · {activePlan.config} Floor Plan
              </h3>
              <p className="text-sm text-gray-600">
                {activePlan.size} · {activePlan.carpet}
              </p>
            </div>

            <Image
              src={activePlan.image}
              alt={`Condominium ${activePlan.type} ${activePlan.config} floor plan at Trecento Residences — ${activePlan.size}`}
              className="w-full h-auto object-contain"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {activePlan.features.map((feature) => (
                <span
                  key={feature}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SITE PLAN MODAL */}
      {isMasterOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Trecento Residences site plan"
          onClick={() => setIsMasterOpen(false)}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close site plan"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              Trecento Residences Site Plan
            </h3>

            <Image
              src={sitePlan}
              alt="Trecento Residences site plan — complete landscape layout at the base of the tower"
              className="w-full h-auto object-contain mb-4"
            />

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/brochure-trecento.pdf"
                download="Trecento-Residences-Brochure.pdf"
                className="bg-[#DCA54A] text-white text-sm px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="Download the brochure containing the site plan"
              >
                📥 Download Site Plan (in Brochure)
              </a>
              <button
                onClick={() => {
                  setIsMasterOpen(false);
                  openModal();
                }}
                className="bg-gray-200 text-gray-700 text-sm px-6 py-3 rounded uppercase hover:bg-gray-300 transition"
              >
                Request Full Brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
