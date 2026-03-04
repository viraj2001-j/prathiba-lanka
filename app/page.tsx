import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

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
      <TravelServicesSection />
      </div>
    </main>
  );
}


