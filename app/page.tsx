import AboutSection from "@/components/AboutSection";
import DetailsSection from "@/components/DetailsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VisualStoriesSection from "@/components/StoriesSection";
import TourCategoriesSection from "@/components/TourCategoriesSection";

import TravelServicesSection from "@/components/TravelServicesSection";
import WhyBookPrathibha from "@/components/WhyBook";

export default function HomePage() {
  return (
    <main>
      {/* Hero + floating search */}
      <div className="bg-white">
      <div className="relative overflow-hidden ">
        <HeroSection />

        {/* Only SearchBox has px-4 */}
     
      </div>

      {/* About section full width, no padding wrapper */}
      <AboutSection />
      <WhyBookPrathibha/>
      
      <TourCategoriesSection/>
      <TravelServicesSection/>
      <ExperienceSection/>
      <DetailsSection/> 
      <VisualStoriesSection/>
      <Footer/>
      </div>
    </main>
  );
}


