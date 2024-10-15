"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Cta = () => {
  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={buttonVariant}
      className="flex flex-col items-center justify-center"
    >
      <Link href="/consultation">
        <button className="bg-gray-900 text-white hover:bg-gray-700 text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
          Book a Consultation Now
        </button>
      </Link>
    </motion.div>
  );
};

export default Cta;
