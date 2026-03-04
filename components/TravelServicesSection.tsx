"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

type PackageCard = {
  id: string;
  tag: string;
  title: string;
  duration: string;
  image: string;
  badge?: string;
};

const PACKAGES: PackageCard[] = [
  {
    id: "wild",
    tag: "WILDLIFE TOURS",
    title: "DEEP DIVE INTO THE WILD",
    duration: "16 Nights & 17 Days",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=2200&q=80",
    badge: "MOST\nPOPULAR\nTOUR",
  },
  {
    id: "hills",
    tag: "HILL COUNTRY TOURS",
    title: "A QUICK ESCAPE TO THE HILLS",
    duration: "08 Nights & 09 Days",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2200&q=80",
  },
  {
    id: "family",
    tag: "FAMILY TOURS",
    title: "FAMILY ESCAPADE IN PARADISE",
    duration: "18 Nights & 19 Days",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2200&q=80",
  },
  {
    id: "culture",
    tag: "CULTURAL TOURS",
    title: "THE CULTURAL ODYSSEY",
    duration: "06 Nights & 07 Days",
    image:
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=2200&q=80",
  },
  {
    id: "ayur",
    tag: "AYURVEDIC TOURS",
    title: "WANDER & AWAKEN",
    duration: "10 Nights & 11 Days",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=2200&q=80",
  },
  {
    id: "honey",
    tag: "HONEYMOON TOURS",
    title: "ADVENTURE, CULTURE & LOVE",
    duration: "07 Nights & 08 Days",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80",
  },
];

export default function TourPackagesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: true });

  // ✅ section progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ✅ detect scroll direction (down/up)
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const [dir, setDir] = useState<"down" | "up">("down");

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = lastY.current;
    if (y > prev + 2) setDir("down");
    else if (y < prev - 2) setDir("up");
    lastY.current = y;
  });

  // ✅ watermark moves down -> up
// ✅ watermark moves from LOWER -> MUCH HIGHER
const watermarkY = useTransform(scrollYProgress, [0, 1], [300, -200]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [0, 1, 1]);

  // ✅ DARK overlay that becomes WHITE when scrolling bottom -> top
  // We compute the output range using normal arrays (NOT readonly tuples)
  const darkFrom = 0.65; // darker
  const darkTo = 0.06; // lighter (almost white)
  const darkOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    dir === "up" ? [darkFrom, darkTo] : [darkTo, darkFrom] // <-- FIXED
  );

  // Premium mist always
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

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#eaf2fb]">
      {/* ✅ Forest background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80"
          alt="Forest background"
          className="h-full w-full object-cover"
        />

        {/* ✅ Dark overlay that fades to white when scrolling up */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-black"
          style={{ opacity: darkOverlayOpacity }}
        />

        {/* Mist wash (premium readability) */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.65),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.35),transparent_55%)]"
          style={{ opacity: mistOpacity }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* ✅ Watermark */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-6 w-full -translate-x-1/2 text-center"
          style={{ y: watermarkY, opacity: watermarkOpacity }}
        >
          <div className="select-none text-[72px] font-semibold tracking-tight text-slate-200/80 md:text-[140px] lg:text-[170px]">
            unforgettable
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="relative mx-auto mt-16 max-w-3xl text-center md:mt-28"
          variants={wrap}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl"
          >
            Tour Packages
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-800/90 md:text-lg"
          >
            Embark on an unforgettable journey through Sri Lanka’s stunning landscapes,
            rich history, and culture. Whether it be adventure or relaxation, we craft
            seamless, tailor-made experiences just for you.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <button className="group inline-flex items-center gap-4 rounded-full">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0b2b5b] text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.06]">
                <Plus className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold tracking-[0.22em] text-[#0b2b5b]">
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
          {PACKAGES.map((p, i) => (
            <PackageCardView key={p.id} p={p} i={i} cardIn={cardIn} />
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
}: {
  p: PackageCard;
  i: number;
  cardIn: any;
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
    <motion.a
      href="#"
      variants={cardIn}
      transition={{ delay: 0.06 * i }}
      className="group relative overflow-hidden rounded-3xl bg-slate-200 shadow-[0_18px_50px_rgba(2,8,23,0.18)]"
      style={{ height: 360 }}
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

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15" />

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
          <div className="whitespace-pre-line rounded-2xl bg-[#c4572a] px-6 py-5 text-base font-semibold tracking-tight text-white shadow-sm">
            {p.badge}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          console.log("Explore:", p.id);
        }}
        className="
          absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full
          bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em]
          text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm
          opacity-0 -translate-y-2 transition
          group-hover:opacity-100 group-hover:translate-y-0
        "
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
        EXPLORE
      </button>

      <div className="absolute bottom-7 left-7 right-7">
        <div className="text-xs font-semibold tracking-[0.18em] text-white/85">
          {p.tag}
        </div>

        <div className="mt-3 flex items-center gap-4">
          <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            {p.title}
          </div>
          <div className="h-px flex-1 bg-white/40" />
        </div>

        <div className="mt-4 text-base text-white/85">{p.duration}</div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
    </motion.a>
  );
}