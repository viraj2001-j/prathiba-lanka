"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

type Category = { id: string; title: string; image: string };

const CATEGORIES: Category[] = [
  {
    id: "beach",
    title: "BEACH TOURS",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "cultural",
    title: "CULTURAL TOURS",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "wildlife",
    title: "WILDLIFE TOURS",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "family",
    title: "FAMILY TOURS",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2000&q=80",
  },
];

export default function TourCategoriesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  const inView = useInView(sectionRef, { amount: 0.3, once: true });

  const [active, setActive] = useState(0);

  const { scrollXProgress } = useScroll({ container: railRef });
  const drift = useTransform(scrollXProgress, [0, 1], [0, -18]);

  const scrollByCard = (dir: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card='true']");
    const w = card?.offsetWidth ?? 420;
    rail.scrollBy({ left: dir * (w + 24), behavior: "smooth" });
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const handle = () => {
      const cards = Array.from(
        rail.querySelectorAll<HTMLElement>("[data-card='true']")
      );
      const railRect = rail.getBoundingClientRect();
      const centerX = railRect.left + railRect.width / 2;

      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      cards.forEach((el, idx) => {
        const r = el.getBoundingClientRect();
        const elCenter = r.left + r.width / 2;
        const d = Math.abs(centerX - elCenter);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = idx;
        }
      });

      setActive(bestIdx);
    };

    handle();
    rail.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      rail.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const slowSpring = useMemo(
    () =>
      ({
        type: "spring",
        stiffness: 110,
        damping: 22,
        mass: 1.1,
      } as const),
    []
  );

  const headerAnim = useMemo(
    () =>
      ({
        hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: slowSpring,
        },
      } as const),
    [slowSpring]
  );

  const cardAnim = useMemo(
    () =>
      ({
        hidden: {
          opacity: 0,
          y: 26,
          clipPath: "inset(16% 10% 20% 10% round 24px)",
          filter: "blur(14px)",
        },
        show: {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          filter: "blur(0px)",
          transition: {
            duration: 0.75,
            ease: [0.2, 0.8, 0.2, 1],
          } as const,
        },
      } as const),
    []
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#cfeefe]">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-white/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid items-start gap-8 md:grid-cols-[260px_1fr_200px]">
          <motion.div
            variants={headerAnim}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="text-5xl font-semibold tracking-tight text-slate-900">
              Tour
            </div>
            <div className="text-5xl font-light tracking-tight text-slate-900">
              Categories
            </div>
          </motion.div>

          <motion.p
            variants={headerAnim}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.08 }}
            className="max-w-xl pt-3 text-base leading-7 text-slate-700/90"
          >
            As Sri Lanka’s leading travel agency, we craft seamless journeys to
            iconic and hidden destinations.
          </motion.p>

          <motion.div
            variants={headerAnim}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.14 }}
            className="flex items-center justify-start md:justify-end"
          >
            <button
              className="group inline-flex items-center gap-4 rounded-full bg-transparent"
              onClick={() => scrollByCard(1)}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0b2b5b] text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.06]">
                <Plus className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold tracking-[0.22em] text-[#0b2b5b]">
                EXPLORE
              </span>
            </button>
          </motion.div>
        </div>

        <div className="relative mt-10">
          <button
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 p-3 shadow-sm ring-1 ring-slate-200/70 backdrop-blur transition hover:bg-white"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>

          <button
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 p-3 shadow-sm ring-1 ring-slate-200/70 backdrop-blur transition hover:bg-white"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </button>

          <motion.div style={{ y: drift }} className="relative">
            <div
              ref={railRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {CATEGORIES.map((c, idx) => (
                <CategoryCard
                  key={c.id}
                  c={c}
                  idx={idx}
                  active={active}
                  inView={inView}
                  cardAnim={cardAnim}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  c,
  idx,
  active,
  inView,
  cardAnim,
}: {
  c: Category;
  idx: number;
  active: number;
  inView: boolean;
  cardAnim: any;
}) {
  const isActive = idx === active;

  const shine = {
    initial: { x: "-120%" },
    hover: {
      x: "120%",
      transition: { duration: 0.9, ease: "easeInOut" } as const,
    },
  } as const;

  return (
    <motion.div
      data-card="true"
      variants={cardAnim}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay: 0.12 + idx * 0.06 }}
      className="group relative shrink-0 overflow-hidden rounded-3xl shadow-[0_16px_40px_rgba(2,8,23,0.10)]"
      style={{ width: "min(420px, 78vw)", height: "min(520px, 62vh)" }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isActive ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 } as const}
      >
        <motion.img
          src={c.image}
          alt={c.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } as const}
        />
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Shine sweep */}
      <motion.div
        variants={shine}
        initial="initial"
        whileHover="hover"
        className="pointer-events-none absolute -top-24 left-0 h-56 w-40 rotate-12 bg-white/18 blur-xl"
      />

      {/* ✅ Explore button (icon + text) */}
      <motion.button
        type="button"
        onClick={() => console.log("Explore:", c.id)}
        className="
          absolute right-5 top-5 z-10 inline-flex items-center gap-2
          rounded-full bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em]
          text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm
        "
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + idx * 0.05 } as const}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white">
          <Plus className="h-4 w-4" />
        </span>
        EXPLORE
      </motion.button>

      {/* Label */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-end justify-between gap-4">
          <div className="text-xl font-semibold tracking-tight text-white drop-shadow">
            {c.title}
          </div>
          <div className="hidden h-px flex-1 bg-white/45 md:block" />
        </div>
      </div>

      {/* Active ring */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        animate={{
          boxShadow: isActive
            ? "0 0 0 1px rgba(255,255,255,0.35) inset"
            : "0 0 0 1px rgba(255,255,255,0) inset",
        }}
        transition={{ duration: 0.25 } as const}
      />

      {/* ✅ On hover: show button stronger */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}