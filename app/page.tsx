"use client";

import AboutSection from "@/components/AboutSection";
import DetailsSection from "@/components/DetailsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VisualStoriesSection from "@/components/StoriesSection";
import TourCategoriesSection from "@/components/TourCategoriesSection";
import TravelServicesSection from "@/components/TravelServicesSection";
import WhyBookPrathibha from "@/components/WhyBook";

import { CATEGORIES_UI } from "@/src/data/mockCategories"; // ✅ FIX
import { PACKAGES } from "@/src/data/packageDetails";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function HomePage() {
  const router = useRouter();

    // ✅ add package count per category (optional, looks premium)
  const categoriesWithCounts = useMemo(() => {
    return CATEGORIES_UI.map((c) => ({
      ...c,
      count: PACKAGES.filter((p) => p.categoryId === c.id).length,
    }));
  }, []);
  
  return (
    <main>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <HeroSection />
        </div>

        <AboutSection />
        <WhyBookPrathibha />

      <TourCategoriesSection
        categories={categoriesWithCounts}
        onExplore={(id) => {
          if (id === "all") router.push("/categories"); // ✅ show all packages
          else router.push(`/categories/${id}`);        // ✅ show specific category page
        }}
      />


        <TravelServicesSection />
        <ExperienceSection />
        <DetailsSection />
        <VisualStoriesSection />
        <Footer />
      </div>
    </main>
  );
}