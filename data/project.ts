/**
 * Single source of truth for every Trecento Residences fact used across the site.
 * All figures are reproduced from the official brochure and the authorised
 * channel-partner content sheet (compiled 04 August 2026).
 */

export const SITE_URL = "https://www.tracentobygaurs.com";

export const project = {
  name: "Trecento Residences - A by Gaurs",
  shortName: "Trecento Residences",
  tagline: "The Art of Royal Living",
  eyebrow: "Gaurs - The Life Artists",
  developer: "Gaursons Group",
  entity: "Golf Lake LLP",
  entityId: "AAO-5496",
  type: "Residential - 4 BHK lavish condominiums",
  structure: "Single cylindrical tower, 30 floors, 60 units, 2 per floor",
  projectArea: "Approx. 5,139.50 sq. mt.",
  township: "Jaypee Greens - 182.92 hectares / 452 acres",
  status: "Under construction",
  launched: "October 2023",
  completion: "July 2028",
  floorToFloor: "3.25 m",
  totalBlocks: "01",
  rera: "UPRERAPRJ283531",
  reraUrl: "https://up-rera.in/projects",
  channelPartner: "Realty Assistant Pvt. Ltd.",
  channelPartnerRera: "UPRERAAGT18286",
  phone: "+91 9220646888",
  phoneHref: "+919220646888",
  email: "care@trecentobygaurs.com",
  website: "tracentobygaurs.com",
  addressLine: "Sun Court Tower - A, B6A (CT-4/Tower-A), Jaypee Greens, near Pari Chowk",
  locality: "Greater Noida",
  district: "Gautam Buddha Nagar",
  state: "Uttar Pradesh",
  pin: "201306",
  registeredAddress:
    "Suncourt Tower-A, Plot No. Condominium Apartments, Type-IV, B6a (CT-4/Tower-A), Golf Course, Land-1, Surajpur Kasna Road, Sector-19 & 25, Greater Noida - 201310 (U.P.), India",
  corporateOffice:
    "Gaur Biz Park, Plot No. 1, Abhay Khand II, Indirapuram, Ghaziabad - 201014 (U.P.), India",
  mapEmbed:
    "https://maps.google.com/maps?q=Jaypee%20Greens%20Greater%20Noida&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapLink: "https://maps.google.com/?q=Jaypee+Greens+Greater+Noida",
  price: "On request - offer available on booking",
} as const;

/* ── Headline counters ─────────────────────────────────────────── */
export const heroStats = [
  { value: "60", label: "Exclusive Residences" },
  { value: "30", label: "Storeys · One Tower" },
  { value: "5000+", label: "Sq. Ft. Saleable" },
  { value: "452", label: "Acres Jaypee Greens" },
  { value: "18", label: "Hole Golf Course" },
  { value: "806", label: "Sq. Ft. Balcony" },
] as const;

export const glanceStats = [
  { value: "Oct 2023", label: "Launched" },
  { value: "Jul 2028", label: "Proposed Completion" },
  { value: "3.25 m", label: "Floor to Floor" },
  { value: "01", label: "Total Blocks" },
] as const;

/* ── Project at a glance ───────────────────────────────────────── */
export const glanceTable = [
  { particular: "Project name", detail: "Trecento Residences - A by Gaurs" },
  {
    particular: "Developer",
    detail: "Gaursons Group - project entity Golf Lake LLP (LLP ID AAO-5496)",
  },
  { particular: "Project type", detail: "Residential - 4 BHK lavish condominiums (apartments)" },
  { particular: "Structure", detail: "Single cylindrical tower, 30 floors, 60 units, 2 per floor" },
  { particular: "Saleable areas", detail: "5050 sq. ft. (Type 1) and 5000 sq. ft. (Type 2)" },
  { particular: "Project area", detail: "Approx. 5,139.50 sq. mt." },
  { particular: "Township", detail: "Jaypee Greens - 182.92 hectares / 452 acres" },
  { particular: "Status", detail: "Under construction" },
  { particular: "RERA", detail: "UPRERAPRJ283531 - verify at up-rera.in/projects" },
  {
    particular: "Address",
    detail:
      "Sun Court Tower - A, B6A (CT-4/Tower-A), Jaypee Greens, near Pari Chowk, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh 201306",
  },
  { particular: "Price", detail: "On request - offer available on booking" },
] as const;

export const whyDifferent = [
  "A single tower, not a cluster - no shared walls with a crowded complex.",
  "Two homes per floor, giving each residence a private-perch feeling.",
  "Golf-course frontage that cannot be built out in the future.",
  "A 452-acre township that is already built, living and green.",
  "The Gaurs brand, active since 1995, behind a RERA-registered project.",
  "Ultra-thin resale supply by design - only 60 homes will ever exist.",
] as const;

/* ── Residences ────────────────────────────────────────────────── */
export const areaTable = [
  {
    detail: "Carpet area (RERA)",
    type1: "289.17 sq.mt. / 3112.63 sq.ft.",
    type2: "284.28 sq.mt. / 3059.99 sq.ft.",
  },
  {
    detail: "Covered area",
    type1: "294.86 sq.mt. / 3173.87 sq.ft.",
    type2: "289.86 sq.mt. / 3120.05 sq.ft.",
  },
  {
    detail: "Balcony area",
    type1: "74.94 sq.mt. / 806.65 sq.ft.",
    type2: "74.94 sq.mt. / 806.65 sq.ft.",
  },
  {
    detail: "Common area (floor)",
    type1: "42.23 sq.mt. / 454.56 sq.ft.",
    type2: "42.23 sq.mt. / 454.56 sq.ft.",
  },
  {
    detail: "Saleable area",
    type1: "469.16 sq.mt. / 5050 sq.ft.",
    type2: "464.51 sq.mt. / 5000 sq.ft.",
  },
] as const;

export const layoutProgramme = [
  "Foyer / Lounge",
  "Living Room",
  "Dining Area",
  "Kitchen with utility",
  "4 Bedrooms",
  "5 Toilets",
  "4 Dress Rooms",
  "Puja Room",
  "Store",
  "Servant room with toilet",
  "Utility balcony",
  "Continuous all-round balcony",
] as const;

export const priceTable = [
  {
    type: "Condominium Type 1",
    carpet: "3112.63 sq. ft.",
    saleable: "5050 sq. ft.",
    config: "4 BHK",
    price: "On request*",
  },
  {
    type: "Condominium Type 2",
    carpet: "3059.99 sq. ft.",
    saleable: "5000 sq. ft.",
    config: "4 BHK",
    price: "On request*",
  },
] as const;

export const quoteFactors = [
  {
    title: "Floor level",
    body: "Higher floors carry a golf-course and skyline premium across the 30-storey tower.",
  },
  {
    title: "Layout",
    body: "Type 1 at 5050 sq. ft. versus Type 2 at 5000 sq. ft. saleable.",
  },
  {
    title: "Orientation",
    body: "Homes facing the 18-hole course are priced at a premium.",
  },
  {
    title: "Payment plan",
    body: "Construction-linked, down-payment and flexi plans are priced differently.",
  },
  {
    title: "Booking offer",
    body: "A launch offer is currently running on booking.",
  },
  {
    title: "Live availability",
    body: "With only 60 units in total, inventory itself moves pricing.",
  },
] as const;

export const investmentCase = [
  {
    driver: "Scarcity",
    why: "Most NCR luxury towers hold 300 to 800 apartments. This one holds 60, two per floor - that is the entire supply, forever, which keeps resale volumes permanently thin.",
  },
  {
    driver: "Setting",
    why: "Golf frontage inside a 452-acre township cannot be built out, and the address is instantly understood by domestic and global buyers alike.",
  },
  {
    driver: "Corridor",
    why: "The Jewar airport, Film City, proposed Night Safari and cricket stadium, DMIC node and metro expansion all deepen demand for premium housing near Pari Chowk.",
  },
  {
    driver: "Developer",
    why: "Gaurs has delivered 65 plus projects and 65,000 plus units since 1995, reducing execution risk on an under-construction purchase.",
  },
  {
    driver: "Timing",
    why: "Buying in 2026 sits after RERA registration and construction mobilisation, but before the price ladder steps up towards the July 2028 completion.",
  },
] as const;

export const buyerPersonas = [
  {
    title: "The Connoisseur",
    body: "Seeking a low-density statement home with only 59 neighbours.",
  },
  {
    title: "The Upgrading Family",
    body: "Needing 5000 plus sq. ft., five toilets and a servant room.",
  },
  {
    title: "The NRI Buyer",
    body: "Wanting a trusted brand, RERA cover and rental appeal.",
  },
  {
    title: "The Investor",
    body: "Taking early entry into a scarce asset in a high-growth corridor.",
  },
] as const;

/* ── Specifications ────────────────────────────────────────────── */
export const residenceSpecs = [
  {
    item: "Flooring",
    spec: "Imported marble in drawing, dining, kitchen and bedrooms; granite stone in kitchen; designer tiles in toilets; laminated wooden floor in dresser; anti-skid ceramic tiles in balconies and utility areas",
  },
  {
    item: "Doors & windows",
    spec: "Aluminium / uPVC sliding and openable doors and windows with DGU glass; pre-laminated doors in hardwood frames",
  },
  {
    item: "Kitchen",
    spec: "Counter with stainless-steel sink; branded RO, hob and chimney with exhaust; modular pre-laminated cabinets; ceramic tiles 2 ft above counter",
  },
  { item: "Air conditioning", spec: "VRV / split ACs in bedrooms, drawing-dining and kitchen" },
  { item: "Hot water", spec: "Heat-pump hot water to all toilets and the kitchen" },
  { item: "Woodwork", spec: "Wardrobes provided in all dressing rooms" },
  { item: "Railing", spec: "Glass balcony railing with SS fittings; mild-steel staircase railing" },
  { item: "Ceilings", spec: "Good-quality POP false ceiling in all rooms, living / dining and toilets" },
  {
    item: "Sanitary",
    spec: "Corrosion-free CPVC pipes; reputed-brand CP fittings, wash basins and wall-mounted WCs",
  },
  {
    item: "Electrical",
    spec: "Fire-resistant copper wiring in concealed conduits; modular switches; TV points in all rooms; Wi-Fi provision",
  },
  { item: "Security", spec: "Video intercom phone in every home" },
] as const;

export const commonSpecs = [
  { item: "Elevators", spec: "High-speed elevators to all floors plus a dedicated service elevator" },
  { item: "Power", spec: "Electrical supply with power backup from the township" },
  { item: "Exterior", spec: "Exterior-grade finish with texture paint" },
  { item: "Staircase", spec: "Stone-and-tile flooring with MS railing as per design" },
  { item: "Fire safety", spec: "Sprinklers, hydrant, hose reel and smoke detectors as per approved plans" },
  {
    item: "Security & FTTH",
    spec: "Secure entrance lobby, CCTV system, video door phone and fibre to the home",
  },
] as const;

/* ── Amenities ─────────────────────────────────────────────────── */
export const renaissanceAmenities = [
  "Towering arched skywalk above the greens",
  "Landscaped pathways",
  "Swimming pool",
  "Sculptural stepped pool",
  "Waterfall area",
  "Wooden decks with planting",
  "Outdoor open gym",
  "Open-air amphitheatre",
  "Pre-teen activity area",
  "Teen activity area",
  "Senior citizen area",
  "Pray area (deity place)",
] as const;

export const bloomsburyAmenities = [
  "Clubhouse gymnasium",
  "Lounge",
  "Audio visual room",
  "Meeting room",
  "Multi-purpose / party hall",
  "Indoor gaming zone",
  "Table tennis and snooker",
  "Chess, cards and carrom",
] as const;

export const townshipPrivileges = [
  "18-hole golf course by Greg Norman",
  "Golf practice range",
  "Golf & spa resort",
  "Boomerang Club",
  "The Atlantic sports complex",
  "Olympic-size swimming pool",
  "Indoor basketball court",
  "Synthetic badminton court",
  "Squash courts",
  "Lawn tennis courts",
  "Temple, school and town centre",
  "Fire station and gated security",
] as const;

export const peaceOfMind = [
  "Gated township with controlled access",
  "Secure entrance lobby with CCTV surveillance",
  "Video door phone and in-home video intercom",
  "Fire sprinklers, hydrants and smoke detectors",
  "Township power backup and FTTH connectivity",
  "High-speed passenger and service elevators",
] as const;

/* ── Location ──────────────────────────────────────────────────── */
export const connectivityHighlights = [
  "Jaypee Greens / Pari Chowk metro station on the Aqua Line",
  "Delta 1 and Alpha 1 metro stations close by",
  "Direct access to the Yamuna Expressway",
  "Seamless link to the Noida - Greater Noida Expressway",
  "Easy reach of Noida International Airport, Jewar",
  "Buddh International Circuit a short drive away",
  "Delhi via the DND Expressway and Mahamaya Flyover",
  "Within the Delhi - Mumbai Industrial Corridor influence zone",
] as const;

export const distances = [
  { destination: "Pari Chowk Metro Station", distance: "2 km", time: "5 mins" },
  { destination: "Alpha 1 Metro Station", distance: "4 km", time: "8 mins" },
  { destination: "Yamuna Expressway entry point", distance: "6 km", time: "8 mins" },
  { destination: "Galgotias College", distance: "3 km", time: "5 mins" },
  { destination: "Yatharth Hospital", distance: "4 km", time: "7 mins" },
  { destination: "Radisson Blu Hotel", distance: "4 km", time: "6 mins" },
  { destination: "Shaheed Vijay Singh Pathik Sports Complex", distance: "3 km", time: "6 mins" },
  { destination: "Buddh International Circuit (F1 track)", distance: "9 km", time: "12 mins" },
  { destination: "Noida International Airport (Jewar)", distance: "25 km", time: "30 mins" },
  { destination: "Film City / DND, Delhi side", distance: "28 km", time: "35 mins" },
] as const;

export const socialInfrastructure = [
  {
    category: "Education",
    items: [
      "Galgotias College - 5 min",
      "Jaypee Public School - 7 min",
      "GL Bajaj Institute - 8 min",
      "Sharda University - 10 min",
      "Delhi Public School - 10 min",
      "Galgotias University - 12 min",
      "Bennett University - 15 min",
      "Gaurs International School - 15 min",
    ],
  },
  {
    category: "Healthcare",
    items: [
      "Yatharth Super-Specialty - 7 min",
      "Sharda Hospital - 10 min",
      "Kailash Hospital - 12 min",
      "Jaypee Hospital Noida - 20 min",
      "Fortis Noida - 25 min",
      "Apollo Noida - 28 min",
    ],
  },
  {
    category: "Workspaces",
    items: [
      "Knowledge Park I-IV - 5-15 min",
      "Commercial Park - 10 min",
      "Surajpur Industrial Area - 12 min",
      "Advant Navis Business Park - 15 min",
      "Adobe and MetLife on the Expressway - 20 min",
      "YEIDA belt - 20 min",
    ],
  },
  {
    category: "Leisure",
    items: [
      "Jaypee Greens Golf Course - at the doorstep",
      "Boomerang Club & Atlantic Sports Complex - in township",
      "Town Centre - 5 min",
      "Radisson Blu - 6 min",
      "The Grand Venice Mall - 10 min",
      "Buddh International Circuit - 12 min",
    ],
  },
] as const;

export const futureInfrastructure = [
  "Noida International Airport at Jewar",
  "Film City at Sector 21, YEIDA",
  "Proposed Night Safari near Jaypee Greens",
  "Proposed international cricket stadium",
  "New commercial establishments near Pari Chowk",
  "Metro expansion across the Greater Noida corridor",
] as const;

/* ── Developer ─────────────────────────────────────────────────── */
export const developerStats = [
  { value: "65+", label: "Delivered Projects" },
  { value: "65,000+", label: "Delivered Units" },
  { value: "1 Lakh+", label: "Happy Customers" },
  { value: "6 Mn+", label: "Sq. Mt. Developed" },
  { value: "1995", label: "Founded" },
  { value: "40,000+", label: "Possessions 2014-22" },
  { value: "67", label: "Projects On The Way" },
  { value: "CREDAI", label: "Member" },
] as const;

export const landmarkDevelopments = [
  "Gaur City",
  "Gaur Yamuna City",
  "Gaur Saundaryam",
  "The Islands by Gaurs",
] as const;

/* ── FAQ ───────────────────────────────────────────────────────── */
export const faqs = [
  {
    q: "Where is Trecento Residences located?",
    a: "Sun Court Tower - A, B6A (CT-4/Tower-A), Jaypee Greens, near Pari Chowk, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh - PIN 201306.",
  },
  {
    q: "How many residences are there?",
    a: "Only 60 - two condominiums per floor across 30 storeys in a single cylindrical tower, sized 5000 and 5050 sq. ft. saleable.",
  },
  {
    q: "What configurations are available?",
    a: "4 BHK condominiums only - Type 1 at 5050 sq. ft. and Type 2 at 5000 sq. ft. saleable, both with 806.65 sq. ft. all-round balconies.",
  },
  {
    q: "Is the project RERA approved?",
    a: "Yes - UP RERA registration number UPRERAPRJ283531, verifiable at up-rera.in/projects.",
  },
  {
    q: "What is the construction status?",
    a: "Launched in October 2023 and currently under construction, with completion proposed for July 2028.",
  },
  {
    q: "What is the price of Trecento Residences?",
    a: "Pricing is shared on request, with an offer currently available on booking. Quotes are unit-specific by floor and orientation. Call +91 9220646888 for the current sheet.",
  },
  {
    q: "Who is the developer?",
    a: "The Gaursons Group (Gaurs), active since 1995, with 65+ delivered projects and 65,000+ delivered units. The project entity is Golf Lake LLP (LLP ID AAO-5496).",
  },
  {
    q: "What is the nearest metro station?",
    a: "Jaypee Greens / Pari Chowk station on the Aqua Line, with Delta 1 also close by.",
  },
  {
    q: "How far is Noida International Airport?",
    a: "Roughly 25 km / 30 minutes, via the Yamuna Expressway whose entry point is about 8 minutes away.",
  },
  {
    q: "Does the project have a golf course?",
    a: "The tower stands in the middle of Jaypee Greens' international 18-hole Greg Norman golf course, with panoramic views from every all-round balcony.",
  },
  {
    q: "Are the clubhouse facilities shared?",
    a: "Yes - community facilities are common to Tower A and the future development tower.",
  },
  {
    q: "How do I book a site visit?",
    a: "Submit the enquiry form on this website or call the sales team directly on +91 9220646888.",
  },
] as const;

/* ── Financing ─────────────────────────────────────────────────── */
export const financePartners = [
  { name: "Aditya Birla Capital", role: "Home loans & construction finance" },
  { name: "Canara Bank", role: "Home loans" },
] as const;
