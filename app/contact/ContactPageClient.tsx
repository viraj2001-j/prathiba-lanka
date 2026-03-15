

// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock3,
//   Send,
//   ShieldCheck,
//   Globe2,
//   CheckCircle2,
//   MessageSquare,
//   CalendarDays,
//   Users,
//   CarFront,
//   ArrowUpRight,
// } from "lucide-react";

// type InquiryForm = {
//   fullName: string;
//   email: string;
//   phone: string;
//   country: string;
//   travelDates: string;
//   travelers: string;
//   packageInterest: string;
//   budget: string;
//   message: string;
// };

// const PACKAGE_OPTIONS = [
//   "PEARL TRAIL",
//   "EMERALD ESCAPE",
//   "SAPPHIRE SERENITY",
//   "GOLDEN CIRCUIT",
//   "ROYAL ODYSSEY",
//   "PLATINUM PARADISE",
//   "EMERALD ISLE EXPLORER",
//   "JUNGLE & COAST ODYSSEY",
//   "TEA TRAIL & SOUTHERN LOOP",
//   "GRAND CIRCLE TOUR",
//   "NORTH TO SOUTH EXPEDITION",
//   "LUXURY GRAND TOUR",
//   "ULTIMATE CEYLON ODYSSEY",
//   "Custom Sri Lanka Tour",
// ];

// const initialForm: InquiryForm = {
//   fullName: "",
//   email: "",
//   phone: "",
//   country: "",
//   travelDates: "",
//   travelers: "",
//   packageInterest: "",
//   budget: "",
//   message: "",
// };

// const staggerContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.08,
//     },
//   },
// };

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.75,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// const fadeIn = {
//   hidden: {
//     opacity: 0,
//   },
//   show: {
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// const scaleIn = {
//   hidden: {
//     opacity: 0,
//     scale: 0.96,
//     y: 18,
//   },
//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// export default function ContactPageClient({
//   packageFromUrl,
// }: {
//   packageFromUrl: string;
// }) {
//   const [form, setForm] = useState<InquiryForm>(initialForm);
//   const [submitted, setSubmitted] = useState(false);

//   const { scrollY } = useScroll();
//   const heroScale = useTransform(scrollY, [0, 500], [1.04, 1.12]);
//   const heroY = useTransform(scrollY, [0, 500], [0, 60]);

//   useEffect(() => {
//     if (!packageFromUrl) return;

//     setForm((prev) => ({
//       ...prev,
//       packageInterest: packageFromUrl,
//       message:
//         prev.message ||
//         `Hello, I would like to inquire about the ${packageFromUrl} package.`,
//     }));
//   }, [packageFromUrl]);

//   const highlights = useMemo(
//     () => [
//       "Tailor-made private Sri Lanka tours",
//       "Fast response for custom itinerary requests",
//       "Airport pickup, chauffeur guide, and hotel support",
//       "Flexible planning for couples, families, and small groups",
//     ],
//     []
//   );

//   function updateField<K extends keyof InquiryForm>(
//     key: K,
//     value: InquiryForm[K]
//   ) {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   }

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     console.log("Inquiry submitted:", form);

//     setSubmitted(true);

//     setForm({
//       ...initialForm,
//       packageInterest: packageFromUrl || "",
//       message: packageFromUrl
//         ? `Hello, I would like to inquire about the ${packageFromUrl} package.`
//         : "",
//     });

//     setTimeout(() => {
//       setSubmitted(false);
//     }, 4000);
//   }

//   return (
//     <div
//       className="relative overflow-hidden bg-[#f6f8fb] text-slate-900"
//       id="contact"
//     >
//       {/* GLOBAL DECOR */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
//           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#0b2b5b]/10 blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
//           transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute right-[-80px] top-[420px] h-[260px] w-[260px] rounded-full bg-emerald-400/10 blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-[200px] left-[10%] h-[240px] w-[240px] rounded-full bg-amber-300/10 blur-3xl"
//         />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_45%)]" />
//       </div>

//       {/* HERO */}
//       <section className="relative min-h-[68vh] overflow-hidden">
//         <motion.div className="absolute inset-0" style={{ y: heroY }}>
//           <motion.img
//             src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80"
//             alt="Prathibha Lanka Voyages contact"
//             className="h-full w-full object-cover"
//             style={{ scale: heroScale }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#04152f]/90 via-[#0b2b5b]/55 to-black/35" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15" />
//         </motion.div>

//         <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-end px-6 py-14 md:py-16">
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate="show"
//             className="max-w-4xl"
//           >
//             <motion.div
//               variants={fadeUp}
//               whileHover={{ y: -2 }}
//               className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/80 backdrop-blur-md"
//             >
//               CONTACT • INQUIRY • CUSTOM TOURS
//             </motion.div>

//             <motion.h1
//               variants={fadeUp}
//               className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl"
//             >
//               Start planning your
//               <span className="block bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent">
//                 Sri Lanka journey
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="mt-5 max-w-3xl text-base leading-7 text-white/85 md:text-lg"
//             >
//               Tell us your travel dates, preferred experiences, and package
//               interests. Prathibha Lanka Voyages will help shape a smooth,
//               comfortable, and memorable private journey across Sri Lanka.
//             </motion.p>

//             <motion.div
//               variants={staggerContainer}
//               className="mt-7 flex flex-wrap gap-3"
//             >
//               {[
//                 { icon: ShieldCheck, label: "Private tour support" },
//                 { icon: CarFront, label: "Chauffeur-guided travel" },
//                 { icon: CalendarDays, label: "Custom itinerary planning" },
//               ].map(({ icon: Icon, label }, index) => (
//                 <motion.span
//                   key={label}
//                   variants={fadeUp}
//                   animate={{ y: [0, -4, 0] }}
//                   transition={{
//                     duration: 3.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: index * 0.2,
//                   }}
//                   className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur-md"
//                 >
//                   <Icon className="h-4 w-4" />
//                   {label}
//                 </motion.span>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* INTRO BLOCK */}
//       <section className="relative overflow-hidden py-14">
//         <div className="absolute inset-0">
//           <motion.img
//             initial={{ scale: 1.06 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 1.2 }}
//             viewport={{ once: true }}
//             src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=2200&q=80"
//             alt="Sri Lanka scenic background"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-[#f8fbff]/92 to-white/95" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6">
//           <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
//             <motion.div
//               variants={scaleIn}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               whileHover={{ y: -6, scale: 1.01 }}
//               className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-7 shadow-[0_20px_60px_rgba(2,6,23,0.08)] backdrop-blur-xl md:p-8"
//             >
//               <motion.div
//                 animate={{ x: ["-30%", "30%"] }}
//                 transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
//                 className="pointer-events-none absolute inset-y-0 left-[-20%] w-[40%] bg-gradient-to-r from-transparent via-white/30 to-transparent"
//               />
//               <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,43,91,0.04),rgba(16,185,129,0.03),rgba(255,255,255,0.1))]" />

//               <motion.div
//                 variants={staggerContainer}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <motion.div
//                   variants={fadeUp}
//                   className="text-xs font-semibold tracking-[0.18em] text-slate-500"
//                 >
//                   WHY INQUIRE WITH US
//                 </motion.div>

//                 <motion.div
//                   variants={fadeUp}
//                   className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
//                 >
//                   Premium planning, personal attention, flexible travel
//                 </motion.div>

//                 <motion.p
//                   variants={fadeUp}
//                   className="mt-4 max-w-3xl text-base leading-8 text-slate-700"
//                 >
//                   Whether you already know your preferred package or want a fully
//                   customized Sri Lanka route, this page helps travelers send a
//                   complete inquiry in one place. Share your dates, group size, and
//                   interests so the trip can be shaped around your pace and comfort.
//                 </motion.p>

//                 <motion.div variants={staggerContainer} className="mt-7 grid gap-3 sm:grid-cols-2">
//                   {highlights.map((item) => (
//                     <motion.div
//                       key={item}
//                       variants={fadeUp}
//                       whileHover={{ y: -4, scale: 1.015 }}
//                       className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm"
//                     >
//                       <motion.span
//                         animate={{ scale: [1, 1.08, 1] }}
//                         transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
//                         className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0b2b5b] text-white"
//                       >
//                         <CheckCircle2 className="h-4 w-4" />
//                       </motion.span>
//                       <span className="text-sm leading-6 text-slate-700">{item}</span>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               variants={scaleIn}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               whileHover={{ y: -6, scale: 1.01 }}
//               className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_20px_60px_rgba(2,6,23,0.08)] md:p-8"
//             >
//               <div className="absolute inset-0">
//                 <motion.img
//                   initial={{ scale: 1.06 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ duration: 1.2 }}
//                   viewport={{ once: true }}
//                   src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80"
//                   alt="Sri Lanka background"
//                   className="h-full w-full object-cover opacity-[0.12]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-[#eef4ff]" />
//               </div>

//               <motion.div
//                 variants={staggerContainer}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <motion.div
//                   variants={fadeUp}
//                   className="text-xs font-semibold tracking-[0.18em] text-slate-500"
//                 >
//                   CONTACT DETAILS
//                 </motion.div>

//                 <div className="mt-6 space-y-5">
//                   <ContactRow
//                     icon={<Phone className="h-5 w-5" />}
//                     title="Phone / WhatsApp"
//                     value="+94 77 123 4567"
//                   />
//                   <ContactRow
//                     icon={<Mail className="h-5 w-5" />}
//                     title="Email"
//                     value="info@prathibhalankavoyages.com"
//                   />
//                   <ContactRow
//                     icon={<MapPin className="h-5 w-5" />}
//                     title="Location"
//                     value="Sri Lanka"
//                   />
//                   <ContactRow
//                     icon={<Clock3 className="h-5 w-5" />}
//                     title="Response Window"
//                     value="Typically within a short time"
//                   />
//                   <ContactRow
//                     icon={<Globe2 className="h-5 w-5" />}
//                     title="Travel Focus"
//                     value="Private Sri Lanka tours and custom itineraries"
//                   />
//                 </div>

//                 <motion.div
//                   variants={fadeUp}
//                   className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur"
//                 >
//                   <div className="text-sm font-semibold text-slate-900">
//                     Best for inquiries about:
//                   </div>
//                   <ul className="mt-3 space-y-2 text-sm text-slate-700">
//                     <li>• Custom Sri Lanka private tours</li>
//                     <li>• Package pricing and upgrades</li>
//                     <li>• Hotel category options</li>
//                     <li>• Airport pickup and chauffeur arrangements</li>
//                   </ul>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FORM + SIDEBAR */}
//       <section className="relative overflow-hidden pb-16 pt-4">
//         <div className="absolute inset-0">
//           <motion.img
//             initial={{ scale: 1.06 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 1.2 }}
//             viewport={{ once: true }}
//             src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
//             alt="Travel planning background"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-[#f7faff]/90 via-white/92 to-[#f7fbf9]/94" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6">
//           <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
//             <motion.div
//               variants={scaleIn}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.15 }}
//               className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-7 shadow-[0_24px_70px_rgba(2,6,23,0.08)] backdrop-blur-xl md:p-8"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.06, 1] }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#0b2b5b]/8 blur-3xl"
//               />
//               <motion.div
//                 animate={{ scale: [1, 0.94, 1] }}
//                 transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl"
//               />
//               <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(246,248,251,0.88))]" />

//               <motion.div
//                 variants={staggerContainer}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <motion.div
//                   variants={fadeUp}
//                   className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-500"
//                 >
//                   <MessageSquare className="h-4 w-4" />
//                   SEND AN INQUIRY
//                 </motion.div>

//                 <motion.div
//                   variants={fadeUp}
//                   className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
//                 >
//                   Tell us about your trip
//                 </motion.div>

//                 <motion.p
//                   variants={fadeUp}
//                   className="mt-3 max-w-2xl text-sm leading-7 text-slate-600"
//                 >
//                   Fill in the details below and share anything important about your
//                   travel style, preferred destinations, accommodation level, or
//                   special requests.
//                 </motion.p>

//                 {submitted ? (
//                   <motion.div
//                     initial={{ opacity: 0, y: 16, scale: 0.98 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 shadow-sm"
//                   >
//                     <motion.div
//                       animate={{ scale: [1, 1.12, 1] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
//                     </motion.div>
//                     <div>
//                       <div className="font-semibold">Inquiry sent successfully</div>
//                       <div className="mt-1 text-sm">
//                         Your form was submitted. You can now connect this page to
//                         your backend, email service, or WhatsApp workflow.
//                       </div>
//                     </div>
//                   </motion.div>
//                 ) : null}

//                 <motion.form onSubmit={handleSubmit} className="mt-8 space-y-6">
//                   <div className="grid gap-5 md:grid-cols-2">
//                     <FormField label="Full Name">
//                       <motion.input
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         value={form.fullName}
//                         onChange={(e) => updateField("fullName", e.target.value)}
//                         placeholder="Your full name"
//                         className={inputClass}
//                         whileFocus={{ scale: 1.01 }}
//                         required
//                       />
//                     </FormField>

//                     <FormField label="Email Address">
//                       <motion.input
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         type="email"
//                         value={form.email}
//                         onChange={(e) => updateField("email", e.target.value)}
//                         placeholder="you@example.com"
//                         className={inputClass}
//                         whileFocus={{ scale: 1.01 }}
//                         required
//                       />
//                     </FormField>

//                     <FormField label="Phone / WhatsApp">
//                       <motion.input
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         value={form.phone}
//                         onChange={(e) => updateField("phone", e.target.value)}
//                         placeholder="+94..."
//                         className={inputClass}
//                         whileFocus={{ scale: 1.01 }}
//                       />
//                     </FormField>

//                     <FormField label="Country">
//                       <motion.input
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         value={form.country}
//                         onChange={(e) => updateField("country", e.target.value)}
//                         placeholder="Your country"
//                         className={inputClass}
//                         whileFocus={{ scale: 1.01 }}
//                       />
//                     </FormField>

//                     <FormField label="Travel Dates">
//                       <motion.input
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         value={form.travelDates}
//                         onChange={(e) => updateField("travelDates", e.target.value)}
//                         placeholder="e.g. 12 Aug - 18 Aug 2026"
//                         className={inputClass}
//                         whileFocus={{ scale: 1.01 }}
//                       />
//                     </FormField>

//                     <FormField label="Number of Travelers">
//                       <motion.div
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         className="relative"
//                       >
//                         <Users className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//                         <motion.input
//                           value={form.travelers}
//                           onChange={(e) => updateField("travelers", e.target.value)}
//                           placeholder="e.g. 2 Adults"
//                           className={`${inputClass} pl-11`}
//                           whileFocus={{ scale: 1.01 }}
//                         />
//                       </motion.div>
//                     </FormField>

//                     <FormField label="Package Interest">
//                       <motion.select
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         value={form.packageInterest}
//                         onChange={(e) => updateField("packageInterest", e.target.value)}
//                         className={inputClass}
//                         whileFocus={{ scale: 1.01 }}
//                       >
//                         <option value="">Select a package</option>
//                         {PACKAGE_OPTIONS.map((item) => (
//                           <option key={item} value={item}>
//                             {item}
//                           </option>
//                         ))}
//                       </motion.select>
//                     </FormField>

//                     <FormField label="Approximate Budget">
//                       <motion.input
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         value={form.budget}
//                         onChange={(e) => updateField("budget", e.target.value)}
//                         placeholder="e.g. $1000 - $1500"
//                         className={inputClass}
//                         whileFocus={{ scale: 1.01 }}
//                       />
//                     </FormField>
//                   </div>

//                   <FormField label="Your Inquiry">
//                     <motion.textarea
//                       variants={fadeUp}
//                       initial="hidden"
//                       whileInView="show"
//                       viewport={{ once: true }}
//                       value={form.message}
//                       onChange={(e) => updateField("message", e.target.value)}
//                       placeholder="Tell us the destinations, travel style, hotel level, package interests, or any special requests..."
//                       rows={7}
//                       className={`${inputClass} resize-none py-4`}
//                       whileFocus={{ scale: 1.005 }}
//                       required
//                     />
//                   </FormField>

//                   <motion.div
//                     variants={fadeUp}
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true }}
//                     className="flex flex-wrap items-center gap-3"
//                   >
//                     <motion.button
//                       type="submit"
//                       whileHover={{ y: -3, scale: 1.03 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="inline-flex items-center gap-2 rounded-full bg-[#0b2b5b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0b2b5b]/20 transition"
//                     >
//                       <motion.span
//                         animate={{ x: [0, 2, 0] }}
//                         transition={{ duration: 1.8, repeat: Infinity }}
//                       >
//                         Send Inquiry
//                       </motion.span>
//                       <Send className="h-4 w-4" />
//                     </motion.button>

//                     <motion.button
//                       type="button"
//                       onClick={() =>
//                         setForm({
//                           ...initialForm,
//                           packageInterest: packageFromUrl || "",
//                           message: packageFromUrl
//                             ? `Hello, I would like to inquire about the ${packageFromUrl} package.`
//                             : "",
//                         })
//                       }
//                       whileHover={{ y: -2, scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
//                     >
//                       Reset Form
//                     </motion.button>
//                   </motion.div>
//                 </motion.form>
//               </motion.div>
//             </motion.div>

//             <div className="space-y-6">
//               <motion.div
//                 variants={scaleIn}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.2 }}
//                 className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(2,6,23,0.08)]"
//               >
//                 <div className="absolute inset-0">
//                   <img
//                     src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
//                     alt="Coastal decoration"
//                     className="h-full w-full object-cover opacity-[0.10]"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-[#f8fbff]" />
//                 </div>

//                 <div className="relative">
//                   <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//                     INQUIRY GUIDE
//                   </div>

//                   <div className="mt-5 space-y-4">
//                     <GuideItem
//                       number="01"
//                       title="Share your dates"
//                       text="Even an approximate travel window helps shape the best route."
//                     />
//                     <GuideItem
//                       number="02"
//                       title="Tell us your group size"
//                       text="Couples, families, and small private groups may need different pacing."
//                     />
//                     <GuideItem
//                       number="03"
//                       title="Mention your priorities"
//                       text="Culture, wildlife, beaches, hills, luxury stays, or a full island journey."
//                     />
//                     <GuideItem
//                       number="04"
//                       title="Add special requests"
//                       text="Hotel style, airport pickup, custom route ideas, or celebration trips."
//                     />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 variants={scaleIn}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.2 }}
//                 whileHover={{ y: -6, scale: 1.01 }}
//                 className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#0b2b5b] p-7 text-white shadow-[0_24px_70px_rgba(11,43,91,0.28)]"
//               >
//                 <div className="absolute inset-0">
//                   <motion.img
//                     animate={{ scale: [1, 1.03, 1] }}
//                     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                     src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80"
//                     alt="Luxury travel decoration"
//                     className="h-full w-full object-cover opacity-[0.18]"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#07172f]/85 via-[#0b2b5b]/88 to-[#102e63]/95" />
//                 </div>

//                 <div className="relative">
//                   <div className="text-xs font-semibold tracking-[0.18em] text-white/70">
//                     POPULAR INQUIRY TYPES
//                   </div>

//                   <div className="mt-5 flex flex-wrap gap-2">
//                     {[
//                       "Custom itinerary",
//                       "Luxury Sri Lanka tour",
//                       "Airport pickup",
//                       "Family travel",
//                       "Couple getaway",
//                       "Private chauffeur guide",
//                       "Hotel upgrade",
//                       "South coast finish",
//                     ].map((tag, index) => (
//                       <motion.span
//                         key={tag}
//                         initial={{ opacity: 0, y: 12 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05, duration: 0.45 }}
//                         viewport={{ once: true }}
//                         whileHover={{ y: -2, scale: 1.03 }}
//                         className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur"
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </div>

//                   <motion.button
//                     type="button"
//                     onClick={() =>
//                       updateField("packageInterest", "Custom Sri Lanka Tour")
//                     }
//                     whileHover={{ x: 4, y: -2, scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b2b5b] transition"
//                   >
//                     Request custom tour
//                     <motion.span
//                       animate={{ x: [0, 3, 0] }}
//                       transition={{ duration: 1.6, repeat: Infinity }}
//                     >
//                       <ArrowUpRight className="h-4 w-4" />
//                     </motion.span>
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* GOOGLE MAP */}
//       <section className="relative overflow-hidden pb-20">
//         <div className="absolute inset-0">
//           <motion.img
//             initial={{ scale: 1.06 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 1.2 }}
//             viewport={{ once: true }}
//             src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=2200&q=80"
//             alt="Map section background"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-[#f8fbff]/95 to-white/96" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6">
//           <motion.div
//             variants={scaleIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.08)]"
//           >
//             <div className="relative overflow-hidden border-b border-slate-200 px-7 py-6">
//               <motion.div
//                 animate={{ x: ["-40%", "40%"] }}
//                 transition={{ duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
//                 className="pointer-events-none absolute inset-y-0 left-[-20%] w-[35%] bg-gradient-to-r from-transparent via-white/45 to-transparent"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbff] via-white to-[#eef8f4]" />

//               <div className="relative">
//                 <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
//                   LOCATION
//                 </div>
//                 <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
//                   Find us on the map
//                 </div>
//                 <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
//                   Replace the iframe link below with your exact Google Maps embed
//                   link for Prathibha Lanka Voyages.
//                 </p>
//               </div>
//             </div>

//             <motion.div whileHover={{ scale: 1.01 }} className="h-[420px] w-full">
//               <iframe
//                 title="Prathibha Lanka Voyages Location"
//                 src="https://www.google.com/maps?q=Negombo,Sri%20Lanka&z=12&output=embed"
//                 className="h-full w-full border-0"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

// const inputClass =
//   "w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#0b2b5b] focus:bg-white focus:ring-4 focus:ring-[#0b2b5b]/10";

// function FormField({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <label className="block">
//       <div className="mb-2 text-sm font-semibold text-slate-900">{label}</div>
//       {children}
//     </label>
//   );
// }

// function ContactRow({
//   icon,
//   title,
//   value,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   value: string;
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       whileHover={{ y: -4, scale: 1.01 }}
//       className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur"
//     >
//       <motion.div
//         animate={{ rotate: [0, -4, 4, 0] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#0b2b5b] text-white shadow-md"
//       >
//         {icon}
//       </motion.div>
//       <div>
//         <div className="text-sm font-semibold text-slate-900">{title}</div>
//         <div className="mt-1 text-sm leading-6 text-slate-600">{value}</div>
//       </div>
//     </motion.div>
//   );
// }

// function GuideItem({
//   number,
//   title,
//   text,
// }: {
//   number: string;
//   title: string;
//   text: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 18 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ x: 4, y: -2 }}
//       className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur"
//     >
//       <motion.div
//         whileHover={{ scale: 1.06 }}
//         className="min-w-[44px] rounded-2xl bg-[#0b2b5b] px-3 py-2 text-center text-xs font-semibold tracking-[0.18em] text-white shadow-md"
//       >
//         {number}
//       </motion.div>
//       <div>
//         <div className="text-sm font-semibold text-slate-900">{title}</div>
//         <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  MessageSquare,
  CalendarDays,
  Users,
  CarFront,
  ArrowUpRight,
} from "lucide-react";

type InquiryForm = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  travelDates: string;
  travelers: string;
  packageInterest: string;
  budget: string;
  message: string;
};

const PACKAGE_OPTIONS = [
  "PEARL TRAIL",
  "EMERALD ESCAPE",
  "SAPPHIRE SERENITY",
  "GOLDEN CIRCUIT",
  "ROYAL ODYSSEY",
  "PLATINUM PARADISE",
  "EMERALD ISLE EXPLORER",
  "JUNGLE & COAST ODYSSEY",
  "TEA TRAIL & SOUTHERN LOOP",
  "GRAND CIRCLE TOUR",
  "NORTH TO SOUTH EXPEDITION",
  "LUXURY GRAND TOUR",
  "ULTIMATE CEYLON ODYSSEY",
  "Custom Sri Lanka Tour",
];

const initialForm: InquiryForm = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  travelDates: "",
  travelers: "",
  packageInterest: "",
  budget: "",
  message: "",
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 18,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ContactPageClient({
  packageFromUrl,
}: {
  packageFromUrl: string;
}) {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 500], [1.04, 1.1]);
  const heroY = useTransform(scrollY, [0, 500], [0, 40]);

  useEffect(() => {
    if (!packageFromUrl) return;

    setForm((prev) => ({
      ...prev,
      packageInterest: packageFromUrl,
      message:
        prev.message ||
        `Hello, I would like to inquire about the ${packageFromUrl} package.`,
    }));
  }, [packageFromUrl]);

  const highlights = useMemo(
    () => [
      "Tailor-made private Sri Lanka tours",
      "Fast response for custom itinerary requests",
      "Airport pickup, chauffeur guide, and hotel support",
      "Flexible planning for couples, families, and small groups",
    ],
    []
  );

  function updateField<K extends keyof InquiryForm>(
    key: K,
    value: InquiryForm[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Inquiry submitted:", form);

    setSubmitted(true);

    setForm({
      ...initialForm,
      packageInterest: packageFromUrl || "",
      message: packageFromUrl
        ? `Hello, I would like to inquire about the ${packageFromUrl} package.`
        : "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  }

  return (
    <div
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f9fcfa_0%,#f3f8f5_100%)] text-[#17352a]"
      id="contact"
    >
      {/* GLOBAL DECOR */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#cf5b8a]/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-80px] top-[420px] h-[260px] w-[260px] rounded-full bg-[#f0ab1d]/12 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[200px] left-[10%] h-[240px] w-[240px] rounded-full bg-[#067a47]/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(207,91,138,0.07),transparent_28%),radial-gradient(circle_at_top_right,rgba(240,171,29,0.10),transparent_24%)]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-[68vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <motion.img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80"
            alt="Prathibha Lanka Voyages contact"
            className="h-full w-full object-cover"
            style={{ scale: heroScale }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.14))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,171,29,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(207,91,138,0.10),transparent_22%)]" />
        </motion.div>

        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-end px-6 py-14 md:py-16">
          <div className="grid w-full items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-4xl"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#067a47]/10 bg-white/70 px-5 py-2.5 text-xs font-bold tracking-[0.22em] text-[#035c35] backdrop-blur-md"
              >
                CONTACT • INQUIRY • CUSTOM TOURS
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-5 font-serif text-5xl leading-[0.96] tracking-[-0.04em] text-[#17352a] md:text-7xl"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Start planning your
                <span
                  className="block text-[#067a47]"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  Sri Lanka journey
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-3xl text-base leading-8 text-[#5f756b] md:text-lg"
              >
                Tell us your travel dates, preferred experiences, and package
                interests. Prathibha Lanka Voyages will help shape a smooth,
                comfortable, and memorable private journey across Sri Lanka.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="mt-7 flex flex-wrap gap-3"
              >
                {[
                  { icon: ShieldCheck, label: "Private tour support" },
                  { icon: CarFront, label: "Chauffeur-guided travel" },
                  { icon: CalendarDays, label: "Custom itinerary planning" },
                ].map(({ icon: Icon, label }, index) => (
                  <motion.span
                    key={label}
                    variants={fadeUp}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#067a47]/10 bg-white/80 px-5 py-3 text-sm font-semibold text-[#035c35] shadow-[0_12px_30px_rgba(4,61,36,0.08)] backdrop-blur-md"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div style={{ y: heroY }} className="relative">
              <motion.div
                style={{ scale: heroScale }}
                className="relative min-h-[540px] overflow-hidden rounded-[36px] shadow-[0_30px_90px_rgba(6,62,40,0.16)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80"
                  alt="Prathibha Lanka Voyages contact"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.18))]" />

                <div className="absolute left-7 top-7 rounded-full border border-white/60 bg-white/88 px-6 py-3 font-semibold text-[#0b6a43] shadow-[0_18px_40px_rgba(4,61,36,0.10)] backdrop-blur-md">
                  Curated Sri Lanka Inquiries
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/60 bg-white/88 p-7 shadow-[0_20px_60px_rgba(4,61,36,0.10)] backdrop-blur-md">
                  <h3
                    className="text-[2rem] font-semibold tracking-[-0.02em] text-[#0b6a43]"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    Your journey, beautifully planned
                  </h3>
                  <p className="mt-3 text-base leading-8 text-[#5f756b]">
                    Share your travel vision, preferred route, and comfort
                    level. We help turn your ideas into a thoughtful Sri Lanka
                    experience.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {[
                      "Beach Retreats",
                      "Hill Country",
                      "Wildlife Safaris",
                      "Cultural Trails",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#eef7f1] px-4 py-2.5 text-sm font-semibold text-[#0b6a43]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO BLOCK */}
      <section className="relative overflow-hidden py-14">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=2200&q=80"
            alt="Sri Lanka scenic background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-[#f8fbf9]/92 to-white/95" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl border border-[#067a47]/10 bg-white/80 p-7 shadow-[0_20px_60px_rgba(4,61,36,0.10)] backdrop-blur-xl md:p-8"
            >
              <motion.div
                animate={{ x: ["-30%", "30%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="pointer-events-none absolute inset-y-0 left-[-20%] w-[40%] bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,122,71,0.04),rgba(240,171,29,0.05),rgba(255,255,255,0.12))]" />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  variants={fadeUp}
                  className="text-xs font-bold tracking-[0.18em] text-[#5f756b]"
                >
                  WHY INQUIRE WITH US
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-4 font-serif text-3xl font-semibold tracking-[-0.03em] text-[#17352a] md:text-4xl"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  Premium planning, personal attention, flexible travel
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 max-w-3xl text-base leading-8 text-[#5f756b]"
                >
                  Whether you already know your preferred package or want a
                  fully customized Sri Lanka route, this page helps travelers
                  send a complete inquiry in one place. Share your dates, group
                  size, and interests so the trip can be shaped around your pace
                  and comfort.
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  className="mt-7 grid gap-3 sm:grid-cols-2"
                >
                  {highlights.map((item) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      whileHover={{ y: -4, scale: 1.015 }}
                      className="flex items-start gap-3 rounded-2xl border border-[#067a47]/10 bg-white/75 p-4 shadow-sm"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#067a47] text-white"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </motion.span>
                      <span className="text-sm leading-6 text-[#5f756b]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl border border-[#067a47]/10 bg-white p-7 shadow-[0_20px_60px_rgba(4,61,36,0.10)] md:p-8"
            >
              <div className="absolute inset-0">
                <motion.img
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80"
                  alt="Sri Lanka background"
                  className="h-full w-full object-cover opacity-[0.10]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-[#f2f8f4]" />
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  variants={fadeUp}
                  className="text-xs font-bold tracking-[0.18em] text-[#5f756b]"
                >
                  CONTACT DETAILS
                </motion.div>

                <div className="mt-6 space-y-5">
                  <ContactRow
                    icon={<Phone className="h-5 w-5" />}
                    title="Phone / WhatsApp"
                    value="+94 77 123 4567"
                  />
                  <ContactRow
                    icon={<Mail className="h-5 w-5" />}
                    title="Email"
                    value="info@prathibhalankavoyages.com"
                  />
                  <ContactRow
                    icon={<MapPin className="h-5 w-5" />}
                    title="Location"
                    value="Sri Lanka"
                  />
                  <ContactRow
                    icon={<Clock3 className="h-5 w-5" />}
                    title="Response Window"
                    value="Typically within a short time"
                  />
                  <ContactRow
                    icon={<Globe2 className="h-5 w-5" />}
                    title="Travel Focus"
                    value="Private Sri Lanka tours and custom itineraries"
                  />
                </div>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 rounded-2xl border border-[#067a47]/10 bg-white/80 p-5 backdrop-blur"
                >
                  <div className="text-sm font-semibold text-[#17352a]">
                    Best for inquiries about:
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-[#5f756b]">
                    <li>• Custom Sri Lanka private tours</li>
                    <li>• Package pricing and upgrades</li>
                    <li>• Hotel category options</li>
                    <li>• Airport pickup and chauffeur arrangements</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="relative overflow-hidden pb-16 pt-4">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
            alt="Travel planning background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7fbf9]/90 via-white/92 to-[#f7fbf9]/94" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-7 shadow-[0_24px_70px_rgba(4,61,36,0.10)] backdrop-blur-xl md:p-8"
            >
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#f0ab1d]/10 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 0.94, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-[#067a47]/10 blur-3xl"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(246,248,251,0.88))]" />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#5f756b]"
                >
                  <MessageSquare className="h-4 w-4" />
                  SEND AN INQUIRY
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-3 font-serif text-3xl font-semibold tracking-[-0.03em] text-[#17352a] md:text-4xl"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  Tell us about your trip
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="mt-3 max-w-2xl text-sm leading-7 text-[#5f756b]"
                >
                  Fill in the details below and share anything important about
                  your travel style, preferred destinations, accommodation
                  level, or special requests.
                </motion.p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 shadow-sm"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    </motion.div>
                    <div>
                      <div className="font-semibold">
                        Inquiry sent successfully
                      </div>
                      <div className="mt-1 text-sm">
                        Your form was submitted. You can now connect this page
                        to your backend, email service, or WhatsApp workflow.
                      </div>
                    </div>
                  </motion.div>
                ) : null}

                <motion.form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <FormField label="Full Name">
                      <motion.input
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        value={form.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        placeholder="Your full name"
                        className={inputClass}
                        whileFocus={{ scale: 1.01 }}
                        required
                      />
                    </FormField>

                    <FormField label="Email Address">
                      <motion.input
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                        whileFocus={{ scale: 1.01 }}
                        required
                      />
                    </FormField>

                    <FormField label="Phone / WhatsApp">
                      <motion.input
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+94..."
                        className={inputClass}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </FormField>

                    <FormField label="Country">
                      <motion.input
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        value={form.country}
                        onChange={(e) => updateField("country", e.target.value)}
                        placeholder="Your country"
                        className={inputClass}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </FormField>

                    <FormField label="Travel Dates">
                      <motion.input
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        value={form.travelDates}
                        onChange={(e) =>
                          updateField("travelDates", e.target.value)
                        }
                        placeholder="e.g. 12 Aug - 18 Aug 2026"
                        className={inputClass}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </FormField>

                    <FormField label="Number of Travelers">
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <Users className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7a8f86]" />
                        <motion.input
                          value={form.travelers}
                          onChange={(e) =>
                            updateField("travelers", e.target.value)
                          }
                          placeholder="e.g. 2 Adults"
                          className={`${inputClass} pl-11`}
                          whileFocus={{ scale: 1.01 }}
                        />
                      </motion.div>
                    </FormField>

                    <FormField label="Package Interest">
                      <motion.select
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        value={form.packageInterest}
                        onChange={(e) =>
                          updateField("packageInterest", e.target.value)
                        }
                        className={inputClass}
                        whileFocus={{ scale: 1.01 }}
                      >
                        <option value="">Select a package</option>
                        {PACKAGE_OPTIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </motion.select>
                    </FormField>

                    <FormField label="Approximate Budget">
                      <motion.input
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        value={form.budget}
                        onChange={(e) => updateField("budget", e.target.value)}
                        placeholder="e.g. $1000 - $1500"
                        className={inputClass}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </FormField>
                  </div>

                  <FormField label="Your Inquiry">
                    <motion.textarea
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Tell us the destinations, travel style, hotel level, package interests, or any special requests..."
                      rows={7}
                      className={`${inputClass} resize-none py-4`}
                      whileFocus={{ scale: 1.005 }}
                      required
                    />
                  </FormField>

                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center gap-3"
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ y: -3, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#067a47,#035c35)] px-6 py-3 text-sm font-semibold text-[#035c35] adow-[0_14px_34px_rgba(6,122,71,0.26)] transition"
                    >
                      <motion.span
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      >
                        Send Inquiry
                      </motion.span>
                      <Send className="h-4 w-4" />
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={() =>
                        setForm({
                          ...initialForm,
                          packageInterest: packageFromUrl || "",
                          message: packageFromUrl
                            ? `Hello, I would like to inquire about the ${packageFromUrl} package.`
                            : "",
                        })
                      }
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 rounded-full border border-[#067a47]/15 bg-white px-6 py-3 text-sm font-semibold text-[#035c35] transition hover:bg-[#f7faf8]"
                    >
                      Reset Form
                    </motion.button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative overflow-hidden rounded-3xl border border-[#067a47]/10 bg-white p-7 shadow-[0_20px_60px_rgba(4,61,36,0.10)]"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
                    alt="Coastal decoration"
                    className="h-full w-full object-cover opacity-[0.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-[#f8fbf9]" />
                </div>

                <div className="relative">
                  <div className="text-xs font-bold tracking-[0.18em] text-[#5f756b]">
                    INQUIRY GUIDE
                  </div>

                  <div className="mt-5 space-y-4">
                    <GuideItem
                      number="01"
                      title="Share your dates"
                      text="Even an approximate travel window helps shape the best route."
                    />
                    <GuideItem
                      number="02"
                      title="Tell us your group size"
                      text="Couples, families, and small private groups may need different pacing."
                    />
                    <GuideItem
                      number="03"
                      title="Mention your priorities"
                      text="Culture, wildlife, beaches, hills, luxury stays, or a full island journey."
                    />
                    <GuideItem
                      number="04"
                      title="Add special requests"
                      text="Hotel style, airport pickup, custom route ideas, or celebration trips."
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative overflow-hidden rounded-3xl border border-[#067a47]/10 bg-[linear-gradient(135deg,#035c35,#067a47)] p-7 text-white shadow-[0_24px_70px_rgba(3,92,53,0.28)]"
              >
                <div className="absolute inset-0">
                  <motion.img
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80"
                    alt="Luxury travel decoration"
                    className="h-full w-full object-cover opacity-[0.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#035c35]/88 via-[#067a47]/88 to-[#0d6f47]/92" />
                </div>

                <div className="relative">
                  <div className="text-xs font-bold tracking-[0.18em] text-white/70">
                    POPULAR INQUIRY TYPES
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Custom itinerary",
                      "Luxury Sri Lanka tour",
                      "Airport pickup",
                      "Family travel",
                      "Couple getaway",
                      "Private chauffeur guide",
                      "Hotel upgrade",
                      "South coast finish",
                    ].map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.45 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2, scale: 1.03 }}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    type="button"
                    onClick={() =>
                      updateField("packageInterest", "Custom Sri Lanka Tour")
                    }
                    whileHover={{ x: 4, y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#035c35] transition"
                  >
                    Request custom tour
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=2200&q=80"
            alt="Map section background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-[#f8fbf9]/95 to-white/96" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-[28px] border border-[#067a47]/10 bg-white shadow-[0_20px_60px_rgba(4,61,36,0.10)]"
          >
            <div className="relative overflow-hidden border-b border-[#067a47]/10 px-7 py-6">
              <motion.div
                animate={{ x: ["-40%", "40%"] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="pointer-events-none absolute inset-y-0 left-[-20%] w-[35%] bg-gradient-to-r from-transparent via-white/45 to-transparent"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbf9] via-white to-[#eef7f1]" />

              <div className="relative">
                <div className="text-xs font-bold tracking-[0.18em] text-[#5f756b]">
                  LOCATION
                </div>
                <div
                  className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em] text-[#17352a]"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  Find us on the map
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#5f756b]">
                  Replace the iframe link below with your exact Google Maps
                  embed link for Prathibha Lanka Voyages.
                </p>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} className="h-[420px] w-full">
              <iframe
                title="Prathibha Lanka Voyages Location"
                src="https://www.google.com/maps?q=Negombo,Sri%20Lanka&z=12&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const inputClass =
  "w-full rounded-2xl border border-[#067a47]/12 bg-white/90 px-4 py-3 text-sm text-[#17352a] shadow-sm outline-none transition placeholder:text-[#7a8f86] focus:border-[#067a47] focus:bg-white focus:ring-4 focus:ring-[#067a47]/10";

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-[#17352a]">{label}</div>
      {children}
    </label>
  );
}

function ContactRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="flex items-start gap-4 rounded-2xl border border-[#067a47]/10 bg-white/80 p-4 shadow-sm backdrop-blur"
    >
      <motion.div
        animate={{ rotate: [0, -4, 4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#067a47,#035c35)] text-white shadow-md"
      >
        {icon}
      </motion.div>
      <div>
        <div className="text-sm font-semibold text-[#17352a]">{title}</div>
        <div className="mt-1 text-sm leading-6 text-[#5f756b]">{value}</div>
      </div>
    </motion.div>
  );
}

function GuideItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 4, y: -2 }}
      className="flex items-start gap-4 rounded-2xl border border-[#067a47]/10 bg-white/80 p-4 shadow-sm backdrop-blur"
    >
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="min-w-[44px] rounded-2xl bg-[linear-gradient(135deg,#067a47,#035c35)] px-3 py-2 text-center text-xs font-semibold tracking-[0.18em] text-white shadow-md"
      >
        {number}
      </motion.div>
      <div>
        <div className="text-sm font-semibold text-[#17352a]">{title}</div>
        <div className="mt-1 text-sm leading-6 text-[#5f756b]">{text}</div>
      </div>
    </motion.div>
  );
}