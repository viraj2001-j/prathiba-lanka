// src/data/packageDetails.ts
import { PACKAGES, TourPackage } from "./packageDetails";

export type PackageDay = { day: number; title: string; description?: string };

export type PackageDetail = TourPackage & {
  recommendedFor: string;
  heroTagline: string;
  longDescription: string;
  itinerary?: PackageDay[]; // optional (auto-generated if missing)
  visualJourneys: { label: string; image: string }[];
  inclusions: string[];
  exclusions: string[];
  paymentPolicies: string[];
  paymentMethods: string[];
};

const baseOf = (id: string) => PACKAGES.find((p) => p.id === id)!;

const DEFAULT_INCLUSIONS = [
  "Accommodation",
  "Transportation in an air-conditioned vehicle with chauffeur guide",
  "Government taxes",
];

const DEFAULT_EXCLUSIONS = [
  "Alcoholic beverages",
  "Extra meals/snacks and beverages ordered outside the plan",
  "Early check-ins and late check-outs",
  "Tips & expenses of personal nature",
  "Travel insurance, visa & air fare",
];

const DEFAULT_PAYMENT_POLICIES = [
  "50% payment on confirmation and the balance 02 weeks prior to arrival.",
  "Or the full payment can be settled on confirmation.",
];

const DEFAULT_PAYMENT_METHODS = [
  "Online payment using a personal credit card (Amex/Visa/Master). Login details will be sent on confirmation.",
  "Bank transfer.",
];

export const PACKAGE_DETAILS: PackageDetail[] = [
  {
    ...baseOf("pearl-trail"),
    recommendedFor: "Recommended for First-Time Visitors",
    heroTagline: "Classic Cultural Escape",
    longDescription:
      "A short and perfectly paced introduction to Sri Lanka’s most iconic highlights. Explore the Cultural Triangle, experience Kandy’s heritage, enjoy the cool hill country, and end with beach relaxation—ideal if you want the essentials without rushing.",
    visualJourneys: [
      { label: "Sigiriya", image: "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5101" },
      { label: "Kandy", image: "https://source.unsplash.com/featured/1200x800/?kandy,temple&sig=5102" },
      { label: "Bentota", image: "https://source.unsplash.com/featured/1200x800/?bentota,beach&sig=5103" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("emerald-escape"),
    recommendedFor: "Recommended for Culture & Scenic Lovers",
    heroTagline: "Culture & Hill Country Journey",
    longDescription:
      "A balanced Sri Lanka experience combining heritage highlights with hill-country scenery and a charming coastal finish. Ideal for travelers who want culture, views, and a relaxed pace.",
    visualJourneys: [
      { label: "Sigiriya", image: "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5201" },
      { label: "Nuwara Eliya", image: "https://source.unsplash.com/featured/1200x800/?nuwara-eliya,tea&sig=5202" },
      { label: "Galle", image: "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=5203" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("sapphire-serenity"),
    recommendedFor: "Recommended for Hills + Beach Mix",
    heroTagline: "Hills & Coast Serenity",
    longDescription:
      "A beautiful mix of culture, misty hills, and a coastal ending. Enjoy tea estates, scenic viewpoints and Ella’s charm before transitioning to the south coast.",
    visualJourneys: [
      { label: "Ella", image: "https://source.unsplash.com/featured/1200x800/?ella,train&sig=5301" },
      { label: "Hill Country", image: "https://source.unsplash.com/featured/1200x800/?tea,plantation&sig=5302" },
      { label: "Galle", image: "https://source.unsplash.com/featured/1200x800/?galle,beach&sig=5303" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("golden-circuit"),
    recommendedFor: "Recommended for Wildlife + Culture",
    heroTagline: "Wildlife & Culture Circuit",
    longDescription:
      "Add safari energy to your classic route. Combine cultural icons with wildlife encounters and a light coastal finish—ideal for those who want variety.",
    visualJourneys: [
      { label: "Safari", image: "https://source.unsplash.com/featured/1200x800/?yala,safari&sig=5401" },
      { label: "Kandy", image: "https://source.unsplash.com/featured/1200x800/?kandy&sig=5402" },
      { label: "South Coast", image: "https://source.unsplash.com/featured/1200x800/?sri-lanka,coast&sig=5403" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("royal-odyssey"),
    recommendedFor: "Recommended for Complete Sri Lanka Experience",
    heroTagline: "Complete Island Highlights",
    longDescription:
      "A complete Sri Lanka taste with extra comfort in the hills and a proper beach stay at the end—ideal for travelers who want it all in one well-paced journey.",
    visualJourneys: [
      { label: "Sigiriya", image: "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5501" },
      { label: "Ella", image: "https://source.unsplash.com/featured/1200x800/?ella&sig=5502" },
      { label: "Bentota", image: "https://source.unsplash.com/featured/1200x800/?bentota&sig=5503" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("platinum-paradise"),
    recommendedFor: "Recommended for Luxury Travelers",
    heroTagline: "Luxury Grand Tour",
    longDescription:
      "An ultra-luxury grand tour across Sri Lanka with premium stays and seamless private touring—from culture and hills to wildlife and beaches.",
    visualJourneys: [
      { label: "Luxury", image: "https://source.unsplash.com/featured/1200x800/?luxury,resort&sig=5601" },
      { label: "Safari", image: "https://source.unsplash.com/featured/1200x800/?safari,sri-lanka&sig=5602" },
      { label: "Coast", image: "https://source.unsplash.com/featured/1200x800/?mirissa,beach&sig=5603" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("emerald-isle-explorer"),
    recommendedFor: "Recommended for Heritage + Coast",
    heroTagline: "Heritage & Coast Discovery",
    longDescription:
      "A heritage-rich route blending ancient cities with hill country charm and a warm south coast ending.",
    visualJourneys: [
      { label: "Anuradhapura", image: "https://source.unsplash.com/featured/1200x800/?anuradhapura&sig=5701" },
      { label: "Hill Country", image: "https://source.unsplash.com/featured/1200x800/?nuwara-eliya&sig=5702" },
      { label: "Mirissa", image: "https://source.unsplash.com/featured/1200x800/?mirissa&sig=5703" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("jungle-coast-odyssey"),
    recommendedFor: "Recommended for Nature, Adventure Seekers",
    heroTagline: "Wildlife and Heritage Expedition",
    longDescription:
      "Experience Sri Lanka’s diverse beauty on an adventure blending wildlife, culture, and tropical beaches. Begin by the coast, explore pristine national parks, discover ancient cities, enjoy cool hill country views, and end with beach leisure—perfect for nature lovers who want variety.",
    visualJourneys: [
      { label: "Wilpattu", image: "https://source.unsplash.com/featured/1200x800/?wilpattu&sig=5801" },
      { label: "Yala", image: "https://source.unsplash.com/featured/1200x800/?yala&sig=5802" },
      { label: "Tangalle", image: "https://source.unsplash.com/featured/1200x800/?tangalle&sig=5803" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("tea-trail-southern-loop"),
    recommendedFor: "Recommended for Scenic + Long Stay",
    heroTagline: "Tea Trail & Coastal Gems",
    longDescription:
      "A long scenic loop combining tea country, spice gardens, cultural highlights, and a southern coastal finish—ideal for travelers who want a fuller, slower journey.",
    visualJourneys: [
      { label: "Tea Country", image: "https://source.unsplash.com/featured/1200x800/?tea,sri-lanka&sig=5901" },
      { label: "Ella", image: "https://source.unsplash.com/featured/1200x800/?ella,bridge&sig=5902" },
      { label: "Galle", image: "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=5903" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("grand-circle-tour"),
    recommendedFor: "Recommended for Full Island Culture",
    heroTagline: "Ancient Cities to Wild Coast",
    longDescription:
      "A full-island classic that links ancient cities, hill country, safari and the south coast into one comprehensive route.",
    visualJourneys: [
      { label: "Ancient Cities", image: "https://source.unsplash.com/featured/1200x800/?polonnaruwa&sig=6001" },
      { label: "Hills", image: "https://source.unsplash.com/featured/1200x800/?nuwara-eliya&sig=6002" },
      { label: "Safari", image: "https://source.unsplash.com/featured/1200x800/?yala,safari&sig=6003" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("north-to-south-expedition"),
    recommendedFor: "Recommended for Explorers",
    heroTagline: "North to South Expedition",
    longDescription:
      "From Jaffna and Mannar down through cultural icons, hills, safari, and the southern coast—this is for travelers who want deep variety.",
    visualJourneys: [
      { label: "Jaffna", image: "https://source.unsplash.com/featured/1200x800/?jaffna&sig=6101" },
      { label: "Culture", image: "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=6102" },
      { label: "Coast", image: "https://source.unsplash.com/featured/1200x800/?galle&sig=6103" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("luxury-grand-tour"),
    recommendedFor: "Recommended for Ultra-Luxury",
    heroTagline: "The Definitive Sri Lanka Experience",
    longDescription:
      "A high-end, full island experience with upgraded stays, VIP pacing, and premium comfort throughout.",
    visualJourneys: [
      { label: "Luxury Stays", image: "https://source.unsplash.com/featured/1200x800/?luxury,villa&sig=6201" },
      { label: "Hills", image: "https://source.unsplash.com/featured/1200x800/?tea,estate&sig=6202" },
      { label: "Beach", image: "https://source.unsplash.com/featured/1200x800/?sri-lanka,beach&sig=6203" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
  {
    ...baseOf("ultimate-ceylon-odyssey"),
    recommendedFor: "Recommended for the Ultimate Full-Island Tour",
    heroTagline: "Ultimate Ceylon Odyssey",
    longDescription:
      "The most complete itinerary across the island including North and East coast (Arugam Bay), cultural triangle, hills, safari and luxury beaches.",
    visualJourneys: [
      { label: "Arugam Bay", image: "https://source.unsplash.com/featured/1200x800/?arugam-bay&sig=6301" },
      { label: "Safari", image: "https://source.unsplash.com/featured/1200x800/?sri-lanka,safari&sig=6302" },
      { label: "Galle", image: "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=6303" },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
];