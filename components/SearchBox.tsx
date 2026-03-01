"use client";

import { useEffect, useRef } from "react";

export default function SearchBox() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
          } else {
            // remove class so animation can replay when scrolled back
            el.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.2, // 20% visible triggers it
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className="
        search-slide-up
        w-full max-w-5xl mx-auto 
        bg-white/90 backdrop-blur-xl 
        shadow-xl rounded-2xl 
        p-6 md:p-8
        border border-white/40
      "
    >
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-green-900 mb-6">
        Find Your Perfect Tour
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Where in Sri Lanka?"
          className="p-3 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <input
          type="text"
          placeholder="Travel dates"
          className="p-3 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <input
          type="number"
          placeholder="Travelers"
          className="p-3 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <button
          className="
            p-3 rounded-lg 
            bg-green-700 text-white font-semibold 
            hover:bg-green-800 transition
          "
        >
          Search
        </button>
      </div>
    </div>
  );
}