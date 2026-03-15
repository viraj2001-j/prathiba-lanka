// "use client";

// import { motion } from "framer-motion";
// import {
//   Palmtree,
//   Mountain,
//   Compass,
//   HeartHandshake,
//   MapPin,
//   ShieldCheck,
//   Sparkles,
//   Camera,
// } from "lucide-react";

// const highlights = [
//   {
//     icon: Compass,
//     title: "Tailor-Made Journeys",
//     text: "Thoughtfully planned travel experiences shaped around your interests, pace, and style of travel.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Warm Local Hospitality",
//     text: "A personal approach that reflects the genuine kindness, care, and welcoming spirit Sri Lanka is known for.",
//   },
//   {
//     icon: MapPin,
//     title: "Island-Wide Experiences",
//     text: "From golden beaches and misty hills to wildlife parks and cultural cities, every journey feels diverse and memorable.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Comfort & Reliability",
//     text: "Smooth coordination, trusted guidance, and attention to detail to help guests travel with confidence.",
//   },
// ];

// const values = [
//   {
//     title: "Authentic Sri Lanka",
//     text: "We believe the best journeys are not rushed. They are felt through landscapes, flavors, people, and quiet unforgettable moments.",
//   },
//   {
//     title: "Personal Service",
//     text: "Every traveler is different. That is why we focus on meaningful planning instead of one-size-fits-all experiences.",
//   },
//   {
//     title: "Beautifully Balanced Travel",
//     text: "Adventure, culture, comfort, and relaxation should flow together naturally in one complete island journey.",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <main className="relative overflow-hidden bg-[#f7f5ef] text-slate-800">
//       {/* Background decor */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-emerald-100/60 blur-3xl" />
//         <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-amber-100/60 blur-3xl" />
//         <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-sky-100/40 blur-3xl" />
//       </div>

//       {/* Hero */}
//       <section className="relative">
//         <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 lg:px-12 lg:pt-24">
//           <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
//             <motion.div
//               initial={{ opacity: 0, y: 26 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur">
//                 <Sparkles className="h-4 w-4" />
//                 Discover the soul of Sri Lanka
//               </div>

//               <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
//                 About <span className="text-emerald-700">Prathibha Lanka Voyages</span>
//               </h1>

//               <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
//                 At Prathibha Lanka Voyages, we believe travel should feel personal,
//                 effortless, and unforgettable. Our vision is to introduce the beauty
//                 of Sri Lanka through carefully crafted journeys that blend culture,
//                 nature, comfort, and genuine local warmth.
//               </p>

//               <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
//                 From ancient heritage sites and lush hill country to sunlit coastlines
//                 and wildlife-rich landscapes, we create experiences that help travelers
//                 connect with the island in a deeper and more meaningful way.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
//                   Private Tours
//                 </div>
//                 <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
//                   Cultural Experiences
//                 </div>
//                 <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
//                   Scenic Getaways
//                 </div>
//                 <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
//                   Personalized Planning
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.96, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//             >
//               <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur">
//                 <div className="relative overflow-hidden rounded-[24px]">
//                   <img
//                     src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80"
//                     alt="Scenic Sri Lanka train through hill country"
//                     className="h-[520px] w-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-transparent" />

//                   <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-md">
//                     <div className="text-sm uppercase tracking-[0.28em] text-white/80">
//                       Island journeys with soul
//                     </div>
//                     <div className="mt-2 text-2xl font-semibold">
//                       Explore beyond the ordinary
//                     </div>
//                     <div className="mt-2 text-sm leading-6 text-white/85">
//                       Curated travel across beaches, hill country, heritage cities,
//                       wildlife escapes, and hidden local moments.
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -left-5 top-10 hidden rounded-2xl border border-emerald-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:block">
//                 <div className="flex items-center gap-3">
//                   <Palmtree className="h-5 w-5 text-emerald-700" />
//                   <div>
//                     <div className="text-sm font-semibold text-slate-800">Tropical escapes</div>
//                     <div className="text-xs text-slate-500">Coast, culture, and calm</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -right-5 bottom-10 hidden rounded-2xl border border-amber-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:block">
//                 <div className="flex items-center gap-3">
//                   <Mountain className="h-5 w-5 text-amber-700" />
//                   <div>
//                     <div className="text-sm font-semibold text-slate-800">Hill country charm</div>
//                     <div className="text-xs text-slate-500">Mist, tea, and scenery</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Story */}
//       <section className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
//         <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
//           <div className="rounded-[30px] border border-white/60 bg-white/80 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
//             <div className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
//               Our Story
//             </div>
//             <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
//               Travel designed with heart, not just itineraries
//             </h2>
//             <p className="mt-5 leading-8 text-slate-600">
//               Prathibha Lanka Voyages is built around the idea that Sri Lanka is
//               more than a destination. It is an experience of contrasts and harmony:
//               timeless temples, emerald mountains, ocean sunsets, warm smiles, rich
//               flavors, and stories waiting in every corner of the island.
//             </p>
//             <p className="mt-4 leading-8 text-slate-600">
//               Our role is to turn that richness into seamless journeys for travelers
//               who want comfort, authenticity, and memorable moments at every step.
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-3">
//             {values.map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.45, delay: index * 0.08 }}
//                 className="rounded-[28px] border border-slate-200/70 bg-gradient-to-br from-white to-[#faf7f1] p-6 shadow-[0_8px_28px_rgba(15,23,42,0.05)]"
//               >
//                 <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
//                 <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Highlights */}
//       <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
//         <div className="mb-10 max-w-2xl">
//           <div className="mb-4 inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
//             Why travel with us
//           </div>
//           <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
//             A refined local travel experience inspired by the island itself
//           </h2>
//           <p className="mt-4 leading-8 text-slate-600">
//             We focus on journeys that feel smooth, immersive, and beautifully
//             balanced—so guests can spend less time worrying and more time enjoying
//             Sri Lanka.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {highlights.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{ duration: 0.45, delay: index * 0.08 }}
//                 className="group rounded-[28px] border border-white/60 bg-white/85 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
//               >
//                 <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 p-3 text-emerald-700">
//                   <Icon className="h-5 w-5" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
//                 <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Brand promise / split section */}
//       <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
//         <div className="grid overflow-hidden rounded-[34px] border border-white/60 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:grid-cols-2">
//           <div className="p-8 md:p-10 lg:p-12">
//             <div className="mb-4 inline-flex rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
//               Our promise
//             </div>
//             <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
//               To show Sri Lanka in a way that feels elegant, genuine, and unforgettable
//             </h2>
//             <p className="mt-5 leading-8 text-slate-600">
//               Whether it is a first visit or a return to the island, our goal is
//               to make every journey feel effortless and full of meaningful detail.
//               We want travelers to leave not only with beautiful photographs, but
//               with a real connection to Sri Lanka.
//             </p>

//             <div className="mt-8 space-y-4">
//               <div className="flex items-start gap-4 rounded-2xl bg-[#f8f6f1] p-4">
//                 <Camera className="mt-1 h-5 w-5 text-emerald-700" />
//                 <div>
//                   <div className="font-medium text-slate-900">Memorable moments</div>
//                   <div className="text-sm leading-7 text-slate-600">
//                     Scenic routes, hidden gems, iconic landmarks, and rich local experiences.
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 rounded-2xl bg-[#f8f6f1] p-4">
//                 <Palmtree className="mt-1 h-5 w-5 text-emerald-700" />
//                 <div>
//                   <div className="font-medium text-slate-900">Relaxed island rhythm</div>
//                   <div className="text-sm leading-7 text-slate-600">
//                     Travel that feels calm, warm, and beautifully paced rather than rushed.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative min-h-[360px]">
//             <img
//               src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1400&q=80"
//               alt="Tropical beach and palm trees in Sri Lanka"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-slate-900/35 via-slate-900/15 to-emerald-900/25" />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




// "use client";

// import { motion } from "framer-motion";
// import {
//   Palmtree,
//   Mountain,
//   Compass,
//   HeartHandshake,
//   MapPin,
//   ShieldCheck,
//   Sparkles,
//   Camera,
// } from "lucide-react";

// const highlights = [
//   {
//     icon: Compass,
//     title: "Tailor-Made Journeys",
//     text: "Thoughtfully planned travel experiences shaped around your interests, pace, and style of travel.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Warm Local Hospitality",
//     text: "A personal approach that reflects the genuine kindness, care, and welcoming spirit Sri Lanka is known for.",
//   },
//   {
//     icon: MapPin,
//     title: "Island-Wide Experiences",
//     text: "From golden beaches and misty hills to wildlife parks and cultural cities, every journey feels diverse and memorable.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Comfort & Reliability",
//     text: "Smooth coordination, trusted guidance, and attention to detail to help guests travel with confidence.",
//   },
// ];

// const values = [
//   {
//     title: "Authentic Sri Lanka",
//     text: "We believe the best journeys are not rushed. They are felt through landscapes, flavors, people, and quiet unforgettable moments.",
//   },
//   {
//     title: "Personal Service",
//     text: "Every traveler is different. That is why we focus on meaningful planning instead of one-size-fits-all experiences.",
//   },
//   {
//     title: "Beautifully Balanced Travel",
//     text: "Adventure, culture, comfort, and relaxation should flow together naturally in one complete island journey.",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <main className="relative overflow-hidden bg-[#d9e4dd] text-slate-800">
//       {/* Background decor - image based water palette */}
//       <div className="absolute inset-0 -z-20">
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(180deg, #d9e4dd 0%, #bfd3ca 16%, #89b8b4 34%, #3c9ca3 58%, #1f7a78 80%, #155b5e 100%)",
//           }}
//         />
//       </div>

//       {/* Soft color glows */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -left-16 top-0 h-[380px] w-[380px] rounded-full bg-[#d9e4dd]/45 blur-3xl" />
//         <div className="absolute right-[-60px] top-20 h-[420px] w-[420px] rounded-full bg-[#89b8b4]/30 blur-3xl" />
//         <div className="absolute left-[22%] top-[42%] h-[340px] w-[340px] rounded-full bg-[#3c9ca3]/18 blur-3xl" />
//         <div className="absolute bottom-[-40px] right-[12%] h-[360px] w-[360px] rounded-full bg-[#155b5e]/20 blur-3xl" />
//       </div>

//       {/* Hero */}
//       <section className="relative">
//         <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 lg:px-12 lg:pt-24">
//           <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
//             <motion.div
//               initial={{ opacity: 0, y: 26 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/18 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md">
//                 <Sparkles className="h-4 w-4" />
//                 Discover the soul of Sri Lanka
//               </div>

//               <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
//                 About <span className="text-[#dff3ef]">Prathibha Lanka Voyages</span>
//               </h1>

//               <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
//                 At Prathibha Lanka Voyages, we believe travel should feel personal,
//                 effortless, and unforgettable. Our vision is to introduce the beauty
//                 of Sri Lanka through carefully crafted journeys that blend culture,
//                 nature, comfort, and genuine local warmth.
//               </p>

//               <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
//                 From ancient heritage sites and lush hill country to sunlit coastlines
//                 and wildlife-rich landscapes, we create experiences that help travelers
//                 connect with the island in a deeper and more meaningful way.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <div className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md">
//                   Private Tours
//                 </div>
//                 <div className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md">
//                   Cultural Experiences
//                 </div>
//                 <div className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md">
//                   Scenic Getaways
//                 </div>
//                 <div className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md">
//                   Personalized Planning
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.96, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//             >
//               <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/12 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl">
//                 <div className="relative overflow-hidden rounded-[24px]">
//                   <img
//                     src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80"
//                     alt="Scenic Sri Lanka train through hill country"
//                     className="h-[520px] w-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,91,94,0.05)_0%,rgba(31,122,120,0.18)_45%,rgba(15,23,42,0.48)_100%)]" />

//                   <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-[#1f7a78]/28 p-4 text-white backdrop-blur-xl">
//                     <div className="text-sm uppercase tracking-[0.28em] text-white/80">
//                       Island journeys with soul
//                     </div>
//                     <div className="mt-2 text-2xl font-semibold">
//                       Explore beyond the ordinary
//                     </div>
//                     <div className="mt-2 text-sm leading-6 text-white/85">
//                       Curated travel across beaches, hill country, heritage cities,
//                       wildlife escapes, and hidden local moments.
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -left-5 top-10 hidden rounded-2xl border border-white/25 bg-[rgba(245,250,248,0.82)] px-4 py-3 shadow-xl backdrop-blur-md md:block">
//                 <div className="flex items-center gap-3">
//                   <Palmtree className="h-5 w-5 text-[#1f7a78]" />
//                   <div>
//                     <div className="text-sm font-semibold text-slate-800">Tropical escapes</div>
//                     <div className="text-xs text-slate-500">Coast, culture, and calm</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -right-5 bottom-10 hidden rounded-2xl border border-white/25 bg-[rgba(245,250,248,0.82)] px-4 py-3 shadow-xl backdrop-blur-md md:block">
//                 <div className="flex items-center gap-3">
//                   <Mountain className="h-5 w-5 text-[#1f7a78]" />
//                   <div>
//                     <div className="text-sm font-semibold text-slate-800">Hill country charm</div>
//                     <div className="text-xs text-slate-500">Mist, tea, and scenery</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Story */}
//       <section className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
//         <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
//           <div className="rounded-[30px] border border-white/25 bg-[rgba(245,250,248,0.78)] p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-md">
//             <div className="mb-4 inline-flex rounded-full bg-[#dcece8] px-4 py-2 text-sm font-medium text-[#155b5e]">
//               Our Story
//             </div>
//             <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
//               Travel designed with heart, not just itineraries
//             </h2>
//             <p className="mt-5 leading-8 text-slate-600">
//               Prathibha Lanka Voyages is built around the idea that Sri Lanka is
//               more than a destination. It is an experience of contrasts and harmony:
//               timeless temples, emerald mountains, ocean sunsets, warm smiles, rich
//               flavors, and stories waiting in every corner of the island.
//             </p>
//             <p className="mt-4 leading-8 text-slate-600">
//               Our role is to turn that richness into seamless journeys for travelers
//               who want comfort, authenticity, and memorable moments at every step.
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-3">
//             {values.map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.45, delay: index * 0.08 }}
//                 className="rounded-[28px] border border-white/25 bg-[linear-gradient(180deg,rgba(245,250,248,0.88)_0%,rgba(232,243,240,0.82)_100%)] p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur-sm"
//               >
//                 <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
//                 <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Highlights */}
//       <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
//         <div className="mb-10 max-w-2xl">
//           <div className="mb-4 inline-flex rounded-full bg-[rgba(217,228,221,0.24)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
//             Why travel with us
//           </div>
//           <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
//             A refined local travel experience inspired by the island itself
//           </h2>
//           <p className="mt-4 leading-8 text-white/82">
//             We focus on journeys that feel smooth, immersive, and beautifully
//             balanced—so guests can spend less time worrying and more time enjoying
//             Sri Lanka.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {highlights.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{ duration: 0.45, delay: index * 0.08 }}
//                 className="group rounded-[28px] border border-white/20 bg-[rgba(255,255,255,0.12)] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.16)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
//               >
//                 <div className="mb-4 inline-flex rounded-2xl bg-[linear-gradient(135deg,#d9e4dd_0%,#89b8b4_100%)] p-3 text-[#155b5e]">
//                   <Icon className="h-5 w-5" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white">{item.title}</h3>
//                 <p className="mt-3 text-sm leading-7 text-white/82">{item.text}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Brand promise / split section */}
//       <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
//         <div className="grid overflow-hidden rounded-[34px] border border-white/25 bg-[rgba(245,250,248,0.78)] shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-md lg:grid-cols-2">
//           <div className="p-8 md:p-10 lg:p-12">
//             <div className="mb-4 inline-flex rounded-full bg-[#dcece8] px-4 py-2 text-sm font-medium text-[#155b5e]">
//               Our promise
//             </div>
//             <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
//               To show Sri Lanka in a way that feels elegant, genuine, and unforgettable
//             </h2>
//             <p className="mt-5 leading-8 text-slate-600">
//               Whether it is a first visit or a return to the island, our goal is
//               to make every journey feel effortless and full of meaningful detail.
//               We want travelers to leave not only with beautiful photographs, but
//               with a real connection to Sri Lanka.
//             </p>

//             <div className="mt-8 space-y-4">
//               <div className="flex items-start gap-4 rounded-2xl bg-[linear-gradient(135deg,rgba(245,250,248,0.95)_0%,rgba(226,240,236,0.92)_100%)] p-4">
//                 <Camera className="mt-1 h-5 w-5 text-[#1f7a78]" />
//                 <div>
//                   <div className="font-medium text-slate-900">Memorable moments</div>
//                   <div className="text-sm leading-7 text-slate-600">
//                     Scenic routes, hidden gems, iconic landmarks, and rich local experiences.
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 rounded-2xl bg-[linear-gradient(135deg,rgba(245,250,248,0.95)_0%,rgba(226,240,236,0.92)_100%)] p-4">
//                 <Palmtree className="mt-1 h-5 w-5 text-[#1f7a78]" />
//                 <div>
//                   <div className="font-medium text-slate-900">Relaxed island rhythm</div>
//                   <div className="text-sm leading-7 text-slate-600">
//                     Travel that feels calm, warm, and beautifully paced rather than rushed.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative min-h-[360px]">
//             <img
//               src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1400&q=80"
//               alt="Tropical beach and palm trees in Sri Lanka"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(21,91,94,0.16)_0%,rgba(31,122,120,0.18)_42%,rgba(15,23,42,0.34)_100%)]" />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Compass,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Camera,
  Palmtree,
  Mountain,
  ArrowRight,
  Star,
} from "lucide-react";

const highlights = [
  {
    icon: Compass,
    title: "Tailor-Made Journeys",
    text: "Thoughtfully planned travel experiences shaped around your interests, pace, and style of travel.",
  },
  {
    icon: HeartHandshake,
    title: "Warm Local Hospitality",
    text: "A personal approach that reflects the genuine kindness, care, and welcoming spirit Sri Lanka is known for.",
  },
  {
    icon: MapPin,
    title: "Island-Wide Experiences",
    text: "From golden beaches and misty hills to wildlife parks and cultural cities, every journey feels diverse and memorable.",
  },
  {
    icon: ShieldCheck,
    title: "Comfort & Reliability",
    text: "Smooth coordination, trusted guidance, and attention to detail to help guests travel with confidence.",
  },
];

const values = [
  {
    title: "Authentic Sri Lanka",
    text: "We believe the best journeys are not rushed. They are felt through landscapes, flavors, people, and quiet unforgettable moments.",
  },
  {
    title: "Personal Service",
    text: "Every traveler is different. That is why we focus on meaningful planning instead of one-size-fits-all experiences.",
  },
  {
    title: "Beautifully Balanced Travel",
    text: "Adventure, culture, comfort, and relaxation should flow together naturally in one complete island journey.",
  },
];

const destinationMoments = [
  {
    title: "Coastal Escapes",
    text: "Golden shores, ocean breeze, and serene beachside moments.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    icon: Palmtree,
  },
  {
    title: "Hill Country Beauty",
    text: "Misty mountains, tea country views, and scenic train journeys.",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    icon: Mountain,
  },
  {
    title: "Cultural Encounters",
    text: "Temples, heritage, traditions, and unforgettable local stories.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    icon: Camera,
  },
];

const stats = [
  { value: "Personal", label: "Planning Approach" },
  { value: "Island-Wide", label: "Travel Experiences" },
  { value: "Warm", label: "Sri Lankan Hospitality" },
  { value: "Curated", label: "Journeys & Moments" },
];

const promises = [
  "Smooth communication from planning to travel day",
  "Thoughtful routes that balance comfort and discovery",
  "Experiences shaped around your pace and preferences",
  "A calm, premium, and memorable journey through Sri Lanka",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f9fcfa_0%,#f3f8f5_48%,#eef6f1_100%)] text-[#17352a]">
      {/* ambient decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-80px] top-[140px] h-72 w-72 rounded-full bg-[#cf5b8a]/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -24, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-60px] top-[420px] h-80 w-80 rounded-full bg-[#f0ab1d]/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 16, 0], y: [0, 24, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[25%] top-[60%] h-64 w-64 rounded-full bg-[#067a47]/8 blur-3xl"
        />
      </div>

      {/* HERO */}
     <section className="relative overflow-hidden">
  <div className="absolute inset-0">
    <motion.img
      initial={{ scale: 1.06 }}
      animate={{ scale: 1.12 }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      src="/download.jpg"
      alt="Sri Lanka"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,20,0.34),rgba(7,28,20,0.72))]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,171,29,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(207,91,138,0.10),transparent_24%)]" />

    <motion.div
      animate={{ x: ["-30%", "120%"] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 2,
      }}
      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
    />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-3xl"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md md:text-xs"
        >
          About • Prathibha Lanka Voyages
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          Discover the heart behind your Sri Lanka journey
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg"
        >
          At Prathibha Lanka Voyages, we believe travel should feel
          personal, effortless, and unforgettable. We craft journeys that
          reveal the beauty, warmth, and spirit of Sri Lanka through
          carefully planned experiences.
        </motion.p>

        <motion.div
          variants={stagger}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          {[
            "Private Tours",
            "Cultural Experiences",
            "Scenic Getaways",
            "Personalized Planning",
          ].map((tag) => (
            <motion.span
              key={tag}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#f0ab1d] px-6 py-3 text-sm font-semibold text-[#17352a] shadow-[0_12px_30px_rgba(240,171,29,0.28)] transition hover:translate-y-[-2px]"
          >
            Plan Your Journey
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur">
            <Star className="h-4 w-4 text-[#f0ab1d]" />
            Crafted with warmth, elegance, and local care
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative hidden lg:block"
      >
        <div className="group relative overflow-hidden rounded-[32px] border border-white/12 bg-white/10 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-[26px]">
            <img
              src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80"
              alt="Scenic Train"
              className="h-[460px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071c14]/40 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/15 bg-white/12 p-5 text-white backdrop-blur-lg">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Signature Feeling
            </div>
            <p
              className="mt-2 text-2xl font-semibold leading-snug"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Curated journeys filled with scenery, comfort, and soul
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* STATS */}
      <section className="relative mx-auto -mt-10 max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-4 rounded-[30px] border border-white/60 bg-white/85 p-5 shadow-[0_24px_70px_rgba(4,61,36,0.10)] backdrop-blur-xl md:grid-cols-4 md:p-7"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[22px] border border-[#067a47]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,250,246,0.92))] p-5 text-center"
            >
              <div
                className="text-2xl font-semibold text-[#17352a] md:text-3xl"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                {item.value}
              </div>
              <div className="mt-2 text-sm text-[#5f756b]">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* STORY + VALUES */}
      <section className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[32px] border border-[#067a47]/10 bg-white/82 p-8 shadow-[0_24px_70px_rgba(4,61,36,0.08)] backdrop-blur-xl md:p-10"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f0ab1d]/10 blur-3xl" />

            <div className="inline-flex rounded-full bg-[#e9f6ef] px-4 py-2 text-sm font-semibold text-[#035c35]">
              Our Story
            </div>

            <h2
              className="mt-5 text-3xl font-semibold tracking-tight text-[#17352a] md:text-4xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Travel designed with heart, not just itineraries
            </h2>

            <p className="mt-5 leading-8 text-[#5f756b]">
              Prathibha Lanka Voyages is built around the idea that Sri Lanka is
              more than a destination. It is an experience of contrasts and
              harmony — beaches, mountains, wildlife, culture, and quiet moments
              that make each trip truly meaningful.
            </p>

            <p className="mt-4 leading-8 text-[#5f756b]">
              We focus on journeys that feel balanced and beautifully paced,
              where every day carries a sense of discovery without losing
              comfort, calm, or personal attention.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-[#067a47]/10 bg-white/82 p-6 shadow-[0_18px_40px_rgba(4,61,36,0.08)] backdrop-blur-md"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-[linear-gradient(135deg,rgba(6,122,71,0.10),rgba(240,171,29,0.12))] p-3 text-[#035c35]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3
                  className="text-xl font-semibold text-[#17352a]"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f756b]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATION MOMENTS */}
      <section className="relative mx-auto max-w-7xl px-6 pb-8 md:pb-14">
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex rounded-full border border-[#067a47]/10 bg-white/75 px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#035c35] backdrop-blur-md">
            THE FEEL OF THE ISLAND
          </div>

          <h2
            className="mt-5 text-3xl font-semibold tracking-tight text-[#17352a] md:text-5xl"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Experiences shaped by scenery, culture, and atmosphere
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f756b]">
            From coastlines and tea country to heritage sites and local life,
            Sri Lanka offers a journey rich in mood, beauty, and variety.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {destinationMoments.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[30px] border border-[#067a47]/10 bg-white/80 shadow-[0_22px_60px_rgba(4,61,36,0.08)] backdrop-blur-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071c14]/55 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex rounded-2xl border border-white/15 bg-white/12 p-3 text-white backdrop-blur-md">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-2xl font-semibold text-[#17352a]"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f756b]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* WHY TRAVEL WITH US */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80"
            alt="Sri Lanka ocean background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,252,250,0.90),rgba(243,248,245,0.94))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,171,29,0.10),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(6,122,71,0.08),transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex rounded-full border border-[#067a47]/10 bg-white/78 px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#035c35] backdrop-blur-md">
              WHY TRAVEL WITH US
            </div>

            <h2
              className="mt-5 text-3xl font-semibold tracking-tight text-[#17352a] md:text-5xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Calm, curated, and beautifully personal travel
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f756b]">
              Every journey is shaped to feel smooth, memorable, and deeply
              connected to Sri Lanka’s landscapes, culture, and warmth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[30px] border border-[#067a47]/10 bg-white/84 p-6 shadow-[0_20px_60px_rgba(4,61,36,0.08)] backdrop-blur-xl transition-all"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-[linear-gradient(135deg,rgba(6,122,71,0.10),rgba(240,171,29,0.14))] p-3.5 text-[#035c35]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3
                    className="text-xl font-semibold text-[#17352a]"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#5f756b]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE PROMISE */}
      <section className="mx-auto max-w-7xl px-6 py-6 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-[#067a47]/10 bg-white/82 p-8 shadow-[0_20px_60px_rgba(4,61,36,0.08)] backdrop-blur-xl md:p-10"
          >
            <div className="inline-flex rounded-full bg-[#e9f6ef] px-4 py-2 text-sm font-semibold text-[#035c35]">
              Our Promise
            </div>

            <h2
              className="mt-5 text-3xl font-semibold tracking-tight text-[#17352a] md:text-4xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Travel that feels seamless from beginning to end
            </h2>

            <div className="mt-6 space-y-4">
              {promises.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#067a47]/8 bg-[#f8fcf9] px-4 py-4"
                >
                  <div className="mt-0.5 inline-flex rounded-full bg-[#dff2e7] p-2 text-[#067a47]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-[#5f756b]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[32px] border border-[#067a47]/10 shadow-[0_22px_60px_rgba(4,61,36,0.08)]"
          >
            <img
              src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80"
              alt="Sri Lanka travel experience"
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,20,0.08),rgba(7,28,20,0.70))]" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-white/80 backdrop-blur-md">
                THE JOURNEY FEELING
              </div>

              <p
                className="mt-4 max-w-xl text-2xl font-semibold leading-snug md:text-3xl"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                More than a trip — a beautifully paced island experience filled
                with warmth, scenery, and memorable moments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[36px] border border-[#067a47]/10 bg-[linear-gradient(135deg,#0d3d2d_0%,#14563f_55%,#1b6b51_100%)] px-8 py-12 text-white shadow-[0_28px_90px_rgba(4,61,36,0.22)] md:px-12 md:py-16"
        >
          <div className="absolute right-[-80px] top-[-60px] h-56 w-56 rounded-full bg-[#f0ab1d]/18 blur-3xl" />
          <div className="absolute bottom-[-80px] left-[-40px] h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-white/80 backdrop-blur-md">
              START YOUR STORY
            </div>

            <h2
              className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Let your Sri Lanka journey be personal, elegant, and unforgettable
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
              Discover travel designed with care, shaped around your pace, and
              filled with the beauty and spirit of the island.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#f0ab1d] px-6 py-3 text-sm font-semibold text-[#17352a] shadow-[0_12px_30px_rgba(240,171,29,0.30)] transition hover:translate-y-[-2px]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/tours"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Explore Tours
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}