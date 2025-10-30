"use client";
import AIHero from "@/components/aiComponents/AIHero";
import AIServices from "@/components/aiComponents/AIServices";
import AIProjects from "@/components/aiComponents/AIProjects";
import AICallToAction from "@/components/aiComponents/AICallToAction";

const AIPage = () => {
  return (
    <div className="w-full">
      <AIHero />
      <AIServices />
      <AIProjects />
      <AICallToAction />
    </div>
  );
};

export default AIPage;
