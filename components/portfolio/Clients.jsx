import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Clients = ({ sector, image }) => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center bg-gray-200 w-60 h-60 p-6 lg:py-7 rounded-2xl gap-3 shadow-md"
      initial={{ opacity: 0, scale: 0.9 }} // Initial state
      animate={{ opacity: 1, scale: 1 }} // Animation to apply
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <Image
        src={`/images/${image}`}
        width={200}
        height={200}
        className="rounded-2xl object-cover h-full w-full"
      />
      <span className="font-medium text-center">{sector}</span>
    </motion.section>
  );
};

export default Clients;
