"use client";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-green-900 text-white p-6 flex flex-col">
      
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">PLV Admin</h1>
        <p className="text-sm text-green-300">Travel Management</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-4">
        <Link href="/dashboard" className="block py-2 hover:text-yellow-400">
          Dashboard
        </Link>

        <Link href="/tours" className="block py-2 hover:text-yellow-400">
          Tour Packages
        </Link>

        <Link href="/hotels" className="block py-2 hover:text-yellow-400">
          Hotels
        </Link>

        <Link href="/inquiries" className="block py-2 hover:text-yellow-400">
          Inquiries
        </Link>

        <Link href="/payments" className="block py-2 hover:text-yellow-400">
          Payments
        </Link>

        <Link href="/settings" className="block py-2 hover:text-yellow-400">
          Settings
        </Link>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-10 text-green-300 text-sm">
        © {new Date().getFullYear()} PLV
      </div>
    </div>
  );
};

export default Sidebar;