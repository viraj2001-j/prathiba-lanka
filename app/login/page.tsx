// "use client";

// import React, { useState } from "react";

// const LoginPage = () => {
//   const [form, setForm] = useState({ identifier: "", password: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      
//       {/* 🌴 LIVE 4K VIDEO BACKGROUND */}
//       {/* Tip: Use a high-quality MP4 from a CDN. This one is a serene beach loop. */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover scale-105"
//       >
//         <source 
//           src="https://cdn.pixabay.com/video/2021/09/01/87134-596163351_tiny.mp4" 
//           type="video/mp4" 
//         />
//       </video>

//       {/* 🎭 MULTI-LAYER OVERLAY (For depth and readability) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
//       <div className="absolute inset-0 backdrop-grayscale-[0.2] z-10" />

//       {/* 💎 THE GLASS CARD */}
//       <div className="relative z-20 w-full max-w-[420px] mx-6 p-10 rounded-[2rem] 
//                       bg-white/5 backdrop-blur-xl border border-white/20 
//                       shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-center">
        
//         {/* Brand Identity */}
//         <div className="mb-10">
//           <h1 className="text-white text-4xl font-light tracking-[0.2em] uppercase mb-2">
//             Prathibha
//           </h1>
//           <div className="h-[1px] w-12 bg-amber-400 mx-auto mb-2" />
//           <p className="text-amber-400 text-[10px] tracking-[0.5em] font-bold uppercase">
//             Lanka Voyages
//           </p>
//         </div>

//         {/* Simplified Form Logic */}
//         <form className="space-y-4">
//           <div className="group transition-all">
//             <input
//               name="identifier"
//               type="text"
//               placeholder="Your Email"
//               onChange={handleChange}
//               className="w-full bg-white/10 border border-white/10 p-4 rounded-xl text-white placeholder-white/50 
//                          focus:outline-none focus:ring-1 focus:ring-amber-400/50 focus:bg-white/20 transition-all"
//             />
//           </div>

//           <div className="group transition-all">
//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               onChange={handleChange}
//               className="w-full bg-white/10 border border-white/10 p-4 rounded-xl text-white placeholder-white/50 
//                          focus:outline-none focus:ring-1 focus:ring-amber-400/50 focus:bg-white/20 transition-all"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-4 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-widest rounded-xl 
//                        shadow-[0_10px_20px_rgba(245,158,11,0.3)] transition-all active:scale-95"
//           >
//             Explore Now
//           </button>
//         </form>

//         {/* Subtle Footer Links */}
//         <div className="mt-8 flex justify-between text-[11px] uppercase tracking-wider text-white/60">
//           <a href="#" className="hover:text-white transition">New Account</a>
//           <a href="#" className="hover:text-white transition">Help</a>
//         </div>
//       </div>

//       {/* 🏷️ LOCATION TAG (Small luxury detail) */}
//       <div className="absolute bottom-8 right-8 z-20 hidden md:block">
//         <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">
//           Currently viewing: <span className="text-white/80">Mirissa Coastline</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// "use client";

// import React, { useState, useEffect } from "react";

// type LoginForm = {
//   identifier: string;
//   password: string;
// };

// const LoginPage: React.FC = () => {
//   const [form, setForm] = useState<LoginForm>({
//     identifier: "",
//     password: "",
//   });

//   const [error, setError] = useState<string | null>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const slides = [
//     {
//       url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=90",
//       caption: "Pristine Shores",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=90",
//       caption: "Ancient Wonders",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1585016495481-91285c6e8d98?auto=format&fit=crop&w=1800&q=90",
//       caption: "Lush Highlands",
//     },
//   ];

//   // Auto-advance slideshow every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     if (!form.identifier || !form.password) {
//       setError("Please enter your email/username and password.");
//       return;
//     }
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       console.log("Login data:", form);
//     }, 2000);
//   };

//   return (
//     <>
//       {/* ── Global Styles ── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Jost:wght@300;400;500;600&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         :root {
//           --gold: #D4A847;
//           --gold-light: #F0C96B;
//           --gold-dark: #A07830;
//           --green-deep: #042A1F;
//           --green-mid: #083D2C;
//           --green-bright: #0F6148;
//           --white: #FFFFFF;
//           --glass: rgba(255,255,255,0.08);
//           --glass-border: rgba(255,255,255,0.18);
//         }

//         /* ── Background Slides ── */
//         .slide {
//           position: absolute; inset: 0;
//           background-size: cover; background-position: center;
//           opacity: 0;
//           transition: opacity 1.4s ease-in-out;
//           transform: scale(1.05);
//           animation: kenBurns 12s ease-in-out infinite alternate;
//         }
//         .slide.active { opacity: 1; }

//         @keyframes kenBurns {
//           from { transform: scale(1.05) translateX(0); }
//           to   { transform: scale(1.0) translateX(-1%); }
//         }

//         /* ── Particles ── */
//         .particle {
//           position: absolute;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(212,168,71,0.7), transparent);
//           animation: floatUp linear infinite;
//           pointer-events: none;
//         }
//         @keyframes floatUp {
//           0%   { transform: translateY(0) scale(1); opacity: 0.6; }
//           100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
//         }

//         /* ── Card entrance ── */
//         @keyframes cardEntrance {
//           from { opacity: 0; transform: translateY(40px) scale(0.96); }
//           to   { opacity: 1; transform: translateY(0) scale(1); }
//         }
//         .login-card { animation: cardEntrance 0.9s cubic-bezier(0.16,1,0.3,1) both; }

//         /* ── Logo pulse ── */
//         @keyframes logoPulse {
//           0%, 100% { letter-spacing: 0.05em; }
//           50%       { letter-spacing: 0.12em; }
//         }
//         .logo-text { animation: logoPulse 4s ease-in-out infinite; }

//         /* ── Shimmer line ── */
//         @keyframes shimmerLine {
//           0%   { transform: scaleX(0); opacity: 0; }
//           50%  { transform: scaleX(1); opacity: 1; }
//           100% { transform: scaleX(0); opacity: 0; }
//         }
//         .shimmer-line {
//           height: 1px;
//           background: linear-gradient(90deg, transparent, var(--gold), transparent);
//           animation: shimmerLine 3s ease-in-out infinite;
//           transform-origin: center;
//         }

//         /* ── Button glow ── */
//         @keyframes btnGlow {
//           0%, 100% { box-shadow: 0 0 18px rgba(212,168,71,0.4); }
//           50%       { box-shadow: 0 0 38px rgba(212,168,71,0.8), 0 0 60px rgba(212,168,71,0.3); }
//         }
//         .btn-glow:not(:disabled):hover { animation: btnGlow 1.5s ease-in-out infinite; }

//         /* ── Spinner ── */
//         @keyframes spin { to { transform: rotate(360deg); } }
//         .spinner {
//           width: 18px; height: 18px;
//           border: 2px solid transparent;
//           border-top-color: var(--green-deep);
//           border-radius: 50%;
//           animation: spin 0.7s linear infinite;
//           display: inline-block;
//         }

//         /* ── Error shake ── */
//         @keyframes shake {
//           0%,100% { transform: translateX(0); }
//           20%     { transform: translateX(-6px); }
//           40%     { transform: translateX(6px); }
//           60%     { transform: translateX(-4px); }
//           80%     { transform: translateX(4px); }
//         }
//         .error-box { animation: shake 0.45s ease; }

//         /* ── Input focus ring ── */
//         .field-input {
//           width: 100%; padding: 14px 16px;
//           border-radius: 12px;
//           background: rgba(255,255,255,0.07);
//           border: 1px solid rgba(255,255,255,0.18);
//           color: #fff;
//           font-family: 'Jost', sans-serif;
//           font-size: 0.95rem;
//           outline: none;
//           transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
//         }
//         .field-input::placeholder { color: rgba(255,255,255,0.38); }
//         .field-input:focus {
//           border-color: var(--gold);
//           background: rgba(255,255,255,0.12);
//           box-shadow: 0 0 0 3px rgba(212,168,71,0.2);
//         }

//         /* ── Dot indicator ── */
//         .dot {
//           width: 7px; height: 7px; border-radius: 50%;
//           background: rgba(255,255,255,0.35);
//           cursor: pointer;
//           transition: background 0.3s, transform 0.3s;
//           border: none;
//         }
//         .dot.active { background: var(--gold); transform: scale(1.4); }

//         /* ── Caption fade ── */
//         @keyframes captionFade {
//           from { opacity: 0; transform: translateY(8px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .caption { animation: captionFade 0.8s ease both; }

//         /* ── Floating blobs ── */
//         @keyframes blobFloat {
//           0%,100% { transform: translate(0,0) scale(1); }
//           33%     { transform: translate(30px,-20px) scale(1.05); }
//           66%     { transform: translate(-20px,15px) scale(0.97); }
//         }
//         .blob { animation: blobFloat ease-in-out infinite; }
//       `}</style>

//       <div style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost', sans-serif", overflow: "hidden", background: "#042A1F" }}>

//         {/* ── Background Slideshow ── */}
//         {slides.map((s, i) => (
//           <div
//             key={i}
//             className={`slide ${i === currentSlide ? "active" : ""}`}
//             style={{ backgroundImage: `url("${s.url}")` }}
//           />
//         ))}

//         {/* ── Dark Overlay ── */}
//         <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(4,42,31,0.88) 0%, rgba(8,61,44,0.82) 50%, rgba(15,97,72,0.85) 100%)" }} />

//         {/* ── Floating Blobs ── */}
//         <div className="blob" style={{ position: "absolute", top: "-120px", left: "-100px", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,71,0.18), transparent 70%)", filter: "blur(60px)", animationDuration: "14s" }} />
//         <div className="blob" style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(15,97,72,0.35), transparent 70%)", filter: "blur(50px)", animationDuration: "18s", animationDelay: "-6s" }} />

//         {/* ── Floating Particles ── */}
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="particle"
//             style={{
//               left: `${10 + i * 11}%`,
//               bottom: 0,
//               width: `${4 + (i % 3) * 4}px`,
//               height: `${4 + (i % 3) * 4}px`,
//               animationDuration: `${7 + i * 1.5}s`,
//               animationDelay: `${i * 1.1}s`,
//             }}
//           />
//         ))}

//         {/* ── Main Content ── */}
//         <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "48px", padding: "24px", zIndex: 10, width: "100%", maxWidth: "900px" }}>

//           {/* ── Left Panel – Caption / Dots ── */}
//           <div style={{ display: "none", flexDirection: "column", gap: "24px", color: "#fff", flex: 1 }} className="left-panel">
//             <p className="caption" key={currentSlide} style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300 }}>
//               {slides[currentSlide].caption}
//             </p>
//             <div style={{ display: "flex", gap: "10px" }}>
//               {slides.map((_, i) => (
//                 <button key={i} className={`dot ${i === currentSlide ? "active" : ""}`} onClick={() => setCurrentSlide(i)} />
//               ))}
//             </div>
//           </div>

//           {/* ── Glass Login Card ── */}
//           <div
//             className="login-card"
//             style={{
//               flex: 1, maxWidth: "420px", margin: "0 auto",
//               background: "rgba(255,255,255,0.07)",
//               backdropFilter: "blur(28px)",
//               WebkitBackdropFilter: "blur(28px)",
//               border: "1px solid rgba(255,255,255,0.16)",
//               borderRadius: "28px",
//               padding: "48px 40px",
//               boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)",
//               color: "#fff",
//             }}
//           >
//             {/* Header */}
//             <div style={{ textAlign: "center", marginBottom: "36px" }}>
//               {/* Emblem */}
//               <div style={{ width: "60px", height: "60px", margin: "0 auto 16px", borderRadius: "50%", background: "linear-gradient(135deg, var(--gold-dark), var(--gold-light))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(212,168,71,0.5)", fontSize: "26px" }}>
//                 🌴
//               </div>

//               <h1
//                 className="logo-text"
//                 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, letterSpacing: "0.05em", lineHeight: 1.1, color: "#fff" }}
//               >
//                 PRATHIBHA
//               </h1>
//               <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.35em", color: "var(--gold)", marginTop: "4px", textTransform: "uppercase" }}>
//                 Lanka Voyages
//               </p>

//               <div className="shimmer-line" style={{ margin: "14px auto 0", width: "80%" }} />

//               <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", marginTop: "12px", letterSpacing: "0.05em" }}>
//                 Your Gateway to Sri Lanka&apos;s Wonders
//               </p>
//             </div>

//             {/* Error */}
//             {error && (
//               <div className="error-box" style={{ marginBottom: "20px", borderRadius: "12px", background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.4)", color: "#FCA5A5", padding: "12px 16px", fontSize: "0.83rem", display: "flex", alignItems: "center", gap: "8px" }}>
//                 <span>⚠️</span> {error}
//               </div>
//             )}

//             {/* Form */}
//             <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

//               {/* Email */}
//               <div>
//                 <label style={{ display: "block", fontSize: "0.78rem", marginBottom: "8px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500 }}>
//                   Email or Username
//                 </label>
//                 <div style={{ position: "relative" }}>
//                   <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", opacity: 0.5, fontSize: "16px" }}>✉️</span>
//                   <input
//                     name="identifier"
//                     type="text"
//                     value={form.identifier}
//                     onChange={handleChange}
//                     placeholder="your@email.com"
//                     className="field-input"
//                     style={{ paddingLeft: "42px" }}
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <label style={{ display: "block", fontSize: "0.78rem", marginBottom: "8px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500 }}>
//                   Password
//                 </label>
//                 <div style={{ position: "relative" }}>
//                   <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", opacity: 0.5, fontSize: "16px" }}>🔒</span>
//                   <input
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={form.password}
//                     onChange={handleChange}
//                     placeholder="••••••••"
//                     className="field-input"
//                     style={{ paddingLeft: "42px", paddingRight: "44px" }}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", fontSize: "16px", padding: "4px" }}
//                     title={showPassword ? "Hide" : "Show"}
//                   >
//                     {showPassword ? "🙈" : "👁️"}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember / Forgot */}
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
//                 <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
//                   <input type="checkbox" style={{ accentColor: "var(--gold)", width: "15px", height: "15px", cursor: "pointer" }} />
//                   <span>Remember me</span>
//                 </label>
//                 <a href="#" style={{ color: "var(--gold)", textDecoration: "none", transition: "color 0.2s" }}
//                   onMouseOver={e => (e.currentTarget.style.color = "var(--gold-light)")}
//                   onMouseOut={e => (e.currentTarget.style.color = "var(--gold)")}
//                 >
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="btn-glow"
//                 style={{
//                   width: "100%", padding: "15px",
//                   borderRadius: "14px",
//                   border: "none",
//                   background: isLoading ? "rgba(212,168,71,0.6)" : "linear-gradient(135deg, var(--gold-dark), var(--gold-light))",
//                   color: "#042A1F",
//                   fontFamily: "'Playfair Display', serif",
//                   fontWeight: 700,
//                   fontSize: "0.9rem",
//                   letterSpacing: "0.14em",
//                   textTransform: "uppercase",
//                   cursor: isLoading ? "not-allowed" : "pointer",
//                   transition: "transform 0.2s, background 0.3s",
//                   display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
//                   marginTop: "4px",
//                 }}
//                 onMouseOver={e => { if (!isLoading) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
//                 onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
//               >
//                 {isLoading ? (
//                   <><span className="spinner" /> Signing In...</>
//                 ) : (
//                   <>✦ Start Your Journey</>
//                 )}
//               </button>
//             </form>

//             {/* Slide Dots */}
//             <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "28px" }}>
//               {slides.map((_, i) => (
//                 <button key={i} className={`dot ${i === currentSlide ? "active" : ""}`} onClick={() => setCurrentSlide(i)} />
//               ))}
//             </div>

//             {/* Sign Up */}
//             <p style={{ marginTop: "20px", textAlign: "center", fontSize: "0.83rem", color: "rgba(255,255,255,0.5)" }}>
//               Don&apos;t have an account?{" "}
//               <a href="/signup" style={{ color: "var(--gold)", fontWeight: 600, textDecoration: "none" }}
//                 onMouseOver={e => (e.currentTarget.style.color = "var(--gold-light)")}
//                 onMouseOut={e => (e.currentTarget.style.color = "var(--gold)")}
//               >
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* ── Bottom Caption ── */}
//         <div style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", textAlign: "center", zIndex: 10 }}>
//           <p className="caption" key={`cap-${currentSlide}`} style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>
//             {slides[currentSlide].caption} · Sri Lanka
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;


// "use client";

// import { useState, useEffect } from "react";
// import "./login.css";

// export default function LoginPage() {
//   const [form, setForm] = useState({ identifier: "", password: "" });
//   const [error, setError] = useState("");
//   const [slide, setSlide] = useState(0);
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const slides = [
//     {
//       url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=90",
//       caption: "Pristine Shores",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=90",
//       caption: "Ancient Wonders",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1585016495481-91285c6e8d98?auto=format&fit=crop&w=1800&q=90",
//       caption: "Lush Highlands",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSlide((s) => (s + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     if (!form.identifier || !form.password) {
//       setError("Please enter your email/username and password.");
//       return;
//     }

//     setLoading(true);
//     setTimeout(() => {
//       console.log(form);
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="wrapper">
//       {/* Background Slides */}
//       {slides.map((s, i) => (
//         <div
//           key={i}
//           className={`slide ${i === slide ? "active" : ""}`}
//           style={{ backgroundImage: `url(${s.url})` }}
//         />
//       ))}

//       <div className="overlay" />

//       {/* Card */}
//       <div className="card">
//         <div className="header">
//           <div className="logo">🌴</div>
//           <h1>PRATHIBHA</h1>
//           <p className="sub">Lanka Voyages</p>
//           <div className="line" />
//         </div>

//         {error && <div className="error">⚠️ {error}</div>}

//         <form onSubmit={handleSubmit}>
//           <input
//             name="identifier"
//             placeholder="Email or Username"
//             value={form.identifier}
//             onChange={handleChange}
//             className="input"
//           />

//           <div className="password">
//             <input
//               name="password"
//               type={showPass ? "text" : "password"}
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className="input"
//             />
//             <span onClick={() => setShowPass(!showPass)}>
//               {showPass ? "🙈" : "👁️"}
//             </span>
//           </div>

//           <button disabled={loading} className="btn">
//             {loading ? "Signing In..." : "✦ Start Your Journey"}
//           </button>
//         </form>

//         <div className="dots">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               className={i === slide ? "dot active" : "dot"}
//               onClick={() => setSlide(i)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

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
      <div className="absolute inset-0 bg-gradient-to-br from-[#042A1F]/90 via-[#083D2C]/80 to-[#0F6148]/90" />

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