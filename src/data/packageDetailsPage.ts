// // src/data/packageDetails.ts
// import { PACKAGES, TourPackage } from "./packageDetails";

// export type PackageDay = { day: number; title: string; description?: string };

// export type PackageDetail = TourPackage & {
//   recommendedFor: string;
//   heroTagline: string;
//   longDescription: string;
//   itinerary?: PackageDay[]; // optional (auto-generated if missing)
//   visualJourneys: { label: string; image: string }[];
//   inclusions: string[];
//   exclusions: string[];
//   paymentPolicies: string[];
//   paymentMethods: string[];
// };

// const baseOf = (id: string) => PACKAGES.find((p) => p.id === id)!;

// const DEFAULT_INCLUSIONS = [
//   "Accommodation",
//   "Transportation in an air-conditioned vehicle with chauffeur guide",
//   "Government taxes",
// ];

// const DEFAULT_EXCLUSIONS = [
//   "Alcoholic beverages",
//   "Extra meals/snacks and beverages ordered outside the plan",
//   "Early check-ins and late check-outs",
//   "Tips & expenses of personal nature",
//   "Travel insurance, visa & air fare",
// ];

// const DEFAULT_PAYMENT_POLICIES = [
//   "50% payment on confirmation and the balance 02 weeks prior to arrival.",
//   "Or the full payment can be settled on confirmation.",
// ];

// const DEFAULT_PAYMENT_METHODS = [
//   "Online payment using a personal credit card (Amex/Visa/Master). Login details will be sent on confirmation.",
//   "Bank transfer.",
// ];

// export const PACKAGE_DETAILS: PackageDetail[] = [
//   {
//     ...baseOf("pearl-trail"),
//     recommendedFor: "Recommended for First-Time Visitors",
//     heroTagline: "Classic Cultural Escape",
//     longDescription:
//       "A short and perfectly paced introduction to Sri Lanka’s most iconic highlights. Explore the Cultural Triangle, experience Kandy’s heritage, enjoy the cool hill country, and end with beach relaxation—ideal if you want the essentials without rushing.",
//     visualJourneys: [
//       { label: "Sigiriya", image: "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5101" },
//       { label: "Kandy", image: "https://source.unsplash.com/featured/1200x800/?kandy,temple&sig=5102" },
//       { label: "Bentota", image: "https://source.unsplash.com/featured/1200x800/?bentota,beach&sig=5103" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("emerald-escape"),
//     recommendedFor: "Recommended for Culture & Scenic Lovers",
//     heroTagline: "Culture & Hill Country Journey",
//     longDescription:
//       "A balanced Sri Lanka experience combining heritage highlights with hill-country scenery and a charming coastal finish. Ideal for travelers who want culture, views, and a relaxed pace.",
//     visualJourneys: [
//       { label: "Sigiriya", image: "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5201" },
//       { label: "Nuwara Eliya", image: "https://source.unsplash.com/featured/1200x800/?nuwara-eliya,tea&sig=5202" },
//       { label: "Galle", image: "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=5203" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("sapphire-serenity"),
//     recommendedFor: "Recommended for Hills + Beach Mix",
//     heroTagline: "Hills & Coast Serenity",
//     longDescription:
//       "A beautiful mix of culture, misty hills, and a coastal ending. Enjoy tea estates, scenic viewpoints and Ella’s charm before transitioning to the south coast.",
//     visualJourneys: [
//       { label: "Ella", image: "https://source.unsplash.com/featured/1200x800/?ella,train&sig=5301" },
//       { label: "Hill Country", image: "https://source.unsplash.com/featured/1200x800/?tea,plantation&sig=5302" },
//       { label: "Galle", image: "https://source.unsplash.com/featured/1200x800/?galle,beach&sig=5303" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("golden-circuit"),
//     recommendedFor: "Recommended for Wildlife + Culture",
//     heroTagline: "Wildlife & Culture Circuit",
//     longDescription:
//       "Add safari energy to your classic route. Combine cultural icons with wildlife encounters and a light coastal finish—ideal for those who want variety.",
//     visualJourneys: [
//       { label: "Safari", image: "https://source.unsplash.com/featured/1200x800/?yala,safari&sig=5401" },
//       { label: "Kandy", image: "https://source.unsplash.com/featured/1200x800/?kandy&sig=5402" },
//       { label: "South Coast", image: "https://source.unsplash.com/featured/1200x800/?sri-lanka,coast&sig=5403" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("royal-odyssey"),
//     recommendedFor: "Recommended for Complete Sri Lanka Experience",
//     heroTagline: "Complete Island Highlights",
//     longDescription:
//       "A complete Sri Lanka taste with extra comfort in the hills and a proper beach stay at the end—ideal for travelers who want it all in one well-paced journey.",
//     visualJourneys: [
//       { label: "Sigiriya", image: "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5501" },
//       { label: "Ella", image: "https://source.unsplash.com/featured/1200x800/?ella&sig=5502" },
//       { label: "Bentota", image: "https://source.unsplash.com/featured/1200x800/?bentota&sig=5503" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("platinum-paradise"),
//     recommendedFor: "Recommended for Luxury Travelers",
//     heroTagline: "Luxury Grand Tour",
//     longDescription:
//       "An ultra-luxury grand tour across Sri Lanka with premium stays and seamless private touring—from culture and hills to wildlife and beaches.",
//     visualJourneys: [
//       { label: "Luxury", image: "https://source.unsplash.com/featured/1200x800/?luxury,resort&sig=5601" },
//       { label: "Safari", image: "https://source.unsplash.com/featured/1200x800/?safari,sri-lanka&sig=5602" },
//       { label: "Coast", image: "https://source.unsplash.com/featured/1200x800/?mirissa,beach&sig=5603" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("emerald-isle-explorer"),
//     recommendedFor: "Recommended for Heritage + Coast",
//     heroTagline: "Heritage & Coast Discovery",
//     longDescription:
//       "A heritage-rich route blending ancient cities with hill country charm and a warm south coast ending.",
//     visualJourneys: [
//       { label: "Anuradhapura", image: "https://source.unsplash.com/featured/1200x800/?anuradhapura&sig=5701" },
//       { label: "Hill Country", image: "https://source.unsplash.com/featured/1200x800/?nuwara-eliya&sig=5702" },
//       { label: "Mirissa", image: "https://source.unsplash.com/featured/1200x800/?mirissa&sig=5703" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("jungle-coast-odyssey"),
//     recommendedFor: "Recommended for Nature, Adventure Seekers",
//     heroTagline: "Wildlife and Heritage Expedition",
//     longDescription:
//       "Experience Sri Lanka’s diverse beauty on an adventure blending wildlife, culture, and tropical beaches. Begin by the coast, explore pristine national parks, discover ancient cities, enjoy cool hill country views, and end with beach leisure—perfect for nature lovers who want variety.",
//     visualJourneys: [
//       { label: "Wilpattu", image: "https://source.unsplash.com/featured/1200x800/?wilpattu&sig=5801" },
//       { label: "Yala", image: "https://source.unsplash.com/featured/1200x800/?yala&sig=5802" },
//       { label: "Tangalle", image: "https://source.unsplash.com/featured/1200x800/?tangalle&sig=5803" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("tea-trail-southern-loop"),
//     recommendedFor: "Recommended for Scenic + Long Stay",
//     heroTagline: "Tea Trail & Coastal Gems",
//     longDescription:
//       "A long scenic loop combining tea country, spice gardens, cultural highlights, and a southern coastal finish—ideal for travelers who want a fuller, slower journey.",
//     visualJourneys: [
//       { label: "Tea Country", image: "https://source.unsplash.com/featured/1200x800/?tea,sri-lanka&sig=5901" },
//       { label: "Ella", image: "https://source.unsplash.com/featured/1200x800/?ella,bridge&sig=5902" },
//       { label: "Galle", image: "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=5903" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("grand-circle-tour"),
//     recommendedFor: "Recommended for Full Island Culture",
//     heroTagline: "Ancient Cities to Wild Coast",
//     longDescription:
//       "A full-island classic that links ancient cities, hill country, safari and the south coast into one comprehensive route.",
//     visualJourneys: [
//       { label: "Ancient Cities", image: "https://source.unsplash.com/featured/1200x800/?polonnaruwa&sig=6001" },
//       { label: "Hills", image: "https://source.unsplash.com/featured/1200x800/?nuwara-eliya&sig=6002" },
//       { label: "Safari", image: "https://source.unsplash.com/featured/1200x800/?yala,safari&sig=6003" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("north-to-south-expedition"),
//     recommendedFor: "Recommended for Explorers",
//     heroTagline: "North to South Expedition",
//     longDescription:
//       "From Jaffna and Mannar down through cultural icons, hills, safari, and the southern coast—this is for travelers who want deep variety.",
//     visualJourneys: [
//       { label: "Jaffna", image: "https://source.unsplash.com/featured/1200x800/?jaffna&sig=6101" },
//       { label: "Culture", image: "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=6102" },
//       { label: "Coast", image: "https://source.unsplash.com/featured/1200x800/?galle&sig=6103" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("luxury-grand-tour"),
//     recommendedFor: "Recommended for Ultra-Luxury",
//     heroTagline: "The Definitive Sri Lanka Experience",
//     longDescription:
//       "A high-end, full island experience with upgraded stays, VIP pacing, and premium comfort throughout.",
//     visualJourneys: [
//       { label: "Luxury Stays", image: "https://source.unsplash.com/featured/1200x800/?luxury,villa&sig=6201" },
//       { label: "Hills", image: "https://source.unsplash.com/featured/1200x800/?tea,estate&sig=6202" },
//       { label: "Beach", image: "https://source.unsplash.com/featured/1200x800/?sri-lanka,beach&sig=6203" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
//   {
//     ...baseOf("ultimate-ceylon-odyssey"),
//     recommendedFor: "Recommended for the Ultimate Full-Island Tour",
//     heroTagline: "Ultimate Ceylon Odyssey",
//     longDescription:
//       "The most complete itinerary across the island including North and East coast (Arugam Bay), cultural triangle, hills, safari and luxury beaches.",
//     visualJourneys: [
//       { label: "Arugam Bay", image: "https://source.unsplash.com/featured/1200x800/?arugam-bay&sig=6301" },
//       { label: "Safari", image: "https://source.unsplash.com/featured/1200x800/?sri-lanka,safari&sig=6302" },
//       { label: "Galle", image: "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=6303" },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
// ];




// import { PACKAGES, TourPackage } from "./packageDetails";

// export type PackageDay = { day: number; title: string; description?: string };

// export type PackageDetail = TourPackage & {
//   recommendedFor: string;
//   heroTagline: string;
//   longDescription: string;
//   itinerary?: PackageDay[];
//   visualJourneys: { label: string; image: string }[];

//   inclusions: string[];
//   exclusions: string[];
//   paymentPolicies: string[];
//   paymentMethods: string[];

//   // NEW - TripAdvisor style info
//   rating?: number;
//   reviewsCount?: number;
//   recommendedPercent?: number;
//   groupSizeText?: string;
//   ageRange?: string;
//   durationText?: string;
//   guideLanguages?: string[];
//   freeCancellation?: string;
//   pickupText?: string;
//   accessibility?: string[];
//   additionalInfo?: string[];
//   whyTravelersLoveThis?: string[];
// };

// const baseOf = (id: string) => PACKAGES.find((p) => p.id === id)!;

// const DEFAULT_INCLUSIONS = [
//   "Accommodation",
//   "Transportation in an air-conditioned vehicle with chauffeur guide",
//   "Government taxes",
// ];

// const DEFAULT_EXCLUSIONS = [
//   "Alcoholic beverages",
//   "Extra meals/snacks and beverages ordered outside the plan",
//   "Early check-ins and late check-outs",
//   "Tips & expenses of personal nature",
//   "Travel insurance, visa & air fare",
// ];

// const DEFAULT_PAYMENT_POLICIES = [
//   "50% payment on confirmation and the balance 02 weeks prior to arrival.",
//   "Or the full payment can be settled on confirmation.",
// ];

// const DEFAULT_PAYMENT_METHODS = [
//   "Online payment using a personal credit card (Amex/Visa/Master). Login details will be sent on confirmation.",
//   "Bank transfer.",
// ];

// export const PACKAGE_DETAILS: PackageDetail[] = [
//   {
//     ...baseOf("pearl-trail"),
//     recommendedFor: "Recommended for First-Time Visitors",
//     heroTagline: "Best of Sri Lanka in 5 Days",
//     longDescription:
//       "Enjoy the best of Sri Lanka on a compact five-day journey covering culture, heritage, scenic landscapes, and coastal relaxation. This route is ideal for travelers who want to experience Sri Lanka’s iconic highlights in a short time with the comfort of a private tour.",

//     rating: 5.0,
//     reviewsCount: 20,
//     recommendedPercent: 100,
//     groupSizeText: "Per group (up to 3)",
//     ageRange: "0 - 120",
//     durationText: "5 Days / 4 Nights",
//     guideLanguages: [
//       "English",
//       "German",
//       "Italian",
//       "French",
//       "Dutch",
//       "Spanish",
//     ],
//     freeCancellation:
//       "Free cancellation up to 24 hours before the experience starts.",
//     pickupText: "Pickup included",
//     whyTravelersLoveThis: [
//       "Private chauffeur-guided journey across Sri Lanka highlights",
//       "Great mix of culture, scenery, and coastal relaxation in a short time",
//       "Flexible itinerary with smooth planning and friendly service",
//       "Ideal first Sri Lanka experience without rushing",
//     ],
//     accessibility: [
//       "Private transportation throughout the tour",
//       "Comfortable for couples, families, and small private groups",
//       "Travel pace can be adjusted where possible",
//     ],
//     additionalInfo: [
//       "Custom accommodation options can be arranged",
//       "Suitable for first-time Sri Lanka travelers",
//       "A compact route covering key island highlights",
//     ],

//     visualJourneys: [
//       {
//         label: "Sigiriya",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5101",
//       },
//       {
//         label: "Kandy",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?kandy,temple&sig=5102",
//       },
//       {
//         label: "Bentota",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?bentota,beach&sig=5103",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("emerald-escape"),
//     recommendedFor: "Recommended for Culture & Scenic Lovers",
//     heroTagline: "Culture & Hill Country Journey",
//     longDescription:
//       "A balanced Sri Lanka experience combining heritage highlights with hill-country scenery and a charming coastal finish. Ideal for travelers who want culture, views, and a relaxed pace.",

//     rating: 5.0,
//     reviewsCount: 14,
//     recommendedPercent: 100,
//     groupSizeText: "Private tour",
//     ageRange: "0 - 120",
//     durationText: "6 Days / 5 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "Airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Balanced route for culture and scenery",
//       "Relaxed pace through Sri Lanka highlights",
//       "Private travel comfort with chauffeur-guide",
//     ],
//     accessibility: [
//       "Private vehicle throughout the journey",
//       "Comfortable route for couples and families",
//     ],
//     additionalInfo: [
//       "Hotels can be customized",
//       "Route can be adjusted based on interests",
//     ],

//     visualJourneys: [
//       {
//         label: "Sigiriya",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5201",
//       },
//       {
//         label: "Nuwara Eliya",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?nuwara-eliya,tea&sig=5202",
//       },
//       {
//         label: "Galle",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=5203",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("sapphire-serenity"),
//     recommendedFor: "Recommended for Hills + Beach Mix",
//     heroTagline: "Hills & Coast Serenity",
//     longDescription:
//       "A beautiful mix of culture, misty hills, and a coastal ending. Enjoy tea estates, scenic viewpoints and Ella’s charm before transitioning to the south coast.",

//     rating: 5.0,
//     reviewsCount: 11,
//     recommendedPercent: 100,
//     groupSizeText: "Private tour",
//     ageRange: "0 - 120",
//     durationText: "7 Days / 6 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "Airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Combines hill-country charm with a beach ending",
//       "Good pace for travelers who want variety",
//       "Private and comfortable touring experience",
//     ],
//     accessibility: [
//       "Private transport during the full route",
//       "Flexible stops possible during the journey",
//     ],
//     additionalInfo: [
//       "Great for couples and scenic-travel lovers",
//       "Accommodation style can be adjusted",
//     ],

//     visualJourneys: [
//       {
//         label: "Ella",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?ella,train&sig=5301",
//       },
//       {
//         label: "Hill Country",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?tea,plantation&sig=5302",
//       },
//       {
//         label: "Galle",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?galle,beach&sig=5303",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("golden-circuit"),
//     recommendedFor: "Recommended for Wildlife + Culture",
//     heroTagline: "Wildlife & Culture Circuit",
//     longDescription:
//       "Add safari energy to your classic route. Combine cultural icons with wildlife encounters and a light coastal finish—ideal for those who want variety.",

//     rating: 5.0,
//     reviewsCount: 16,
//     recommendedPercent: 100,
//     groupSizeText: "Private tour",
//     ageRange: "0 - 120",
//     durationText: "8 Days / 7 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "Airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Culture and safari in one package",
//       "Strong route variety across Sri Lanka",
//       "Comfortable private transport and planning",
//     ],
//     accessibility: [
//       "Private chauffeur-driven transport",
//       "Suitable for travelers who want varied experiences",
//     ],
//     additionalInfo: [
//       "Safari experiences may depend on weather and park conditions",
//       "Best for travelers wanting wildlife and heritage together",
//     ],

//     visualJourneys: [
//       {
//         label: "Safari",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?yala,safari&sig=5401",
//       },
//       {
//         label: "Kandy",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?kandy&sig=5402",
//       },
//       {
//         label: "South Coast",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?sri-lanka,coast&sig=5403",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("royal-odyssey"),
//     recommendedFor: "Recommended for Complete Sri Lanka Experience",
//     heroTagline: "Complete Island Highlights",
//     longDescription:
//       "A complete Sri Lanka taste with extra comfort in the hills and a proper beach stay at the end—ideal for travelers who want it all in one well-paced journey.",

//     rating: 5.0,
//     reviewsCount: 12,
//     recommendedPercent: 100,
//     groupSizeText: "Private tour",
//     ageRange: "0 - 120",
//     durationText: "9 Days / 8 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "Airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Wide island coverage with better pacing",
//       "Extra comfort in hills and beach sections",
//       "Ideal all-round Sri Lanka introduction",
//     ],
//     accessibility: [
//       "Private vehicle for the full tour",
//       "Suitable for couples, families, and small groups",
//     ],
//     additionalInfo: [
//       "Great option for travelers wanting more time in key regions",
//       "Custom hotel upgrades available",
//     ],

//     visualJourneys: [
//       {
//         label: "Sigiriya",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5501",
//       },
//       {
//         label: "Ella",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?ella&sig=5502",
//       },
//       {
//         label: "Bentota",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?bentota&sig=5503",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("platinum-paradise"),
//     recommendedFor: "Recommended for Luxury Travelers",
//     heroTagline: "Luxury Grand Tour",
//     longDescription:
//       "An ultra-luxury grand tour across Sri Lanka with premium stays and seamless private touring—from culture and hills to wildlife and beaches.",

//     rating: 5.0,
//     reviewsCount: 10,
//     recommendedPercent: 100,
//     groupSizeText: "Private luxury tour",
//     ageRange: "0 - 120",
//     durationText: "10 Days / 9 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "VIP airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Premium comfort and upgraded stay experience",
//       "Luxury pacing with island-wide highlights",
//       "Private travel with a seamless experience",
//     ],
//     accessibility: [
//       "Private premium transport",
//       "Best for luxury-focused private travelers",
//     ],
//     additionalInfo: [
//       "Luxury accommodation options can vary by availability",
//       "Custom private upgrades can be arranged",
//     ],

//     visualJourneys: [
//       {
//         label: "Luxury",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?luxury,resort&sig=5601",
//       },
//       {
//         label: "Safari",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?safari,sri-lanka&sig=5602",
//       },
//       {
//         label: "Coast",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?mirissa,beach&sig=5603",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("emerald-isle-explorer"),
//     recommendedFor: "Recommended for Heritage + Coast",
//     heroTagline: "Heritage & Coast Discovery",
//     longDescription:
//       "A heritage-rich route blending ancient cities with hill country charm and a warm south coast ending.",

//     rating: 5.0,
//     reviewsCount: 9,
//     recommendedPercent: 100,
//     groupSizeText: "Private tour",
//     ageRange: "0 - 120",
//     durationText: "10 Days / 9 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "Airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Strong heritage route with scenic variety",
//       "Ancient cities plus a southern coast finish",
//       "Great for culture-first travelers",
//     ],
//     accessibility: [
//       "Private transport for the full tour",
//       "Comfortable pacing across multiple regions",
//     ],
//     additionalInfo: [
//       "Suitable for heritage and scenic-travel lovers",
//       "Hotels can be customized to budget level",
//     ],

//     visualJourneys: [
//       {
//         label: "Anuradhapura",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?anuradhapura&sig=5701",
//       },
//       {
//         label: "Hill Country",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?nuwara-eliya&sig=5702",
//       },
//       {
//         label: "Mirissa",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?mirissa&sig=5703",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("jungle-coast-odyssey"),
//     recommendedFor: "Recommended for Nature, Adventure Seekers",
//     heroTagline: "Wildlife and Heritage Expedition",
//     longDescription:
//       "Experience Sri Lanka’s diverse beauty on an adventure blending wildlife, culture, and tropical beaches. Begin by the coast, explore pristine national parks, discover ancient cities, enjoy cool hill country views, and end with beach leisure—perfect for nature lovers who want variety.",

//     rating: 5.0,
//     reviewsCount: 13,
//     recommendedPercent: 100,
//     groupSizeText: "Private tour",
//     ageRange: "0 - 120",
//     durationText: "12 Days / 11 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "Airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Wildlife-heavy route with beaches and temples",
//       "Strong adventure feel with private touring comfort",
//       "Great choice for travelers who want variety",
//     ],
//     accessibility: [
//       "Private vehicle across the whole journey",
//       "Route combines nature, culture, and beach regions",
//     ],
//     additionalInfo: [
//       "Safari timing may vary by weather and park conditions",
//       "Best for adventure and nature-oriented travelers",
//     ],

//     visualJourneys: [
//       {
//         label: "Wilpattu",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?wilpattu&sig=5801",
//       },
//       {
//         label: "Yala",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?yala&sig=5802",
//       },
//       {
//         label: "Tangalle",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?tangalle&sig=5803",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("tea-trail-southern-loop"),
//     recommendedFor: "Recommended for Scenic + Long Stay",
//     heroTagline: "Tea Trail & Coastal Gems",
//     longDescription:
//       "A long scenic loop combining tea country, spice gardens, cultural highlights, and a southern coastal finish—ideal for travelers who want a fuller, slower journey.",

//     rating: 5.0,
//     reviewsCount: 8,
//     recommendedPercent: 100,
//     groupSizeText: "Private tour",
//     ageRange: "0 - 120",
//     durationText: "13 Days / 12 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "Airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Longer, slower route with scenic depth",
//       "Tea country and coast in one extended itinerary",
//       "Great for travelers who enjoy relaxed travel pacing",
//     ],
//     accessibility: [
//       "Private transport across all stops",
//       "Designed for travelers wanting a fuller route",
//     ],
//     additionalInfo: [
//       "Long itinerary with multiple climate zones",
//       "Custom stop adjustments may be possible",
//     ],

//     visualJourneys: [
//       {
//         label: "Tea Country",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?tea,sri-lanka&sig=5901",
//       },
//       {
//         label: "Ella",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?ella,bridge&sig=5902",
//       },
//       {
//         label: "Galle",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=5903",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("grand-circle-tour"),
//     recommendedFor: "Recommended for Full Island Culture",
//     heroTagline: "Ancient Cities to Wild Coast",
//     longDescription:
//       "A full-island classic that links ancient cities, hill country, safari and the south coast into one comprehensive route.",

//     rating: 5.0,
//     reviewsCount: 15,
//     recommendedPercent: 100,
//     groupSizeText: "Private tour",
//     ageRange: "0 - 120",
//     durationText: "15 Days / 14 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "Airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Covers major Sri Lanka regions in one route",
//       "Excellent for culture-first full-island trips",
//       "Balanced combination of history, scenery, and safari",
//     ],
//     accessibility: [
//       "Private transport throughout the island circuit",
//       "Suitable for travelers wanting full-island coverage",
//     ],
//     additionalInfo: [
//       "Longer route for travelers with more time",
//       "Accommodation upgrades can be arranged",
//     ],

//     visualJourneys: [
//       {
//         label: "Ancient Cities",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?polonnaruwa&sig=6001",
//       },
//       {
//         label: "Hills",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?nuwara-eliya&sig=6002",
//       },
//       {
//         label: "Safari",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?yala,safari&sig=6003",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("north-to-south-expedition"),
//     recommendedFor: "Recommended for Explorers",
//     heroTagline: "North to South Expedition",
//     longDescription:
//       "From Jaffna and Mannar down through cultural icons, hills, safari, and the southern coast—this is for travelers who want deep variety.",

//     rating: 5.0,
//     reviewsCount: 7,
//     recommendedPercent: 100,
//     groupSizeText: "Private expedition",
//     ageRange: "0 - 120",
//     durationText: "16 Days / 15 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "Airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Deep north-to-south island exploration",
//       "Excellent variety for experienced travelers",
//       "Blends heritage, scenery, and coastal regions",
//     ],
//     accessibility: [
//       "Private transport for the full expedition",
//       "Best suited for travelers who enjoy long routes",
//     ],
//     additionalInfo: [
//       "Long-distance touring across many regions",
//       "Best for explorers wanting full route diversity",
//     ],

//     visualJourneys: [
//       {
//         label: "Jaffna",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?jaffna&sig=6101",
//       },
//       {
//         label: "Culture",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=6102",
//       },
//       {
//         label: "Coast",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?galle&sig=6103",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("luxury-grand-tour"),
//     recommendedFor: "Recommended for Ultra-Luxury",
//     heroTagline: "The Definitive Sri Lanka Experience",
//     longDescription:
//       "A high-end, full island experience with upgraded stays, VIP pacing, and premium comfort throughout.",

//     rating: 5.0,
//     reviewsCount: 9,
//     recommendedPercent: 100,
//     groupSizeText: "Private luxury tour",
//     ageRange: "0 - 120",
//     durationText: "18 Days / 17 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "VIP airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "High-end full-island comfort",
//       "Luxury pacing with upgraded experiences",
//       "Best for premium private touring",
//     ],
//     accessibility: [
//       "Premium private transport",
//       "Luxury-focused travel support throughout the journey",
//     ],
//     additionalInfo: [
//       "Luxury stays depend on seasonal availability",
//       "Upgrade requests can be tailored to guest preference",
//     ],

//     visualJourneys: [
//       {
//         label: "Luxury Stays",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?luxury,villa&sig=6201",
//       },
//       {
//         label: "Hills",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?tea,estate&sig=6202",
//       },
//       {
//         label: "Beach",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?sri-lanka,beach&sig=6203",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },

//   {
//     ...baseOf("ultimate-ceylon-odyssey"),
//     recommendedFor: "Recommended for the Ultimate Full-Island Tour",
//     heroTagline: "Ultimate Ceylon Odyssey",
//     longDescription:
//       "The most complete itinerary across the island including North and East coast, cultural triangle, hill country, safari, and luxury beaches.",

//     rating: 5.0,
//     reviewsCount: 6,
//     recommendedPercent: 100,
//     groupSizeText: "Private luxury expedition",
//     ageRange: "0 - 120",
//     durationText: "20 Days / 19 Nights",
//     guideLanguages: ["English"],
//     freeCancellation:
//       "Free cancellation available based on booking conditions.",
//     pickupText: "VIP airport / hotel pickup available",
//     whyTravelersLoveThis: [
//       "Most complete Sri Lanka route in the collection",
//       "Covers north, east, hills, safari, and beaches",
//       "Perfect for travelers wanting the ultimate island journey",
//     ],
//     accessibility: [
//       "Private vehicle and premium touring support",
//       "Long-format itinerary with broad destination coverage",
//     ],
//     additionalInfo: [
//       "Best for long-stay travelers wanting full-island exploration",
//       "Luxury and premium customization available",
//     ],

//     visualJourneys: [
//       {
//         label: "Arugam Bay",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?arugam-bay&sig=6301",
//       },
//       {
//         label: "Safari",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?sri-lanka,safari&sig=6302",
//       },
//       {
//         label: "Galle",
//         image:
//           "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=6303",
//       },
//     ],
//     inclusions: DEFAULT_INCLUSIONS,
//     exclusions: DEFAULT_EXCLUSIONS,
//     paymentPolicies: DEFAULT_PAYMENT_POLICIES,
//     paymentMethods: DEFAULT_PAYMENT_METHODS,
//   },
// ];



import { PACKAGES, TourPackage } from "./packageDetails";

export type PackageDay = {
  day: number;
  title: string;
  description?: string;
};

export type PackageDetail = TourPackage & {
  recommendedFor: string;
  heroTagline: string;
  longDescription: string;
  itinerary?: PackageDay[];
  visualJourneys: { label: string; image: string }[];

  inclusions: string[];
  exclusions: string[];
  paymentPolicies: string[];
  paymentMethods: string[];

  rating?: number;
  reviewsCount?: number;
  recommendedPercent?: number;
  groupSizeText?: string;
  ageRange?: string;
  durationText?: string;
  guideLanguages?: string[];
  freeCancellation?: string;
  pickupText?: string;
  accessibility?: string[];
  additionalInfo?: string[];
  whyTravelersLoveThis?: string[];
};

const baseOf = (id: string) => {
  const pkg = PACKAGES.find((p) => p.id === id);
  if (!pkg) {
    throw new Error(`Package not found for id: ${id}`);
  }
  return pkg;
};

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
    heroTagline: "Best of Sri Lanka in 5 Days",
    longDescription:
      "Enjoy the best of Sri Lanka on a compact five-day journey covering culture, heritage, scenic landscapes, and coastal relaxation. This route is ideal for travelers who want to experience Sri Lanka’s iconic highlights in a short time with the comfort of a private tour.",
    itinerary: [
      {
        day: 1,
        title: "Arrival • Colombo to Sigiriya",
        description:
          "Arrival in Sri Lanka and begin the journey towards Sigiriya. Settle into the Cultural Triangle and relax after the transfer.",
      },
      {
        day: 2,
        title: "Sigiriya • Fortress & Surroundings",
        description:
          "Explore the iconic Sigiriya Rock Fortress and enjoy the cultural atmosphere of the region with optional village or nature-based experiences.",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        description:
          "Travel towards Kandy, stopping for scenic and cultural visits along the way. Experience the heritage charm of Sri Lanka’s hill capital.",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya to Bentota",
        description:
          "Journey through the hill country with tea-country scenery before continuing towards the coast for a relaxed beach stay in Bentota.",
      },
      {
        day: 5,
        title: "Bentota to Colombo • Departure",
        description:
          "Enjoy a final coastal morning before transfer towards Colombo or the airport for departure.",
      },
    ],
    rating: 5.0,
    reviewsCount: 20,
    recommendedPercent: 100,
    groupSizeText: "Per group (up to 3)",
    ageRange: "0 - 120",
    durationText: "5 Days / 4 Nights",
    guideLanguages: [
      "English",
      "German",
      "Italian",
      "French",
      "Dutch",
      "Spanish",
    ],
    freeCancellation:
      "Free cancellation up to 24 hours before the experience starts.",
    pickupText: "Pickup included",
    whyTravelersLoveThis: [
      "Private chauffeur-guided journey across Sri Lanka highlights",
      "Great mix of culture, scenery, and coastal relaxation in a short time",
      "Flexible itinerary with smooth planning and friendly service",
      "Ideal first Sri Lanka experience without rushing",
    ],
    accessibility: [
      "Private transportation throughout the tour",
      "Comfortable for couples, families, and small private groups",
      "Travel pace can be adjusted where possible",
    ],
    additionalInfo: [
      "Custom accommodation options can be arranged",
      "Suitable for first-time Sri Lanka travelers",
      "A compact route covering key island highlights",
    ],
    visualJourneys: [
      {
        label: "Sigiriya",
        image:
          "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5101",
      },
      {
        label: "Kandy",
        image:
          "https://source.unsplash.com/featured/1200x800/?kandy,temple&sig=5102",
      },
      {
        label: "Bentota",
        image:
          "https://source.unsplash.com/featured/1200x800/?bentota,beach&sig=5103",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Colombo to Sigiriya",
        description:
          "Begin the journey from arrival point and head towards Sigiriya for the opening part of your cultural route.",
      },
      {
        day: 2,
        title: "Sigiriya Exploration",
        description:
          "Explore the Cultural Triangle region and enjoy Sri Lanka’s iconic heritage atmosphere.",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        description:
          "Travel to Kandy with opportunities for scenic and cultural stops along the route.",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        description:
          "Continue into the cool hill country with tea estates, misty landscapes, and a slower scenic pace.",
      },
      {
        day: 5,
        title: "Nuwara Eliya to Ella to Galle",
        description:
          "Pass through beautiful southern hill-country scenery before continuing towards the coastal heritage city of Galle.",
      },
      {
        day: 6,
        title: "Galle • Departure",
        description:
          "Enjoy the final part of the coastal route before transfer to your next destination or airport.",
      },
    ],
    rating: 5.0,
    reviewsCount: 14,
    recommendedPercent: 100,
    groupSizeText: "Private tour",
    ageRange: "0 - 120",
    durationText: "6 Days / 5 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "Airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Balanced route for culture and scenery",
      "Relaxed pace through Sri Lanka highlights",
      "Private travel comfort with chauffeur-guide",
    ],
    accessibility: [
      "Private vehicle throughout the journey",
      "Comfortable route for couples and families",
    ],
    additionalInfo: [
      "Hotels can be customized",
      "Route can be adjusted based on interests",
    ],
    visualJourneys: [
      {
        label: "Sigiriya",
        image:
          "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5201",
      },
      {
        label: "Nuwara Eliya",
        image:
          "https://source.unsplash.com/featured/1200x800/?nuwara-eliya,tea&sig=5202",
      },
      {
        label: "Galle",
        image:
          "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=5203",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Colombo to Sigiriya",
        description:
          "Arrive in Sri Lanka and head into the Cultural Triangle to begin your island journey.",
      },
      {
        day: 2,
        title: "Sigiriya Discovery",
        description:
          "Enjoy the highlights of the Sigiriya region and the surrounding cultural atmosphere.",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        description:
          "Travel into Kandy and experience Sri Lanka’s heritage-rich hill capital.",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        description:
          "Journey through cool tea-country landscapes and scenic mountain roads.",
      },
      {
        day: 5,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue to Ella for panoramic views, hill-country charm, and iconic scenery.",
      },
      {
        day: 6,
        title: "Ella to Galle",
        description:
          "Leave the hills behind and continue to the southern coast for colonial charm and sea views.",
      },
      {
        day: 7,
        title: "Galle • Departure",
        description:
          "Wrap up the journey with a relaxed final day before transfer onward.",
      },
    ],
    rating: 5.0,
    reviewsCount: 11,
    recommendedPercent: 100,
    groupSizeText: "Private tour",
    ageRange: "0 - 120",
    durationText: "7 Days / 6 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "Airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Combines hill-country charm with a beach ending",
      "Good pace for travelers who want variety",
      "Private and comfortable touring experience",
    ],
    accessibility: [
      "Private transport during the full route",
      "Flexible stops possible during the journey",
    ],
    additionalInfo: [
      "Great for couples and scenic-travel lovers",
      "Accommodation style can be adjusted",
    ],
    visualJourneys: [
      {
        label: "Ella",
        image:
          "https://source.unsplash.com/featured/1200x800/?ella,train&sig=5301",
      },
      {
        label: "Hill Country",
        image:
          "https://source.unsplash.com/featured/1200x800/?tea,plantation&sig=5302",
      },
      {
        label: "Galle",
        image:
          "https://source.unsplash.com/featured/1200x800/?galle,beach&sig=5303",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Colombo to Sigiriya",
        description:
          "Arrive and begin the route towards Sri Lanka’s cultural heartland.",
      },
      {
        day: 2,
        title: "Sigiriya Highlights",
        description:
          "Explore the iconic highlights of the Cultural Triangle and surrounding attractions.",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        description:
          "Continue towards Kandy with scenic and cultural stops along the route.",
      },
      {
        day: 4,
        title: "Kandy Exploration",
        description:
          "Spend time experiencing the heritage character and hill-country energy of Kandy.",
      },
      {
        day: 5,
        title: "Kandy to Nuwara Eliya",
        description:
          "Travel through lush tea-country landscapes into the cool hill region.",
      },
      {
        day: 6,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue south through scenic mountain views and enjoy Ella’s relaxed charm.",
      },
      {
        day: 7,
        title: "Ella to Galle",
        description:
          "Descend from the hills towards the southern coast for a lighter coastal ending.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Transfer onward after completing a route that blends culture, scenery, and wildlife energy.",
      },
    ],
    rating: 5.0,
    reviewsCount: 16,
    recommendedPercent: 100,
    groupSizeText: "Private tour",
    ageRange: "0 - 120",
    durationText: "8 Days / 7 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "Airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Culture and safari in one package",
      "Strong route variety across Sri Lanka",
      "Comfortable private transport and planning",
    ],
    accessibility: [
      "Private chauffeur-driven transport",
      "Suitable for travelers who want varied experiences",
    ],
    additionalInfo: [
      "Safari experiences may depend on weather and park conditions",
      "Best for travelers wanting wildlife and heritage together",
    ],
    visualJourneys: [
      {
        label: "Safari",
        image:
          "https://source.unsplash.com/featured/1200x800/?yala,safari&sig=5401",
      },
      {
        label: "Kandy",
        image:
          "https://source.unsplash.com/featured/1200x800/?kandy&sig=5402",
      },
      {
        label: "South Coast",
        image:
          "https://source.unsplash.com/featured/1200x800/?sri-lanka,coast&sig=5403",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Transfer to Sigiriya",
        description:
          "Begin the journey with a smooth transfer into Sri Lanka’s cultural region.",
      },
      {
        day: 2,
        title: "Sigiriya Exploration",
        description:
          "Experience the major highlights of Sigiriya and its surroundings.",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        description:
          "Continue inland towards Kandy through a scenic cultural route.",
      },
      {
        day: 4,
        title: "Kandy Discovery",
        description:
          "Enjoy a fuller day in Kandy with heritage, views, and relaxed pacing.",
      },
      {
        day: 5,
        title: "Kandy to Nuwara Eliya",
        description:
          "Move into the hill country for cool air, tea landscapes, and scenic roads.",
      },
      {
        day: 6,
        title: "Nuwara Eliya Leisure",
        description:
          "Enjoy a more relaxed hill-country day with comfortable pacing.",
      },
      {
        day: 7,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue to Ella for highland scenery and one of Sri Lanka’s most loved mountain towns.",
      },
      {
        day: 8,
        title: "Ella to Galle",
        description:
          "Travel down towards the southern coast and enjoy the colonial charm of Galle.",
      },
      {
        day: 9,
        title: "Galle / Bentota • Departure",
        description:
          "Conclude the journey with a final relaxed coastal transfer onward.",
      },
    ],
    rating: 5.0,
    reviewsCount: 12,
    recommendedPercent: 100,
    groupSizeText: "Private tour",
    ageRange: "0 - 120",
    durationText: "9 Days / 8 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "Airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Wide island coverage with better pacing",
      "Extra comfort in hills and beach sections",
      "Ideal all-round Sri Lanka introduction",
    ],
    accessibility: [
      "Private vehicle for the full tour",
      "Suitable for couples, families, and small groups",
    ],
    additionalInfo: [
      "Great option for travelers wanting more time in key regions",
      "Custom hotel upgrades available",
    ],
    visualJourneys: [
      {
        label: "Sigiriya",
        image:
          "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=5501",
      },
      {
        label: "Ella",
        image:
          "https://source.unsplash.com/featured/1200x800/?ella&sig=5502",
      },
      {
        label: "Bentota",
        image:
          "https://source.unsplash.com/featured/1200x800/?bentota&sig=5503",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Negombo",
        description:
          "Begin with a relaxed arrival stay and a smooth luxury start to the journey.",
      },
      {
        day: 2,
        title: "Negombo to Anuradhapura",
        description:
          "Travel north into Sri Lanka’s heritage heartlands with a comfortable private transfer.",
      },
      {
        day: 3,
        title: "Anuradhapura to Sigiriya",
        description:
          "Continue towards Sigiriya and explore the rich cultural atmosphere of the region.",
      },
      {
        day: 4,
        title: "Sigiriya to Kandy",
        description:
          "Transition into the central hills with cultural and scenic variety along the route.",
      },
      {
        day: 5,
        title: "Kandy Leisure",
        description:
          "Enjoy a more premium-paced day in Kandy with time for curated experiences.",
      },
      {
        day: 6,
        title: "Kandy to Nuwara Eliya",
        description:
          "Move into the tea country for cool mountain landscapes and refined stays.",
      },
      {
        day: 7,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue through the scenic highlands to Ella’s iconic hill-country setting.",
      },
      {
        day: 8,
        title: "Ella to Yala",
        description:
          "Leave the hills for Sri Lanka’s wilder landscapes and safari region.",
      },
      {
        day: 9,
        title: "Yala to Mirissa / Galle",
        description:
          "Continue to the southern coast for a premium beach and heritage finale.",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "Complete the luxury island circuit with onward transfer.",
      },
    ],
    rating: 5.0,
    reviewsCount: 10,
    recommendedPercent: 100,
    groupSizeText: "Private luxury tour",
    ageRange: "0 - 120",
    durationText: "10 Days / 9 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "VIP airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Premium comfort and upgraded stay experience",
      "Luxury pacing with island-wide highlights",
      "Private travel with a seamless experience",
    ],
    accessibility: [
      "Private premium transport",
      "Best for luxury-focused private travelers",
    ],
    additionalInfo: [
      "Luxury accommodation options can vary by availability",
      "Custom private upgrades can be arranged",
    ],
    visualJourneys: [
      {
        label: "Luxury",
        image:
          "https://source.unsplash.com/featured/1200x800/?luxury,resort&sig=5601",
      },
      {
        label: "Safari",
        image:
          "https://source.unsplash.com/featured/1200x800/?safari,sri-lanka&sig=5602",
      },
      {
        label: "Coast",
        image:
          "https://source.unsplash.com/featured/1200x800/?mirissa,beach&sig=5603",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Transfer to Anuradhapura",
        description:
          "Begin the journey by heading north into Sri Lanka’s ancient heritage region.",
      },
      {
        day: 2,
        title: "Anuradhapura Discovery",
        description:
          "Spend time in one of Sri Lanka’s most historically important areas.",
      },
      {
        day: 3,
        title: "Anuradhapura to Sigiriya",
        description:
          "Continue through the cultural region towards Sigiriya.",
      },
      {
        day: 4,
        title: "Sigiriya Exploration",
        description:
          "Enjoy the highlights of the Cultural Triangle and scenic surroundings.",
      },
      {
        day: 5,
        title: "Sigiriya to Kandy",
        description:
          "Travel south into the central highlands towards Kandy.",
      },
      {
        day: 6,
        title: "Kandy to Nuwara Eliya",
        description:
          "Journey into the tea country for cooler weather and scenic hill views.",
      },
      {
        day: 7,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue to Ella through Sri Lanka’s mountain landscapes.",
      },
      {
        day: 8,
        title: "Ella to Yala",
        description:
          "Transition from the hills into Sri Lanka’s wildlife region.",
      },
      {
        day: 9,
        title: "Yala to Mirissa",
        description:
          "Head towards the southern coast for a warmer seaside finale.",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "Enjoy the last stretch of the journey before onward transfer.",
      },
    ],
    rating: 5.0,
    reviewsCount: 9,
    recommendedPercent: 100,
    groupSizeText: "Private tour",
    ageRange: "0 - 120",
    durationText: "10 Days / 9 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "Airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Strong heritage route with scenic variety",
      "Ancient cities plus a southern coast finish",
      "Great for culture-first travelers",
    ],
    accessibility: [
      "Private transport for the full tour",
      "Comfortable pacing across multiple regions",
    ],
    additionalInfo: [
      "Suitable for heritage and scenic-travel lovers",
      "Hotels can be customized to budget level",
    ],
    visualJourneys: [
      {
        label: "Anuradhapura",
        image:
          "https://source.unsplash.com/featured/1200x800/?anuradhapura&sig=5701",
      },
      {
        label: "Hill Country",
        image:
          "https://source.unsplash.com/featured/1200x800/?nuwara-eliya&sig=5702",
      },
      {
        label: "Mirissa",
        image:
          "https://source.unsplash.com/featured/1200x800/?mirissa&sig=5703",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Colombo to Wilpattu",
        description:
          "Start the adventure by moving towards Sri Lanka’s wildlife-rich northwest region.",
      },
      {
        day: 2,
        title: "Wilpattu Safari Region",
        description:
          "Enjoy the natural atmosphere and wildlife-focused experiences of the region.",
      },
      {
        day: 3,
        title: "Wilpattu to Anuradhapura",
        description:
          "Blend nature with history as the route continues into Sri Lanka’s ancient zone.",
      },
      {
        day: 4,
        title: "Anuradhapura Exploration",
        description:
          "Spend time exploring the heritage depth of this historic region.",
      },
      {
        day: 5,
        title: "Anuradhapura to Sigiriya",
        description:
          "Continue into the Cultural Triangle and settle into the Sigiriya area.",
      },
      {
        day: 6,
        title: "Sigiriya Highlights",
        description:
          "Discover one of Sri Lanka’s most iconic cultural landscapes.",
      },
      {
        day: 7,
        title: "Sigiriya to Kandy",
        description:
          "Travel south into Kandy through a scenic and culturally rich route.",
      },
      {
        day: 8,
        title: "Kandy to Ella",
        description:
          "Move into the highlands and continue towards Ella’s mountain scenery.",
      },
      {
        day: 9,
        title: "Ella to Yala",
        description:
          "Transition from the hills towards the island’s famous safari zone.",
      },
      {
        day: 10,
        title: "Yala to Tangalle",
        description:
          "Move towards the southern coast for a softer tropical beach atmosphere.",
      },
      {
        day: 11,
        title: "Tangalle Leisure",
        description:
          "Enjoy a more relaxed beach and coast-focused day.",
      },
      {
        day: 12,
        title: "Tangalle / Galle • Departure",
        description:
          "Complete the wildlife-to-coast route with onward transfer.",
      },
    ],
    rating: 5.0,
    reviewsCount: 13,
    recommendedPercent: 100,
    groupSizeText: "Private tour",
    ageRange: "0 - 120",
    durationText: "12 Days / 11 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "Airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Wildlife-heavy route with beaches and temples",
      "Strong adventure feel with private touring comfort",
      "Great choice for travelers who want variety",
    ],
    accessibility: [
      "Private vehicle across the whole journey",
      "Route combines nature, culture, and beach regions",
    ],
    additionalInfo: [
      "Safari timing may vary by weather and park conditions",
      "Best for adventure and nature-oriented travelers",
    ],
    visualJourneys: [
      {
        label: "Wilpattu",
        image:
          "https://source.unsplash.com/featured/1200x800/?wilpattu&sig=5801",
      },
      {
        label: "Yala",
        image:
          "https://source.unsplash.com/featured/1200x800/?yala&sig=5802",
      },
      {
        label: "Tangalle",
        image:
          "https://source.unsplash.com/featured/1200x800/?tangalle&sig=5803",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Colombo to Anuradhapura",
        description:
          "Begin the extended journey by heading into Sri Lanka’s ancient north-central region.",
      },
      {
        day: 2,
        title: "Anuradhapura Discovery",
        description:
          "Spend time exploring one of Sri Lanka’s most important historical regions.",
      },
      {
        day: 3,
        title: "Anuradhapura to Jaffna",
        description:
          "Continue further north into a distinctly different cultural landscape.",
      },
      {
        day: 4,
        title: "Jaffna Exploration",
        description:
          "Enjoy a fuller day discovering the character and atmosphere of Jaffna.",
      },
      {
        day: 5,
        title: "Jaffna to Trincomalee",
        description:
          "Travel across the island towards the eastern coast.",
      },
      {
        day: 6,
        title: "Trincomalee to Sigiriya",
        description:
          "Leave the east and head inland towards the Cultural Triangle.",
      },
      {
        day: 7,
        title: "Sigiriya Highlights",
        description:
          "Explore Sri Lanka’s iconic cultural heartland and surrounding sites.",
      },
      {
        day: 8,
        title: "Sigiriya to Kandy",
        description:
          "Continue into the central hills towards Kandy.",
      },
      {
        day: 9,
        title: "Kandy Exploration",
        description:
          "Enjoy a slower day through Kandy’s heritage-rich setting.",
      },
      {
        day: 10,
        title: "Kandy to Nuwara Eliya",
        description:
          "Journey into tea-country scenery and cooler mountain landscapes.",
      },
      {
        day: 11,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue south through scenic highland views towards Ella.",
      },
      {
        day: 12,
        title: "Ella to Mirissa",
        description:
          "Descend from the hills and make your way to the southern beach zone.",
      },
      {
        day: 13,
        title: "Mirissa / Galle • Departure",
        description:
          "Wrap up the long scenic loop with onward transfer.",
      },
    ],
    rating: 5.0,
    reviewsCount: 8,
    recommendedPercent: 100,
    groupSizeText: "Private tour",
    ageRange: "0 - 120",
    durationText: "13 Days / 12 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "Airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Longer, slower route with scenic depth",
      "Tea country and coast in one extended itinerary",
      "Great for travelers who enjoy relaxed travel pacing",
    ],
    accessibility: [
      "Private transport across all stops",
      "Designed for travelers wanting a fuller route",
    ],
    additionalInfo: [
      "Long itinerary with multiple climate zones",
      "Custom stop adjustments may be possible",
    ],
    visualJourneys: [
      {
        label: "Tea Country",
        image:
          "https://source.unsplash.com/featured/1200x800/?tea,sri-lanka&sig=5901",
      },
      {
        label: "Ella",
        image:
          "https://source.unsplash.com/featured/1200x800/?ella,bridge&sig=5902",
      },
      {
        label: "Galle",
        image:
          "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=5903",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Negombo",
        description:
          "Begin with a comfortable arrival stay before starting the island route.",
      },
      {
        day: 2,
        title: "Negombo to Anuradhapura",
        description:
          "Head inland into Sri Lanka’s ancient heartland.",
      },
      {
        day: 3,
        title: "Anuradhapura Exploration",
        description:
          "Spend time discovering the depth of this historic region.",
      },
      {
        day: 4,
        title: "Anuradhapura to Trincomalee",
        description:
          "Continue east towards coastal history and new scenery.",
      },
      {
        day: 5,
        title: "Trincomalee Leisure",
        description:
          "Enjoy a fuller day in the eastern coastal zone.",
      },
      {
        day: 6,
        title: "Trincomalee to Sigiriya",
        description:
          "Move back inland towards Sri Lanka’s iconic cultural center.",
      },
      {
        day: 7,
        title: "Sigiriya Exploration",
        description:
          "Discover one of the most recognized highlights of the island.",
      },
      {
        day: 8,
        title: "Sigiriya to Kandy",
        description:
          "Continue south into Kandy’s scenic highland setting.",
      },
      {
        day: 9,
        title: "Kandy Exploration",
        description:
          "Enjoy a more relaxed day in the central cultural capital.",
      },
      {
        day: 10,
        title: "Kandy to Nuwara Eliya",
        description:
          "Travel into tea-country landscapes and cooler hill-country air.",
      },
      {
        day: 11,
        title: "Nuwara Eliya Leisure",
        description:
          "Spend time enjoying the slower pace of the highlands.",
      },
      {
        day: 12,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue south through Sri Lanka’s mountain scenery.",
      },
      {
        day: 13,
        title: "Ella to Yala",
        description:
          "Transition from the hills towards the island’s safari region.",
      },
      {
        day: 14,
        title: "Yala to Galle",
        description:
          "Head towards the southern coast for the final cultural-coastal stretch.",
      },
      {
        day: 15,
        title: "Departure",
        description:
          "Conclude the full-island route with onward transfer.",
      },
    ],
    rating: 5.0,
    reviewsCount: 15,
    recommendedPercent: 100,
    groupSizeText: "Private tour",
    ageRange: "0 - 120",
    durationText: "15 Days / 14 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "Airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Covers major Sri Lanka regions in one route",
      "Excellent for culture-first full-island trips",
      "Balanced combination of history, scenery, and safari",
    ],
    accessibility: [
      "Private transport throughout the island circuit",
      "Suitable for travelers wanting full-island coverage",
    ],
    additionalInfo: [
      "Longer route for travelers with more time",
      "Accommodation upgrades can be arranged",
    ],
    visualJourneys: [
      {
        label: "Ancient Cities",
        image:
          "https://source.unsplash.com/featured/1200x800/?polonnaruwa&sig=6001",
      },
      {
        label: "Hills",
        image:
          "https://source.unsplash.com/featured/1200x800/?nuwara-eliya&sig=6002",
      },
      {
        label: "Safari",
        image:
          "https://source.unsplash.com/featured/1200x800/?yala,safari&sig=6003",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Transfer to Anuradhapura",
        description:
          "Start the longer expedition by moving into Sri Lanka’s historic north-central region.",
      },
      {
        day: 2,
        title: "Anuradhapura Exploration",
        description:
          "Spend time in one of the island’s most important heritage zones.",
      },
      {
        day: 3,
        title: "Anuradhapura to Jaffna",
        description:
          "Travel further north into the peninsula.",
      },
      {
        day: 4,
        title: "Jaffna Discovery",
        description:
          "Enjoy a fuller day exploring the distinct culture and atmosphere of Jaffna.",
      },
      {
        day: 5,
        title: "Jaffna to Mannar",
        description:
          "Continue west across the northern region towards Mannar.",
      },
      {
        day: 6,
        title: "Mannar to Sigiriya",
        description:
          "Move back towards the Cultural Triangle for the next stage of the expedition.",
      },
      {
        day: 7,
        title: "Sigiriya Highlights",
        description:
          "Explore the iconic Sigiriya area and nearby cultural attractions.",
      },
      {
        day: 8,
        title: "Sigiriya to Kandy",
        description:
          "Travel south towards Kandy through a scenic inland route.",
      },
      {
        day: 9,
        title: "Kandy Exploration",
        description:
          "Enjoy Kandy’s cultural and hill-country character.",
      },
      {
        day: 10,
        title: "Kandy to Nuwara Eliya",
        description:
          "Enter the tea country and enjoy Sri Lanka’s mountain landscapes.",
      },
      {
        day: 11,
        title: "Nuwara Eliya Leisure",
        description:
          "Spend a slower-paced day in the cool hill-country environment.",
      },
      {
        day: 12,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue through scenic highlands towards Ella.",
      },
      {
        day: 13,
        title: "Ella to Yala",
        description:
          "Leave the mountains and move into the safari zone.",
      },
      {
        day: 14,
        title: "Yala to Mirissa",
        description:
          "Travel towards the southern beach region for the coastal phase of the journey.",
      },
      {
        day: 15,
        title: "Mirissa to Galle",
        description:
          "Continue along the south coast towards Galle.",
      },
      {
        day: 16,
        title: "Departure",
        description:
          "Complete the north-to-south expedition with onward transfer.",
      },
    ],
    rating: 5.0,
    reviewsCount: 7,
    recommendedPercent: 100,
    groupSizeText: "Private expedition",
    ageRange: "0 - 120",
    durationText: "16 Days / 15 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "Airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Deep north-to-south island exploration",
      "Excellent variety for experienced travelers",
      "Blends heritage, scenery, and coastal regions",
    ],
    accessibility: [
      "Private transport for the full expedition",
      "Best suited for travelers who enjoy long routes",
    ],
    additionalInfo: [
      "Long-distance touring across many regions",
      "Best for explorers wanting full route diversity",
    ],
    visualJourneys: [
      {
        label: "Jaffna",
        image:
          "https://source.unsplash.com/featured/1200x800/?jaffna&sig=6101",
      },
      {
        label: "Culture",
        image:
          "https://source.unsplash.com/featured/1200x800/?sigiriya&sig=6102",
      },
      {
        label: "Coast",
        image:
          "https://source.unsplash.com/featured/1200x800/?galle&sig=6103",
      },
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
    itinerary: [
      {
        day: 1,
        title: "Arrival • Colombo",
        description:
          "Begin the journey with a refined city arrival and luxury transfer.",
      },
      {
        day: 2,
        title: "Colombo to Negombo",
        description:
          "Enjoy a relaxed coastal transition before the larger island circuit begins.",
      },
      {
        day: 3,
        title: "Negombo to Anuradhapura",
        description:
          "Move north into the ancient heartlands in premium comfort.",
      },
      {
        day: 4,
        title: "Anuradhapura to Jaffna",
        description:
          "Continue further north towards Jaffna’s distinct cultural region.",
      },
      {
        day: 5,
        title: "Jaffna Exploration",
        description:
          "Discover the unique atmosphere of the northern peninsula.",
      },
      {
        day: 6,
        title: "Jaffna to Trincomalee",
        description:
          "Cross the island towards the eastern coast for a change of scenery.",
      },
      {
        day: 7,
        title: "Trincomalee Leisure",
        description:
          "Enjoy a more relaxed premium-paced day in the east.",
      },
      {
        day: 8,
        title: "Trincomalee to Sigiriya",
        description:
          "Continue inland towards the Cultural Triangle.",
      },
      {
        day: 9,
        title: "Sigiriya Exploration",
        description:
          "Experience the iconic heritage landscapes of central Sri Lanka.",
      },
      {
        day: 10,
        title: "Sigiriya to Kandy",
        description:
          "Travel into the central highlands with comfort and flexibility.",
      },
      {
        day: 11,
        title: "Kandy Exploration",
        description:
          "Spend time in the heritage-rich hill capital.",
      },
      {
        day: 12,
        title: "Kandy to Nuwara Eliya",
        description:
          "Enter Sri Lanka’s tea country with cooler weather and scenic beauty.",
      },
      {
        day: 13,
        title: "Nuwara Eliya Leisure",
        description:
          "Enjoy a premium hill-country day with a slower luxury pace.",
      },
      {
        day: 14,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue through the highlands to Ella’s famous views.",
      },
      {
        day: 15,
        title: "Ella to Yala",
        description:
          "Transition from mountain landscapes into the safari zone.",
      },
      {
        day: 16,
        title: "Yala to Galle",
        description:
          "Move towards the southern coast for the final premium stretch.",
      },
      {
        day: 17,
        title: "Galle Leisure",
        description:
          "Enjoy a refined coastal finale before departure.",
      },
      {
        day: 18,
        title: "Departure",
        description:
          "Conclude the definitive luxury island route with onward transfer.",
      },
    ],
    rating: 5.0,
    reviewsCount: 9,
    recommendedPercent: 100,
    groupSizeText: "Private luxury tour",
    ageRange: "0 - 120",
    durationText: "18 Days / 17 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "VIP airport / hotel pickup available",
    whyTravelersLoveThis: [
      "High-end full-island comfort",
      "Luxury pacing with upgraded experiences",
      "Best for premium private touring",
    ],
    accessibility: [
      "Premium private transport",
      "Luxury-focused travel support throughout the journey",
    ],
    additionalInfo: [
      "Luxury stays depend on seasonal availability",
      "Upgrade requests can be tailored to guest preference",
    ],
    visualJourneys: [
      {
        label: "Luxury Stays",
        image:
          "https://source.unsplash.com/featured/1200x800/?luxury,villa&sig=6201",
      },
      {
        label: "Hills",
        image:
          "https://source.unsplash.com/featured/1200x800/?tea,estate&sig=6202",
      },
      {
        label: "Beach",
        image:
          "https://source.unsplash.com/featured/1200x800/?sri-lanka,beach&sig=6203",
      },
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
      "The most complete itinerary across the island including North and East coast, cultural triangle, hill country, safari, and luxury beaches.",
    itinerary: [
      {
        day: 1,
        title: "Arrival • Colombo",
        description:
          "Begin the longest island journey with a smooth arrival in Colombo.",
      },
      {
        day: 2,
        title: "Colombo to Negombo",
        description:
          "Ease into the route with a short coastal transition.",
      },
      {
        day: 3,
        title: "Negombo to Jaffna",
        description:
          "Travel north and begin the deep island exploration.",
      },
      {
        day: 4,
        title: "Jaffna Exploration",
        description:
          "Discover the distinct identity and atmosphere of the peninsula.",
      },
      {
        day: 5,
        title: "Jaffna to Anuradhapura",
        description:
          "Head south again into Sri Lanka’s ancient historic zone.",
      },
      {
        day: 6,
        title: "Anuradhapura Exploration",
        description:
          "Spend time in one of the island’s most important cultural landscapes.",
      },
      {
        day: 7,
        title: "Anuradhapura to Trincomalee",
        description:
          "Continue east towards Sri Lanka’s coastal heritage region.",
      },
      {
        day: 8,
        title: "Trincomalee Leisure",
        description:
          "Enjoy a fuller day on the eastern coast.",
      },
      {
        day: 9,
        title: "Trincomalee to Arugam Bay",
        description:
          "Travel south along the east for a different coastal mood and scenery.",
      },
      {
        day: 10,
        title: "Arugam Bay Leisure",
        description:
          "Enjoy the east coast’s relaxed character and open coastal atmosphere.",
      },
      {
        day: 11,
        title: "Arugam Bay to Sigiriya",
        description:
          "Leave the east coast and return inland towards the Cultural Triangle.",
      },
      {
        day: 12,
        title: "Sigiriya Exploration",
        description:
          "Discover the iconic heritage and landscape of the Sigiriya region.",
      },
      {
        day: 13,
        title: "Sigiriya to Kandy",
        description:
          "Continue into the central hills towards Kandy.",
      },
      {
        day: 14,
        title: "Kandy to Nuwara Eliya",
        description:
          "Travel into the tea country and cooler hill landscapes.",
      },
      {
        day: 15,
        title: "Nuwara Eliya Leisure",
        description:
          "Enjoy a slower day in the highlands with space to relax.",
      },
      {
        day: 16,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue south through mountain scenery to Ella.",
      },
      {
        day: 17,
        title: "Ella to Yala",
        description:
          "Move from hill-country views into Sri Lanka’s safari zone.",
      },
      {
        day: 18,
        title: "Yala to Mirissa",
        description:
          "Continue to the south coast and transition into a softer beach setting.",
      },
      {
        day: 19,
        title: "Mirissa to Galle",
        description:
          "Enjoy the final premium coastal stretch towards Galle.",
      },
      {
        day: 20,
        title: "Departure",
        description:
          "Complete the ultimate full-island route with onward transfer.",
      },
    ],
    rating: 5.0,
    reviewsCount: 6,
    recommendedPercent: 100,
    groupSizeText: "Private luxury expedition",
    ageRange: "0 - 120",
    durationText: "20 Days / 19 Nights",
    guideLanguages: ["English"],
    freeCancellation:
      "Free cancellation available based on booking conditions.",
    pickupText: "VIP airport / hotel pickup available",
    whyTravelersLoveThis: [
      "Most complete Sri Lanka route in the collection",
      "Covers north, east, hills, safari, and beaches",
      "Perfect for travelers wanting the ultimate island journey",
    ],
    accessibility: [
      "Private vehicle and premium touring support",
      "Long-format itinerary with broad destination coverage",
    ],
    additionalInfo: [
      "Best for long-stay travelers wanting full-island exploration",
      "Luxury and premium customization available",
    ],
    visualJourneys: [
      {
        label: "Arugam Bay",
        image:
          "https://source.unsplash.com/featured/1200x800/?arugam-bay&sig=6301",
      },
      {
        label: "Safari",
        image:
          "https://source.unsplash.com/featured/1200x800/?sri-lanka,safari&sig=6302",
      },
      {
        label: "Galle",
        image:
          "https://source.unsplash.com/featured/1200x800/?galle,fort&sig=6303",
      },
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS,
    paymentPolicies: DEFAULT_PAYMENT_POLICIES,
    paymentMethods: DEFAULT_PAYMENT_METHODS,
  },
];