import {
  FaBuilding,
  FaMapMarkerAlt,
  FaGolfBall,
  FaChartLine,
  FaKey,
  FaRoad,
  FaPlane,
  FaCity,
} from "react-icons/fa";

/* Icons are positional — the copy for each bullet is passed in per page. */
const keyReasonIcons = [
  <FaBuilding key="builder" />,
  <FaMapMarkerAlt key="address" />,
  <FaGolfBall key="golf" />,
  <FaKey key="density" />,
  <FaChartLine key="rera" />,
];

const additionalValueIcons = [
  <FaRoad key="expressway" />,
  <FaPlane key="airport" />,
  <FaCity key="city" />,
];

export const defaultKeyReasons = [
  "Gaursons Group — a trusted Gaur builder name with 29+ years and 65+ delivered projects",
  "Established Jaypee Greens address near Pari Chowk",
  "In the middle of an 18-hole international golf course",
  "Ultra-low density — only 60 exclusive residences",
  "RERA-registered under UPRERAPRJ283531",
];

export const defaultAdditionalValue = [
  "Direct Yamuna and Noida–Greater Noida Expressway links",
  "Easy reach of Noida International Airport at Jewar — among the more promising Gaur projects near Jewar Airport for long-term appreciation",
  "Film City, proposed Night Safari and cricket stadium nearby",
];

/* Inner pages (Residences, Price) run the same bullets in a tighter phrasing. */
export const innerPageKeyReasons = [
  "Gaursons Group — a trusted Gaur builder with 29+ years and 65+ delivered projects",
  ...defaultKeyReasons.slice(1),
];

export const innerPageAdditionalValue = [
  defaultAdditionalValue[0],
  "Easy reach of Noida International Airport at Jewar",
  defaultAdditionalValue[2],
];

export default function ReasonsToInvest({
  intro = "Most NCR luxury towers hold 300 to 800 apartments. This one holds 60, two per floor, inside an established 452-acre township — which is what keeps resale volumes thin and the address legible to buyers looking beyond the usual Gaur upcoming projects list.",
  keyReasons = defaultKeyReasons,
  additionalValue = defaultAdditionalValue,
}) {
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="investment">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Reasons to Invest
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sixty Homes Is the Entire Supply — Permanently
          </h2>

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            {intro}
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:px-[8rem]">

          {/* Left: Key Reasons */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Reasons
            </h4>

            <ul className="space-y-4">
              {keyReasons.map((text, i) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-[#DCA54A] text-lg mt-0.5 shrink-0">
                    {keyReasonIcons[i % keyReasonIcons.length]}
                  </span>
                  <span className="text-gray-800 text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Additional Value */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Value
            </h4>

            <ul className="space-y-4">
              {additionalValue.map((text, i) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-[#DCA54A] text-lg mt-0.5 shrink-0">
                    {additionalValueIcons[i % additionalValueIcons.length]}
                  </span>
                  <span className="text-gray-800 text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <p className="text-gray-600 text-sm mt-6 leading-relaxed text-center max-w-3xl mx-auto">
          Buying in 2026 sits after RERA registration and construction mobilisation, but before
          the price ladder steps up towards the proposed July 2028 completion. This page is
          informational and does not constitute investment advice.
        </p>
      </div>
    </section>
  );
}
