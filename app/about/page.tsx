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
  Palmtree,
  Mountain,
  Compass,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Camera,
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

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <img
          src="/download.jpg" // Ensure this image is in your /public folder
          alt="Sri Lanka Beach"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 lg:pt-24">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Discover the soul of Sri Lanka
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                About <span className="text-teal-300">Prathibha Lanka Voyages</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
                At Prathibha Lanka Voyages, we believe travel should feel personal,
                effortless, and unforgettable. Our vision is to introduce the beauty
                of Sri Lanka through carefully crafted journeys.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Private Tours", "Cultural Experiences", "Scenic Getaways", "Personalized Planning"].map((tag) => (
                  <div key={tag} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="overflow-hidden rounded-[32px] border border-white/20 bg-white/5 p-4 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80"
                  alt="Scenic Train"
                  className="h-[500px] w-full rounded-[24px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STORY SECTION (Glass Cards) --- */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-white/30 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-4 inline-flex rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-900">
              Our Story
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Travel designed with heart, not just itineraries
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              Prathibha Lanka Voyages is built around the idea that Sri Lanka is
              more than a destination. It is an experience of contrasts and harmony.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[28px] border border-white/40 bg-white/80 p-6 shadow-lg backdrop-blur-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HIGHLIGHTS SECTION --- */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-[28px] border border-white/10 bg-slate-900/40 p-6 shadow-xl backdrop-blur-xl transition-all hover:bg-slate-900/60"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-teal-400/20 p-3 text-teal-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}