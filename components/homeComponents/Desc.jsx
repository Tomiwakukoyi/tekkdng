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
      className="flex flex-col items-center font-serif w-[300px] h-auto"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariant}
    >
      {/* Image */}
      <Image
        src={`/images/${image}`}
        width={300}
        height={300}
        className="rounded-3xl shadow-md mb-4"
      />

      {/* Title */}
      <h1 className="font-medium text-center mb-2">{header}</h1>

      {/* Description */}
      <span className="text-center text-gray-600">{spanContent}</span>
    </motion.div>
  );
};

export default Desc;
