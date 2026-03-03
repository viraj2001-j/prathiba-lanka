
// "use client";

// import { useState, ReactNode } from "react";
// import { LayoutDashboard, CalendarCheck, Hotel, Map, Users, LogOut, ChevronLeft } from "lucide-react";

// export default function DashboardSidebar() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [active, setActive] = useState("Dashboard");

//   return (
//     <aside className={`
//       h-screen backdrop-blur-3xl bg-white/5
//       border-r border-white/10
//       shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.05)]
//       transition-all duration-500 flex flex-col justify-between
//       ${collapsed ? "w-20" : "w-64"}
//     `}>
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
//           {[
//             { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//             { label: "Bookings", icon: <CalendarCheck size={20} /> },
//             { label: "Hotels", icon: <Hotel size={20} /> },
//             { label: "Packages", icon: <Map size={20} /> },
//             { label: "Customers", icon: <Users size={20} /> },
//           ].map((item) => (
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


"use client";

import { useState, ReactNode } from "react";
import { LayoutDashboard, CalendarCheck, Hotel, Map, Users, LogOut, ChevronLeft } from "lucide-react";

export default function DashboardSidebar() {
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