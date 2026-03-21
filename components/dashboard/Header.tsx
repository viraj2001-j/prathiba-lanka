"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-8 p-5 bg-white/90 backdrop-blur rounded-3xl shadow-md border border-green-200">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-green-700 text-white rounded-xl text-xl">
          🌿
        </div>
        <div>
          <h1 className="text-xl font-semibold text-green-900">GreenAnalytics</h1>
          <p className="text-sm text-green-700">Professional Dashboard</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        
        {/* Search */}
        <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
          <Search className="text-green-700 w-4" />
          <input
            className="ml-2 bg-transparent outline-none text-sm w-[200px]"
            placeholder="Search dashboard..."
          />
        </div>

        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell className="text-green-700" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-200">
          <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white">
            PL
          </div>
          <div>
            <p className="text-sm font-medium text-green-900">Prathiba Lanka</p>
            <p className="text-xs text-green-600">Administrator</p>
          </div>
        </div>

      </div>
    </div>
  );
}