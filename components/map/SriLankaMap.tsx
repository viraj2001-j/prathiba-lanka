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
//           <div
//             className="relative overflow-hidden rounded-[26px] border border-sky-100/60 p-4 md:p-6"
//             style={{
//               backgroundImage: "url('/maps/bg.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
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

type DistrictData = {
  id: string;
  name: string;
  province: string;
  geographicalProfile: string;
  historyAndHeritage: string;
  economyAndInfrastructure: string;
  tourismAndAttractions: string;
  demographicsAndCulture: string;
  images: string[];
};

function districtImages(folder: string) {
  return [
    `/districts/${folder}/1.jpg`,
    `/districts/${folder}/2.jpg`,
    `/districts/${folder}/3.jpg`,
  ];
}

const DISTRICT_DATA: Record<string, DistrictData> = {
  LK11: {
    id: "LK11",
    name: "Colombo",
    province: "Western Province",
    geographicalProfile:
      "Colombo District lies along Sri Lanka’s western coast and combines a dense urban shoreline with suburban and commercial zones. It is one of the most developed and compact districts in the country.",
    historyAndHeritage:
      "Colombo has long served as a major colonial and trading center under Portuguese, Dutch, and British influence. Its historic quarters, religious landmarks, and old civic buildings reflect layers of Sri Lanka’s urban past.",
    economyAndInfrastructure:
      "It is the commercial heart of Sri Lanka, with major financial institutions, offices, industries, and the country’s busiest transport links. Roads, rail, port access, and business infrastructure are highly concentrated here.",
    tourismAndAttractions:
      "Popular attractions include Galle Face Green, Gangaramaya Temple, Independence Square, the National Museum, Pettah, and the city’s shopping and dining districts.",
    demographicsAndCulture:
      "Colombo is one of Sri Lanka’s most diverse districts, home to multiple ethnic and religious communities. It reflects a modern metropolitan culture mixed with long-established traditions.",
    images: districtImages("colombo"),
  },
  LK12: {
    id: "LK12",
    name: "Gampaha",
    province: "Western Province",
    geographicalProfile:
      "Gampaha District stretches through busy suburban belts, wetlands, coconut-growing zones, and coastal areas north of Colombo. It includes both heavily populated towns and greener semi-rural landscapes.",
    historyAndHeritage:
      "Historically linked with the old Kingdom of Kotte and later colonial administration, Gampaha contains temples, churches, and traditional settlements that reflect deep cultural continuity.",
    economyAndInfrastructure:
      "The district has a strong mixed economy supported by trade, industry, agriculture, education, and transport. Its proximity to Colombo and the international airport gives it major strategic value.",
    tourismAndAttractions:
      "Negombo lagoon, beaches, Muthurajawela wetlands, Henarathgoda Botanical Garden, and several religious landmarks draw both local and foreign visitors.",
    demographicsAndCulture:
      "Gampaha is culturally vibrant and socially mixed, with Sinhala, Tamil, and Muslim communities contributing to a lively district identity shaped by urban growth and local traditions.",
    images: districtImages("gampaha"),
  },
  LK13: {
    id: "LK13",
    name: "Kalutara",
    province: "Western Province",
    geographicalProfile:
      "Kalutara District features a scenic blend of coastline, rivers, wetlands, plantations, and inland towns. The Kalu Ganga and the southern beach belt are major natural features of the district.",
    historyAndHeritage:
      "Kalutara has a long coastal history influenced by trade, Buddhism, and colonial presence. It is known for religious sites and traditional communities that developed along the southwest coast.",
    economyAndInfrastructure:
      "Its economy includes agriculture, rubber, coconut, tourism, fisheries, and expanding residential development. Major southern road links have improved connectivity and growth.",
    tourismAndAttractions:
      "Kalutara Bodhiya, Richmond Castle, beach resorts, river experiences, and nearby nature-based attractions make the district appealing for leisure travel.",
    demographicsAndCulture:
      "The district reflects strong Sinhala Buddhist traditions while also carrying a coastal multicultural character shaped by commerce and migration.",
    images: districtImages("kalutara"),
  },
  LK21: {
    id: "LK21",
    name: "Kandy",
    province: "Central Province",
    geographicalProfile:
      "Kandy District is defined by hills, valleys, forests, tea-growing regions, and cooler upland conditions. It occupies a central highland position and has striking natural scenery.",
    historyAndHeritage:
      "Kandy is one of Sri Lanka’s most historically significant districts as the seat of the last Sinhala kingdom. It is home to the Temple of the Sacred Tooth Relic and many royal-era cultural landmarks.",
    economyAndInfrastructure:
      "The district economy is supported by education, tourism, trade, agriculture, and plantation activity. Kandy city remains a major administrative and transport center for the hill country.",
    tourismAndAttractions:
      "Key attractions include the Temple of the Tooth, Kandy Lake, Peradeniya Botanical Gardens, scenic viewpoints, museums, and cultural performances.",
    demographicsAndCulture:
      "Kandy is deeply associated with Sri Lankan Buddhist traditions, ceremonial arts, and classical heritage. The annual Esala Perahera is one of its most famous cultural expressions.",
    images: districtImages("kandy"),
  },
  LK22: {
    id: "LK22",
    name: "Matale",
    province: "Central Province",
    geographicalProfile:
      "Matale District spans from fertile valleys to highland edges and rocky terrain. It links the central hills with dry-zone plains and is known for spice gardens and agricultural land.",
    historyAndHeritage:
      "Matale has a rich historical background connected to ancient settlement patterns, temples, and Kandyan-era history. Its villages preserve many longstanding customs and crafts.",
    economyAndInfrastructure:
      "Agriculture plays a major role in the district, especially spices, vegetables, and paddy. Trade, small industry, and regional transport connections also support local livelihoods.",
    tourismAndAttractions:
      "Attractions include Aluvihare Temple, spice gardens, river and mountain scenery, and cultural sites connected to Buddhist and historical traditions.",
    demographicsAndCulture:
      "Matale has a strong agrarian and temple-centered cultural life, with Sinhala and Tamil communities contributing to its social and religious fabric.",
    images: districtImages("matale"),
  },
  LK23: {
    id: "LK23",
    name: "Nuwara Eliya",
    province: "Central Province",
    geographicalProfile:
      "Nuwara Eliya District is located in the central highlands and is known for its cool climate, misty mountains, tea estates, waterfalls, and dramatic upland scenery.",
    historyAndHeritage:
      "The district developed strongly during the British colonial period and still carries visible colonial architectural influence. It also has deep links to plantation history and hill-country settlement.",
    economyAndInfrastructure:
      "Tea production is the backbone of the district economy, supported by vegetable farming, tourism, and service sectors. Its mountain roads and towns connect major plantation areas.",
    tourismAndAttractions:
      "Popular places include Horton Plains, Gregory Lake, Hakgala Botanical Garden, waterfalls, tea estates, and the town of Nuwara Eliya itself.",
    demographicsAndCulture:
      "The district has a distinctive multicultural identity with Sinhala, Tamil, and estate communities. Its social life reflects plantation heritage, religious diversity, and highland traditions.",
    images: districtImages("nuwara-eliya"),
  },
  LK31: {
    id: "LK31",
    name: "Galle",
    province: "Southern Province",
    geographicalProfile:
      "Galle District combines a beautiful southern coastline with inland villages, paddy lands, and low-country greenery. Its coastal environment plays a major role in district life.",
    historyAndHeritage:
      "Galle has centuries of maritime and colonial history and is especially known for the UNESCO-listed Galle Fort. The district reflects strong links to international trade and cultural exchange.",
    economyAndInfrastructure:
      "Tourism, fisheries, agriculture, trade, and services are important to the district economy. Road development and urban growth around Galle city continue to strengthen its regional role.",
    tourismAndAttractions:
      "Galle Fort, beaches, lighthouse views, museums, sea-facing streets, and nearby coastal towns make the district one of Sri Lanka’s best-known travel destinations.",
    demographicsAndCulture:
      "The district has a strong southern Sinhala cultural identity with coastal traditions, religious life, and a relaxed but vibrant social atmosphere.",
    images: districtImages("galle"),
  },
  LK32: {
    id: "LK32",
    name: "Matara",
    province: "Southern Province",
    geographicalProfile:
      "Matara District includes beaches, fishing settlements, river zones, coconut lands, and inland farming communities. It sits along the southern edge of the island with both urban and rural character.",
    historyAndHeritage:
      "Matara has deep southern historical roots and was shaped by ancient settlement, temple life, and colonial coastal activity. Many local sites retain strong cultural significance.",
    economyAndInfrastructure:
      "Its economy is based on agriculture, fisheries, trade, education, and tourism. Improved southern transport routes have increased accessibility and economic activity.",
    tourismAndAttractions:
      "The district offers beaches, temples, Dondra Head, coastal viewpoints, and easy access to whale-watching areas and scenic southern experiences.",
    demographicsAndCulture:
      "Matara reflects classic southern Sri Lankan traditions, with strong community life, Buddhist observances, and a close relationship to the sea.",
    images: districtImages("matara"),
  },
  LK33: {
    id: "LK33",
    name: "Hambantota",
    province: "Southern Province",
    geographicalProfile:
      "Hambantota District is marked by dry-zone plains, salt-touched coastlines, scrub forest, lagoons, and wildlife-rich areas. It has a broad landscape with a distinctly southeastern character.",
    historyAndHeritage:
      "The district has long-standing links to coastal trade, salt production, and rural settlement. It also reflects the broader history of Sri Lanka’s southern dry zone.",
    economyAndInfrastructure:
      "Its economy includes agriculture, fisheries, port-related development, salt production, and tourism. Large-scale infrastructure projects have increased the district’s strategic importance.",
    tourismAndAttractions:
      "Yala proximity, Bundala National Park, beaches, birdlife, and dry-zone landscapes attract travelers interested in nature and wildlife.",
    demographicsAndCulture:
      "Hambantota’s culture is shaped by village life, southern customs, Buddhist traditions, and strong ties to the land and sea.",
    images: districtImages("hambantota"),
  },
  LK41: {
    id: "LK41",
    name: "Jaffna",
    province: "Northern Province",
    geographicalProfile:
      "Jaffna District lies on the northern peninsula and is characterized by flat terrain, coastal edges, lagoons, islands, and a dry climate. Its geography is distinct from much of the rest of the island.",
    historyAndHeritage:
      "Jaffna has a rich and unique Tamil cultural and historical legacy, with roots in ancient kingdoms, religious traditions, scholarship, and regional trade.",
    economyAndInfrastructure:
      "The district economy includes fisheries, agriculture, trade, education, and public services. Reconstruction and connectivity have remained important aspects of modern development.",
    tourismAndAttractions:
      "Nallur Kandaswamy Kovil, Jaffna Fort, Casuarina Beach, island visits, and local food culture make the district especially memorable for visitors.",
    demographicsAndCulture:
      "Jaffna is a major center of Sri Lankan Tamil identity, language, religion, cuisine, and intellectual heritage. Its culture is proud, resilient, and deeply rooted.",
    images: districtImages("jaffna"),
  },
  LK42: {
    id: "LK42",
    name: "Kilinochchi",
    province: "Northern Province",
    geographicalProfile:
      "Kilinochchi District features flat dry-zone terrain, tanks, agricultural land, and inland settlements. Its environment is shaped by seasonal water systems and open landscapes.",
    historyAndHeritage:
      "The district has a recent and important place in Sri Lanka’s contemporary history while also being rooted in longstanding northern agrarian traditions and local religious life.",
    economyAndInfrastructure:
      "Agriculture, irrigation, local trade, and rebuilding infrastructure play central roles in the district economy. Development has focused on connectivity, farming support, and public services.",
    tourismAndAttractions:
      "Kilinochchi offers reservoirs, regional landmarks, and travel routes that provide insight into the northern mainland and its evolving landscape.",
    demographicsAndCulture:
      "The district is shaped largely by Tamil cultural traditions, village life, temple-centered practices, and strong community resilience.",
    images: districtImages("kilinochchi"),
  },
  LK43: {
    id: "LK43",
    name: "Mannar",
    province: "Northern Province",
    geographicalProfile:
      "Mannar District includes islands, coastal flats, lagoons, arid zones, and unique marine-influenced ecosystems. It has one of the most distinctive landscapes in Sri Lanka.",
    historyAndHeritage:
      "Mannar has long been associated with maritime trade, pearl history, cross-cultural contact, and religious heritage linked to both local and regional traditions.",
    economyAndInfrastructure:
      "Fisheries, agriculture, livestock, salt-related activities, and local trade support the district economy. Coastal connectivity and resource use are key features of livelihood patterns.",
    tourismAndAttractions:
      "The Mannar Fort, Baobab tree, bird habitats, island scenery, and quiet coastal environment make the district attractive for offbeat travel.",
    demographicsAndCulture:
      "Mannar reflects a blend of Tamil, Muslim, and Christian influences, creating a layered social and cultural character tied closely to the sea.",
    images: districtImages("mannar"),
  },
  LK44: {
    id: "LK44",
    name: "Vavuniya",
    province: "Northern Province",
    geographicalProfile:
      "Vavuniya District forms an important transition zone between northern and central parts of the island. It contains dry plains, tanks, agricultural land, and transport corridors.",
    historyAndHeritage:
      "Historically a frontier and linkage region, Vavuniya has played an important role as a meeting point between communities, routes, and administrative areas.",
    economyAndInfrastructure:
      "Its economy relies on agriculture, trade, transport services, and public administration. Because of its location, it functions as a regional gateway and distribution point.",
    tourismAndAttractions:
      "While less tourism-focused than some districts, Vavuniya offers reservoirs, temples, and a meaningful stop for travelers moving through the northern interior.",
    demographicsAndCulture:
      "The district has a socially mixed identity with multiple communities and traditions, giving it a diverse and practical regional character.",
    images: districtImages("vavuniya"),
  },
  LK45: {
    id: "LK45",
    name: "Mullaitivu",
    province: "Northern Province",
    geographicalProfile:
      "Mullaitivu District is known for its long coastline, lagoons, forests, and dry lowland terrain. It combines coastal beauty with sparsely populated inland stretches.",
    historyAndHeritage:
      "The district holds an important place in Sri Lanka’s modern history while also preserving older northern village and coastal cultural traditions.",
    economyAndInfrastructure:
      "Livelihoods are tied to fisheries, agriculture, local trade, and reconstruction-related development. Improving road access and services has been significant for the district.",
    tourismAndAttractions:
      "Its beaches, lagoons, quiet landscapes, and lesser-known coastal scenery make it appealing for travelers interested in less commercial destinations.",
    demographicsAndCulture:
      "Mullaitivu reflects Tamil cultural life shaped by the coast, rural settlement, religious observance, and community resilience.",
    images: districtImages("mullaitivu"),
  },
  LK51: {
    id: "LK51",
    name: "Batticaloa",
    province: "Eastern Province",
    geographicalProfile:
      "Batticaloa District features lagoons, barrier beaches, lowland plains, and fertile areas influenced by both sea and inland water systems. Its landscape is calm, open, and water-rich.",
    historyAndHeritage:
      "The district has deep eastern coastal history shaped by Tamil culture, Islamic communities, colonial encounters, and regional maritime exchange.",
    economyAndInfrastructure:
      "Agriculture, fisheries, education, trade, and small-scale industry are central to the district economy. Lagoon and coastal systems remain important to local livelihoods.",
    tourismAndAttractions:
      "Batticaloa lagoon, beaches, Dutch Fort, and the district’s serene eastern atmosphere attract visitors looking for culture and coastal relaxation.",
    demographicsAndCulture:
      "Batticaloa is known for its strong Tamil cultural traditions, music, literature, cuisine, and coexistence among Tamil and Muslim communities.",
    images: districtImages("batticaloa"),
  },
  LK52: {
    id: "LK52",
    name: "Ampara",
    province: "Eastern Province",
    geographicalProfile:
      "Ampara District has a large and varied landscape including dry-zone plains, paddy lands, forests, lagoons, and long coastal stretches. It is one of the more geographically extensive districts in the east.",
    historyAndHeritage:
      "Its history reflects irrigation settlement, agricultural expansion, temple traditions, and the multicultural evolution of Sri Lanka’s eastern region.",
    economyAndInfrastructure:
      "Agriculture is central, especially paddy and related rural production, alongside fisheries and growing tourism. Irrigation and road networks are important to the district’s functioning.",
    tourismAndAttractions:
      "Arugam Bay, lagoons, beaches, temples, wildlife areas, and surfing destinations make Ampara a major eastern travel zone.",
    demographicsAndCulture:
      "The district is culturally diverse, with Sinhala, Tamil, and Muslim communities shaping its social life, festivals, and local identity.",
    images: districtImages("ampara"),
  },
  LK53: {
    id: "LK53",
    name: "Trincomalee",
    province: "Eastern Province",
    geographicalProfile:
      "Trincomalee District is centered around one of the world’s finest natural harbors and includes beaches, bays, forests, and dry-zone inland territory. Its coastal geography is especially striking.",
    historyAndHeritage:
      "The district has long-standing strategic and religious importance, with deep roots in maritime history, Hindu and Buddhist traditions, and colonial naval significance.",
    economyAndInfrastructure:
      "The harbor, fisheries, services, tourism, and agriculture support the economy. Strategic port value and regional infrastructure contribute to its national importance.",
    tourismAndAttractions:
      "Nilaveli, Pigeon Island, Koneswaram Temple, Fort Frederick, and beautiful coastal waters make Trincomalee one of Sri Lanka’s standout travel districts.",
    demographicsAndCulture:
      "Trincomalee reflects a multicultural eastern identity, with Sinhala, Tamil, and Muslim communities and a strong coastal religious heritage.",
    images: districtImages("trincomalee"),
  },
  LK61: {
    id: "LK61",
    name: "Kurunegala",
    province: "North Western Province",
    geographicalProfile:
      "Kurunegala District combines rocky outcrops, paddy fields, coconut lands, towns, and village landscapes. It occupies an important central-western position with varied terrain.",
    historyAndHeritage:
      "Kurunegala was once a royal capital and retains strong links to medieval Sri Lankan history. Temples, legends, and historic sites remain part of the district’s identity.",
    economyAndInfrastructure:
      "Agriculture, trade, transport, and services are key economic drivers. Its location gives it strong road connectivity and regional commercial value.",
    tourismAndAttractions:
      "Rock landmarks, ancient temples, reservoirs, and rural scenery attract visitors interested in history and cultural landscapes.",
    demographicsAndCulture:
      "The district reflects classic Sinhala agrarian culture, religious traditions, and a strong village-to-town social character.",
    images: districtImages("kurunegala"),
  },
  LK62: {
    id: "LK62",
    name: "Puttalam",
    province: "North Western Province",
    geographicalProfile:
      "Puttalam District includes lagoons, salt flats, beaches, dry-zone scrub, coconut plantations, and fishing settlements. It stretches across a distinctive coastal and semi-arid environment.",
    historyAndHeritage:
      "The district has long connections to fishing, trade, migration, and religious diversity. Coastal and inland communities have developed a layered cultural history.",
    economyAndInfrastructure:
      "Fisheries, salt, coconut, agriculture, energy-related activity, and trade all contribute to the district economy. Coastal resources are especially important.",
    tourismAndAttractions:
      "Kalpitiya, lagoons, beaches, dolphin-watching areas, and bird habitats make the district popular for water-based and nature experiences.",
    demographicsAndCulture:
      "Puttalam is socially diverse, with Sinhala, Muslim, and Tamil communities contributing to a mixed coastal identity and varied traditions.",
    images: districtImages("puttalam"),
  },
  LK71: {
    id: "LK71",
    name: "Anuradhapura",
    province: "North Central Province",
    geographicalProfile:
      "Anuradhapura is one of the largest districts in Sri Lanka, known for broad dry-zone plains, ancient reservoirs, forests, and irrigation-based agricultural landscapes.",
    historyAndHeritage:
      "It is one of the most historically important districts in Sri Lanka and was the first ancient capital of the island. The district is home to sacred Buddhist monuments, monasteries, and major archaeological treasures.",
    economyAndInfrastructure:
      "Agriculture is central to the district economy, especially paddy cultivation supported by tanks and irrigation systems. Roads and regional services connect a wide rural population.",
    tourismAndAttractions:
      "The Sacred City of Anuradhapura, Sri Maha Bodhi, Ruwanwelisaya, Jetavanaramaya, Abhayagiri, and Mihintale are among the district’s major attractions.",
    demographicsAndCulture:
      "The district is strongly associated with Sinhala Buddhist heritage, temple-centered life, farming traditions, and major pilgrimage culture.",
    images: districtImages("anuradhapura"),
  },
  LK72: {
    id: "LK72",
    name: "Polonnaruwa",
    province: "North Central Province",
    geographicalProfile:
      "Polonnaruwa District is characterized by dry-zone plains, tanks, forests, and cultivated land shaped by historic irrigation systems. It is both scenic and agriculturally important.",
    historyAndHeritage:
      "Polonnaruwa was once a major royal capital and remains one of Sri Lanka’s most celebrated archaeological regions. Its ruins reflect sophisticated ancient planning and Buddhist civilization.",
    economyAndInfrastructure:
      "Agriculture, especially rice cultivation, is a key economic activity, supported by reservoirs and irrigation. Tourism and regional services also contribute significantly.",
    tourismAndAttractions:
      "The ancient city of Polonnaruwa, Gal Vihara, Parakrama Samudraya, and surrounding heritage sites attract large numbers of cultural travelers.",
    demographicsAndCulture:
      "The district has a strong rural and Sinhala Buddhist identity shaped by farming, heritage preservation, and reverence for ancient civilization.",
    images: districtImages("polonnaruwa"),
  },
  LK81: {
    id: "LK81",
    name: "Badulla",
    province: "Uva Province",
    geographicalProfile:
      "Badulla District includes mountain ranges, valleys, waterfalls, tea estates, and fertile uplands. It is one of Sri Lanka’s most visually dramatic hill districts.",
    historyAndHeritage:
      "The district’s history is tied to Kandyan traditions, colonial plantation development, and long-standing village settlement in the hill country.",
    economyAndInfrastructure:
      "Tea, vegetable farming, trade, education, and tourism are major economic pillars. Rail and mountain road links support movement through this upland region.",
    tourismAndAttractions:
      "Ella, Nine Arches Bridge, Dunhinda Falls, tea estates, mountain viewpoints, and sacred sites make Badulla highly attractive for domestic and foreign tourism.",
    demographicsAndCulture:
      "Badulla’s culture reflects a blend of Sinhala and Tamil hill-country communities, agricultural life, and religious traditions rooted in upland Sri Lanka.",
    images: districtImages("badulla"),
  },
  LK82: {
    id: "LK82",
    name: "Monaragala",
    province: "Uva Province",
    geographicalProfile:
      "Monaragala District covers a broad area of dry and intermediate-zone terrain with forests, chena lands, paddy fields, and scattered settlements. It is one of the largest and more rural districts in the country.",
    historyAndHeritage:
      "The district’s history is closely linked to rural settlement, forest-frontier livelihoods, and traditional agricultural communities of southeastern Sri Lanka.",
    economyAndInfrastructure:
      "Agriculture dominates the local economy, including paddy, sugarcane, and other crops, with expanding road access and state services supporting development.",
    tourismAndAttractions:
      "Monaragala offers access to nature, waterfalls, temples, and routes to nearby wildlife and heritage regions, making it appealing for inland exploration.",
    demographicsAndCulture:
      "Its identity is strongly rural, with Sinhala village traditions, Buddhist religious life, and a close relationship to land-based livelihoods.",
    images: districtImages("monaragala"),
  },
  LK91: {
    id: "LK91",
    name: "Ratnapura",
    province: "Sabaragamuwa Province",
    geographicalProfile:
      "Ratnapura District is known for rivers, rainforests, gem-bearing lands, plantations, and foothill terrain leading toward the central highlands. It is lush and environmentally rich.",
    historyAndHeritage:
      "Ratnapura has a famous historical connection to gem mining and trade, while also carrying temple traditions and long-established regional cultural practices.",
    economyAndInfrastructure:
      "Gem-related activity, agriculture, plantations, trade, and services support the district economy. Ratnapura town functions as an important regional center.",
    tourismAndAttractions:
      "Sinharaja access routes, waterfalls, temples, gem-related experiences, and scenic hill-country gateways make the district notable for eco and cultural travel.",
    demographicsAndCulture:
      "The district reflects a strong Sinhala cultural identity shaped by trade, Buddhism, rural life, and pride in its gem heritage.",
    images: districtImages("ratnapura"),
  },
  LK92: {
    id: "LK92",
    name: "Kegalle",
    province: "Sabaragamuwa Province",
    geographicalProfile:
      "Kegalle District includes hills, rubber lands, fertile valleys, and riverine landscapes. It lies between the western lowlands and the central uplands.",
    historyAndHeritage:
      "The district has links to Kandyan history, temple traditions, and colonial plantation development. Its settlements preserve many long-standing regional customs.",
    economyAndInfrastructure:
      "Rubber, agriculture, trade, and transport are central to the district economy. Its location along major inland routes supports movement and commerce.",
    tourismAndAttractions:
      "Attractions include scenic countryside, temple sites, elephant-related attractions in the wider area, and access routes toward hill-country destinations.",
    demographicsAndCulture:
      "Kegalle has a warm rural cultural identity with Sinhala traditions, Buddhist observances, and livelihoods strongly connected to agriculture and plantations.",
    images: districtImages("kegalle"),
  },
};

const FALLBACK_DISTRICT: DistrictData = {
  id: "",
  name: "Select a district",
  province: "",
  geographicalProfile:
    "Click any district on the map to view its geographical profile.",
  historyAndHeritage:
    "Its history and heritage details will appear here after selection.",
  economyAndInfrastructure:
    "Economic and infrastructure highlights will be shown here.",
  tourismAndAttractions:
    "Tourist attractions and popular experiences will appear here.",
  demographicsAndCulture:
    "Demographic and cultural information will appear here.",
  images: [
    "/maps/default-district.jpg",
    "/maps/default-district.jpg",
    "/maps/default-district.jpg",
  ],
};

export default function SriLankaMap() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedPathRef = useRef<SVGPathElement | null>(null);
  const depthPathRef = useRef<SVGPathElement | null>(null);
  const [active, setActive] = useState<DistrictData | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [moveForward, setMoveForward] = useState(true);

  const district = active || FALLBACK_DISTRICT;

  useEffect(() => {
    let mounted = true;
    const cleanupFns: Array<() => void> = [];

    async function setupMap() {
      try {
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
          path.style.filter =
            "drop-shadow(0 18px 24px rgba(56, 84, 73, 0.28))";
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

          const handleEnter = () => {
            if (selectedPathRef.current !== path) {
              path.style.fill = "#a6c992";
              path.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,0.10))";
              path.style.transform = "translateY(-6px) scale(1.015)";
            }
          };

          const handleLeave = () => {
            if (selectedPathRef.current !== path) {
              resetPath(path);
            }
          };

          const handleClick = () => {
            if (selectedPathRef.current) {
              resetPath(selectedPathRef.current);
            }

            removeDepthLayer();
            selectedPathRef.current = path;
            activatePath(path);

            const selectedDistrict = DISTRICT_DATA[id] || {
              ...FALLBACK_DISTRICT,
              id,
              name,
            };

            setActive(selectedDistrict);
          };

          path.addEventListener("mouseenter", handleEnter);
          path.addEventListener("mouseleave", handleLeave);
          path.addEventListener("click", handleClick);

          cleanupFns.push(() => {
            path.removeEventListener("mouseenter", handleEnter);
            path.removeEventListener("mouseleave", handleLeave);
            path.removeEventListener("click", handleClick);
          });
        });
      } catch (error) {
        console.error("Failed to load SVG map:", error);
      }
    }

    setupMap();

    return () => {
      mounted = false;
      cleanupFns.forEach((fn) => fn());
      if (depthPathRef.current) {
        depthPathRef.current.remove();
        depthPathRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const images = district.images || [];
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => {
        if (moveForward) {
          if (prev >= images.length - 1) {
            setMoveForward(false);
            return prev - 1 >= 0 ? prev - 1 : 0;
          }
          return prev + 1;
        }

        if (prev <= 0) {
          setMoveForward(true);
          return images.length > 1 ? 1 : 0;
        }

        return prev - 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [district, moveForward]);

  useEffect(() => {
    setSlideIndex(0);
    setMoveForward(true);
  }, [active]);

  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:grid-cols-[1.05fr_0.95fr]">
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

          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            {district.name}
          </h2>

          {district.province && (
            <p className="mt-2 text-sm font-medium text-slate-500">
              Province: {district.province}
            </p>
          )}

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Click any district on the map to view its geographical profile,
            history and heritage, economy and infrastructure, tourism and
            attractions, and demographics and culture.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Current district
            </div>
            <div className="mt-2 text-lg font-semibold text-slate-900">
              {district.name}
            </div>
            {district.id && (
              <div className="mt-1 text-sm text-slate-500">
                Code: {district.id}
              </div>
            )}
          </div>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Geographical Profile
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {district.geographicalProfile}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">
                History and Heritage
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {district.historyAndHeritage}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Economy and Infrastructure
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {district.economyAndInfrastructure}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Tourism and Attractions
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {district.tourismAndAttractions}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Demographics and Culture
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {district.demographicsAndCulture}
              </p>
            </div>

            {district.images && district.images.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900">
                    District Gallery
                  </h3>
                  <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Auto Slide
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                      width: `${district.images.length * 100}%`,
                      transform: `translateX(-${
                        slideIndex * (100 / district.images.length)
                      }%)`,
                    }}
                  >
                    {district.images.map((img, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0"
                        style={{ width: `${100 / district.images.length}%` }}
                      >
                        <img
                          src={img}
                          alt={`${district.name} ${index + 1}`}
                          className="h-72 w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                </div>

                <div className="mt-4 flex justify-center gap-2">
                  {district.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSlideIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        slideIndex === index
                          ? "w-6 bg-emerald-500"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}