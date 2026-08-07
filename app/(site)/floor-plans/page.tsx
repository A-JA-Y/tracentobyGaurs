import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection"

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL } from "@/data/project";

export const metadata: Metadata = {
  title: "Trecento Residences Floor Plan | Type 1 & Type 2 4 BHK Plans & PDF",
  description:
    "Explore the Trecento Residences floor plans — Condominium Type 1 at 5050 sq. ft. and Type 2 at 5000 sq. ft. saleable, both 4 BHK with an 806.65 sq. ft. all-round balcony. Download the PDF.",
  alternates: {
    canonical: `${SITE_URL}/floor-plans`,
  },
  keywords:
    "Trecento Residences floor plan, Trecento Type 1 floor plan, Trecento Type 2 floor plan, 4 BHK floor plan Jaypee Greens, Trecento site plan, Trecento floor plan PDF",
  openGraph: {
    title: "Trecento Residences Floor Plan | Type 1 & Type 2 4 BHK Plans & PDF",
    description:
      "Condominium Type 1 (5050 sq. ft.) and Type 2 (5000 sq. ft.) — two 4 BHK layouts, two homes per floor, across a 30-storey golf-course tower at Jaypee Greens.",
    url: `${SITE_URL}/floor-plans`,
    type: "website",
  },
};

export default function FloorPlansPage() {
  return (
    <>
      <PageBanner
        eyebrow="Floor Plans"
        title="Trecento Residences Floor Plans"
        subtitle="Two 4 BHK condominium layouts and the site plan for the Renaissance landscape at Jaypee Greens, Greater Noida."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
