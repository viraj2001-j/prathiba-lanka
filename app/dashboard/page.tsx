// "use client";

// import { useState, useEffect, ReactNode } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   LayoutDashboard,
//   CalendarCheck,
//   Hotel,
//   Map,
//   Users,
//   LogOut,
//   ChevronLeft,
// } from "lucide-react";
// import { useRouter, usePathname } from "next/navigation";

// // ====== BACKGROUND CAROUSEL ======
// const images = [
//   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
//   "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80",
//   "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80",
//   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
//   "https://www.bluelankatours.com/wp-content/uploads/2020/02/sinharaja-Rain-Forest.jpg",
// ];

// function BackgroundCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={index}
//         className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
//         style={{ backgroundImage: `url(${images[index]})` }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//       />
//     </AnimatePresence>
//   );
// }

// // ====== DASHBOARD CARD ======
// function DashboardCard({ children }: { children: ReactNode }) {
//   return (
//     <div
//       className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-6
//       shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.05)]
//       hover:shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_28px_rgba(255,255,255,0.07)]
//       transition-all duration-300"
//     >
//       {children}
//     </div>
//   );
// }

// // ====== DASHBOARD STATS ======
// function DashboardStats() {
//   const stats = [
//     { label: "Total Bookings", value: 124 },
//     { label: "Pending Payments", value: 32 },
//     { label: "Upcoming Trips", value: 18 },
//     { label: "Total Revenue", value: "$42,900" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//       {stats.map((s) => (
//         <DashboardCard key={s.label}>
//           <p className="text-gray-300 text-sm">{s.label}</p>
//           <h3 className="text-3xl font-bold mt-2 text-amber-300">{s.value}</h3>
//         </DashboardCard>
//       ))}
//     </div>
//   );
// }

// // ====== DASHBOARD NAVBAR ======
// function DashboardNavbar() {
//   return (
//     <header
//       className="w-full h-16 bg-white/5 backdrop-blur-3xl border-b border-white/10
//       shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_16px_rgba(255,255,255,0.05)]
//       flex items-center justify-between px-6 text-white z-10"
//     >
//       <h2 className="text-lg font-semibold">Dashboard</h2>
//       <div className="flex items-center gap-4">
//         <span className="text-gray-300">Viraj</span>
//         <div className="w-10 h-10 rounded-full bg-white/20 shadow-inner backdrop-blur-xl" />
//       </div>
//     </header>
//   );
// }

// // ====== SIDEBAR MENU ITEM ======
// type MenuItemProps = {
//   icon: ReactNode;
//   label: string;
//   collapsed: boolean;
//   active: boolean;
//   onClick: () => void;
// };

// function MenuItem({ icon, label, collapsed, active, onClick }: MenuItemProps) {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//         relative w-full flex items-center gap-4 px-4 py-3
//         rounded-xl text-left text-gray-200
//         hover:bg-white/10 transition-all duration-300
//         ${active ? "bg-white/15 shadow-[0_8px_24px_rgba(0,255,128,0.3)] scale-[1.02]" : ""}
//       `}
//     >
//       {active && (
//         <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-amber-300 rounded-full transition-all duration-300" />
//       )}
//       <span className={`text-emerald-300 z-10 ${active ? "scale-110" : ""}`}>
//         {icon}
//       </span>
//       {!collapsed && (
//         <span className={`z-10 ${active ? "text-amber-100" : ""}`}>{label}</span>
//       )}
//     </button>
//   );
// }

// // ====== DASHBOARD SIDEBAR ======
// function DashboardSidebar() {
//   const [collapsed, setCollapsed] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();

//   const menuItems = [
//     { label: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
//     { label: "Bookings", path: "/dashboard/bookings", icon: <CalendarCheck size={20} /> },
//     { label: "Hotels", path: "/dashboard/hotels", icon: <Hotel size={20} /> },
//     { label: "Packages", path: "/dashboard/packages", icon: <Map size={20} /> },
//     { label: "Customers", path: "/dashboard/customers", icon: <Users size={20} /> },
//   ];

//   const handleLogout = () => {
//     // TODO: add your real logout logic here
//     router.push("/login");
//   };

//   return (
//     <aside
//       className={`
//         h-screen backdrop-blur-3xl bg-white/5 border-r border-white/10
//         transition-all duration-500 flex flex-col justify-between
//         ${collapsed ? "w-20" : "w-64"}
//       `}
//     >
//       <div>
//         <div className="flex items-center justify-between px-4 py-6">
//           {!collapsed && (
//             <h1 className="text-xl font-semibold text-white">
//               Hello Travels
//             </h1>
//           )}

//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="p-2 rounded-lg hover:bg-white/10 text-white transition"
//           >
//             <ChevronLeft
//               className={`transition-transform duration-500 ${collapsed ? "rotate-180" : ""}`}
//             />
//           </button>
//         </div>

//         <nav className="mt-4 space-y-2 text-white">
//           {menuItems.map((item) => (
//             <MenuItem
//               key={item.label}
//               collapsed={collapsed}
//               icon={item.icon}
//               label={item.label}
//               active={pathname === item.path}
//               onClick={() => router.push(item.path)}
//             />
//           ))}
//         </nav>
//       </div>

//       {/* Logout button at bottom */}
//       <div className="px-4 pb-6">
//         <MenuItem
//           collapsed={collapsed}
//           icon={<LogOut size={20} />}
//           label="Logout"
//           active={false}
//           onClick={handleLogout}
//         />
//       </div>
//     </aside>
//   );
// }

// // ====== DASHBOARD FOOTER ======
// function DashboardFooter() {
//   return (
//     <footer
//       className="
//       w-full py-6 px-8 bg-white/5 backdrop-blur-3xl border-t border-white/10
//       shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_16px_rgba(255,255,255,0.05)]
//       flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm mt-auto
//     "
//     >
//       <p className="mb-2 md:mb-0">
//         © {new Date().getFullYear()} Hello Travels. All rights reserved.
//       </p>

//       <div className="flex gap-4">
//         <a href="#" className="hover:text-amber-300 transition-colors duration-300">
//           Privacy Policy
//         </a>
//         <a href="#" className="hover:text-amber-300 transition-colors duration-300">
//           Terms of Service
//         </a>
//         <a href="#" className="hover:text-amber-300 transition-colors duration-300">
//           Support
//         </a>
//       </div>
//     </footer>
//   );
// }

// // ====== DASHBOARD PAGE ======
// export default function DashboardPage() {
//   return (
//     <main className="relative flex min-h-screen text-white overflow-hidden bg-[#0f2a1e]">
//       {/* Background carousel */}
//       <BackgroundCarousel />

//       {/* Floating gradient blobs */}
//       <motion.div
//         className="absolute w-[600px] h-[600px] rounded-full top-[-150px] left-[-150px] bg-indigo-500/40 blur-[140px]"
//         animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
//         transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute w-[500px] h-[500px] rounded-full bottom-[-120px] right-[-120px] bg-purple-500/30 blur-[140px]"
//         animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
//         transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
//       />

//       {/* Sidebar */}
//       <DashboardSidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col relative z-10">
//         <DashboardNavbar />

//         <div className="p-6 flex-1">
//           <DashboardStats />
//           {/* Other sections can go here */}
//         </div>

//         <DashboardFooter />
//       </div>
//     </main>
//   );
// }


// // "use client";

// // import { useState, useEffect, ReactNode } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   LayoutDashboard,
// //   CalendarCheck,
// //   Hotel,
// //   Map,
// //   Users,
// //   LogOut,
// //   ChevronLeft,
// // } from "lucide-react";

// // // ====== BACKGROUND CAROUSEL ======
// // const images = [
// //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
// //   "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80",
// //   "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80",
// // ];

// // function BackgroundCarousel() {
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setIndex((prev) => (prev + 1) % images.length);
// //     }, 6000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <AnimatePresence mode="wait">
// //       <motion.div
// //         key={index}
// //         className="absolute inset-0 bg-cover bg-center opacity-20"
// //         style={{ backgroundImage: `url(${images[index]})` }}
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         exit={{ opacity: 0 }}
// //         transition={{ duration: 1.5, ease: "easeInOut" }}
// //       />
// //     </AnimatePresence>
// //   );
// // }

// // // ====== DASHBOARD CARD ======
// // function DashboardCard({ children }: { children: ReactNode }) {
// //   return (
// //     <div className="
// //       bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4
// //       shadow-[0_6px_20px_rgba(0,0,0,0.5)]
// //       hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300
// //       text-white
// //     ">
// //       {children}
// //     </div>
// //   );
// // }

// // // ====== DASHBOARD STATS ======
// // function DashboardStats() {
// //   const stats = [
// //     { label: "Total Bookings", value: 124 },
// //     { label: "Pending Payments", value: 32 },
// //     { label: "Upcoming Trips", value: 18 },
// //     { label: "Total Revenue", value: "$42,900" },
// //   ];

// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
// //       {stats.map((s) => (
// //         <DashboardCard key={s.label}>
// //           <p className="text-xs">{s.label}</p>
// //           <h3 className="text-xl font-bold mt-1 text-amber-300">{s.value}</h3>
// //         </DashboardCard>
// //       ))}
// //     </div>
// //   );
// // }

// // // ====== DASHBOARD NAVBAR ======
// // function DashboardNavbar() {
// //   return (
// //     <header className="
// //       w-full h-12
// //       bg-white/20 backdrop-blur-2xl
// //       border-b border-white/10
// //       shadow-[0_6px_20px_rgba(0,0,0,0.3)]
// //       flex items-center justify-between px-4
// //       z-10
// //       text-white
// //     ">
// //       <h2 className="text-sm font-medium">Dashboard</h2>
// //       <div className="flex items-center gap-2">
// //         <span className="text-sm">Viraj</span>
// //         <div className="w-8 h-8 rounded-full bg-white/25 shadow-inner shadow-white/20 backdrop-blur-lg"></div>
// //       </div>
// //     </header>
// //   );
// // }

// // // ====== DASHBOARD SIDEBAR ======
// // function DashboardSidebar() {
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [active, setActive] = useState("Dashboard");

// //   const menuItems = [
// //     { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
// //     { label: "Bookings", icon: <CalendarCheck size={18} /> },
// //     { label: "Hotels", icon: <Hotel size={18} /> },
// //     { label: "Packages", icon: <Map size={18} /> },
// //     { label: "Customers", icon: <Users size={18} /> },
// //   ];

// //   return (
// //     <aside className={`
// //       h-screen backdrop-blur-xl bg-white/10 border-r border-white/10 shadow-xl
// //       transition-all duration-500 flex flex-col justify-between
// //       ${collapsed ? "w-16" : "w-48"}
// //       text-white
// //     `}>
// //       <div>
// //         <div className="flex items-center justify-between px-3 py-4">
// //           {!collapsed && (
// //             <h1 className="text-lg font-semibold tracking-wide">Hello Travels</h1>
// //           )}
// //           <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-lg hover:bg-white/10 transition">
// //             <ChevronLeft className={`transition-transform duration-500 ${collapsed ? "rotate-180" : ""}`} />
// //           </button>
// //         </div>

// //         <nav className="mt-2 space-y-1">
// //           {menuItems.map((item) => (
// //             <MenuItem
// //               key={item.label}
// //               collapsed={collapsed}
// //               icon={item.icon}
// //               label={item.label}
// //               active={active === item.label}
// //               onClick={() => setActive(item.label)}
// //             />
// //           ))}
// //         </nav>
// //       </div>

// //       <div className="px-3 py-4">
// //         <MenuItem collapsed={collapsed} icon={<LogOut size={18} />} label="Logout" active={false} onClick={() => {}} />
// //       </div>
// //     </aside>
// //   );
// // }

// // // ====== SIDEBAR MENU ITEM ======
// // type MenuItemProps = {
// //   icon: ReactNode;
// //   label: string;
// //   collapsed: boolean;
// //   active: boolean;
// //   onClick: () => void;
// // };

// // function MenuItem({ icon, label, collapsed, active, onClick }: MenuItemProps) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className={`
// //         relative w-full flex items-center gap-2 px-3 py-2
// //         rounded-lg text-left
// //         hover:bg-white/10 transition-all duration-300
// //         ${active ? "bg-white/15 shadow-md scale-[1.02]" : ""}
// //       `}
// //     >
// //       {active && <span className="absolute left-0 top-1 bottom-1 w-[3px] bg-amber-300 rounded-full transition-all duration-300" />}
// //       <span className={`z-10 ${active ? "scale-110" : ""}`}>{icon}</span>
// //       {!collapsed && <span className={`z-10 ${active ? "text-amber-100" : ""} text-sm`}>{label}</span>}
// //     </button>
// //   );
// // }

// // // ====== DASHBOARD FOOTER ======
// // function DashboardFooter() {
// //   return (
// //     <footer className="
// //       w-full h-10 text-center text-xs
// //       bg-white/10 backdrop-blur-lg border-t border-white/10
// //       shadow-inner mt-auto
// //       flex items-center justify-center
// //       text-white
// //     ">
// //       © {new Date().getFullYear()} Hello Travels. All rights reserved.
// //     </footer>
// //   );
// // }

// // // ====== DASHBOARD PAGE ======
// // export default function DashboardPage() {
// //   return (
// //     <main className="relative flex min-h-screen overflow-hidden bg-[#0f2a22]">
// //       {/* Background carousel */}
// //       <BackgroundCarousel />

// //       {/* Floating gradient blobs */}
// //       <motion.div
// //         className="absolute w-[400px] h-[400px] rounded-full top-[-120px] left-[-120px] bg-indigo-500/40 blur-[100px]"
// //         animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
// //         transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
// //       />
// //       <motion.div
// //         className="absolute w-[350px] h-[350px] rounded-full bottom-[-100px] right-[-100px] bg-purple-500/30 blur-[100px]"
// //         animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
// //         transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
// //       />

// //       {/* Sidebar */}
// //       <DashboardSidebar />

// //       {/* Main Content */}
// //       <div className="flex-1 flex flex-col relative z-10">
// //         <DashboardNavbar />

// //         <div className="p-4">
// //           <DashboardStats />
// //           {/* Add more sections here */}
// //         </div>

// //         {/* Footer */}
// //         <DashboardFooter />
// //       </div>
// //     </main>
// //   );
// // }


// // app/categories/page.tsx
// "use client";

// import React, { useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Search,
//   SlidersHorizontal,
//   X,
//   Clock,
//   Star,
// } from "lucide-react";

// import { MOCK_CATEGORIES } from "@/src/data/mockCategories";
// import { PACKAGES } from "@/src/data/packageDetails";

// type SortKey = "popular" | "priceLow" | "priceHigh" | "durationShort" | "durationLong";

// const durationToDays = (duration: string) => {
//   // "5 Days / 4 Nights" -> 5
//   const m = duration.match(/(\d+)\s*Days/i);
//   return m ? parseInt(m[1], 10) : 0;
// };

// export default function CategoriesIndexPage() {
//   const router = useRouter();

//   // ✅ UI state
//   const [q, setQ] = useState("");
//   const [activeCat, setActiveCat] = useState<string | "all">("all");
//   const [sort, setSort] = useState<SortKey>("popular");

//   const categoriesUi = useMemo(() => {
//     return [
//       { id: "all", title: "All" },
//       ...MOCK_CATEGORIES.map((c) => ({
//         id: c.id,
//         title: c.title,
//       })),
//     ];
//   }, []);

//   const filtered = useMemo(() => {
//     const query = q.trim().toLowerCase();

//     let list = PACKAGES.filter((p) => {
//       const matchesCat = activeCat === "all" ? true : p.categoryId === activeCat;
//       const matchesQuery =
//         !query ||
//         p.name.toLowerCase().includes(query) ||
//         p.subtitle.toLowerCase().includes(query) ||
//         p.locations.toLowerCase().includes(query);

//       return matchesCat && matchesQuery;
//     });

//     // ✅ sort
//     list = [...list].sort((a, b) => {
//       if (sort === "popular") return a.no - b.no; // uses your "no" as stable ordering
//       if (sort === "priceLow") return a.basePrice - b.basePrice;
//       if (sort === "priceHigh") return b.basePrice - a.basePrice;

//       const da = durationToDays(a.duration);
//       const db = durationToDays(b.duration);
//       if (sort === "durationShort") return da - db;
//       if (sort === "durationLong") return db - da;

//       return 0;
//     });

//     return list;
//   }, [q, activeCat, sort]);

//   const activeCategoryMeta =
//     activeCat === "all" ? null : MOCK_CATEGORIES.find((c) => c.id === activeCat);

//   return (
//     <div className="bg-white">
//       {/* HERO */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2400&q=80"
//             alt="Sri Lanka"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ type: "spring", stiffness: 90, damping: 22 } as const}
//             className="max-w-3xl"
//           >
//             <div className="text-xs font-semibold tracking-[0.22em] text-white/70">
//               CATEGORIES • PACKAGES
//             </div>
//             <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
//               Choose your Sri Lanka journey
//             </h1>
//             <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
//               Browse all tour packages, filter by category, and open each package for
//               full itinerary and payment details.
//             </p>

//             {/* chips summary */}
//             <div className="mt-7 flex flex-wrap items-center gap-3">
//               <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
//                 {filtered.length} packages
//               </span>
//               {activeCat !== "all" && activeCategoryMeta ? (
//                 <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
//                   {activeCategoryMeta.title}
//                 </span>
//               ) : null}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* FILTER BAR */}
//       <div className="mx-auto max-w-7xl px-6 py-10">
//         <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
//           {/* search */}
//           <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
//             <Search className="h-5 w-5 text-slate-500" />
//             <input
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               placeholder="Search by name, subtitle, locations…"
//               className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
//             />
//             {q ? (
//               <button
//                 onClick={() => setQ("")}
//                 className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
//                 aria-label="Clear search"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             ) : null}
//           </div>

//           {/* sort */}
//           <div className="flex flex-wrap items-center gap-3">
//             <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
//               <SlidersHorizontal className="h-4 w-4" />
//               <select
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value as SortKey)}
//                 className="bg-transparent text-sm outline-none"
//               >
//                 <option value="popular">Sort: Popular</option>
//                 <option value="priceLow">Price: Low to High</option>
//                 <option value="priceHigh">Price: High to Low</option>
//                 <option value="durationShort">Duration: Short to Long</option>
//                 <option value="durationLong">Duration: Long to Short</option>
//               </select>
//             </div>

//             <button
//               onClick={() => {
//                 setActiveCat("all");
//                 setQ("");
//                 setSort("popular");
//               }}
//               className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
//             >
//               Reset
//             </button>
//           </div>
//         </div>

//         {/* category chips */}
//         <div className="mt-6 flex flex-wrap gap-2">
//           {categoriesUi.map((c) => {
//             const isActive = c.id === activeCat;
//             return (
//               <button
//                 key={c.id}
//                 onClick={() => setActiveCat(c.id)}
//                 className={[
//                   "rounded-full px-4 py-2 text-sm font-semibold transition",
//                   isActive
//                     ? "bg-[#0b2b5b] text-white"
//                     : "bg-slate-50 text-slate-800 ring-1 ring-slate-200 hover:bg-white",
//                 ].join(" ")}
//               >
//                 {c.title}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* PACKAGES GRID */}
//       <div className="mx-auto max-w-7xl px-6 pb-16">
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((p) => (
//             <div
//               key={p.id}
//               className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//             >
//               <div className="relative h-44 w-full overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
//                 <div className="absolute bottom-3 left-4 text-sm font-semibold text-white">
//                   From ${p.basePrice.toLocaleString()}
//                 </div>

//                 <button
//                   onClick={() => router.push(`/packages/${p.id}`)}
//                   className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-900 backdrop-blur ring-1 ring-white/60 shadow-sm"
//                 >
//                   <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b2b5b] text-white">
//                     <ArrowUpRight className="h-4 w-4" />
//                   </span>
//                   EXPLORE
//                 </button>
//               </div>

//               <div className="p-6">
//                 <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//                   PACKAGE #{p.no}
//                 </div>

//                 <div className="mt-2 text-lg font-semibold text-slate-900">{p.name}</div>
//                 <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>

//                 <p className="mt-4 text-sm leading-6 text-slate-700 line-clamp-3">
//                   {p.description}
//                 </p>

//                 <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-700">
//                   <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
//                     <Clock className="h-4 w-4" />
//                     {p.duration}
//                   </span>
//                   <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
//                     <Star className="h-4 w-4" />
//                     {p.accommodation}
//                   </span>
//                 </div>

//                 <button
//                   onClick={() => router.push(`/packages/${p.id}`)}
//                   className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0b2b5b] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
//                 >
//                   EXPLORE PACKAGE
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filtered.length === 0 ? (
//           <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 text-center">
//             <div className="text-lg font-semibold text-slate-900">No packages found</div>
//             <div className="mt-2 text-slate-600">
//               Try a different keyword or switch categories.
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }