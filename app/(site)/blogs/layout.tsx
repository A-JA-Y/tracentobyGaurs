import type { Metadata } from "next";
import { SITE_URL } from "@/data/project";

export const metadata: Metadata = {
  title: "Blogs | Trecento Residences - A by Gaurs",
  description:
    "Long-form buyer guides and market analysis on ultra-luxury housing at Jaypee Greens, Greater Noida and the Yamuna Expressway corridor.",
  /* Article pages override this with their own canonical in generateMetadata. */
  alternates: { canonical: `${SITE_URL}/blogs` },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
