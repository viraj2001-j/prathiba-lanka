"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: string;
  title: string;
  text: string;
  author: string;
  backgroundImage: string;
  watermark: string; // e.g. "real stories"
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    watermark: "real stories",
    title: '"Wonderful Family Trip to Sri Lanka"',
    text:
      "Wonderful family trip to Sri Lanka. We were a multi-generational group and Sampath was able to navigate our interests seamlessly. He was extremely knowledgeable about the sites and provided great suggestions to enhance our experience all the time. For example, he suggested we do a train trip in Ella for a few stops which allowed the kids to experience the journey without the full 8-hour trip. Additionally, he supported the family when a family member got sick and was quick to find a local hospital to get help right away. He was able to provide the kids with lots of good information and made sure we addressed their inquiries on tours but also pivoted to the adults as well. Overall, we had an incredible experience using walker but especially because of Sampath.",
    author: "– Shalini Castelli and Family –",
    backgroundImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80",
  },
  {
    id: "t2",
    watermark: "guest words",
    title: '"Perfect Honeymoon Experience"',
    text:
      "From the first message to the final goodbye, everything felt seamless. Our driver-guide was kind, punctual, and full of local insights. The itinerary was balanced with adventure and relaxation, and every hotel choice matched our style. We felt cared for and safe the entire journey. Sri Lanka is stunning — and this team made it unforgettable.",
    author: "– Amelia & Jacob –",
    backgroundImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80",
  },
  {
    id: "t3",
    watermark: "true moments",
    title: '"Amazing Wildlife & Culture Mix"',
    text:
      "We loved the mix of wildlife, history, and food. The timing was perfect: early safaris, scenic drives, and flexible stops. The team handled logistics so smoothly that we could relax and enjoy. We also appreciated thoughtful recommendations that avoided crowds while still seeing the iconic places.",
    author: "– Daniel R. –",
    backgroundImage:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=2400&q=80",
  },
];

export default function RealExperiencesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: false });

  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  // Section scroll progress (for watermark + background tone)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Watermark moves up while scrolling
  const watermarkY = useTransform(scrollYProgress, [0, 1], [220, -260]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1]);

  // Background dark -> lighter as you scroll
  const bgDark = useTransform(scrollYProgress, [0, 1], [0.55, 0.15]);

  const slowSpring = useMemo(
    () => ({ type: "spring", stiffness: 80, damping: 20, mass: 1.25 } as const),
    []
  );

  const next = () => setIndex((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* Background image with animated tone */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.id}
            src={active.backgroundImage}
            alt=""
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
          />
        </AnimatePresence>

        {/* Dark overlay that fades with scroll */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-black"
          style={{ opacity: bgDark }}
        />

        {/* Soft sky wash like screenshot */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.85),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.45),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Watermark word */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-10 w-full -translate-x-1/2 text-center"
          style={{ y: watermarkY, opacity: watermarkOpacity }}
        >
          <div className="select-none text-[72px] font-semibold tracking-tight text-slate-200/80 md:text-[140px] lg:text-[170px]">
            {active.watermark}
          </div>
        </motion.div>

        {/* Main content */}
        <div className="relative mx-auto mt-14 max-w-4xl text-center md:mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={slowSpring}
            className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl"
          >
            Real Experiences
          </motion.h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(10px)" }}
              transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
              className="mx-auto mt-10"
            >
              <div className="text-lg font-semibold text-slate-900 md:text-xl">
                {active.title}
              </div>

              <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-900/80 md:text-lg">
                {active.text}
              </p>

              <div className="mt-8 text-base font-semibold text-slate-900/90">
                {active.author}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side arrows (like screenshot) */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="relative mx-auto max-w-6xl">
            <button
              onClick={prev}
              className="pointer-events-auto absolute left-0 grid h-12 w-12 place-items-center rounded-full bg-white/70 text-slate-700 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={next}
              className="pointer-events-auto absolute right-0 grid h-12 w-12 place-items-center rounded-full bg-white/70 text-slate-700 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="mt-10 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={prev}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/70 text-slate-700 ring-1 ring-slate-200 backdrop-blur"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/70 text-slate-700 ring-1 ring-slate-200 backdrop-blur"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Optional: subtle progress dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-slate-900/70" : "bg-slate-900/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}