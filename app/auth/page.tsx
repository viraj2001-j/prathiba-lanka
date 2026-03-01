// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type Mode = "login" | "signup";

// const BACKGROUND_IMAGES = [
//   "/hero/srilanka-1.jpg",
//   "/hero/srilanka-2.jpg",
//   "/hero/srilanka-3.jpg",

// ];

// export default function AuthPage() {
//   const [mode, setMode] = useState<Mode>("login");
//   const [bgIndex, setBgIndex] = useState(0);
//   const isLogin = mode === "login";

//   // 🔁 Background carousel logic
// useEffect(() => {
//   // preload images
//   BACKGROUND_IMAGES.forEach((src) => {
//     const img = new Image();
//     img.src = src;
//   });

//   const id = setInterval(() => {
//     setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
//   }, 15000); // or whatever time you want

//   return () => clearInterval(id);
// }, []);
  
//   // Diagonal highlight for the card (unchanged)
//   const clipPath = isLogin
//     ? "polygon(0% 0%, 85% 0%, 55% 100%, 0% 100%)"
//     : "polygon(15% 0%, 100% 0%, 100% 100%, 45% 100%)";

//   const formVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* === Simple Swapping Background Image (no colors) === */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={BACKGROUND_IMAGES[bgIndex]}
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         {/* Dark overlay so content is readable */}
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* === ORIGINAL CARD (unchanged) === */}
//       <div className="relative z-10 w-full max-w-5xl h-[560px] px-4 md:px-6">
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="relative h-full w-full rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden"
//         >
//           {/* Diagonal Animated Overlay – emerald/teal + amber (card design) */}
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-700 to-slate-950"
//             initial={false}
//             animate={{ clipPath }}
//             transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//             style={{ clipPath }}
//           />

//           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
//             {/* LEFT SIDE */}
//             <div className="flex flex-col justify-center px-8 md:px-12">
//               {/* Small brand tag */}
//               <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/80 mb-4">
//                 Hello Travels • Prathiba Lanka Voyages
//               </p>

//               <AnimatePresence mode="wait">
//                 {isLogin ? (
//                   <motion.div
//                     key="login"
//                     variants={formVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{ duration: 0.4 }}
//                     className="w-full max-w-md"
//                   >
//                     <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
//                       Welcome back, traveler
//                     </h2>
//                     <p className="text-sm md:text-base text-emerald-100/80 mb-8">
//                       Sign in to manage your bookings and continue planning your
//                       Sri Lanka journey.
//                     </p>

//                     <form className="space-y-6">
//                       <Input
//                         label="Email"
//                         type="email"
//                         placeholder="you@example.com"
//                       />
//                       <Input
//                         label="Password"
//                         type="password"
//                         placeholder="••••••••"
//                       />

//                       <div className="flex items-center justify-between text-xs md:text-sm">
//                         <label className="flex items-center gap-2 text-emerald-100/80">
//                           <input
//                             type="checkbox"
//                             className="accent-emerald-400"
//                           />
//                           Remember me
//                         </label>
//                         <button
//                           type="button"
//                           className="text-emerald-300 hover:text-white transition"
//                         >
//                           Forgot password?
//                         </button>
//                       </div>

//                       <PremiumButton>Sign In</PremiumButton>
//                     </form>

//                     <p className="mt-8 text-sm text-emerald-100/80">
//                       New to Hello Travels?{" "}
//                       <button
//                         onClick={() => setMode("signup")}
//                         className="text-amber-300 font-medium hover:text-white transition"
//                       >
//                         Create an account
//                       </button>
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="left-msg"
//                     variants={formVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{ duration: 0.4 }}
//                     className="text-white max-w-md"
//                   >
//                     <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//                       Start your Sri Lanka story
//                     </h2>
//                     <p className="text-sm md:text-base text-emerald-50/90 leading-relaxed">
//                       Create your account and keep all your itineraries,
//                       transfers, and hotel details in one beautiful dashboard.
//                     </p>

//                     <div className="mt-8 space-y-3 text-sm text-emerald-50/80">
//                       {[
//                         "Save and view all your trip plans",
//                         "Secure & private account",
//                         "Easy access from any device",
//                       ].map((item) => (
//                         <div key={item} className="flex items-center gap-3">
//                           <div className="w-2 h-2 bg-amber-300 rounded-full" />
//                           {item}
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="flex flex-col justify-center px-8 md:px-12">
//               <AnimatePresence mode="wait">
//                 {isLogin ? (
//                   <motion.div
//                     key="right-msg"
//                     variants={formVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{ duration: 0.4 }}
//                     className="text-white max-w-md ml-auto text-right"
//                   >
//                     <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//                       Plan. Travel. Remember.
//                     </h2>
//                     <p className="text-sm md:text-base text-emerald-50/90">
//                       View upcoming tours, hotel details, and transfer times in
//                       one place – designed for your Sri Lanka adventure.
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="signup"
//                     variants={formVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{ duration: 0.4 }}
//                     className="w-full max-w-md ml-auto"
//                   >
//                     <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
//                       Create your account
//                     </h2>
//                     <p className="text-sm md:text-base text-emerald-100/80 mb-8">
//                       It takes less than a minute to get started.
//                     </p>

//                     <form className="space-y-6">
//                       <Input
//                         label="Full Name"
//                         type="text"
//                         placeholder="John Doe"
//                       />
//                       <Input
//                         label="Email"
//                         type="email"
//                         placeholder="you@example.com"
//                       />
//                       <Input
//                         label="Password"
//                         type="password"
//                         placeholder="••••••••"
//                       />

//                       <PremiumButton>Sign Up</PremiumButton>
//                     </form>

//                     <p className="mt-8 text-sm text-emerald-100/80">
//                       Already have an account?{" "}
//                       <button
//                         onClick={() => setMode("login")}
//                         className="text-amber-300 font-medium hover:text-white transition"
//                       >
//                         Sign in instead
//                       </button>
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// /* ========================= */
// /* 🔹 Reusable Components    */
// /* ========================= */

// function Input({ label, type, placeholder }: any) {
//   return (
//     <div className="space-y-2">
//       <label className="text-xs md:text-sm text-emerald-50/90">{label}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-emerald-100/40 
//         focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent
//         transition backdrop-blur-md"
//         required
//       />
//     </div>
//   );
// }

// function PremiumButton({ children }: any) {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.97 }}
//       className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400
//       text-slate-900 font-semibold shadow-lg shadow-amber-500/30
//       hover:shadow-amber-400/50 transition-all duration-300"
//       type="submit"
//     >
//       {children}
//     </motion.button>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Mode = "login" | "signup";

const BACKGROUND_IMAGES = [
  "/hero/srilanka-1.jpg",
  "/hero/srilanka-2.jpg",
  "/hero/srilanka-3.jpg",
];

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [bgIndex, setBgIndex] = useState(0);
  const isLogin = mode === "login";

  useEffect(() => {
    BACKGROUND_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 15000);

    return () => clearInterval(id);
  }, []);

  const clipPath = isLogin
    ? "polygon(0% 0%, 85% 0%, 55% 100%, 0% 100%)"
    : "polygon(15% 0%, 100% 0%, 100% 100%, 45% 100%)";

  const formVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={BACKGROUND_IMAGES[bgIndex]}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Auth card */}
      <div className="relative z-10 w-full px-4 md:px-6">
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-3xl md:max-w-4xl
            rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10
            shadow-[0_18px_60px_rgba(0,0,0,0.6)] overflow-hidden
            min-h-[350px] md:min-h-[380px] py-6 md:py-8"
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-700 to-slate-950"
            initial={false}
            animate={{ clipPath }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            style={{ clipPath }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-auto">
            {/* LEFT */}
            <div className="flex flex-col justify-center px-6 md:px-8">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-emerald-200/80 mb-3">
                Hello Travels • Prathiba Lanka Voyages
              </p>

              <AnimatePresence mode="wait">
                {isLogin ? (
                  <motion.div
                    key="login"
                    variants={formVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="w-full max-w-sm"
                  >
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                      Welcome back
                    </h2>
                    <p className="text-xs md:text-sm text-emerald-100/80 mb-6">
                      Sign in to manage your bookings.
                    </p>

                    <form className="space-y-4">
                      <Input label="Email" type="email" placeholder="you@example.com" />
                      <Input label="Password" type="password" placeholder="••••••••" />

                      <div className="flex items-center justify-between text-xs">
                        <label className="flex items-center gap-2 text-emerald-100/80">
                          <input type="checkbox" className="accent-emerald-400" />
                          Remember me
                        </label>
                        <button className="text-emerald-300 hover:text-white">
                          Forgot password?
                        </button>
                      </div>

                      <PremiumButton>Sign In</PremiumButton>
                    </form>

                    <p className="mt-6 text-xs md:text-sm text-emerald-100/80">
                      New here?{" "}
                      <button
                        onClick={() => setMode("signup")}
                        className="text-amber-300 font-medium"
                      >
                        Create account
                      </button>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="info"
                    variants={formVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="text-white max-w-sm"
                  >
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                      Start your journey
                    </h2>
                    <p className="text-xs md:text-sm text-emerald-50/90">
                      Create your account and access your full travel dashboard.
                    </p>

                    <div className="mt-6 space-y-2 text-xs md:text-sm text-emerald-50/80">
                      {[
                        "Manage your trips easily",
                        "Secure & private experience",
                        "Works on any device",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-300 rounded-full" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-center px-6 md:px-8 mt-8 md:mt-0">
              <AnimatePresence mode="wait">
                {isLogin ? (
                  <motion.div
                    key="right-message"
                    variants={formVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="text-white max-w-sm ml-auto text-right"
                  >
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                      Plan. Travel. Enjoy.
                    </h2>
                    <p className="text-xs md:text-sm text-emerald-50/90">
                      Your complete travel companion in one place.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    variants={formVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="w-full max-w-sm ml-auto"
                  >
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                      Create account
                    </h2>
                    <p className="text-xs md:text-sm text-emerald-100/80 mb-6">
                      Takes less than a minute.
                    </p>

                    <form className="space-y-4">
                      <Input label="Full Name" type="text" placeholder="John Doe" />
                      <Input label="Email" type="email" placeholder="you@example.com" />
                      <Input label="Password" type="password" placeholder="••••••••" />

                      <PremiumButton>Sign Up</PremiumButton>
                    </form>

                    <p className="mt-6 text-xs md:text-sm text-emerald-100/80">
                      Already have an account?{" "}
                      <button
                        onClick={() => setMode("login")}
                        className="text-amber-300 font-medium"
                      >
                        Sign in
                      </button>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------- */
/* Reusable Input Component        */
/* ------------------------------- */

function Input({ label, type, placeholder }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs text-emerald-50/90">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white 
          placeholder-emerald-100/40 focus:outline-none focus:ring-2 focus:ring-amber-300 
          transition backdrop-blur-md"
        required
      />
    </div>
  );
}

/* ------------------------------- */
/* Premium Button                  */
/* ------------------------------- */

function PremiumButton({ children }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400
        text-slate-900 font-semibold shadow-md shadow-amber-500/30
        hover:shadow-amber-400/40 transition-all"
      type="submit"
    >
      {children}
    </motion.button>
  );
}