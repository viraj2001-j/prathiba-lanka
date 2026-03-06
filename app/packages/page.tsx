// // app/packages/page.tsx
// "use client";

// import React, { useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { ArrowUpRight, Clock, Star } from "lucide-react";

// import { PACKAGES } from "@/src/data/packageDetails";

// export default function AllPackagesPage() {
//   const router = useRouter();

//   const items = useMemo(() => PACKAGES, []);

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl px-6 py-12">
//         <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//           ALL PACKAGES
//         </div>
//         <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
//           Explore every Sri Lanka tour
//         </h1>
//         <p className="mt-3 max-w-2xl text-slate-600">
//           Choose a tour style you love, then open a package to view the full itinerary and details.
//         </p>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {items.map((p) => (
//             <div
//               key={p.id}
//               className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//             >
//               <div className="relative h-44 w-full overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
//                 <div className="absolute bottom-3 left-4 text-sm font-semibold text-white">
//                   From ${p.basePrice.toLocaleString()}
//                 </div>

//                 <button
//                   onClick={() => router.push(`/packages/${p.id}`)}
//                   className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm"
//                 >
//                   <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white">
//                     <ArrowUpRight className="h-4 w-4" />
//                   </span>
//                   EXPLORE
//                 </button>
//               </div>

//               <div className="p-6">
//                 <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//                   PACKAGE #{p.no}
//                 </div>

//                 <div className="mt-2 text-lg font-semibold text-slate-900">{p.name}</div>
//                 <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>

//                 <p className="mt-4 text-sm leading-6 text-slate-700 line-clamp-3">
//                   {p.description}
//                 </p>

//                 <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-700">
//                   <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
//                     <Clock className="h-4 w-4" />
//                     {p.duration}
//                   </span>
//                   <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
//                     <Star className="h-4 w-4" />
//                     {p.accommodation}
//                   </span>
//                 </div>

//                 <button
//                   onClick={() => router.push(`/packages/${p.id}`)}
//                   className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0b2b5b] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
//                 >
//                   EXPLORE PACKAGE
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// // app/categories/page.tsx
// "use client";

// import React, { useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Search,
//   SlidersHorizontal,
//   X,
//   Clock,
//   Star,
// } from "lucide-react";

// import { MOCK_CATEGORIES } from "@/src/data/mockCategories";
// import { PACKAGES } from "@/src/data/packageDetails";

// type SortKey = "popular" | "priceLow" | "priceHigh" | "durationShort" | "durationLong";

// const durationToDays = (duration: string) => {
//   // "5 Days / 4 Nights" -> 5
//   const m = duration.match(/(\d+)\s*Days/i);
//   return m ? parseInt(m[1], 10) : 0;
// };

// export default function CategoriesIndexPage() {
//   const router = useRouter();

//   // ✅ UI state
//   const [q, setQ] = useState("");
//   const [activeCat, setActiveCat] = useState<string | "all">("all");
//   const [sort, setSort] = useState<SortKey>("popular");

//   const categoriesUi = useMemo(() => {
//     return [
//       { id: "all", title: "All" },
//       ...MOCK_CATEGORIES.map((c) => ({
//         id: c.id,
//         title: c.title,
//       })),
//     ];
//   }, []);

//   const filtered = useMemo(() => {
//     const query = q.trim().toLowerCase();

//     let list = PACKAGES.filter((p) => {
//       const matchesCat = activeCat === "all" ? true : p.categoryId === activeCat;
//       const matchesQuery =
//         !query ||
//         p.name.toLowerCase().includes(query) ||
//         p.subtitle.toLowerCase().includes(query) ||
//         p.locations.toLowerCase().includes(query);

//       return matchesCat && matchesQuery;
//     });

//     // ✅ sort
//     list = [...list].sort((a, b) => {
//       if (sort === "popular") return a.no - b.no; // uses your "no" as stable ordering
//       if (sort === "priceLow") return a.basePrice - b.basePrice;
//       if (sort === "priceHigh") return b.basePrice - a.basePrice;

//       const da = durationToDays(a.duration);
//       const db = durationToDays(b.duration);
//       if (sort === "durationShort") return da - db;
//       if (sort === "durationLong") return db - da;

//       return 0;
//     });

//     return list;
//   }, [q, activeCat, sort]);

//   const activeCategoryMeta =
//     activeCat === "all" ? null : MOCK_CATEGORIES.find((c) => c.id === activeCat);

//   return (
//     <div className="bg-white">
//       {/* HERO */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2400&q=80"
//             alt="Sri Lanka"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ type: "spring", stiffness: 90, damping: 22 } as const}
//             className="max-w-3xl"
//           >
//             <div className="text-xs font-semibold tracking-[0.22em] text-white/70">
//               CATEGORIES • PACKAGES
//             </div>
//             <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
//               Choose your Sri Lanka journey
//             </h1>
//             <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
//               Browse all tour packages, filter by category, and open each package for
//               full itinerary and payment details.
//             </p>

//             {/* chips summary */}
//             <div className="mt-7 flex flex-wrap items-center gap-3">
//               <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
//                 {filtered.length} packages
//               </span>
//               {activeCat !== "all" && activeCategoryMeta ? (
//                 <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
//                   {activeCategoryMeta.title}
//                 </span>
//               ) : null}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* FILTER BAR */}
//       <div className="mx-auto max-w-7xl px-6 py-10">
//         <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
//           {/* search */}
//           <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
//             <Search className="h-5 w-5 text-slate-500" />
//             <input
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               placeholder="Search by name, subtitle, locations…"
//               className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
//             />
//             {q ? (
//               <button
//                 onClick={() => setQ("")}
//                 className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
//                 aria-label="Clear search"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             ) : null}
//           </div>

//           {/* sort */}
//           <div className="flex flex-wrap items-center gap-3">
//             <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
//               <SlidersHorizontal className="h-4 w-4" />
//               <select
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value as SortKey)}
//                 className="bg-transparent text-sm outline-none"
//               >
//                 <option value="popular">Sort: Popular</option>
//                 <option value="priceLow">Price: Low to High</option>
//                 <option value="priceHigh">Price: High to Low</option>
//                 <option value="durationShort">Duration: Short to Long</option>
//                 <option value="durationLong">Duration: Long to Short</option>
//               </select>
//             </div>

//             <button
//               onClick={() => {
//                 setActiveCat("all");
//                 setQ("");
//                 setSort("popular");
//               }}
//               className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
//             >
//               Reset
//             </button>
//           </div>
//         </div>

//         {/* category chips */}
//         <div className="mt-6 flex flex-wrap gap-2">
//           {categoriesUi.map((c) => {
//             const isActive = c.id === activeCat;
//             return (
//               <button
//                 key={c.id}
//                 onClick={() => setActiveCat(c.id)}
//                 className={[
//                   "rounded-full px-4 py-2 text-sm font-semibold transition",
//                   isActive
//                     ? "bg-[#0b2b5b] text-white"
//                     : "bg-slate-50 text-slate-800 ring-1 ring-slate-200 hover:bg-white",
//                 ].join(" ")}
//               >
//                 {c.title}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* PACKAGES GRID */}
//       <div className="mx-auto max-w-7xl px-6 pb-16">
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((p) => (
//             <div
//               key={p.id}
//               className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//             >
//               <div className="relative h-44 w-full overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
//                 <div className="absolute bottom-3 left-4 text-sm font-semibold text-white">
//                   From ${p.basePrice.toLocaleString()}
//                 </div>

//                 <button
//                   onClick={() => router.push(`/packages/${p.id}`)}
//                   className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm"
//                 >
//                   <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white">
//                     <ArrowUpRight className="h-4 w-4" />
//                   </span>
//                   EXPLORE
//                 </button>
//               </div>

//               <div className="p-6">
//                 <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//                   PACKAGE #{p.no}
//                 </div>

//                 <div className="mt-2 text-lg font-semibold text-slate-900">{p.name}</div>
//                 <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>

//                 <p className="mt-4 text-sm leading-6 text-slate-700 line-clamp-3">
//                   {p.description}
//                 </p>

//                 <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-700">
//                   <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
//                     <Clock className="h-4 w-4" />
//                     {p.duration}
//                   </span>
//                   <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
//                     <Star className="h-4 w-4" />
//                     {p.accommodation}
//                   </span>
//                 </div>

//                 <button
//                   onClick={() => router.push(`/packages/${p.id}`)}
//                   className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0b2b5b] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
//                 >
//                   EXPLORE PACKAGE
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filtered.length === 0 ? (
//           <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 text-center">
//             <div className="text-lg font-semibold text-slate-900">No packages found</div>
//             <div className="mt-2 text-slate-600">
//               Try a different keyword or switch categories.
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }



// app/categories/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  X,
  Clock,
  Star,
} from "lucide-react";

import { MOCK_CATEGORIES } from "@/src/data/mockCategories";
import { PACKAGES } from "@/src/data/packageDetails";

type SortKey =
  | "popular"
  | "priceLow"
  | "priceHigh"
  | "durationShort"
  | "durationLong";

const durationToDays = (duration: string) => {
  const m = duration.match(/(\d+)\s*Days/i);
  return m ? parseInt(m[1], 10) : 0;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export default function CategoriesIndexPage() {
  const router = useRouter();

  const [q, setQ] = useState("");
  const [activeCat, setActiveCat] = useState<string | "all">("all");
  const [sort, setSort] = useState<SortKey>("popular");

  const categoriesUi = useMemo(() => {
    return [
      { id: "all", title: "All" },
      ...MOCK_CATEGORIES.map((c) => ({
        id: c.id,
        title: c.title,
      })),
    ];
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    let list = PACKAGES.filter((p) => {
      const matchesCat = activeCat === "all" ? true : p.categoryId === activeCat;
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.locations.toLowerCase().includes(query);

      return matchesCat && matchesQuery;
    });

    list = [...list].sort((a, b) => {
      if (sort === "popular") return a.no - b.no;
      if (sort === "priceLow") return a.basePrice - b.basePrice;
      if (sort === "priceHigh") return b.basePrice - a.basePrice;

      const da = durationToDays(a.duration);
      const db = durationToDays(b.duration);
      if (sort === "durationShort") return da - db;
      if (sort === "durationLong") return db - da;

      return 0;
    });

    return list;
  }, [q, activeCat, sort]);

  const activeCategoryMeta =
    activeCat === "all" ? null : MOCK_CATEGORIES.find((c) => c.id === activeCat);

  return (
    <div className="relative overflow-hidden bg-[#f7f9fc]">
      {/* ambient decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-80px] top-[140px] h-72 w-72 rounded-full bg-[#0b2b5b]/8 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -24, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-60px] top-[420px] h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl"
        />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.06 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2400&q=80"
            alt="Sri Lanka"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />

          {/* drifting light sweep */}
          <motion.div
            animate={{ x: ["-30%", "120%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="text-xs font-semibold tracking-[0.22em] text-white/70"
            >
              CATEGORIES • PACKAGES
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl"
            >
              Choose your Sri Lanka journey
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg"
            >
              Browse all tour packages, filter by category, and open each package for
              full itinerary and payment details.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur"
              >
                {filtered.length} packages
              </motion.span>

              {activeCat !== "all" && activeCategoryMeta ? (
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur"
                >
                  {activeCategoryMeta.title}
                </motion.span>
              ) : null}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="relative mx-auto max-w-7xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] border border-white/60 bg-white/80 p-4 shadow-[0_20px_60px_rgba(2,6,23,0.06)] backdrop-blur-xl"
        >
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* search */}
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <Search className="h-5 w-5 text-slate-500" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, subtitle, locations…"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <AnimatePresence>
                {q ? (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.7, rotate: 20 }}
                    onClick={() => setQ("")}
                    className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                ) : null}
              </AnimatePresence>
            </motion.div>

            {/* sort */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="bg-transparent text-sm outline-none"
                >
                  <option value="popular">Sort: Popular</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="durationShort">Duration: Short to Long</option>
                  <option value="durationLong">Duration: Long to Short</option>
                </select>
              </motion.div>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveCat("all");
                  setQ("");
                  setSort("popular");
                }}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Reset
              </motion.button>
            </div>
          </div>

          {/* category chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categoriesUi.map((c) => {
              const isActive = c.id === activeCat;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className="relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="activeCategoryPill"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-[#0b2b5b]"
                    />
                  ) : null}

                  {!isActive ? (
                    <span className="absolute inset-0 rounded-full bg-slate-50 ring-1 ring-slate-200 transition hover:bg-white" />
                  ) : null}

                  {isActive ? (
                    <motion.span
                      animate={{ x: ["-120%", "120%"] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  ) : null}

                  <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-800"}`}>
                    {c.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* PACKAGES GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((p, index) => (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-[0_22px_60px_rgba(2,6,23,0.12)]"
                >
                  {/* card glow */}
                  <motion.div
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-[#0b2b5b]/10 blur-3xl"
                  />

                  <div className="relative h-44 w-full overflow-hidden">
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                    {/* unusual image veil reveal */}
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-y-0 left-0 w-1/2 bg-white/12 backdrop-blur-[1px]"
                    />

                    <div className="absolute bottom-3 left-4 text-sm font-semibold text-white">
                      From ${p.basePrice.toLocaleString()}
                    </div>

                    <motion.button
                      onClick={() => router.push(`/packages/${p.id}`)}
                      initial={{ y: -10, opacity: 0 }}
                      whileHover={{ scale: 1.02 }}
                      className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm"
                    >
                      <motion.span
                        whileHover={{ rotate: 45, scale: 1.05 }}
                        className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.span>
                      EXPLORE
                    </motion.button>
                  </div>

                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="p-6"
                  >
                    <motion.div
                      variants={fadeUp}
                      className="text-xs font-semibold tracking-[0.18em] text-slate-500"
                    >
                      PACKAGE #{p.no}
                    </motion.div>

                    <motion.div
                      variants={fadeUp}
                      className="mt-2 text-lg font-semibold text-slate-900"
                    >
                      {p.name}
                    </motion.div>

                    <motion.div
                      variants={fadeUp}
                      className="mt-1 text-sm text-slate-600"
                    >
                      {p.subtitle}
                    </motion.div>

                    <motion.p
                      variants={fadeUp}
                      className="mt-4 text-sm leading-6 text-slate-700 line-clamp-3"
                    >
                      {p.description}
                    </motion.p>

                    <motion.div
                      variants={fadeUp}
                      className="mt-5 flex flex-wrap gap-2 text-xs text-slate-700"
                    >
                      <motion.span
                        whileHover={{ y: -2, scale: 1.03 }}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200"
                      >
                        <Clock className="h-4 w-4" />
                        {p.duration}
                      </motion.span>

                      <motion.span
                        whileHover={{ y: -2, scale: 1.03 }}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200"
                      >
                        <Star className="h-4 w-4" />
                        {p.accommodation}
                      </motion.span>
                    </motion.div>

                    <motion.button
                      variants={fadeUp}
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.985 }}
                      onClick={() => router.push(`/packages/${p.id}`)}
                      className="relative mt-6 inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#0b2b5b] px-5 py-3 text-sm font-semibold text-white"
                    >
                      <motion.span
                        animate={{ x: ["-120%", "120%"] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      <span className="relative z-10">EXPLORE PACKAGE</span>
                    </motion.button>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm"
            >
              <div className="text-lg font-semibold text-slate-900">No packages found</div>
              <div className="mt-2 text-slate-600">
                Try a different keyword or switch categories.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}