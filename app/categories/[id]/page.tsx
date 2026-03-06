// // app/categories/[id]/page.tsx
// "use client";

// import React, { useMemo, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, X, MapPin, Clock, Star, ArrowUpRight } from "lucide-react";

// import { MOCK_CATEGORIES } from "@/src/data/mockCategories";
// import { PACKAGES, TourPackage } from "@/src/data/packageDetails";

// export default function CategoryPage() {
//   const { id } = useParams<{ id: string }>();
//   const router = useRouter();

//   const category = MOCK_CATEGORIES.find((c) => c.id === id);
//   const packages = useMemo(() => PACKAGES.filter((p) => p.categoryId === id), [id]);

//   const [selected, setSelected] = useState<TourPackage | null>(null);

//   if (!category) {
//     return (
//       <div className="mx-auto max-w-5xl px-6 py-16">
//         <button onClick={() => router.back()} className="underline">
//           Go back
//         </button>
//         <h1 className="mt-6 text-3xl font-semibold">Category not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       {/* HERO */}
//       <div className="relative h-[52vh] min-h-[380px] overflow-hidden">
//         <img src={category.heroImage} alt={category.title} className="h-full w-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//         <div className="absolute left-0 right-0 top-0 mx-auto max-w-7xl px-6 py-8">
//           <button
//             onClick={() => router.back()}
//             className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back
//           </button>
//         </div>

//         <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ type: "spring", stiffness: 90, damping: 22 } as const}
//             className="text-4xl font-semibold tracking-tight text-white md:text-5xl"
//           >
//             {category.title.toUpperCase()}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ delay: 0.08, type: "spring", stiffness: 90, damping: 22 } as const}
//             className="mt-3 max-w-2xl text-white/85"
//           >
//             {category.subtitle}
//           </motion.p>
//         </div>
//       </div>

//       {/* ✅ CATEGORY DESCRIPTION SECTION */}
//       <div className="mx-auto max-w-7xl px-6 py-12">
//         <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
//           <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
//             <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//               ABOUT THIS CATEGORY
//             </div>
//             <div className="mt-4 text-lg leading-8 text-slate-700">{category.intro}</div>

//             <div className="mt-7 grid gap-3 md:grid-cols-3">
//               <MiniList title="Highlights" items={category.highlights} />
//               <MiniList title="Best For" items={category.bestFor} />
//               <MiniList title="Places" items={category.samplePlaces} />
//             </div>
//           </div>

//           <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
//             <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">QUICK FAQ</div>
//             <div className="mt-5 space-y-5">
//               {category.faqs.slice(0, 3).map((f) => (
//                 <div key={f.q}>
//                   <div className="font-semibold text-slate-900">{f.q}</div>
//                   <div className="mt-2 text-slate-600">{f.a}</div>
//                 </div>
//               ))}
//             </div>

//             <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0b2b5b] px-6 py-3 text-sm font-semibold text-white">
//               Request a Quote <ArrowUpRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* PACKAGES GRID */}
//       <div className="mx-auto max-w-7xl px-6 pb-14">
//         <div className="flex items-end justify-between gap-4">
//           <div>
//             <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">PACKAGES</div>
//             <div className="mt-2 text-2xl font-semibold text-slate-900">
//               {packages.length} tours in this category
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {packages.map((p) => (
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

//                 {/* ✅ Explore button ON CARD IMAGE */}
//                 <button
//                   onClick={() => setSelected(p)}
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

//                 <p className="mt-4 text-sm leading-6 text-slate-700 line-clamp-3">{p.description}</p>

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

//                 {/* ✅ Explore button BELOW too (optional) */}
//                 <button
//                   onClick={() => setSelected(p)}
//                   className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0b2b5b] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
//                 >
//                   EXPLORE PACKAGE
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* DETAILS MODAL */}
//       <AnimatePresence>
//         {selected ? (
//           <motion.div
//             className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             <motion.div
//               className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white"
//               initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
//               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//               exit={{ opacity: 0, y: 18, filter: "blur(10px)" }}
//               transition={{ type: "spring", stiffness: 120, damping: 24 } as const}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="relative h-56 w-full">
//                 <img src={selected.image} alt={selected.name} className="h-full w-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

//                 <button
//                   onClick={() => setSelected(null)}
//                   className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/80 ring-1 ring-white/60 backdrop-blur"
//                   aria-label="Close"
//                 >
//                   <X className="h-5 w-5 text-slate-800" />
//                 </button>

//                 <div className="absolute bottom-5 left-6 right-6">
//                   <div className="text-xs font-semibold tracking-[0.18em] text-white/80">
//                     PACKAGE #{selected.no}
//                   </div>
//                   <div className="mt-1 text-2xl font-semibold text-white">{selected.name}</div>
//                   <div className="mt-1 text-white/85">{selected.subtitle}</div>
//                 </div>
//               </div>

//               <div className="p-6 md:p-8">
//                 <p className="text-slate-700">{selected.description}</p>

//                 <div className="mt-6 grid gap-4 md:grid-cols-3">
//                   <Info title="Duration" value={selected.duration} icon={<Clock className="h-4 w-4" />} />
//                   <Info title="Base Price" value={`$${selected.basePrice.toLocaleString()}`} />
//                   <Info title="Accommodation" value={selected.accommodation} icon={<Star className="h-4 w-4" />} />
//                 </div>

//                 <div className="mt-6 rounded-2xl border border-slate-200 p-4">
//                   <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
//                     <MapPin className="h-4 w-4" />
//                     Locations Covered
//                   </div>
//                   <div className="mt-2 text-slate-700">{selected.locations}</div>
//                 </div>

//                 <div className="mt-4 rounded-2xl border border-slate-200 p-4">
//                   <div className="text-sm font-semibold text-slate-900">Nights per Location</div>
//                   <div className="mt-2 text-slate-700">{selected.nightsPerLocation}</div>
//                 </div>

//                 <div className="mt-4 rounded-2xl border border-slate-200 p-4">
//                   <div className="text-sm font-semibold text-slate-900">Experience</div>
//                   <div className="mt-2 text-slate-700">{selected.experience}</div>
//                 </div>

//                 <div className="mt-7 flex flex-wrap gap-3">
//                   <button className="rounded-full bg-[#0b2b5b] px-6 py-3 text-sm font-semibold text-white">
//                     Request Quote
//                   </button>
//                   <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900">
//                     Save Package
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         ) : null}
//       </AnimatePresence>
//     </div>
//   );
// }

// function MiniList({ title, items }: { title: string; items: string[] }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-4">
//       <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">{title}</div>
//       <ul className="mt-3 space-y-2 text-sm text-slate-700">
//         {items.slice(0, 4).map((x) => (
//           <li key={x}>• {x}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Info({ title, value, icon }: { title: string; value: string; icon?: React.ReactNode }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-4">
//       <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-500">
//         {icon}
//         {title}
//       </div>
//       <div className="mt-2 font-semibold text-slate-900">{value}</div>
//     </div>
//   );
// }



"use client";

import React, { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Clock, Star } from "lucide-react";

import { MOCK_CATEGORIES } from "@/src/data/mockCategories";
import { PACKAGES } from "@/src/data/packageDetails";

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const category = MOCK_CATEGORIES.find((c) => c.id === id);
  const packages = useMemo(() => PACKAGES.filter((p) => p.categoryId === id), [id]);

  if (!category) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16">
        <button onClick={() => router.back()} className="underline">
          Go back
        </button>
        <h1 className="mt-6 text-3xl font-semibold">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative h-[52vh] min-h-[380px] overflow-hidden">
        <img
          src={category.heroImage}
          alt={category.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute left-0 right-0 top-0 mx-auto max-w-7xl px-6 py-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>

        <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 90, damping: 22 } as const}
            className="text-4xl font-semibold tracking-tight text-white md:text-5xl"
          >
            {category.title.toUpperCase()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.08, type: "spring", stiffness: 90, damping: 22 } as const}
            className="mt-3 max-w-2xl text-white/85"
          >
            {category.subtitle}
          </motion.p>
        </div>
      </div>

      {/* CATEGORY DESCRIPTION */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
              ABOUT THIS CATEGORY
            </div>
            <div className="mt-4 text-lg leading-8 text-slate-700">{category.intro}</div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <MiniList title="Highlights" items={category.highlights} />
              <MiniList title="Best For" items={category.bestFor} />
              <MiniList title="Places" items={category.samplePlaces} />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">QUICK FAQ</div>
            <div className="mt-5 space-y-5">
              {category.faqs.slice(0, 3).map((f) => (
                <div key={f.q}>
                  <div className="font-semibold text-slate-900">{f.q}</div>
                  <div className="mt-2 text-slate-600">{f.a}</div>
                </div>
              ))}
            </div>

            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0b2b5b] px-6 py-3 text-sm font-semibold text-white">
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* PACKAGES GRID */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">PACKAGES</div>
        <div className="mt-2 text-2xl font-semibold text-slate-900">
          {packages.length} tours in this category
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <div className="absolute bottom-3 left-4 text-sm font-semibold text-white">
                  From ${p.basePrice.toLocaleString()}
                </div>

                {/* Explore -> Package page */}
                <button
                  onClick={() => router.push(`/packages/${p.id}`)}
                  className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  EXPLORE
                </button>
              </div>

              <div className="p-6">
                <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                  PACKAGE #{p.no}
                </div>

                <div className="mt-2 text-lg font-semibold text-slate-900">{p.name}</div>
                <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>

                <p className="mt-4 text-sm leading-6 text-slate-700 line-clamp-3">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-700">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
                    <Clock className="h-4 w-4" />
                    {p.duration}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
                    <Star className="h-4 w-4" />
                    {p.accommodation}
                  </span>
                </div>

                <button
                  onClick={() => router.push(`/packages/${p.id}`)}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0b2b5b] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  EXPLORE PACKAGE
                </button>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {items.slice(0, 4).map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}






// "use client";

// import React, { useMemo } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowUpRight,
//   Clock,
//   Star,
//   ShieldCheck,
//   CarFront,
//   CircleCheckBig,
// } from "lucide-react";

// import { MOCK_CATEGORIES } from "@/src/data/mockCategories";
// import { PACKAGES } from "@/src/data/packageDetails";
// import { PACKAGE_DETAILS } from "@/src/data/packageDetailsPage";

// export default function CategoryPage() {
//   const { id } = useParams<{ id: string }>();
//   const router = useRouter();

//   const category = MOCK_CATEGORIES.find((c) => c.id === id);
//   const packages = useMemo(() => PACKAGES.filter((p) => p.categoryId === id), [id]);

//   if (!category) {
//     return (
//       <div className="mx-auto max-w-5xl px-6 py-16">
//         <button onClick={() => router.back()} className="underline">
//           Go back
//         </button>
//         <h1 className="mt-6 text-3xl font-semibold">Category not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       {/* HERO */}
//       <div className="relative h-[52vh] min-h-[380px] overflow-hidden">
//         <img
//           src={category.heroImage}
//           alt={category.title}
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//         <div className="absolute left-0 right-0 top-0 mx-auto max-w-7xl px-6 py-8">
//           <button
//             onClick={() => router.back()}
//             className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back
//           </button>
//         </div>

//         <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ type: "spring", stiffness: 90, damping: 22 } as const}
//             className="text-4xl font-semibold tracking-tight text-white md:text-5xl"
//           >
//             {category.title.toUpperCase()}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ delay: 0.08, type: "spring", stiffness: 90, damping: 22 } as const}
//             className="mt-3 max-w-2xl text-white/85"
//           >
//             {category.subtitle}
//           </motion.p>
//         </div>
//       </div>

//       {/* CATEGORY DESCRIPTION */}
//       <div className="mx-auto max-w-7xl px-6 py-12">
//         <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
//           <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
//             <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//               ABOUT THIS CATEGORY
//             </div>
//             <div className="mt-4 text-lg leading-8 text-slate-700">
//               {category.intro}
//             </div>

//             <div className="mt-7 grid gap-3 md:grid-cols-3">
//               <MiniList title="Highlights" items={category.highlights} />
//               <MiniList title="Best For" items={category.bestFor} />
//               <MiniList title="Places" items={category.samplePlaces} />
//             </div>
//           </div>

//           <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
//             <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//               QUICK FAQ
//             </div>
//             <div className="mt-5 space-y-5">
//               {category.faqs.slice(0, 3).map((f) => (
//                 <div key={f.q}>
//                   <div className="font-semibold text-slate-900">{f.q}</div>
//                   <div className="mt-2 text-slate-600">{f.a}</div>
//                 </div>
//               ))}
//             </div>

//             <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0b2b5b] px-6 py-3 text-sm font-semibold text-white">
//               Request a Quote <ArrowUpRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* PACKAGES GRID */}
//       <div className="mx-auto max-w-7xl px-6 pb-16">
//         <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
//           PACKAGES
//         </div>
//         <div className="mt-2 text-2xl font-semibold text-slate-900">
//           {packages.length} tours in this category
//         </div>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {packages.map((p) => {
//             const detail = PACKAGE_DETAILS.find((x) => x.id === p.id);

//             const rating = detail?.rating ?? 5.0;
//             const reviewsCount = detail?.reviewsCount ?? 20;
//             const recommendedPercent = detail?.recommendedPercent ?? 100;
//             const freeCancellation =
//               detail?.freeCancellation ??
//               "Free cancellation available based on booking conditions.";
//             const pickupText =
//               detail?.pickupText ?? "Airport / hotel pickup available";

//             return (
//               <div
//                 key={p.id}
//                 className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//               >
//                 <div className="relative h-44 w-full overflow-hidden">
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

//                   <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
//                     From ${p.basePrice.toLocaleString()}
//                   </div>

//                   <button
//                     onClick={() => router.push(`/packages/${p.id}`)}
//                     className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm"
//                   >
//                     <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white">
//                       <ArrowUpRight className="h-4 w-4" />
//                     </span>
//                     EXPLORE
//                   </button>

//                   <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
//                       <Star className="h-3.5 w-3.5 fill-white text-white" />
//                       {rating.toFixed(1)}
//                     </span>

//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
//                       {reviewsCount} reviews
//                     </span>

//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
//                       <CircleCheckBig className="h-3.5 w-3.5" />
//                       {recommendedPercent}% recommend
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//                     PACKAGE #{p.no}
//                   </div>

//                   <div className="mt-2 text-lg font-semibold text-slate-900">
//                     {p.name}
//                   </div>
//                   <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>

//                   <p className="mt-4 text-sm leading-6 text-slate-700 line-clamp-3">
//                     {p.description}
//                   </p>

//                   <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-700">
//                     <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
//                       <Clock className="h-4 w-4" />
//                       {p.duration}
//                     </span>
//                     <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
//                       <Star className="h-4 w-4" />
//                       {p.accommodation}
//                     </span>
//                   </div>

//                   <div className="mt-4 space-y-2">
//                     <div className="flex items-start gap-2 text-sm text-slate-700">
//                       <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-600" />
//                       <span className="line-clamp-1">{freeCancellation}</span>
//                     </div>

//                     <div className="flex items-start gap-2 text-sm text-slate-700">
//                       <CarFront className="mt-0.5 h-4 w-4 text-[#0b2b5b]" />
//                       <span className="line-clamp-1">{pickupText}</span>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => router.push(`/packages/${p.id}`)}
//                     className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0b2b5b] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
//                   >
//                     EXPLORE PACKAGE
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function MiniList({ title, items }: { title: string; items: string[] }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-4">
//       <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//         {title}
//       </div>
//       <ul className="mt-3 space-y-2 text-sm text-slate-700">
//         {items.slice(0, 4).map((x) => (
//           <li key={x}>• {x}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }