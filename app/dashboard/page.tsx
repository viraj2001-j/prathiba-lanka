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
//     <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-6
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
//     <header className="w-full h-16 bg-white/5 backdrop-blur-3xl border-b border-white/10
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

// // ====== DASHBOARD SIDEBAR ======
// function DashboardSidebar() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [active, setActive] = useState("Dashboard");

//   const menuItems = [
//     { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//     { label: "Bookings", icon: <CalendarCheck size={20} /> },
//     { label: "Hotels", icon: <Hotel size={20} /> },
//     { label: "Packages", icon: <Map size={20} /> },
//     { label: "Customers", icon: <Users size={20} /> },
//   ];

//   return (
//     <aside
//       className={`
//         h-screen backdrop-blur-3xl bg-white/5 border-r border-white/10
//         shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.05)]
//         transition-all duration-500 flex flex-col justify-between
//         ${collapsed ? "w-20" : "w-64"}
//       `}
//     >
//       {/* TOP */}
//       <div>
//         <div className="flex items-center justify-between px-4 py-6">
//           {!collapsed && (
//             <h1 className="text-xl font-semibold tracking-wide text-white">
//               Hello Travels
//             </h1>
//           )}
//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="p-2 rounded-lg hover:bg-white/10 text-white transition"
//           >
//             <ChevronLeft className={`transition-transform duration-500 ${collapsed ? "rotate-180" : ""}`} />
//           </button>
//         </div>

//         <nav className="mt-4 space-y-2 text-white">
//           {menuItems.map((item) => (
//             <MenuItem
//               key={item.label}
//               collapsed={collapsed}
//               icon={item.icon}
//               label={item.label}
//               active={active === item.label}
//               onClick={() => setActive(item.label)}
//             />
//           ))}
//         </nav>
//       </div>

//       {/* BOTTOM LOGOUT */}
//       <div className="px-4 py-6">
//         <MenuItem
//           collapsed={collapsed}
//           icon={<LogOut size={20} />}
//           label="Logout"
//           active={false}
//           onClick={() => {}}
//         />
//       </div>
//     </aside>
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
//         <span className={`z-10 ${active ? "text-amber-100" : ""}`}>
//           {label}
//         </span>
//       )}
//     </button>
//   );
// }

// // ====== DASHBOARD FOOTER ======
// function DashboardFooter() {
//   return (
//     <footer className="
//       w-full py-6 px-8 bg-white/5 backdrop-blur-3xl border-t border-white/10
//       shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_16px_rgba(255,255,255,0.05)]
//       flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm mt-auto
//     ">
//       <p className="mb-2 md:mb-0">
//         © {new Date().getFullYear()} Hello Travels. All rights reserved.
//       </p>

//       <div className="flex gap-4">
//         <a href="#" className="hover:text-amber-300 transition-colors duration-300">Privacy Policy</a>
//         <a href="#" className="hover:text-amber-300 transition-colors duration-300">Terms of Service</a>
//         <a href="#" className="hover:text-amber-300 transition-colors duration-300">Support</a>
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



"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  CalendarCheck,
  Hotel,
  Map,
  Users,
  LogOut,
  ChevronLeft,
} from "lucide-react";

// ====== BACKGROUND CAROUSEL ======
const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80",
];

function BackgroundCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${images[index]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
}

// ====== DASHBOARD CARD ======
function DashboardCard({ children }: { children: ReactNode }) {
  return (
    <div className="
      bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4
      shadow-[0_6px_20px_rgba(0,0,0,0.5)]
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300
    ">
      {children}
    </div>
  );
}

// ====== DASHBOARD STATS ======
function DashboardStats() {
  const stats = [
    { label: "Total Bookings", value: 124 },
    { label: "Pending Payments", value: 32 },
    { label: "Upcoming Trips", value: 18 },
    { label: "Total Revenue", value: "$42,900" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {stats.map((s) => (
        <DashboardCard key={s.label}>
          <p className="text-gray-900 text-xs">{s.label}</p>
          <h3 className="text-xl font-bold mt-1 text-amber-300">{s.value}</h3>
        </DashboardCard>
      ))}
    </div>
  );
}

// ====== DASHBOARD NAVBAR ======
function DashboardNavbar() {
  return (
    <header className="
      w-full h-12
      bg-white/20 backdrop-blur-2xl
      border-b border-white/10
      shadow-[0_6px_20px_rgba(0,0,0,0.3)]
      flex items-center justify-between px-4
      z-10
    ">
      <h2 className="text-sm font-medium text-gray-900">Dashboard</h2>
      <div className="flex items-center gap-2">
        <span className="text-gray-900 text-sm">Viraj</span>
        <div className="w-8 h-8 rounded-full bg-white/25 shadow-inner shadow-white/20 backdrop-blur-lg"></div>
      </div>
    </header>
  );
}

// ====== DASHBOARD SIDEBAR ======
function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Bookings", icon: <CalendarCheck size={18} /> },
    { label: "Hotels", icon: <Hotel size={18} /> },
    { label: "Packages", icon: <Map size={18} /> },
    { label: "Customers", icon: <Users size={18} /> },
  ];

  return (
    <aside className={`
      h-screen backdrop-blur-xl bg-white/10 border-r border-white/10 shadow-xl
      transition-all duration-500 flex flex-col justify-between
      ${collapsed ? "w-16" : "w-48"}
    `}>
      <div>
        <div className="flex items-center justify-between px-3 py-4">
          {!collapsed && (
            <h1 className="text-lg font-semibold tracking-wide text-gray-900">Hello Travels</h1>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-lg hover:bg-white/10 transition">
            <ChevronLeft className={`transition-transform duration-500 ${collapsed ? "rotate-180" : ""}`} />
          </button>
        </div>

        <nav className="mt-2 space-y-1 text-gray-900">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              collapsed={collapsed}
              icon={item.icon}
              label={item.label}
              active={active === item.label}
              onClick={() => setActive(item.label)}
            />
          ))}
        </nav>
      </div>

      <div className="px-3 py-4">
        <MenuItem collapsed={collapsed} icon={<LogOut size={18} />} label="Logout" active={false} onClick={() => {}} />
      </div>
    </aside>
  );
}

// ====== SIDEBAR MENU ITEM ======
type MenuItemProps = {
  icon: ReactNode;
  label: string;
  collapsed: boolean;
  active: boolean;
  onClick: () => void;
};

function MenuItem({ icon, label, collapsed, active, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full flex items-center gap-2 px-3 py-2
        rounded-lg text-left text-gray-900
        hover:bg-white/10 transition-all duration-300
        ${active ? "bg-white/15 shadow-md scale-[1.02]" : ""}
      `}
    >
      {active && <span className="absolute left-0 top-1 bottom-1 w-[3px] bg-amber-300 rounded-full transition-all duration-300" />}
      <span className={`z-10 ${active ? "scale-110" : ""}`}>{icon}</span>
      {!collapsed && <span className={`z-10 ${active ? "text-amber-100" : ""} text-sm`}>{label}</span>}
    </button>
  );
}

// ====== DASHBOARD FOOTER ======
function DashboardFooter() {
  return (
    <footer className="
      w-full h-10 text-center text-gray-500 text-xs
      bg-white/10 backdrop-blur-lg border-t border-white/10
      shadow-inner mt-auto
      flex items-center justify-center
    ">
      © {new Date().getFullYear()} Hello Travels. All rights reserved.
    </footer>
  );
}

// ====== DASHBOARD PAGE ======
export default function DashboardPage() {
  return (
    <main className="relative flex min-h-screen text-gray-900 overflow-hidden bg-[#0f172a]">
      {/* Background carousel */}
      <BackgroundCarousel />

      {/* Floating gradient blobs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full top-[-120px] left-[-120px] bg-indigo-500/40 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bottom-[-100px] right-[-100px] bg-purple-500/30 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10">
        <DashboardNavbar />

        <div className="p-4">
          <DashboardStats />
          {/* Add more sections here */}
        </div>

        {/* Footer */}
        <DashboardFooter />
      </div>
    </main>
  );
}