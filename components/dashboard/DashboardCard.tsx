// import { ReactNode } from "react";

// export default function DashboardCard({ children }: { children: ReactNode }) {
//   return (
//     <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)]
//       hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-300">
//       {children}
//     </div>
//   );
// }


import { ReactNode } from "react";

export default function DashboardCard({ children }: { children: ReactNode }) {
  return (
    <div className="
      bg-white/5 backdrop-blur-3xl border border-white/10
      rounded-2xl p-6
      shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(255,255,255,0.05)]
      hover:shadow-[0_18px_50px_rgba(0,0,0,0.6),0_0_28px_rgba(255,255,255,0.07)]
      transition-all duration-300
    ">
      {children}
    </div>
  );
}