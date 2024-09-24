"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Desc = ({ header, spanContent, image }) => {
  // Ref for the element to detect if it is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when it comes into view

  // Define motion variants for animation
  const itemVariant = {
    hidden: { opacity: 0, scale: 0.95 }, // Start with slight shrink and fade
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }, // Scale and fade in smoothly
  };

  return (
    <motion.div
      ref={ref} // Attach the ref to the element
      className="flex flex-col font-serif"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
      variants={itemVariant}
      whileHover={{ scale: 1.02 }} // Scale up slightly on hover
    >
      <Image
        src={`/images/${image}`}
        width={300}
        height={300}
        className="p-0.5 rounded-3xl shadow-md mb-8 mx-auto"
      />
      <h1 className="text font-medium">{header}</h1>
      <span className="text-[14px] w-[320px] text-gray-600">{spanContent}</span>
    </motion.div>
  );
};

export default Desc;
