// "use client";
// import React from "react";

// const HomePage = () => {
//   const tourPackages = [
//     {
//       id: "classic-7",
//       title: "Classic Sri Lanka – 7 Days",
//       duration: "7 Days / 6 Nights",
//       destinations: "Colombo • Kandy • Nuwara Eliya • Ella • Galle",
//       highlights: [
//         "Tea plantations & hill country train ride",
//         "Temple of the Tooth & cultural show",
//         "Galle Fort and sunset at the beach",
//       ],
//       priceFrom: "From 650 USD per person",
//     },
//     {
//       id: "honeymoon-8",
//       title: "Sri Lanka Honeymoon Escape – 8 Days",
//       duration: "8 Days / 7 Nights",
//       destinations: "Sigiriya • Kandy • Ella • Bentota",
//       highlights: [
//         "Romantic cliff views & private dinners",
//         "Couple spa & river cruise",
//         "Beach stay at 4★ / 5★ resorts",
//       ],
//       priceFrom: "From 890 USD per person",
//     },
//     {
//       id: "wildlife-beach-6",
//       title: "Wildlife & Beach – 6 Days",
//       duration: "6 Days / 5 Nights",
//       destinations: "Yala • Mirissa • Galle",
//       highlights: [
//         "Jeep safari with leopards & elephants",
//         "Whale watching (seasonal)",
//         "Relax at tropical beaches",
//       ],
//       priceFrom: "From 720 USD per person",
//     },
//   ];

//   const reviews = [
//     {
//       id: "r1",
//       name: "Sarah",
//       country: "United Kingdom",
//       text: "Everything was perfectly organized – hotels, driver, and activities. We felt very safe and well taken care of.",
//     },
//     {
//       id: "r2",
//       name: "Ahmed",
//       country: "UAE",
//       text: "Our custom family tour was amazing. Kids loved the safari and the train ride. Highly recommended.",
//     },
//     {
//       id: "r3",
//       name: "Lena",
//       country: "Germany",
//       text: "Great value for money and very flexible with changes. We will recommend them.",
//     },
//   ];

//   const hotels = [
//     {
//       id: "h1",
//       name: "Hill View Hotel – Kandy",
//       type: "3★ / 4★",
//     },
//     {
//       id: "h2",
//       name: "Ocean Breeze Resort – Bentota",
//       type: "4★ Beach Resort",
//     },
//     {
//       id: "h3",
//       name: "Ella Mountain Escape",
//       type: "Boutique Hotel",
//     },
//   ];

//   return (
//     <div className="min-h-screen w-full bg-white font-sans">
//       {/* ====================== HERO ====================== */}
//       {/* NAVBAR */}
// <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
//   <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
//     <div className="flex items-center justify-between">

//       {/* Logo */}
//       <div className="flex items-center space-x-3">
//         <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center">
//           <span className="text-white font-bold text-xl">PLV</span>
//         </div>
//         <div>
//           <h1 className="text-xl font-bold text-green-800">Prathiba Lanka</h1>
//           <p className="text-xs text-gray-500 tracking-wide">VOYAGES</p>
//         </div>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="hidden lg:flex items-center space-x-8">
//         {[
//           "Home",
//           "Tour Packages",
//           "Hotels",
//           "Destinations",
//           "Reviews",
//           "Contact",
//         ].map((item) => (
//           <a
//             key={item}
//             href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
//             className="text-gray-700 hover:text-green-800 font-medium transition-all"
//           >
//             {item}
//           </a>
//         ))}
//       </nav>

//       {/* Right Actions */}
//       <div className="flex items-center space-x-4">
//         {/* WhatsApp Button */}
//         <button className="hidden md:flex items-center space-x-2 text-green-800 font-medium hover:text-yellow-500 transition">
//           <svg
//             className="w-5 h-5"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.05-.2-.32a8.11 8.11 0 01-1.23-4.29c0-4.47 3.64-8.1 8.11-8.1 2.16 0 4.2.84 5.73 2.37a8.088 8.088 0 012.37 5.73c.01 4.47-3.63 8.1-8.09 8.1z" />
//           </svg>
//           <span>WhatsApp</span>
//         </button>

//         {/* CTA Button */}
// <a href="/login">
//   <button className="bg-green-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 hover:text-black transition-all shadow-md hover:shadow-lg">
//     Plan My Trip
//   </button>
// </a>
//       </div>

//       {/* Mobile Menu Icon */}
//       <button className="lg:hidden text-green-900">
//         <svg
//           className="w-8 h-8"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>
//     </div>
//   </div>
// </header>

//       <section
//         id="hero"
//         className="relative h-[90vh] bg-cover bg-center flex items-center"
//         style={{
//           backgroundImage: "url('/ai-images/srilanka-hero.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="relative z-10 px-6 max-w-5xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl">
//             Discover Sri Lanka<br />
//             <span className="text-yellow-400">Luxury Travel Made Simple</span>
//           </h1>
//           <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl">
//             Tailor-made tours, comfortable hotels, private transport &
//             world-class hospitality crafted for foreign travelers.
//           </p>

//           <div className="mt-10 flex gap-4">
//             <button className="px-8 py-4 bg-yellow-500 text-black rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition-all">
//               Plan My Trip
//             </button>
//             <button className="px-8 py-4 bg-white/20 text-white border border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all">
//               View Packages
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ====================== QUICK FINDER ====================== */}
//       <section className="-mt-16 px-6 relative z-20">
//         <div className="max-w-5xl mx-auto bg-white shadow-2xl p-8 rounded-2xl border border-gray-100">
//           <h2 className="text-center text-2xl font-bold text-green-900 mb-6">
//             Find Your Perfect Tour
//           </h2>

//           <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <input
//               type="text"
//               placeholder="Where in Sri Lanka?"
//               className="px-4 py-3 border rounded-lg bg-gray-50"
//             />
//             <input
//               type="text"
//               placeholder="Travel dates"
//               className="px-4 py-3 border rounded-lg bg-gray-50"
//             />
//             <input
//               type="number"
//               min={1}
//               placeholder="Travelers"
//               className="px-4 py-3 border rounded-lg bg-gray-50"
//             />
//             <button className="bg-green-800 text-white rounded-lg px-6 py-3 font-semibold hover:bg-yellow-500 hover:text-black transition-all">
//               Search
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* ====================== PACKAGES ====================== */}
//       <section id="packages" className="py-20 bg-[#F5F5F5] px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-4xl font-bold text-green-800">
//             Popular Sri Lanka Packages
//           </h2>
//           <p className="text-center text-gray-600 mt-3 mb-12">
//             Handcrafted travel experiences loved by travelers across the world.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {tourPackages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
//               >
//                 <div
//                   className="h-48 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url('/ai-images/package-${pkg.id}.jpg')`,
//                   }}
//                 ></div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-green-800">
//                     {pkg.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-2 mb-4">
//                     {pkg.destinations}
//                   </p>

//                   <ul className="text-gray-700 space-y-1 text-sm mb-6">
//                     {pkg.highlights.map((hl) => (
//                       <li key={hl}>• {hl}</li>
//                     ))}
//                   </ul>

//                   <div className="flex justify-between items-center">
//                     <span className="text-yellow-600 font-bold">
//                       {pkg.priceFrom}
//                     </span>
//                     <button className="text-green-800 font-medium hover:text-yellow-500">
//                       View →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== WHY US ====================== */}
//       <section
//         className="py-20 bg-cover bg-center relative"
//         style={{ backgroundImage: "url('/ai-images/whyus-bg.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>

//         <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
//           <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//             {[
//               "Local Experts",
//               "Secure Payments",
//               "Flexible Plans",
//               "24/7 Support",
//             ].map((i) => (
//               <div key={i}>
//                 <h3 className="text-xl font-semibold">{i}</h3>
//                 <p className="mt-2 text-gray-200">
//                   Premium service trusted by foreign travelers.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== DESTINATIONS ====================== */}
//       <section id="destinations" className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
//             Top Destinations in Sri Lanka
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {["Kandy", "Ella", "Mirissa", "Sigiriya"].map((place) => (
//               <div
//                 key={place}
//                 className="relative h-60 rounded-2xl overflow-hidden shadow-lg"
//               >
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url('/ai-images/destination-${place.toLowerCase()}.jpg')`,
//                   }}
//                 ></div>

//                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                   <h3 className="text-white text-2xl font-bold">{place}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== REVIEWS ====================== */}
//       <section id="reviews" className="py-20 bg-[#F5F5F5] px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-4xl font-bold text-green-800 mb-12">
//             Guest Reviews
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {reviews.map((r) => (
//               <div
//                 key={r.id}
//                 className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
//               >
//                 <h3 className="text-green-800 font-bold text-lg">{r.name}</h3>
//                 <p className="text-sm text-gray-500">{r.country}</p>
//                 <p className="mt-4 text-gray-700 italic">"{r.text}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== HOTELS ====================== */}
//       <section id="hotels" className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-4xl font-bold text-green-800 mb-12">
//             Partner Hotels
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {hotels.map((h) => (
//               <div
//                 key={h.id}
//                 className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition"
//               >
//                 <div
//                   className="h-56 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url('/ai-images/hotel-${h.id}.jpg')`,
//                   }}
//                 ></div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-green-800">{h.name}</h3>
//                   <p className="text-gray-600">{h.type}</p>

//                   <button className="mt-4 w-full py-2 rounded-lg bg-green-800 text-white hover:bg-yellow-500 hover:text-black transition">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== CTA ====================== */}
//       <section
//         className="py-20 bg-cover bg-center relative text-center"
//         style={{
//           backgroundImage: "url('/ai-images/cta-bg.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 text-white">
//           <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
//           <p className="text-lg text-gray-200 mb-6">
//             Chat with our travel experts on WhatsApp.
//           </p>

//           <button className="px-10 py-4 rounded-lg bg-yellow-500 text-black font-semibold shadow-lg hover:bg-white transition-all">
//             WhatsApp Us
//           </button>
//         </div>
//       </section>

//       {/* ====================== FOOTER ====================== */}
//       <footer className="bg-[#0A3A0A] text-gray-300 py-16 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
//           <div>
//             <h3 className="text-white text-xl font-bold">
//               Prathiba Lanka Voyages
//             </h3>
//             <p className="text-gray-400 mt-3">
//               Safe. Reliable. Luxury tours since 2010.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-3">Company</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>About Us</li>
//               <li>Licenses</li>
//               <li>Team</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-3">Travel Info</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>Best Time to Visit</li>
//               <li>Visa Info</li>
//               <li>FAQ</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-3">Contact</h4>
//             <p className="text-gray-400">info@prathibalanka.com</p>
//             <p className="text-gray-400">+94 77 123 4567</p>
//           </div>
//         </div>

//         <p className="text-center text-gray-500 mt-10 text-sm">
//           © {new Date().getFullYear()} Prathiba Lanka Voyages. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;