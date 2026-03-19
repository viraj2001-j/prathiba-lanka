
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const navItems = [
//   { id: 1, name: "Home", href: "/" },
//   { id: 2, name: "Packages", href: "/packages" },
//   { id: 3, name: "Hotels", href: "/hotels" },
//   { id: 4, name: "Reviews", href: "/#reviews" },
//   { id: 5, name: "Contact", href: "/contact" },
//   { id: 6, name: "Buy Cart", href: "/cart" },
//   { id: 7, name: "FAQ & Helps", href: "/faq" },
//   { id: 8, name: "Map", href: "/map" },
//   { id: 9, name: "About", href: "/about" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">
//       {/* Glass Background */}
//       <div
//         className="
//         backdrop-blur-2xl 
//         bg-white/15 
//         border-b border-white/20 
//         shadow-[0_4px_20px_rgba(255,255,255,0.15)]
//       "
//       >
//         <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 group">
//             <div
//               className="
//               w-9 h-9 rounded-xl 
//               bg-white/25 backdrop-blur-xl 
//               flex items-center justify-center 
//               text-white font-bold text-sm 
//               transition group-hover:bg-white/40
//             "
//             >
//               PLV
//             </div>

//             <div className="flex flex-col leading-tight">
//               <span className="text-sm font-semibold text-white group-hover:text-white/90 transition">
//                 Prathiba Lanka Voyages
//               </span>
//               <span className="text-xs text-white/60">
//                 Discover Sri Lanka with comfort
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 href={item.href}
//                 className="
//                   text-sm text-white/80 
//                   hover:text-white 
//                   transition 
//                   hover:drop-shadow-[0_0px_4px_rgba(255,255,255,0.8)]
//                 "
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Login Button */}
//             <Link
//               href="/auth"
//               className="
//                 ml-2 px-5 py-2 text-sm rounded-full 
//                 bg-white/20 backdrop-blur-xl 
//                 border border-white/30 
//                 text-white 
//                 transition 
//                 hover:bg-white/30
//                 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]
//               "
//             >
//               Login
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="
//               md:hidden w-10 h-10 rounded-xl 
//               bg-white/20 border border-white/30 
//               flex flex-col items-center justify-center gap-[3px]
//             "
//             onClick={() => setOpen(!open)}
//           >
//             <span className="w-5 h-[2px] bg-white"></span>
//             <span className="w-5 h-[2px] bg-white"></span>
//             <span className="w-5 h-[2px] bg-white"></span>
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         {open && (
//           <div className="md:hidden border-t border-white/20 bg-black/40 backdrop-blur-xl">
//             <div className="max-w-6xl mx-auto flex flex-col px-4 py-3 gap-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.id}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className="py-2 text-white/90 hover:text-white transition"
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               <Link
//                 href="/auth"
//                 onClick={() => setOpen(false)}
//                 className="
//                   mt-2 w-full text-center 
//                   px-4 py-2 text-sm rounded-full 
//                   bg-white/25 backdrop-blur-xl 
//                   border border-white/20 
//                   text-white 
//                   hover:bg-white/35
//                   transition
//                 "
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const navItems = [
//   { id: 1, name: "Home", href: "/" },
//   { id: 2, name: "Packages", href: "/packages" },
//   { id: 3, name: "Hotels", href: "/hotels" },
//   { id: 4, name: "Reviews", href: "/#reviews" },
//   { id: 5, name: "Contact", href: "/contact" },
//   { id: 6, name: "Buy Cart", href: "/cart" },
//   { id: 7, name: "FAQ & Helps", href: "/faq" },
//   { id: 8, name: "Map", href: "/map" },
//   { id: 9, name: "About", href: "/about" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">
//       <div className="border-b border-emerald-900/10 bg-white/75 backdrop-blur-2xl shadow-[0_10px_40px_rgba(7,63,43,0.08)]">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
//           {/* Logo */}
//           <Link href="/" className="group flex items-center gap-3 min-w-0">
//             <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#067a47] to-[#035c35] text-sm font-bold text-white shadow-[0_10px_25px_rgba(6,122,71,0.28)]">
//               PLV
//             </div>

//             <div className="min-w-0 leading-tight">
//               <span className="block truncate font-semibold text-[#17352a] transition group-hover:text-[#067a47]">
//                 Prathibha Lanka Voyages
//               </span>
//               <span className="block truncate text-xs text-[#5f756b]">
//                 Discover Sri Lanka with elegance
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden items-center gap-6 xl:flex">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 href={item.href}
//                 className="relative text-sm font-medium text-[#27453a] transition hover:text-[#067a47] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:rounded-full after:bg-[#f0ab1d] after:transition-all hover:after:w-full"
//               >
//                 {item.name}
//               </Link>
//             ))}

//             <Link
//               href="/auth"
//               className="ml-2 inline-flex items-center justify-center rounded-full border border-[#067a47]/15 bg-gradient-to-r from-[#067a47] to-[#035c35] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(6,122,71,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(6,122,71,0.32)]"
//             >
//               Login
//             </Link>
//           </div>

//           {/* Mobile Button */}
//           <button
//             className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#067a47]/10 bg-white text-[#17352a] shadow-sm transition hover:bg-[#f7faf8] xl:hidden"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//           >
//             <span className="h-[2px] w-5 rounded-full bg-[#17352a]"></span>
//             <span className="h-[2px] w-5 rounded-full bg-[#17352a]"></span>
//             <span className="h-[2px] w-5 rounded-full bg-[#17352a]"></span>
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         {open && (
//           <div className="border-t border-[#067a47]/10 bg-white/95 backdrop-blur-2xl xl:hidden">
//             <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 md:px-6 lg:px-8">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.id}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className="rounded-2xl px-4 py-3 text-sm font-medium text-[#27453a] transition hover:bg-[#e9f6ef] hover:text-[#067a47]"
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               <Link
//                 href="/auth"
//                 onClick={() => setOpen(false)}
//                 className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#067a47] to-[#035c35] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(6,122,71,0.24)] transition hover:-translate-y-0.5"
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FaShoppingCart } from "react-icons/fa";

// const navItems = [
//   { id: 1, name: "Home", href: "/" },
//   { id: 2, name: "Packages", href: "/packages" },
//   { id: 3, name: "Hotels", href: "/hotels" },
//   { id: 4, name: "Reviews", href: "/#reviews" },
//   { id: 5, name: "Contact", href: "/contact" },
//   { id: 6, name: "FAQ & Help", href: "/faq" },
//   { id: 7, name: "Map", href: "/map" },
//   { id: 8, name: "About", href: "/about" },
// ];

// export default function UltraPremiumNavbar() {
//   const [open, setOpen] = useState(false);
//   const [shrink, setShrink] = useState(false);
//   const pathname = usePathname();
//   const [cartCount, setCartCount] = useState(2); // example cart counter
//   const [profileMenu, setProfileMenu] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 60) setShrink(true);
//       else setShrink(false);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl bg-white/60 shadow-lg border-b border-gray-200 ${
//         shrink ? "py-2" : "py-4"
//       }`}
//     >
//       <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
//         <div className="flex items-center justify-between">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 text-white font-bold shadow-lg transition-all duration-300">
//               PLV
//             </div>
//             <div className="leading-tight">
//               <p className="font-semibold text-gray-800 hover:text-emerald-600 transition">Prathibha Lanka Voyages</p>
//               <span className="text-xs text-gray-500">Discover Sri Lanka with elegance</span>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8 relative">

//             {/* Links */}
//             {navItems.map((item, index) => {
//               const active = pathname === item.href;
//               return (
//                 <Link
//                   key={item.id}
//                   href={item.href}
//                   className="relative text-sm font-medium text-gray-700 hover:text-emerald-600 transition"
//                 >
//                   {item.name}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 transition-all duration-300 ${
//                       active ? "w-full" : "group-hover:w-full"
//                     }`}
//                   />
//                 </Link>
//               );
//             })}

//             {/* Slider Underline */}
//             <span
//               className={`absolute -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-amber-400 to-rose-500 transition-all duration-300`}
//             />

//             {/* Cart */}
//             <button className="relative ml-4 text-gray-700 hover:text-emerald-600 transition">
//               <FaShoppingCart size={18} />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-white bg-red-500 rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </button>

//             {/* Profile */}
//             <div className="relative ml-4">
//               <button
//                 onClick={() => setProfileMenu(!profileMenu)}
//                 className="h-8 w-8 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 text-white font-bold"
//               >
//                 U
//               </button>
//               {profileMenu && (
//                 <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
//                   <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</Link>
//                   <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100">Settings</Link>
//                   <Link href="/logout" className="block px-4 py-2 text-sm hover:bg-gray-100">Logout</Link>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden flex flex-col gap-1.5 p-2"
//             aria-label="Toggle menu"
//           >
//             <span className={`h-[2px] w-6 bg-gray-800 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
//             <span className={`h-[2px] w-6 bg-gray-800 transition ${open ? "opacity-0" : ""}`}></span>
//             <span className={`h-[2px] w-6 bg-gray-800 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
//         <div className="mx-4 mt-2 rounded-xl bg-white shadow-xl border border-gray-100 p-4 space-y-2">
//           {navItems.map((item) => (
//             <Link
//               key={item.id}
//               href={item.href}
//               onClick={() => setOpen(false)}
//               className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
//             >
//               {item.name}
//             </Link>
//           ))}

//           <Link
//             href="/auth"
//             onClick={() => setOpen(false)}
//             className="block text-center mt-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-800 px-5 py-3 text-white font-semibold"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Packages", href: "/packages" },
 
  { id: 4, name: "Reviews", href: "/#reviews" },
  { id: 5, name: "Contact", href: "/contact" },

  { id: 7, name: "FAQ & Help", href: "/faq" },
  { id: 8, name: "Map", href: "/map" },
  { id: 9, name: "About", href: "/about" },
];

export default function PremiumNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-gray-200 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 text-white font-bold shadow-lg">
              PLV
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-800 hover:text-emerald-600 transition">
                Prathibha Lanka Voyages
              </p>
              <span className="text-xs text-gray-500">
                Discover Sri Lanka with elegance
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    active ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Animated Gradient Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 transition-all duration-300 group-hover:w-full ${
                      active ? "w-full" : ""
                    }`}
                  />
                  {/* Subtle hover glow */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-emerald-400 opacity-0 group-hover:opacity-10 transition-all pointer-events-none"></span>
                </Link>
              );
            })}

            {/* Login Button */}
            <Link
              href="/auth"
              className="ml-4 rounded-full bg-gradient-to-r from-emerald-600 to-green-800 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-105 hover:shadow-2xl transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 bg-gray-800 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-gray-800 transition ${open ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-gray-800 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mx-4 mt-2 rounded-xl bg-white shadow-xl border border-gray-100 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/auth"
            onClick={() => setOpen(false)}
            className="block text-center mt-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-800 px-5 py-3 text-white font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}