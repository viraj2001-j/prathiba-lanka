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
    heroImage: "data:image/jpeg;base64,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",
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
    heroImage: "https://source.unsplash.com/featured/2400x1200/?kandy,temple,sri-lanka&sig=702",
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
    heroImage: "https://source.unsplash.com/featured/2400x1200/?ella,train,sri-lanka&sig=703",
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
    heroImage: "https://source.unsplash.com/featured/2400x1200/?yala,safari,elephant&sig=704",
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
    heroImage: "https://source.unsplash.com/featured/2400x1200/?bentota,beach,sri-lanka&sig=705",
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
    heroImage: "https://source.unsplash.com/featured/2400x1200/?luxury,resort,sri-lanka&sig=706",
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