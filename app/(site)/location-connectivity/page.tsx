import type { Metadata } from "next";
import StickyDownloadButton from "@/components/StickyButton";
import {
  SITE_URL,
  project,
  connectivityHighlights,
  distances,
  socialInfrastructure,
  futureInfrastructure,
} from "@/data/project";

export const metadata: Metadata = {
  title: "Trecento Residences Location | Jaypee Greens, Pari Chowk Connectivity",
  description:
    "Trecento Residences sits at Jaypee Greens near Pari Chowk, Greater Noida — minutes from the Aqua Line metro and the Yamuna Expressway, and about 30 minutes from Noida International Airport at Jewar.",
  alternates: { canonical: `${SITE_URL}/location-connectivity` },
  keywords:
    "Trecento Residences location, Jaypee Greens location, Pari Chowk Greater Noida, Jewar airport distance, Yamuna Expressway connectivity, Greater Noida 201306",
};

const whyLocationMatters = [
  "An address already built — Jaypee Greens is a delivered, occupied, 452-acre township, not a masterplan",
  "Golf frontage that cannot be built out — the 18-hole course is the permanent neighbour",
  "Metro on the Aqua Line at Pari Chowk, with Delta 1 and Alpha 1 close by",
  "Two expressways within minutes — the Yamuna, and the Noida–Greater Noida",
  "Tier-1 social infrastructure already operating within a 5–15 minute radius",
  "Inside the Delhi–Mumbai Industrial Corridor influence zone",
];

const faqData = [
  {
    question: "Where exactly is Trecento Residences located?",
    answer:
      "Sun Court Tower - A, B6A (CT-4/Tower-A), Jaypee Greens, near Pari Chowk, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh — PIN 201306.",
  },
  {
    question: "What is the nearest metro station to Trecento Residences?",
    answer:
      "Jaypee Greens / Pari Chowk station on the Aqua Line is the nearest, roughly 2 km and 5 minutes away, with Delta 1 and Alpha 1 stations also close by.",
  },
  {
    question: "How far is Noida International Airport from Trecento Residences?",
    answer:
      "The Noida International Airport at Jewar is approximately 25 km, about 30 minutes, via the Yamuna Expressway — whose entry point is about 8 minutes from the tower.",
  },
  {
    question: "How is the road connectivity from Trecento Residences?",
    answer:
      "There is direct access to the Yamuna Expressway and a seamless link to the Noida–Greater Noida Expressway, with the DND Expressway and Mahamaya Flyover leading onwards into Delhi.",
  },
  {
    question: "Is the location good for investment?",
    answer:
      "The case rests on an established Jaypee Greens address plus a pipeline of corridor infrastructure — the Jewar airport, Film City at Sector 21 YEIDA, a proposed Night Safari, a proposed international cricket stadium and metro expansion. This is informational, not investment advice.",
  },
  {
    question: "What is the PIN code for Trecento Residences?",
    answer: "201306.",
  },
];

export default function LocationConnectivityPage() {
  return (
    <>
      {/* Main Content Section */}
      <section className="w-full bg-white py-16 px-6" id="location">
        <div className="max-w-5xl mx-auto">

          <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
            Location &amp; Connectivity
          </p>

          <h1 className="text-center font-bold text-gray-900 mb-6 text-3xl md:text-4xl leading-tight">
            Trecento Residences Location — Jaypee Greens, Pari Chowk, Greater Noida
          </h1>

          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Trecento Residences stands inside Jaypee Greens, a 182.92-hectare (452-acre)
              township near Pari Chowk in Greater Noida. That single fact does most of the work in
              this page. The tower is not opening a new frontier — it is filling a plot inside an
              address that has been built, planted and lived in for years, with an international
              18-hole golf course wrapped around it, the Aqua Line metro a few minutes away and
              the Yamuna Expressway entry roughly eight minutes out. For an ultra-luxury buyer,
              that combination of a mature setting and a maturing corridor is the argument.
            </p>
            <div className="mt-4">
              <a
                href={project.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c8922a] hover:bg-[#b07d20] text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>

          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4">
            Where Exactly Is Trecento Residences?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            The project sits in Gautam Buddha Nagar district, Uttar Pradesh, under PIN 201306,
            within Jaypee Greens — a township developed and managed by Jaiprakash Associates Ltd.
            The tower occupies approximately 5,139.50 sq. mt. in the middle of the golf course,
            with the main entry, exit and drop-off arranged at Tower A.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            Three corridors meet near this address: the Noida–Greater Noida Expressway running
            north-west towards Delhi, the Yamuna Expressway running south-east towards Agra and
            the Jewar airport, and the metro&rsquo;s Aqua Line through Pari Chowk. The Buddh
            International Circuit and the emerging YEIDA industrial belt sit on the same axis.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
            <p className="font-semibold text-gray-800">Project Address:</p>
            <p className="text-gray-600 text-sm">
              {project.name}
              <br />
              {project.addressLine}
              <br />
              {project.locality}, {project.district}, {project.state} {project.pin}
            </p>
          </div>

          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4">
            Why This Address Holds Its Value
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            When a buyer commits at this price point, they are buying the address as much as the
            floor area. These are the parameters that make this one defensible:
          </p>
          <ul className="space-y-2 mb-8">
            {whyLocationMatters.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">✓</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Highlights + Map */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-8">
            <div className="flex-1 max-w-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-base">Connectivity Highlights</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                Jaypee Greens sits close to Pari Chowk, which is the junction the whole of Greater
                Noida navigates by. From there, Delhi, the Yamuna Expressway corridor and the
                upcoming Jewar airport are each a single clean drive.
              </p>

              <ul className="space-y-4">
                {connectivityHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#c8922a] mt-1">✓</span>
                    <span className="text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full">
              <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
                <iframe
                  src={project.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Trecento Residences — Jaypee Greens, Greater Noida location map"
                ></iframe>
              </div>
              <a
                href={project.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-[#c8922a] hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Distance Snapshot Table */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-6 text-center">
            Distance Snapshot
          </h2>
          <p className="text-gray-600 text-sm text-center max-w-2xl mx-auto mb-8">
            Indicative, map-based distances and drive times from Jaypee Greens. Actual travel time
            varies with traffic and route.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">
                    Destination
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">
                    Distance
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">
                    Approx. Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {distances.map((item, i) => (
                  <tr key={item.destination} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">
                      {item.destination}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">
                      {item.distance}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social infrastructure */}
      {socialInfrastructure.map((group, idx) => (
        <section
          key={group.category}
          className={`w-full py-16 px-6 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
              {group.category} Near Trecento Residences
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              {group.category === "Education" &&
                "Greater Noida's Knowledge Park belt puts a dense cluster of schools and universities within a short drive of Jaypee Greens."}
              {group.category === "Healthcare" &&
                "Super-specialty care is available within 7 to 28 minutes, with the nearest options inside Greater Noida itself."}
              {group.category === "Workspaces" &&
                "The Noida–Greater Noida corridor carries one of India's fastest-growing IT, manufacturing and corporate belts."}
              {group.category === "Leisure" &&
                "The golf course is at the doorstep; the township's own club, sports complex and town centre sit inside the gates."}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#c8922a] mt-1">•</span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Future infrastructure */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            The Infrastructure Pipeline Around This Address
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Trecento is being sold at the point where the corridor&rsquo;s infrastructure is being
            delivered rather than merely announced. The items below are the ones that most
            directly affect demand for premium housing near Pari Chowk:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {futureInfrastructure.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4 text-sm">
            The Delhi–Mumbai Industrial Corridor and the YEIDA industrial belt sit behind all of
            it as the longer-term demand driver. Timelines on public infrastructure move — treat
            these as directional, not as commitments.
          </p>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="w-full bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.question} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": `${SITE_URL}/location-connectivity#faq`,
                mainEntity: faqData.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${SITE_URL}/location-connectivity#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Location & Connectivity",
                    item: `${SITE_URL}/location-connectivity`,
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": `${SITE_URL}/location-connectivity#webpage`,
                url: `${SITE_URL}/location-connectivity`,
                name: "Trecento Residences Location | Jaypee Greens, Pari Chowk Connectivity",
                description:
                  "Trecento Residences sits at Jaypee Greens near Pari Chowk, Greater Noida — minutes from the Aqua Line metro and the Yamuna Expressway, and about 30 minutes from Noida International Airport at Jewar.",
                breadcrumb: { "@id": `${SITE_URL}/location-connectivity#breadcrumb` },
                about: { "@id": `${SITE_URL}/#residence` },
                mainEntity: { "@id": `${SITE_URL}/location-connectivity#faq` },
                primaryImageOfPage: `${SITE_URL}/trecento-hero.webp`,
                inLanguage: "en-IN",
              },
              {
                "@type": "ApartmentComplex",
                "@id": `${SITE_URL}/#residence`,
                name: project.name,
                description:
                  "Only 60 lavish 4 BHK condominiums, two per floor, in a single 30-storey cylindrical tower inside an 18-hole international golf course at Jaypee Greens, Greater Noida.",
                url: `${SITE_URL}/`,
                image: `${SITE_URL}/trecento-hero.webp`,
                numberOfAccommodationUnits: 60,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: project.addressLine,
                  addressLocality: project.locality,
                  addressRegion: project.state,
                  postalCode: project.pin,
                  addressCountry: "IN",
                },
                amenityFeature: [
                  {
                    "@type": "LocationFeatureSpecification",
                    name: "18-hole international golf course frontage",
                  },
                  { "@type": "LocationFeatureSpecification", name: "Bloomsbury clubhouse" },
                  { "@type": "LocationFeatureSpecification", name: "Renaissance landscape" },
                ],
              },
              {
                "@type": "RealEstateAgent",
                "@id": `${SITE_URL}/#organization`,
                name: `${project.channelPartner} - Authorised Channel Partner`,
                url: `${SITE_URL}/`,
                image: `${SITE_URL}/trecento-hero.webp`,
                telephone: project.phone,
                email: project.email,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: project.addressLine,
                  addressLocality: project.locality,
                  addressRegion: project.state,
                  postalCode: project.pin,
                  addressCountry: "IN",
                },
                areaServed: { "@type": "City", name: "Greater Noida" },
              },
            ],
          }),
        }}
      />
    </>
  );
}
