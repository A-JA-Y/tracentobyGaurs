const interiorFeatures = [
  "Imported marble in drawing, dining and bedrooms",
  "Laminated wooden flooring in the dress rooms",
  "Glass balcony railing with SS fittings",
  "POP false ceiling throughout",
];

const kitchenItems = ["Branded RO", "Hob & chimney", "Modular cabinets", "Granite counter"];

const layoutFeatures = [
  "5000–5050 sq. ft. saleable per home",
  "806.65 sq. ft. continuous all-round balcony",
  "Two condominiums per floor, 30 storeys",
  "Servant room with toilet and utility balcony",
];

const nearby = {
  Education: ["Galgotias College", "Jaypee Public School", "Sharda University"],
  Healthcare: ["Yatharth Super-Specialty", "Kailash Hospital", "Jaypee Hospital"],
  "Retail & Leisure": ["Jaypee Greens Town Centre", "The Grand Venice Mall", "Radisson Blu"],
};

export default function ResidenceFeatures() {
  return (
    <section
      className="w-full py-12 px-4 sm:px-8"
      style={{ backgroundColor: "#faf6e8" }}
      id="investment-benefits"
    >
      <div className="max-w-5xl mx-auto">
        <h6 className="text-center uppercase mb-3" style={{ color: "#c8922a", letterSpacing: "2.5px", fontSize: "11px", fontWeight: 600 }}>
          For the chosen few
        </h6>
        <h2
          className="text-center font-bold text-gray-900 mb-10"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", lineHeight: "1.25", color: "#2c1f0e" }}
        >
          Residence Features &amp; Investment Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Card 1 — Interiors */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Interiors & Design
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Finished in the Trecento manner
            </h3>
            <ul className="space-y-2 mb-4">
              {interiorFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "0.5px solid #e8dfc8", paddingTop: "10px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                Kitchen provisions include
              </p>
              <div className="flex flex-wrap gap-1.5">
                {kitchenItems.map((item) => (
                  <span key={item} style={{ fontSize: "12px", background: "#faf6e8", color: "#7a5c1e", padding: "3px 10px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Space & Layout */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Space & Layout
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Two layouts, sixty homes
            </h3>
            <div className="flex gap-2 mb-4">
              {[
                { label: "Type 1", sub: "5050 sq. ft." },
                { label: "Type 2", sub: "5000 sq. ft." },
              ].map((v) => (
                <div key={v.label} className="flex-1 text-center py-3" style={{ background: "#faf6e8", border: "0.5px solid #d4c9ae" }}>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#DCA54A" }}>{v.label}</div>
                  <div style={{ fontSize: "11px", color: "#8a7a5a" }}>{v.sub}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {layoutFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 — Social Infrastructure */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Social Infrastructure
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Everything nearby
            </h3>
            <div className="flex flex-col gap-3">
              {Object.entries(nearby).map(([category, items]) => (
                <div key={category}>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px" }}>
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} style={{ fontSize: "12px", color: "#5c4a2a", background: "#faf6e8", padding: "3px 9px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
