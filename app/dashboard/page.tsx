import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatsCards";
import ChartSection from "@/components/dashboard/Charts";
import TableSection from "@/components/dashboard/Table";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-5">
      
      <Header />

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Revenue" value="$84,250" trend="+12%" icon="💰" />
        <StatCard title="Users" value="12,845" trend="+8%" icon="👥" />
        <StatCard title="Orders" value="1,234" trend="+5%" icon="📦" />
        <StatCard title="Conversion" value="23%" trend="-2%" icon="📊" positive={false} />
      </div>

      <ChartSection />
      <TableSection />

    </div>
  );
}