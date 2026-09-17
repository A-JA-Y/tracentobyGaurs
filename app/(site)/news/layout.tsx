import type { Metadata } from "next";
import { SITE_URL } from "@/data/project";

export const metadata: Metadata = {
  title: "News & Updates | Gaur Greater Noida New Launch, Jaypee Greens",
  description:
    "Launch updates on Trecento Residences, a Gaur new project in Greater Noida, and the infrastructure shaping Jaypee Greens and the Yamuna corridor.",
  /* Article pages override this with their own canonical in generateMetadata. */
  alternates: { canonical: `${SITE_URL}/news` },
  keywords:
    "gaur greater noida new launch, gaur new project, gaur upcoming projects, gaur projects near jewar airport, Trecento Residences news, Jaypee Greens updates, Yamuna Expressway corridor news",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
