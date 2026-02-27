

"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=90",
    caption: "Pristine Shores · Sri Lanka",
  },
  {
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=90",
    caption: "Ancient Wonders · Sri Lanka",
  },
  {
    url: "https://images.unsplash.com/photo-1585016495481-91285c6e8d98?auto=format&fit=crop&w=1800&q=90",
    caption: "Lush Highlands · Sri Lanka",
  },
];

export default function LoginPage() {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [slide, setSlide] = useState(0);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!form.identifier || !form.password) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    setLoading(true);

    setTimeout(() => {
      console.log(form);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#042A1F]">

      {/* Background Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ${
            i === slide ? "opacity-100 scale-105" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.url})` }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 " />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-6 p-10 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-600 to-yellow-400 flex items-center justify-center text-2xl shadow-lg">
            🌴
          </div>

          <h1 className="text-3xl font-black tracking-widest text-white font-serif animate-breathe">
            PRATHIBHA
          </h1>

          <p className="text-xs tracking-[0.4em] text-amber-400 font-semibold uppercase mt-1">
            Lanka Voyages
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-4" />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 text-sm text-red-300 bg-red-500/20 border border-red-400/40 px-4 py-2 rounded-xl animate-pulse">
            ⚠ {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Email or Username"
            value={form.identifier}
            onChange={(e) =>
              setForm({ ...form, identifier: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition"
            >
              {showPass ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-400 text-[#042A1F] font-bold tracking-widest uppercase shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
          >
            {loading ? "Signing In..." : "✦ Start Your Journey"}
          </button>

                  {/* Login Link */}
        <p className="mt-6 text-center text-sm text-white/50">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-amber-400 hover:text-amber-300 font-semibold"
          >
            Sign up
          </a>
        </p>

                {/* Login Link */}
        <p className="mt-0 text-center text-sm text-white/50">
          Back to Home{" "}
          <a
            href="/"
            className="text-amber-400 hover:text-amber-300 font-semibold"
          >
            Home
          </a>
        </p>
        </form>

        {/* Slide Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === slide ? "bg-amber-400 scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Caption */}
      <div className="absolute bottom-6 text-xs tracking-[0.4em] uppercase text-white/40">
        {slides[slide].caption}
      </div>
    </div>
  );
}