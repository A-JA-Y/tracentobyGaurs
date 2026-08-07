import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import StickyDownloadButton from "@/components/StickyButton";
import Logo from "@/components/Logo";
import {
  SITE_URL,
  project,
  developerStats,
  landmarkDevelopments,
} from "@/data/project";

export const metadata: Metadata = {
  title: "About Gaurs Group | The Developer Behind Trecento Residences",
  description:
    "The Gaursons Group — 'The Life Artists' — has been building in the NCR since 1995, with 65+ delivered projects, 65,000+ delivered units and over a lakh happy customers. Meet the developer behind Trecento Residences.",
  alternates: { canonical: `${SITE_URL}/about-gaurs-group` },
  keywords:
    "Gaurs Group, Gaursons Group, Gaurs developer, Gaur City, Gaur Yamuna City, The Islands by Gaurs, Trecento Residences developer",
};

const credentials = [
  "Active since 1995 — nearly three decades of unbroken delivery in the National Capital Region",
  "Portfolio spanning affordable housing to ultra-luxury apartments, villas and penthouses",
  "Landmark townships including Gaur City, Gaur Yamuna City and Gaur Saundaryam",
  "Realty+ Excellence Award 2022 — Luxury Project of the Year for The Islands by Gaurs",
  "Member of CREDAI, the apex body of private real estate developers in India",
  "40,000+ possessions handed over between 2014 and 2022 alone",
];

export default function AboutGaursGroupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: project.developer,
            alternateName: "Gaurs — The Life Artists",
            foundingDate: "1995",
            description:
              "The Gaursons Group is a National Capital Region real estate developer active since 1995, with 65+ delivered projects and 65,000+ delivered units across affordable to ultra-luxury housing.",
            url: `${SITE_URL}/about-gaurs-group`,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Gaur Biz Park, Plot No. 1, Abhay Khand II, Indirapuram",
              addressLocality: "Ghaziabad",
              addressRegion: "Uttar Pradesh",
              postalCode: "201014",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <PageBanner
        eyebrow="The Developer"
        title="About Gaurs Group"
        subtitle="'The Life Artists' — success founded on trust. Building across the National Capital Region since 1995."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Logo />
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#c8922a]">
              Project entity
            </p>
            <p className="text-gray-600 text-sm mt-1">
              {project.entity}
              <br />
              LLP ID {project.entityId}
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              The Gaursons Group has been building in the National Capital Region since 1995. Its
              motto — &ldquo;The Life Artists&rdquo; — sits alongside a plainer one that matters
              more to buyers: success founded on trust. Across nearly three decades the group has
              worked the full width of the market, from affordable housing through to ultra-luxury
              apartments, villas and penthouses.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Trecento Residences, that experience is pointed at a deliberately small target:
              sixty condominiums in a single 30-storey tower at Jaypee Greens, two homes to a
              floor, each over 5000 sq. ft. saleable. For a buyer committing to an
              under-construction purchase with a proposed completion of {project.completion}, a
              developer with 65+ delivered projects and 65,000+ delivered units behind it is the
              single most useful piece of due diligence available.
            </p>

            <ul className="flex flex-col gap-2 mt-2">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#c8952a] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/about-trecento-residences"
                className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Explore Trecento Residences
              </Link>
              <Link
                href="/contact-us"
                className="inline-block border border-[#DCA54A] text-[#c8922a] hover:bg-[#DCA54A] hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Request a Callback
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy counters */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            The Legacy in Numbers
          </h2>
          <p className="text-gray-600 text-sm mb-8 max-w-3xl">
            Figures as published across the project&rsquo;s marketing material. They are the
            developer&rsquo;s own claims — worth verifying against RERA filings for any specific
            project you are considering.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#e5dcc5] bg-white">
            {developerStats.map((s) => (
              <div key={s.label} className="border-b border-r border-[#e5dcc5] px-4 py-6">
                <p className="text-2xl font-semibold text-[#c8922a] leading-none">{s.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-gray-500 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landmark developments */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Landmark Developments
          </h2>
          <p className="text-gray-600 text-sm mb-8 max-w-3xl">
            A selection of the townships and projects that established the group across Noida,
            Greater Noida and Ghaziabad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {landmarkDevelopments.map((name) => (
              <div
                key={name}
                className="bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg px-5 py-6 text-center"
              >
                <p className="text-gray-900 font-semibold text-sm">{name}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] text-sm text-gray-600 space-y-2">
            <p>
              <strong>Corporate office:</strong> {project.corporateOffice}
            </p>
            <p>
              <strong>Current project:</strong> {project.name} · UP RERA {project.rera}
            </p>
            <p>
              <strong>Sales enquiries:</strong>{" "}
              <a href={`tel:${project.phoneHref}`} className="text-[#c8922a] hover:underline">
                {project.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${project.email}`} className="text-[#c8922a] hover:underline">
                {project.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
