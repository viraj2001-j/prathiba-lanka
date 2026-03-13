

// "use client";

// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
      
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/videos/hero.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-white text-3xl font-bold mb-1 font-mono"
//         >
//           Discover Your Dream Destination
//         </motion.h1>

//         {/* <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="text-gray-200 max-w-2xl text-lg md:text-xl mb-8"
//         >
//           Explore breathtaking locations, unforgettable experiences,
//           and premium travel packages designed just for you.
//         </motion.p> */}

//         {/* <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="flex gap-4"
//         >
//           <button className="bg-green-600 hover:bg-yellow-500 hover:text-black transition-all duration-300 text-white px-8 py-3 rounded-xl font-semibold shadow-lg">
//             Explore Packages
//           </button>

//           <button className="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-xl font-semibold">
//             Plan My Trip
//           </button>
//         </motion.div> */}
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Luxury overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,29,21,0.35),rgba(8,29,21,0.62))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,171,29,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(207,91,138,0.12),transparent_24%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 md:px-8 lg:px-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md md:text-xs"
          >
            Luxury Sri Lanka Travel
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl font-serif text-4xl font-semibold leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Discover Sri Lanka with{" "}
            <span className="relative inline-block text-[#f7d27a]">
              beauty, warmth,
              <span className="absolute bottom-2 left-0 h-3 w-full rounded-full bg-[#f0ab1d]/25 blur-[1px]" />
            </span>{" "}
            and unforgettable journeys
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg"
          >
            Explore breathtaking destinations, calm premium stays, scenic routes,
            cultural treasures, and thoughtfully designed travel experiences
            across the island.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button className="rounded-full bg-gradient-to-r from-[#067a47] to-[#035c35] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(6,122,71,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(6,122,71,0.4)]">
              Explore Packages
            </button>

            <button className="rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#17352a]">
              Plan My Trip
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/12 p-5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <h3 className="text-lg font-semibold text-white">Tailored</h3>
              <p className="mt-1 text-sm text-white/75">
                Journeys built around your pace and style.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/12 p-5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <h3 className="text-lg font-semibold text-white">Islandwide</h3>
              <p className="mt-1 text-sm text-white/75">
                Beaches, hills, culture, and hidden gems.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/12 p-5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <h3 className="text-lg font-semibold text-white">Trusted</h3>
              <p className="mt-1 text-sm text-white/75">
                Smooth planning with warm local hospitality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}