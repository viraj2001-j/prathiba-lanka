// "use client";

// import React from "react";
// import { useParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowUpRight,
//   Check,
//   X,
//   Camera,
//   CalendarDays,
// } from "lucide-react";

// import { PACKAGES } from "@/src/data/packageDetails";
// import { PACKAGE_DETAILS } from "@/src/data/packageDetailsPage";

// export default function PackageDetailsPage() {
//   const { id } = useParams<{ id: string }>();
//   const router = useRouter();

//   const base = PACKAGES.find((p) => p.id === id);
//   const detail = PACKAGE_DETAILS.find((p) => p.id === id);

//   if (!base) {
//     return (
//       <div className="mx-auto max-w-6xl px-6 py-16">
//         <button onClick={() => router.back()} className="underline">
//           Back
//         </button>
//         <h1 className="mt-6 text-3xl font-semibold">Package not found</h1>
//       </div>
//     );
//   }

//   const heroImage = detail?.image || base.image;
//   const recommendedFor = detail?.recommendedFor || "Recommended for Sri Lanka travelers";
//   const heroTagline = detail?.heroTagline || base.name;
//   const longDescription = detail?.longDescription || base.description;

//   const itinerary = autoItineraryFromNights(base.nightsPerLocation, base.days);

//   const visualJourneys =
//     detail?.visualJourneys?.length
//       ? detail.visualJourneys
//       : [
//           { label: "Highlights", image: "https://source.unsplash.com/featured/1200x800/?sri-lanka,nature&sig=7001" },
//           { label: "Culture", image: "https://source.unsplash.com/featured/1200x800/?sri-lanka,temple&sig=7002" },
//           { label: "Coast", image: "https://source.unsplash.com/featured/1200x800/?sri-lanka,beach&sig=7003" },
//         ];

//   const inclusions = detail?.inclusions ?? [];
//   const exclusions = detail?.exclusions ?? [];
//   const paymentPolicies = detail?.paymentPolicies ?? [];
//   const paymentMethods = detail?.paymentMethods ?? [];

//   return (
//     <div className="bg-white">
//       {/* HERO */}
//       <div className="relative h-[62vh] min-h-[460px] overflow-hidden">
//         <img src={heroImage} alt={base.name} className="h-full w-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

//         <div className="absolute left-0 right-0 top-0 mx-auto max-w-7xl px-6 py-8">
//           <button
//             onClick={() => router.back()}
//             className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back
//           </button>
//         </div>

//         <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6">
//           <div className="text-sm font-semibold tracking-[0.18em] text-white/80">
//             {recommendedFor}
//           </div>

//           <motion.h1
//             initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ type: "spring", stiffness: 90, damping: 22 } as const}
//             className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl"
//           >
//             {base.name}
//           </motion.h1>

//           <div className="mt-4 flex flex-wrap items-center gap-3 text-white/85">
//             <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
//               <CalendarDays className="h-4 w-4" />
//               {base.duration}
//             </span>
//             <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
//               From ${base.basePrice.toLocaleString()}
//             </span>
//             <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
//               {base.accommodation}
//             </span>
//           </div>

//           <div className="mt-7 flex flex-wrap gap-3">
//             <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
//               Inquire now <ArrowUpRight className="h-4 w-4" />
//             </button>
//             <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur">
//               {heroTagline}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* BODY */}
//       <div className="mx-auto max-w-7xl px-6 py-14">
//         <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
//           <div>
//             <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
//               OVERVIEW
//             </div>
//             <p className="mt-4 text-base leading-8 text-slate-700">{longDescription}</p>

//             <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
//               <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
//                 LOCATIONS COVERED
//               </div>
//               <div className="mt-4 text-slate-800">{base.locations}</div>
//             </div>
//           </div>

//           <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//             <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
//               QUICK FACTS
//             </div>

//             <div className="mt-5 space-y-4 text-slate-800">
//               <div className="flex items-center justify-between">
//                 <span className="text-slate-600">Experience</span>
//                 <span className="font-semibold">{base.experience}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-slate-600">Days</span>
//                 <span className="font-semibold">{base.days}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-slate-600">Nights</span>
//                 <span className="font-semibold">{base.nights}</span>
//               </div>
//             </div>

//             <button className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#0b2b5b] px-6 py-3 text-sm font-semibold text-white">
//               Inquire now <ArrowUpRight className="ml-2 h-4 w-4" />
//             </button>
//           </div>
//         </div>

//         {/* ITINERARY */}
//         <div className="mt-14">
//           <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
//             ITINERARY
//           </div>
//           <div className="mt-4 text-3xl font-semibold text-slate-900">
//             Day by Day Journey
//           </div>

//           <div className="mt-8 grid gap-4">
//             {itinerary.map((d) => (
//               <div
//                 key={d.day}
//                 className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7"
//               >
//                 <div className="flex flex-wrap items-center justify-between gap-4">
//                   <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//                     DAY {String(d.day).padStart(2, "0")}
//                   </div>
//                   <div className="text-sm font-semibold text-slate-900">{d.title}</div>
//                 </div>
//                 <div className="mt-3 text-slate-700">{d.description}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* VISUAL JOURNEYS */}
//         <div className="mt-14">
//           <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-slate-500">
//             <Camera className="h-4 w-4" />
//             VISUAL JOURNEYS
//           </div>

//           <div className="mt-6 grid gap-6 md:grid-cols-3">
//             {visualJourneys.map((v) => (
//               <div
//                 key={v.label}
//                 className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={v.image}
//                     alt={v.label}
//                     className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
//                   <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
//                     {v.label}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* INCLUSIONS / EXCLUSIONS / PAYMENTS */}
//         <div className="mt-14 grid gap-6 lg:grid-cols-2">
//           <SectionList title="INCLUSIONS" iconType="check" items={inclusions} />
//           <SectionList title="EXCLUSIONS" iconType="x" items={exclusions} />
//           <Bullets title="PAYMENT POLICIES" items={paymentPolicies} />
//           <Bullets title="PAYMENT METHODS" items={paymentMethods} />
//         </div>
//       </div>
//     </div>
//   );
// }

// function autoItineraryFromNights(nightsPerLocation: string, days: number) {
//   const stops = nightsPerLocation
//     .split("|")
//     .map((s) => s.trim())
//     .filter(Boolean)
//     .map((s) => s.replace(/\s+/g, " "));

//   const list: { day: number; title: string; description: string }[] = [];
//   list.push({
//     day: 1,
//     title: "Arrival",
//     description: "Arrive and settle in. Your chauffeur-guide assists with check-in and timing.",
//   });

//   let currentDay = 2;
//   for (const stop of stops) {
//     if (currentDay >= days) break;
//     list.push({
//       day: currentDay,
//       title: stop.replace(": ", " • "),
//       description: "Leisure, sightseeing, and local experiences based on your preferences.",
//     });
//     currentDay++;
//   }

//   list.push({
//     day: days,
//     title: "Departure",
//     description: "Transfer to the airport / next destination.",
//   });

//   // Ensure exactly `days` items
//   const fixed = list.slice(0, days).map((x, i) => ({ ...x, day: i + 1 }));
//   return fixed;
// }

// function SectionList({
//   title,
//   items,
//   iconType,
// }: {
//   title: string;
//   items: string[];
//   iconType: "check" | "x";
// }) {
//   return (
//     <div className="rounded-3xl border border-slate-200 bg-white p-7">
//       <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">{title}</div>
//       <ul className="mt-5 space-y-3 text-slate-700">
//         {items.map((x) => (
//           <li key={x} className="flex items-start gap-3">
//             <span
//               className={`mt-0.5 grid h-6 w-6 place-items-center rounded-full ${
//                 iconType === "check"
//                   ? "bg-slate-900 text-white"
//                   : "bg-slate-100 text-slate-900 ring-1 ring-slate-200"
//               }`}
//             >
//               {iconType === "check" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
//             </span>
//             {x}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Bullets({ title, items }: { title: string; items: string[] }) {
//   return (
//     <div className="rounded-3xl border border-slate-200 bg-white p-7">
//       <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">{title}</div>
//       <ul className="mt-5 space-y-3 text-slate-700">
//         {items.map((x) => (
//           <li key={x}>• {x}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }




"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  X,
  Camera,
  CalendarDays,
  Star,
  Users,
  Languages,
  CarFront,
  ShieldCheck,
  CircleCheckBig,
  MapPin,
  Hotel,
} from "lucide-react";

import { PACKAGES } from "@/src/data/packageDetails";
import { PACKAGE_DETAILS } from "@/src/data/packageDetailsPage";

export default function PackageDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const base = PACKAGES.find((p) => p.id === id);
  const detail = PACKAGE_DETAILS.find((p) => p.id === id);

  if (!base) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16">
        <button onClick={() => router.back()} className="underline">
          Back
        </button>
        <h1 className="mt-6 text-3xl font-semibold">Package not found</h1>
      </div>
    );
  }

  const heroImage = detail?.image || base.image;
  const recommendedFor =
    detail?.recommendedFor || "Recommended for Sri Lanka travelers";
  const heroTagline = detail?.heroTagline || base.name;
  const longDescription = detail?.longDescription || base.description;

  const itinerary =
    detail?.itinerary?.length
      ? detail.itinerary
      : autoItineraryFromNights(base.nightsPerLocation, base.days);

  const visualJourneys =
    detail?.visualJourneys?.length
      ? detail.visualJourneys
      : [
          {
            label: "Highlights",
            image:
              "https://source.unsplash.com/featured/1200x800/?sri-lanka,nature&sig=7001",
          },
          {
            label: "Culture",
            image:
              "https://source.unsplash.com/featured/1200x800/?sri-lanka,temple&sig=7002",
          },
          {
            label: "Coast",
            image:
              "https://source.unsplash.com/featured/1200x800/?sri-lanka,beach&sig=7003",
          },
        ];

  const inclusions = detail?.inclusions ?? [];
  const exclusions = detail?.exclusions ?? [];
  const paymentPolicies = detail?.paymentPolicies ?? [];
  const paymentMethods = detail?.paymentMethods ?? [];

  const rating = detail?.rating ?? 5.0;
  const reviewsCount = detail?.reviewsCount ?? 20;
  const recommendedPercent = detail?.recommendedPercent ?? 100;
  const groupSizeText = detail?.groupSizeText ?? "Private tour";
  const ageRange = detail?.ageRange ?? "0 - 120";
  const durationText = detail?.durationText ?? base.duration;
  const guideLanguages = detail?.guideLanguages ?? ["English"];
  const freeCancellation =
    detail?.freeCancellation ??
    "Free cancellation available based on booking conditions.";
  const pickupText = detail?.pickupText ?? "Airport / hotel pickup available";
  const accessibility = detail?.accessibility ?? [];
  const additionalInfo = detail?.additionalInfo ?? [];
  const whyTravelersLoveThis = detail?.whyTravelersLoveThis ?? [];

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative h-[68vh] min-h-[520px] overflow-hidden">
        <img
          src={heroImage}
          alt={base.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />

        <div className="absolute left-0 right-0 top-0 mx-auto max-w-7xl px-6 py-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>

        <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6">
          <div className="text-sm font-semibold tracking-[0.18em] text-white/80">
            {recommendedFor}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 90, damping: 22 } as const}
            className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl"
          >
            {base.name}
          </motion.h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-white/90">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
              <Star className="h-4 w-4 fill-white text-white" />
              {rating.toFixed(1)} ({reviewsCount} reviews)
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
              <CircleCheckBig className="h-4 w-4" />
              {recommendedPercent}% recommend
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
              <CalendarDays className="h-4 w-4" />
              {durationText}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
              From ${base.basePrice.toLocaleString()}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
              <Hotel className="h-4 w-4" />
              {base.accommodation}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
<button
  onClick={() =>
    router.push(`/contact?package=${encodeURIComponent(base.name)}`)
  }
  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
>
  Inquire now <ArrowUpRight className="h-4 w-4" />
</button>

            <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur">
              {heroTagline}
            </button>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
              OVERVIEW
            </div>
            <p className="mt-4 text-base leading-8 text-slate-700">
              {longDescription}
            </p>

            {whyTravelersLoveThis.length > 0 ? (
              <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
                  WHY TRAVELERS LOVE THIS
                </div>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {whyTravelersLoveThis.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0b2b5b] text-white">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
                LOCATIONS COVERED
              </div>
              <div className="mt-4 flex items-start gap-3 text-slate-800">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-slate-500" />
                <span>{base.locations}</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
              QUICK FACTS
            </div>

            <div className="mt-5 space-y-4 text-slate-800">
              <FactRow
                icon={<Star className="h-4 w-4" />}
                label="Rating"
                value={`${rating.toFixed(1)} / 5`}
              />
              <FactRow
                icon={<Users className="h-4 w-4" />}
                label="Group size"
                value={groupSizeText}
              />
              <FactRow
                icon={<Users className="h-4 w-4" />}
                label="Age range"
                value={ageRange}
              />
              <FactRow
                icon={<CalendarDays className="h-4 w-4" />}
                label="Duration"
                value={durationText}
              />
              <FactRow
                icon={<Languages className="h-4 w-4" />}
                label="Languages"
                value={guideLanguages.join(", ")}
              />
              <FactRow
                icon={<CarFront className="h-4 w-4" />}
                label="Pickup"
                value={pickupText}
              />
              <FactRow
                icon={<ShieldCheck className="h-4 w-4" />}
                label="Cancellation"
                value={freeCancellation}
              />
              <FactRow
                icon={<Hotel className="h-4 w-4" />}
                label="Stay"
                value={base.accommodation}
              />
            </div>

            <div className="mt-7 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm text-slate-500">Starting from</div>
              <div className="mt-1 text-3xl font-semibold text-slate-900">
                ${base.basePrice.toLocaleString()}
              </div>
              <div className="mt-1 text-sm text-slate-600">{groupSizeText}</div>
            </div>

<button
  onClick={() =>
    router.push(`/contact?package=${encodeURIComponent(base.name)}`)
  }
  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#0b2b5b] px-6 py-3 text-sm font-semibold text-white"
>
  Inquire now <ArrowUpRight className="ml-2 h-4 w-4" />
</button>
          </div>
        </div>

        {/* ITINERARY */}
        <div className="mt-14">
          <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
            ITINERARY
          </div>
          <div className="mt-4 text-3xl font-semibold text-slate-900">
            Day by Day Journey
          </div>

          <div className="mt-8 grid gap-4">
            {itinerary.map((d) => (
              <div
                key={d.day}
                className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                    DAY {String(d.day).padStart(2, "0")}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {d.title}
                  </div>
                </div>
                <div className="mt-3 text-slate-700">{d.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL JOURNEYS */}
        <div className="mt-14">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-slate-500">
            <Camera className="h-4 w-4" />
            VISUAL JOURNEYS
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {visualJourneys.map((v) => (
              <div
                key={v.label}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.label}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                    {v.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INFO SECTIONS */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <SectionList title="INCLUSIONS" iconType="check" items={inclusions} />
          <SectionList title="EXCLUSIONS" iconType="x" items={exclusions} />
          <Bullets title="PAYMENT POLICIES" items={paymentPolicies} />
          <Bullets title="PAYMENT METHODS" items={paymentMethods} />
          <Bullets title="ACCESSIBILITY / COMFORT" items={accessibility} />
          <Bullets title="ADDITIONAL INFORMATION" items={additionalInfo} />
        </div>
      </div>
    </div>
  );
}

function autoItineraryFromNights(nightsPerLocation: string, days: number) {
  const stops = nightsPerLocation
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.replace(/\s+/g, " "));

  const list: { day: number; title: string; description: string }[] = [];

  list.push({
    day: 1,
    title: "Arrival",
    description:
      "Arrive and settle in. Your chauffeur-guide assists with check-in and timing.",
  });

  let currentDay = 2;
  for (const stop of stops) {
    if (currentDay >= days) break;
    list.push({
      day: currentDay,
      title: stop.replace(": ", " • "),
      description:
        "Leisure, sightseeing, and local experiences based on your preferences.",
    });
    currentDay++;
  }

  list.push({
    day: days,
    title: "Departure",
    description: "Transfer to the airport / next destination.",
  });

  return list.slice(0, days).map((x, i) => ({ ...x, day: i + 1 }));
}

function FactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-2 text-slate-600">
        <span className="mt-0.5 text-slate-500">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="max-w-[58%] text-right font-semibold text-slate-900">
        {value}
      </div>
    </div>
  );
}

function SectionList({
  title,
  items,
  iconType,
}: {
  title: string;
  items: string[];
  iconType: "check" | "x";
}) {
  if (!items.length) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7">
      <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
        {title}
      </div>
      <ul className="mt-5 space-y-3 text-slate-700">
        {items.map((x) => (
          <li key={x} className="flex items-start gap-3">
            <span
              className={`mt-0.5 grid h-6 w-6 place-items-center rounded-full ${
                iconType === "check"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-900 ring-1 ring-slate-200"
              }`}
            >
              {iconType === "check" ? (
                <Check className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4" />
              )}
            </span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Bullets({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7">
      <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">
        {title}
      </div>
      <ul className="mt-5 space-y-3 text-slate-700">
        {items.map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}