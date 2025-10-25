"use client";

import { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  description: string;
}

interface ProjectsData {
  projects: Project[];
}

export default function Portfolio() {
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjectsData(data))
      .catch((err) => console.error("Error loading projects data:", err));
  }, []);

  useEffect(() => {
    setCurrentPage(0); // Reset to first page when category changes
  }, [activeCategory]);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || !projectsData) return;

    const slideInterval = 2500; // 2.5 seconds for all devices

    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        const filteredProjects =
          activeCategory === "All"
            ? projectsData.projects
            : projectsData.projects.filter(
                (p) => p.category === activeCategory
              );
        const isMobile = window.innerWidth < 768;
        const totalPages = Math.ceil(
          filteredProjects.length / (isMobile ? 1 : 6)
        );
        return (prev + 1) % totalPages; // Loops back to beginning
      });
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, projectsData, activeCategory]);

  if (!projectsData) return null;

  const categories = [
    "All",
    "AI Solutions",
    "Web Apps",
    "Mobile Apps",
    "Automation",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === activeCategory);

  // Use 1 project per page on mobile, 6 on desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const projectsPerPage = isMobile ? 1 : 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setAutoSlide(false); // Disable auto-slide when user manually navigates
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setAutoSlide(false); // Disable auto-slide when user manually navigates
  };

  const handleGoToPage = (page: number) => {
    setCurrentPage(page);
    setAutoSlide(false); // Disable auto-slide when user manually navigates
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-base sm:text-lg text-foreground/70">
            Showcase of completed projects and solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "border border-border text-foreground/70 hover:border-accent/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Navigation */}
        <div className="relative overflow-hidden">
          {/* Previous Button */}
          {totalPages > 1 && (
            <button
              onClick={handlePrevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background border border-border rounded-full p-2 hover:bg-accent/10 hover:border-accent transition-all"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Projects Container with Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const pageProjects = filteredProjects.slice(
                  pageIndex * projectsPerPage,
                  (pageIndex + 1) * projectsPerPage
                );
                return (
                  <div
                    key={pageIndex}
                    className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {pageProjects.map((project) => (
                      <a
                        key={project.id}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          // Add your project detail page link here
                          console.log("Navigate to project:", project.id);
                        }}
                        className="group rounded-lg overflow-hidden border border-border bg-card hover:border-accent/50 transition-all duration-300 cursor-pointer block"
                      >
                        <div className="relative overflow-hidden h-48 bg-muted">
                          <img
                            src={project.image || "/images/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ExternalLink className="w-8 h-8 text-accent" />
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-accent text-sm font-medium mb-2">
                            {project.category}
                          </p>
                          <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-foreground/70 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          {totalPages > 1 && (
            <button
              onClick={handleNextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background border border-border rounded-full p-2 hover:bg-accent/10 hover:border-accent transition-all"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleGoToPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index
                    ? "bg-accent w-8"
                    : "bg-border hover:bg-accent/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Page Indicator */}
        {totalPages > 1 && (
          <div className="text-center mt-4 text-sm text-foreground/70">
            Page {currentPage + 1} of {totalPages} ({filteredProjects.length}{" "}
            projects)
          </div>
        )}
      </div>
    </section>
  );
}
