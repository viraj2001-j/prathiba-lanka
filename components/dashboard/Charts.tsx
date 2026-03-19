"use client";
import { useState } from "react";

export default function ChartSection() {
  const [active, setActive] = useState("Weekly");

  const bars = [120, 150, 100, 180, 140, 90, 70];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      
      {/* Bar Chart */}
      <div className="md:col-span-2 bg-white p-6 rounded-3xl border border-green-200">
        
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold text-green-900">Revenue Overview</h3>
          
          <div className="flex gap-2">
            {["Weekly", "Monthly", "Yearly"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-3 py-1 rounded-full text-sm ${
                  active === item
                    ? "bg-green-700 text-white"
                    : "border border-green-200 text-green-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between h-48">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                style={{ height: h }}
                className="w-8 bg-gradient-to-b from-green-400 to-green-700 rounded-t-xl"
              />
              <span className="text-xs mt-2 text-green-700">
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white p-6 rounded-3xl border border-green-200">
        <h3 className="mb-4 font-semibold text-green-900">
          Progress Overview
        </h3>

        {[
          { name: "Sales", value: 75 },
          { name: "Users", value: 60 },
          { name: "Market", value: 45 },
          { name: "Satisfaction", value: 92 },
        ].map((item, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span>{item.value}%</span>
            </div>
            <div className="w-full h-2 bg-green-100 rounded">
              <div
                className="h-2 bg-green-700 rounded"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}