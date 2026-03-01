import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import SearchBox from "@/components/SearchBox";
import TravelServicesSection from "@/components/TravelServicesSection";

export default function HomePage() {
  return (
    <main>
      {/* Hero + floating search */}
      <div className="bg-gradient-to-r from-green-600 to-white">
      <div className="relative overflow-hidden ">
        <HeroSection />

        {/* Only SearchBox has px-4 */}
        <div className="-mt-16 relative z-30 px-4">
          <SearchBox />
        </div>
      </div>

      {/* About section full width, no padding wrapper */}
      <AboutSection />
      <TravelServicesSection />
      </div>
    </main>
  );
}