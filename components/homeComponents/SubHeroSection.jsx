"use client";
import React, { useRef } from "react";
import Desc from "./Desc";
import contentData from "@/public/data/descData";
import { motion, useInView } from "framer-motion";

const SubHeroSection = () => {
  // Ref for the section to detect if it is in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Animation will trigger only once when in view

  // Animation variants
  const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descTextVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const contentVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  return (
    <div
      className="font-serif flex flex-col items-center justify-center gap-8 mt-16"
      ref={sectionRef} // Attach the ref to the section
    >
      {/* Heading section */}
      <motion.div
        className="flex flex-col items-center justify-center gap-2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
        variants={titleVariant}
      >
        <span className="text-4xl h-6 text-gray-400">*</span>


        <h1 className=" font-medium w-300 text-center text-2xl sm:text-3xl  ">
          A passion for digital technology solutions to world problems
        </h1>
      </motion.div>

      {/* Description text */}
      <motion.p
        className="text-gray-600 text-center w-[360px] sm:w-[480px] md:w-[550px]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
        variants={descTextVariant}
      >
        Our comprehensive suite of professional services caters to a diverse
        clientele, ranging from homeowners to commercial developers.
      </motion.p>

      {/* Content section */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 mt-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
        variants={contentVariant}
      >
      
        <div className=" flex flex-wrap items-center justify-center gap-8 mt-4">
          {contentData.map((content, index) => (
            <Desc
              key={index}
              header={content.header}
              spanContent={content.spanContent}
              image={content.image}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SubHeroSection;
