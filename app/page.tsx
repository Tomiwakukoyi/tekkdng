"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
// import Portfolio from "@/components/portfolio" // kept for reference
import PortfolioHighlights from "@/components/portfolio-highlights";
import TechStack from "@/components/tech-stack";
import WhyChooseUs from "@/components/why-choose-us";
import Team from "@/components/team";
import Contact from "@/components/contact";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress progress={scrollProgress} />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <PortfolioHighlights />
      <TechStack />
      <WhyChooseUs />
      <Team />
      <Contact />
    </main>
  );
}
