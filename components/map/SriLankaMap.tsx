// "use client";

// import { useEffect, useRef, useState } from "react";

// type ActiveDistrict = {
//   id: string;
//   name: string;
// } | null;

// export default function SriLankaMap() {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const [active, setActive] = useState<ActiveDistrict>(null);

//   useEffect(() => {
//     let cleanup: (() => void) | undefined;

//     async function setupMap() {
//       const res = await fetch("/maps/srilanka-districts.svg");
//       const svgText = await res.text();

//       if (!wrapperRef.current) return;

//       wrapperRef.current.innerHTML = svgText;

//       const svg = wrapperRef.current.querySelector("svg");
//       if (!svg) return;

//       svg.setAttribute("width", "100%");
//       svg.setAttribute("height", "100%");
//       svg.setAttribute("viewBox", "0 0 1000 1000");
//       svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

//       const paths = Array.from(svg.querySelectorAll("path"));

//       paths.forEach((path) => {
//         const id = path.getAttribute("id") || "";
//         const name = path.getAttribute("name") || id;

//         path.style.cursor = "pointer";
//         path.style.transition =
//           "transform 0.28s ease, fill 0.28s ease, filter 0.28s ease";
//         path.style.transformBox = "fill-box";
//         path.style.transformOrigin = "center";
//         path.style.fill = "#6f9c76";
//         path.style.stroke = "#ffffff";
//         path.style.strokeWidth = "0.8";

//         path.addEventListener("mouseenter", () => {
//           if (active?.id !== id) {
//             path.style.fill = "#5c8f65";
//           }
//         });

//         path.addEventListener("mouseleave", () => {
//           if (active?.id !== id) {
//             path.style.fill = "#6f9c76";
//             path.style.transform = "translateY(0px) scale(1)";
//             path.style.filter = "none";
//           }
//         });

//         path.addEventListener("click", () => {
//           const allPaths = svg.querySelectorAll("path");

//           allPaths.forEach((p) => {
//             p.style.fill = "#6f9c76";
//             p.style.transform = "translateY(0px) scale(1)";
//             p.style.filter = "none";
//           });

//           path.style.fill = "#10b981";
//           path.style.transform = "translateY(-10px) scale(1.03)";
//           path.style.filter = "drop-shadow(0 12px 18px rgba(0,0,0,0.28))";

//           setActive({ id, name });
//         });
//       });

//       cleanup = () => {
//         paths.forEach((path) => {
//           const clone = path.cloneNode(true);
//           path.parentNode?.replaceChild(clone, path);
//         });
//       };
//     }

//     setupMap();

//     return () => {
//       cleanup?.();
//     };
//   }, [active?.id]);

//   return (
//     <section className="w-full">
//       <div className="mx-auto grid max-w-6xl gap-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
//         <div className="rounded-[24px] bg-slate-50 p-4">
//           <div
//             ref={wrapperRef}
//             className="mx-auto aspect-square w-full max-w-[640px]"
//           />
//         </div>

//         <div className="rounded-[24px] bg-slate-50 p-6">
//           <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
//             Sri Lanka District Map
//           </p>

//           <h2 className="mt-3 text-2xl font-semibold text-slate-900">
//             {active ? active.name : "Select a district"}
//           </h2>

//           <p className="mt-4 text-sm leading-6 text-slate-600">
//             Click a district to raise it slightly with a 3D-style effect.
//             This uses your real SVG file, so the country shape and district
//             borders stay correct.
//           </p>

//           <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
//             <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
//               Current district
//             </div>
//             <div className="mt-2 text-lg font-semibold text-slate-900">
//               {active ? active.name : "None"}
//             </div>
//             {active?.id && (
//               <div className="mt-1 text-sm text-slate-500">Code: {active.id}</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";

// type ActiveDistrict = {
//   id: string;
//   name: string;
// } | null;

// export default function SriLankaMap() {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const selectedPathRef = useRef<SVGPathElement | null>(null);
//   const [active, setActive] = useState<ActiveDistrict>(null);

//   useEffect(() => {
//     let mounted = true;

//     async function setupMap() {
//       const res = await fetch("/maps/srilanka-districts.svg");
//       const svgText = await res.text();

//       if (!mounted || !wrapperRef.current) return;

//       wrapperRef.current.innerHTML = svgText;

//       const svg = wrapperRef.current.querySelector("svg");
//       if (!svg) return;

//       svg.setAttribute("width", "100%");
//       svg.setAttribute("height", "100%");
//       svg.setAttribute("viewBox", "0 0 1000 1000");
//       svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

//       const paths = Array.from(svg.querySelectorAll("path"));

//       const resetPath = (path: SVGPathElement) => {
//         path.style.fill = "#6f9c76";
//         path.style.filter = "none";
//         path.style.transform = "translateY(0px) scale(1)";
//       };

//       const activatePath = (path: SVGPathElement) => {
//         path.style.fill = "#10b981";
//         path.style.filter = "drop-shadow(0 14px 20px rgba(0,0,0,0.28))";
//         path.style.transform = "translateY(-14px) scale(1.03)";
//       };

//       paths.forEach((path) => {
//         const id = path.getAttribute("id") || "";
//         const name = path.getAttribute("name") || id;

//         path.style.cursor = "pointer";
//         path.style.transition =
//           "transform 0.28s ease, fill 0.28s ease, filter 0.28s ease";
//         path.style.transformBox = "fill-box";
//         path.style.transformOrigin = "center center";
//         path.style.fill = "#6f9c76";
//         path.style.stroke = "#ffffff";
//         path.style.strokeWidth = "1.2";
//         path.style.vectorEffect = "non-scaling-stroke";

//         path.addEventListener("mouseenter", () => {
//           if (selectedPathRef.current !== path) {
//             path.style.fill = "#5f8f67";
//             path.style.filter = "drop-shadow(0 6px 10px rgba(0,0,0,0.12))";
//             path.style.transform = "translateY(-4px) scale(1.01)";
//           }
//         });

//         path.addEventListener("mouseleave", () => {
//           if (selectedPathRef.current !== path) {
//             resetPath(path);
//           }
//         });

//         path.addEventListener("click", () => {
//           if (selectedPathRef.current) {
//             resetPath(selectedPathRef.current);
//           }

//           selectedPathRef.current = path;
//           activatePath(path);
//           setActive({ id, name });
//         });
//       });
//     }

//     setupMap();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <section className="w-full">
//       <div className="mx-auto grid max-w-6xl gap-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
//         <div className="rounded-[24px] bg-slate-50 p-4">
//           <div
//             ref={wrapperRef}
//             className="mx-auto aspect-square w-full max-w-[700px]"
//           />
//         </div>

//         <div className="rounded-[24px] bg-slate-50 p-6">
//           <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
//             Sri Lanka District Map
//           </p>

//           <h2 className="mt-3 text-2xl font-semibold text-slate-900">
//             {active ? active.name : "Select a district"}
//           </h2>

//           <p className="mt-4 text-sm leading-6 text-slate-600">
//             Hover gives a small lift. Click gives a bigger raised 3D-style
//             effect.
//           </p>

//           <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
//             <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
//               Current district
//             </div>
//             <div className="mt-2 text-lg font-semibold text-slate-900">
//               {active ? active.name : "None"}
//             </div>
//             {active?.id && (
//               <div className="mt-1 text-sm text-slate-500">Code: {active.id}</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useEffect, useRef, useState } from "react";

// type ActiveDistrict = {
//   id: string;
//   name: string;
// } | null;

// export default function SriLankaMap() {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const selectedPathRef = useRef<SVGPathElement | null>(null);
//   const depthPathRef = useRef<SVGPathElement | null>(null);
//   const [active, setActive] = useState<ActiveDistrict>(null);

//   useEffect(() => {
//     let mounted = true;

//     async function setupMap() {
//       const res = await fetch("/maps/srilanka-districts.svg");
//       const svgText = await res.text();

//       if (!mounted || !wrapperRef.current) return;

//       wrapperRef.current.innerHTML = svgText;

//       const svg = wrapperRef.current.querySelector("svg");
//       if (!svg) return;

//       svg.setAttribute("width", "100%");
//       svg.setAttribute("height", "100%");
//       svg.setAttribute("viewBox", "0 0 1000 1000");
//       svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

//       const paths = Array.from(svg.querySelectorAll("path"));

//       const removeDepthLayer = () => {
//         if (depthPathRef.current) {
//           depthPathRef.current.remove();
//           depthPathRef.current = null;
//         }
//       };

//       const resetPath = (path: SVGPathElement) => {
//         path.style.fill = "#6f9c76";
//         path.style.filter = "none";
//         path.style.transform = "translateY(0px) scale(1)";
//       };

//       const addDepthLayer = (path: SVGPathElement) => {
//         removeDepthLayer();

//         const clone = path.cloneNode(true) as SVGPathElement;
//         clone.style.fill = "#4f6f56";
//         clone.style.stroke = "#dfe7df";
//         clone.style.strokeWidth = "1.2";
//         clone.style.vectorEffect = "non-scaling-stroke";
//         clone.style.pointerEvents = "none";
//         clone.style.transformBox = "fill-box";
//         clone.style.transformOrigin = "center center";
//         clone.style.transform = "translateY(12px) scale(1.01)";
//         clone.style.filter = "blur(0.4px)";
//         clone.style.opacity = "0.95";

//         path.parentNode?.insertBefore(clone, path);
//         depthPathRef.current = clone;
//       };

//       const activatePath = (path: SVGPathElement) => {
//         addDepthLayer(path);

//         path.style.fill = "#10b981";
//         path.style.filter = "drop-shadow(0 18px 24px rgba(0,0,0,0.32))";
//         path.style.transform = "translateY(-18px) scale(1.05)";
//       };

//       paths.forEach((path) => {
//         const id = path.getAttribute("id") || "";
//         const name = path.getAttribute("name") || id;

//         path.style.cursor = "pointer";
//         path.style.transition =
//           "transform 0.32s ease, fill 0.32s ease, filter 0.32s ease";
//         path.style.transformBox = "fill-box";
//         path.style.transformOrigin = "center center";
//         path.style.fill = "#6f9c76";
//         path.style.stroke = "#ffffff";
//         path.style.strokeWidth = "1.2";
//         path.style.vectorEffect = "non-scaling-stroke";

//         path.addEventListener("mouseenter", () => {
//           if (selectedPathRef.current !== path) {
//             path.style.fill = "#5f8f67";
//             path.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,0.14))";
//             path.style.transform = "translateY(-6px) scale(1.015)";
//           }
//         });

//         path.addEventListener("mouseleave", () => {
//           if (selectedPathRef.current !== path) {
//             resetPath(path);
//           }
//         });

//         path.addEventListener("click", () => {
//           if (selectedPathRef.current) {
//             resetPath(selectedPathRef.current);
//           }

//           removeDepthLayer();

//           selectedPathRef.current = path;
//           activatePath(path);
//           setActive({ id, name });
//         });
//       });
//     }

//     setupMap();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <section className="w-full">
//       <div className="mx-auto grid max-w-6xl gap-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
//         <div className="rounded-[24px] bg-slate-50 p-4">
//           <div
//             ref={wrapperRef}
//             className="mx-auto aspect-square w-full max-w-[700px]"
//           />
//         </div>

//         <div className="rounded-[24px] bg-slate-50 p-6">
//           <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
//             Sri Lanka District Map
//           </p>

//           <h2 className="mt-3 text-2xl font-semibold text-slate-900">
//             {active ? active.name : "Select a district"}
//           </h2>

//           <p className="mt-4 text-sm leading-6 text-slate-600">
//             Click a district to make it pop out with a stronger 3D-style raised
//             effect using a fake depth layer.
//           </p>

//           <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
//             <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
//               Current district
//             </div>
//             <div className="mt-2 text-lg font-semibold text-slate-900">
//               {active ? active.name : "None"}
//             </div>
//             {active?.id && (
//               <div className="mt-1 text-sm text-slate-500">Code: {active.id}</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";

// type ActiveDistrict = {
//   id: string;
//   name: string;
// } | null;

// export default function SriLankaMap() {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const selectedPathRef = useRef<SVGPathElement | null>(null);
//   const depthPathRef = useRef<SVGPathElement | null>(null);
//   const [active, setActive] = useState<ActiveDistrict>(null);

//   useEffect(() => {
//     let mounted = true;

//     async function setupMap() {
//       const res = await fetch("/maps/srilanka-districts.svg");
//       const svgText = await res.text();

//       if (!mounted || !wrapperRef.current) return;

//       wrapperRef.current.innerHTML = svgText;

//       const svg = wrapperRef.current.querySelector("svg");
//       if (!svg) return;

//       svg.setAttribute("width", "100%");
//       svg.setAttribute("height", "100%");
//       svg.setAttribute("viewBox", "0 0 1000 1000");
//       svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
//       svg.style.overflow = "visible";
//       svg.style.position = "relative";
//       svg.style.zIndex = "2";

//       const paths = Array.from(svg.querySelectorAll("path"));

//       const removeDepthLayer = () => {
//         if (depthPathRef.current) {
//           depthPathRef.current.remove();
//           depthPathRef.current = null;
//         }
//       };

//       const resetPath = (path: SVGPathElement) => {
//         path.style.fill = "#b8d2a7";
//         path.style.filter = "none";
//         path.style.transform = "translateY(0px) scale(1)";
//       };

//       const addDepthLayer = (path: SVGPathElement) => {
//         removeDepthLayer();

//         const clone = path.cloneNode(true) as SVGPathElement;
//         clone.style.fill = "#86a57f";
//         clone.style.stroke = "#dfe7df";
//         clone.style.strokeWidth = "1.1";
//         clone.style.vectorEffect = "non-scaling-stroke";
//         clone.style.pointerEvents = "none";
//         clone.style.transformBox = "fill-box";
//         clone.style.transformOrigin = "center center";
//         clone.style.transform = "translateY(12px) scale(1.01)";
//         clone.style.filter = "blur(0.45px)";
//         clone.style.opacity = "0.95";

//         path.parentNode?.insertBefore(clone, path);
//         depthPathRef.current = clone;
//       };

//       const activatePath = (path: SVGPathElement) => {
//         addDepthLayer(path);

//         path.style.fill = "#7fcf98";
//         path.style.filter = "drop-shadow(0 18px 24px rgba(56, 84, 73, 0.28))";
//         path.style.transform = "translateY(-18px) scale(1.05)";
//       };

//       paths.forEach((path) => {
//         const id = path.getAttribute("id") || "";
//         const name = path.getAttribute("name") || id;

//         path.style.cursor = "pointer";
//         path.style.transition =
//           "transform 0.32s ease, fill 0.32s ease, filter 0.32s ease";
//         path.style.transformBox = "fill-box";
//         path.style.transformOrigin = "center center";
//         path.style.fill = "#b8d2a7";
//         path.style.stroke = "rgba(255,255,255,0.92)";
//         path.style.strokeWidth = "1.15";
//         path.style.vectorEffect = "non-scaling-stroke";

//         path.addEventListener("mouseenter", () => {
//           if (selectedPathRef.current !== path) {
//             path.style.fill = "#a6c992";
//             path.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,0.10))";
//             path.style.transform = "translateY(-6px) scale(1.015)";
//           }
//         });

//         path.addEventListener("mouseleave", () => {
//           if (selectedPathRef.current !== path) {
//             resetPath(path);
//           }
//         });

//         path.addEventListener("click", () => {
//           if (selectedPathRef.current) {
//             resetPath(selectedPathRef.current);
//           }

//           removeDepthLayer();

//           selectedPathRef.current = path;
//           activatePath(path);
//           setActive({ id, name });
//         });
//       });
//     }

//     setupMap();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <section className="w-full">
//       <div className="mx-auto grid max-w-6xl gap-8 rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:grid-cols-[1.1fr_0.9fr]">
//         <div className="rounded-[24px] bg-slate-50 p-4">

// <div
//   className="relative overflow-hidden rounded-[26px] border border-sky-100/60 p-4 md:p-6"
//   style={{
//     backgroundImage: "url('/maps/bg.png')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat"
//   }}
// >

//             {/* watercolor blue background */}
//             <div className="pointer-events-none absolute inset-0">
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.72),rgba(255,255,255,0.18)_34%,transparent_58%)]" />

//               <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-sky-200/45 blur-3xl" />
//               <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
//               <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
//               <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-sky-100/45 blur-3xl" />
//               <div className="absolute bottom-0 right-8 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

//               <div className="absolute left-[12%] top-[18%] h-44 w-44 rounded-full bg-white/50 blur-3xl" />
//               <div className="absolute right-[14%] top-[24%] h-52 w-52 rounded-full bg-white/40 blur-3xl" />
//               <div className="absolute bottom-[12%] left-[22%] h-48 w-48 rounded-full bg-white/35 blur-3xl" />
//               <div className="absolute bottom-[10%] right-[20%] h-56 w-56 rounded-full bg-white/30 blur-3xl" />

//               <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.7)_0.8px,transparent_0.8px)] [background-size:12px_12px]" />
//             </div>

//             <div
//               ref={wrapperRef}
//               className="relative z-10 mx-auto aspect-square w-full max-w-[700px]"
//             />
//           </div>
//         </div>

//         <div className="rounded-[24px] bg-slate-50 p-6">
//           <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
//             Sri Lanka District Map
//           </p>

//           <h2 className="mt-3 text-2xl font-semibold text-slate-900">
//             {active ? active.name : "Select a district"}
//           </h2>

//           <p className="mt-4 text-sm leading-6 text-slate-600">
//             Click a district to make it pop out with a stronger 3D-style raised
//             effect using a fake depth layer.
//           </p>

//           <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
//             <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
//               Current district
//             </div>
//             <div className="mt-2 text-lg font-semibold text-slate-900">
//               {active ? active.name : "None"}
//             </div>
//             {active?.id && (
//               <div className="mt-1 text-sm text-slate-500">Code: {active.id}</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";

type ActiveDistrict = {
  id: string;
  name: string;
} | null;

export default function SriLankaMap() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedPathRef = useRef<SVGPathElement | null>(null);
  const depthPathRef = useRef<SVGPathElement | null>(null);
  const [active, setActive] = useState<ActiveDistrict>(null);

  useEffect(() => {
    let mounted = true;

    async function setupMap() {
      const res = await fetch("/maps/srilanka-districts.svg");
      const svgText = await res.text();

      if (!mounted || !wrapperRef.current) return;

      wrapperRef.current.innerHTML = svgText;

      const svg = wrapperRef.current.querySelector("svg");
      if (!svg) return;

      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute("viewBox", "0 0 1000 1000");
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
      svg.style.overflow = "visible";
      svg.style.position = "relative";
      svg.style.zIndex = "2";

      const paths = Array.from(svg.querySelectorAll("path"));

      const removeDepthLayer = () => {
        if (depthPathRef.current) {
          depthPathRef.current.remove();
          depthPathRef.current = null;
        }
      };

      const resetPath = (path: SVGPathElement) => {
        path.style.fill = "#b8d2a7";
        path.style.filter = "none";
        path.style.transform = "translateY(0px) scale(1)";
      };

      const addDepthLayer = (path: SVGPathElement) => {
        removeDepthLayer();

        const clone = path.cloneNode(true) as SVGPathElement;
        clone.style.fill = "#86a57f";
        clone.style.stroke = "#dfe7df";
        clone.style.strokeWidth = "1.1";
        clone.style.vectorEffect = "non-scaling-stroke";
        clone.style.pointerEvents = "none";
        clone.style.transformBox = "fill-box";
        clone.style.transformOrigin = "center center";
        clone.style.transform = "translateY(12px) scale(1.01)";
        clone.style.filter = "blur(0.45px)";
        clone.style.opacity = "0.95";

        path.parentNode?.insertBefore(clone, path);
        depthPathRef.current = clone;
      };

      const activatePath = (path: SVGPathElement) => {
        addDepthLayer(path);

        path.style.fill = "#7fcf98";
        path.style.filter = "drop-shadow(0 18px 24px rgba(56, 84, 73, 0.28))";
        path.style.transform = "translateY(-18px) scale(1.05)";
      };

      paths.forEach((path) => {
        const id = path.getAttribute("id") || "";
        const name = path.getAttribute("name") || id;

        path.style.cursor = "pointer";
        path.style.transition =
          "transform 0.32s ease, fill 0.32s ease, filter 0.32s ease";
        path.style.transformBox = "fill-box";
        path.style.transformOrigin = "center center";
        path.style.fill = "#b8d2a7";
        path.style.stroke = "rgba(255,255,255,0.92)";
        path.style.strokeWidth = "1.15";
        path.style.vectorEffect = "non-scaling-stroke";

        path.addEventListener("mouseenter", () => {
          if (selectedPathRef.current !== path) {
            path.style.fill = "#a6c992";
            path.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,0.10))";
            path.style.transform = "translateY(-6px) scale(1.015)";
          }
        });

        path.addEventListener("mouseleave", () => {
          if (selectedPathRef.current !== path) {
            resetPath(path);
          }
        });

        path.addEventListener("click", () => {
          if (selectedPathRef.current) {
            resetPath(selectedPathRef.current);
          }

          removeDepthLayer();

          selectedPathRef.current = path;
          activatePath(path);
          setActive({ id, name });
        });
      });
    }

    setupMap();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] bg-slate-50 p-4">
          <div
            className="relative overflow-hidden rounded-[26px] border border-sky-100/60 p-4 md:p-6"
            style={{
              backgroundImage: "url('/maps/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              ref={wrapperRef}
              className="relative z-10 mx-auto aspect-square w-full max-w-[700px]"
            />
          </div>
        </div>

        <div className="rounded-[24px] bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            Sri Lanka District Map
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            {active ? active.name : "Select a district"}
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Click a district to make it pop out with a stronger 3D-style raised
            effect using a fake depth layer.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Current district
            </div>
            <div className="mt-2 text-lg font-semibold text-slate-900">
              {active ? active.name : "None"}
            </div>
            {active?.id && (
              <div className="mt-1 text-sm text-slate-500">Code: {active.id}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}