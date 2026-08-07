import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Trecento Residences - A by Gaurs",
  description:
    "Launch updates for Trecento Residences and the infrastructure developments shaping Jaypee Greens, Greater Noida and the Yamuna Expressway corridor.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
