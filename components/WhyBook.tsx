// "use client";

// import React, { useMemo, useRef, useState } from "react";
// import {
//   motion,
//   Variants,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import {
//   Headset,
//   ShieldCheck,
//   MapPinned,
//   CalendarCheck,
//   Car,
//   Star,
// } from "lucide-react";

// type Stat = { big: string; label: string; sub?: string };

// const STATS: Stat[] = [
//   { big: "5.0", label: "GUEST RATING", sub: "TripAdvisor" },
//   { big: "8+", label: "REVIEWS", sub: "Verified guests" },
//   { big: "100%", label: "PRIVATE TOURS", sub: "Tailor-made trips" },
//   { big: "24/7", label: "WHATSAPP SUPPORT", sub: "Quick responses" },
// ];

// export default function WhyBookPrathibha() {
//   // Detect scroll direction
//   const { scrollY } = useScroll();
//   const lastY = useRef(0);
//   const [dir, setDir] = useState<"down" | "up">("down");

//   useMotionValueEvent(scrollY, "change", (y) => {
//     const prev = lastY.current;
//     if (y > prev + 2) setDir("down");
//     else if (y < prev - 2) setDir("up");
//     lastY.current = y;
//   });

//   // ✅ Slower spring (less stiffness + more damping)
//   const slowSpring = { type: "spring", stiffness: 110, damping: 22, mass: 1.1 } as const;

//   // ✅ Slower stagger
//   const listContainer: Variants = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
//   };

//   // Left / Right enter direction depends on scroll direction
//   const leftVariants: Variants = useMemo(
//     () => ({
//       hidden:
//         dir === "down"
//           ? { opacity: 0, x: -40, y: -40, filter: "blur(10px)" } // top-left
//           : { opacity: 0, x: -40, y: 40, filter: "blur(10px)" }, // bottom-left
//       show: {
//         opacity: 1,
//         x: 0,
//         y: 0,
//         filter: "blur(0px)",
//         transition: slowSpring,
//       },
//     }),
//     [dir]
//   );

//   const rightVariants: Variants = useMemo(
//     () => ({
//       hidden:
//         dir === "down"
//           ? { opacity: 0, x: 40, y: 40, filter: "blur(10px)" } // bottom-right
//           : { opacity: 0, x: 40, y: -40, filter: "blur(10px)" }, // top-right
//       show: {
//         opacity: 1,
//         x: 0,
//         y: 0,
//         filter: "blur(0px)",
//         transition: slowSpring,
//       },
//     }),
//     [dir]
//   );

//   // ✅ Slower row reveal
//   const rowItem: Variants = {
//     hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
//     show: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: slowSpring,
//     },
//   };

//   // ✅ Slower hover lift
//   const hoverLift = {
//     whileHover: { y: -2, transition: { ...slowSpring } },
//     whileTap: { scale: 0.99 },
//   } as const;

//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
//         <div className="grid gap-8 md:grid-cols-2 md:gap-10">
//           {/* LEFT */}
//           <motion.div
//             variants={leftVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0.25 }}
//           >
//             <h3 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
//               Why Book with <span className="block">Prathibha Lanka Voyages?</span>
//             </h3>

//             <motion.div
//               className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200"
//               variants={listContainer}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.3 }}
//             >
//               <Row {...hoverLift} variants={rowItem} icon={<ShieldCheck className="h-4 w-4" />} title="Safe, reliable travel" desc="Comfortable vehicles and careful trip planning." />
//               <Row {...hoverLift} variants={rowItem} icon={<Headset className="h-4 w-4" />} title="Fast support" desc="WhatsApp help before & during your trip." />
//               <Row {...hoverLift} variants={rowItem} icon={<CalendarCheck className="h-4 w-4" />} title="Flexible itineraries" desc="Adjust the schedule to your pace." />
//               <Row {...hoverLift} variants={rowItem} icon={<MapPinned className="h-4 w-4" />} title="Local insight" desc="Hand-picked routes & authentic experiences." />
//               <Row {...hoverLift} variants={rowItem} icon={<Car className="h-4 w-4" />} title="Stress-free logistics" desc="Transport, timing, and stops handled end-to-end." />
//               <Row {...hoverLift} variants={rowItem} icon={<Star className="h-4 w-4" />} title="Top-rated by guests" desc="5.0 rating with growing TripAdvisor reviews." />
//             </motion.div>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             className="md:pt-2"
//             variants={rightVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0.25 }}
//           >
//             <p className="max-w-lg text-base leading-7 text-slate-600">
//               We customize each itinerary for couples, families, and solo travelers
//               — friendly guidance with smooth planning.
//             </p>

//             <motion.div
//               className="mt-6 grid grid-cols-2 gap-4"
//               variants={listContainer}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.3 }}
//             >
//               {STATS.map((s) => (
//                 <StatCard key={s.label} stat={s} slowSpring={slowSpring} />
//               ))}
//             </motion.div>

//             <p className="mt-4 text-xs text-slate-500">
//               Stats include TripAdvisor rating/reviews for Prathibha Lanka Voyages.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Row({
//   icon,
//   title,
//   desc,
//   variants,
//   whileHover,
//   whileTap,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   desc: string;
//   variants: Variants;
//   whileHover?: any;
//   whileTap?: any;
// }) {
//   return (
//     <motion.div
//       variants={variants}
//       className="flex gap-3 p-4 md:p-4"
//       whileHover={whileHover}
//       whileTap={whileTap}
//     >
//       <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-900 ring-1 ring-slate-200">
//         {icon}
//       </div>
//       <div>
//         <div className="text-sm font-semibold text-slate-900">{title}</div>
//         <div className="mt-0.5 text-sm leading-6 text-slate-600">{desc}</div>
//       </div>
//     </motion.div>
//   );
// }

// function StatCard({
//   stat,
//   slowSpring,
// }: {
//   stat: Stat;
//   slowSpring: { type: "spring"; stiffness: number; damping: number; mass: number };
// }) {
//   return (
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
//         show: { opacity: 1, y: 0, filter: "blur(0px)", transition: slowSpring },
//       }}
//       className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
//       whileHover={{ y: -2, transition: slowSpring }}
//       whileTap={{ scale: 0.99 }}
//     >
//       <div className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
//         {stat.big}
//       </div>
//       <div className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-slate-500">
//         {stat.label}
//       </div>
//       {stat.sub ? <div className="mt-1 text-xs text-slate-600">{stat.sub}</div> : null}
//     </motion.div>
//   );
// }



"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  Variants,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  Headset,
  ShieldCheck,
  MapPinned,
  CalendarCheck,
  Car,
  Star,
} from "lucide-react";

type Stat = { big: string; label: string; sub?: string };

const STATS: Stat[] = [
  { big: "5.0", label: "GUEST RATING", sub: "TripAdvisor" },
  { big: "8+", label: "REVIEWS", sub: "Verified guests" },
  { big: "100%", label: "PRIVATE TOURS", sub: "Tailor-made trips" },
  { big: "24/7", label: "WHATSAPP SUPPORT", sub: "Quick responses" },
];

export default function WhyBookPrathibha() {
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const [dir, setDir] = useState<"down" | "up">("down");

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = lastY.current;
    if (y > prev + 2) setDir("down");
    else if (y < prev - 2) setDir("up");
    lastY.current = y;
  });

  const slowSpring = {
    type: "spring",
    stiffness: 110,
    damping: 22,
    mass: 1.1,
  } as const;

  const listContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const leftVariants: Variants = useMemo(
    () => ({
      hidden:
        dir === "down"
          ? { opacity: 0, x: -40, y: -40, filter: "blur(10px)" }
          : { opacity: 0, x: -40, y: 40, filter: "blur(10px)" },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        transition: slowSpring,
      },
    }),
    [dir]
  );

  const rightVariants: Variants = useMemo(
    () => ({
      hidden:
        dir === "down"
          ? { opacity: 0, x: 40, y: 40, filter: "blur(10px)" }
          : { opacity: 0, x: 40, y: -40, filter: "blur(10px)" },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        transition: slowSpring,
      },
    }),
    [dir]
  );

  const rowItem: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: slowSpring,
    },
  };

  const hoverLift = {
    whileHover: { y: -2, transition: { ...slowSpring } },
    whileTap: { scale: 0.99 },
  } as const;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f9fcfa_0%,#f3f8f5_100%)] py-20 md:py-24">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#cf5b8a]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#f0ab1d]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          {/* LEFT */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="mb-5 inline-flex rounded-full bg-[#e9f6ef] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#035c35] md:text-xs">
              Why Choose Us
            </div>

            <h3
              className="text-3xl font-semibold leading-tight text-[#17352a] md:text-4xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Why Book with
              <span className="block text-[#067a47]">
                Prathibha Lanka Voyages?
              </span>
            </h3>

            <motion.div
              className="mt-8 overflow-hidden rounded-[28px] border border-[#067a47]/10 bg-white/85 shadow-[0_24px_70px_rgba(4,61,36,0.08)] backdrop-blur-sm"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Row
                {...hoverLift}
                variants={rowItem}
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Safe, reliable travel"
                desc="Comfortable vehicles and careful trip planning."
              />
              <Row
                {...hoverLift}
                variants={rowItem}
                icon={<Headset className="h-4 w-4" />}
                title="Fast support"
                desc="WhatsApp help before and during your trip."
              />
              <Row
                {...hoverLift}
                variants={rowItem}
                icon={<CalendarCheck className="h-4 w-4" />}
                title="Flexible itineraries"
                desc="Adjust the schedule to your pace and preferences."
              />
              <Row
                {...hoverLift}
                variants={rowItem}
                icon={<MapPinned className="h-4 w-4" />}
                title="Local insight"
                desc="Hand-picked routes and authentic experiences."
              />
              <Row
                {...hoverLift}
                variants={rowItem}
                icon={<Car className="h-4 w-4" />}
                title="Stress-free logistics"
                desc="Transport, timing, and stops handled end-to-end."
              />
              <Row
                {...hoverLift}
                variants={rowItem}
                icon={<Star className="h-4 w-4" />}
                title="Top-rated by guests"
                desc="5.0 rating with growing TripAdvisor reviews."
              />
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="md:pt-8"
            variants={rightVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <p className="max-w-lg text-base leading-8 text-[#5f756b] md:text-lg">
              We customize each itinerary for couples, families, and solo
              travelers — combining friendly guidance, elegant planning, and a
              smooth travel experience from beginning to end.
            </p>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {STATS.map((s) => (
                <StatCard key={s.label} stat={s} slowSpring={slowSpring} />
              ))}
            </motion.div>

            <p className="mt-5 text-xs tracking-wide text-[#7c8f86]">
              Stats include TripAdvisor rating and reviews for Prathibha Lanka
              Voyages.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  title,
  desc,
  variants,
  whileHover,
  whileTap,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  variants: Variants;
  whileHover?: any;
  whileTap?: any;
}) {
  return (
    <motion.div
      variants={variants}
      className="flex gap-4 border-b border-[#067a47]/8 p-5 last:border-b-0 md:p-5"
      whileHover={whileHover}
      whileTap={whileTap}
    >
      <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(6,122,71,0.12),rgba(240,171,29,0.18))] text-[#035c35] ring-1 ring-[#067a47]/10">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-[#17352a] md:text-base">
          {title}
        </div>
        <div className="mt-1 text-sm leading-7 text-[#5f756b]">{desc}</div>
      </div>
    </motion.div>
  );
}

function StatCard({
  stat,
  slowSpring,
}: {
  stat: Stat;
  slowSpring: { type: "spring"; stiffness: number; damping: number; mass: number };
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: slowSpring,
        },
      }}
      className="rounded-[24px] border border-[#067a47]/10 bg-white/90 p-5 shadow-[0_16px_40px_rgba(4,61,36,0.08)]"
      whileHover={{ y: -2, transition: slowSpring }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="text-3xl font-semibold tracking-tight text-[#17352a] md:text-4xl">
        {stat.big}
      </div>
      <div className="mt-2 text-[11px] font-bold tracking-[0.16em] text-[#b98716]">
        {stat.label}
      </div>
      {stat.sub ? (
        <div className="mt-1 text-xs text-[#5f756b]">{stat.sub}</div>
      ) : null}
    </motion.div>
  );
}