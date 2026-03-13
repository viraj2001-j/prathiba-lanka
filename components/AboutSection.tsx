// "use client";

// import { useEffect } from "react";
// import Image from "next/image";

// export default function AboutSection() {
//   useEffect(() => {
//     const selectors = [
//       ".about-card",
//       ".about-left",
//       ".about-center-image",
//       ".about-right",
//     ];

//     const elements = selectors
//       .map((sel) => Array.from(document.querySelectorAll<HTMLElement>(sel)))
//       .flat();

//     if (!elements.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const el = entry.target as HTMLElement;
//           if (entry.isIntersecting) {
//             el.classList.add("in-view");
//           } else {
//             // remove to allow re-animation when scrolling back
//             el.classList.remove("in-view");
//           }
//         });
//       },
//       {
//         threshold: 0.2, // 20% visible triggers it
//       }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => {
//       elements.forEach((el) => observer.unobserve(el));
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <section className="bg-[#f9f7f2] py-16 mt-0">
//       <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
//         <div className="about-card rounded-3xl flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
          
//           {/* LEFT */}
//           <div className="flex-1 flex flex-col justify-between about-left p-6 md:p-8">
//             <div className="space-y-2 md:space-y-3">
//               <h2 className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500">
//                 About Hello Travels
//               </h2>

//               <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
//                 We help you discover the real Sri Lanka.
//               </p>

//               <p className="text-sm md:text-base text-gray-600 leading-relaxed">
//                 Hello Travels is a local travel partner focused on memorable experiences.
//               </p>

//               <p className="text-sm md:text-base text-gray-600 leading-relaxed">
//                 We handle hotels, transport, experiences — you relax.
//               </p>
//             </div>

//             <div className="mt-6 inline-flex items-center bg-black text-white rounded-2xl px-5 py-3 ready-box">
//               <span className="text-sm md:text-base font-semibold">
//                 Ready to explore Sri Lanka?
//               </span>
//             </div>
//           </div>

//           {/* MIDDLE IMAGE */}
//           <div className="flex-shrink-0 flex items-center justify-center about-center p-4">
//             <div className="w-52 h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl about-center-image">
//               <Image
//                 src="/about/train-view.jpg"
//                 alt="Sri Lanka train journey"
//                 width={400}
//                 height={400}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="flex-1 flex flex-col justify-between about-right p-6 md:p-8">
//             <div className="w-full h-40 md:h-48 rounded-3xl overflow-hidden shadow-md mb-4 about-right-image">
//               <Image
//                 src="/about/mountain-view.jpg"
//                 alt="Sri Lanka landscape"
//                 width={500}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="space-y-2 md:space-y-3">
//               <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500">
//                 Travel Experience
//               </p>

//               <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
//                 Gateway to unforgettable journey
//               </h3>

//               <p className="text-sm md:text-base text-gray-600 leading-relaxed">
//                 Every trip is crafted with local insight — hidden gems, scenic views,
//                 cultural stories.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


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
            el.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f9fcfa_0%,#f3f8f5_100%)] py-20 md:py-24">
      <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-[#cf5b8a]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#f0ab1d]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="about-card rounded-[32px] border border-[#067a47]/10 bg-white/80 shadow-[0_24px_70px_rgba(4,61,36,0.10)] backdrop-blur-sm">
          <div className="flex flex-col gap-6 p-4 md:flex-row md:gap-8 md:p-6 lg:p-8">
            {/* LEFT */}
            <div className="about-left flex flex-1 flex-col justify-between rounded-[28px] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdfc_100%)] p-6 md:p-8">
              <div className="space-y-4">
                <p className="inline-flex w-fit items-center rounded-full bg-[#e9f6ef] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#035c35] md:text-xs">
                  About Prathibha Lanka Voyages
                </p>

                <h2
                  className="text-3xl font-semibold leading-tight text-[#17352a] md:text-4xl"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  We help you discover the real beauty of Sri Lanka.
                </h2>

                <p className="text-sm leading-7 text-[#5f756b] md:text-base">
                  Prathibha Lanka Voyages is a local travel partner focused on
                  refined experiences, memorable routes, and genuine Sri Lankan
                  hospitality.
                </p>

                <p className="text-sm leading-7 text-[#5f756b] md:text-base">
                  We handle hotels, transport, sightseeing, and travel comfort
                  with care — so you can relax and enjoy the journey.
                </p>
              </div>

              <div className="mt-8">
                <div className="inline-flex items-center rounded-2xl bg-gradient-to-r from-[#067a47] to-[#035c35] px-5 py-3 text-white shadow-[0_14px_34px_rgba(6,122,71,0.24)]">
                  <span className="text-sm font-semibold md:text-base">
                    Ready to explore Sri Lanka?
                  </span>
                </div>
              </div>
            </div>

            {/* MIDDLE IMAGE */}
            <div className="about-center flex shrink-0 items-center justify-center px-1 py-2 md:px-0">
              <div className="about-center-image relative h-64 w-full overflow-hidden rounded-[30px] border border-white/60 shadow-[0_20px_50px_rgba(4,61,36,0.14)] sm:h-80 md:h-[420px] md:w-[290px] lg:w-[320px]">
                <Image
                  src="/about/train-view.jpg"
                  alt="Sri Lanka train journey"
                  width={500}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.24))]" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="about-right flex flex-1 flex-col justify-between rounded-[28px] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdfc_100%)] p-6 md:p-8">
              <div className="about-right-image mb-5 h-48 w-full overflow-hidden rounded-[26px] border border-white/60 shadow-[0_16px_40px_rgba(4,61,36,0.10)] md:h-56">
                <Image
                  src="/about/mountain-view.jpg"
                  alt="Sri Lanka landscape"
                  width={600}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b98716] md:text-xs">
                  Travel Experience
                </p>

                <h3
                  className="text-2xl font-semibold leading-tight text-[#17352a] md:text-3xl"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  Your gateway to calm, unforgettable journeys
                </h3>

                <p className="text-sm leading-7 text-[#5f756b] md:text-base">
                  Every trip is shaped with local insight — hidden gems, scenic
                  views, cultural depth, and thoughtfully selected experiences
                  that feel both premium and personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}