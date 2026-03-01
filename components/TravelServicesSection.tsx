// // "use client";

// // import Image from "next/image";


// // export default function TravelServicesSection() {
// //   return (
// //     <section className="w-full bg-white py-10 md:py-14">
// //       <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
// //         {/* Section heading */}
// //         <div className="text-center mb-8 md:mb-10">
// //           <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500">
// //             Our Travel Services
// //           </p>
// //           <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
// //             Everything you need for your Sri Lanka trip
// //           </h2>
// //         </div>

// //         {/* Cards grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 services-grid">
// //           {/* Card 1 */}
// //           <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
// //             <div className="h-40 md:h-44 w-full overflow-hidden">
// //               <Image
// //                 src="/services/private-tours.jpg"
// //                 alt="Private tours"
// //                 width={400}
// //                 height={300}
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //             <div className="p-4 md:p-5">
// //               <h3 className="text-lg font-semibold text-gray-900">
// //                 Private Tours
// //               </h3>
// //               <p className="text-sm text-gray-600 mt-2">
// //                 Custom-made routes with your own driver-guide and flexible schedule.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Card 2 */}
// //           <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
// //             <div className="h-40 md:h-44 w-full overflow-hidden">
// //               <Image
// //                 src="/services/hotels-stays.jpg"
// //                 alt="Hotels and stays"
// //                 width={400}
// //                 height={300}
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //             <div className="p-4 md:p-5">
// //               <h3 className="text-lg font-semibold text-gray-900">
// //                 Hotels & Stays
// //               </h3>
// //               <p className="text-sm text-gray-600 mt-2">
// //                 Handpicked hotels, villas and resorts to match your comfort and budget.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Card 3 */}
// //           <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
// //             <div className="h-40 md:h-44 w-full overflow-hidden">
// //               <Image
// //                 src="/services/transfers.jpg"
// //                 alt="Airport transfers and transport"
// //                 width={400}
// //                 height={300}
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //             <div className="p-4 md:p-5">
// //               <h3 className="text-lg font-semibold text-gray-900">
// //                 Transport & Transfers
// //               </h3>
// //               <p className="text-sm text-gray-600 mt-2">
// //                 Safe, comfortable cars, vans and airport transfers with local drivers.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Card 4 */}
// //           <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
// //             <div className="h-40 md:h-44 w-full overflow-hidden">
// //               <Image
// //                 src="/services/activities.jpg"
// //                 alt="Activities and experiences"
// //                 width={400}
// //                 height={300}
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //             <div className="p-4 md:p-5">
// //               <h3 className="text-lg font-semibold text-gray-900">
// //                 Activities & Experiences
// //               </h3>
// //               <p className="text-sm text-gray-600 mt-2">
// //                 Safari, train rides, cultural shows, tea trails and many more add-ons.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import Image from "next/image";

// export default function TravelServicesSection() {
//   return (
//     <section className="w-full bg-white py-12 md:py-16">
//       <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
//         {/* Section heading */}
//         <div className="text-center mb-10">
//           <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500">
//             Our Travel Services
//           </p>
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
//             Everything you need for your Sri Lanka trip
//           </h2>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 services-grid">
//           {/* Card 1 */}
//           <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
//             <div className="h-40 md:h-44 w-full overflow-hidden">
//               <Image
//                 src="/services/private-tours.jpg"
//                 alt="Private tours"
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-4 md:p-5 flex-1 flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Private Tours
//               </h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 Custom-made routes with your own driver-guide and flexible
//                 schedule.
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
//             <div className="h-40 md:h-44 w-full overflow-hidden">
//               <Image
//                 src="/services/hotels-stays.jpg"
//                 alt="Hotels and stays"
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-4 md:p-5 flex-1 flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Hotels &amp; Stays
//               </h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 Handpicked hotels, villas and resorts to match your comfort and
//                 budget.
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
//             <div className="h-40 md:h-44 w-full overflow-hidden">
//               <Image
//                 src="/services/transfers.jpg"
//                 alt="Airport transfers and transport"
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-4 md:p-5 flex-1 flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Transport &amp; Transfers
//               </h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 Safe, comfortable cars, vans and airport transfers with local
//                 drivers.
//               </p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
//             <div className="h-40 md:h-44 w-full overflow-hidden">
//               <Image
//                 src="/services/activities.jpg"
//                 alt="Activities and experiences"
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-4 md:p-5 flex-1 flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Activities &amp; Experiences
//               </h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 Safari, train rides, cultural shows, tea trails and many more
//                 add-ons.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function TravelServicesSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLDivElement>(".service-card")
    );
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
          } else {
            // remove to allow re-animation when scrolling back
            el.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.2, // 20% of card visible triggers animation
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
        {/* Section heading */}
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500">
            Our Travel Services
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            Everything you need for your Sri Lanka trip
          </h2>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 services-grid"
        >
          {/* Card 1 */}
          <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="h-40 md:h-44 w-full overflow-hidden">
              <Image
                src="/services/private-tours.jpg"
                alt="Private tours"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">
                Private Tours
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Custom-made routes with your own driver-guide and flexible
                schedule.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="h-40 md:h-44 w-full overflow-hidden">
              <Image
                src="/services/hotels-stays.jpg"
                alt="Hotels and stays"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">
                Hotels &amp; Stays
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Handpicked hotels, villas and resorts to match your comfort and
                budget.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="h-40 md:h-44 w-full overflow-hidden">
              <Image
                src="/services/transfers.jpg"
                alt="Airport transfers and transport"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">
                Transport &amp; Transfers
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Safe, comfortable cars, vans and airport transfers with local
                drivers.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="service-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="h-40 md:h-44 w-full overflow-hidden">
              <Image
                src="/services/activities.jpg"
                alt="Activities and experiences"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">
                Activities &amp; Experiences
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Safari, train rides, cultural shows, tea trails and many more
                add-ons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}