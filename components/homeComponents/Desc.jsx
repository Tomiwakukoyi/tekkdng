"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Desc = ({ header, spanContent, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Motion variants for animation
  const itemVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center font-serif w-[300px] h-full"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariant}
    >
      {/* Image Container with fixed height */}
      <div className="w-full h-[200px] relative mb-4 overflow-hidden rounded-3xl shadow-md">
        <Image
          src={`/images/${image}`}
          alt={header}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Container with fixed height for alignment */}
      <div className="flex flex-col items-center h-[150px]">
        {/* Title */}
        <h1 className="font-medium text-center text-xl mb-3">{header}</h1>

        {/* Description */}
        <span className="text-center text-gray-600 text-sm">{spanContent}</span>
      </div>
    </motion.div>
  );
};

export default Desc;
