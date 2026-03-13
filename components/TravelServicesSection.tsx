// // "use client";

// // import React, { useEffect, useMemo, useRef, useState } from "react";
// // import {
// //   motion,
// //   useInView,
// //   useScroll,
// //   useTransform,
// //   useMotionValueEvent,
// // } from "framer-motion";
// // import { Plus, ArrowUpRight } from "lucide-react";
// // import { useRouter } from "next/navigation";

// // // ✅ import your real packages list
// // import { PACKAGES } from "@/src/data/packageDetails";

// // type PackageCard = {
// //   id: string;
// //   tag: string;
// //   title: string;
// //   duration: string;
// //   image: string;
// //   badge?: string;
// // };

// // export default function TourPackagesSection() {
// //   const router = useRouter();

// //   const sectionRef = useRef<HTMLElement | null>(null);
// //   const inView = useInView(sectionRef, { amount: 0.25, once: true });

// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"],
// //   });

// //   const { scrollY } = useScroll();
// //   const lastY = useRef(0);
// //   const [dir, setDir] = useState<"down" | "up">("down");

// //   useMotionValueEvent(scrollY, "change", (y) => {
// //     const prev = lastY.current;
// //     if (y > prev + 2) setDir("down");
// //     else if (y < prev - 2) setDir("up");
// //     lastY.current = y;
// //   });

// //   const watermarkY = useTransform(scrollYProgress, [0, 1], [300, -200]);
// //   const watermarkOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [0, 1, 1]);

// //   const darkFrom = 0.65;
// //   const darkTo = 0.06;
// //   const darkOverlayOpacity = useTransform(
// //     scrollYProgress,
// //     [0, 1],
// //     dir === "up" ? [darkFrom, darkTo] : [darkTo, darkFrom]
// //   );

// //   const mistOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.28, 0.18, 0.28]);

// //   const slowSpring = useMemo(
// //     () => ({ type: "spring", stiffness: 90, damping: 22, mass: 1.2 } as const),
// //     []
// //   );

// //   const wrap = useMemo(
// //     () =>
// //       ({
// //         hidden: {},
// //         show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
// //       } as const),
// //     []
// //   );

// //   const fadeUp = useMemo(
// //     () =>
// //       ({
// //         hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
// //         show: { opacity: 1, y: 0, filter: "blur(0px)", transition: slowSpring },
// //       } as const),
// //     [slowSpring]
// //   );

// //   const cardIn = useMemo(
// //     () =>
// //       ({
// //         hidden: {
// //           opacity: 0,
// //           y: 28,
// //           scale: 0.98,
// //           filter: "blur(14px)",
// //           clipPath: "inset(14% 10% 18% 10% round 26px)",
// //         },
// //         show: {
// //           opacity: 1,
// //           y: 0,
// //           scale: 1,
// //           filter: "blur(0px)",
// //           clipPath: "inset(0% 0% 0% 0% round 26px)",
// //           transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] },
// //         },
// //       } as const),
// //     []
// //   );

// //   return (
// //     <section ref={sectionRef} className="relative overflow-hidden bg-[#eaf2fb]">
// //       {/* Background */}
// //       <div className="absolute inset-0">
// //         <img
// //           src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80"
// //           alt="Forest background"
// //           className="h-full w-full object-cover"
// //         />

// //         <motion.div aria-hidden="true" className="absolute inset-0 bg-black" style={{ opacity: darkOverlayOpacity }} />

// //         <motion.div
// //           aria-hidden="true"
// //           className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.65),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.35),transparent_55%)]"
// //           style={{ opacity: mistOpacity }}
// //         />
// //       </div>

// //       <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
// //         {/* Watermark */}
// //         <motion.div
// //           aria-hidden="true"
// //           className="pointer-events-none absolute left-1/2 top-6 w-full -translate-x-1/2 text-center"
// //           style={{ y: watermarkY, opacity: watermarkOpacity }}
// //         >
// //           <div className="select-none text-[72px] font-semibold tracking-tight text-slate-200/80 md:text-[140px] lg:text-[170px]">
// //             unforgettable
// //           </div>
// //         </motion.div>

// //         {/* Header */}
// //         <motion.div
// //           className="relative mx-auto mt-16 max-w-3xl text-center md:mt-28"
// //           variants={wrap}
// //           initial="hidden"
// //           animate={inView ? "show" : "hidden"}
// //         >
// //           <motion.h2 variants={fadeUp} className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
// //             Tour Packages
// //           </motion.h2>

// //           <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-800/90 md:text-lg">
// //             Embark on an unforgettable journey through Sri Lanka’s stunning landscapes,
// //             rich history, and culture. Whether it be adventure or relaxation, we craft
// //             seamless, tailor-made experiences just for you.
// //           </motion.p>

// //           {/* ✅ Common Explore => All Packages page */}
// //           <motion.div variants={fadeUp} className="mt-10 flex justify-center">
// //             <button
// //               type="button"
// //               onClick={() => router.push("/packages")}
// //               className="group inline-flex items-center gap-4 rounded-full"
// //             >
// //               <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0b2b5b] text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.06]">
// //                 <Plus className="h-6 w-6" />
// //               </span>
// //               <span className="text-sm font-semibold tracking-[0.22em] text-[#0b2b5b]">EXPLORE</span>
// //             </button>
// //           </motion.div>
// //         </motion.div>

// //         {/* Cards */}
// //         <motion.div
// //           className="relative mt-14 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
// //           variants={wrap}
// //           initial="hidden"
// //           animate={inView ? "show" : "hidden"}
// //         >
// //           {PACKAGES.map((p, i) => (
// //             <PackageCardView
// //               key={p.id}
// //               p={{
// //                 id: p.id,
// //                 tag: `PACKAGE #${p.no}`,
// //                 title: p.name,
// //                 duration: p.duration,
// //                 image: p.image,
// //                 badge: p.no === 1 ? "MOST\nPOPULAR\nTOUR" : undefined,
// //               }}
// //               i={i}
// //               cardIn={cardIn}
// //               onExplore={(id) => router.push(`/packages/${id}`)} // ✅ Card explore => details page
// //             />
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // function PackageCardView({
// //   p,
// //   i,
// //   cardIn,
// //   onExplore,
// // }: {
// //   p: PackageCard;
// //   i: number;
// //   cardIn: any;
// //   onExplore: (id: string) => void;
// // }) {
// //   const shine = useMemo(
// //     () =>
// //       ({
// //         initial: { x: "-120%" },
// //         hover: { x: "120%", transition: { duration: 0.9, ease: "easeInOut" } },
// //       } as const),
// //     []
// //   );

// //   return (
// //     <motion.div
// //       variants={cardIn}
// //       transition={{ delay: 0.06 * i }}
// //       className="group relative overflow-hidden rounded-3xl bg-slate-200 shadow-[0_18px_50px_rgba(2,8,23,0.18)]"
// //       style={{ height: 360 }}
// //       whileHover={{ y: -8 }}
// //       whileTap={{ scale: 0.99 }}
// //     >
// //       <motion.img
// //         src={p.image}
// //         alt={p.title}
// //         className="absolute inset-0 h-full w-full object-cover"
// //         whileHover={{ scale: 1.08 }}
// //         transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
// //       />

// //       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15" />

// //       <motion.div
// //         aria-hidden="true"
// //         className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
// //         initial={{ x: -10, y: -10, opacity: 0.35 }}
// //         whileHover={{ x: 18, y: 12, opacity: 0.55 }}
// //         transition={{ duration: 1.1, ease: "easeOut" }}
// //       />

// //       <motion.div
// //         variants={shine}
// //         initial="initial"
// //         whileHover="hover"
// //         className="pointer-events-none absolute -top-24 left-0 h-56 w-44 rotate-12 bg-white/18 blur-xl"
// //       />

// //       {p.badge ? (
// //         <div className="absolute left-6 top-6">
// //           <div className="whitespace-pre-line rounded-2xl bg-[#c4572a] px-6 py-5 text-base font-semibold tracking-tight text-white shadow-sm">
// //             {p.badge}
// //           </div>
// //         </div>
// //       ) : null}

// //       {/* ✅ Card Explore => /packages/[id] */}
// //       <button
// //         type="button"
// //         onClick={() => onExplore(p.id)}
// //         className="
// //           absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full
// //           bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em]
// //           text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm
// //           opacity-0 -translate-y-2 transition
// //           group-hover:opacity-100 group-hover:translate-y-0
// //         "
// //       >
// //         <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white">
// //           <ArrowUpRight className="h-4 w-4" />
// //         </span>
// //         EXPLORE
// //       </button>

// //       <div className="absolute bottom-7 left-7 right-7">
// //         <div className="text-xs font-semibold tracking-[0.18em] text-white/85">{p.tag}</div>

// //         <div className="mt-3 flex items-center gap-4">
// //           <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">{p.title}</div>
// //           <div className="h-px flex-1 bg-white/40" />
// //         </div>

// //         <div className="mt-4 text-base text-white/85">{p.duration}</div>
// //       </div>

// //       <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
// //     </motion.div>
// //   );
// // }



// "use client";

// import React, { useMemo, useRef, useState } from "react";
// import {
//   motion,
//   useInView,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
// } from "framer-motion";
// import { Plus, ArrowUpRight } from "lucide-react";
// import { useRouter } from "next/navigation";

// import { PACKAGES } from "@/src/data/packageDetails";

// type PackageCard = {
//   id: string;
//   tag: string;
//   title: string;
//   duration: string;
//   image: string;
//   badge?: string;
// };

// export default function TourPackagesSection() {
//   const router = useRouter();

//   const sectionRef = useRef<HTMLElement | null>(null);
//   const inView = useInView(sectionRef, { amount: 0.25, once: true });

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const { scrollY } = useScroll();
//   const lastY = useRef(0);
//   const [dir, setDir] = useState<"down" | "up">("down");

//   useMotionValueEvent(scrollY, "change", (y) => {
//     const prev = lastY.current;
//     if (y > prev + 2) setDir("down");
//     else if (y < prev - 2) setDir("up");
//     lastY.current = y;
//   });

//   const watermarkY = useTransform(scrollYProgress, [0, 1], [300, -200]);
//   const watermarkOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [0, 1, 1]);

//   const darkFrom = 0.65;
//   const darkTo = 0.06;
//   const darkOverlayOpacity = useTransform(
//     scrollYProgress,
//     [0, 1],
//     dir === "up" ? [darkFrom, darkTo] : [darkTo, darkFrom]
//   );

//   const mistOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.28, 0.18, 0.28]);

//   const slowSpring = useMemo(
//     () => ({ type: "spring", stiffness: 90, damping: 22, mass: 1.2 } as const),
//     []
//   );

//   const wrap = useMemo(
//     () =>
//       ({
//         hidden: {},
//         show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
//       } as const),
//     []
//   );

//   const fadeUp = useMemo(
//     () =>
//       ({
//         hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
//         show: { opacity: 1, y: 0, filter: "blur(0px)", transition: slowSpring },
//       } as const),
//     [slowSpring]
//   );

//   const cardIn = useMemo(
//     () =>
//       ({
//         hidden: {
//           opacity: 0,
//           y: 28,
//           scale: 0.98,
//           filter: "blur(14px)",
//           clipPath: "inset(14% 10% 18% 10% round 26px)",
//         },
//         show: {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           filter: "blur(0px)",
//           clipPath: "inset(0% 0% 0% 0% round 26px)",
//           transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] },
//         },
//       } as const),
//     []
//   );

//   // ✅ ONLY show 6 packages on home section
//   const HOME_PACKAGES = useMemo(() => PACKAGES.slice(0, 6), []);

//   return (
//     <section ref={sectionRef} className="relative overflow-hidden bg-[#eaf2fb]">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80"
//           alt="Forest background"
//           className="h-full w-full object-cover"
//         />

//         <motion.div
//           aria-hidden="true"
//           className="absolute inset-0 bg-black"
//           style={{ opacity: darkOverlayOpacity }}
//         />

//         <motion.div
//           aria-hidden="true"
//           className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.65),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.35),transparent_55%)]"
//           style={{ opacity: mistOpacity }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
//         {/* Watermark */}
//         <motion.div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-1/2 top-6 w-full -translate-x-1/2 text-center"
//           style={{ y: watermarkY, opacity: watermarkOpacity }}
//         >
//           <div className="select-none text-[72px] font-semibold tracking-tight text-slate-200/80 md:text-[140px] lg:text-[170px]">
//             unforgettable
//           </div>
//         </motion.div>

//         {/* Header */}
//         <motion.div
//           className="relative mx-auto mt-16 max-w-3xl text-center md:mt-28"
//           variants={wrap}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//         >
//           <motion.h2
//             variants={fadeUp}
//             className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl"
//           >
//             Tour Packages
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-800/90 md:text-lg"
//           >
//             Embark on an unforgettable journey through Sri Lanka’s stunning landscapes,
//             rich history, and culture. Whether it be adventure or relaxation, we craft
//             seamless, tailor-made experiences just for you.
//           </motion.p>

//           {/* Common Explore => All Packages page */}
//           <motion.div variants={fadeUp} className="mt-10 flex justify-center">
//             <button
//               type="button"
//               onClick={() => router.push("/packages")}
//               className="group inline-flex items-center gap-4 rounded-full"
//             >
//               <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0b2b5b] text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.06]">
//                 <Plus className="h-6 w-6" />
//               </span>
//               <span className="text-sm font-semibold tracking-[0.22em] text-[#0b2b5b]">
//                 EXPLORE
//               </span>
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           className="relative mt-14 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
//           variants={wrap}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//         >
//           {HOME_PACKAGES.map((p, i) => (
//             <PackageCardView
//               key={p.id}
//               p={{
//                 id: p.id,
//                 tag: `PACKAGE #${p.no}`,
//                 title: p.name,
//                 duration: p.duration,
//                 image: p.image,
//                 badge: p.no === 1 ? "MOST\nPOPULAR\nTOUR" : undefined,
//               }}
//               i={i}
//               cardIn={cardIn}
//               onExplore={(id) => router.push(`/packages/${id}`)}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function PackageCardView({
//   p,
//   i,
//   cardIn,
//   onExplore,
// }: {
//   p: PackageCard;
//   i: number;
//   cardIn: any;
//   onExplore: (id: string) => void;
// }) {
//   const shine = useMemo(
//     () =>
//       ({
//         initial: { x: "-120%" },
//         hover: { x: "120%", transition: { duration: 0.9, ease: "easeInOut" } },
//       } as const),
//     []
//   );

//   return (
//     <motion.div
//       variants={cardIn}
//       transition={{ delay: 0.06 * i }}
//       className="group relative overflow-hidden rounded-3xl bg-slate-200 shadow-[0_18px_50px_rgba(2,8,23,0.18)]"
//       style={{ height: 360 }}
//       whileHover={{ y: -8 }}
//       whileTap={{ scale: 0.99 }}
//     >
//       <motion.img
//         src={p.image}
//         alt={p.title}
//         className="absolute inset-0 h-full w-full object-cover"
//         whileHover={{ scale: 1.08 }}
//         transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
//       />

//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15" />

//       <motion.div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
//         initial={{ x: -10, y: -10, opacity: 0.35 }}
//         whileHover={{ x: 18, y: 12, opacity: 0.55 }}
//         transition={{ duration: 1.1, ease: "easeOut" }}
//       />

//       <motion.div
//         variants={shine}
//         initial="initial"
//         whileHover="hover"
//         className="pointer-events-none absolute -top-24 left-0 h-56 w-44 rotate-12 bg-white/18 blur-xl"
//       />

//       {p.badge ? (
//         <div className="absolute left-6 top-6">
//           <div className="whitespace-pre-line rounded-2xl bg-[#c4572a] px-6 py-5 text-base font-semibold tracking-tight text-white shadow-sm">
//             {p.badge}
//           </div>
//         </div>
//       ) : null}

//       <button
//         type="button"
//         onClick={() => onExplore(p.id)}
//         className="
//           absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full
//           bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em]
//           text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm
//           opacity-0 -translate-y-2 transition
//           group-hover:opacity-100 group-hover:translate-y-0
//         "
//       >
//         <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white">
//           <ArrowUpRight className="h-4 w-4" />
//         </span>
//         EXPLORE
//       </button>

//       <div className="absolute bottom-7 left-7 right-7">
//         <div className="text-xs font-semibold tracking-[0.18em] text-white/85">
//           {p.tag}
//         </div>

//         <div className="mt-3 flex items-center gap-4">
//           <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">
//             {p.title}
//           </div>
//           <div className="h-px flex-1 bg-white/40" />
//         </div>

//         <div className="mt-4 text-base text-white/85">{p.duration}</div>
//       </div>

//       <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
//     </motion.div>
//   );
// }




"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { PACKAGES } from "@/src/data/packageDetails";

type PackageCard = {
  id: string;
  tag: string;
  title: string;
  duration: string;
  image: string;
  badge?: string;
};

export default function TourPackagesSection() {
  const router = useRouter();

  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const [dir, setDir] = useState<"down" | "up">("down");

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = lastY.current;
    if (y > prev + 2) setDir("down");
    else if (y < prev - 2) setDir("up");
    lastY.current = y;
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], [300, -200]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [0, 1, 1]);

  const darkFrom = 0.5;
  const darkTo = 0.18;
  const darkOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    dir === "up" ? [darkFrom, darkTo] : [darkTo, darkFrom]
  );

  const mistOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.28, 0.18, 0.28]);

  const slowSpring = useMemo(
    () => ({ type: "spring", stiffness: 90, damping: 22, mass: 1.2 } as const),
    []
  );

  const wrap = useMemo(
    () =>
      ({
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
      } as const),
    []
  );

  const fadeUp = useMemo(
    () =>
      ({
        hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: slowSpring },
      } as const),
    [slowSpring]
  );

  const cardIn = useMemo(
    () =>
      ({
        hidden: {
          opacity: 0,
          y: 28,
          scale: 0.98,
          filter: "blur(14px)",
          clipPath: "inset(14% 10% 18% 10% round 26px)",
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath: "inset(0% 0% 0% 0% round 26px)",
          transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] },
        },
      } as const),
    []
  );

  const HOME_PACKAGES = useMemo(() => PACKAGES.slice(0, 6), []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80"
          alt="Forest background"
          className="h-full w-full object-cover"
        />

        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[#082217]"
          style={{ opacity: darkOverlayOpacity }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,171,29,0.18),transparent_28%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(207,91,138,0.10),transparent_24%)]"
          style={{ opacity: mistOpacity }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Watermark */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-8 w-full -translate-x-1/2 text-center"
          style={{ y: watermarkY, opacity: watermarkOpacity }}
        >
          <div
            className="select-none text-[68px] font-semibold tracking-tight text-white/12 md:text-[130px] lg:text-[160px]"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            journeys
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="relative mx-auto mt-12 max-w-3xl text-center md:mt-24"
          variants={wrap}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md md:text-xs"
          >
            Signature Journeys
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Tour Packages
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg"
          >
            Explore beautifully planned travel experiences through Sri Lanka’s
            scenic landscapes, cultural wonders, and coastal escapes — designed
            for comfort, discovery, and unforgettable moments.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => router.push("/packages")}
              className="group inline-flex items-center gap-4 rounded-full"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-[#067a47] to-[#035c35] text-white shadow-[0_14px_34px_rgba(6,122,71,0.32)] transition-transform duration-300 group-hover:scale-[1.06]">
                <Plus className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold tracking-[0.22em] text-white">
                EXPLORE
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="relative mt-14 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
          variants={wrap}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {HOME_PACKAGES.map((p, i) => (
            <PackageCardView
              key={p.id}
              p={{
                id: p.id,
                tag: `PACKAGE #${p.no}`,
                title: p.name,
                duration: p.duration,
                image: p.image,
                badge: p.no === 1 ? "MOST\nPOPULAR\nTOUR" : undefined,
              }}
              i={i}
              cardIn={cardIn}
              onExplore={(id) => router.push(`/packages/${id}`)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PackageCardView({
  p,
  i,
  cardIn,
  onExplore,
}: {
  p: PackageCard;
  i: number;
  cardIn: any;
  onExplore: (id: string) => void;
}) {
  const shine = useMemo(
    () =>
      ({
        initial: { x: "-120%" },
        hover: { x: "120%", transition: { duration: 0.9, ease: "easeInOut" } },
      } as const),
    []
  );

  return (
    <motion.div
      variants={cardIn}
      transition={{ delay: 0.06 * i }}
      className="group relative overflow-hidden rounded-[30px] bg-slate-200 shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
      style={{ height: 380 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.99 }}
    >
      <motion.img
        src={p.image}
        alt={p.title}
        className="absolute inset-0 h-full w-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071c14]/80 via-[#071c14]/36 to-[#071c14]/10" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        initial={{ x: -10, y: -10, opacity: 0.35 }}
        whileHover={{ x: 18, y: 12, opacity: 0.55 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />

      <motion.div
        variants={shine}
        initial="initial"
        whileHover="hover"
        className="pointer-events-none absolute -top-24 left-0 h-56 w-44 rotate-12 bg-white/18 blur-xl"
      />

      {p.badge ? (
        <div className="absolute left-6 top-6">
          <div className="whitespace-pre-line rounded-[22px] bg-[#f0ab1d] px-6 py-5 text-sm font-semibold tracking-[0.05em] text-[#17352a] shadow-sm">
            {p.badge}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => onExplore(p.id)}
        className="absolute right-5 top-5 z-10 inline-flex -translate-y-2 items-center gap-2 rounded-full border border-white/30 bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#17352a] opacity-0 shadow-sm backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-r from-[#067a47] to-[#035c35] text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
        EXPLORE
      </button>

      <div className="absolute bottom-7 left-7 right-7">
        <div className="text-xs font-semibold tracking-[0.18em] text-white/80">
          {p.tag}
        </div>

        <div className="mt-3 flex items-center gap-4">
          <div
            className="text-xl font-semibold tracking-tight text-white md:text-2xl"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            {p.title}
          </div>
          <div className="h-px flex-1 bg-white/40" />
        </div>

        <div className="mt-4 text-base text-white/85">{p.duration}</div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-white/10" />
    </motion.div>
  );
}