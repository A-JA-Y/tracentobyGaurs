import { project, connectivityHighlights } from "@/data/project";

export default function LocationAdvantages() {
  return (
    <section className="w-full bg-white py-16 px-6" id="location">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
          Location & Connectivity
        </p>

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-900 mb-14 text-3xl md:text-4xl leading-tight">
          Jaypee Greens, Near Pari Chowk — Greater Noida&rsquo;s Established Luxury Address
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: TEXT */}
          <div className="flex-1 max-w-lg">

            <h3 className="font-bold text-gray-900 mb-3 text-base">
              Strategic Connectivity
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              The tower stands inside Jaypee Greens, a 452-acre township near Pari Chowk that is
              already built, planted and lived in. From there, the Aqua Line metro, both
              expressways and the upcoming Noida International Airport at Jewar are each a single
              clean drive.
            </p>

            <ul className="space-y-4">
              {connectivityHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">

                  {/* Check Icon */}
                  <span className="text-[#c8922a] mt-1">
                    ✓
                  </span>

                  <span className="text-gray-800 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: MAP */}
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

            {/* Small CTA */}
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
  );
}
