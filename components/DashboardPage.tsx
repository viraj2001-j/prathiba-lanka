"use client";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-6">

      {/* ======= Page Title ======= */}
      <h1 className="text-3xl font-bold text-green-900 mb-8">
        Dashboard Overview
      </h1>

      {/* ======= Stats Cards ======= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-gray-500 text-sm mb-2">Total Inquiries</h2>
          <p className="text-3xl font-bold text-green-900">128</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-gray-500 text-sm mb-2">Upcoming Tours</h2>
          <p className="text-3xl font-bold text-green-900">12</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-gray-500 text-sm mb-2">Completed Bookings</h2>
          <p className="text-3xl font-bold text-green-900">44</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-gray-500 text-sm mb-2">Pending Payments</h2>
          <p className="text-3xl font-bold text-red-500">6</p>
        </div>
      </div>

      {/* ======= Middle Section: Quick Graph + Recent Inquiries ======= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ----- Chart Placeholder (You can replace with any chart lib) ----- */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 lg:col-span-2">
          <h2 className="text-xl font-semibold text-green-900 mb-4">
            Monthly Bookings (Coming Soon)
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border">
            <p className="text-gray-400">[Chart Placeholder]</p>
          </div>
        </div>

        {/* ----- Recent Inquiries ----- */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold text-green-900 mb-4">
            Recent Inquiries
          </h2>

          <div className="space-y-4">

            <div className="p-4 bg-gray-50 rounded-lg border">
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-600">7 Days Tour • Pending</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <p className="font-medium">Maria Silva</p>
              <p className="text-sm text-gray-600">8 Days Honeymoon • Confirmed</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <p className="font-medium">Ahmed Khan</p>
              <p className="text-sm text-gray-600">Safari Tour • Pending</p>
            </div>

          </div>
        </div>
      </div>

      {/* ======= Bottom Section: Quick Actions ======= */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6">Quick Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <button className="bg-green-800 text-white p-6 rounded-xl shadow-lg hover:bg-green-900 transition-all">
            Add New Tour Package
          </button>

          <button className="bg-yellow-500 text-black p-6 rounded-xl shadow-lg hover:bg-yellow-400 transition-all">
            Manage Bookings
          </button>

          <button className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:bg-gray-50 transition-all">
            View All Users
          </button>

        </div>
      </div>

    </div>
  );
};

export default DashboardPage;