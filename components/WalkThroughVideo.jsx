"use client";
import dynamic from "next/dynamic";

const LiteYT = dynamic(() => import("@/components/LiteYT"), {
  ssr: false,
});

/**
 * The previous build hard-coded the old project's walkthrough film. Set this to
 * the Trecento Residences YouTube video id to bring the section back — while it
 * is empty the section renders nothing rather than showing another project.
 */
const WALKTHROUGH_VIDEO_ID = "";

export default function WalkthroughSection() {
  if (!WALKTHROUGH_VIDEO_ID) return null;

  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="walkthrough">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Project Walkthrough
          </h6>

          <h2 className="text-3xl   md:text-4xl font-bold text-gray-900">
            Experience Trecento Residences Virtually
          </h2>

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
            Take a guided video tour of the tower, the Renaissance landscape and the
            condominiums to get a real feel of the lifestyle and layout.
          </p>
        </div>


        <div className="relative w-full rounded-xl overflow-hidden shadow-lg max-w-[720px] mx-auto">
          <div className="aspect-video w-full h-full">
            <LiteYT videoId={WALKTHROUGH_VIDEO_ID} />
          </div>
        </div>


        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Want complete details including pricing &amp; plans?
          </p>

          <a
            href="#book-site-visit"
            className="inline-block bg-[#DCA54A] text-white text-xs px-6 py-3 rounded uppercase"
          >
            Get Full Details
          </a>
        </div>

      </div>
    </section>
  );
}
