import Cta from "@/components/homeComponents/Cta";
import HeroSection from "@/components/homeComponents/HeroSection";
import SubHeroSection from "@/components/homeComponents/SubHeroSection";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <SubHeroSection />
      <Cta />
    </div>
  );
};

export default HomePage;
