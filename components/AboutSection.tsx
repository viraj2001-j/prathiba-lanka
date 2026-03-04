"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function AboutSection() {
  useEffect(() => {
    const selectors = [
      ".about-card",
      ".about-left",
      ".about-center-image",
      ".about-right",
    ];

    const elements = selectors
      .map((sel) => Array.from(document.querySelectorAll<HTMLElement>(sel)))
      .flat();

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
          } else {
            // remove to allow re-animation when scrolling back
            el.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.2, // 20% visible triggers it
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-gray-200 py-16 mt-0">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="about-card rounded-3xl flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
          
          {/* LEFT */}
          <div className="flex-1 flex flex-col justify-between about-left p-6 md:p-8">
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500">
                About Hello Travels
              </h2>

              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
                We help you discover the real Sri Lanka.
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Hello Travels is a local travel partner focused on memorable experiences.
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We handle hotels, transport, experiences — you relax.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center bg-black text-white rounded-2xl px-5 py-3 ready-box">
              <span className="text-sm md:text-base font-semibold">
                Ready to explore Sri Lanka?
              </span>
            </div>
          </div>

          {/* MIDDLE IMAGE */}
          <div className="flex-shrink-0 flex items-center justify-center about-center p-4">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl about-center-image">
              <Image
                src="/about/train-view.jpg"
                alt="Sri Lanka train journey"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col justify-between about-right p-6 md:p-8">
            <div className="w-full h-40 md:h-48 rounded-3xl overflow-hidden shadow-md mb-4 about-right-image">
              <Image
                src="/about/mountain-view.jpg"
                alt="Sri Lanka landscape"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 md:space-y-3">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500">
                Travel Experience
              </p>

              <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
                Gateway to unforgettable journey
              </h3>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Every trip is crafted with local insight — hidden gems, scenic views,
                cultural stories.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}