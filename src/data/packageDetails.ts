// src/data/packages.ts

export type CategoryId =
  | "classic"
  | "culture"
  | "hill-country"
  | "wildlife"
  | "beach"
  | "luxury";

export type TourPackage = {
  id: string;
  no: number;
  name: string;
  subtitle: string;

  // ✅ NEW
  description: string;
  image: string;

  duration: string;
  basePrice: number;
  locations: string;
  experience: string;
  days: number;
  nights: number;
  accommodation: string;
  nightsPerLocation: string;

  // ✅ mapping to 6 categories
  categoryId: CategoryId;
};

export const PACKAGES: TourPackage[] = [
  {
    id: "pearl-trail",
    no: 1,
    name: "PEARL TRAIL",
    subtitle: "Classic Sri Lanka Highlights",
    description:
      "Perfect first-timer route: cultural triangle icons, Kandy, cool hill-country, then a relaxed beach finish.",
    image: "data:image/jpeg;base64,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",
    duration: "5 Days / 4 Nights",
    basePrice: 550,
    locations: "Colombo · Sigiriya · Kandy · Nuwara Eliya · Bentota",
    experience: "Cultural & Heritage",
    days: 5,
    nights: 4,
    accommodation: "★★★★ Mid-Range",
    nightsPerLocation:
      "Sigiriya: 1N | Kandy: 1N | Nuwara Eliya: 1N | Bentota: 1N",
    categoryId: "classic",
  },

  {
    id: "emerald-escape",
    no: 2,
    name: "EMERALD ESCAPE",
    subtitle: "Culture & Hill Country",
    description:
      "A balanced journey mixing heritage, hill-country scenery, and a charming southern coast finale in Galle.",
    image: "https://source.unsplash.com/featured/1600x900/?kandy,temple,sri-lanka&sig=902",
    duration: "6 Days / 5 Nights",
    basePrice: 650,
    locations: "Colombo · Sigiriya · Kandy · Nuwara Eliya · Ella · Galle",
    experience: "Cultural & Hill Country",
    days: 6,
    nights: 5,
    accommodation: "★★★★ Mid-Range",
    nightsPerLocation:
      "Sigiriya: 1N | Kandy: 1N | Nuwara Eliya: 1N | Ella: 1N | Galle: 1N",
    categoryId: "classic",
  },

  {
    id: "sapphire-serenity",
    no: 3,
    name: "SAPPHIRE SERENITY",
    subtitle: "Culture, Hills & Beach Bliss",
    description:
      "A favourite for variety: cultural triangle, Ella views, and a coastal end — great pace without rushing.",
    image: "https://source.unsplash.com/featured/1600x900/?ella,train,sri-lanka&sig=903",
    duration: "7 Days / 6 Nights",
    basePrice: 700,
    locations: "Colombo · Sigiriya · Kandy · Nuwara Eliya · Ella · Galle",
    experience: "Cultural, Hill Country & Beach",
    days: 7,
    nights: 6,
    accommodation: "★★★★ Superior",
    nightsPerLocation:
      "Sigiriya: 2N | Kandy: 1N | Nuwara Eliya: 1N | Ella: 1N | Galle: 1N",
    categoryId: "hill-country",
  },

  {
    id: "golden-circuit",
    no: 4,
    name: "GOLDEN CIRCUIT",
    subtitle: "Wildlife, Culture & Beaches",
    description:
      "Add safari magic to the classics — a strong mix of wildlife moments, cultural sites, and beach time.",
    image: "https://source.unsplash.com/featured/1600x900/?yala,safari,sri-lanka&sig=904",
    duration: "8 Days / 7 Nights",
    basePrice: 800,
    locations: "Colombo · Sigiriya · Kandy · Nuwara Eliya · Ella · Galle",
    experience: "Cultural, Wildlife & Beach",
    days: 8,
    nights: 7,
    accommodation: "★★★★★ Deluxe",
    nightsPerLocation:
      "Sigiriya: 2N | Kandy: 2N | Nuwara Eliya: 1N | Ella: 1N | Galle: 1N",
    categoryId: "wildlife",
  },

  {
    id: "royal-odyssey",
    no: 5,
    name: "ROYAL ODYSSEY",
    subtitle: "Complete Sri Lanka Experience",
    description:
      "A complete island taste with extra comfort in hills + a proper beach stay to end the trip beautifully.",
    image: "https://source.unsplash.com/featured/1600x900/?bentota,beach,sri-lanka&sig=905",
    duration: "9 Days / 8 Nights",
    basePrice: 950,
    locations: "Sigiriya · Kandy · Nuwara Eliya · Ella · Galle · Bentota",
    experience: "Cultural, Hill Country, Wildlife & Beach",
    days: 9,
    nights: 8,
    accommodation: "★★★★★ Luxury",
    nightsPerLocation:
      "Sigiriya: 2N | Kandy: 2N | Nuwara Eliya: 2N | Ella: 1N | Galle: 1N | Bentota: 2N",
    categoryId: "beach",
  },

  {
    id: "platinum-paradise",
    no: 6,
    name: "PLATINUM PARADISE",
    subtitle: "Luxury Grand Tour of Sri Lanka",
    description:
      "Ultra-luxury grand tour with private comfort, curated stays, and iconic highlights across the island.",
    image: "https://source.unsplash.com/featured/1600x900/?luxury,resort,sri-lanka&sig=906",
    duration: "10 Days / 9 Nights",
    basePrice: 1000,
    locations:
      "Negombo · Anuradhapura · Sigiriya · Kandy · Nuwara Eliya · Ella · Yala · Mirissa · Galle",
    experience: "Luxury: Cultural, Wildlife, Hill Country & Beach",
    days: 10,
    nights: 9,
    accommodation: "★★★★★ Ultra-Luxury",
    nightsPerLocation:
      "Negombo: 1N | Anuradhapura: 1N | Sigiriya: 1N | Kandy: 2N | Nuwara Eliya: 1N | Ella: 1N | Yala: 1N | Mirissa: 1N",
    categoryId: "luxury",
  },

  {
    id: "emerald-isle-explorer",
    no: 7,
    name: "EMERALD ISLE EXPLORER",
    subtitle: "North, Culture & Coast Discovery",
    description:
      "Heritage-rich route linking ancient cities with hill-country charm and a sunny south-coast vibe.",
    image: "https://source.unsplash.com/featured/1600x900/?anuradhapura,sri-lanka&sig=907",
    duration: "10 Days / 9 Nights",
    basePrice: 1000,
    locations:
      "Anuradhapura · Sigiriya · Kandy · Nuwara Eliya · Ella · Yala · Galle · Mirissa",
    experience: "Cultural, Heritage & Beach",
    days: 10,
    nights: 9,
    accommodation: "★★★★ Superior",
    nightsPerLocation:
      "Anuradhapura: 1N | Sigiriya: 2N | Kandy: 1N | Nuwara Eliya: 1N | Ella: 1N | Yala: 1N | Mirissa: 2N",
    categoryId: "culture",
  },

  {
    id: "jungle-coast-odyssey",
    no: 8,
    name: "JUNGLE & COAST ODYSSEY",
    subtitle: "Wildlife Safaris, Temples & Tropical Beaches",
    description:
      "A safari-first adventure with temples and tropical coast stays — ideal for wildlife + beach lovers.",
    image: "https://source.unsplash.com/featured/1600x900/?wilpattu,sri-lanka,safari&sig=908",
    duration: "12 Days / 11 Nights",
    basePrice: 1150,
    locations:
      "Colombo · Wilpattu · Anuradhapura · Sigiriya · Kandy · Ella · Yala · Tangalle · Galle",
    experience: "Wildlife, Cultural & Beach",
    days: 12,
    nights: 11,
    accommodation: "★★★★★ Deluxe",
    nightsPerLocation:
      "Wilpattu: 1N | Anuradhapura: 2N | Sigiriya: 2N | Kandy: 2N | Ella: 1N | Yala: 1N | Tangalle: 2N",
    categoryId: "wildlife",
  },

  {
    id: "tea-trail-southern-loop",
    no: 9,
    name: "TEA TRAIL & SOUTHERN LOOP",
    subtitle: "Hill Country, Spice Gardens & Coastal Gems",
    description:
      "Tea country beauty with spice gardens and southern coast highlights — a long scenic loop with comfort.",
    image: "https://source.unsplash.com/featured/1600x900/?tea,plantation,nuwara-eliya&sig=909",
    duration: "13 Days / 12 Nights",
    basePrice: 1300,
    locations:
      "Colombo · Anuradhapura · Jaffna · Trincomalee · Sigiriya · Kandy · Nuwara Eliya · Ella · Mirissa · Galle",
    experience: "Cultural, Hill Country & Beach",
    days: 13,
    nights: 12,
    accommodation: "★★★★★ Luxury",
    nightsPerLocation:
      "Anuradhapura: 1N | Jaffna: 2N | Trincomalee: 1N | Sigiriya: 2N | Kandy: 2N | Nuwara Eliya: 1N | Ella: 1N | Mirissa: 2N",
    categoryId: "hill-country",
  },

  {
    id: "grand-circle-tour",
    no: 10,
    name: "GRAND CIRCLE TOUR",
    subtitle: "Complete Island — Ancient Cities to Wild Coast",
    description:
      "A full-island classic for culture lovers: ancient cities, hill-country, safari, and the south coast in one route.",
    image: "https://source.unsplash.com/featured/1600x900/?sri-lanka,ancient,ruins&sig=910",
    duration: "15 Days / 14 Nights",
    basePrice: 1500,
    locations:
      "Negombo · Anuradhapura · Trincomalee · Sigiriya · Kandy · Nuwara Eliya · Ella · Yala · Galle",
    experience: "Cultural, Wildlife, Hill Country & Beach",
    days: 15,
    nights: 14,
    accommodation: "★★★★★ Luxury",
    nightsPerLocation:
      "Negombo: 1N | Anuradhapura: 2N | Trincomalee: 2N | Sigiriya: 2N | Kandy: 2N | Nuwara Eliya: 2N | Ella: 1N | Yala: 1N | Galle: 1N",
    categoryId: "culture",
  },

  {
    id: "north-to-south-expedition",
    no: 11,
    name: "NORTH TO SOUTH EXPEDITION",
    subtitle: "Jaffna Peninsula, Ancient Kingdoms & Tropical Coast",
    description:
      "The ultimate culture-and-coast expedition from the North down to the southern beaches — deep and diverse.",
    image: "https://source.unsplash.com/featured/1600x900/?jaffna,sri-lanka&sig=911",
    duration: "16 Days / 15 Nights",
    basePrice: 1650,
    locations:
      "Jaffna · Mannar · Anuradhapura · Sigiriya · Kandy · Nuwara Eliya · Ella · Yala · Mirissa · Galle",
    experience: "Cultural, Heritage, Wildlife & Beach",
    days: 16,
    nights: 15,
    accommodation: "★★★★★ Luxury",
    nightsPerLocation:
      "Anuradhapura: 2N | Jaffna: 2N | Mannar: 1N | Sigiriya: 2N | Kandy: 2N | Nuwara Eliya: 2N | Ella: 1N | Yala: 1N | Mirissa: 1N | Galle: 1N",
    categoryId: "culture",
  },

  {
    id: "luxury-grand-tour",
    no: 12,
    name: "LUXURY GRAND TOUR",
    subtitle: "The Definitive Sri Lanka Experience",
    description:
      "High-end full island experience with upgraded stays, VIP pacing, and seamless logistics throughout.",
    image: "https://source.unsplash.com/featured/1600x900/?luxury,villa,sri-lanka&sig=912",
    duration: "18 Days / 17 Nights",
    basePrice: 1800,
    locations:
      "Colombo · Negombo · Anuradhapura · Jaffna · Trincomalee · Polonnaruwa · Sigiriya · Kandy · Nuwara Eliya · Ella · Yala · Galle",
    experience: "Luxury: Full Island Cultural, Wildlife & Beach",
    days: 18,
    nights: 17,
    accommodation: "★★★★★ Ultra-Luxury",
    nightsPerLocation:
      "Colombo: 1N | Negombo: 1N | Anuradhapura: 2N | Jaffna: 2N | Trincomalee: 2N | Sigiriya: 2N | Kandy: 2N | Nuwara Eliya: 2N | Ella: 1N | Yala: 1N | Galle: 1N",
    categoryId: "luxury",
  },

  {
    id: "ultimate-ceylon-odyssey",
    no: 13,
    name: "ULTIMATE CEYLON ODYSSEY",
    subtitle: "Every Corner of the Pearl of the Indian Ocean",
    description:
      "The most complete luxury itinerary: North, East coast (Arugam Bay), culture triangle, hills, safari and beaches.",
    image: "https://source.unsplash.com/featured/1600x900/?arugam-bay,sri-lanka&sig=913",
    duration: "20 Days / 19 Nights",
    basePrice: 2100,
    locations:
      "Colombo · Negombo · Jaffna · Anuradhapura · Trincomalee · Arugam Bay · Sigiriya · Kandy · Nuwara Eliya · Ella · Yala · Mirissa · Galle",
    experience: "Ultimate: Full Island Cultural, Wildlife, Adventure & Luxury Beach",
    days: 20,
    nights: 19,
    accommodation: "★★★★★ Ultra-Luxury Collection",
    nightsPerLocation:
      "Colombo: 1N | Negombo: 1N | Anuradhapura: 2N | Jaffna: 2N | Trincomalee: 2N | Arugam Bay: 2N | Sigiriya: 2N | Kandy: 1N | Nuwara Eliya: 2N | Ella: 1N | Yala: 1N | Mirissa: 1N | Galle: 1N",
    categoryId: "luxury",
  },
];