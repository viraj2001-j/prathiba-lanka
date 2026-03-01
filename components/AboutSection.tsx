"use client";

import Image from "next/image";
import "./styles/about.css";

export default function AboutSection() {
  return (
    <section className="bg-gray-300 py-16 about-section mt-7">
      <div className="w-full max-w-7xl ml-auto mr-auto flex flex-col md:flex-row mt-10 mb-10 gap-6 md:gap-8 m-0">

        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-between about-left m-0">
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

          <div className="mt-4 inline-flex items-center bg-black text-white rounded-2xl px-5 py-3 ready-box">
            <span className="text-sm md:text-base font-semibold">
              Ready to explore Sri Lanka?
            </span>
          </div>
        </div>

        {/* MIDDLE IMAGE */}
        <div className="flex-shrink-0 flex items-center justify-center about-center m-0">
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
        <div className="flex-1 flex flex-col justify-between about-right m-0">
          <div className="w-full h-40 md:h-48 rounded-3xl overflow-hidden shadow-md mb-3 about-right-image">
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
    </section>
  );
}