"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Music2,
} from "lucide-react";

type LogoItem = { id: string; name: string; src: string };
type NavItem = { label: string; href: string };

const ACCOLADES: LogoItem[] = [
  {
    id: "bio",
    name: "Biodiversity Sri Lanka",
    src: "https://dummyimage.com/220x90/ffffff/111111.png&text=Biodiversity+Sri+Lanka",
  },
  {
    id: "pata",
    name: "PATA",
    src: "https://dummyimage.com/220x90/ffffff/111111.png&text=PATA",
  },
  {
    id: "plastic",
    name: "Plasticcycle",
    src: "https://dummyimage.com/220x90/ffffff/111111.png&text=plasticcycle",
  },
  {
    id: "tourcert",
    name: "TourCert",
    src: "https://dummyimage.com/220x90/ffffff/111111.png&text=TourCert",
  },
  {
    id: "enat",
    name: "ENAT",
    src: "https://dummyimage.com/220x90/ffffff/111111.png&text=ENAT",
  },
  {
    id: "sbcert",
    name: "SBcert",
    src: "https://dummyimage.com/220x90/ffffff/111111.png&text=SBcert",
  },
  {
    id: "carbon",
    name: "Certified Carbon Neutral",
    src: "https://dummyimage.com/220x90/ffffff/111111.png&text=Carbon+Neutral",
  },
];

const FOOTER_NAV: NavItem[] = [
  { label: "HOME", href: "#" },
  { label: "DESTINATIONS", href: "#" },
  { label: "PLANNING A TRIP", href: "#" },
  { label: "KEY EXPERIENCES", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "JOIN THE ALLIANCE", href: "#" },
  { label: "JOURNAL", href: "#" },
  { label: "MEDIA", href: "#" },
];

const PAYMENT_LOGOS: LogoItem[] = [
  {
    id: "visa",
    name: "Visa",
    src: "https://dummyimage.com/90x40/ffffff/111111.png&text=VISA",
  },
  {
    id: "mc",
    name: "Mastercard",
    src: "https://dummyimage.com/90x40/ffffff/111111.png&text=MC",
  },
  {
    id: "amex",
    name: "Amex",
    src: "https://dummyimage.com/90x40/ffffff/111111.png&text=AMEX",
  },
  {
    id: "se",
    name: "Secure",
    src: "https://dummyimage.com/90x40/ffffff/111111.png&text=Secure",
  },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function PremiumFooterWithAccolades() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const inView = useInView(wrapRef, { amount: 0.2, once: true });

  // Scroll-based background tone + subtle parallax
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const bgDark = useTransform(scrollYProgress, [0, 1], [0.62, 0.25]);

  const slowSpring = useMemo(
    () => ({ type: "spring", stiffness: 80, damping: 22, mass: 1.2 } as const),
    []
  );

  // Accolades carousel
  const [logoIndex, setLogoIndex] = useState(0);
  const pageSize = 6; // show 6 on desktop (fits your screenshot)
  const pages = Math.ceil(ACCOLADES.length / pageSize);

  const shown = useMemo(() => {
    const start = logoIndex * pageSize;
    return ACCOLADES.slice(start, start + pageSize);
  }, [logoIndex]);

  const nextLogos = () => setLogoIndex((p) => (p + 1) % pages);
  const prevLogos = () => setLogoIndex((p) => (p - 1 + pages) % pages);

  return (
    <footer ref={wrapRef} className="bg-white">
      

      {/* ====== CINEMATIC FOOTER (BACKGROUND IMAGE + OVERLAY) ====== */}
      <div className="relative overflow-hidden">
        {/* Background image */}
        <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80"
            alt="Forest"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Dark overlay changes with scroll */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-black"
          style={{ opacity: bgDark }}
        />

        {/* soft mist */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.22),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={slowSpring}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="text-sm font-semibold tracking-[0.22em] text-white/85">
              SIGN UP FOR UPDATES
            </div>

            <div className="mt-7 flex items-center justify-center">
              <div className="flex w-full max-w-3xl items-center gap-3 rounded-full bg-white/15 px-6 py-4 backdrop-blur ring-1 ring-white/25">
                <input
                  className="w-full bg-transparent text-white placeholder:text-white/70 focus:outline-none"
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                />
                <button
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-slate-900 transition hover:bg-white"
                  aria-label="Submit newsletter"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.nav
            initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...slowSpring, delay: 0.06 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-semibold tracking-[0.22em] text-white/85"
          >
            {FOOTER_NAV.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </motion.nav>

          <div className="mt-6 text-center text-xs font-semibold tracking-[0.22em] text-white/85">
            CONTACT US
          </div>

          <div className="mt-10 border-t border-white/20" />

          {/* Mid row */}
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={slowSpring}
              className="md:col-span-1"
            >
              <div className="text-xs font-semibold tracking-[0.22em] text-white/80">
                CONNECT WITH US
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  aria-label="TikTok"
                >
                  <Music2 className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-6 text-lg font-semibold text-white">
                welcome@prathibhalankavoyages.com
              </div>

              <div className="mt-8 text-xs font-semibold tracking-[0.22em] text-white/80">
                OUR PAYMENT PARTNERS
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {PAYMENT_LOGOS.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-md bg-white/85 px-3 py-2 ring-1 ring-white/70"
                  >
                    <img src={p.src} alt={p.name} className="h-5 w-auto" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Initiative */}
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...slowSpring, delay: 0.05 }}
              className="md:col-span-1"
            >
              <div className="text-xs font-semibold tracking-[0.22em] text-white/80">
                AN INITIATIVE BY
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
                <div className="text-xl font-semibold text-white">
                  SRI LANKA TOURISM ALLIANCE
                </div>
                <div className="mt-2 text-sm text-white/75">
                  Community-driven responsible travel
                </div>
              </div>
            </motion.div>

            {/* Partner */}
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...slowSpring, delay: 0.1 }}
              className="md:col-span-1"
            >
              <div className="text-xs font-semibold tracking-[0.22em] text-white/80">
                WEB AND DIGITAL PARTNER
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
                <div className="text-2xl font-semibold tracking-tight text-white">
                  ANTYRA
                </div>
                <div className="text-sm text-white/75">Solutions</div>
              </div>
            </motion.div>

            {/* Branding */}
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...slowSpring, delay: 0.15 }}
              className="md:col-span-1"
            >
              <div className="text-xs font-semibold tracking-[0.22em] text-white/80">
                BRANDING PARTNER
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
                <div className="text-2xl font-semibold tracking-tight text-white">
                  audacity
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 border-t border-white/20" />

          {/* Bottom row */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-white/75 md:flex-row">
            <div className="font-semibold tracking-[0.18em]">
              POWERED BY PRATHIBHA LANKA VOYAGES
            </div>
            <div className="font-semibold tracking-[0.18em]">
              CONCEPT AND DESIGN BY{" "}
              <span className="text-white">YOUR STUDIO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}