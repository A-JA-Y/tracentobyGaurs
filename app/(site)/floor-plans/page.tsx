import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection"

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL } from "@/data/project";

export const metadata: Metadata = {
  title: "Trecento Floor Plan PDF | 4 BHK Gaur Project in Greater Noida",
  description:
    "Trecento Residences floor plans, a Gaur project in Greater Noida: Type 1 at 5050 sq. ft. and Type 2 at 5000 sq. ft., both 4 BHK. Download the PDF.",
  alternates: {
    canonical: `${SITE_URL}/floor-plans`,
  },
  keywords:
    "gaur project in greater noida, gaur apartments greater noida, gaur luxury projects, Trecento Residences floor plan, Trecento Type 1 floor plan, Trecento Type 2 floor plan, 4 BHK floor plan Jaypee Greens, Trecento site plan, Trecento floor plan PDF",
  openGraph: {
    title: "Trecento Floor Plan PDF | 4 BHK Gaur Project in Greater Noida",
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
