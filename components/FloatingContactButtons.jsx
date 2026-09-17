import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { project } from "@/data/project";

const whatsappMessage = encodeURIComponent(
  `Hi, I'm interested in ${project.shortName} at Jaypee Greens, Greater Noida. Please share the price list and availability.`
);

/*
 * Bottom-left so it never collides with the vertical Brochure tab on the right edge.
 * z-40 keeps it under the mobile nav drawers (z-50/z-60) and the enquiry modals (z-50).
 */
export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 left-4 md:bottom-6 md:left-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${project.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with ${project.channelPartner}`}
        title="Chat on WhatsApp"
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" aria-hidden="true" />
      </a>

      <a
        href={`tel:${project.phoneHref}`}
        aria-label={`Call ${project.channelPartner} on ${project.phone}`}
        title={`Call ${project.phone}`}
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#c8952a] text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8952a]"
      >
        <FaPhoneAlt className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
      </a>
    </div>
  );
}
