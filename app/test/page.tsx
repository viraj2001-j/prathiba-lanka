"use client";

import { useEffect, useRef, useState } from "react";
import { DISTRICT_DATA, FALLBACK_DISTRICT, type DistrictData } from "./districts";

export default function Final3DMap() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<DistrictData | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [imgIndex, setImgIndex] = useState(0); // For Image Swiper

  useEffect(() => {
    async function initMap() {
      try {
        const res = await fetch("/maps/srilanka-districts.svg");
        const svgText = await res.text();
        if (!wrapperRef.current) return;

        wrapperRef.current.innerHTML = svgText;
        const svg = wrapperRef.current.querySelector("svg")!;
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 1000 1000");
        svg.style.overflow = "visible"; 

        const paths = Array.from(svg.querySelectorAll("path"));

        paths.forEach((path) => {
          const id = path.getAttribute("id") || "";
          path.style.cursor = "pointer";
          path.style.transition = "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
          path.style.fill = "#cbd5e1";
          path.style.stroke = "#fff";
          path.style.strokeWidth = "1";
          path.style.transformBox = "fill-box";
          path.style.transformOrigin = "center";

          path.onclick = (e) => {
            e.stopPropagation();
            paths.forEach(p => {
              p.style.fill = "#cbd5e1";
              p.style.transform = "translateY(0) rotate(0deg) scale(1)";
              p.style.filter = "none";
            });

            svg.appendChild(path);
            path.style.transform = "translateY(-60px) scale(1.15)";
            
            setTimeout(() => {
              path.style.transform = "translateY(-60px) scale(1.2) rotate(12deg)";
              path.style.fill = "#10b981";
              path.style.filter = "drop-shadow(0 40px 20px rgba(0,0,0,0.2)) drop-shadow(0 0 20px rgba(16,185,129,0.6))";
            }, 50);

            // Delay popup to show animation
            setTimeout(() => {
              const data = DISTRICT_DATA[id] || { ...FALLBACK_DISTRICT, id };
              setActive(data);
              setImgIndex(0); // Reset image to first one
              setShowPopup(true);
            }, 900); 
          };
        });
      } catch (err) {
        console.error("Map Load Error:", err);
      }
    }
    initMap();
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => {
      setActive(null);
      if (wrapperRef.current) {
        const paths = wrapperRef.current.querySelectorAll("path");
        paths.forEach(p => {
          (p as SVGPathElement).style.fill = "#cbd5e1";
          (p as SVGPathElement).style.transform = "translateY(0) rotate(0deg) scale(1)";
          (p as SVGPathElement).style.filter = "none";
        });
      }
    }, 300);
  };

  const nextImg = () => {
    if (active) setImgIndex((prev) => (prev + 1) % active.images.length);
  };

  const prevImg = () => {
    if (active) setImgIndex((prev) => (prev - 1 + active.images.length) % active.images.length);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[linear-gradient(180deg,#f9fcfa_0%,#f3f8f5_100%)]">
      <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-10">
        
        {/* Background "LANKA" Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="text-[25vw] font-black text-slate-200/50 uppercase leading-none">Lanka</span>
        </div>

        {/* Map Stage */}
        <div className="relative z-10 w-full max-w-2xl h-[70vh] flex items-center justify-center" style={{ perspective: "1200px" }}>
          <div ref={wrapperRef} className="w-full h-full drop-shadow-2xl" />
        </div>

        {/* DETAILED POPUP CARD */}
        {showPopup && active && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 animate-in fade-in duration-300" onClick={handleClose}>
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              
              {/* Top Image Swiper Section */}
              <div className="relative h-64 bg-slate-200 group">
                <img 
                  src={active.images[imgIndex]} 
                  alt={active.name} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Close Button */}
                <button onClick={handleClose} className="absolute top-6 right-6 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md transition-all">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Swiper Controls */}
                <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  ←
                </button>
                <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </button>

                {/* District Title Over Image */}
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">{active.province}</p>
                  <h2 className="text-5xl font-black tracking-tighter">{active.name}</h2>
                </div>
              </div>

              {/* Scrollable Content Section */}
              <div className="p-8 overflow-y-auto space-y-8 bg-white custom-scrollbar">
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 border-b pb-6">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Capital</p>
                    <p className="font-bold text-slate-800">{active.capital}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Area</p>
                    <p className="font-bold text-slate-800">{active.area}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Population</p>
                    <p className="font-bold text-slate-800">{active.population}</p>
                  </div>
                </div>

                {/* Detail Blocks */}
                <div className="space-y-6">
                  <DetailBlock title="Geographical Profile" text={active.geographicalProfile} />
                  <DetailBlock title="History & Heritage" text={active.historyAndHeritage} />
                  <DetailBlock title="Economy & Infrastructure" text={active.economyAndInfrastructure} />
                  <DetailBlock title="Tourism & Attractions" text={active.tourismAndAttractions} />
                  <DetailBlock title="Demographics & Culture" text={active.demographicsAndCulture} />
                </div>

                <button onClick={handleClose} className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg">
                  Back to Island Map
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Helper component for detail sections
function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="group">
      <h4 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1 group-hover:translate-x-1 transition-transform">
        {title}
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-100 pl-4">
        {text}
      </p>
    </div>
  );
}