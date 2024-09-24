import Navbar from "@/components/Navbar";
import Cta from "@/components/homeComponents/Cta";
import HeroSection from "@/components/homeComponents/HeroSection";
import SubHeroSection from "@/components/homeComponents/SubHeroSection";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <SubHeroSection />
      <Cta />
    </div>
  );
};

export default HomePage;
