// src/data/categoryDetails.ts

export type CategoryDetail = {
  id: "classic" | "culture" | "hill-country" | "wildlife" | "beach" | "luxury";
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  bestFor: string[];
  samplePlaces: string[];
  faqs: { q: string; a: string }[];
};

export const MOCK_CATEGORIES: CategoryDetail[] = [
  {
    id: "classic",
    title: "Classic Highlights",
    subtitle: "Best for first-time visitors",
    heroImage: "/images/other places/light_house.jpeg",
    intro:
      "A carefully paced introduction to Sri Lanka’s must-see icons—cultural triangle, Kandy, and a relaxing coastal finish.",
    highlights: ["Top iconic sights", "Comfortable pacing", "Easy logistics & smooth planning"],
    bestFor: ["First-time visitors", "Families", "Couples"],
    samplePlaces: ["Sigiriya", "Kandy", "Nuwara Eliya", "Bentota"],
    faqs: [
      { q: "Is 5–6 days enough for Sri Lanka?", a: "Yes for highlights. For deeper exploration, choose 9+ days." },
      { q: "Can I customize the route?", a: "Yes—this category is easy to tailor with extra nights or beach time." },
    ],
  },
  {
    id: "culture",
    title: "Culture & Heritage",
    subtitle: "Temples, ancient cities, UNESCO sites",
    heroImage: "/images/cultural_places/place_a.jpeg",
    intro:
      "Discover Sri Lanka’s ancient kingdoms, sacred temples, and UNESCO heritage—guided by local insight and stories.",
    highlights: ["UNESCO sites", "Ancient capitals", "Authentic culture & food"],
    bestFor: ["History lovers", "Photographers", "Curious explorers"],
    samplePlaces: ["Anuradhapura", "Polonnaruwa", "Kandy", "Sigiriya", "Dambulla"],
    faqs: [
      { q: "What should I wear to temples?", a: "Cover shoulders and knees; remove shoes/hats at entrances." },
      { q: "Is a guide recommended?", a: "Yes—guides add context and make sites far more meaningful." },
    ],
  },
  {
    id: "hill-country",
    title: "Hill Country & Tea",
    subtitle: "Tea estates, waterfalls, scenic train",
    heroImage: "images/waterfalls/green.jpeg",
    intro:
      "Cool air, tea plantations, waterfalls and world-famous train rides—Sri Lanka’s most scenic landscapes.",
    highlights: ["Tea tours & tastings", "Viewpoints & waterfalls", "Iconic train journey"],
    bestFor: ["Couples", "Photographers", "Nature lovers"],
    samplePlaces: ["Nuwara Eliya", "Ella", "Haputale", "Kandy", "Hatton"],
    faqs: [
      { q: "Is it cold in the hills?", a: "Evenings can be cool—bring a light jacket." },
      { q: "Can we include the train ride?", a: "Yes, subject to ticket availability. We can advise best options." },
    ],
  },
  {
    id: "wildlife",
    title: "Wildlife Safaris",
    subtitle: "Leopards, elephants, national parks",
    heroImage: "images/animals/elephants_b.jpeg",
    intro:
      "Explore famous national parks and tropical ecosystems—jeep safaris, birdlife, and ethical wildlife viewing.",
    highlights: ["Jeep safaris in top parks", "Elephants & birdlife", "Great nature photography"],
    bestFor: ["Nature lovers", "Adventure travelers", "Families"],
    samplePlaces: ["Yala", "Wilpattu", "Udawalawe", "Minneriya"],
    faqs: [
      { q: "Can you guarantee a leopard sighting?", a: "No—wildlife sightings depend on nature, but we pick the best times." },
      { q: "Which park is best for elephants?", a: "Udawalawe and Minneriya are excellent depending on season." },
    ],
  },
  {
    id: "beach",
    title: "Beach & Coast",
    subtitle: "Sunsets, swimming, coastal towns",
    heroImage: "images/Beach/beach_u.jpeg",
    intro:
      "Unwind on palm-fringed shores, enjoy sunset beaches, and explore charming coastal towns with relaxed vibes.",
    highlights: ["Swimmable beaches (seasonal)", "Sunset viewpoints", "Seafood & coastal stays"],
    bestFor: ["Relaxation seekers", "Couples", "Friends"],
    samplePlaces: ["Bentota", "Mirissa", "Unawatuna", "Galle", "Tangalle"],
    faqs: [
      { q: "Is the sea safe to swim?", a: "Depends on season/coast. We recommend the best beaches for your travel month." },
      { q: "Can we add whale watching?", a: "Yes, seasonal. We can schedule an early-morning trip if weather permits." },
    ],
  },
  {
    id: "luxury",
    title: "Luxury Collection",
    subtitle: "Premium stays, private touring",
    heroImage: "images/other places/hotel_b.jpeg",
    intro:
      "A premium Sri Lanka journey—luxury stays, private guides, curated dining, seamless transfers and comfort.",
    highlights: ["Luxury hotels & villas", "Private chauffeur-guide", "Curated experiences & upgrades"],
    bestFor: ["Luxury travelers", "Special occasions", "Families who want comfort"],
    samplePlaces: ["Galle Fort", "Private wildlife lodges", "Boutique hill stays", "Luxury beach resorts"],
    faqs: [
      { q: "Is it fully customizable?", a: "Yes—hotels, pace, activities, and experiences can be tailored." },
      { q: "Are private transfers included?", a: "Typically yes for luxury category tours." },
    ],
  },
];

// ✅ UI-friendly categories for carousel/cards (TourCategoriesSection expects `image`)
export type Category = {
  id: CategoryDetail["id"];
  title: string;
  subtitle?: string;
  image: string;
};

export const CATEGORIES_UI: Category[] = MOCK_CATEGORIES.map((c) => ({
  id: c.id,
  title: c.title.toUpperCase(), // optional: matches your UI style
  subtitle: c.subtitle,
  image: c.heroImage, // ✅ convert heroImage -> image
}));