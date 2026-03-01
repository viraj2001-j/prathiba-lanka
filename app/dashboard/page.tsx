"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import HomePage from "../page";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold text-green-900 mb-8">
          Dashboard Overview
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <div className="bg-white shadow p-6 rounded-xl border border-gray-100">
            <p className="text-gray-500">Total Inquiries</p>
            <h2 className="text-3xl font-bold text-green-900">128</h2>
          </div>

          <div className="bg-white shadow p-6 rounded-xl border border-gray-100">
            <p className="text-gray-500">Upcoming Tours</p>
            <h2 className="text-3xl font-bold text-green-900">12</h2>
          </div>

          <div className="bg-white shadow p-6 rounded-xl border border-gray-100">
            <p className="text-gray-500">Completed Bookings</p>
            <h2 className="text-3xl font-bold text-green-900">44</h2>
          </div>

          <div className="bg-white shadow p-6 rounded-xl border border-gray-100">
            <p className="text-gray-500">Pending Payments</p>
            <h2 className="text-3xl font-bold text-red-500">6</h2>
          </div>

        </div>

        {/* Charts + Inquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Chart Placeholder */}
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100 lg:col-span-2">
            <h2 className="text-xl font-semibold text-green-900 mb-4">
              Monthly Bookings
            </h2>

            <div className="h-64 bg-gray-50 rounded-lg border flex items-center justify-center">
              <p className="text-gray-400">[Chart Placeholder]</p>
            </div>
          </div>

          {/* Recent Inquiries */}
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
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
                <p className="text-sm text-gray-600">Honeymoon • Confirmed</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border">
                <p className="font-medium">Ahmed Khan</p>
                <p className="text-sm text-gray-600">Safari Tour • Pending</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardPage;