// import DashboardCard from "./DashboardCard";

import DashboardCard from "./DashboardCard";

// export default function DashboardStats() {
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


export default function DashboardStats() {
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