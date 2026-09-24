import Link from "next/link";
import { footerNavLinks } from "@/data/siteNav";
import { project } from "@/data/project";

const PERIDONA_URL = "https://thecrcperidona.com";
const peridonaLinks = [
  { label: "About The Peridona", path: "/about-the-peridona" },
  { label: "Residences", path: "/residences" },
  { label: "Price", path: "/price" },
  { label: "Floor Plans", path: "/floor-plans" },
  { label: "Amenities", path: "/amenities" },
  { label: "Location & Connectivity", path: "/location-connectivity" },
  { label: "About CRC Group", path: "/about-crc-group" },
  { label: "Blogs", path: "/blogs" },
  { label: "News", path: "/news" },
  { label: "Contact Us", path: "/contact-us" },
];

export default function Footer() {
  const half = Math.ceil(footerNavLinks.length / 2);
  const col1 = footerNavLinks.slice(0, half);
  const col2 = footerNavLinks.slice(half);

  return (
    <footer className="w-full bg-[#141004] border-t border-[rgba(242,242,242,0.11)] px-4 sm:px-[30px] py-6 sm:py-[20px] font-[400]">
      <div className="flex flex-col m-auto max-w-5xl w-full">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-8 pt-2">
          <div>
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Trecento Residences
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Only 60 lavish 4 BHK condominiums in a single 30-storey tower, standing in the
              middle of an international 18-hole golf course at Jaypee Greens, Greater Noida.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mt-3">
              UP RERA:{" "}
              <a
                href={project.reraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:underline"
              >
                {project.rera}
              </a>
            </p>
          </div>

          {/* Quick Links — two sub-columns */}
          <div className="sm:col-span-2 sm:row-start-2 lg:row-start-auto lg:col-span-2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Quick Links
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-6 gap-y-2">
              <ul className="flex flex-col gap-2">
                {col1.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 text-xs hover:text-[#DCA54A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                {col2.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 text-xs hover:text-[#DCA54A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Channel Partner Office
            </p>
            <p className="text-gray-300 text-xs font-semibold mb-2 break-words">
              <a
                href={project.channelPartnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DCA54A] transition-colors"
              >
                {project.channelPartner} ({project.channelPartnerWebsite})
              </a>
            </p>
            <div className="flex items-start gap-1.5 text-gray-300 text-xs mb-2">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {project.channelPartnerOffice.streetAddress}, {project.channelPartnerOffice.locality},{" "}
              {project.channelPartnerOffice.state}
            </div>
            <div className="flex items-center gap-1.5 text-gray-300 text-xs mb-2">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href={`tel:${project.phoneHref}`} className="hover:text-[#DCA54A] transition-colors">
                {project.phone}
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300 text-xs min-w-0">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="m22 6-10 7L2 6"/>
              </svg>
              <a href={`mailto:${project.email}`} className="break-all hover:text-[#DCA54A] transition-colors">
                {project.email}
              </a>
            </div>

            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mt-5 mb-2">
              Developer Corporate Office
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">{project.corporateOffice}</p>
          </div>
        </div>

        {/* Explore CRC The Peridona */}
        <div className="mb-8 rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/[0.06] px-4 py-5 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-400 mb-2">
            Also Explore
          </p>
          <a
            href={PERIDONA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base sm:text-lg font-bold text-[#DCA54A] hover:text-white transition-colors"
          >
            CRC The Peridona, Jaypee Greens &rarr;
          </a>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {peridonaLinks.map((item) => (
              <li key={item.path}>
                <a
                  href={`${PERIDONA_URL}${item.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-[#DCA54A] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mb-4">
          <p className="text-xs text-gray-400 leading-relaxed text-justify sm:text-center">
            Disclaimer : This is not the official website of developer, it belongs
            to the authorised channel partner {project.channelPartner} ({project.channelPartnerWebsite}
            {project.channelPartnerRera && `, RERA ${project.channelPartnerRera}`}) for information &amp; marketing purposes
            only. All rights for logo &amp; images are reserved by the developer. By
            using or accessing this website you agree with the disclaimer without
            any limitation. By accessing this website, the viewer confirms that
            the information including brochures and marketing collaterals on this
            website are solely for informational purposes only, and the viewer has
            not relied on this information for making any booking/purchase in any
            project of the company.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mt-3 break-words">
            Registered address : {project.registeredAddress}
          </p>
          <hr className="border-t border-gray-700 mt-3" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center">
          <p className="text-[#fff] text-xs tracking-wide w-full sm:w-auto">
            Copyright &copy; 2026{" "}
            <a
              href={project.channelPartnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-[#DCA54A] transition-colors"
            >
              {project.channelPartnerWebsite}
            </a>{" "}
            · Official Channel Partner · All Rights Reserved
          </p>
          <span className="text-white/20 hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="text-[#fff] text-xs hover:text-[#DCA54A] transition-colors">
            Privacy Policy / Disclaimer
          </Link>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a
            href={PERIDONA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#DCA54A] text-xs font-bold hover:text-white transition-colors"
          >
            CRC The Peridona
          </a>
        </div>
      </div>
    </footer>
  );
}