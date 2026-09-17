import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, project } from "@/data/project";

export const metadata: Metadata = {
  title: "Contact Us | Trecento Residences, a Gaur Project Greater Noida",
  description:
    "Contact the authorised channel-partner team for Trecento Residences, a Gaur project in Greater Noida: price, availability, brochure and site visits.",
  alternates: { canonical: `${SITE_URL}/contact-us` },
  keywords:
    "gaur project in greater noida, gaur new project, Trecento Residences contact, Trecento Residences site visit, Trecento Residences price enquiry, Jaypee Greens 4 BHK enquiry",
};

const helpTopics = [
  "The current price sheet for Condominium Type 1 and Type 2",
  "Live availability by floor and golf-course orientation across only 60 units",
  "The official brochure, floor plans and site plan",
  "Payment plans, the booking offer and home-loan assistance",
  "A guided site visit at Jaypee Greens",
];

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact Us"
        title="Speak to the Trecento Residences Sales Team"
        headingLevel="h1"
        subtitle="Speak with the authorised channel-partner team for pricing, live availability across the 60 residences, site visits and personalised assistance on this Gaur new project at Jaypee Greens."
      />
      <ModalWrapper />

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <section className="w-full px-6 pb-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-6">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
              Sales Enquiries
            </h2>
            <div className="text-sm text-gray-700 space-y-1.5">
              <p>
                <span className="text-gray-500">Phone:</span>{" "}
                <a
                  href={`tel:${project.phoneHref}`}
                  className="font-semibold text-gray-900 hover:text-[#c8922a] transition-colors"
                >
                  {project.phone}
                </a>
              </p>
              <p>
                <span className="text-gray-500">Email:</span>{" "}
                <a
                  href={`mailto:${project.email}`}
                  className="hover:text-[#c8922a] transition-colors break-all"
                >
                  {project.email}
                </a>
              </p>
              <p>
                <span className="text-gray-500">WhatsApp:</span>{" "}
                <a
                  href={`https://wa.me/${project.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c8922a] transition-colors"
                >
                  {project.phone}
                </a>
              </p>
              <p>
                <span className="text-gray-500">Hours:</span> Mon–Sun · 10am–7pm
              </p>
              <p className="pt-1.5 text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">Office:</span>{" "}
                {project.channelPartnerOffice.streetAddress}, {project.channelPartnerOffice.locality},{" "}
                {project.channelPartnerOffice.state}
              </p>
            </div>
          </div>

          <div className="bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-6">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
              Site Address
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {project.addressLine}, {project.locality}, {project.district}, {project.state}{" "}
              {project.pin}
            </p>
            <a
              href={project.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-[#c8922a] hover:underline"
            >
              View on Google Maps →
            </a>
          </div>

          <div className="bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-6">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
              Project &amp; RERA
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {project.name}
              <br />
              {project.entity} · LLP ID {project.entityId}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              UP RERA {project.rera} — verify at{" "}
              <a
                href={project.reraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8922a] hover:underline"
              >
                up-rera.in/projects
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Channel partner:{" "}
              <a
                href={project.channelPartnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8922a] hover:underline"
              >
                {project.channelPartner} ({project.channelPartnerWebsite})
              </a>
              {project.channelPartnerRera && ` · RERA ${project.channelPartnerRera}`}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            What the Team Can Help With
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {helpTopics.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                <span className="text-[#c8922a] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquirySection
        body="At Trecento Residences, luxury isn't just built — it's beautifully lived. The Gaursons Group has been a leading Gaur builder in the National Capital Region since 1995, with 65+ delivered projects, 65,000+ delivered homes and over a lakh happy customers behind it. Trecento is the most deliberate expression of that legacy: a single cylindrical tower of 30 storeys holding only 60 condominiums, two to a floor, rising from the middle of an international 18-hole golf course at Jaypee Greens. Sixty homes for sixty select families — that is the entire supply, permanently. Step into the enduring legacy of Gaurs."
        note=""
        showCorporateOffice={false}
      />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
