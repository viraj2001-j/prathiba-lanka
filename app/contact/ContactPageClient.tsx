"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
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

export default function ContactPageClient({
  packageFromUrl,
}: {
  packageFromUrl: string;
}) {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

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
      className="relative overflow-hidden bg-[#f6f8fb] text-slate-900"
      id="contact"
    >
      {/* GLOBAL DECOR */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#0b2b5b]/10 blur-3xl" />
        <div className="absolute right-[-80px] top-[420px] h-[260px] w-[260px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-[200px] left-[10%] h-[240px] w-[240px] rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_45%)]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-[68vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80"
            alt="Prathibha Lanka Voyages contact"
            className="h-full w-full object-cover scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04152f]/90 via-[#0b2b5b]/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15" />
        </div>

        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-end px-6 py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 90, damping: 22 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/80 backdrop-blur-md">
              CONTACT • INQUIRY • CUSTOM TOURS
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Start planning your
              <span className="block bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent">
                Sri Lanka journey
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
              Tell us your travel dates, preferred experiences, and package
              interests. Prathibha Lanka Voyages will help shape a smooth,
              comfortable, and memorable private journey across Sri Lanka.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4" />
                Private tour support
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur-md">
                <CarFront className="h-4 w-4" />
                Chauffeur-guided travel
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur-md">
                <CalendarDays className="h-4 w-4" />
                Custom itinerary planning
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO BLOCK */}
      <section className="relative overflow-hidden py-14">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=2200&q=80"
            alt="Sri Lanka scenic background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-[#f8fbff]/92 to-white/95" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 90, damping: 22 }}
              className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-7 shadow-[0_20px_60px_rgba(2,6,23,0.08)] backdrop-blur-xl md:p-8"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,43,91,0.04),rgba(16,185,129,0.03),rgba(255,255,255,0.1))]" />
              <div className="relative">
                <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                  WHY INQUIRE WITH US
                </div>

                <div className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Premium planning, personal attention, flexible travel
                </div>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
                  Whether you already know your preferred package or want a fully
                  customized Sri Lanka route, this page helps travelers send a
                  complete inquiry in one place. Share your dates, group size, and
                  interests so the trip can be shaped around your pace and comfort.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0b2b5b] text-white">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                delay: 0.04,
                type: "spring",
                stiffness: 90,
                damping: 22,
              }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_20px_60px_rgba(2,6,23,0.08)] md:p-8"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80"
                  alt="Sri Lanka background"
                  className="h-full w-full object-cover opacity-[0.12]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-[#eef4ff]" />
              </div>

              <div className="relative">
                <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                  CONTACT DETAILS
                </div>

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

                <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">
                    Best for inquiries about:
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>• Custom Sri Lanka private tours</li>
                    <li>• Package pricing and upgrades</li>
                    <li>• Hotel category options</li>
                    <li>• Airport pickup and chauffeur arrangements</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="relative overflow-hidden pb-16 pt-4">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
            alt="Travel planning background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7faff]/90 via-white/92 to-[#f7fbf9]/94" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 90, damping: 22 }}
              className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-7 shadow-[0_24px_70px_rgba(2,6,23,0.08)] backdrop-blur-xl md:p-8"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(246,248,251,0.88))]" />
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#0b2b5b]/8 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-500">
                  <MessageSquare className="h-4 w-4" />
                  SEND AN INQUIRY
                </div>

                <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Tell us about your trip
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Fill in the details below and share anything important about your
                  travel style, preferred destinations, accommodation level, or
                  special requests.
                </p>

                {submitted ? (
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <div className="font-semibold">Inquiry sent successfully</div>
                      <div className="mt-1 text-sm">
                        Your form was submitted. You can now connect this page to
                        your backend, email service, or WhatsApp workflow.
                      </div>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <FormField label="Full Name">
                      <input
                        value={form.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        placeholder="Your full name"
                        className={inputClass}
                        required
                      />
                    </FormField>

                    <FormField label="Email Address">
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                        required
                      />
                    </FormField>

                    <FormField label="Phone / WhatsApp">
                      <input
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+94..."
                        className={inputClass}
                      />
                    </FormField>

                    <FormField label="Country">
                      <input
                        value={form.country}
                        onChange={(e) => updateField("country", e.target.value)}
                        placeholder="Your country"
                        className={inputClass}
                      />
                    </FormField>

                    <FormField label="Travel Dates">
                      <input
                        value={form.travelDates}
                        onChange={(e) => updateField("travelDates", e.target.value)}
                        placeholder="e.g. 12 Aug - 18 Aug 2026"
                        className={inputClass}
                      />
                    </FormField>

                    <FormField label="Number of Travelers">
                      <div className="relative">
                        <Users className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          value={form.travelers}
                          onChange={(e) => updateField("travelers", e.target.value)}
                          placeholder="e.g. 2 Adults"
                          className={`${inputClass} pl-11`}
                        />
                      </div>
                    </FormField>

                    <FormField label="Package Interest">
                      <select
                        value={form.packageInterest}
                        onChange={(e) =>
                          updateField("packageInterest", e.target.value)
                        }
                        className={inputClass}
                      >
                        <option value="">Select a package</option>
                        {PACKAGE_OPTIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Approximate Budget">
                      <input
                        value={form.budget}
                        onChange={(e) => updateField("budget", e.target.value)}
                        placeholder="e.g. $1000 - $1500"
                        className={inputClass}
                      />
                    </FormField>
                  </div>

                  <FormField label="Your Inquiry">
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Tell us the destinations, travel style, hotel level, package interests, or any special requests..."
                      rows={7}
                      className={`${inputClass} resize-none py-4`}
                      required
                    />
                  </FormField>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0b2b5b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0b2b5b]/20 transition hover:-translate-y-0.5 hover:opacity-95"
                    >
                      Send Inquiry
                      <Send className="h-4 w-4" />
                    </button>

                    <button
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
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    >
                      Reset Form
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: 0.04,
                type: "spring",
                stiffness: 90,
                damping: 22,
              }}
              className="space-y-6"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
                    alt="Coastal decoration"
                    className="h-full w-full object-cover opacity-[0.10]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-[#f8fbff]" />
                </div>

                <div className="relative">
                  <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
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
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#0b2b5b] p-7 text-white shadow-[0_24px_70px_rgba(11,43,91,0.28)]">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80"
                    alt="Luxury travel decoration"
                    className="h-full w-full object-cover opacity-[0.18]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#07172f]/85 via-[#0b2b5b]/88 to-[#102e63]/95" />
                </div>

                <div className="relative">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/70">
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
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      updateField("packageInterest", "Custom Sri Lanka Tour")
                    }
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b2b5b] transition hover:-translate-y-0.5 hover:bg-white/95"
                  >
                    Request custom tour
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=2200&q=80"
            alt="Map section background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-[#f8fbff]/95 to-white/96" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 90, damping: 22 }}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.08)]"
          >
            <div className="relative overflow-hidden border-b border-slate-200 px-7 py-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbff] via-white to-[#eef8f4]" />
              <div className="relative">
                <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                  LOCATION
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                  Find us on the map
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                  Replace the iframe link below with your exact Google Maps embed
                  link for Prathibha Lanka Voyages.
                </p>
              </div>
            </div>

            <div className="h-[420px] w-full">
              <iframe
                title="Prathibha Lanka Voyages Location"
                src="https://www.google.com/maps?q=Negombo,Sri%20Lanka&z=12&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#0b2b5b] focus:bg-white focus:ring-4 focus:ring-[#0b2b5b]/10";

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-slate-900">{label}</div>
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
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#0b2b5b] text-white shadow-md">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm leading-6 text-slate-600">{value}</div>
      </div>
    </div>
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
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur">
      <div className="min-w-[44px] rounded-2xl bg-[#0b2b5b] px-3 py-2 text-center text-xs font-semibold tracking-[0.18em] text-white shadow-md">
        {number}
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
      </div>
    </div>
  );
}