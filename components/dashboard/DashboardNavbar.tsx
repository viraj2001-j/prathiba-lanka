// "use client";

// export default function DashboardNavbar() {
//   return (
//     <header className="w-full h-16 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-lg flex items-center justify-between px-6 text-white">
//       <h2 className="text-lg font-semibold">Dashboard</h2>

//       <div className="flex items-center gap-4">
//         <span className="text-gray-300">Viraj</span>
//         <div className="w-10 h-10 rounded-full bg-white/20 shadow-inner"></div>
//       </div>
//     </header>
//   );
// }

"use client";

export default function DashboardNavbar() {
  return (
    <header className="
      w-full h-16
      bg-white/20 backdrop-blur-3xl
      border-b border-white/10
      shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_16px_rgba(255,255,255,0.05)]
      flex items-center justify-between px-6 
    ">
      <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>

      <div className="flex items-center gap-4">
        <span className="text-gray-900">Viraj</span>
        <div className="
          w-10 h-10 rounded-full bg-white/30 
          shadow-inner shadow-white/20
          backdrop-blur-xl
        "></div>
      </div>
    </header>
  );
}