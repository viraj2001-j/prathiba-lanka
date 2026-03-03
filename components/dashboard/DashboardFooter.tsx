"use client";

export default function DashboardFooter() {
  return (
    <footer className="
      w-full py-6 px-8
      bg-white/5 backdrop-blur-3xl
      border-t border-white/10
      shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_16px_rgba(255,255,255,0.05)]
      flex flex-col md:flex-row items-center justify-between
      text-gray-300 text-sm
    ">
      <p className="mb-2 md:mb-0">
        © {new Date().getFullYear()} Hello Travels. All rights reserved.
      </p>

      <div className="flex gap-4">
        <a
          href="#"
          className="hover:text-amber-300 transition-colors duration-300"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hover:text-amber-300 transition-colors duration-300"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="hover:text-amber-300 transition-colors duration-300"
        >
          Support
        </a>
      </div>
    </footer>
  );
}