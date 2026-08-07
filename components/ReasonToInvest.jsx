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

export default function ReasonsToInvest() {
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
            Most NCR luxury towers hold 300 to 800 apartments. This one holds 60, two per floor,
            inside an established 452-acre township — which is what keeps resale volumes thin and
            the address legible to buyers.
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
              {[
                { icon: <FaBuilding />, text: "Gaursons Group — 29+ years, 65+ delivered projects" },
                { icon: <FaMapMarkerAlt />, text: "Established Jaypee Greens address near Pari Chowk" },
                { icon: <FaGolfBall />, text: "In the middle of an 18-hole international golf course" },
                { icon: <FaKey />, text: "Ultra-low density — only 60 exclusive residences" },
                { icon: <FaChartLine />, text: "RERA-registered under UPRERAPRJ283531" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#DCA54A] text-lg">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
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
              {[
                { icon: <FaRoad />, text: "Direct Yamuna and Noida–Greater Noida Expressway links" },
                { icon: <FaPlane />, text: "Easy reach of Noida International Airport at Jewar" },
                { icon: <FaCity />, text: "Film City, proposed Night Safari and cricket stadium nearby" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#DCA54A] text-lg">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
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
