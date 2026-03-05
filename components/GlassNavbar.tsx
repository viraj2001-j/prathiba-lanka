"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
      <div className="
        backdrop-blur-2xl 
        bg-white/15 
        border-b border-white/20 
        shadow-[0_4px_20px_rgba(255,255,255,0.15)]
      ">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="
              w-9 h-9 rounded-xl 
              bg-white/25 backdrop-blur-xl 
              flex items-center justify-center 
              text-white font-bold text-sm 
              transition group-hover:bg-white/40
            ">
              PLV
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white group-hover:text-white/90 transition">
                Prathiba Lanka Voyages
              </span>
              <span className="text-xs text-white/60">
                Discover Sri Lanka with comfort
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {["Home", "Packages", "Hotels", "Reviews", "Contact", "buy curt", "faq and helps", "map"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="
                  text-sm text-white/80 
                  hover:text-white 
                  transition 
                  hover:drop-shadow-[0_0px_4px_rgba(255,255,255,0.8)]
                "
              >
                {item}
              </Link>
            ))}

            {/* Login Button */}
            <Link
              href="/auth"
              className="
                ml-2 px-5 py-2 text-sm rounded-full 
                bg-white/20 backdrop-blur-xl 
                border border-white/30 
                text-white 
                transition 
                hover:bg-white/30
                hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]
              "
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden w-10 h-10 rounded-xl 
              bg-white/20 border border-white/30 
              flex flex-col items-center justify-center gap-[3px]
            "
            onClick={() => setOpen(!open)}
          >
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden border-t border-white/20 bg-black/40 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto flex flex-col px-4 py-3 gap-2">
              {["Home", "Packages", "Hotels", "Reviews", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="py-2 text-white/90 hover:text-white transition"
                >
                  {item}
                </Link>
              ))}

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="
                  mt-2 w-full text-center 
                  px-4 py-2 text-sm rounded-full 
                  bg-white/25 backdrop-blur-xl 
                  border border-white/20 
                  text-white 
                  hover:bg-white/35
                  transition
                "
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}