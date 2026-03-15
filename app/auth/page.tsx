// // "use client";

// // import { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // type Mode = "login" | "signup";

// // const BACKGROUND_IMAGES = [
// //   "/hero/srilanka-1.jpg",
// //   "/hero/srilanka-2.jpg",
// //   "/hero/srilanka-3.jpg",

// // ];

// // export default function AuthPage() {
// //   const [mode, setMode] = useState<Mode>("login");
// //   const [bgIndex, setBgIndex] = useState(0);
// //   const isLogin = mode === "login";

// //   // 🔁 Background carousel logic
// // useEffect(() => {
// //   // preload images
// //   BACKGROUND_IMAGES.forEach((src) => {
// //     const img = new Image();
// //     img.src = src;
// //   });

// //   const id = setInterval(() => {
// //     setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
// //   }, 15000); // or whatever time you want

// //   return () => clearInterval(id);
// // }, []);
  
// //   // Diagonal highlight for the card (unchanged)
// //   const clipPath = isLogin
// //     ? "polygon(0% 0%, 85% 0%, 55% 100%, 0% 100%)"
// //     : "polygon(15% 0%, 100% 0%, 100% 100%, 45% 100%)";

// //   const formVariants = {
// //     initial: { opacity: 0, y: 20 },
// //     animate: { opacity: 1, y: 0 },
// //     exit: { opacity: 0, y: -20 },
// //   };

// //   return (
// //     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //       {/* === Simple Swapping Background Image (no colors) === */}
// //       <div className="absolute inset-0 z-0">
// //         <img
// //           src={BACKGROUND_IMAGES[bgIndex]}
// //           alt="Background"
// //           className="w-full h-full object-cover"
// //         />
// //         {/* Dark overlay so content is readable */}
// //         <div className="absolute inset-0 bg-black/40" />
// //       </div>

// //       {/* === ORIGINAL CARD (unchanged) === */}
// //       <div className="relative z-10 w-full max-w-5xl h-[560px] px-4 md:px-6">
// //         <motion.div
// //           initial={{ scale: 0.95, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 0.6 }}
// //           className="relative h-full w-full rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden"
// //         >
// //           {/* Diagonal Animated Overlay – emerald/teal + amber (card design) */}
// //           <motion.div
// //             className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-700 to-slate-950"
// //             initial={false}
// //             animate={{ clipPath }}
// //             transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
// //             style={{ clipPath }}
// //           />

// //           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
// //             {/* LEFT SIDE */}
// //             <div className="flex flex-col justify-center px-8 md:px-12">
// //               {/* Small brand tag */}
// //               <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/80 mb-4">
// //                 Hello Travels • Prathiba Lanka Voyages
// //               </p>

// //               <AnimatePresence mode="wait">
// //                 {isLogin ? (
// //                   <motion.div
// //                     key="login"
// //                     variants={formVariants}
// //                     initial="initial"
// //                     animate="animate"
// //                     exit="exit"
// //                     transition={{ duration: 0.4 }}
// //                     className="w-full max-w-md"
// //                   >
// //                     <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
// //                       Welcome back, traveler
// //                     </h2>
// //                     <p className="text-sm md:text-base text-emerald-100/80 mb-8">
// //                       Sign in to manage your bookings and continue planning your
// //                       Sri Lanka journey.
// //                     </p>

// //                     <form className="space-y-6">
// //                       <Input
// //                         label="Email"
// //                         type="email"
// //                         placeholder="you@example.com"
// //                       />
// //                       <Input
// //                         label="Password"
// //                         type="password"
// //                         placeholder="••••••••"
// //                       />

// //                       <div className="flex items-center justify-between text-xs md:text-sm">
// //                         <label className="flex items-center gap-2 text-emerald-100/80">
// //                           <input
// //                             type="checkbox"
// //                             className="accent-emerald-400"
// //                           />
// //                           Remember me
// //                         </label>
// //                         <button
// //                           type="button"
// //                           className="text-emerald-300 hover:text-white transition"
// //                         >
// //                           Forgot password?
// //                         </button>
// //                       </div>

// //                       <PremiumButton>Sign In</PremiumButton>
// //                     </form>

// //                     <p className="mt-8 text-sm text-emerald-100/80">
// //                       New to Hello Travels?{" "}
// //                       <button
// //                         onClick={() => setMode("signup")}
// //                         className="text-amber-300 font-medium hover:text-white transition"
// //                       >
// //                         Create an account
// //                       </button>
// //                     </p>
// //                   </motion.div>
// //                 ) : (
// //                   <motion.div
// //                     key="left-msg"
// //                     variants={formVariants}
// //                     initial="initial"
// //                     animate="animate"
// //                     exit="exit"
// //                     transition={{ duration: 0.4 }}
// //                     className="text-white max-w-md"
// //                   >
// //                     <h2 className="text-3xl md:text-4xl font-semibold mb-4">
// //                       Start your Sri Lanka story
// //                     </h2>
// //                     <p className="text-sm md:text-base text-emerald-50/90 leading-relaxed">
// //                       Create your account and keep all your itineraries,
// //                       transfers, and hotel details in one beautiful dashboard.
// //                     </p>

// //                     <div className="mt-8 space-y-3 text-sm text-emerald-50/80">
// //                       {[
// //                         "Save and view all your trip plans",
// //                         "Secure & private account",
// //                         "Easy access from any device",
// //                       ].map((item) => (
// //                         <div key={item} className="flex items-center gap-3">
// //                           <div className="w-2 h-2 bg-amber-300 rounded-full" />
// //                           {item}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>

// //             {/* RIGHT SIDE */}
// //             <div className="flex flex-col justify-center px-8 md:px-12">
// //               <AnimatePresence mode="wait">
// //                 {isLogin ? (
// //                   <motion.div
// //                     key="right-msg"
// //                     variants={formVariants}
// //                     initial="initial"
// //                     animate="animate"
// //                     exit="exit"
// //                     transition={{ duration: 0.4 }}
// //                     className="text-white max-w-md ml-auto text-right"
// //                   >
// //                     <h2 className="text-3xl md:text-4xl font-semibold mb-4">
// //                       Plan. Travel. Remember.
// //                     </h2>
// //                     <p className="text-sm md:text-base text-emerald-50/90">
// //                       View upcoming tours, hotel details, and transfer times in
// //                       one place – designed for your Sri Lanka adventure.
// //                     </p>
// //                   </motion.div>
// //                 ) : (
// //                   <motion.div
// //                     key="signup"
// //                     variants={formVariants}
// //                     initial="initial"
// //                     animate="animate"
// //                     exit="exit"
// //                     transition={{ duration: 0.4 }}
// //                     className="w-full max-w-md ml-auto"
// //                   >
// //                     <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
// //                       Create your account
// //                     </h2>
// //                     <p className="text-sm md:text-base text-emerald-100/80 mb-8">
// //                       It takes less than a minute to get started.
// //                     </p>

// //                     <form className="space-y-6">
// //                       <Input
// //                         label="Full Name"
// //                         type="text"
// //                         placeholder="John Doe"
// //                       />
// //                       <Input
// //                         label="Email"
// //                         type="email"
// //                         placeholder="you@example.com"
// //                       />
// //                       {/* <Input
// //                         label="ContactNo"
// //                         type="tel"
// //                         placeholder="+94 123 456 789"
// //                       /> */}
// //                       <Input
// //                         label="Password"
// //                         type="password"
// //                         placeholder="••••••••"
// //                       />
                      

// //                       <PremiumButton>Sign Up</PremiumButton>
// //                     </form>

// //                     <p className="mt-8 text-sm text-emerald-100/80">
// //                       Already have an account?{" "}
// //                       <button
// //                         onClick={() => setMode("login")}
// //                         className="text-amber-300 font-medium hover:text-white transition"
// //                       >
// //                         Sign in instead
// //                       </button>
// //                     </p>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ========================= */
// // /* 🔹 Reusable Components    */
// // /* ========================= */

// // function Input({ label, type, placeholder }: any) {
// //   return (
// //     <div className="space-y-2">
// //       <label className="text-xs md:text-sm text-emerald-50/90">{label}</label>
// //       <input
// //         type={type}
// //         placeholder={placeholder}
// //         className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-emerald-100/40 
// //         focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent
// //         transition backdrop-blur-md"
// //         required
// //       />
// //     </div>
// //   );
// // }

// // function PremiumButton({ children }: any) {
// //   return (
// //     <motion.button
// //       whileHover={{ scale: 1.03 }}
// //       whileTap={{ scale: 0.97 }}
// //       className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400
// //       text-slate-900 font-semibold shadow-lg shadow-amber-500/30
// //       hover:shadow-amber-400/50 transition-all duration-300"
// //       type="submit"
// //     >
// //       {children}
// //     </motion.button>
// //   );
// // }



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
//   useEffect(() => {
//     BACKGROUND_IMAGES.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//     });

//     const id = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
//     }, 15000);

//     return () => clearInterval(id);
//   }, []);

//   // Diagonal highlight for the card
//   const clipPath = isLogin
//     ? "polygon(0% 0%, 85% 0%, 55% 100%, 0% 100%)"
//     : "polygon(15% 0%, 100% 0%, 100% 100%, 45% 100%)";

//   const formVariants = {
//     initial: { opacity: 0, y: 16 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -16 },
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-3 md:px-4 py-8 md:py-10">
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={BACKGROUND_IMAGES[bgIndex]}
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/45" />
//       </div>

//       {/* Card */}
//       <div className="relative z-10 w-full max-w-4xl">
//         <motion.div
//           initial={{ scale: 0.97, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="
//             relative w-full 
//             rounded-3xl 
//             backdrop-blur-2xl 
//             bg-white/5 
//             border border-white/10 
//             shadow-[0_18px_60px_rgba(0,0,0,0.65)] 
//             overflow-hidden
//           "
//         >
//           {/* Make height driven by content, with a minimum */}
//           <div className="min-h-[440px] md:min-h-[480px]">
//             {/* Diagonal gradient overlay */}
//             <motion.div
//               className="absolute inset-0 bg-[#0e81ba]"
//               initial={false}
//               animate={{ clipPath }}
//               transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//               style={{ clipPath }}
//             />

//             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
//               {/* LEFT SIDE */}
//               <div className="flex flex-col justify-center px-6 md:px-8 lg:px-10 py-8 md:py-10">
//                 <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-emerald-200/80 mb-3 md:mb-4">
//                   Hello Travels • Prathiba Lanka Voyages
//                 </p>

//                 <AnimatePresence mode="wait">
//                   {isLogin ? (
//                     <motion.div
//                       key="login"
//                       variants={formVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       transition={{ duration: 0.35 }}
//                       className="w-full max-w-md"
//                     >
//                       <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
//                         Welcome back, traveler
//                       </h2>
//                       <p className="text-xs md:text-sm text-emerald-100/80 mb-6 md:mb-7">
//                         Sign in to manage your bookings and continue planning
//                         your Sri Lanka journey.
//                       </p>

//                       <form className="space-y-4 md:space-y-5">
//                         <Input
//                           label="Email"
//                           type="email"
//                           placeholder="you@example.com"
//                         />
//                         <Input
//                           label="Password"
//                           type="password"
//                           placeholder="••••••••"
//                         />

//                         <div className="flex items-center justify-between text-[11px] md:text-xs text-emerald-100/80">
//                           <label className="flex items-center gap-2">
//                             <input
//                               type="checkbox"
//                               className="accent-emerald-400 scale-90"
//                             />
//                             Remember me
//                           </label>
//                           <button
//                             type="button"
//                             className="text-emerald-300 hover:text-white transition"
//                           >
//                             Forgot password?
//                           </button>
//                         </div>

//                         <PremiumButton>Sign In</PremiumButton>
//                       </form>

//                       <p className="mt-6 md:mt-7 text-xs md:text-sm text-emerald-100/80">
//                         New to Hello Travels?{" "}
//                         <button
//                           onClick={() => setMode("signup")}
//                           className="text-amber-300 font-medium hover:text-white transition"
//                         >
//                           Create an account
//                         </button>
//                       </p>
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="left-msg"
//                       variants={formVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       transition={{ duration: 0.35 }}
//                       className="text-white max-w-md"
//                     >
//                       <h2 className="text-2xl md:text-3xl font-semibold mb-3">
//                         Start your Sri Lanka story
//                       </h2>
//                       <p className="text-xs md:text-sm text-emerald-50/90 leading-relaxed">
//                         Create your account and keep all your itineraries,
//                         transfers, and hotel details in one beautiful dashboard.
//                       </p>

//                       <div className="mt-6 md:mt-7 space-y-2.5 text-xs md:text-sm text-emerald-50/80">
//                         {[
//                           "Save and view all your trip plans",
//                           "Secure & private account",
//                           "Easy access from any device",
//                         ].map((item) => (
//                           <div key={item} className="flex items-center gap-2.5">
//                             <div className="w-2 h-2 bg-amber-300 rounded-full" />
//                             {item}
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* RIGHT SIDE */}
//               <div className="flex flex-col justify-center px-6 md:px-8 lg:px-10 py-8 md:py-10">
//                 <AnimatePresence mode="wait">
//                   {isLogin ? (
//                     <motion.div
//                       key="right-msg"
//                       variants={formVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       transition={{ duration: 0.35 }}
//                       className="text-white max-w-md md:ml-auto md:text-right"
//                     >
//                       <h2 className="text-2xl md:text-3xl font-semibold mb-3">
//                         Plan. Travel. Remember.
//                       </h2>
//                       <p className="text-xs md:text-sm text-emerald-50/90">
//                         View upcoming tours, hotel details, and transfer times
//                         in one place – designed for your Sri Lanka adventure.
//                       </p>
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="signup"
//                       variants={formVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       transition={{ duration: 0.35 }}
//                       className="w-full max-w-md md:ml-auto"
//                     >
//                       <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
//                         Create your account
//                       </h2>
//                       <p className="text-xs md:text-sm text-emerald-100/80 mb-6 md:mb-7">
//                         It takes less than a minute to get started.
//                       </p>

//                       <form className="space-y-4 md:space-y-5">
//                         <Input
//                           label="Full Name"
//                           type="text"
//                           placeholder="John Doe"
//                         />
//                         <Input
//                           label="Email"
//                           type="email"
//                           placeholder="you@example.com"
//                         />
//                         <Input
//                           label="Password"
//                           type="password"
//                           placeholder="••••••••"
//                         />

//                         <PremiumButton>Sign Up</PremiumButton>
//                       </form>

//                       <p className="mt-6 md:mt-7 text-xs md:text-sm text-emerald-100/80">
//                         Already have an account?{" "}
//                         <button
//                           onClick={() => setMode("login")}
//                           className="text-amber-300 font-medium hover:text-white transition"
//                         >
//                           Sign in instead
//                         </button>
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
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

// function Input({
//   label,
//   type,
//   placeholder,
// }: {
//   label: string;
//   type: string;
//   placeholder?: string;
// }) {
//   return (
//     <div className="space-y-1.5 md:space-y-2">
//       <label className="text-[11px] md:text-xs text-emerald-50/90">
//         {label}
//       </label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="
//           w-full px-3.5 py-2.5 md:px-4 md:py-3 
//           rounded-xl bg-white/5 border border-white/15 
//           text-sm md:text-[15px] text-white 
//           placeholder-emerald-100/40 
//           focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent
//           transition backdrop-blur-md
//         "
//         required
//       />
//     </div>
//   );
// }

// function PremiumButton({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.97 }}
//       className="
//         w-full py-2.5 md:py-3 
//         rounded-xl 
//         bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400
//         text-slate-900 text-sm md:text-base font-semibold 
//         shadow-lg shadow-amber-500/30
//         hover:shadow-amber-400/50 
//         transition-all duration-300
//       "
//       type="submit"
//     >
//       {children}
//     </motion.button>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type View = "auth" | "dashboard";
// type AuthMode = "login" | "signup";

// const BACKGROUND_IMAGES = [
//   "/hero/srilanka-1.jpg",
//   "/hero/srilanka-2.jpg",
//   "/hero/srilanka-3.jpg",
// ];

// // Sample travel data
// const DESTINATIONS = [
//   { name: "Sigiriya Rock", date: "Jun 15-16", weather: "Sunny 32°C", image: "/hero/srilanka-1.jpg" },
//   { name: "Kandy", date: "Jun 17-19", weather: "Partly cloudy 28°C", image: "/hero/srilanka-2.jpg" },
//   { name: "Galle Fort", date: "Jun 20-22", weather: "Breezy 30°C", image: "/hero/srilanka-3.jpg" },
// ];

// export default function MagicalTravelSwap() {
//   const [currentView, setCurrentView] = useState<View>("auth");
//   const [authMode, setAuthMode] = useState<AuthMode>("login");
//   const [bgIndex, setBgIndex] = useState(0);
//   const [selectedDestination, setSelectedDestination] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const isAuth = currentView === "auth";
//   const isLogin = authMode === "login";

//   // Background carousel
//   useEffect(() => {
//     BACKGROUND_IMAGES.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//     });

//     const id = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
//     }, 15000);

//     return () => clearInterval(id);
//   }, []);

//   // Simulate loading when swapping
//   const swapView = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setCurrentView(isAuth ? "dashboard" : "auth");
//       setIsLoading(false);
//     }, 800);
//   };

//   // Handle auth mode switching
//   const switchToSignup = () => {
//     setAuthMode("signup");
//   };

//   const switchToLogin = () => {
//     setAuthMode("login");
//   };

//   // Dynamic clip path based on auth mode (when in auth view)
//   const clipPath = isAuth 
//     ? isLogin
//       ? "polygon(0% 0%, 85% 0%, 55% 100%, 0% 100%)"
//       : "polygon(15% 0%, 100% 0%, 100% 100%, 45% 100%)"
//     : "polygon(15% 0%, 100% 0%, 100% 100%, 45% 100%)"; // Default for dashboard

//   // Sri Lanka themed gradients
//   const sriLankaGradient = isAuth
//     ? isLogin
//       ? "bg-gradient-to-br from-amber-700 via-orange-700 to-emerald-800" // Sunset/saffron + green
//       : "bg-gradient-to-br from-emerald-700 via-teal-700 to-amber-800" // Emerald/green + gold
//     : "bg-gradient-to-br from-amber-800 via-orange-800 to-emerald-900"; // Dashboard - deeper colors

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-3 md:px-4 py-6 md:py-8">
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={BACKGROUND_IMAGES[bgIndex]}
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
//       </div>

//       {/* Magical Swap Button - Floating Action with Plane Icon */}
//       <motion.button
//         onClick={swapView}
//         disabled={isLoading}
//         className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 hover:bg-white/20 transition-all"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <motion.span
//           animate={{ 
//             rotate: isLoading ? 360 : 0,
//             x: isLoading ? [0, 5, -5, 0] : 0
//           }}
//           transition={{ 
//             duration: 1, 
//             repeat: isLoading ? Infinity : 0, 
//             ease: "linear" 
//           }}
//           className="inline-block"
//         >
//           {isAuth ? "✈️" : "🔙"}
//         </motion.span>
//         {isAuth ? "Preview Dashboard" : "Back to Login"}
//       </motion.button>

//       {/* Main Card - Smaller size */}
//       <div className="relative z-10 w-full max-w-4xl">
//         <motion.div
//           initial={{ scale: 0.97, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="
//             relative w-full 
//             rounded-2xl 
//             backdrop-blur-2xl 
//             bg-white/5 
//             border border-white/10 
//             shadow-[0_12px_40px_rgba(0,0,0,0.65)] 
//             overflow-hidden
//           "
//         >
//           <div className="min-h-[420px] md:min-h-[460px]">
//             {/* Diagonal gradient overlay - Sri Lanka themed */}
//             <motion.div
//               className={`absolute inset-0 ${sriLankaGradient}`}
//               initial={false}
//               animate={{ clipPath }}
//               transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//               style={{ clipPath }}
//             />

//             <AnimatePresence mode="wait">
//               {isAuth ? (
//                 /* ===== AUTH VIEW ===== */
//                 <motion.div
//                   key={`auth-${authMode}`}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full"
//                 >
//                   {isLogin ? (
//                     /* ===== LOGIN VIEW ===== */
//                     <>
//                       {/* LEFT SIDE - Login Form */}
//                       <div className="flex flex-col justify-center px-5 md:px-6 lg:px-8 py-5 md:py-6">
//                         <motion.div
//                           initial={{ x: -20, opacity: 0 }}
//                           animate={{ x: 0, opacity: 1 }}
//                           transition={{ delay: 0.2 }}
//                         >
//                           <p className="text-[9px] md:text-xs uppercase tracking-[0.2em] text-amber-200/80 mb-2 md:mb-3">
//                             Hello Travels • Sri Lanka
//                           </p>
                          
//                           <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
//                             Welcome back
//                           </h2>
//                           <p className="text-xs md:text-sm text-amber-100/80 mb-4 md:mb-5">
//                             Sign in to continue your Sri Lanka journey
//                           </p>

//                           <form className="space-y-3 md:space-y-4">
//                             <Input
//                               label="Email"
//                               type="email"
//                               placeholder="you@example.com"
//                               icon="✉️"
//                               compact
//                             />
//                             <Input
//                               label="Password"
//                               type="password"
//                               placeholder="••••••••"
//                               icon="🔒"
//                               compact
//                             />

//                             <div className="flex items-center justify-between text-[10px] md:text-xs">
//                               <label className="flex items-center gap-1.5 text-amber-100/80">
//                                 <input type="checkbox" className="accent-amber-400 scale-75" />
//                                 Remember
//                               </label>
//                               <button className="text-amber-300 hover:text-white">Forgot?</button>
//                             </div>

//                             <PremiumButton compact>
//                               <span className="flex items-center justify-center gap-1.5">
//                                 ✈️ Sign In
//                               </span>
//                             </PremiumButton>
//                           </form>

//                           <p className="mt-4 text-[10px] md:text-xs text-amber-100/80 text-center">
//                             Don't have an account?{" "}
//                             <button 
//                               onClick={switchToSignup}
//                               className="text-amber-300 font-medium hover:text-white"
//                             >
//                               Join
//                             </button>
//                           </p>
//                         </motion.div>
//                       </div>

//                       {/* RIGHT SIDE - Login Message */}
//                       <div className="hidden md:flex flex-col justify-center px-6 lg:px-8 py-6">
//                         <motion.div
//                           initial={{ x: 20, opacity: 0 }}
//                           animate={{ x: 0, opacity: 1 }}
//                           transition={{ delay: 0.3 }}
//                           className="text-white max-w-xs ml-auto text-right"
//                         >
//                           <h3 className="text-2xl font-bold mb-2">Discover Sri Lanka</h3>
//                           <p className="text-sm text-amber-50/90 mb-4">
//                             Land like no other
//                           </p>
//                           <div className="space-y-2">
//                             {["Ancient cities", "Tea plantations", "Wildlife", "Golden beaches"].map((item) => (
//                               <div key={item} className="flex items-center gap-2 justify-end text-sm">
//                                 <span className="text-amber-200/80">{item}</span>
//                                 <div className="w-1.5 h-1.5 bg-amber-300 rounded-full" />
//                               </div>
//                             ))}
//                           </div>
//                           <div className="mt-4 text-xs text-amber-200/60">
//                             <span className="text-amber-400">✦</span> Pearl of the Indian Ocean
//                           </div>
//                         </motion.div>
//                       </div>
//                     </>
//                   ) : (
//                     /* ===== SIGNUP VIEW - Form on RIGHT side ===== */
//                     <>
//                       {/* LEFT SIDE - Signup Message */}
//                       <div className="hidden md:flex flex-col justify-center px-6 lg:px-8 py-6">
//                         <motion.div
//                           initial={{ x: -20, opacity: 0 }}
//                           animate={{ x: 0, opacity: 1 }}
//                           transition={{ delay: 0.3 }}
//                           className="text-white max-w-xs"
//                         >
//                           <div className="flex items-center gap-2 mb-3">
//                             <span className="text-3xl">🦁</span>
//                             <span className="text-3xl">🌴</span>
//                             <span className="text-3xl">🐘</span>
//                           </div>
//                           <h3 className="text-2xl font-bold mb-2">Join 10K+</h3>
//                           <p className="text-sm text-amber-50/90 mb-3">
//                             Happy travelers who discovered paradise
//                           </p>
//                           <div className="flex gap-1 mb-3">
//                             {["🌟", "🌟", "🌟", "🌟", "🌟"].map((star, i) => (
//                               <span key={i} className="text-lg">{star}</span>
//                             ))}
//                           </div>
//                           <p className="text-xs text-amber-200/80 mb-4">Rated 4.9/5 by our community</p>
                          
//                           <div className="space-y-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-amber-400/20">
//                             <div className="flex items-center gap-2 text-sm">
//                               <span className="text-amber-400">✓</span>
//                               <span className="text-amber-100/90">Free itinerary planning</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-sm">
//                               <span className="text-amber-400">✓</span>
//                               <span className="text-amber-100/90">24/7 local support</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-sm">
//                               <span className="text-amber-400">✓</span>
//                               <span className="text-amber-100/90">10% off first booking</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-sm">
//                               <span className="text-amber-400">✓</span>
//                               <span className="text-amber-100/90">Exclusive tea plantation tours</span>
//                             </div>
//                           </div>
//                         </motion.div>
//                       </div>

//                       {/* RIGHT SIDE - Signup Form */}
//                       <div className="flex flex-col justify-center px-5 md:px-6 lg:px-8 py-5 md:py-6">
//                         <motion.div
//                           initial={{ x: 20, opacity: 0 }}
//                           animate={{ x: 0, opacity: 1 }}
//                           transition={{ delay: 0.2 }}
//                         >
//                           <p className="text-[9px] md:text-xs uppercase tracking-[0.2em] text-amber-200/80 mb-2 md:mb-3">
//                             Hello Travels • Sri Lanka
//                           </p>
                          
//                           <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
//                             Begin your adventure
//                           </h2>
//                           <p className="text-xs md:text-sm text-amber-100/80 mb-4 md:mb-5">
//                             Create your account
//                           </p>

//                           <form className="space-y-3 md:space-y-4">
//                             {/* Name fields - Grid layout */}
//                             <div className="grid grid-cols-2 gap-2">
//                               <Input
//                                 label="First Name"
//                                 type="text"
//                                 placeholder="Sarah"
//                                 icon="👤"
//                                 compact
//                               />
//                               <Input
//                                 label="Last Name"
//                                 type="text"
//                                 placeholder="Chen"
//                                 icon="👤"
//                                 compact
//                               />
//                             </div>

//                             {/* Email field */}
//                             <Input
//                               label="Email"
//                               type="email"
//                               placeholder="you@example.com"
//                               icon="✉️"
//                               compact
//                             />

//                             {/* Phone Number field */}
//                             <Input
//                               label="Phone"
//                               type="tel"
//                               placeholder="+94 77 123 4567"
//                               icon="📱"
//                               compact
//                             />

//                             {/* Password fields - Grid layout */}
//                             <div className="grid grid-cols-2 gap-2">
//                               <Input
//                                 label="Password"
//                                 type="password"
//                                 placeholder="••••••••"
//                                 icon="🔒"
//                                 compact
//                               />
//                               <Input
//                                 label="Confirm"
//                                 type="password"
//                                 placeholder="••••••••"
//                                 icon="✓"
//                                 compact
//                               />
//                             </div>

//                             {/* WhatsApp preference */}
//                             <div className="flex items-center gap-2 text-[10px] md:text-xs text-amber-100/80">
//                               <input type="checkbox" className="accent-amber-400" />
//                               <span>📱 Get travel alerts on WhatsApp</span>
//                             </div>

//                             <PremiumButton compact>
//                               <span className="flex items-center justify-center gap-1.5">
//                                 ✨ Start Sri Lanka Journey
//                               </span>
//                             </PremiumButton>
//                           </form>

//                           <p className="mt-4 text-[10px] md:text-xs text-amber-100/80 text-center">
//                             Have an account?{" "}
//                             <button 
//                               onClick={switchToLogin}
//                               className="text-amber-300 font-medium hover:text-white"
//                             >
//                               Sign in
//                             </button>
//                           </p>
//                         </motion.div>
//                       </div>
//                     </>
//                   )}
//                 </motion.div>
//               ) : (
//                 /* ===== DASHBOARD VIEW ===== */
//                 <motion.div
//                   key="dashboard"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className="relative z-10 p-5 md:p-6"
//                 >
//                   {/* Dashboard Header - Compact */}
//                   <div className="flex items-center justify-between mb-4">
//                     <div>
//                       <motion.h2 
//                         initial={{ y: -10, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         className="text-lg md:text-xl font-bold text-white"
//                       >
//                         Your Sri Lanka Journey
//                       </motion.h2>
//                       <motion.p 
//                         initial={{ y: -10, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.1 }}
//                         className="text-amber-200/80 text-[10px] md:text-xs"
//                       >
//                         Welcome back, Sarah! ✈️
//                       </motion.p>
//                     </div>
                    
//                     {/* User Avatar - Compact */}
//                     <motion.div 
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ type: "spring", delay: 0.2 }}
//                       className="flex items-center gap-2"
//                     >
//                       <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center">
//                         <span className="text-amber-300 text-sm">👤</span>
//                       </div>
//                       <div className="text-white text-[10px] md:text-xs">
//                         <div className="font-medium">Sarah</div>
//                         <div className="text-amber-200/60">Explorer</div>
//                       </div>
//                     </motion.div>
//                   </div>

//                   {/* Stats Cards - Smaller */}
//                   <div className="grid grid-cols-4 gap-2 mb-4">
//                     {[
//                       { label: "Days", value: "12", icon: "⏳" },
//                       { label: "Bookings", value: "5", icon: "📅" },
//                       { label: "Saved", value: "24", icon: "📍" },
//                       { label: "Photos", value: "128", icon: "📸" },
//                     ].map((stat, index) => (
//                       <motion.div
//                         key={stat.label}
//                         initial={{ y: 10, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.1 * index }}
//                         className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20 text-center"
//                       >
//                         <div className="text-base mb-0.5">{stat.icon}</div>
//                         <div className="text-white font-bold text-sm">{stat.value}</div>
//                         <div className="text-amber-200/70 text-[8px] md:text-[10px]">{stat.label}</div>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Destinations - Smaller Cards */}
//                   <div className="grid md:grid-cols-3 gap-2 mb-3">
//                     {DESTINATIONS.map((dest, index) => (
//                       <motion.div
//                         key={dest.name}
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ delay: 0.2 + index * 0.1 }}
//                         whileHover={{ y: -3 }}
//                         onClick={() => setSelectedDestination(index)}
//                         className={`cursor-pointer rounded-lg overflow-hidden border ${
//                           selectedDestination === index 
//                             ? "border-amber-400 shadow-md shadow-amber-400/20" 
//                             : "border-white/10 hover:border-white/30"
//                         }`}
//                       >
//                         <div className="h-20 bg-cover bg-center" style={{ backgroundImage: `url(${dest.image})` }}>
//                           <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent p-2 flex items-end">
//                             <span className="text-white text-xs font-medium">{dest.name}</span>
//                           </div>
//                         </div>
//                         <div className="bg-white/10 backdrop-blur-md p-2">
//                           <div className="flex justify-between text-[8px] md:text-[10px]">
//                             <span className="text-amber-200/80">{dest.date}</span>
//                             <span className="text-amber-300">{dest.weather}</span>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Quick Actions - Compact */}
//                   <motion.div 
//                     initial={{ y: 10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.5 }}
//                     className="flex gap-2 justify-end items-center"
//                   >
//                     {["📋", "🚗", "🏨"].map((icon, i) => (
//                       <button
//                         key={i}
//                         className="w-7 h-7 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-lg text-white text-sm border border-white/10"
//                       >
//                         {icon}
//                       </button>
//                     ))}
//                     <button
//                       onClick={swapView}
//                       className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 rounded-lg text-amber-300 text-xs border border-amber-500/30 flex items-center gap-1"
//                     >
//                       <span>🚪</span>
//                       Exit
//                     </button>
//                   </motion.div>

//                   {/* Flight info */}
//                   <motion.div 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.65 }}
//                     className="mt-2 text-center"
//                   >
//                     <span className="text-[8px] md:text-[9px] text-amber-200/40 flex items-center justify-center gap-1">
//                       <span>✈️</span> Next flight to Colombo • 12 days
//                       <span>✈️</span>
//                     </span>
//                   </motion.div>

//                   {/* Switch account link - Smaller */}
//                   <motion.div 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.6 }}
//                     className="mt-2 text-center"
//                   >
//                     <button
//                       onClick={() => {
//                         setCurrentView("auth");
//                         setAuthMode("login");
//                       }}
//                       className="text-[9px] md:text-[10px] text-amber-200/60 hover:text-amber-200"
//                     >
//                       Not Sarah? Switch account
//                     </button>
//                   </motion.div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>

//       {/* Loading Overlay - Now with plane animation */}
//       <AnimatePresence>
//         {isLoading && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
//           >
//             <motion.div
//               animate={{ 
//                 rotate: 360,
//                 x: [0, 10, -10, 0],
//                 y: [0, -5, 5, 0]
//               }}
//               transition={{ 
//                 duration: 1.5, 
//                 repeat: Infinity,
//                 ease: "easeInOut" 
//               }}
//               className="text-5xl"
//             >
//               ✈️
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* ========================= */
// /* 🔹 Reusable Components - Compact */
// /* ========================= */

// function Input({ label, type, placeholder, icon, compact }: { label: string; type: string; placeholder?: string; icon?: string; compact?: boolean }) {
//   return (
//     <div className="space-y-1">
//       <label className="text-[9px] md:text-[10px] text-amber-50/90 flex items-center gap-1">
//         <span>{icon}</span> {label}
//       </label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className={`
//           w-full rounded-lg bg-white/5 border border-white/15 
//           text-white placeholder-amber-100/40 
//           focus:outline-none focus:ring-1 focus:ring-amber-300 focus:border-transparent
//           transition backdrop-blur-md
//           ${compact ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-2 text-sm'}
//         `}
//         required
//       />
//     </div>
//   );
// }

// function PremiumButton({ children, compact }: { children: React.ReactNode; compact?: boolean }) {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       className={`
//         w-full rounded-lg 
//         bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400
//         text-slate-900 font-semibold 
//         shadow-lg shadow-amber-500/30
//         hover:shadow-amber-400/50 
//         transition-all duration-300
//         ${compact ? 'py-1.5 text-xs' : 'py-2 text-sm'}
//       `}
//       type="submit"
//     >
//       {children}
//     </motion.button>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";


type View = "auth" | "dashboard";
type AuthMode = "login" | "signup";

const BACKGROUND_IMAGES = [
  "/hero/srilanka-1.jpg",
  "/hero/srilanka-2.jpg",
  "/hero/srilanka-3.jpg",
];

const DESTINATIONS = [
  {
    name: "Sigiriya Rock",
    date: "Jun 15-16",
    weather: "Sunny 32°C",
    image: "/hero/srilanka-1.jpg",
  },
  {
    name: "Kandy",
    date: "Jun 17-19",
    weather: "Partly cloudy 28°C",
    image: "/hero/srilanka-2.jpg",
  },
  {
    name: "Galle Fort",
    date: "Jun 20-22",
    weather: "Breezy 30°C",
    image: "/hero/srilanka-3.jpg",
  },
];

export default function MagicalTravelSwap() {
  const [currentView, setCurrentView] = useState<View>("auth");
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [bgIndex, setBgIndex] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  
  const isAuth = currentView === "auth";
  const isLogin = authMode === "login";

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

  const swapView = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(isAuth ? "dashboard" : "auth");
      setIsLoading(false);
    }, 800);
  };

  const switchToSignup = () => setAuthMode("signup");
  const switchToLogin = () => setAuthMode("login");

const switchToHome = () => router.push("/");

  const clipPath = isAuth
    ? isLogin
      ? "polygon(0% 0%, 84% 0%, 56% 100%, 0% 100%)"
      : "polygon(16% 0%, 100% 0%, 100% 100%, 44% 100%)"
    : "polygon(16% 0%, 100% 0%, 100% 100%, 44% 100%)";

  const brandGradient = isAuth
    ? isLogin
      ? "bg-[linear-gradient(135deg,#067a47_0%,#035c35_42%,#0d3e2b_100%)]"
      : "bg-[linear-gradient(135deg,#0f5f45_0%,#067a47_46%,#c6a43f_100%)]"
    : "bg-[linear-gradient(135deg,#0b3d2e_0%,#067a47_42%,#c6a43f_100%)]";

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f9fcfa_0%,#f3f8f5_100%)] px-3 py-6 md:px-4 md:py-8">
      {/* decorative background glows */}
      <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-[#cf5b8a]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#f0ab1d]/10 blur-3xl" />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={BACKGROUND_IMAGES[bgIndex]}
          alt="Sri Lanka background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,29,21,0.52),rgba(8,29,21,0.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,171,29,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(207,91,138,0.10),transparent_20%)]" />
      </div>

      {/* Floating switch button */}
      <motion.button
        onClick={swapView}
        disabled={isLoading}
        className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/18"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <motion.span
          animate={{
            rotate: isLoading ? 360 : 0,
            x: isLoading ? [0, 5, -5, 0] : 0,
          }}
          transition={{
            duration: 1,
            repeat: isLoading ? Infinity : 0,
            ease: "linear",
          }}
          className="inline-block"
        >
          {isAuth ? "✈️" : "↩"}
        </motion.span>
        {isAuth ? "Preview Dashboard" : "Back to Login"}
      </motion.button>

      {/* Main card */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl items-center">
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full overflow-hidden rounded-[30px] border border-white/15 bg-[rgba(255,255,255,0.08)] shadow-[0_24px_70px_rgba(0,0,0,0.30)] backdrop-blur-2xl"
        >
          <div className="min-h-[390px] md:min-h-[440px]">
            {/* diagonal premium panel */}
            <motion.div
              className={`absolute inset-0 ${brandGradient}`}
              initial={false}
              animate={{ clipPath }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{ clipPath }}
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]" />

            <AnimatePresence mode="wait">
              {isAuth ? (
                <motion.div
                  key={`auth-${authMode}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 grid h-full grid-cols-1 md:grid-cols-2"
                >
                  {isLogin ? (
                    <>
                      {/* LOGIN FORM */}
                      <div className="flex flex-col justify-center px-4 py-5 md:px-6 lg:px-8">
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.18 }}
                        >
                          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#f6d78f] backdrop-blur md:text-[10px]">
                            Luxury Sri Lanka Travel
                          </p>

                          <h2
                            className="text-2xl font-semibold text-white md:text-3xl"
                            style={{ fontFamily: "var(--font-playfair, serif)" }}
                          >
                            Welcome back
                          </h2>

                          <p className="mb-5 mt-2 max-w-sm text-xs leading-6 text-white/78 md:text-sm">
                            Sign in and continue your calm, beautifully planned
                            Sri Lanka journey.
                          </p>

                          <form className="space-y-3">
                            <Input
                              label="Email"
                              type="email"
                              placeholder="you@example.com"
                              icon="✉"
                              compact
                            />
                            <Input
                              label="Password"
                              type="password"
                              placeholder="••••••••"
                              icon="•"
                              compact
                            />

                            <div className="flex items-center justify-between text-[10px] md:text-[11px]">
                              <label className="flex items-center gap-2 text-white/72">
                                <input
                                  type="checkbox"
                                  className="accent-[#c6a43f]"
                                />
                                Remember me
                              </label>
                              <button
                                type="button"
                                className="text-[#f6d78f] transition hover:text-white"
                              >
                                Forgot password?
                              </button>
                            </div>

                            <PremiumButton compact>
                              <span className="flex items-center justify-center gap-2">
                                ✈ Sign In
                              </span>
                            </PremiumButton>
                          </form>

                          <p className="mt-4 text-center text-[10px] text-white/70 md:text-[11px]">
                            Don&apos;t have an account?{" "}
                            <button
                              type="button"
                              onClick={switchToSignup}
                              className="font-semibold text-[#f6d78f] hover:text-white"
                            >
                              Create one
                            </button>


                          </p>

                              <p className="mt-2 text-center text-[10px] text-white/70 md:text-[11px]">
                            Back to Home{" "}
                            <button
                              type="button"
                              onClick={switchToHome}
                              className="font-semibold text-[#f6d78f] hover:text-white"
                            >
                              Home
                            </button>


                          </p>
                          
                        </motion.div>
                      </div>

                      {/* LOGIN MESSAGE */}
                      <div className="hidden flex-col justify-center px-6 py-5 lg:flex lg:px-8">
                        <motion.div
                          initial={{ x: 24, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.28 }}
                          className="ml-auto max-w-xs text-right text-white"
                        >
                          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                            Prathibha Lanka Voyages
                          </div>

                          <h3
                            className="text-3xl font-semibold leading-tight"
                            style={{ fontFamily: "var(--font-playfair, serif)" }}
                          >
                            Discover Sri Lanka
                          </h3>

                          <p className="mt-3 text-xs leading-6 text-white/82 md:text-sm">
                            Scenic highlands, heritage cities, golden shores,
                            and warm island hospitality in one unforgettable
                            destination.
                          </p>

                          <div className="mt-5 space-y-2.5">
                            {[
                              "Ancient cities",
                              "Tea plantations",
                              "Wildlife safaris",
                              "Golden beaches",
                            ].map((item) => (
                              <div
                                key={item}
                                className="flex items-center justify-end gap-3 text-xs md:text-sm"
                              >
                                <span className="text-white/86">{item}</span>
                                <div className="h-2 w-2 rounded-full bg-[#f0ab1d]" />
                              </div>
                            ))}
                          </div>

                          <div className="mt-6 text-[11px] text-white/55">
                            ✦ Pearl of the Indian Ocean
                          </div>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* SIGNUP MESSAGE */}
                      <div className="hidden flex-col justify-center px-6 py-5 lg:flex lg:px-8">
                        <motion.div
                          initial={{ x: -24, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.28 }}
                          className="max-w-xs text-white"
                        >
                          <div className="mb-4 flex items-center gap-3 text-2xl">
                            <span>🦁</span>
                            <span>🌴</span>
                            <span>🐘</span>
                          </div>

                          <h3
                            className="text-3xl font-semibold leading-tight"
                            style={{ fontFamily: "var(--font-playfair, serif)" }}
                          >
                            Begin your island story
                          </h3>

                          <p className="mt-3 text-xs leading-6 text-white/82 md:text-sm">
                            Join travelers who choose elegant planning,
                            meaningful experiences, and beautifully crafted Sri
                            Lankan journeys.
                          </p>

                          <div className="mt-4 flex gap-1 text-base">
                            {["★", "★", "★", "★", "★"].map((star, i) => (
                              <span key={i} className="text-[#f6d78f]">
                                {star}
                              </span>
                            ))}
                          </div>

                          <p className="mt-2 text-[11px] text-white/60">
                            Thoughtful service, trusted planning, memorable stays
                          </p>

                          <div className="mt-5 space-y-2.5 rounded-[22px] border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                            {[
                              "Free itinerary planning",
                              "24/7 local support",
                              "Special first-booking offers",
                              "Curated island experiences",
                            ].map((item) => (
                              <div
                                key={item}
                                className="flex items-center gap-3 text-xs text-white/86 md:text-sm"
                              >
                                <span className="text-[#f6d78f]">✓</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* SIGNUP FORM */}
                      <div className="flex flex-col justify-center px-4 py-5 md:px-6 lg:px-8">
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.18 }}
                        >
                          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#f6d78f] backdrop-blur md:text-[10px]">
                            Create your account
                          </p>

                          <h2
                            className="text-2xl font-semibold text-white md:text-3xl"
                            style={{ fontFamily: "var(--font-playfair, serif)" }}
                          >
                            Start your journey
                          </h2>

                          <p className="mb-5 mt-2 max-w-sm text-xs leading-6 text-white/78 md:text-sm">
                            Create your account and begin exploring Sri Lanka in
                            a more personal, elegant way.
                          </p>

                          <form className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <Input
                                label="First Name"
                                type="text"
                                placeholder="Sarah"
                                icon="◦"
                                compact
                              />
                              <Input
                                label="Last Name"
                                type="text"
                                placeholder="Chen"
                                icon="◦"
                                compact
                              />
                            </div>

                            <Input
                              label="Email"
                              type="email"
                              placeholder="you@example.com"
                              icon="✉"
                              compact
                            />

                            <Input
                              label="Phone"
                              type="tel"
                              placeholder="+94 77 123 4567"
                              icon="◦"
                              compact
                            />

                            <div className="grid grid-cols-2 gap-3">
                              <Input
                                label="Password"
                                type="password"
                                placeholder="••••••••"
                                icon="•"
                                compact
                              />
                              <Input
                                label="Confirm"
                                type="password"
                                placeholder="••••••••"
                                icon="✓"
                                compact
                              />
                            </div>

                            <div className="flex items-center gap-2 text-[10px] text-white/70 md:text-[11px]">
                              <input
                                type="checkbox"
                                className="accent-[#c6a43f]"
                              />
                              <span>Get travel alerts on WhatsApp</span>
                            </div>

                            <PremiumButton compact>
                              <span className="flex items-center justify-center gap-2">
                                ✨ Create Account
                              </span>
                            </PremiumButton>
                          </form>

                          <p className="mt-4 text-center text-[10px] text-white/70 md:text-[11px]">
                            Already have an account?{" "}
                            <button
                              type="button"
                              onClick={switchToLogin}
                              className="font-semibold text-[#f6d78f] hover:text-white"
                            >
                              Sign in
                            </button>
                          </p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 p-4 md:p-5"
                >
                  {/* dashboard header */}
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <motion.h2
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-xl font-semibold text-white md:text-2xl"
                        style={{ fontFamily: "var(--font-playfair, serif)" }}
                      >
                        Your Sri Lanka Journey
                      </motion.h2>
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mt-1 text-[11px] text-white/72 md:text-xs"
                      >
                        Welcome back, Sarah — your next island escape is waiting.
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-3 py-2 backdrop-blur-sm"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6d78f]/20 text-base text-[#f6d78f]">
                        👤
                      </div>
                      <div className="text-white">
                        <div className="text-xs font-medium md:text-sm">Sarah</div>
                        <div className="text-[10px] text-white/55">
                          Premium Explorer
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* stats */}
                  <div className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {[
                      { label: "Days Left", value: "12", icon: "⏳" },
                      { label: "Bookings", value: "5", icon: "📅" },
                      { label: "Saved Places", value: "24", icon: "📍" },
                      { label: "Photos", value: "128", icon: "📸" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="rounded-[20px] border border-white/12 bg-white/10 p-3 text-center backdrop-blur-md"
                      >
                        <div className="mb-1 text-base">{stat.icon}</div>
                        <div className="text-lg font-semibold text-white">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#f6d78f]/85 md:text-[10px]">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* destinations */}
                  <div className="mb-4 grid gap-3 md:grid-cols-3">
                    {DESTINATIONS.map((dest, index) => (
                      <motion.div
                        key={dest.name}
                        initial={{ scale: 0.94, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ y: -4 }}
                        onClick={() => setSelectedDestination(index)}
                        className={`cursor-pointer overflow-hidden rounded-[20px] border transition ${
                          selectedDestination === index
                            ? "border-[#f6d78f]/80 shadow-[0_12px_30px_rgba(240,171,29,0.18)]"
                            : "border-white/10 hover:border-white/25"
                        }`}
                      >
                        <div
                          className="h-24 bg-cover bg-center"
                          style={{ backgroundImage: `url(${dest.image})` }}
                        >
                          <div className="flex h-full w-full items-end bg-gradient-to-t from-[#071c14]/72 to-transparent p-3">
                            <span
                              className="text-base font-semibold text-white"
                              style={{ fontFamily: "var(--font-playfair, serif)" }}
                            >
                              {dest.name}
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/10 p-3 backdrop-blur-md">
                          <div className="flex items-center justify-between gap-2 text-[10px] md:text-[11px]">
                            <span className="text-white/75">{dest.date}</span>
                            <span className="text-[#f6d78f]">{dest.weather}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* actions */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap items-center justify-end gap-2"
                  >
                    {["📋", "🚗", "🏨"].map((icon, i) => (
                      <button
                        key={i}
                        className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-sm text-white transition hover:bg-white/12"
                        type="button"
                      >
                        {icon}
                      </button>
                    ))}
                    <button
                      onClick={swapView}
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-[#f6d78f]/25 bg-[#f6d78f]/12 px-3 py-1.5 text-[11px] font-semibold text-[#f6d78f] transition hover:bg-[#f6d78f]/18"
                    >
                      <span>🚪</span>
                      Exit
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65 }}
                    className="mt-3 text-center"
                  >
                    <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/40 md:text-[10px]">
                      ✈ Next flight to Colombo • 12 days
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-3 text-center"
                  >
                    <button
                      onClick={() => {
                        setCurrentView("auth");
                        setAuthMode("login");
                      }}
                      type="button"
                      className="text-[10px] text-white/55 transition hover:text-white/82"
                    >
                      Not Sarah? Switch account
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* loading */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-md"
          >
            <motion.div
              animate={{
                rotate: 360,
                x: [0, 10, -10, 0],
                y: [0, -5, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-5xl"
            >
              ✈️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Input({
  label,
  type,
  placeholder,
  icon,
  compact,
}: {
  label: string;
  type: string;
  placeholder?: string;
  icon?: string;
  compact?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/72 md:text-[11px]">
        <span className="text-[#f6d78f]">{icon}</span>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full rounded-2xl border border-white/12 bg-white/8
          text-white placeholder:text-white/35
          backdrop-blur-md transition
          focus:border-[#f6d78f]/40 focus:outline-none focus:ring-2 focus:ring-[#f6d78f]/20
          ${compact ? "px-3 py-2 text-xs md:text-sm" : "px-4 py-3 text-sm"}
        `}
        required
      />
    </div>
  );
}

function PremiumButton({
  children,
  compact,
}: {
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={`
        w-full rounded-full bg-[linear-gradient(135deg,#067a47_0%,#035c35_50%,#c6a43f_100%)]
        font-semibold text-white shadow-[0_14px_34px_rgba(6,122,71,0.26)]
        transition-all duration-300 hover:shadow-[0_18px_40px_rgba(6,122,71,0.34)]
        ${compact ? "py-2 text-xs md:text-sm" : "py-3 text-sm"}
      `}
      type="submit"
    >
      {children}
    </motion.button>
  );
}