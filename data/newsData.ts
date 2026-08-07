import { SITE_URL } from "./project";

export type NewsMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const NewsData: NewsMeta[] = [
  {
    id: "news-1",

    /* SEO */
    title:
      "Gaurs Unveils Trecento Residences at Jaypee Greens — Only 60 Ultra-Luxury 4 BHK Condominiums in a 30-Storey Golf Course Tower",
    slug: "gaurs-trecento-residences-jaypee-greens-launch-update",
    excerpt:
      "The Gaursons Group brings a 60-residence, 30-storey cylindrical tower to the middle of the 18-hole golf course at Jaypee Greens, Greater Noida — two condominiums per floor, 5000+ sq. ft. each.",
    metaTitle:
      "Gaurs Launches Trecento Residences at Jaypee Greens | 60 Condominiums, 30 Storeys",
    metaDescription:
      "Trecento Residences - A by Gaurs is under construction at Jaypee Greens, Greater Noida: a single 30-storey tower with only 60 four-bedroom condominiums of 5000–5050 sq. ft., RERA UPRERAPRJ283531.",
    keywords: [
      "Trecento Residences launch",
      "Gaurs Jaypee Greens",
      "Trecento Residences news",
      "Greater Noida ultra luxury launch",
      "60 condominiums Jaypee Greens",
      "Gaursons Group new project",
      "UPRERAPRJ283531",
    ],
    canonical: `${SITE_URL}/news/gaurs-trecento-residences-jaypee-greens-launch-update`,

    /* Display */
    image: "/news-1.webp",
    altText:
      "The all-round balconies of the Trecento Residences tower lit at dusk above Jaypee Greens, Greater Noida",
    date: "2026-04-28",
    updatedAt: "2026-04-28",
    author: "Admin",
    category: "Real Estate News",
    readTime: "5 min read",
    featured: true,
    tags: [
      "greater noida",
      "jaypee greens",
      "gaurs",
      "project launch",
      "ultra luxury",
      "golf course",
    ],

    /* Extra */
    location: "Greater Noida",
    newsType: "Launch",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Gaurs Unveils Trecento Residences at Jaypee Greens — Only 60 Ultra-Luxury 4 BHK Condominiums in a 30-Storey Golf Course Tower",
      description:
        "The Gaursons Group brings a 60-residence, 30-storey cylindrical tower to the middle of the 18-hole golf course at Jaypee Greens, Greater Noida.",
      image: [`${SITE_URL}/news-1.webp`],
      datePublished: "2026-04-28",
      dateModified: "2026-04-28",
      author: { "@type": "Person", name: "Admin" },
      publisher: {
        "@type": "Organization",
        name: "Trecento Residences - A by Gaurs",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/news/gaurs-trecento-residences-jaypee-greens-launch-update`,
      },
      articleSection: "Real Estate",
      keywords:
        "Trecento Residences, Gaursons Group, Jaypee Greens, Greater Noida, ultra luxury condominiums, golf course tower",
      about: [
        { "@type": "Place", name: "Jaypee Greens, Greater Noida" },
        { "@type": "Residence", name: "Trecento Residences - A by Gaurs" },
      ],
    },
  },
];

export default NewsData;
