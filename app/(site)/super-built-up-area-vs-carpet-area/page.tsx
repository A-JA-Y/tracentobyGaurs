import type { Metadata } from "next";
import Link from "next/link";
import {
  FaCheck,
  FaClipboardCheck,
  FaDraftingCompass,
  FaFileSignature,
  FaMinus,
  FaReceipt,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import GuideActions from "@/components/guides/GuideActions";
import GuideHero from "@/components/guides/GuideHero";
import GuideVideos, { type GuideVideo } from "@/components/guides/GuideVideos";
import {
  AreaCompositionBars,
  AreaNestDiagram,
  ListingEquation,
  RateLadder,
} from "@/components/guides/AreaDiagrams";
import {
  GuideCtaBand,
  GuideFaq,
  GuideFigure,
  GuideHeading,
  GuideSection,
  guideLink,
  guideText,
} from "@/components/guides/GuideBlocks";
import { SITE_URL, project } from "@/data/project";

/*
 * Photography. The two floor-plan frames are free stock photographs from Pexels
 * (Pexels licence — free for commercial use, no attribution required):
 *   floor-plan-tape     pexels.com/photo/instruments-prepared-for-measurements-in-house-4792479/
 *   floor-plan-glasses  pexels.com/photo/pen-with-ruler-and-eyeglasses-placed-on-house-plan-4792480/
 * They show a generic house plan, not a Trecento Residences drawing. The balcony
 * and tower frames come from the site's existing asset library and are
 * representative imagery too.
 */
import floorPlanTape from "@/assets/floor-plan-tape.webp";
import floorPlanGlasses from "@/assets/floor-plan-glasses.webp";
import balconyStack from "@/assets/balcony-allround.webp";
import towerRound from "@/assets/tower-facade-3.webp";

const PAGE_PATH = "/super-built-up-area-vs-carpet-area";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Super Built-Up Area vs Carpet Area: Where a Balcony Counts";
const PAGE_HEADLINE = "Super Built-Up Area vs Carpet Area: Where a Wraparound Balcony Counts";
const PAGE_DESCRIPTION =
  "Super built-up area vs carpet area at Trecento Residences: why a listing shows 3,919 sq. ft. and RERA shows 3,113, and where the balcony is counted.";
const PAGE_IMAGE = `${SITE_URL}/guide-carpet-area.webp`;
const PUBLISHED = "2026-11-18";
const MODIFIED = "2026-11-18";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords:
    "super built-up area vs carpet area, is balcony included in carpet area, RERA carpet area vs carpet area, saleable area vs carpet area, covered area, price per sq. ft. on carpet area, Trecento Residences carpet area, Trecento Residences floor plans, Trecento Residences price",
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: project.name,
    locale: "en_IN",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [
      {
        url: PAGE_IMAGE,
        width: 1200,
        height: 630,
        alt: "A tape measure and pen resting on a house floor plan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

/* ── Content ───────────────────────────────────────────────────── */

const definitions = [
  {
    term: "RERA carpet area",
    body: "is the floor inside the home. Rooms and internal walls count. Outer walls, shafts, balconies and terraces don’t.",
  },
  {
    term: "Covered area",
    body: "is the carpet area plus the walls around the home.",
  },
  {
    term: "Balcony area",
    body: "is measured on its own.",
  },
  {
    term: "Saleable area",
    body: "is Greater Noida’s name for super built-up area. It is the covered area, the balcony and a share of the common areas.",
  },
];

/* The area table exactly as published: figures in sq. ft. */
const areaRows = [
  { area: "RERA carpet", type1: "3,112.63", type2: "3,059.99" },
  { area: "Covered area", type1: "3,173.87", type2: "3,120.05" },
  { area: "Balcony", type1: "806.65", type2: "806.65" },
  { area: "Common floor area", type1: "454.56", type2: "454.56" },
  { area: "Saleable area", type1: "5,050", type2: "5,000", strong: true },
  { area: "Carpet as % of saleable", type1: "62%", type2: "61%" },
  { area: "Loading on carpet", type1: "about 62%", type2: "about 63%" },
];

const balconyRows = [
  { where: "RERA carpet area", verdict: "no", answer: "No" },
  { where: "UP RERA record", verdict: "separate", answer: "Shown separately, with its own area" },
  { where: "Builder-buyer agreement", verdict: "separate", answer: "Should be stated separately from carpet" },
  { where: "Saleable area", verdict: "yes", answer: "Yes" },
  { where: "Price quoted on saleable area", verdict: "yes", answer: "Yes, at the same rate as the rest" },
  { where: "Daily use", verdict: "yes", answer: "Yes, it is yours alone" },
] as const;

/* Badge beside each answer: counted, not counted, or stated as a separate figure. */
const verdictBadge = {
  no: { icon: <FaTimes />, className: "bg-gray-200 text-gray-600" },
  separate: { icon: <FaMinus />, className: "bg-[#fbf4e2] text-[#8f6410] border border-[#DCA54A]" },
  yes: { icon: <FaCheck />, className: "bg-[#c8952a] text-white" },
};

const faqs = [
  {
    q: "What is the difference between super built-up area and carpet area?",
    a: "Carpet area is the floor inside the home, including internal walls. Super built-up area, called saleable area in Greater Noida, adds the outer walls, balconies and a share of the common areas.",
  },
  {
    q: "Is a balcony included in carpet area?",
    a: "No. Under RERA a balcony for your exclusive use is left out of carpet area and stated separately. It is included in saleable area.",
  },
  {
    q: "Why does a listing show a bigger carpet area than the RERA carpet area?",
    a: "Some listings add the balcony to carpet. At Trecento Residences, 3,112.63 sq. ft. of RERA carpet plus the 806.65 sq. ft. balcony gives the 3,919 sq. ft. shown on one portal.",
  },
  {
    q: "What is the RERA carpet area at Trecento Residences?",
    a: "It is 3,112.63 sq. ft. in Type 1 and 3,059.99 sq. ft. in Type 2, against saleable areas of 5,050 and 5,000 sq. ft.",
  },
  {
    q: "How big is the balcony at Trecento Residences?",
    a: "It is 806.65 sq. ft. in both home types, in one continuous run all round the home. That is about 16% of saleable area.",
  },
  {
    q: "What is covered area in a flat?",
    a: "Covered area is the carpet area plus the walls around the home. At Trecento Residences it is 3,173.87 sq. ft. in Type 1 and 3,120.05 sq. ft. in Type 2.",
  },
  {
    q: "What is the loading at Trecento Residences?",
    a: "About 62% to 63% when measured on RERA carpet, against an NCR average of 41%. The large balcony accounts for much of it.",
  },
  {
    q: "How do I work out the price per sq. ft. on carpet area?",
    a: "Divide the full cost by the RERA carpet area. As a shortcut, multiply the rate on saleable area by about 1.62 for Type 1 or 1.63 for Type 2.",
  },
];

/*
 * Videos — all public and embeddable on YouTube. Two are broadcast-news
 * explainers on the terms this page uses; the third is the developer's own film.
 * Titles and running times are as shown on YouTube.
 */
const videos: GuideVideo[] = [
  {
    id: "hpLTMnYvk6M",
    kind: "News report",
    title: "UP RERA: sell units on a carpet-area basis",
    channel: "NEWS9 Live",
    duration: "3:33",
    caption:
      "A news report on UP RERA’s direction that developers in Uttar Pradesh sell units on carpet area.",
  },
  {
    id: "BmSdBIcFWOM",
    kind: "TV explainer",
    title: "Property Explained: What Is Loading Factor?",
    channel: "NDTV",
    duration: "7:31",
    caption:
      "NDTV’s The Property Show explains the loading factor, one of the terms that can confuse a first-time buyer.",
    /* YouTube has no larger poster for this video, so name the one that exists. */
    poster: "https://i.ytimg.com/vi/BmSdBIcFWOM/hqdefault.jpg",
  },
  {
    id: "GbhvSVvKwyw",
    kind: "Developer film",
    title: "Trecento Residences: the full walkthrough",
    channel: "Gaurs Group",
    duration: "5:21",
    caption: "The developer’s full walkthrough film of the project.",
  },
];

const whatsappMessage =
  "Hi, I read your carpet area guide. Please share the area statement and cost sheet for Trecento Residences (Type 1 and Type 2).";

export default function CarpetAreaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: PAGE_HEADLINE,
                description: PAGE_DESCRIPTION,
                url: PAGE_URL,
                mainEntityOfPage: PAGE_URL,
                image: PAGE_IMAGE,
                datePublished: PUBLISHED,
                dateModified: MODIFIED,
                inLanguage: "en-IN",
                author: { "@type": "Organization", name: project.channelPartner },
                publisher: {
                  "@type": "Organization",
                  name: project.channelPartner,
                  url: `${SITE_URL}/`,
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Super Built-Up Area vs Carpet Area",
                    item: PAGE_URL,
                  },
                ],
              },
            ],
          }),
        }}
      />

      <GuideHero
        eyebrow="Buyer’s Guide · Areas"
        title={PAGE_HEADLINE}
        subtitle="Why a listing shows 3,919 sq. ft. and RERA shows 3,113 at Trecento Residences, and where the balcony is counted."
        breadcrumb="Super Built-Up Area vs Carpet Area"
        meta={`Updated November 2026 · ${project.channelPartner}, authorised channel partner`}
        images={[
          {
            src: floorPlanTape,
            alt: "A tape measure and a pen resting on a printed house floor plan",
          },
        ]}
      >
        <GuideActions
          tone="dark"
          align="center"
          actions={[
            { kind: "enquire", label: "Get the Area Statement" },
            { kind: "link", label: "View Floor Plans", href: "/floor-plans" },
            { kind: "brochure" },
          ]}
        />
      </GuideHero>

      <ModalWrapper />

      {/* Introduction */}
      <GuideSection>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className={`space-y-6 ${guideText}`}>
            <p className="text-lg md:text-xl text-gray-800 leading-[1.7]">
              Look up Trecento Residences on a property portal and you may see a carpet area of
              3,919 sq. ft. Look at the project’s own figures and the RERA carpet is 3,113 sq. ft.
              Nobody measured wrong. The two numbers count different things.
            </p>
            <p>
              This guide explains super built-up area vs carpet area through that gap. It shows
              where a large balcony is counted, where it isn’t, and what it does to the rate you
              pay.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] px-4 py-7 sm:px-6 sm:py-9 text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-none">3,919</p>
              <p className="mt-2 text-xs text-gray-500">sq. ft.</p>
              <p className="mt-4 text-[11px] sm:text-xs uppercase tracking-[0.12em] text-gray-600 leading-snug">
                “Carpet area” on one property portal
              </p>
            </div>
            <div className="rounded-lg border border-[#0d2029] bg-[#0d2029] px-4 py-7 sm:px-6 sm:py-9 text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl text-white leading-none">3,113</p>
              <p className="mt-2 text-xs text-white/60">sq. ft.</p>
              <p className="mt-4 text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#e6d2a0] leading-snug">
                RERA carpet area in the project’s own figures
              </p>
            </div>
            <p className="col-span-2 text-xs text-gray-500 text-center">
              Same home, Type 1. Neither figure is wrong.
            </p>
          </div>
        </div>
      </GuideSection>

      {/* Definitions */}
      <GuideSection tone="cream" id="saleable-area-vs-carpet-area">
        <GuideHeading eyebrow="Four terms, one home">Saleable Area vs Carpet Area</GuideHeading>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <ol className="space-y-4">
              {definitions.map((item, index) => (
                <li
                  key={item.term}
                  className="flex gap-4 rounded-lg border border-[#e5dcc5] bg-white px-5 py-5"
                >
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0d2029] text-[#e6d2a0] text-sm font-semibold flex items-center justify-center"
                  >
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                    <strong className="text-gray-900">{item.term}</strong> {item.body}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-lg border-l-4 border-[#DCA54A] bg-white px-5 py-5 text-gray-700 text-[15px] md:text-base leading-relaxed shadow-sm">
              A January 2024 order from UP RERA limits apartment sales in the state to carpet area,
              so the RERA figure is the one that goes on the agreement.
            </div>
          </div>

          <AreaNestDiagram />
        </div>
      </GuideSection>

      {/* The area table */}
      <GuideSection id="carpet-area-at-trecento-residences">
        <GuideHeading eyebrow="The published figures">Carpet Area at Trecento Residences</GuideHeading>
        <p className={`mt-7 max-w-3xl ${guideText}`}>
          Trecento Residences has two home types, and both come with five published areas. All
          figures are in sq. ft.
        </p>

        <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
              <table className="w-full text-sm md:text-base text-left">
                <thead className="bg-[#FAF8F4] text-[#a8761c] uppercase text-xs tracking-wider">
                  <tr>
                    <th scope="col" className="px-3 md:px-5 py-4">
                      Area
                    </th>
                    <th scope="col" className="px-3 md:px-5 py-4 text-right">
                      Type 1
                    </th>
                    <th scope="col" className="px-3 md:px-5 py-4 text-right">
                      Type 2
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {areaRows.map((row) => (
                    <tr
                      key={row.area}
                      className={`border-t border-[#e5dcc5] ${
                        "strong" in row && row.strong ? "bg-[#FAF8F4] font-semibold text-gray-900" : ""
                      }`}
                    >
                      <th
                        scope="row"
                        className={`px-3 md:px-5 py-3.5 text-gray-900 ${
                          "strong" in row && row.strong ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {row.area}
                      </th>
                      <td className="px-3 md:px-5 py-3.5 text-right text-gray-800 whitespace-nowrap">
                        {row.type1}
                      </td>
                      <td className="px-3 md:px-5 py-3.5 text-right text-gray-800 whitespace-nowrap">
                        {row.type2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-500 italic leading-relaxed">
              Areas are from the project brochure and are subject to final measurement.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-5">
              Where the saleable area goes
            </p>
            <AreaCompositionBars />
          </div>
        </div>

        <h3 className="mt-14 text-xl md:text-2xl text-gray-900">A few points:</h3>
        <ul className="mt-6 grid md:grid-cols-3 gap-5">
          <li className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] p-6 text-gray-700 text-[15px] leading-relaxed">
            <strong className="block text-gray-900 text-base mb-2">
              Carpet is about 61% to 62% of saleable area.
            </strong>
            NCR’s average loading of 41% works out to about 71%, so the share here is lower, and the
            balcony is the main reason.
          </li>
          <li className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] p-6 text-gray-700 text-[15px] leading-relaxed">
            <strong className="block text-gray-900 text-base mb-2">
              The balcony alone is 806.65 sq. ft.
            </strong>
            That is 16% of saleable area, in one continuous run all round the home.
          </li>
          <li className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] p-6 text-gray-700 text-[15px] leading-relaxed">
            <strong className="block text-gray-900 text-base mb-2">Not every part is itemised.</strong>
            Covered area, balcony and common floor area add up to about 4,435 sq. ft. in Type 1. Ask
            for the remaining 615 sq. ft. or so as a line on the area statement.
          </li>
        </ul>
      </GuideSection>

      <GuideCtaBand
        tone="cream"
        eyebrow="In writing"
        title="Ask for the Area Statement of Either Home"
        body="RERA carpet, covered area, balcony, common floor area and the part of saleable area that isn’t itemised, for Type 1 and Type 2, along with the current cost sheet."
        actions={[
          { kind: "enquire", label: "Request the Area Statement" },
          { kind: "whatsapp", message: whatsappMessage },
        ]}
      />

      {/* Listings vs RERA */}
      <GuideSection tone="cream" id="listing-carpet-vs-rera-carpet">
        <GuideHeading eyebrow="Why the numbers differ">
          Carpet Area on Listings vs RERA Carpet Area
        </GuideHeading>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className={`space-y-5 ${guideText}`}>
            <p>
              Add the balcony to the RERA carpet and you get 3,919 sq. ft. for Type 1 and 3,867 sq.
              ft. for Type 2. Those are the figures one portal shows as carpet area for this
              project.
            </p>
            <p>
              Some listings use carpet loosely, to mean all the floor that is yours alone. RERA is
              stricter. A balcony for your exclusive use is left out of carpet area and stated on
              its own.
            </p>
            <p>
              Only the RERA figure goes into the builder-buyer agreement and the UP RERA record. So
              when a listing and a brochure disagree, check whether one of them has folded the
              balcony in.
            </p>
          </div>
          <ListingEquation />
        </div>
      </GuideSection>

      {/* Balcony table */}
      <GuideSection id="is-balcony-included-in-carpet-area">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-3">
            <GuideHeading eyebrow="It depends where you look">
              Is a Balcony Included in Carpet Area?
            </GuideHeading>

            <div className="mt-8 overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
              <table className="w-full text-sm md:text-base text-left">
                <thead className="bg-[#FAF8F4] text-[#a8761c] uppercase text-xs tracking-wider">
                  <tr>
                    <th scope="col" className="px-3 md:px-5 py-4 w-[42%]">
                      Where
                    </th>
                    <th scope="col" className="px-3 md:px-5 py-4">
                      Is the balcony counted?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {balconyRows.map((row) => (
                    <tr key={row.where} className="border-t border-[#e5dcc5] align-top">
                      <th scope="row" className="px-3 md:px-5 py-3.5 font-semibold text-gray-900">
                        {row.where}
                      </th>
                      <td className="px-3 md:px-5 py-3.5 text-gray-700">
                        <span className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className={`mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] ${verdictBadge[row.verdict].className}`}
                          >
                            {verdictBadge[row.verdict].icon}
                          </span>
                          <span>{row.answer}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={`mt-7 ${guideText}`}>
              At Trecento Residences the balcony is a feature: a full walk-round deck in a tower
              set inside the golf course. The point is to price it knowingly.
            </p>
          </div>

          <GuideFigure
            className="lg:col-span-2"
            src={balconyStack}
            alt="Looking up at balconies with glass railings stacked along the corner of a residential tower"
            caption="Representative image."
            aspect="aspect-[4/5]"
          />
        </div>
      </GuideSection>

      {/* Price per sq. ft. */}
      <GuideSection tone="cream" id="price-per-sq-ft-on-carpet-area">
        <GuideHeading eyebrow="Restating a quote">Price per Sq. Ft. on Carpet Area</GuideHeading>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className={`space-y-5 ${guideText}`}>
            <p>
              Prices are on request. Whatever rate you’re quoted on saleable area, you can restate
              it two ways:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-[13px] w-3 h-px bg-[#DCA54A] flex-shrink-0" />
                <span>
                  <strong className="text-gray-900">On RERA carpet:</strong> multiply by about 1.62
                  for Type 1 or 1.63 for Type 2.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-[13px] w-3 h-px bg-[#DCA54A] flex-shrink-0" />
                <span>
                  <strong className="text-gray-900">On carpet plus balcony:</strong> multiply by
                  about 1.29.
                </span>
              </li>
            </ul>
            <p>
              So ₹1,000 per sq. ft. on saleable area is about ₹1,620 on RERA carpet and about ₹1,290
              on carpet plus balcony. Use the first when you compare with another project’s RERA
              carpet. Use the second only against a home with a balcony of similar size.
            </p>
            <p>
              One detail in this tower: Type 1 is 50 sq. ft. larger on saleable area and about 53
              sq. ft. larger on carpet. At the same rate it works out slightly cheaper per sq. ft.
              of carpet.
            </p>
            <p>
              Stamp duty, registration, GST, maintenance, club membership and utility connections
              are extra. The home is delivered as a finished shell, so add your interiors too. Ask
              for the cost sheet through the{" "}
              <Link href="/price" className={guideLink}>
                Trecento Residences price
              </Link>{" "}
              page.
            </p>
          </div>

          <div>
            <RateLadder />
            <GuideActions
              className="mt-6"
              actions={[
                { kind: "enquire", label: "Get the Cost Sheet" },
                { kind: "link", label: "How a Quote Is Built", href: "/price" },
              ]}
            />
          </div>
        </div>
      </GuideSection>

      {/* Videos */}
      <GuideVideos
        tone="white"
        eyebrow="Watch"
        title="Carpet Area, Loading and the UP RERA Order on Video"
        intro="Two broadcast reports on the terms used in this guide, and the developer’s walkthrough of the project."
        videos={videos}
        note="The NEWS9 and NDTV videos are independent broadcasts shared for general background; they are not about Trecento Residences and are not produced or endorsed by the developer or by this website. All videos play from YouTube when you press play."
      />

      {/* Before you sign */}
      <GuideSection tone="cream" id="before-you-sign">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2">
            <GuideHeading eyebrow="A five-point check">Before You Sign</GuideHeading>
            <GuideFigure
              className="mt-8"
              src={floorPlanGlasses}
              alt="Reading glasses, a tape measure and a pen laid on a printed floor plan"
              caption="Representative image of a generic floor plan."
              aspect="aspect-[4/3]"
            />
          </div>

          <ol className="lg:col-span-3 space-y-4">
            <li className="flex gap-4 rounded-lg border border-[#e5dcc5] bg-white px-5 py-5">
              <FaSearch aria-hidden="true" className="mt-1 flex-shrink-0 text-[#c8922a] text-lg" />
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                <strong className="text-gray-900">Verify on UP RERA.</strong> Search {project.rera}{" "}
                on{" "}
                <a
                  href={project.reraUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={guideLink}
                >
                  up-rera.in
                </a>
                . The unit table shows carpet and balcony area in sq. m, so multiply by 10.764.
                Completion on record is 17 July 2028.
              </p>
            </li>
            <li className="flex gap-4 rounded-lg border border-[#e5dcc5] bg-white px-5 py-5">
              <FaClipboardCheck aria-hidden="true" className="mt-1 flex-shrink-0 text-[#c8922a] text-lg" />
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                <strong className="text-gray-900">Get every area in writing.</strong> Ask for RERA
                carpet, covered area, balcony, common floor area and the part of saleable area that
                isn’t itemised.
              </p>
            </li>
            <li className="flex gap-4 rounded-lg border border-[#e5dcc5] bg-white px-5 py-5">
              <FaFileSignature aria-hidden="true" className="mt-1 flex-shrink-0 text-[#c8922a] text-lg" />
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                <strong className="text-gray-900">Read the agreement.</strong> Carpet and balcony
                should appear as separate figures. Areas are subject to final measurement, so ask
                how a difference is settled.
              </p>
            </li>
            <li className="flex gap-4 rounded-lg border border-[#e5dcc5] bg-white px-5 py-5">
              <FaReceipt aria-hidden="true" className="mt-1 flex-shrink-0 text-[#c8922a] text-lg" />
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                <strong className="text-gray-900">Ask which area maintenance is billed on.</strong>{" "}
                A 16% balcony makes the answer matter.
              </p>
            </li>
            <li className="flex gap-4 rounded-lg border border-[#e5dcc5] bg-white px-5 py-5">
              <FaDraftingCompass aria-hidden="true" className="mt-1 flex-shrink-0 text-[#c8922a] text-lg" />
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                <strong className="text-gray-900">Study the plan.</strong> Start with the{" "}
                <Link href="/floor-plans" className={guideLink}>
                  Trecento Residences floor plans
                </Link>
                .
              </p>
            </li>
          </ol>
        </div>
      </GuideSection>

      <GuideCtaBand
        eyebrow="Compare like with like"
        title="Get the Cost Sheet and Area Statement for Type 1 and Type 2"
        body="The authorised channel-partner team can share both, with live availability by floor and golf-course orientation, and arrange a site visit at Jaypee Greens."
        actions={[
          { kind: "enquire", label: "Get the Cost Sheet" },
          { kind: "whatsapp", message: whatsappMessage },
          { kind: "call" },
        ]}
      />

      {/* The project */}
      <GuideSection id="trecento-residences">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <GuideHeading eyebrow="The project">Trecento Residences</GuideHeading>
            <p className={`mt-7 ${guideText}`}>
              <Link href="/about-trecento-residences" className={guideLink}>
                Trecento Residences
              </Link>{" "}
              is a single cylindrical tower of 30 storeys inside the Jaypee Greens golf course in
              Greater Noida. It has 60{" "}
              <Link href="/condominiums" className={guideLink}>
                condominiums
              </Link>
              , two to a floor. The developer is{" "}
              <Link href="/about-gaurs-group" className={guideLink}>
                Gaurs Group
              </Link>
              .
            </p>
            <ul className={`mt-6 space-y-3 ${guideText}`}>
              <li>
                <strong className="text-gray-900">More:</strong>{" "}
                <Link href="/amenities" className={guideLink}>
                  amenities
                </Link>
                ,{" "}
                <Link href="/location-connectivity" className={guideLink}>
                  location and connectivity
                </Link>
                , and the{" "}
                <Link
                  href="/blogs/trecento-residences-by-gaurs-jaypee-greens-buyers-guide-2026"
                  className={guideLink}
                >
                  Trecento Residences buyer’s guide
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Moving from a kothi or villa?{" "}
              <Link href="/villa-vs-flat-downsizing-jaypee-greens" className={guideLink}>
                Read villa vs flat for downsizers
              </Link>
              .
            </p>
          </div>
          <GuideFigure
            src={towerRound}
            alt="A cylindrical apartment tower with balconies wrapping every floor"
            caption="Representative image."
            aspect="aspect-[4/3]"
          />
        </div>
      </GuideSection>

      {/* FAQs */}
      <GuideSection tone="cream" id="faqs" width="narrow">
        <GuideHeading eyebrow="Quick answers" align="center">
          FAQs
        </GuideHeading>
        <div className="mt-10">
          <GuideFaq items={faqs} />
        </div>
      </GuideSection>

      {/* Conclusion */}
      <GuideSection id="conclusion" width="narrow">
        <GuideHeading eyebrow="In short" align="center">
          Conclusion
        </GuideHeading>
        <p className={`mt-8 text-center ${guideText}`}>
          On super built-up area vs carpet area, the balcony is where most of the confusion starts.
          It is inside saleable area and outside RERA carpet, and some listings quietly add it back.
          Ask for carpet and balcony as separate figures, work out your rate both ways, and compare
          like with like.
        </p>
        <p className={`mt-6 text-center ${guideText}`}>
          For the cost sheet and area statement of either home at Trecento Residences,{" "}
          <Link href="/contact-us" className={guideLink}>
            contact us
          </Link>{" "}
          or call{" "}
          <a href={`tel:${project.phoneHref}`} className={guideLink}>
            {project.phone}
          </a>
          .
        </p>
        <GuideActions
          className="mt-8"
          align="center"
          actions={[
            { kind: "enquire", label: "Get the Cost Sheet" },
            { kind: "link", label: "View Floor Plans", href: "/floor-plans" },
            { kind: "brochure" },
          ]}
        />
        <p className="mt-10 text-xs italic text-gray-500 leading-relaxed text-center">
          This page comes from {project.channelPartner}, an authorised channel partner, and not from
          the developer. Areas are from the project brochure and are subject to final measurement.
          Verify all areas on up-rera.in and in the builder-buyer agreement. Photographs on this
          page are representative images and do not show the project.
        </p>
      </GuideSection>

      <EnquirySection
        heading="Ask for the Area Statement and Cost Sheet"
        body="Share your details and the authorised channel-partner team will call you back with RERA carpet, covered, balcony and common floor areas for Type 1 and Type 2, the current cost sheet, and live availability by floor and golf-course orientation."
        showCorporateOffice={false}
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
