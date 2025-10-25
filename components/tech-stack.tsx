"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const techCategories = [
  {
    name: "AI/ML",
    technologies: [
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "LangChain",
      "Scikit-learn",
    ],
  },
  {
    name: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Python", "Django", "FastAPI", "PostgreSQL"],
  },
  {
    name: "Cloud",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
];

export default function TechStack() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setExpandedCategory(
      expandedCategory === categoryName ? null : categoryName
    );
  };

  const isOpen = (categoryName: string) => {
    return expandedCategory === categoryName;
  };

  const isVisible = (categoryName: string) => {
    // On mobile: only show if expanded or hovered (for hover effect)
    // On desktop: always show
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) {
      return isOpen(categoryName);
    }
    return true;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-foreground/70">
            Cutting-edge tools and frameworks we use
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.name}
              className="text-center"
              onMouseEnter={() =>
                !isOpen(category.name) && setHoveredCategory(category.name)
              }
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <button
                onClick={() => handleCategoryClick(category.name)}
                className="flex items-center justify-center gap-2 mx-auto text-xl font-semibold mb-6 text-accent hover:text-accent/80 transition-colors"
              >
                {category.name}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 md:hidden ${
                    isOpen(category.name) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`space-y-3 overflow-hidden transition-all duration-300 ${
                  isVisible(category.name)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } md:max-h-96 md:opacity-100`}
              >
                {category.technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="p-3 rounded-lg bg-card/50 border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 cursor-default"
                    style={{
                      transitionDelay: `${index * 20}ms`,
                    }}
                  >
                    <p className="text-foreground/80">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
