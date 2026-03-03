"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/hero/srilanka-1.jpg",
  "/hero/srilanka-2.jpg",
  "/hero/srilanka-3.jpg",
  "/hero/srilanka-4.jpg",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getSlideNumber = (offset: number) => {
    const num = (index + offset + heroImages.length) % heroImages.length;
    return String(num + 1).padStart(2, "0");
  };

  return (
    <section className="relative w-full min-h-[80vh] text-white overflow-hidden flex items-center">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImages[index]}
          alt="Sri Lanka Hero"
          fill
          priority
          className="object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* CENTERED CONTENT */}
      <div className="relative z-20 w-full text-center px-4">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap hero-line-top">
          Discover Sri Lanka with
        </p>

        <div className="mt-4 relative inline-block">
          <span className="text-5xl md:text-6xl lg:text-7xl font-bold hero-line-main">
            Hello Travels
          </span>

          <div className="absolute inset-x-0 -bottom-6 h-7 flex flex-col justify-between pointer-events-none">
            <span className="block w-full border-b-2 border-amber-300 rounded-full rotate-[-2deg] origin-left animate-drawLine1" />
            <span className="block w-full border-b-2 border-amber-400 rounded-full rotate-[1deg] origin-left animate-drawLine2" />
            <span className="block w-10/12 border-b-2 border-amber-200 rounded-full rotate-[-1deg] translate-x-1 origin-left animate-drawLine3" />
          </div>
        </div>

        <p className="mt-8 text-xl md:text-2xl lg:text-3xl hero-subline">
          You all welcome to Sri Lanka
        </p>

        <button
          className="
            mt-6 px-8 py-3 
            bg-amber-400 text-slate-900 font-semibold 
            rounded-full shadow-md
            hover:bg-amber-300 transition
            hero-button-slide
          "
        >
          Explore Sri Lanka
        </button>
      </div>

      {/* Slide indicator */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center text-white/60 select-none">
        <span className="opacity-40 text-sm transition duration-500">
          {getSlideNumber(-1)}
        </span>
        <span className="text-2xl font-semibold my-1">
          {getSlideNumber(0)}
        </span>
        <span className="opacity-40 text-sm transition duration-500">
          {getSlideNumber(1)}
        </span>
      </div>
    </section>
  );
}

