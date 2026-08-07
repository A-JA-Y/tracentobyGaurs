import { project } from "@/data/project";

/**
 * RERA disclosure strip shown at the foot of the home page (desktop).
 *
 * NOTE: the previous build embedded a scanned RERA QR image plus the developer's
 * collection-account details. Both were project-specific to the old site, so they
 * have been removed rather than carried over. Drop the official Trecento RERA QR
 * into /assets and the Golf Lake LLP collection-account details here once the
 * developer supplies them.
 */
const QRSection = () => {
  return (
    <section className="w-full bg-[#141004] px-[30px] py-[45px]">
      <div className="max-w-screen-xl mx-auto">
        <address className="not-italic text-right text-white text-[13px] leading-[1.7] tracking-wide">
          <p className="mb-0.5">
            <strong className="tracking-widest">PROJECT:</strong>{" "}
            <span itemProp="name">{project.name}</span>
          </p>
          <p className="mb-0.5">
            <strong className="tracking-widest">RERA NO.:-</strong>{" "}
            <span itemProp="identifier">{project.rera}</span>
          </p>
          <p className="mb-2 text-[#cccccc] text-[12px]">
            <a
              href={project.reraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-white no-underline"
            >
              {project.reraUrl}
            </a>
          </p>

          <p className="mb-0">
            <strong className="tracking-widest">PROJECT ENTITY</strong>: {project.entity} · LLP
            IDENTIFICATION NO. {project.entityId}
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">DEVELOPER</strong>: {project.developer}
          </p>
          <p className="mb-2">
            <strong className="tracking-widest">CHANNEL PARTNER</strong>:{" "}
            {project.channelPartner} · RERA {project.channelPartnerRera}
          </p>

          <p className="mb-0">
            <strong className="tracking-widest">REGISTERED ADDRESS</strong>:
          </p>
          <p className="mb-2 text-[#cccccc] text-[12px]">{project.registeredAddress}</p>

          <p className="mb-0">
            <strong className="tracking-widest">CORPORATE OFFICE</strong>:
          </p>
          <p className="text-[#cccccc] text-[12px]">{project.corporateOffice}</p>
        </address>
      </div>
    </section>
  );
};

export default QRSection;
