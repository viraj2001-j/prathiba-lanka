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
    image: "https://source.unsplash.com/featured/1600x900/?colombo,temple,sri-lanka&sig=901",
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