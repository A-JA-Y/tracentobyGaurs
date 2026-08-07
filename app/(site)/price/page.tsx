import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import StickyDownloadButton from "@/components/StickyButton";
import {
  SITE_URL,
  project,
  priceTable,
  quoteFactors,
  investmentCase,
  financePartners,
} from "@/data/project";

export const metadata: Metadata = {
  title: "Trecento Residences Price 2026 | 4 BHK Condominium Price List, Jaypee Greens",
  description:
    "Trecento Residences price is shared on request, with an offer available on booking. See the Type 1 and Type 2 price table, what moves a quote, the EMI calculator and finance partners.",
  alternates: { canonical: `${SITE_URL}/price` },
  keywords:
    "Trecento Residences price, Trecento Residences price list, Trecento by Gaurs price, Jaypee Greens 4 BHK price, Trecento Residences booking offer",
};

export default function PricePage() {
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
              { "@type": "ListItem", position: 2, name: "Price", item: `${SITE_URL}/price` },
            ],
          }),
        }}
      />

      <PageBanner
        eyebrow="Investment"
        title="Price"
        subtitle="Trecento Residences - A by Gaurs · Jaypee Greens, Greater Noida"
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">
              Trecento Residences Price — Jaypee Greens, Greater Noida
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              The price of a condominium at Trecento Residences is{" "}
              <strong>shared on request</strong>, with an offer currently available on booking.
              That is not evasion — with only 60 residences in the entire project, and with floor
              level and golf-course orientation moving the number materially, a single published
              rate per sq. ft. would misrepresent most of the inventory. What this page does
              instead is set out the two configurations, explain precisely which variables build
              a quote, and give you the EMI arithmetic so the number means something when you
              receive it.
            </p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Get Latest Price List &rarr;
            </Link>

            <p className="mt-8 text-base leading-relaxed">
              Trecento Residences - A by Gaurs is a single cylindrical tower of 30 storeys at
              Jaypee Greens, near Pari Chowk, holding 60 lavish 4 BHK condominiums — two per
              floor — of 5000 and 5050 sq. ft. saleable. The project entity is {project.entity}{" "}
              (LLP ID {project.entityId}) and it is registered with UP RERA under{" "}
              <strong>{project.rera}</strong>. Launched in October 2023, it is under construction
              with a proposed completion of {project.completion}.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Trecento Residences Price List 2026
            </h2>
            <p className="mb-6 text-gray-700">
              Both condominium types are 4 BHK. The table below sets the RERA carpet area against
              the saleable area for each, which is the comparison that matters when you benchmark
              a quote against other ultra-luxury inventory in the corridor.
            </p>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Condominium Type</th>
                    <th className="px-5 py-4">Carpet (RERA)</th>
                    <th className="px-5 py-4">Saleable</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row) => (
                    <tr key={row.type} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.type}</td>
                      <td className="px-5 py-4 text-gray-600">{row.carpet}</td>
                      <td className="px-5 py-4 text-gray-600">{row.saleable}</td>
                      <td className="px-5 py-4 text-gray-600">{row.config}</td>
                      <td className="px-5 py-4 text-gray-800 font-semibold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">
              *Subject to change without notice. Excludes registration, stamp duty, GST where
              applicable and other statutory charges. Contact the team for live availability,
              payment plans and the official price sheet.
            </p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Request the Official Trecento Residences Price List &rarr;
            </Link>
          </div>

          {/* What moves the quote */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What Determines Your Quote
            </h2>
            <p className="mb-6 text-gray-700">
              Six variables move the final number on any given unit. Two identical Type 1 homes on
              different floors, facing different parts of the course, will not be quoted the same.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quoteFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{factor.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{factor.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment case */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              The Case Behind the Price
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
              <table className="w-full text-sm text-left">
                <tbody>
                  {investmentCase.map((row, i) => (
                    <tr
                      key={row.driver}
                      className={`border-b border-[#e5dcc5] last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FAF8F4]"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 font-semibold text-gray-900 w-1/5 align-top"
                      >
                        {row.driver}
                      </th>
                      <td className="px-5 py-4 text-gray-600">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mt-4 italic">
              This content is informational and does not constitute investment advice. Property
              values can fall as well as rise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Plans</h2>
              <p className="mb-4">
                Three structures are offered, and they are priced differently — which plan you
                choose is itself one of the levers on your final number:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Construction-linked plan</strong> — payments released against
                  construction milestones through to the proposed {project.completion} completion
                </li>
                <li>
                  <strong>Down-payment plan</strong> — a large initial tranche with a smaller
                  balance at registry, usually the keenest pricing
                </li>
                <li>
                  <strong>Flexi plan</strong> — a middle path between the two
                </li>
              </ul>
              <p className="mb-4">
                Home-loan assistance is available through the project&rsquo;s finance partners:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {financePartners.map((p) => (
                  <li key={p.name}>
                    <strong>{p.name}</strong> — {p.role}
                  </li>
                ))}
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-sm text-yellow-800">
                ⚠️ <strong>Note:</strong> Interest rates and loan terms are bank-dependent and
                change frequently. Verify the current rate with your lender before committing.
              </div>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Costs Outside the Quote
              </h2>
              <p className="mb-4">
                The price shared is for the condominium. Budget separately for the statutory and
                recurring costs below:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Stamp duty &amp; registration</strong> — as applicable in Uttar Pradesh
                  at the time of registry
                </li>
                <li>
                  <strong>GST</strong> — applicable on an under-construction purchase
                </li>
                <li>
                  <strong>Maintenance charges</strong> — monthly, billed by the facility
                  management body
                </li>
                <li>
                  <strong>Club membership</strong> — one-time, where applicable
                </li>
                <li>
                  <strong>Utility connections</strong> — meter and connection charges
                </li>
                <li>
                  <strong>Interiors</strong> — the specification is a finished shell to the tables
                  on the{" "}
                  <Link href="/condominiums" className="text-[#c8922a] hover:underline">
                    Residences page
                  </Link>
                  ; loose furniture and appliances are not included
                </li>
              </ul>
              <p>
                For a total-cost working on a specific unit,{" "}
                <Link href="/contact-us" className="text-[#c8922a] hover:underline font-semibold">
                  request a callback
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              EMI Calculator — Plan Your Purchase
            </h2>
            <p className="mb-4">
              Use the calculator below to estimate monthly outflow against loan amount, advance
              payment, tenure and interest rate. The default illustration on this site assumes a
              20% advance, a 25-year tenure and 7.0% p.a. — adjust the sliders to your own budget
              and the offer your bank has actually made you.
            </p>
            <p className="italic text-sm text-gray-500 mb-6">
              (EMI figures are indicative and for planning purposes only; actual rates depend on
              your lender and profile.)
            </p>
          </div>

          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] text-sm text-gray-600 space-y-2">
            <p>
              <strong>Project:</strong> {project.name}, {project.addressLine},{" "}
              {project.locality}, {project.state} {project.pin}
            </p>
            <p>
              <strong>Developer:</strong> {project.developer} — project entity {project.entity}{" "}
              (LLP ID {project.entityId})
            </p>
            <p>
              <strong>RERA:</strong> {project.rera} &middot; verify at{" "}
              <a
                href={project.reraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8922a] hover:underline"
              >
                up-rera.in/projects
              </a>
            </p>
            <p>
              <strong>Status:</strong> {project.status} · launched {project.launched} · proposed
              completion {project.completion}
            </p>
            <p>
              <strong>Contact:</strong>{" "}
              <a href={`tel:${project.phoneHref}`} className="text-[#c8922a] hover:underline">
                {project.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${project.email}`} className="text-[#c8922a] hover:underline">
                {project.email}
              </a>
            </p>
            <p>
              <strong>Page last reviewed:</strong> July 2026
            </p>
          </div>
        </div>
      </section>

      <EmiCalculator />
      <ReasonsToInvest />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
