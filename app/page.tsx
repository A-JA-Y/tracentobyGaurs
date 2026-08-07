import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";
import { SITE_URL, project, faqs } from "@/data/project";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const GaurTownship = dynamic(() => import("@/components/GaurTownship"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const ResidenceFeatures = dynamic(() => import("@/components/PremiumInventory"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="hidden">
        Trecento Residences - A by Gaurs – 60 Ultra-Luxury 4 BHK Condominiums at Jaypee
        Greens, Greater Noida
      </h1>

      {/* SCHEMA START */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`,
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            "@id": `${SITE_URL}/#residence`,
            name: project.name,
            description:
              "A single 30-storey cylindrical tower holding only 60 lavish 4 BHK condominiums, two per floor, in the middle of an international 18-hole golf course at Jaypee Greens, Greater Noida.",
            url: `${SITE_URL}/`,
            image: `${SITE_URL}/trecento-hero.webp`,
            numberOfAccommodationUnits: 60,
            numberOfAvailableAccommodationUnits: 60,
            address: {
              "@type": "PostalAddress",
              streetAddress: project.addressLine,
              addressLocality: project.locality,
              addressRegion: project.state,
              postalCode: project.pin,
              addressCountry: "IN",
            },
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "18-hole international golf course", value: true },
              { "@type": "LocationFeatureSpecification", name: "Bloomsbury clubhouse", value: true },
              { "@type": "LocationFeatureSpecification", name: "Swimming pool and stepped pool", value: true },
              { "@type": "LocationFeatureSpecification", name: "Elevated skywalk over the landscape", value: true },
              { "@type": "LocationFeatureSpecification", name: "Gated township security with CCTV", value: true },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "@id": `${SITE_URL}/#organization`,
            name: `${project.channelPartner} - Authorised Channel Partner`,
            image: `${SITE_URL}/trecento-hero.webp`,
            url: `${SITE_URL}/`,
            telephone: project.phone,
            email: project.email,
            priceRange: "₹₹₹",
            areaServed: { "@type": "City", name: "Greater Noida" },
            address: {
              "@type": "PostalAddress",
              streetAddress: project.addressLine,
              addressLocality: project.locality,
              addressRegion: project.state,
              postalCode: project.pin,
              addressCountry: "IN",
            },
          }),
        }}
      />

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
      {/* SCHEMA END */}

      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        <section className="md:px-[30px] md:py-[45px] md:relative top-[-98px]">
          <div className="md:block max-w-5xl m-auto">
            <ContactForm />
          </div>
        </section>

        <ModalWrapper />

        <AboutProject  heading={false}/>
        <Amenities />
        <GaurTownship />
        <ReasonsToInvest />
        <ResidenceFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <WalkThroughVideo />
        <BlogSection />
        <NewsSection />
        <EnquirySection />
        <QRSection />
      </main>
      <StickyDownloadButton />
      <Footer />
    </div>
  );
}
