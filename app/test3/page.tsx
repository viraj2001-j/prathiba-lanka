

'use client';
// app/page.tsx
import Image from "next/image";

type TourPackage = {
  id: string;
  slug: string;
  title: string;
  duration: string;
  destinations: string;
  highlights: string[];
  priceFrom: string;
  image: string;
  theme: "Culture" | "Beach" | "Wildlife" | "Honeymoon" | "Adventure";
};

type Testimonial = {
  id: string;
  name: string;
  country: string;
  flag: string;
  text: string;
  rating: number;
};

type Benefit = {
  id: string;
  title: string;
  description: string;
};

const HERO_IMAGES = [
  "/hero/srilanka-1.jpg",
  "/hero/srilanka-2.jpg",
  "/hero/srilanka-3.jpg",
];

const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "classic-7",
    slug: "classic-sri-lanka-7-days",
    title: "Classic Sri Lanka – 7 Days",
    duration: "7 Days / 6 Nights",
    destinations: "Colombo • Kandy • Nuwara Eliya • Ella • Galle",
    highlights: [
      "Temple of the Tooth & cultural show",
      "Tea plantations & hill country train ride",
      "Galle Fort & sunset by the beach",
    ],
    priceFrom: "From $650 per person",
    image: "/tours/classic-7.jpg",
    theme: "Culture",
  },
  {
    id: "honeymoon-8",
    slug: "romantic-honeymoon-8-days",
    title: "Romantic Sri Lanka Honeymoon",
    duration: "8 Days / 7 Nights",
    destinations: "Negombo • Kandy • Ella • Yala • Bentota",
    highlights: [
      "Private drivers & handpicked boutique hotels",
      "Scenic train ride through tea country",
      "Beach candlelit dinner add-on available",
    ],
    priceFrom: "From $890 per person",
    image: "/tours/honeymoon-8.jpg",
    theme: "Honeymoon",
  },
  {
    id: "wildlife-6",
    slug: "wildlife-coast-6-days",
    title: "Wildlife & Coast Escape",
    duration: "6 Days / 5 Nights",
    destinations: "Colombo • Sigiriya • Minneriya • Mirissa",
    highlights: [
      "Jeep safari to see elephants",
      "Sigiriya Rock Fortress sunrise climb",
      "Whale watching in Mirissa (seasonal)",
    ],
    priceFrom: "From $720 per person",
    image: "/tours/wildlife-6.jpg",
    theme: "Wildlife",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Emma & Lucas",
    country: "Germany",
    flag: "🇩🇪",
    text: "Every detail was taken care of. Our driver-guide felt like a friend by the end of the trip.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sophia",
    country: "United Kingdom",
    flag: "🇬🇧",
    text: "Smooth planning, beautiful hotels, and a perfectly paced itinerary for a solo traveller.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Noah & Chloe",
    country: "Australia",
    flag: "🇦🇺",
    text: "We saw wildlife, tea hills, and beaches in one week. Truly stress-free from airport to airport.",
    rating: 4,
  },
];

const BENEFITS: Benefit[] = [
  {
    id: "b1",
    title: "Local Experts, Global Standards",
    description:
      "Sri Lanka-based planners who understand foreign travellers, from airport pick-up to final drop-off.",
  },
  {
    id: "b2",
    title: "Handpicked Hotels & Drivers",
    description:
      "Curated stays and professional English-speaking drivers for a safe, comfortable journey.",
  },
  {
    id: "b3",
    title: "Fully Tailor-Made Itineraries",
    description:
      "Adjust routes, hotel levels, and experiences to match your pace, budget, and travel style.",
  },
  {
    id: "b4",
    title: "24/7 On-Trip Support",
    description:
      "Our team is reachable throughout your stay in Sri Lanka for any changes or help you need.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Background image overlay (simple, single image) */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <Image
            src={HERO_IMAGES[0]}
            alt="Sri Lanka landscape"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
          {/* Left: main copy */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Tailor-made Sri Lanka tours for world travellers
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl md:leading-tight">
                Design your{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                  perfect Sri Lanka journey
                </span>{" "}
                in a few clicks.
              </h1>
              <p className="max-w-xl text-sm text-slate-200/80 sm:text-base">
                Handcrafted itineraries, private drivers, and stays chosen for
                comfort and authenticity. Share your travel dates and we&apos;ll
                shape a trip that feels made just for you.
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 text-xs sm:grid-cols-3 sm:text-sm">
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                <p className="text-emerald-300 text-lg font-semibold sm:text-xl">
                  10+
                </p>
                <p className="text-slate-300">Years crafting Sri Lanka tours</p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                <p className="text-emerald-300 text-lg font-semibold sm:text-xl">
                  1,500+
                </p>
                <p className="text-slate-300">Happy international travellers</p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                <p className="text-emerald-300 text-lg font-semibold sm:text-xl">
                  4.9/5
                </p>
                <p className="text-slate-300">Average traveller rating</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition"
              >
                Browse Sri Lanka tours
              </a>
              <a
                href="#plan-trip"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/70 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-emerald-400/80 hover:bg-slate-900 transition"
              >
                Plan my custom trip
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-[0.7rem] text-slate-300 sm:text-xs">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700">
                  🌍
                </span>
                <span>Specialised in foreign travellers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700">
                  🛡️
                </span>
                <span>Secure &amp; flexible booking process</span>
              </div>
            </div>
          </div>

          {/* Right: quick planner card */}
          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 shadow-2xl shadow-emerald-500/20 backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-50">
                Plan your Sri Lanka tour
              </h2>
              <p className="mt-1 text-xs text-slate-300">
                Share a few details and we&apos;ll prepare a personalised
                itinerary concept for you.
              </p>

              <form
                className="mt-5 space-y-4 text-xs sm:text-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="mb-1 block text-slate-200/90">
                      Travel month
                    </label>
                    <select className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-emerald-400/40 focus:ring">
                      <option>Not decided</option>
                      <option>January – March</option>
                      <option>April – June</option>
                      <option>July – September</option>
                      <option>October – December</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="mb-1 block text-slate-200/90">
                      Trip length
                    </label>
                    <select className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-emerald-400/40 focus:ring">
                      <option>5–7 days</option>
                      <option>8–10 days</option>
                      <option>11–14 days</option>
                      <option>15+ days</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="mb-1 block text-slate-200/90">
                      Travellers
                    </label>
                    <select className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-emerald-400/40 focus:ring">
                      <option>Couple</option>
                      <option>Family</option>
                      <option>Friends</option>
                      <option>Solo traveller</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="mb-1 block text-slate-200/90">
                      Budget level
                    </label>
                    <select className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-emerald-400/40 focus:ring">
                      <option>Comfort</option>
                      <option>Premium</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-slate-200/90">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none ring-emerald-400/40 focus:ring"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-slate-200/90">
                    WhatsApp number (with country code)
                  </label>
                  <input
                    type="tel"
                    placeholder="+49 123 456789"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none ring-emerald-400/40 focus:ring"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-slate-200/90">
                    Trip ideas or special requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you’d love to see or experience in Sri Lanka."
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none ring-emerald-400/40 focus:ring"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition"
                >
                  Get a personalised trip idea
                </button>

                <p className="pt-1 text-[0.7rem] text-slate-400">
                  No payment needed now. We&apos;ll respond with ideas and
                  refine the plan together.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED TOURS ========== */}
      <section id="tours" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Featured Sri Lanka tours
              </h2>
              <p className="mt-1 max-w-xl text-sm text-slate-300">
                Start with one of our popular itineraries and customise it with
                your preferred dates, hotel level, and pace.
              </p>
            </div>
            <div className="flex gap-2 text-xs text-slate-400">
              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
                Culture &amp; Heritage
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
                Beaches &amp; Wildlife
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
                Honeymoon trips
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TOUR_PACKAGES.map((tour) => (
              <article
                key={tour.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 shadow-lg shadow-black/40"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-slate-950/80 px-3 py-1 text-[0.7rem] font-medium text-emerald-300">
                    {tour.theme}
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-100">
                    {tour.duration}
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {tour.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    {tour.destinations}
                  </p>

                  <ul className="mt-3 space-y-1 text-[0.75rem] text-slate-300">
                    {tour.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-1 items-end justify-between gap-3">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                        Indicative price
                      </p>
                      <p className="text-sm font-semibold text-emerald-300">
                        {tour.priceFrom}
                      </p>
                      <p className="text-[0.7rem] text-slate-500">
                        Based on 2 adults, private tour
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <a
                        href={`/tours/${tour.slug}`}
                        className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1.5 text-[0.75rem] font-medium text-slate-950 hover:bg-emerald-400 transition"
                      >
                        View details
                      </a>
                      <button className="rounded-full border border-slate-600 px-3 py-1 text-[0.7rem] text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition">
                        Quick enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition">
              View all Sri Lanka tours
            </button>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="border-t border-slate-800 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              Why book your Sri Lanka tour with us?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              From the first message to your final airport goodbye, our team is
              based in Sri Lanka and focused on making your trip feel effortless
              and personal.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-md shadow-black/40"
              >
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Experience tags */}
          <div className="mt-8 flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
              Private driver &amp; vehicle
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
              Flexible daily start times
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
              Hotel categories from comfort to luxury
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
              Suitable for couples, families &amp; small groups
            </span>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                What travellers say
              </h2>
              <p className="mt-1 max-w-xl text-sm text-slate-300">
                We&apos;ve welcomed guests from across Europe, the UK, Australia
                and beyond. Here&apos;s a small sample of their feedback.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              Real reviews &mdash; names changed for privacy
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.id}
                className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-md shadow-black/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <figcaption className="text-sm font-semibold text-slate-50">
                      {t.name}
                    </figcaption>
                    <p className="text-xs text-slate-300">
                      {t.flag} {t.country}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-300">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                </div>
                <blockquote className="mt-3 flex-1 text-xs text-slate-200 sm:text-sm">
                  “{t.text}”
                </blockquote>
                <p className="mt-3 text-[0.7rem] text-slate-400">
                  Tour: 7–10 day private itinerary
                </p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA STRIP ========== */}
      <section className="border-t border-slate-800 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-sky-500/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Not sure which tour fits you best?
            </h2>
            <p className="mt-1 max-w-xl text-sm text-slate-200">
              Tell us about your travel dates, who you&apos;re travelling with,
              and your budget. We&apos;ll suggest a Sri Lanka itinerary tailored
              to you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#plan-trip"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition"
            >
              Plan my Sri Lanka trip
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-950/80 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
            >
              Contact our team
            </a>
          </div>
        </div>
      </section>

      {/* ========== PLAN TRIP / CONTACT FORM ========== */}
      <section
        id="plan-trip"
        className="border-t border-slate-800 bg-slate-950/95"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            {/* Form column */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Share your Sri Lanka travel plans
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                This helps us understand what you&apos;re dreaming of.
                We&apos;ll reply by email or WhatsApp with ideas and questions
                within 24–48 hours.
              </p>

              <form
                className="mt-6 space-y-4 text-xs sm:text-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-slate-200/90">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none ring-emerald-400/40 focus:ring"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-slate-200/90">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none ring-emerald-400/40 focus:ring"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-slate-200/90">
                      WhatsApp number
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none ring-emerald-400/40 focus:ring"
                      placeholder="+44 1234 567890"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-slate-200/90">
                      Country of residence
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none ring-emerald-400/40 focus:ring"
                      placeholder="Germany, UK, Australia…"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="mb-1 block text-slate-200/90">
                      Approx. start date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-emerald-400/40 focus:ring"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-slate-200/90">
                      Trip length
                    </label>
                    <select className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-emerald-400/40 focus:ring">
                      <option>5–7 days</option>
                      <option>8–10 days</option>
                      <option>11–14 days</option>
                      <option>15+ days</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-slate-200/90">
                      Travellers
                    </label>
                    <select className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-emerald-400/40 focus:ring">
                      <option>Couple</option>
                      <option>Family with children</option>
                      <option>Friends (3–6 people)</option>
                      <option>Solo traveller</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-slate-200/90">
                      Hotel category
                    </label>
                    <select className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-emerald-400/40 focus:ring">
                      <option>Comfort (3★–3.5★)</option>
                      <option>Premium (4★)</option>
                      <option>Boutique / Luxury (4.5★–5★)</option>
                      <option>Mix comfort &amp; premium</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-slate-200/90">
                      Approximate budget (per person)
                    </label>
                    <select className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-emerald-400/40 focus:ring">
                      <option>Not sure yet</option>
                      <option>Up to $800</option>
                      <option>$800 – $1,200</option>
                      <option>$1,200 – $1,800</option>
                      <option>$1,800+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-slate-200/90">
                    What would you love to experience?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none ring-emerald-400/40 focus:ring"
                    placeholder="Tell us about your dream trip – places you’ve heard of, must-see spots, pace (relaxed / busy), and anything else."
                  />
                </div>

                <div className="flex items-start gap-2 pt-1 text-[0.7rem] text-slate-400">
                  <input
                    id="agree"
                    type="checkbox"
                    className="mt-0.5 h-3 w-3 rounded border-slate-700 bg-slate-950"
                  />
                  <label htmlFor="agree">
                    I&apos;m happy to be contacted by email or WhatsApp about
                    my Sri Lanka travel plans.
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-3 w-full rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition"
                >
                  Send my trip request
                </button>
              </form>
            </div>

            {/* Info / contact column */}
            <aside
              id="contact"
              className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-md shadow-black/40"
            >
              <div>
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  Prefer to talk to a person?
                </h3>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  You can message us directly and we&apos;ll reply during Sri
                  Lanka business hours.
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-200 sm:text-sm">
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="font-medium text-slate-50">
                    hello@prathibalankavoyages.com
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">WhatsApp</p>
                  <p className="font-medium text-slate-50">
                    +94 7X XXX XXXX (Sri Lanka)
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Office (Colombo)</p>
                  <p className="font-medium text-slate-50">
                    Prathiba Lanka Voyages
                  </p>
                  <p>No. 123, Example Road, Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="space-y-2 text-[0.7rem] text-slate-400">
                <p className="font-medium text-slate-200">
                  Typical response time
                </p>
                <p>
                  24–48 hours for custom trip ideas. During peak season we may
                  take slightly longer, but we reply to every enquiry.
                </p>
              </div>

              <div className="space-y-2 text-[0.7rem] text-slate-400">
                <p className="font-medium text-slate-200">
                  Sample Sri Lanka experiences we plan
                </p>
                <ul className="space-y-1">
                  <li>• Culture-heavy routes (Sigiriya, Kandy, Anuradhapura)</li>
                  <li>• Tea-country &amp; scenic train journeys</li>
                  <li>• Family-friendly itineraries with shorter drives</li>
                  <li>• Honeymoon and special anniversary trips</li>
                  <li>• Wildlife &amp; national park safaris</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="space-y-2 text-sm">
              <p className="text-base font-semibold text-slate-50">
                Prathiba Lanka Voyages
              </p>
              <p className="max-w-sm text-xs text-slate-300">
                Sri Lanka-based tour specialists crafting tailor-made journeys
                for couples, families, and small groups from around the world.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 text-xs text-slate-300 md:text-sm">
              <div>
                <p className="mb-2 font-semibold text-slate-100">Explore</p>
                <ul className="space-y-1">
                  <li>
                    <a href="#tours" className="hover:text-emerald-300">
                      Sri Lanka tours
                    </a>
                  </li>
                  <li>
                    <a href="#plan-trip" className="hover:text-emerald-300">
                      Plan my trip
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-emerald-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-slate-100">Connect</p>
                <ul className="space-y-1">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>YouTube</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-slate-100">Practical</p>
                <ul className="space-y-1">
                  <li>Booking terms</li>
                  <li>Privacy policy</li>
                  <li>Travel tips for Sri Lanka</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-slate-800 pt-4 text-[0.7rem] text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Prathiba Lanka Voyages. All rights reserved.</p>
            <p>Made with ❤️ in Sri Lanka.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}


