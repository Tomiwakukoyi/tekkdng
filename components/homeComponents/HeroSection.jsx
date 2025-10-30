"use client";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";
import { motion } from "framer-motion";

export default function HeroSection() {
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.6 },
    },
  };

  const socialsVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 pt-40 md:pt-20">
      {/* Fixed container with max-width to ensure consistent behavior */}
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between z-10 w-full max-w-7xl">
        <motion.div
          className="lg:w-1/2 mb-10 lg:mb-0 w-full"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-start">
            Innovation and Sustainability through Digital Technology and AI
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center lg:text-start">
            Tekkd prioritizes creating solutions across various industries by
            leveraging digital technology as the foundation. With AI at the
            heart of our innovation, we're not just adapting to the future—
            <span className="font-bold">we're shaping it.</span>
          </p>
          <div className="flex flex-col items-center lg:items-start justify-center w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonVariant}
              className="w-full lg:w-auto flex justify-center lg:justify-start"
            >
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <Link href="/consultation">
                  <button className="bg-gray-900 text-white hover:bg-gray-700 text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg text-lg font-semibold transition-colors w-full sm:w-auto">
                    Book a Consultation Now
                  </button>
                </Link>
                <Link href="/ai">
                  <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold transition-colors w-full sm:w-auto">
                    Explore AI Solutions
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="mt-8 w-full flex justify-center lg:justify-start"
              initial="hidden"
              animate="visible"
              variants={socialsVariant}
            >
              <Socials />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <Image
            src="/images/banner3.png"
            width={600}
            height={400}
            alt="Hero image"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
