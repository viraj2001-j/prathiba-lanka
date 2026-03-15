

"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Instagram, Play, ChevronLeft, ChevronRight } from "lucide-react";

type Story = {
  id: string;
  title: string;
  thumb: string;
  media: string;
};

const STORIES: Story[] = [
  {
    id: "s1",
    title: "World Tourism Day",
    thumb:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1000&q=80",
    media:
      "images/waterfalls/water_a.jpeg",
  },
  {
    id: "s2",
    title: "Tea Trails",
    thumb:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1000&q=80",
    media:
      "images/waterfalls/lake.jpeg",
  },
  {
    id: "s3",
    title: "Coastal Moments",
    thumb:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80",
    media:
      "images/waterfalls/hills_a.jpeg",
  },
  {
    id: "s4",
    title: "Hill Country Train",
    thumb:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
    media:
      "images/waterfalls/water_d.jpeg",
  },
    {
    id: "s5",
    title: "World Tourism Day",
    thumb:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1000&q=80",
    media:
      "images/other places/sun_down.jpeg",
  },
  {
    id: "s6",
    title: "Tea Trails",
    thumb:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1000&q=80",
    media:
      "images/cultural_places/yapahuwa.jpeg",
  },
  {
    id: "s7",
    title: "Coastal Moments",
    thumb:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80",
    media:
      "images/Beach/beach_n.jpeg",
  },
  {
    id: "s8",
    title: "Hill Country Train",
    thumb:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
    media:
      "images/animals/deer_c.jpeg",
  },
];

export default function VisualStoriesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: true });

  const [active, setActive] = useState(0);
  const current = STORIES[active];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [0, 1, 1]);

  const reelY = useTransform(scrollYProgress, [0, 1], [24, -18]);
  const reelRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const previewY = useTransform(scrollYProgress, [0, 1], [18, -12]);
  const previewScale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);

  const slowSpring = useMemo(
    () => ({ type: "spring", stiffness: 85, damping: 20, mass: 1.2 } as const),
    []
  );

  const headerReveal = useMemo(
    () =>
      ({
        hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: slowSpring },
      } as const),
    [slowSpring]
  );

  const go = (dir: -1 | 1) => {
    setActive((prev) => {
      const next = prev + dir;
      if (next < 0) return STORIES.length - 1;
      if (next >= STORIES.length) return 0;
      return next;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f9fcfa_0%,#f4f8f5_100%)]"
    >
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#cf5b8a]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#f0ab1d]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Watermark */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-8 w-full -translate-x-1/2 text-center"
          style={{ y: watermarkY, opacity: watermarkOpacity }}
        >
          <div
            className="select-none text-[68px] font-semibold tracking-tight text-[#17352a]/6 md:text-[140px] lg:text-[180px]"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            visual stories
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          variants={headerReveal}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative mx-auto mt-6 flex max-w-2xl flex-col items-center text-center md:mt-14"
        >
          <div className="inline-flex rounded-full bg-[#e9f6ef] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#035c35] md:text-xs">
            Social Highlights
          </div>

          <h2
            className="mt-5 text-4xl font-semibold tracking-tight text-[#17352a] md:text-5xl"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Visual Stories
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#5f756b]">
            A glimpse into the mood, beauty, and memorable moments that shape
            every Sri Lankan journey we create.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#067a47]/10 bg-white/80 px-4 py-2 text-sm font-semibold text-[#17352a] shadow-[0_10px_30px_rgba(4,61,36,0.06)] backdrop-blur-sm">
            <Instagram className="h-4 w-4 text-[#cf5b8a]" />
            <a
              href="#"
              className="underline decoration-[#b98716]/40 underline-offset-4 hover:decoration-[#b98716]"
            >
              @prathibhalankavoyages
            </a>
          </div>
        </motion.div>

        <div className="relative mt-16 grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">
          {/* LEFT: reel carousel */}
          <motion.div
            initial={{ opacity: 0, x: -22, filter: "blur(12px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : undefined}
            transition={{ ...slowSpring, delay: 0.05 }}
            className="relative mx-auto lg:mx-0"
            style={{ y: reelY, rotate: reelRotate as any }}
          >
            <div className="relative h-[430px] w-[320px] overflow-hidden rounded-[999px] border border-[#067a47]/10 bg-white/90 shadow-[0_24px_70px_rgba(4,61,36,0.10)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdfc_100%)]" />

              {/* Arrows */}
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#067a47]/10 bg-white/85 p-2 text-[#17352a] backdrop-blur transition hover:bg-white"
                aria-label="Previous story"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#067a47]/10 bg-white/85 p-2 text-[#17352a] backdrop-blur transition hover:bg-white"
                aria-label="Next story"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Slides */}
              <div className="absolute inset-0 grid grid-rows-3 gap-2 p-3">
                {[0, 1, 2].map((slot) => {
                  const idx = (active + slot) % STORIES.length;
                  const s = STORIES[idx];

                  return (
                    <button
                      key={`${s.id}-${slot}`}
                      type="button"
                      onClick={() => setActive(idx)}
                      className={`group relative overflow-hidden rounded-[22px] text-left ring-1 transition ${
                        slot === 0
                          ? "ring-[#067a47]/20"
                          : "ring-transparent hover:ring-[#067a47]/12"
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={s.id}
                          src={s.thumb}
                          alt={s.title}
                          className="h-full w-full object-cover"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        />
                      </AnimatePresence>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071c14]/55 via-[#071c14]/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-[11px] font-semibold tracking-[0.18em] text-white/80">
                          STORY
                        </div>
                        <div className="mt-1 text-sm font-semibold text-white">
                          {s.title}
                        </div>
                      </div>

                      {slot === 0 ? (
                        <motion.div
                          layoutId="activeDot"
                          className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-[#f7d27a]"
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {/* Decorative cut */}
              <div className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-white/95" />
            </div>
          </motion.div>

          {/* RIGHT: preview */}
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
            transition={{ ...slowSpring, delay: 0.12 }}
            className="relative"
            style={{ y: previewY, scale: previewScale }}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/85 p-3 text-[#17352a] backdrop-blur transition hover:bg-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/85 p-3 text-[#17352a] backdrop-blur transition hover:bg-white"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="relative overflow-hidden rounded-[32px] border border-[#067a47]/10 bg-white shadow-[0_26px_80px_rgba(4,61,36,0.12)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.media}
                  alt={current.title}
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  initial={{ opacity: 0, x: 28, scale: 1.01 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -28, scale: 1.01 }}
                  transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#071c14]/45 via-[#071c14]/8 to-transparent" />

              <motion.button
                type="button"
                onClick={() => console.log("Play:", current.id)}
                className="group absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/85 text-[#17352a] shadow-[0_14px_34px_rgba(0,0,0,0.15)] backdrop-blur"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                transition={slowSpring}
                aria-label="Play story"
              >
                <Play className="h-6 w-6 translate-x-[1px]" />
                <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/0 transition group-hover:ring-white/60" />
              </motion.button>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[11px] font-semibold tracking-[0.18em] text-white/80">
                  VISUAL STORY
                </div>
                <div
                  className="mt-2 text-2xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {current.title}
                </div>
              </div>

              <div className="absolute bottom-6 right-6 flex gap-1.5">
                {STORIES.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`h-1.5 w-4 rounded-full transition ${
                      i === active ? "bg-[#f7d27a]" : "bg-white/35"
                    }`}
                    aria-label={`Go to ${s.title}`}
                  />
                ))}
              </div>

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-0 h-60 w-44 rotate-12 bg-white/18 blur-xl"
                initial={{ x: "-120%" }}
                whileInView={{ x: "120%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}