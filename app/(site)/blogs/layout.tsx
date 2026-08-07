import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Trecento Residences - A by Gaurs",
  description:
    "Long-form buyer guides and market analysis on ultra-luxury housing at Jaypee Greens, Greater Noida and the Yamuna Expressway corridor.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
