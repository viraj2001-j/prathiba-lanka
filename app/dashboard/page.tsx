"use client";

import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  CircleHelp,
  Grid2x2,
  LogOut,
  Mail,
  PanelLeft,
  Pause,
  Play,
  Plus,
  Search,
  Settings,
  Square,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "24",
    note: "Increased from last month",
    featured: true,
  },
  {
    title: "Ended Projects",
    value: "10",
    note: "Increased from last month",
  },
  {
    title: "Running Projects",
    value: "12",
    note: "Increased from last month",
  },
  {
    title: "Pending Project",
    value: "2",
    note: "On Discuss",
  },
];

const projects = [
  {
    name: "Develop API Endpoints",
    due: "Nov 26, 2024",
    color: "bg-blue-500",
  },
  {
    name: "Onboarding Flow",
    due: "Nov 28, 2024",
    color: "bg-teal-400",
  },
  {
    name: "Build Dashboard",
    due: "Nov 30, 2024",
    color: "bg-lime-400",
  },
  {
    name: "Optimize Page Load",
    due: "Dec 5, 2024",
    color: "bg-amber-400",
  },
  {
    name: "Cross-Browser Testing",
    due: "Dec 6, 2024",
    color: "bg-violet-500",
  },
];

const collaborators = [
  {
    name: "Alexandra Deff",
    role: "Github Project Repository",
    status: "Completed",
    avatar: "AD",
    avatarBg: "bg-rose-200",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  {
    name: "Edwin Adenike",
    role: "Integrate User Authentication System",
    status: "In Progress",
    avatar: "EA",
    avatarBg: "bg-lime-200",
    badge: "bg-amber-50 text-amber-700 ring-amber-200",
  },
  {
    name: "Isaac Oluwatemilorun",
    role: "Develop Search and Filter Functionality",
    status: "Pending",
    avatar: "IO",
    avatarBg: "bg-slate-200",
    badge: "bg-rose-50 text-rose-700 ring-rose-200",
  },
  {
    name: "David Oshodi",
    role: "Responsive Layout for Homepage",
    status: "In Progress",
    avatar: "DO",
    avatarBg: "bg-amber-200",
    badge: "bg-amber-50 text-amber-700 ring-amber-200",
  },
];

const weekBars = [
  "striped",
  "solidDark",
  "solidLight",
  "solidDarkTall",
  "striped",
  "stripedShort",
  "striped",
];

function SidebarLink({
  icon,
  label,
  active = false,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <button
      className={`group relative flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
        active
          ? "bg-white text-zinc-950 shadow-[0_4px_24px_rgba(16,24,40,0.06)]"
          : "text-zinc-500 hover:bg-white/70 hover:text-zinc-900"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r-full bg-emerald-600" />
      )}
      <span className="shrink-0">{icon}</span>
      <span className="text-[15px] font-medium">{label}</span>
      {badge ? (
        <span className="ml-auto rounded-md bg-emerald-900 px-1.5 py-0.5 text-[10px] font-semibold text-white">
          {badge}
        </span>
      ) : null}
    </button>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-black/5 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function DonezoDashboardPage() {
  return (
    <main className="min-h-screen bg-[#efefef] p-3 text-zinc-900 md:p-5">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-[1440px] grid-cols-[270px_minmax(0,1fr)] gap-4 rounded-[34px] border border-black/5 bg-[#f7f7f7] p-4 shadow-[0_20px_80px_rgba(15,23,42,0.08)] md:gap-5 md:p-5">
        <aside className="flex w-[270px] shrink-0 flex-col rounded-[28px] bg-[#f1f1f1] p-5">
          <div className="flex items-center gap-3 px-2 pb-8 pt-2">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
              <div className="grid h-8 w-8 place-items-center rounded-full border-[3px] border-emerald-700 text-emerald-700">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-700" />
              </div>
            </div>
            <span className="text-[32px] font-semibold tracking-[-0.04em]">
              Donezo
            </span>
          </div>

          <div className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Menu
          </div>

          <nav className="space-y-1.5">
            <SidebarLink
              active
              icon={<Grid2x2 className="h-5 w-5" />}
              label="Dashboard"
            />
            <SidebarLink
              icon={<PanelLeft className="h-5 w-5" />}
              label="Tasks"
              badge="12+"
            />
            <SidebarLink
              icon={<CalendarDays className="h-5 w-5" />}
              label="Calendar"
            />
            <SidebarLink
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 19V9" />
                  <path d="M10 19V5" />
                  <path d="M16 19v-7" />
                  <path d="M22 19V3" />
                </svg>
              }
              label="Analytics"
            />
            <SidebarLink icon={<Users className="h-5 w-5" />} label="Team" />
          </nav>

          <div className="mt-10 px-3 pb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            General
          </div>

          <nav className="space-y-1.5">
            <SidebarLink
              icon={<Settings className="h-5 w-5" />}
              label="Settings"
            />
            <SidebarLink
              icon={<CircleHelp className="h-5 w-5" />}
              label="Help"
            />
            <SidebarLink icon={<LogOut className="h-5 w-5" />} label="Logout" />
          </nav>

          <div className="mt-auto rounded-[26px] bg-[#08140e] p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="relative overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.35),transparent_30%),radial-gradient(circle_at_30%_120%,rgba(22,163,74,0.42),transparent_30%),linear-gradient(180deg,#06100b_0%,#0e2318_100%)] p-4">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 85% 30%, rgba(16,185,129,0.3), transparent 22%), radial-gradient(circle at 80% 80%, rgba(34,197,94,0.22), transparent 24%)",
                }}
              />
              <p className="relative text-[28px] leading-none">🎧</p>
              <h3 className="relative mt-4 max-w-[160px] text-[28px] font-semibold leading-[1.05] tracking-[-0.04em]">
                Download our Mobile App
              </h3>
              <p className="relative mt-2 text-sm text-white/70">
                Get easy in another way
              </p>
              <button className="relative mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition hover:bg-emerald-500">
                Download
              </button>
            </div>
          </div>
        </aside>

        <section className="flex min-w-0 flex-col gap-4 rounded-[30px] bg-[#fafafa] p-3 md:p-4">
          <header className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-3 rounded-[24px] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.04)] ring-1 ring-black/5 md:max-w-[430px]">
              <Search className="h-5 w-5 text-zinc-400" />
              <input
                placeholder="Search task"
                className="h-8 flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
              <div className="hidden rounded-lg bg-zinc-100 px-2 py-1 text-[11px] font-semibold text-zinc-500 sm:block">
                ⌘ F
              </div>
            </div>

            <div className="flex items-center gap-3 self-end lg:self-auto">
              <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-zinc-700 shadow-[0_8px_24px_rgba(15,23,42,0.04)] ring-1 ring-black/5 transition hover:text-zinc-950">
                <Mail className="h-5 w-5" />
              </button>
              <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-zinc-700 shadow-[0_8px_24px_rgba(15,23,42,0.04)] ring-1 ring-black/5 transition hover:text-zinc-950">
                <Bell className="h-5 w-5" />
              </button>
              <button className="flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] ring-1 ring-black/5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-rose-200 text-lg">
                  🧑🏽‍🦱
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold leading-none">
                    Totok Michael
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    tmichael20@mail.com
                  </p>
                </div>
              </button>
            </div>
          </header>

          <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h1 className="text-[48px] font-semibold leading-none tracking-[-0.06em] text-zinc-950">
                Dashboard
              </h1>
              <p className="mt-3 text-[15px] text-zinc-500">
                Plan, prioritize, and accomplish your tasks with ease.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-14 items-center gap-2 rounded-full bg-emerald-700 px-7 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(4,120,87,0.28)] transition hover:bg-emerald-600">
                <Plus className="h-4 w-4" />
                Add Project
              </button>
              <button className="inline-flex h-14 items-center rounded-full border border-emerald-700/40 bg-white px-7 text-sm font-semibold text-zinc-800 transition hover:bg-emerald-50">
                Import Data
              </button>
            </div>
          </div>

          <div className="grid gap-4 2xl:grid-cols-[minmax(0,1.55fr)_320px]">
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
                {stats.map((item) => (
                  <Card
                    key={item.title}
                    className={`p-5 ${
                      item.featured
                        ? "bg-[linear-gradient(135deg,#0d5d35_0%,#159150_45%,#0d5d35_100%)] text-white"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`text-[15px] font-medium ${
                            item.featured ? "text-white/95" : "text-zinc-800"
                          }`}
                        >
                          {item.title}
                        </p>
                        <p
                          className={`mt-6 text-[58px] font-semibold leading-none tracking-[-0.06em] ${
                            item.featured ? "text-white" : "text-black"
                          }`}
                        >
                          {item.value}
                        </p>
                        <div
                          className={`mt-4 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs ${
                            item.featured
                              ? "bg-white/10 text-lime-100"
                              : "bg-emerald-50 text-emerald-700"
                          }`}
                        >
                          <span
                            className={`inline-block h-3.5 w-3.5 rounded-full border ${
                              item.featured
                                ? "border-lime-200/70"
                                : "border-emerald-200"
                            }`}
                          />
                          {item.note}
                        </div>
                      </div>
                      <button
                        className={`grid h-11 w-11 place-items-center rounded-full border ${
                          item.featured
                            ? "border-white/30 bg-white text-zinc-950"
                            : "border-zinc-300 bg-white text-zinc-900"
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_320px]">
                <Card className="p-5">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h2 className="text-[17px] font-semibold tracking-[-0.03em]">
                      Project Analytics
                    </h2>
                  </div>

                  <div className="grid h-[190px] grid-cols-7 items-end gap-4 px-2 pb-2">
                    {weekBars.map((type, index) => {
                      const label = ["S", "M", "T", "W", "T", "F", "S"][index];

                      const barClass =
                        type === "solidDark"
                          ? "h-[88px] bg-emerald-700"
                          : type === "solidLight"
                          ? "h-[72px] bg-emerald-400"
                          : type === "solidDarkTall"
                          ? "h-[102px] bg-emerald-900"
                          : type === "stripedShort"
                          ? "h-[78px] bg-[repeating-linear-gradient(135deg,#98a19c_0_4px,transparent_4px_9px)]"
                          : "h-[94px] bg-[repeating-linear-gradient(135deg,#98a19c_0_4px,transparent_4px_9px)]";

                      return (
                        <div
                          key={`${label}-${index}`}
                          className="flex flex-col items-center gap-3"
                        >
                          <div className="relative flex h-[124px] items-end">
                            <div className={`w-[54px] rounded-full ${barClass}`}>
                              {type === "solidLight" ? (
                                <span className="absolute right-[-6px] top-0 rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500 shadow-sm ring-1 ring-black/5">
                                  74%
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <span className="text-sm text-zinc-400">{label}</span>
                        </div>
                      );
                    })}
                  </div>
                </Card>

                <Card className="flex flex-col p-5">
                  <h2 className="text-[17px] font-semibold tracking-[-0.03em]">
                    Reminders
                  </h2>
                  <div className="mt-5 space-y-3">
                    <p className="max-w-[220px] text-[22px] font-semibold leading-[1.04] tracking-[-0.05em] text-emerald-900">
                      Meeting with Arc Company
                    </p>
                    <p className="text-sm text-zinc-400">
                      Time : 02.00 pm - 04.00 pm
                    </p>
                  </div>
                  <button className="mt-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(4,120,87,0.28)] transition hover:bg-emerald-600">
                    <Play className="h-4 w-4 fill-current" />
                    Start Meeting
                  </button>
                </Card>
              </div>

              <div className="grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(300px,1fr)]">
                <Card className="p-5">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h2 className="text-[17px] font-semibold tracking-[-0.03em]">
                      Team Collaboration
                    </h2>
                    <button className="inline-flex h-10 items-center gap-2 rounded-full border border-emerald-700/30 px-4 text-sm font-medium text-zinc-800 transition hover:bg-emerald-50">
                      <Plus className="h-4 w-4" />
                      Add Member
                    </button>
                  </div>

                  <div className="space-y-4">
                    {collaborators.map((person) => (
                      <div key={person.name} className="flex items-center gap-3">
                        <div
                          className={`grid h-12 w-12 place-items-center rounded-full text-sm font-semibold text-zinc-800 ${person.avatarBg}`}
                        >
                          {person.avatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[15px] font-medium text-zinc-900">
                            {person.name}
                          </p>
                          <p className="truncate text-xs text-zinc-400">
                            Working on{" "}
                            <span className="font-semibold text-zinc-700">
                              {person.role}
                            </span>
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${person.badge}`}
                        >
                          {person.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h2 className="text-[17px] font-semibold tracking-[-0.03em]">
                      Project Progress
                    </h2>
                  </div>

                  <div className="flex flex-col items-center justify-center pt-3">
                    <div className="relative grid h-[250px] w-[250px] place-items-center">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "conic-gradient(#0f5d38 0deg 147deg, #2f9a63 147deg 230deg, #d8ddd9 230deg 300deg, transparent 300deg 360deg)",
                          WebkitMask:
                            "radial-gradient(farthest-side, transparent calc(100% - 32px), #000 calc(100% - 31px))",
                          mask: "radial-gradient(farthest-side, transparent calc(100% - 32px), #000 calc(100% - 31px))",
                        }}
                      />
                      <div className="text-center">
                        <p className="text-[58px] font-semibold leading-none tracking-[-0.07em]">
                          41%
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                          Project Ended
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center justify-center gap-5 text-sm">
                      <div className="flex items-center gap-2 text-zinc-600">
                        <span className="h-3.5 w-3.5 rounded-full bg-emerald-600" />
                        Completed
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <span className="h-3.5 w-3.5 rounded-full bg-emerald-900" />
                        In Progress
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <span className="h-3.5 w-3.5 rounded-full bg-[repeating-linear-gradient(135deg,#98a19c_0_4px,transparent_4px_8px)] ring-1 ring-zinc-200" />
                        Pending
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="text-[17px] font-semibold tracking-[-0.03em]">
                    Project
                  </h2>
                  <button className="inline-flex h-10 items-center gap-2 rounded-full border border-emerald-700/30 px-4 text-sm font-medium text-zinc-800 transition hover:bg-emerald-50">
                    <Plus className="h-4 w-4" />
                    New
                  </button>
                </div>

                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.name} className="flex items-start gap-3">
                      <span
                        className={`mt-1 h-4 w-4 rounded-full ${project.color}`}
                      />
                      <div>
                        <p className="text-[15px] font-medium text-zinc-900">
                          {project.name}
                        </p>
                        <p className="mt-1 text-xs text-zinc-400">
                          Due date: {project.due}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="overflow-hidden bg-[#08140e] p-0 text-white">
                <div className="relative min-h-[220px] p-5">
                  <div
                    className="absolute inset-0 opacity-95"
                    style={{
                      background:
                        "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.22), transparent 20%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.18), transparent 18%), radial-gradient(circle at 50% 100%, rgba(16,185,129,0.25), transparent 30%), repeating-radial-gradient(circle at 50% 50%, rgba(16,185,129,0.22) 0 6px, rgba(0,0,0,0) 6px 18px)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[15px] font-medium text-white/90">
                        Time Tracker
                      </h2>
                    </div>
                    <div className="mt-7 text-center">
                      <p className="text-[54px] font-semibold tracking-[-0.08em]">
                        01:24:08
                      </p>
                    </div>
                    <div className="mt-7 flex items-center justify-center gap-4">
                      <button className="grid h-14 w-14 place-items-center rounded-full bg-white text-zinc-900 shadow-lg">
                        <Pause className="h-5 w-5 fill-current" />
                      </button>
                      <button className="grid h-14 w-14 place-items-center rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30">
                        <Square className="h-4 w-4 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}