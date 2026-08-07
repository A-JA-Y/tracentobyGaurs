import { SITE_URL } from "./project";

export type BlogMeta = {
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
  tags: string[];
  featured: boolean;

  /* JSON-LD */
  schemaMarkup?:
  | Record<string, unknown>
  | Record<string, unknown>[];
  faqSchema?: Record<string, unknown>;
};

export const blogData: BlogMeta[] = [
  {
    id: "blog-1",

    /* SEO */
    title:
      "Trecento Residences by Gaurs, Jaypee Greens: The Art of Royal Living — Complete Buyer's Guide",
    slug: "trecento-residences-by-gaurs-jaypee-greens-buyers-guide-2026",
    excerpt:
      "Configurations, areas, specifications, price, amenities and location — everything a buyer needs before committing to one of the 60 condominiums at Trecento Residences.",
    metaTitle:
      "Trecento Residences by Gaurs Buyer's Guide 2026 | Price, Floor Plans, Areas",
    metaDescription:
      "A complete buyer's guide to Trecento Residences - A by Gaurs at Jaypee Greens, Greater Noida: only 60 4 BHK condominiums of 5000–5050 sq. ft., Type 1 vs Type 2 areas, specifications, amenities, location and how pricing works.",
    keywords: [
      "Trecento Residences",
      "Trecento Residences by Gaurs",
      "Trecento Residences price",
      "Trecento Residences Jaypee Greens",
      "4 BHK condominiums Greater Noida",
      "Gaurs Jaypee Greens project",
      "golf course apartments Greater Noida",
    ],
    canonical: `${SITE_URL}/blogs/trecento-residences-by-gaurs-jaypee-greens-buyers-guide-2026`,

    /* Display */
    image: "/blog-1.webp",
    altText:
      "The 30-storey Trecento Residences tower rising above the golf course at Jaypee Greens, Greater Noida",
    date: "2026-05-02",
    updatedAt: "2026-05-02",
    author: "Admin",
    category: "Real Estate",
    readTime: "11 min read",
    tags: ["jaypee greens", "greater noida", "gaurs", "4 bhk condominiums", "buyer guide"],
    featured: true,

    /* JSON-LD */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Trecento Residences by Gaurs, Jaypee Greens: The Art of Royal Living — Complete Buyer's Guide",
      description:
        "A complete buyer's guide to Trecento Residences - A by Gaurs at Jaypee Greens, Greater Noida: configurations, areas, specifications, amenities, location and pricing.",
      image: `${SITE_URL}/blog-1.webp`,
      author: { "@type": "Person", name: "Admin" },
      publisher: {
        "@type": "Organization",
        name: "Trecento Residences - A by Gaurs",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` },
      },
      datePublished: "2026-05-02",
      dateModified: "2026-05-02",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blogs/trecento-residences-by-gaurs-jaypee-greens-buyers-guide-2026`,
      },
      articleSection: "Real Estate",
      inLanguage: "en-IN",
      timeRequired: "PT11M",
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many residences are there at Trecento Residences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sixty. The project is a single cylindrical tower of 30 storeys with two condominiums on each floor. That is the entire supply — there is no phase two of the same building.",
          },
        },
        {
          "@type": "Question",
          name: "What configurations are available at Trecento Residences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only 4 BHK. There are two layouts: Condominium Type 1 at 5050 sq. ft. saleable (3112.63 sq. ft. RERA carpet) and Condominium Type 2 at 5000 sq. ft. saleable (3059.99 sq. ft. RERA carpet). Both carry an 806.65 sq. ft. continuous all-round balcony.",
          },
        },
        {
          "@type": "Question",
          name: "What is the price of Trecento Residences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing is shared on request, with an offer currently available on booking. Quotes are unit-specific because floor level, golf-course orientation, payment plan and live availability across only 60 units all move the number. Call +91 9220646888 for the current sheet.",
          },
        },
        {
          "@type": "Question",
          name: "Is Trecento Residences RERA approved?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The UP RERA registration number is UPRERAPRJ283531, verifiable at up-rera.in/projects. The project entity is Golf Lake LLP, LLP Identification No. AAO-5496.",
          },
        },
        {
          "@type": "Question",
          name: "When is possession expected at Trecento Residences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project was launched in October 2023 and is under construction, with completion proposed for July 2028. Buyers should treat this as the developer's stated schedule and confirm current construction status on a site visit.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the developer of Trecento Residences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Gaursons Group (Gaurs), active since 1995, with 65+ delivered projects and 65,000+ delivered units. The project entity is Golf Lake LLP (LLP ID AAO-5496).",
          },
        },
        {
          "@type": "Question",
          name: "Where exactly is Trecento Residences located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sun Court Tower - A, B6A (CT-4/Tower-A), Jaypee Greens, near Pari Chowk, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh — PIN 201306.",
          },
        },
        {
          "@type": "Question",
          name: "What amenities does Trecento Residences offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Renaissance landscape — arched skywalk, swimming pool, stepped pool, waterfall area, wooden decks, outdoor open gym, amphitheatre, pre-teen, teen and senior citizen areas, and a pray area. The Bloomsbury clubhouse — gymnasium, lounge, audio visual room, meeting room, party hall and an indoor gaming zone. Facilities are shared with the future development tower.",
          },
        },
        {
          "@type": "Question",
          name: "Can NRIs buy at Trecento Residences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NRIs can purchase residential property in India under existing FEMA regulations. Confirm documentation requirements, repatriation rules and payment routing with the sales team and your own tax adviser before booking.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book a site visit at Trecento Residences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Submit the enquiry form on this website or call the authorised channel-partner sales team on +91 9220646888.",
          },
        },
      ],
    },
  },
  {
    id: "blog-2",

    /* SEO */
    title:
      "Golf Course Living in NCR: Why Trecento Residences at Jaypee Greens Is 2026's Smartest Ultra-Luxury Investment",
    slug: "trecento-residences-jaypee-greens-golf-course-investment-2026",
    excerpt:
      "The scarcity thesis, the golf-course premium, the corridor's infrastructure tailwinds and the timing argument — an investment analysis of a 60-unit tower at Jaypee Greens.",
    metaTitle:
      "Trecento Residences Investment Analysis 2026 | Golf Course Living in NCR",
    metaDescription:
      "Why a 60-residence tower inside an 18-hole golf course at Jaypee Greens makes a different investment case from a 500-unit NCR luxury project: scarcity, view permanence, corridor infrastructure and entry timing.",
    keywords: [
      "Trecento Residences investment",
      "golf course living NCR",
      "Jaypee Greens investment",
      "Greater Noida luxury property 2026",
      "Jewar airport real estate",
      "Yamuna Expressway property",
      "ultra luxury apartments NCR",
    ],
    canonical: `${SITE_URL}/blogs/trecento-residences-jaypee-greens-golf-course-investment-2026`,

    altText:
      "Aerial view of the 18-hole international golf course at Jaypee Greens, Greater Noida",

    /* Display */
    image: "/blog-2.webp",
    date: "2026-05-18",
    updatedAt: "2026-05-18",
    author: "Admin",
    category: "Real Estate Investment",
    readTime: "10 min read",
    tags: [
      "investment",
      "jaypee greens",
      "golf course living",
      "jewar airport",
      "greater noida",
      "ultra luxury",
    ],
    featured: true,

    /* JSON-LD */
    schemaMarkup: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Golf Course Living in NCR: Why Trecento Residences at Jaypee Greens Is 2026's Smartest Ultra-Luxury Investment",
        description:
          "An investment analysis of Trecento Residences - A by Gaurs: the scarcity thesis behind 60 units, the golf-course premium, corridor infrastructure tailwinds and the entry-timing argument.",
        image: `${SITE_URL}/blog-2.webp`,
        author: { "@type": "Person", name: "Admin" },
        publisher: {
          "@type": "Organization",
          name: "Trecento Residences - A by Gaurs",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` },
        },
        datePublished: "2026-05-18",
        dateModified: "2026-05-18",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blogs/trecento-residences-jaypee-greens-golf-course-investment-2026`,
        },
        articleSection: "Real Estate Investment",
        inLanguage: "en-IN",
        timeRequired: "PT10M",
      },
      {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        name: "Trecento Residences - A by Gaurs",
        description:
          "A single 30-storey cylindrical tower holding only 60 lavish 4 BHK condominiums, two per floor, in the middle of an international 18-hole golf course at Jaypee Greens, Greater Noida.",
        url: `${SITE_URL}/`,
        image: [`${SITE_URL}/blog-2.webp`],
        numberOfAccommodationUnits: 60,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Sun Court Tower - A, B6A (CT-4/Tower-A), Jaypee Greens, near Pari Chowk",
          addressLocality: "Greater Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201306",
          addressCountry: "IN",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "18-Hole International Golf Course",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Bloomsbury Clubhouse",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Renaissance Landscape with Skywalk",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Swimming Pool and Stepped Pool",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "806.65 sq. ft. All-Round Balcony",
            value: true,
          },
        ],
        numberOfRooms: "4",
      },
    ],
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does a 60-unit project make a different investment case?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most NCR luxury towers hold 300 to 800 apartments, so at any moment several comparable units are on the resale market competing with each other. Trecento holds 60 in total. Thin resale supply is structural here rather than cyclical, which is the core of the scarcity argument.",
          },
        },
        {
          "@type": "Question",
          name: "What is the golf-course premium and why is it durable here?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The tower stands in the middle of Jaypee Greens' 18-hole Greg Norman course. A view over a golf course cannot be built out the way a view over vacant land can. Because every residence carries a continuous all-round balcony, the premium attaches to all 60 homes rather than only the corner units.",
          },
        },
        {
          "@type": "Question",
          name: "Which infrastructure projects affect this corridor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Noida International Airport at Jewar, Film City at Sector 21 YEIDA, a proposed Night Safari near Jaypee Greens, a proposed international cricket stadium, metro expansion across the Greater Noida corridor, and the YEIDA industrial belt — all inside the Delhi–Mumbai Industrial Corridor influence zone.",
          },
        },
        {
          "@type": "Question",
          name: "How far is Noida International Airport from Jaypee Greens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Approximately 25 km, about 30 minutes, via the Yamuna Expressway — whose entry point is roughly 8 minutes from the project.",
          },
        },
        {
          "@type": "Question",
          name: "Is 2026 a good time to enter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timing argument is that buying now sits after RERA registration and construction mobilisation — so two early-stage risks are already retired — but before construction-linked escalations run towards the proposed July 2028 completion. This is the seller's framing; property values can fall as well as rise, and this content is not investment advice.",
          },
        },
        {
          "@type": "Question",
          name: "What are the risks a buyer should weigh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is an under-construction purchase with a 2028 proposed completion, so delivery risk exists despite the developer's record. The same scarcity that supports pricing also means a thin resale market when you want to exit. Infrastructure timelines slip. And the price is on request, so benchmark any quote against comparable per-sq.-ft. rates in the corridor before committing.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the developer and what is their track record?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Gaursons Group, active since 1995, with 65+ delivered projects, 65,000+ delivered units and 40,000+ possessions handed over between 2014 and 2022. Trecento Residences is developed under the project entity Golf Lake LLP (LLP ID AAO-5496).",
          },
        },
        {
          "@type": "Question",
          name: "What is the RERA registration number?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UPRERAPRJ283531, verifiable on the UP RERA portal at up-rera.in/projects. Always check the registration before paying any booking amount.",
          },
        },
      ],
    },
  },
];
