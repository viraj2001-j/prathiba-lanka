"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function UltraPremiumFooter() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.02]);

  const spring = useMemo(
    () => ({ type: "spring" as const, stiffness: 70, damping: 20 }),
    []
  );

  return (
    <footer ref={ref} className="relative text-white overflow-hidden">

      {/* 🌲 FOREST BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
 src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80"
          className="w-full h-full object-cover"
          alt="forest background"
        />
      </motion.div>

      {/* 🎯 DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* 🔝 NEWSLETTER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10"
        >
          <div>
            <h3 className="text-xl font-semibold">Join Our Journey</h3>
            <p className="text-white/70 text-sm mt-1">
              Get exclusive travel deals & updates
            </p>
          </div>

          <div className="flex w-full md:w-auto items-center bg-white/10 border border-white/20 rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm px-2 w-full md:w-64 placeholder:text-white/50"
            />
            <button className="bg-white text-black text-xs px-4 py-1.5 rounded-full hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* 🧩 MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-12">

          {/* BRAND */}
          <div>
            <h2 className="text-lg font-semibold">
              Prathibha Lanka Voyages
            </h2>
            <p className="text-white/70 text-sm mt-3 leading-relaxed">
              Discover the beauty of Sri Lanka with curated travel experiences,
              personalized journeys, and unforgettable memories.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/20 hover:bg-white/10 transition"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/destinations" className="hover:text-white">Destinations</a></li>
              <li><a href="/experiences" className="hover:text-white">Experiences</a></li>
              <li><a href="/plan" className="hover:text-white">Plan Trip</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Custom Tour Packages</li>
              <li>Luxury Hotel Booking</li>
              <li>Private Transport</li>
              <li>Tour Guides</li>
              <li>Adventure Activities</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin size={15} />
                <span>
                  No. 12, Beach Road <br />
                  Matara, Sri Lanka
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={15} />
                +94 71 234 5678
              </div>

              <div className="flex items-center gap-2">
                <Mail size={15} />
                welcome@prathibhalankavoyages.com
              </div>
            </div>
          </div>
        </div>

        {/* 🔻 BOTTOM */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-3">
          <div>© 2026 Prathibha Lanka Voyages</div>
          <div>All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}