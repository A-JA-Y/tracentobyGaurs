import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaLeaf,
  FaLevelUpAlt,
  FaShieldAlt,
  FaSuitcaseRolling,
  FaTools,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import GuideActions from "@/components/guides/GuideActions";
import GuideHero from "@/components/guides/GuideHero";
import GuideVideos, { type GuideVideo } from "@/components/guides/GuideVideos";
import {
  GuideCheckList,
  GuideCtaBand,
  GuideFaq,
  GuideFigure,
  GuideHeading,
  GuideSection,
  guideLink,
  guideText,
} from "@/components/guides/GuideBlocks";
import { SITE_URL, project, layoutProgramme } from "@/data/project";

/*
 * Photography. The kothi, villa, couple and keys frames are free stock photographs
 * from Pexels (Pexels licence — free for commercial use, no attribution required):
 *   kothi-driveway   pexels.com/photo/modern-house-exterior-design-8134821/
 *   kothi-white-lawn pexels.com/photo/white-concrete-house-with-green-grass-lawn-7501130/
 *   villa-lawn-pool  pexels.com/photo/a-villa-with-pool-and-garden-4497544/
 *   couple-at-home   pexels.com/photo/husband-and-wife-spending-time-at-home-4307723/
 *   keys-contract    pexels.com/photo/wooden-house-moder-keys-and-contract-on-table-12955837/
 * Everything else comes from the site's existing asset library. All of it is
 * representative imagery — none of these frames show the project itself.
 */
import kothiDriveway from "@/assets/kothi-driveway.webp";
import kothiLawn from "@/assets/kothi-white-lawn.webp";
import towerRound from "@/assets/tower-facade-3.webp";
import coupleAtHome from "@/assets/couple-at-home.webp";
import livingRoom from "@/assets/living-room-2.webp";
import villaLawn from "@/assets/villa-lawn-pool.webp";
import balconyTerrace from "@/assets/balcony-terrace.webp";
import balconySeating from "@/assets/balcony-view.webp";
import seniorWalk from "@/assets/senior-walk.webp";
import communityLiving from "@/assets/community-living.webp";
import keysContract from "@/assets/keys-contract.webp";
import golfHomes from "@/assets/g-3.webp";
import skywalk from "@/assets/skywalk.webp";
import steppedPool from "@/assets/pool-stepped.webp";
import waterfall from "@/assets/waterfall-rocks.webp";
import amphitheatre from "@/assets/amphitheatre.webp";
import gym from "@/assets/gym-club.webp";
import partyHall from "@/assets/party-hall.webp";

const PAGE_PATH = "/villa-vs-flat-downsizing-jaypee-greens";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Villa vs Flat: Moving from a Kothi to a Luxury Apartment";
const PAGE_HEADLINE =
  "Villa vs Flat for Downsizers: Time to Trade the Kothi for a Golf-Course Apartment?";
const PAGE_DESCRIPTION =
  "Villa vs flat for downsizers: should you swap a kothi or villa for a 5,000 sq ft golf-facing apartment in Jaypee Greens? Space, upkeep, safety and resale.";
const PAGE_IMAGE = `${SITE_URL}/guide-villa-vs-flat.webp`;
const PUBLISHED = "2026-11-18";
const MODIFIED = "2026-11-18";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords:
    "villa vs flat, villa vs flat for downsizers, kothi vs flat, villa or flat which is better, difference between villa and flat, luxury apartments in Jaypee Greens, 4 BHK with servant room in Jaypee Greens, Trecento Residences, Tracento by Gaurs",
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
        alt: "An independent house beside a cylindrical apartment tower — villa vs flat",
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

const keyFacts = [
  { value: "60", label: "Homes in a single tower" },
  { value: "2", label: "Homes on each floor" },
  { value: "3,060–3,113", label: "Sq. ft. RERA carpet, on one level" },
  { value: "806.65", label: "Sq. ft. all-round balcony" },
  { value: "July 2028", label: "Proposed completion" },
];

const dayToDay = [
  {
    icon: <FaLevelUpAlt />,
    point: "Stairs",
    kothi: "Several floors",
    flat: "One level, lift to the door",
  },
  {
    icon: <FaUsers />,
    point: "Staff",
    kothi: "Gardener, guard, help on each floor",
    flat: "One live-in help is often enough",
  },
  {
    icon: <FaTools />,
    point: "Repairs",
    kothi: "Roof, walls, pumps, garden: all yours",
    flat: "Building managed for everyone",
  },
  {
    icon: <FaShieldAlt />,
    point: "Security",
    kothi: "Your own arrangements",
    flat: "Gated, with staffed entry",
  },
  {
    icon: <FaLeaf />,
    point: "Outdoor space",
    kothi: "Lawn and terrace",
    flat: "Balcony and landscaped grounds",
  },
  {
    icon: <FaSuitcaseRolling />,
    point: "Travel",
    kothi: "The house needs watching",
    flat: "Lock the door and leave",
  },
  {
    icon: <FaUserFriends />,
    point: "Neighbours",
    kothi: "The street",
    flat: "A small, settled community",
  },
];

const amenityTiles = [
  { src: skywalk, label: "Arched skywalk", alt: "A raised timber walkway stepping through planting" },
  { src: steppedPool, label: "Swimming pool and stepped pool", alt: "A stepped pool lit at dusk" },
  { src: waterfall, label: "Waterfall area", alt: "Water falling over rocks in a landscaped garden" },
  { src: amphitheatre, label: "Open-air amphitheatre", alt: "Curved stone seating of an open-air amphitheatre" },
  { src: gym, label: "Clubhouse gym", alt: "A gymnasium with full-height windows" },
  { src: partyHall, label: "Party hall and lounge", alt: "A party hall laid out for a celebration" },
];

const downsizeIf = [
  "The stairs, the staff and the repairs are taking more than they give",
  "Your children live elsewhere and you travel to see them often",
  "You want security and a small, settled community",
  "You’d rather walk round a golf course than look after a lawn",
];

const keepIf = [
  "Your family still gathers there often and needs the space",
  "The land is your main long-term asset and you can manage the upkeep",
  "You enjoy running the household",
  "You’re not ready to wait until 2028 to move",
];

const faqs = [
  {
    q: "Villa vs flat: should I downsize from a kothi to an apartment?",
    a: "If the stairs, staff and repairs have become a burden, and you value security and easy travel, a large single-level apartment is often the better fit. If the land is your main asset and the family still uses the space, keeping the house can make sense.",
  },
  {
    q: "Is a 5,000 sq. ft. apartment really downsizing?",
    a: "Downsizing here means less to run, not less space. At Trecento, the carpet area is about 3,060–3,113 sq. ft. on a single level, with a lift and managed upkeep.",
  },
  {
    q: "How many homes are there at Trecento Residences?",
    a: "60 homes in a single 30-storey tower, with two homes on each floor.",
  },
  {
    q: "What is the carpet area at Trecento?",
    a: "Type 1 has 3,112.63 sq. ft. carpet with 5,050 sq. ft. saleable, and Type 2 has 3,059.99 sq. ft. carpet with 5,000 sq. ft. saleable. Both are 4 BHK.",
  },
  {
    q: "What is the price of Trecento Residences?",
    a: "Prices are shared on request, because floor level and golf-course orientation change the price of each home.",
  },
  {
    q: "When is possession?",
    a: "The project launched in October 2023, with proposed completion in July 2028.",
  },
  {
    q: "Is there a servant room?",
    a: "Yes. Each residence has a servant room with its own toilet and a utility balcony.",
  },
  {
    q: "Is Trecento Residences RERA registered?",
    a: `Yes, under UP RERA number ${project.rera}. You can verify it at up-rera.in.`,
  },
];

/*
 * Videos — all published by the developer's own YouTube channels and embeddable.
 * Only the id is needed to play them; titles and running times are as shown on YouTube.
 */
const videos: GuideVideo[] = [
  {
    id: "K4rMh0Iu_54",
    kind: "Homeowner story",
    title: "Rendezvous by the Greens, Ep. 4: “This is the right place for us”",
    channel: "Gaurs | Luxury",
    duration: "2:38",
    caption:
      "Two Trecento Residences homeowners share their story in the developer’s “Rendezvous by the Greens” series.",
  },
  {
    id: "GbhvSVvKwyw",
    kind: "Developer film",
    title: "Trecento Residences: the full walkthrough",
    channel: "Gaurs Group",
    duration: "5:21",
    caption: "The developer’s full walkthrough film of the project.",
  },
  {
    id: "8OWxxiyuidg",
    kind: "Developer film",
    title: "Unveiling the sample residence",
    channel: "Gaurs | Luxury",
    duration: "2:15",
    caption:
      "The developer’s film of the sample residence: a way to see how a single-level home of this size is laid out.",
  },
  {
    id: "bIQTi2fFO-4",
    kind: "Homeowner story",
    title: "Rendezvous by the Greens, Ep. 5: “This is like living in a resort”",
    channel: "Gaurs | Luxury",
    duration: "1:45",
    caption: "Another homeowner’s story from the same series.",
  },
];

const whatsappMessage =
  "Hi, I read your villa vs flat guide. Please share the price list and availability for Trecento Residences at Jaypee Greens.";

export default function VillaVsFlatPage() {
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
                  { "@type": "ListItem", position: 2, name: "Villa vs Flat", item: PAGE_URL },
                ],
              },
            ],
          }),
        }}
      />

      <GuideHero
        eyebrow="Downsizing Guide"
        title={PAGE_HEADLINE}
        subtitle="Should you swap a kothi or villa for a 5,000 sq. ft. golf-facing apartment in Jaypee Greens? Space, upkeep, safety and resale, side by side."
        breadcrumb="Villa vs Flat"
        meta={`Updated November 2026 · ${project.channelPartner}, authorised channel partner`}
        images={[
          {
            src: kothiDriveway,
            alt: "A two-storey independent house behind a gated, paved driveway",
            position: "object-[60%_50%]",
          },
          {
            src: towerRound,
            alt: "A cylindrical apartment tower with balconies wrapping every floor",
            position: "object-[40%_50%]",
          },
        ]}
      >
        <GuideActions
          tone="dark"
          align="center"
          actions={[
            { kind: "enquire", label: "Get the Price List" },
            { kind: "brochure" },
            { kind: "call" },
          ]}
        />
      </GuideHero>

      <ModalWrapper />

      {/* Introduction */}
      <GuideSection>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div className={`lg:col-span-3 space-y-6 ${guideText}`}>
            <p className="text-lg md:text-xl text-gray-800 leading-[1.7]">
              Many NCR families live in a kothi or villa that made perfect sense when the children
              were at home. Now the children work in Bengaluru, London or Toronto, and the house
              still has three floors, a lawn and a staff of four to manage. Every monsoon brings a
              new leak, and every holiday raises the same worry about who will watch the house.
            </p>
            <p>
              That’s the villa vs flat question for downsizers. It isn’t about squeezing into less
              space. It’s about living with less to run. If you’re asking yourself “villa or flat,
              which is better?” at this stage of life, the answer often depends less on the property
              and more on how much running a household you still want to do.
            </p>
          </div>
          <GuideFigure
            className="lg:col-span-2"
            src={coupleAtHome}
            alt="A couple sitting together at an open doorway, looking out at the plants outside"
            aspect="aspect-[4/3]"
          />
        </div>

        <dl className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-5 border-t border-l border-[#e5dcc5]">
          {keyFacts.map((fact, index) => (
            <div
              key={fact.label}
              className={`border-b border-r border-[#e5dcc5] px-4 py-6 flex flex-col-reverse justify-end ${
                index === keyFacts.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <dt className="mt-2 text-[10px] uppercase tracking-[0.14em] text-gray-500 leading-snug">
                {fact.label}
              </dt>
              <dd className="text-2xl md:text-[26px] text-[#c8922a] leading-none">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </GuideSection>

      {/* What downsizing really means */}
      <GuideSection tone="cream" id="what-downsizing-means">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <GuideHeading eyebrow="Less to run, not less room">What Downsizing Really Means</GuideHeading>
            <div className={`mt-7 space-y-5 ${guideText}`}>
              <p>
                Moving to a flat doesn’t have to mean smaller rooms. At Trecento Residences, Type 1
                has a RERA carpet area of 3,112.63 sq. ft. against 5,050 sq. ft. saleable, and Type 2
                has 3,059.99 sq. ft. carpet against 5,000 sq. ft. saleable. Both are 4 BHK. That’s
                roughly 61% of the saleable figure as actual carpet, all on one floor.
              </p>
              <p>
                So the real difference between villa and flat for a downsizer is the number of
                things you have to manage. You give up the plot, the separate floors and the house
                that runs on your attention. You keep the space you actually use.
              </p>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Not sure how carpet and saleable area differ?{" "}
              <Link href="/super-built-up-area-vs-carpet-area" className={guideLink}>
                Read super built-up area vs carpet area
              </Link>
              .
            </p>
          </div>

          <div>
            <GuideFigure
              src={livingRoom}
              alt="A wide living room on a single level with full-height windows on two sides"
              caption="Representative image."
            />
            <div className="mt-6 overflow-x-auto rounded-lg border border-[#e5dcc5] bg-white shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#a8761c] uppercase text-[11px] tracking-wider">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Home
                    </th>
                    <th scope="col" className="px-4 py-3">
                      RERA carpet
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Saleable
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#e5dcc5]">
                    <th scope="row" className="px-4 py-3 font-semibold text-gray-900">
                      Type 1 · 4 BHK
                    </th>
                    <td className="px-4 py-3 text-gray-600">3,112.63 sq. ft.</td>
                    <td className="px-4 py-3 text-gray-600">5,050 sq. ft.</td>
                  </tr>
                  <tr className="border-t border-[#e5dcc5]">
                    <th scope="row" className="px-4 py-3 font-semibold text-gray-900">
                      Type 2 · 4 BHK
                    </th>
                    <td className="px-4 py-3 text-gray-600">3,059.99 sq. ft.</td>
                    <td className="px-4 py-3 text-gray-600">5,000 sq. ft.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </GuideSection>

      {/* Kothi vs flat */}
      <GuideSection id="kothi-vs-flat">
        <GuideHeading eyebrow="Side by side" align="center">
          Kothi vs Flat: What Changes Day to Day
        </GuideHeading>

        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-6">
          {[
            {
              src: villaLawn,
              label: "Kothi / Villa",
              alt: "A white villa with a lawn, a stepping-stone path and a swimming pool",
            },
            {
              src: balconyTerrace,
              label: "Luxury Flat",
              alt: "A long balcony with a steel and glass railing looking out over a green skyline",
            },
          ].map((card) => (
            <div key={card.label} className="tile rounded-lg aspect-[4/3] md:aspect-[16/9]">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 50vw, 500px"
                className="object-cover"
              />
              <div className="scrim" />
              <p className="absolute bottom-3 left-4 md:bottom-5 md:left-6 text-white text-sm md:text-xl font-semibold tracking-wide">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
          <table className="w-full text-sm md:text-base text-left">
            <thead className="bg-[#FAF8F4] text-[#a8761c] uppercase text-[11px] md:text-xs tracking-wider">
              <tr>
                <th scope="col" className="px-3 md:px-5 py-4 w-[26%]">
                  Point
                </th>
                <th scope="col" className="px-3 md:px-5 py-4 w-[37%]">
                  Kothi / Villa
                </th>
                <th scope="col" className="px-3 md:px-5 py-4 w-[37%]">
                  Luxury Flat
                </th>
              </tr>
            </thead>
            <tbody>
              {dayToDay.map((row) => (
                <tr key={row.point} className="border-t border-[#e5dcc5] align-top">
                  <th scope="row" className="px-3 md:px-5 py-4 font-semibold text-gray-900">
                    <span className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="hidden sm:inline text-[#c8922a] text-base">
                        {row.icon}
                      </span>
                      {row.point}
                    </span>
                  </th>
                  <td className="px-3 md:px-5 py-4 text-gray-600">{row.kothi}</td>
                  <td className="px-3 md:px-5 py-4 text-gray-900 bg-[#FAF8F4]/70">{row.flat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">Photographs are representative images.</p>
      </GuideSection>

      {/* Videos */}
      <GuideVideos
        tone="cream"
        eyebrow="Watch"
        title="See the Homes, and Hear from People Who Chose Them"
        intro="Films from the developer’s own channels: two homeowner stories, the full project walkthrough and a tour of the sample residence."
        videos={videos}
        note="Videos are published by Gaurs Group on YouTube and are embedded here for reference. They play from YouTube when you press play."
      />

      {/* Feature rows */}
      <GuideSection id="outdoor-space">
        <div className="space-y-16 md:space-y-24">
          {/* Outdoor space */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="lg:order-2">
              <GuideHeading eyebrow="In place of the lawn">Outdoor Space</GuideHeading>
              <p className={`mt-7 ${guideText}`}>
                The lawn is usually the hardest thing to give up. At Trecento, each home has a
                continuous all-round balcony of 806.65 sq ft. That’s a wraparound outdoor room for
                morning tea, potted plants and evening walks without leaving home. At ground level,
                wooden decks with planting are in the landscape if you still want to feel grass
                underfoot.
              </p>
            </div>
            <GuideFigure
              className="lg:order-1"
              src={balconySeating}
              alt="A balcony furnished with outdoor seating, high above the city"
              caption="Representative image."
            />
          </div>

          {/* Staff and household */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center" id="staff-and-household">
            <div>
              <GuideHeading eyebrow="One home to run">Staff and Household</GuideHeading>
              <p className={`mt-7 ${guideText}`}>
                A kothi typically needs several staff to keep running. A downsized home usually
                needs one live-in help, and the layout here plans for that. Each residence includes a
                servant room with toilet and utility balcony, which makes Trecento one of the few
                options for a 4 BHK with servant room in Jaypee Greens at this size. Your help gets
                proper quarters, and you don’t have to manage a separate outhouse.
              </p>
            </div>
            <div className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-5">
                In every residence
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {layoutProgramme.map((room) => (
                  <li key={room} className="flex items-start gap-2 text-sm text-gray-700">
                    <span aria-hidden="true" className="mt-[9px] w-3 h-px bg-[#DCA54A] flex-shrink-0" />
                    <span>{room}</span>
                  </li>
                ))}
              </ul>
              <Link href="/floor-plans" className={`inline-block mt-6 text-sm ${guideLink}`}>
                See the floor plans
              </Link>
            </div>
          </div>

          {/* Safety */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center" id="safety">
            <div className="lg:order-2">
              <GuideHeading eyebrow="No stairs, no empty house">Safety and Everyday Ease</GuideHeading>
              <p className={`mt-7 ${guideText}`}>
                For many downsizers this decides it. The project has gated security with CCTV and
                video door phone, and its amenities list includes pre-teen, teen and senior areas. A
                single level with a lift means no stairs at 75 or 80. When you travel, there’s no
                empty house standing alone on a street.
              </p>
            </div>
            <GuideFigure
              className="lg:order-1"
              src={seniorWalk}
              alt="Two older men walking together along a quiet, tree-lined lane"
              caption="Representative image."
            />
          </div>

          {/* Community */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center" id="community">
            <div>
              <GuideHeading eyebrow="60 homes, two to a floor">
                A Small Community, Not a Big Society
              </GuideHeading>
              <p className={`mt-7 ${guideText}`}>
                Many kothi owners worry that a flat means living among hundreds of strangers.
                Trecento is the opposite. It’s a single tower of 30 storeys with 60 homes, two per
                floor. That’s closer in scale to a small villa lane than a mass housing society, and
                you’ll know most of your neighbours by name.
              </p>
            </div>
            <GuideFigure
              src={communityLiving}
              alt="Three older neighbours sharing a game of hopscotch in a landscaped garden"
              caption="Representative image."
              aspect="aspect-[4/3]"
            />
          </div>
        </div>
      </GuideSection>

      {/* Amenities */}
      <GuideSection tone="cream" id="amenities">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2">
            <GuideHeading eyebrow="A club you don’t maintain">Amenities</GuideHeading>
            <p className={`mt-7 ${guideText}`}>
              The house gave you a lawn. A tower gives you a club you don’t have to maintain.
              Amenities include an arched skywalk, a swimming pool, a stepped pool, a waterfall area,
              wooden decks, an open-air amphitheatre, a clubhouse gym, an outdoor gym, a party hall
              and lounge, an audio visual room and an indoor gaming zone. See the full{" "}
              <Link href="/amenities" className={guideLink}>
                amenities
              </Link>{" "}
              list.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {amenityTiles.map((tile) => (
                <li key={tile.label} className="tile rounded-lg aspect-square">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 200px"
                    className="object-cover"
                  />
                  <div className="scrim" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-xs md:text-sm font-medium leading-snug">
                    {tile.label}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-gray-500">
              Representative images. Community facilities are shared with the future development
              tower.
            </p>
          </div>
        </div>
      </GuideSection>

      <GuideCtaBand
        eyebrow="See it for yourself"
        title="Walk a Single-Level Home Before You Decide"
        body="Ask the authorised channel-partner team for the price list, live availability across the 60 homes, or a guided site visit at Jaypee Greens."
        actions={[
          { kind: "enquire", label: "Book a Site Visit" },
          { kind: "whatsapp", message: whatsappMessage },
          { kind: "call" },
        ]}
      />

      {/* The money */}
      <GuideSection id="the-money">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2">
            <GuideHeading eyebrow="Costs and payment">
              The Money: Selling the Kothi, Buying the Flat
            </GuideHeading>
            <GuideFigure
              className="mt-8"
              src={keysContract}
              alt="House keys and a small model house resting on a sale agreement"
              aspect="aspect-[4/3]"
            />
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            <div className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] p-6">
              <h3 className="text-lg text-gray-900 mb-2">Price</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Prices at Trecento are shared on request, because floor level and golf-course
                orientation change the price. Ask for the price list on the{" "}
                <Link href="/price" className={guideLink}>
                  price
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] p-6">
              <h3 className="text-lg text-gray-900 mb-2">What the price covers</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                The unit is described as a finished shell; loose furniture and appliances are
                excluded, and stamp duty, registration, GST, monthly maintenance, club membership
                and utility connections are separate costs.
              </p>
            </div>
            <div className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] p-6">
              <h3 className="text-lg text-gray-900 mb-2">Paying for it</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Construction-linked, down-payment and flexi plans are offered, each priced
                differently, with the down-payment plan usually the keenest. If you’re selling a
                kothi, the proceeds can make the down-payment plan worth a look.
              </p>
            </div>
            <div className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] p-6">
              <h3 className="text-lg text-gray-900 mb-2">Tax</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Indian tax law offers relief on capital gains from selling a house if you reinvest
                in another residential house within set time limits. Talk to your CA about how it
                applies to your sale before you sign anything.
              </p>
            </div>
            <div className="sm:col-span-2">
              <GuideActions
                actions={[
                  { kind: "enquire", label: "Ask for the Price List" },
                  { kind: "link", label: "How a Quote Is Built", href: "/price" },
                ]}
              />
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                This guide is general information, not tax, legal or investment advice.
              </p>
            </div>
          </div>
        </div>
      </GuideSection>

      {/* Timing */}
      <GuideSection tone="cream" id="timing-the-move">
        <GuideHeading eyebrow="When to sell, when to move">Timing the Move</GuideHeading>
        <p className={`mt-7 max-w-3xl ${guideText}`}>
          Trecento is under construction. It was launched in October 2023, with proposed completion
          in July 2028. That gives you time to plan. Some owners sell the kothi closer to possession,
          while others rent it out in the meantime. Either way, match your exit from the house to
          your move-in date, not the other way round.
        </p>

        <ol className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { when: "October 2023", what: "Launched", note: `UP RERA no. ${project.rera}` },
            { when: "Now", what: "Under construction", note: "Time to plan the sale of the house" },
            { when: "July 2028", what: "Proposed completion", note: "Line your exit up with move-in" },
          ].map((step, index) => (
            <li
              key={step.when}
              className="relative rounded-lg border border-[#e5dcc5] bg-white px-6 py-6"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Step {index + 1}
              </span>
              <p className="mt-2 text-2xl text-[#c8922a] leading-none">{step.when}</p>
              <p className="mt-3 text-gray-900 font-semibold">{step.what}</p>
              <p className="mt-1 text-sm text-gray-600">{step.note}</p>
            </li>
          ))}
        </ol>
      </GuideSection>

      {/* Investment */}
      <GuideSection id="investment">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <GuideHeading eyebrow="The honest answer">Villa vs Flat Investment</GuideHeading>
            <div className={`mt-7 space-y-5 ${guideText}`}>
              <p>
                Be honest with yourself here. As one Gurgaon market guide puts it, over a decade, the
                plot under a kothi usually appreciates more than an equivalent sum in a flat. If
                pure returns are what matter, keeping the house can make sense.
              </p>
              <p>
                Downsizing is mostly a lifestyle decision. You trade some land-led growth for less
                upkeep, better security and easier travel. Some families do both: they keep the
                kothi as a rental and move into the apartment. For more on the area’s long-term
                case, read{" "}
                <Link
                  href="/blogs/trecento-residences-jaypee-greens-golf-course-investment-2026"
                  className={guideLink}
                >
                  why Trecento is a golf-course investment
                </Link>
                .
              </p>
            </div>
          </div>
          <GuideFigure
            src={golfHomes}
            alt="Aerial view of homes arranged around the fairways of a golf course"
            caption="Representative image."
          />
        </div>
      </GuideSection>

      {/* Decide */}
      <GuideSection tone="cream" id="downsize-or-keep">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-[#DCA54A] bg-white p-7 md:p-9 shadow-sm">
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-6">Downsize If</h2>
            <GuideCheckList items={downsizeIf} />
          </div>
          <div className="rounded-lg border border-[#e5dcc5] bg-white p-7 md:p-9 shadow-sm">
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-6">Keep the House If</h2>
            <ul className="space-y-3">
              {keepIf.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-700 text-[15px] md:text-base leading-relaxed"
                >
                  <span aria-hidden="true" className="mt-[11px] w-3 h-px bg-gray-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GuideSection>

      {/* Questions */}
      <GuideSection id="questions-to-ask">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2">
            <GuideHeading eyebrow="Due diligence">Questions to Ask Before You Decide</GuideHeading>
            <p className={`mt-7 ${guideText}`}>
              Our{" "}
              <Link
                href="/blogs/trecento-residences-by-gaurs-jaypee-greens-buyers-guide-2026"
                className={guideLink}
              >
                complete buyer’s guide
              </Link>{" "}
              covers the project in detail.
            </p>
            <GuideFigure
              className="mt-8 hidden lg:block"
              src={kothiLawn}
              alt="A white two-storey house standing on a sloping lawn"
              aspect="aspect-[4/3]"
            />
          </div>

          <ol className="lg:col-span-3 space-y-4">
            <li className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] px-6 py-5 text-gray-700 text-[15px] md:text-base leading-relaxed">
              <strong className="text-gray-900">Specifications:</strong> What exactly does the
              finished shell include, and what will you need to furnish or fit yourself?
            </li>
            <li className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] px-6 py-5 text-gray-700 text-[15px] md:text-base leading-relaxed">
              <strong className="text-gray-900">Second tower:</strong> A future development tower
              will share community facilities, so ask how its construction will affect residents.
            </li>
            <li className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] px-6 py-5 text-gray-700 text-[15px] md:text-base leading-relaxed">
              <strong className="text-gray-900">Lifts and backup:</strong> How many lifts serve the
              tower, and what backup do they have?
            </li>
            <li className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] px-6 py-5 text-gray-700 text-[15px] md:text-base leading-relaxed">
              <strong className="text-gray-900">Running costs:</strong> What are the maintenance
              rate, club fee and parking allotment?
            </li>
            <li className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] px-6 py-5 text-gray-700 text-[15px] md:text-base leading-relaxed">
              <strong className="text-gray-900">RERA:</strong> Verify the project under UP RERA
              number {project.rera} at{" "}
              <a
                href={project.reraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={guideLink}
              >
                up-rera.in
              </a>
              .
            </li>
            <li className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] px-6 py-5 text-gray-700 text-[15px] md:text-base leading-relaxed">
              <strong className="text-gray-900">The sale:</strong> Get your CA’s view on the tax on
              your kothi sale.
            </li>
          </ol>
        </div>
      </GuideSection>

      {/* The project */}
      <GuideSection tone="cream" id="trecento-residences">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="lg:order-2">
            <GuideHeading eyebrow="The project">Trecento Residences</GuideHeading>
            <p className={`mt-7 ${guideText}`}>
              Trecento Residences - A by Gaurs is developed by Gaursons Group through the project
              entity Golf Lake LLP. It’s in Jaypee Greens near Pari Chowk, Greater Noida, and it’s
              often searched as “Tracento by Gaurs”. With only 60 homes, it’s one of the most
              exclusive luxury apartments in Jaypee Greens.
            </p>
            <ul className={`mt-6 space-y-3 ${guideText}`}>
              <li>
                <strong className="text-gray-900">Homes:</strong>{" "}
                <Link href="/condominiums" className={guideLink}>
                  condominiums
                </Link>{" "}
                and{" "}
                <Link href="/floor-plans" className={guideLink}>
                  floor plans
                </Link>
              </li>
              <li>
                <strong className="text-gray-900">More:</strong>{" "}
                <Link href="/about-trecento-residences" className={guideLink}>
                  About Trecento Residences
                </Link>
                ,{" "}
                <Link href="/about-gaurs-group" className={guideLink}>
                  the developer
                </Link>{" "}
                and{" "}
                <Link href="/location-connectivity" className={guideLink}>
                  location
                </Link>
              </li>
            </ul>
          </div>
          <GuideFigure
            className="lg:order-1"
            src={towerRound}
            alt="A cylindrical apartment tower with balconies wrapping every floor"
            caption="Representative image."
            aspect="aspect-[4/3]"
          />
        </div>
      </GuideSection>

      {/* FAQs */}
      <GuideSection id="faqs" width="narrow">
        <GuideHeading eyebrow="Quick answers" align="center">
          FAQs
        </GuideHeading>
        <div className="mt-10">
          <GuideFaq items={faqs} />
        </div>
      </GuideSection>

      {/* Conclusion */}
      <GuideSection tone="cream" id="conclusion" width="narrow">
        <GuideHeading eyebrow="In short" align="center">
          Conclusion
        </GuideHeading>
        <p className={`mt-8 text-center ${guideText}`}>
          For downsizers, villa vs flat is really a choice between running a house and living in a
          home. A kothi keeps your land and your space, along with the staff, the stairs and the
          worry every time you travel. A small, golf-facing tower keeps the space you actually use,
          adds a wraparound balcony and gated security, and lets you lock the door and leave. Choose
          the life you want for the next twenty years, not the one the house has been asking of you.
        </p>
        <p className={`mt-6 text-center ${guideText}`}>
          To get the price list for Trecento Residences,{" "}
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
            { kind: "enquire", label: "Get the Price List" },
            { kind: "whatsapp", message: whatsappMessage },
            { kind: "brochure" },
          ]}
        />
        <p className="mt-10 text-xs italic text-gray-500 leading-relaxed text-center">
          This is not the official website of developer, it belongs to the authorised channel
          partner {project.channelPartner}, and it is for information and marketing purposes only.
          Photographs on this page are representative images and do not show the project.
        </p>
      </GuideSection>

      <EnquirySection
        heading="Planning a Move from a Kothi or Villa?"
        body="Share your details and the authorised channel-partner team will call you back with the current price list, live availability by floor and golf-course orientation, and help arranging a site visit at Jaypee Greens. Sixty homes, two to a floor, in a single 30-storey tower."
        showCorporateOffice={false}
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
