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
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <HeroSection />
        </div>

        <AboutSection />
        <WhyBookPrathibha />

        <TourCategoriesSection
          categories={CATEGORIES_UI}
          onExplore={(categoryId) => router.push(`/categories/${categoryId}`)}
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