import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import GaurTownship from "@/components/GaurTownship";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, project, glanceTable, developerStats } from "@/data/project";

export const metadata: Metadata = {
  title: "About Trecento Residences | A by Gaurs, Jaypee Greens Greater Noida",
  description:
    "Trecento Residences - A by Gaurs: a single 30-storey tower holding only 60 lavish 4 BHK condominiums, two per floor, in the middle of an 18-hole golf course at Jaypee Greens, Greater Noida.",
  alternates: { canonical: `${SITE_URL}/about-trecento-residences` },
  keywords:
    "Trecento Residences, Trecento Residences by Gaurs, Trecento Jaypee Greens, Gaurs Jaypee Greens, 4 BHK condominiums Greater Noida, golf course apartments Greater Noida",
};

const designStory = [
  {
    title: "The Trecento",
    body: "The 14th century in Italy — the age of Giotto and Duccio — when art stepped out of the flat gold ground of the medieval period and began to describe real space, real weight and real light. It is the century that made the Renaissance possible.",
  },
  {
    title: "The Tower",
    body: "A single cylindrical form of 30 storeys. The curve is not decoration: it is what lets every one of the 60 residences turn outward to the golf course rather than face a neighbour across a courtyard.",
  },
  {
    title: "Renaissance",
    body: "The landscape at the base of the tower — an arched skywalk lifted above pools, a waterfall, planted decks and an amphitheatre, drawn as a promenade rather than a set of separate facilities.",
  },
  {
    title: "Bloomsbury",
    body: "The clubhouse — gymnasium, lounge, audio visual room with tiered recliner seating, meeting room, party hall and an indoor gaming zone, shared between Tower A and the future development tower.",
  },
];

export default function AboutTrecentoResidencesPage() {
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
                name: "The Project",
                item: `${SITE_URL}/about-trecento-residences`,
              },
            ],
          }),
        }}
      />

      <PageBanner
        eyebrow="The Project"
        title="About Trecento Residences"
        subtitle="Only 60 residences for 60 select families — a single cylindrical tower of 30 storeys rising from the middle of an international 18-hole golf course at Jaypee Greens, Greater Noida."
      />
      <ModalWrapper />
      <AboutProject heading={true} />

      {/* Quick facts */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Project at a Glance
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Every figure below is reproduced from the official brochure and the authorised
            channel-partner content sheet. Verify the registration at{" "}
            <a
              href={project.reraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8922a] hover:underline"
            >
              up-rera.in/projects
            </a>
            .
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
            <table className="w-full text-sm text-left">
              <tbody>
                {glanceTable.map((row, i) => (
                  <tr
                    key={row.particular}
                    className={`border-b border-[#e5dcc5] last:border-b-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#FAF8F4]"
                    }`}
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-semibold text-gray-900 w-1/3 align-top"
                    >
                      {row.particular}
                    </th>
                    <td className="px-5 py-4 text-gray-600">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design story */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
            The Design Story
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Why a 14th-Century Italian Century Names a Tower in Greater Noida
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-10 max-w-3xl">
            The project takes its name and its temperament from the Trecento — the Italian
            fourteenth century, the era in which art first learned to describe depth. That
            inspiration is not applied as ornament. It shows up in the proportions of the tower,
            in the naming of the landscape and the clubhouse, and in the decision to build sixty
            large homes rather than three hundred small ones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designStory.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg border border-[#e5dcc5] shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer counters */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
            The Developer
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Built by the Gaursons Group
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8 max-w-3xl">
            Trecento Residences is developed under the project entity {project.entity} (LLP ID{" "}
            {project.entityId}) by the {project.developer}, active in the National Capital Region
            since 1995 and a member of CREDAI. For a buyer purchasing an under-construction home,
            the delivery record below is the part of the pitch that actually reduces risk.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#e5dcc5]">
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

      <GaurTownship />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
