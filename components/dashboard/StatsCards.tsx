type Props = {
  title: string;
  value: string;
  trend: string;
  positive?: boolean;
  icon: string;
};

export default function StatCard({
  title,
  value,
  trend,
  positive = true,
  icon,
}: Props) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md border border-green-200 hover:shadow-lg transition">
      
      <div className="flex justify-between mb-3">
        <span className="text-sm text-green-700">{title}</span>
        <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl text-xl">
          {icon}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-green-900">{value}</h2>

      <div className="mt-2 text-sm flex gap-2">
        <span
          className={`px-2 py-1 rounded-full ${
            positive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {trend}
        </span>
        <span className="text-green-600">vs last</span>
      </div>
    </div>
  );
}