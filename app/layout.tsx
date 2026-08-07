import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL } from "@/data/project";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  adjustFontFallback: true,
  weight: ["600"],
  preload: false,
});




export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "Trecento Residences - A by Gaurs | 4 BHK Condominiums at Jaypee Greens, Greater Noida",
  description:
    "Trecento Residences - A by Gaurs offers only 60 ultra-luxury 4 BHK condominiums in a 30-storey tower inside an 18-hole golf course at Jaypee Greens, Greater Noida. UP RERA UPRERAPRJ283531.",

  alternates: {
    canonical: `${SITE_URL}/`,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Trecento Residences - A by Gaurs | Jaypee Greens, Greater Noida",
    description:
      "Only 60 residences for 60 select families — 5000+ sq. ft. 4 BHK condominiums, two per floor, in the middle of an 18-hole golf course.",
    url: `${SITE_URL}/`,
    siteName: "Trecento Residences - A by Gaurs",
    images: [
      {
        url: `${SITE_URL}/trecento-hero.webp`,
        width: 1200,
        height: 630,
        alt: "The 30-storey Trecento Residences tower at Jaypee Greens, Greater Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trecento Residences - A by Gaurs | Jaypee Greens, Greater Noida",
    description:
      "60 exclusive 4 BHK condominiums, two per floor, in a 30-storey golf-course tower at Jaypee Greens.",
    images: [`${SITE_URL}/trecento-hero.webp`],
  },
};

import { ModalProvider } from "@/components/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased light `}
    >
      <Analytics />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
      </Script>

      <body className="min-h-full flex flex-col overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
