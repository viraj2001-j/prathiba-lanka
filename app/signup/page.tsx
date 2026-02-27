"use client";

import { useState, useEffect } from "react";
import "./signup.css"; // Make sure your globals.css exists

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

export default function SignupPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [slide, setSlide] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.username || !form.password) {
      return setMessage("❌ Please fill in all required fields.");
    }
    if (!form.email.includes("@")) {
      return setMessage("❌ Enter a valid email address.");
    }
    if (form.password.length < 6) {
      return setMessage("❌ Password must be at least 6 characters.");
    }
    if (form.password !== form.confirmPassword) {
      return setMessage("❌ Passwords do not match.");
    }

    setLoading(true);
    setTimeout(() => {
      console.log(form);
      setLoading(false);
      setMessage("✅ Account created successfully!");
    }, 2000);
  };

  const inputStyle =
    "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400 transition";

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
      <div className="absolute inset-0 bg-gradient-to-br from-[#042A1F]/90 via-[#083D2C]/80 to-[#0F6148]/90" />

      {/* Signup Card */}
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

        {/* Message */}
        {message && (
          <div
            className={`mb-5 text-sm px-4 py-2 rounded-xl ${
              message.startsWith("❌")
                ? "bg-red-500/20 text-red-300 border border-red-400/40"
                : "bg-green-500/20 text-green-300 border border-green-400/40"
            }`}
          >
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className={inputStyle}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={inputStyle}
          />

          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className={inputStyle}
          />

          <input
            name="contactNumber"
            type="tel"
            placeholder="Contact Number"
            value={form.contactNumber}
            onChange={handleChange}
            className={inputStyle}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={inputStyle}
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className={inputStyle}
          />

          <button
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-400 text-[#042A1F] font-bold tracking-widest uppercase shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "✦ Create Account"}
          </button>
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

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-white/50">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-amber-400 hover:text-amber-300 font-semibold"
          >
            Log in
          </a>
        </p>
      </div>

      {/* Bottom Caption */}
      <div className="absolute bottom-6 text-xs tracking-[0.4em] uppercase text-white/40">
        {slides[slide].caption}
      </div>
    </div>
  );
}