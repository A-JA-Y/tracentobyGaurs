import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import {
  SITE_URL,
  project,
  renaissanceAmenities,
  bloomsburyAmenities,
  townshipPrivileges,
  peaceOfMind,
} from "@/data/project";

export const metadata: Metadata = {
  title: "Trecento Residences Amenities | Renaissance Landscape & Bloomsbury Clubhouse",
  description:
    "Explore the amenities at Trecento Residences — the Renaissance landscape with its arched skywalk, stepped pool and amphitheatre, the Bloomsbury clubhouse, and Jaypee Greens township privileges.",
  alternates: { canonical: `${SITE_URL}/amenities` },
  keywords:
    "Trecento Residences amenities, Renaissance landscape, Bloomsbury clubhouse, Jaypee Greens amenities, skywalk, stepped pool, Greater Noida luxury amenities",
};

const faqs = [
  {
    q: "What amenities does Trecento Residences offer?",
    a: "Two named collections. The Renaissance landscape includes a towering arched skywalk above the greens, landscaped pathways, a swimming pool, a sculptural stepped pool, a waterfall area, wooden decks with planting, an outdoor open gym, an open-air amphitheatre, pre-teen, teen and senior citizen areas, and a pray area (deity place). The Bloomsbury clubhouse holds a gymnasium, lounge, audio visual room, meeting room, multi-purpose party hall and an indoor gaming zone with table tennis, snooker, chess, cards and carrom.",
  },
  {
    q: "Does the project have a golf course?",
    a: "The tower stands in the middle of Jaypee Greens' international 18-hole golf course, designed by Greg Norman and among the world's longest, with panoramic views from every all-round balcony. The course is a township facility developed and managed by Jaiprakash Associates Ltd.",
  },
  {
    q: "Is there a swimming pool at Trecento Residences?",
    a: "Yes — a swimming pool and a separate sculptural stepped pool, alongside a waterfall area and wooden decks with planting beds within the Renaissance landscape.",
  },
  {
    q: "What is the Bloomsbury clubhouse?",
    a: "Bloomsbury is the project's clubhouse. It houses the gymnasium, a lounge, an audio visual room with tiered recliner seating, a meeting room, a multi-purpose party hall and an indoor gaming zone.",
  },
  {
    q: "Are the clubhouse facilities shared?",
    a: "Yes. The community facilities — club with gymnasium, party hall, swimming pool, landscaped garden, audio visual room, lounge, meeting room and indoor games — are common to Tower A and the future development tower.",
  },
  {
    q: "What township facilities do residents get access to?",
    a: "Jaypee Greens spans 182.92 hectares (452 acres) and offers an 18-hole international golf course, a golf practice range, a golf and spa resort, the Boomerang Club, The Atlantic sports complex, an Olympic-size swimming pool, indoor basketball, synthetic badminton, squash and lawn tennis courts, a temple, a school, a town centre and a fire station. Certain facilities are members-only and/or chargeable.",
  },
  {
    q: "Is Trecento Residences a gated and secure community?",
    a: "Yes. A secure entrance lobby with CCTV, a video door phone and an in-home video intercom sit inside the gated Jaypee Greens township, alongside fire sprinklers, hydrants and smoke detectors as per approved plans.",
  },
  {
    q: "Are the amenities ready to use?",
    a: "The project was launched in October 2023 and is under construction, with completion proposed for July 2028. The wider Jaypee Greens township amenities are already operational. Buyers should confirm the delivery schedule for project-specific facilities with the authorised sales team.",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Amenities", item: `${SITE_URL}/amenities` },
            ],
          }),
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Schema Markup - Channel partner */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "@id": `${SITE_URL}/#organization`,
            name: `${project.channelPartner} - Authorised Channel Partner`,
            description: `Authorised channel partner for ${project.name}, an ultra-luxury 60-residence tower at Jaypee Greens, Greater Noida.`,
            url: `${SITE_URL}/`,
            image: `${SITE_URL}/trecento-hero.webp`,
            telephone: project.phone,
            email: project.email,
            priceRange: "₹₹₹",
            areaServed: { "@type": "Place", name: "Greater Noida, Uttar Pradesh" },
            address: {
              "@type": "PostalAddress",
              streetAddress: project.addressLine,
              addressLocality: project.locality,
              addressRegion: project.state,
              postalCode: project.pin,
              addressCountry: "IN",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:00",
              closes: "19:00",
            },
          }),
        }}
      />

      {/* Page Banner with Hero Image */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/trecento-tower.webp"
            alt="The Trecento Residences tower above the Renaissance landscape at Jaypee Greens, Greater Noida"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-widest font-semibold mb-3">
            Lifestyle
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Amenities
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            A landscape called Renaissance and a clubhouse called Bloomsbury — inside a 452-acre
            township that was already built and living before the tower began.
          </p>
        </div>
      </section>

      <ModalWrapper />
      <Amenities />

      {/* Intro */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trecento Residences Amenities
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            Amenities at Trecento Residences work at two scales, and it is worth being precise
            about which is which. At the scale of the project, there is the{" "}
            <strong>Renaissance</strong> landscape at the base of the tower and the{" "}
            <strong>Bloomsbury</strong> clubhouse — the facilities the sixty households here own
            and share. At the scale of the address, there is Jaypee Greens: 452 acres of
            established township, developed and managed by Jaiprakash Associates Ltd., with an
            18-hole international golf course at its centre.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            The distinction matters because it changes what you are buying. Most new luxury
            projects have to build their entire amenity story from scratch and ask you to believe
            the renders. Here the township already exists, already works, and already has the
            trees. What the project adds on top is deliberately small and deliberately private —
            because it is being shared by sixty families, not six hundred.
          </p>
        </div>
      </section>

      {/* Renaissance */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
            The Landscape
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            &ldquo;Renaissance&rdquo;
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            The landscape is drawn as a single promenade rather than a set of separate facilities.
            Its centrepiece is a towering arched skywalk that lifts above the greens, so the walk
            from one end of the site to the other happens at height, over the water and the
            planting rather than beside it.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {renaissanceAmenities.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bloomsbury */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
            The Clubhouse
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            &ldquo;Bloomsbury&rdquo;
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Bloomsbury gathers the indoor social life of the tower into one place — fitness,
            screening, meetings, celebrations and games. The audio visual room is fitted with
            tiered recliner seating; the gaming zone runs from table tennis and snooker down to
            chess, cards and carrom. These facilities are common to Tower A and the future
            development tower.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {bloomsburyAmenities.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about-trecento-residences"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              About Trecento Residences →
            </Link>
            <Link href="/about-gaurs-group" className="text-[#DCA54A] hover:underline font-medium">
              About Gaurs Group →
            </Link>
          </div>
        </div>
      </section>

      {/* Township privileges */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
            Beyond the Gates
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Jaypee Greens Township Privileges
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            The township is developed and managed by Jaiprakash Associates Ltd. Its 18-hole
            course was designed by Greg Norman and is among the longest in the world. Note that
            certain facilities listed below are members-only and/or chargeable — confirm access
            terms with the sales team rather than assuming they come with the home.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {townshipPrivileges.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Safety */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Safety, Services and Peace of Mind
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Every other amenity depends on this layer working. Fire safety is provided by
            sprinklers, hydrant, hose reel and smoke detectors as per approved plans; power backup
            and fibre to the home come through the township infrastructure.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {peaceOfMind.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/location-connectivity"
              className="px-6 py-3 bg-[#DCA54A] text-white rounded-lg hover:bg-[#c9953a] transition-colors font-medium"
            >
              View Location &amp; Connectivity
            </Link>
            <Link
              href="/floor-plans"
              className="px-6 py-3 border-2 border-[#DCA54A] text-[#DCA54A] rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors font-medium"
            >
              Explore Floor Plans
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="border border-gray-200 bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Experience the Trecento Lifestyle
          </h2>
          <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
            An arched skywalk above the greens, a stepped pool and a waterfall, an amphitheatre
            under open sky, and a clubhouse shared by sixty families — inside a 452-acre township
            wrapped around an 18-hole international golf course. Book a site visit and walk it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-[#DCA54A] text-white font-semibold rounded-lg hover:bg-[#c9953a] transition-colors text-lg"
            >
              Enquire Now
            </Link>
            <Link
              href="/blogs"
              className="px-8 py-4 border-2 border-[#DCA54A] text-[#DCA54A] font-semibold rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors text-lg"
            >
              Blog &amp; News
            </Link>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
