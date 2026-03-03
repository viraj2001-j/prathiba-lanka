
// "use client";

// export default function DashboardNavbar() {
//   return (
//     <header className="
//       w-full h-16
//       bg-white/20 backdrop-blur-3xl
//       border-b border-white/10
//       shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_16px_rgba(255,255,255,0.05)]
//       flex items-center justify-between px-6 
//     ">
//       <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>

//       <div className="flex items-center gap-4">
//         <span className="text-gray-900">Viraj</span>
//         <div className="
//           w-10 h-10 rounded-full bg-white/30 
//           shadow-inner shadow-white/20
//           backdrop-blur-xl
//         "></div>
//       </div>
//     </header>
//   );
// }


"use client";

export default function DashboardNavbar() {
  return (
    <header className="
      w-full h-12
      bg-white/20 backdrop-blur-2xl
      border-b border-white/10
      shadow-[0_8px_20px_rgba(0,0,0,0.3)]
      flex items-center justify-between px-4
    ">
      <h2 className="text-sm font-medium text-gray-400">Dashboard</h2>

      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-sm">Viraj</span>
        <div className="
          w-8 h-8 rounded-full bg-white/25
          shadow-inner shadow-white/20
          backdrop-blur-lg
        "></div>
      </div>
    </header>
  );
}