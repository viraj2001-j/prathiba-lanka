"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

      {/* Left */}
      <div>
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <Search size={16} className="text-gray-500" />
          <input
            className="ml-2 bg-transparent outline-none text-sm w-40"
            placeholder="Search..."
          />
        </div>

        {/* Notification */}
        <Bell className="text-gray-600 cursor-pointer" />

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
            PL
          </div>
        </div>

      </div>
    </div>
  );
}