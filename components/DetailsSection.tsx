"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
  {
    q: "Best time to visit Sri Lanka?",
    a: "You may visit Sri Lanka at any time of year. Because it is a tropical nation, anticipate sunlight and beautiful skies almost all year, even during the wet season. Sri Lanka has two monsoon seasons, and the climate varies across the nation. The northeast monsoon occurs from December to March. The southwest monsoon rains extend between June and October. You can adjust your plans according to the season with our experts’ help.",
  },
  {
    q: "Is it Safe to Travel to Sri Lanka?",
    a: "Sri Lanka is generally safe for travelers in popular tourist regions. As with any destination, keep valuables secure, use trusted transport, and follow local guidance. We also help plan routes and timing to keep your trip smooth and comfortable.",
  },
  {
    q: "Do I need a visa to Sri Lanka?",
    a: "Many travelers need an ETA/visa depending on nationality. We recommend checking official guidance for your passport and dates, and we can guide you on what to prepare before arrival.",
  },
  {
    q: "What to pack when you are visiting Sri Lanka?",
    a: "Light breathable clothing, comfortable shoes, sun protection, insect repellent, and a light rain layer are ideal. For temples, bring clothing that covers shoulders and knees.",
  },
  {
    q: "What currency is used in Sri Lanka, and are credit cards widely accepted?",
    a: "Sri Lankan Rupee (LKR). Cards are accepted at many hotels and larger restaurants; cash is useful for small shops and local markets. ATMs are widely available in towns and cities.",
  },
  {
    q: "Why should I use a travel agency to plan my trip to Sri Lanka?",
    a: "A great agency saves time, improves comfort, and unlocks better experiences through local knowledge—routing, timing, permits, guides, and reliable transport—so you can enjoy the trip without stress.",
  },
];

export default function FAQSplitSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: true });

  // Section scroll progress (for scroll animations)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ✅ Cinematic image scroll animations
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  // ✅ Dark -> normal as you scroll (great effect)
  const darkOverlay = useTransform(scrollYProgress, [0, 0.6, 1], [0.55, 0.25, 0.12]);

  // Subtle vignette/mist
  const mistOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.18, 0.25]);

  const [openIndex, setOpenIndex] = useState<number>(0);

  const slowSpring = useMemo(
    () => ({ type: "spring", stiffness: 85, damping: 22, mass: 1.15 } as const),
    []
  );

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* LEFT: Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
            transition={slowSpring}
            className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-[0_22px_60px_rgba(2,8,23,0.12)]"
          >
            {/* Image with scroll transform */}
            <motion.img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2400&q=80"
              alt="Sri Lanka beach"
              className="h-[520px] w-full object-cover md:h-[620px]"
              style={{ y: imgY, scale: imgScale, rotate: imgRotate }}
            />

            {/* ✅ Dark overlay that fades while scrolling */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-black"
              style={{ opacity: darkOverlay }}
            />

            {/* ✅ Mist vignette */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.22),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.18),transparent_55%)]"
              style={{ opacity: mistOpacity }}
            />

            {/* Title */}
            <div className="pointer-events-none absolute left-10 top-10">
              <div className="text-5xl font-semibold leading-[1.0] tracking-tight text-white drop-shadow">
                Everything
              </div>
              <div className="text-5xl font-light leading-[1.0] tracking-tight text-white drop-shadow">
                You Need to Know
              </div>
            </div>

            {/* CTA */}
            <motion.button
              type="button"
              onClick={() => {
                const el = document.getElementById("faq-list");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group absolute bottom-10 left-10 inline-flex items-center gap-4 rounded-full bg-white/85 px-6 py-4 text-sm font-semibold tracking-[0.16em] text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ ...slowSpring, delay: 0.12 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white">
                <Plus className="h-5 w-5" />
              </span>
              VIEW ALL FAQ
            </motion.button>
          </motion.div>

          {/* RIGHT: Accordion */}
          <motion.div
            id="faq-list"
            initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
            transition={{ ...slowSpring, delay: 0.06 }}
            className="rounded-3xl bg-white"
          >
            <div className="divide-y divide-slate-200">
              {FAQS.map((f, i) => {
                const open = i === openIndex;

                return (
                  <div key={f.q} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span className="text-lg font-semibold text-slate-900">
                        {f.q}
                      </span>

                      <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 240, damping: 22 } as const}
                        className="grid h-10 w-10 place-items-center rounded-full bg-slate-50 ring-1 ring-slate-200 text-slate-700"
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] } as const}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ y: 6, filter: "blur(8px)" }}
                            animate={{ y: 0, filter: "blur(0px)" }}
                            exit={{ y: 6, filter: "blur(8px)" }}
                            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] } as const}
                            className="mt-4 max-w-2xl text-base leading-7 text-slate-600"
                          >
                            {f.a}
                          </motion.p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-sm text-slate-500">
              Tip: Ask us anything — we tailor trips based on season, interests, and pace.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}