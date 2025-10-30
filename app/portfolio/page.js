"use client";

import Clients from "@/components/portfolio/Clients";
import clientsData from "@/public/data/clients";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="flex flex-col gap-16 mt-28">
      <div className="flex flex-col gap-4">
        <motion.h1
          className="font-semibold text-xl mx-auto"
          initial={{ opacity: 0, y: -20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation to apply
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          Our Clientele
        </motion.h1>
        <motion.span
          className="text-sm font-sans md:text-lg text-center px-2 md:px-5 md:w-[80%] mx-auto"
          initial={{ opacity: 0, y: -20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation to apply
          transition={{ duration: 0.5, delay: 0.2 }} // Duration of the animation
        >
          We have worked with clients spanning across various key sectors. We
          can't disclose names because of NDA but we have listed the sectors
          where our clientele stretches across. We are not limited to these
          fields, these are simply our major client areas. Do reach out to us
          <Link href="/consultation">
            <span className="text-red-400"> here </span>
          </Link>
          to find out more.
        </motion.span>
      </div>

      {/* Gallery Layout for Clients */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10 mx-auto">
        {clientsData.map((data, index) => (
          <Clients key={index} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
