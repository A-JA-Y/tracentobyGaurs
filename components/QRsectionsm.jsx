import { project } from "@/data/project";

/**
 * Compact RERA strip shown under the hero on mobile.
 * Replaces the old scanned RERA banner image, which was project-specific
 * to the previous site.
 */
const ReraStrip = () => {
  return (
    <div className="block md:hidden w-full bg-[#F2EDE0] px-4 py-3 text-center">
      <p className="text-[11px] tracking-[0.14em] uppercase text-gold-dark font-semibold">
        UP RERA {project.rera}
      </p>
      <p className="text-[11px] text-slate mt-1 leading-relaxed">
        {project.name} · {project.entity}
      </p>
      <a
        href={project.reraUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-1 text-[11px] text-gold-dark underline underline-offset-2"
      >
        Verify at up-rera.in/projects
      </a>
    </div>
  );
};

export default ReraStrip;
