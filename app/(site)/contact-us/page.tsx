import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, project } from "@/data/project";

export const metadata: Metadata = {
  title: "Contact Us | Trecento Residences - A by Gaurs, Jaypee Greens",
  description:
    "Contact the authorised channel-partner team for Trecento Residences pricing, availability across the 60 condominiums, brochures and site visits at Jaypee Greens, Greater Noida.",
  alternates: { canonical: `${SITE_URL}/contact-us` },
};

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Speak with the authorised channel-partner team for pricing, live availability across the 60 residences, site visits and personalised assistance."
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
              Sales
            </p>
            <a
              href={`tel:${project.phoneHref}`}
              className="block text-lg font-semibold text-gray-900 hover:text-[#c8922a] transition-colors"
            >
              {project.phone}
            </a>
            <a
              href={`mailto:${project.email}`}
              className="block text-sm text-gray-600 mt-2 hover:text-[#c8922a] transition-colors break-all"
            >
              {project.email}
            </a>
            <p className="text-xs text-gray-500 mt-3">Mon–Sun · 10am–7pm</p>
          </div>

          <div className="bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
              Site Address
            </p>
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
              Project &amp; RERA
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {project.name}
              <br />
              {project.entity} · LLP ID {project.entityId}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              UP RERA{" "}
              <a
                href={project.reraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8922a] hover:underline"
              >
                {project.rera}
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Channel partner: {project.channelPartner} · RERA {project.channelPartnerRera}
            </p>
          </div>
        </div>
      </section>
      <EnquirySection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
