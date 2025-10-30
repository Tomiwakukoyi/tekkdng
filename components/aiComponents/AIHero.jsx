"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AIHero() {
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.6 },
    },
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("ai-projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 pt-40 md:pt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between z-10 w-full max-w-7xl">
        <motion.div
          className="lg:w-1/2 mb-10 lg:mb-0 w-full"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-start">
            Transforming Industries with Advanced AI Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center lg:text-start">
            At Tekkd, we harness the power of artificial intelligence to solve
            complex problems and create innovative solutions across healthcare,
            business, and more. Our AI systems are designed to be powerful,
            ethical, and accessible.
            <span className="font-bold">
              {" "}
              Experience the future of technology today.
            </span>
          </p>
          <div className="flex flex-col items-center lg:items-start justify-center w-full">
            <button
              onClick={scrollToProjects}
              className="bg-gray-900 text-white hover:bg-gray-700 text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Explore Our AI Projects
            </button>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <Image
            src="/ai/detect.png?height=400&width=600"
            width={600}
            height={400}
            alt="AI Technology Visualization"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
