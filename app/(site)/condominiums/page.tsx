import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import ResidenceFeatures from "@/components/PremiumInventory";
import StickyDownloadButton from "@/components/StickyButton";
import {
  SITE_URL,
  project,
  areaTable,
  layoutProgramme,
  residenceSpecs,
  commonSpecs,
} from "@/data/project";

export const metadata: Metadata = {
  title: "Trecento Residences Condominiums | 4 BHK Type 1 & Type 2, 5000–5050 Sq. Ft.",
  description:
    "Two 4 BHK condominium layouts at Trecento Residences — Type 1 at 5050 sq. ft. and Type 2 at 5000 sq. ft. saleable, both with an 806.65 sq. ft. all-round balcony. Full areas and specifications.",
  alternates: { canonical: `${SITE_URL}/condominiums` },
  keywords:
    "Trecento Residences condominiums, Trecento 4 BHK, Trecento Type 1 Type 2, 5000 sq ft apartment Greater Noida, Jaypee Greens 4 BHK",
};

const layoutAdvantages = [
  {
    title: "Two homes per floor",
    body: "Only two condominiums occupy each of the 30 floors, giving each residence privacy, cross exposure and its own approach from the lift lobby.",
  },
  {
    title: "A balcony that never stops",
    body: "806.65 sq. ft. of continuous all-round balcony wraps the full residence — so the golf-course premium belongs to every home, not only the corner units.",
  },
  {
    title: "Hemi-vu spaces",
    body: "The cylindrical geometry opens the living spaces into uninterrupted panoramic sweeps over the 18-hole course rather than a single flat frontage.",
  },
  {
    title: "Shared community facilities",
    body: "The clubhouse, pool, party hall, audio visual room and landscaped garden are common to Tower A and the future development tower.",
  },
];

export default function CondominiumsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Residences",
                item: `${SITE_URL}/condominiums`,
              },
            ],
          }),
        }}
      />

      <PageBanner
        eyebrow="Residences"
        title="Condominiums & Configurations"
        subtitle="Two 4 BHK layouts — Condominium Type 1 at 5050 sq. ft. and Condominium Type 2 at 5000 sq. ft. saleable."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">
              Trecento Residences Condominium Types — Complete Area Chart
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Trecento Residences offers exactly two configurations, because the building offers
              exactly two homes per floor. <strong>Condominium Type 1</strong> measures 469.16 sq.
              mt. — <strong>5050 sq. ft.</strong> saleable. <strong>Condominium Type 2</strong>{" "}
              measures 464.51 sq. mt. — <strong>5000 sq. ft.</strong> saleable. Both are 4 BHK,
              both carry an 806.65 sq. ft. continuous all-round balcony, and both run an identical
              room schedule. Across 30 storeys that produces 60 residences in total — the entire
              supply, permanently. The project is registered with UP RERA under{" "}
              <strong>{project.rera}</strong> (verify at up-rera.in/projects).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Area Detail — Type 1 vs Type 2
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Area Detail</th>
                    <th className="px-5 py-4">Condominium Type 1</th>
                    <th className="px-5 py-4">Condominium Type 2</th>
                  </tr>
                </thead>
                <tbody>
                  {areaTable.map((row) => (
                    <tr key={row.detail} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.detail}</td>
                      <td className="px-5 py-4 text-gray-600">{row.type1}</td>
                      <td className="px-5 py-4 text-gray-600">{row.type2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">
              Areas reproduced from the official brochure. Carpet area is stated on the RERA
              definition. Figures are indicative and subject to final measurement — verify against
              the RERA filing before any booking.
            </p>
            <Link href="/floor-plans" className="text-[#c8922a] hover:underline font-semibold">
              View the Type 1 and Type 2 floor plans &rarr;
            </Link>
          </div>

          {/* Room programme */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Is Inside Each Condominium
            </h2>
            <p className="text-gray-700 mb-6">
              Type 1 and Type 2 share the same programme. The difference between them is a little
              under 53 sq. ft. of carpet area — nothing in the room schedule changes.
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {layoutProgramme.map((room) => (
                <li key={room} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-[9px] w-3 h-px bg-[#DCA54A] flex-shrink-0" />
                  <span>{room}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Layout advantages */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Why the Layout Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {layoutAdvantages.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Condominium specifications */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Condominium Specifications
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
              <table className="w-full text-sm text-left">
                <tbody>
                  {residenceSpecs.map((row, i) => (
                    <tr
                      key={row.item}
                      className={`border-b border-[#e5dcc5] last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FAF8F4]"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 font-semibold text-gray-900 w-1/4 align-top"
                      >
                        {row.item}
                      </th>
                      <td className="px-5 py-4 text-gray-600">{row.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Common area specifications */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Common-Area Specifications
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
              <table className="w-full text-sm text-left">
                <tbody>
                  {commonSpecs.map((row, i) => (
                    <tr
                      key={row.item}
                      className={`border-b border-[#e5dcc5] last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FAF8F4]"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 font-semibold text-gray-900 w-1/4 align-top"
                      >
                        {row.item}
                      </th>
                      <td className="px-5 py-4 text-gray-600">{row.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What the Price Covers
              </h2>
              <p className="mb-4">
                Pricing is shared on request and quoted per unit. The quote covers the condominium
                as specified above, its share of the floor common area, and access to the
                Renaissance landscape and the Bloomsbury clubhouse.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>The residence, finished to the specification tables above</li>
                <li>806.65 sq. ft. of all-round balcony</li>
                <li>454.56 sq. ft. share of floor common area</li>
                <li>Access to the clubhouse, pools, landscape and gaming zone</li>
                <li>Township power backup, FTTH and gated security infrastructure</li>
              </ul>
              <Link href="/price" className="text-[#c8922a] hover:underline font-semibold">
                See how a quote is built &rarr;
              </Link>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Costs to Plan for Separately
              </h2>
              <p className="mb-4">
                As on any Indian residential purchase, the quoted price excludes statutory and
                ancillary costs. Budget for these on top:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Stamp duty &amp; registration</strong> — as applicable in Uttar Pradesh
                  at the time of registry
                </li>
                <li>
                  <strong>GST</strong> — applicable on under-construction purchases
                </li>
                <li>
                  <strong>Maintenance charges</strong> — billed by the facility management body
                </li>
                <li>
                  <strong>Club membership</strong> — where applicable, one-time
                </li>
                <li>
                  <strong>Utility connections</strong> — meter and connection charges
                </li>
              </ul>
              <p>
                For a total-cost working on a specific floor and orientation,{" "}
                <Link href="/contact-us" className="text-[#c8922a] hover:underline font-semibold">
                  request a callback
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <Link
              href="/contact-us"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Get Latest Price List &amp; Availability
            </Link>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
      <ResidenceFeatures />
      <ReasonsToInvest />
    </>
  );
}
