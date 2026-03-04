"use client";

import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

type TourPackage = {
  id: number;
  name: string;
  subtitle: string;
  duration: string;
  basePrice: number;
  locations: string;
  experience: string;
  days: number;
  nights: number;
  accommodation: string;
  nightsPerLocation: string;
};

const PACKAGES: TourPackage[] = [
  {
    id: 1,
    name: "PEARL TRAIL",
    subtitle: "Classic Sri Lanka Highlights",
    duration: "5 Days / 4 Nights",
    basePrice: 550,
    locations: "Colombo · Sigiriya · Kandy · Nuwara Eliya · Bentota",
    experience: "Cultural & Heritage",
    days: 5,
    nights: 4,
    accommodation: "★★★★ Mid-Range",
    nightsPerLocation:
      "Sigiriya: 1N | Kandy: 1N | Nuwara Eliya: 1N | Bentota: 1N",
  },
  {
    id: 2,
    name: "EMERALD ESCAPE",
    subtitle: "Culture & Hill Country",
    duration: "6 Days / 5 Nights",
    basePrice: 650,
    locations: "Colombo · Sigiriya · Kandy · Nuwara Eliya · Ella · Galle",
    experience: "Cultural & Hill Country",
    days: 6,
    nights: 5,
    accommodation: "★★★★ Mid-Range",
    nightsPerLocation:
      "Sigiriya: 1N | Kandy: 1N | Nuwara Eliya: 1N | Ella: 1N | Galle: 1N",
  },
];

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] =
    useState<TourPackage | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        <DashboardSidebar />

        <section className="flex-1 py-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Sri Lanka Tour Collection
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Hand-crafted Sri Lanka Tour Packages
              </h2>

              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Choose your ideal journey and explore full itinerary details
                before booking.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PACKAGES.map((pkg) => (
                <article
                  key={pkg.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
                >
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-gray-500">
                        {pkg.name}
                      </h3>
                      <p className="mt-2 text-lg font-semibold text-gray-900">
                        {pkg.subtitle}
                      </p>
                    </div>

                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                      {pkg.experience}
                    </span>
                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                      {pkg.accommodation}
                    </span>
                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                      {pkg.days}d / {pkg.nights}n
                    </span>
                  </div>

                  {/* Locations */}
                  <div className="mt-4 text-sm text-gray-600">
                    {pkg.locations}
                  </div>

                  {/* Bottom */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        From
                      </p>
                      <p className="text-2xl font-semibold text-gray-900">
                        ${pkg.basePrice.toLocaleString("en-US")}
                        <span className="ml-1 text-sm text-gray-500 font-normal">
                          per person
                        </span>
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button className="rounded-lg px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
                        Book
                      </button>

                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="rounded-lg px-4 py-2 border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-gray-200 px-6 py-4">
              <div>
                <h3 className="text-lg font-semibold">
                  {selectedPackage.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {selectedPackage.subtitle}
                </p>
              </div>

              <button
                onClick={() => setSelectedPackage(null)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-900">Duration</p>
                <p>{selectedPackage.duration}</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Destinations</p>
                <p>{selectedPackage.locations}</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Nights per Location
                </p>
                <p>{selectedPackage.nightsPerLocation}</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Price</p>
                <p className="text-lg font-semibold">
                  ${selectedPackage.basePrice.toLocaleString("en-US")} per person
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
              <button
                onClick={() => setSelectedPackage(null)}
                className="rounded-lg px-4 py-2 border border-gray-300 text-sm hover:bg-gray-100 transition"
              >
                Close
              </button>

              <button className="rounded-lg px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition">
                Book Package
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}