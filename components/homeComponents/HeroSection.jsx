import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" w-screen flex flex-col items-center justify-center h-[50vh] mt-16 md:mt-24">
      <div className=" flex flex-col gap-3">
        <div className=" w-80 md:w-[550px] flex items-center justify-center ml-5 ">
          <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-center">
            Innovation and sustainability through digital technology
          </span>
        </div>
        <p className=" w-[350px] md:w-[540px] text-gray-600 text-center text-sm md:text-base ml-0 md:ml-6 ">
          Tekkd prioritizes creating solutions to different spheres and
          industries using digital technology as the foundation.
        </p>
      </div>

      <Link href="/about">
        <button className=" bg-gray-900 w-28 md:w-32 h-10 rounded-lg mt-5 text-white text-sm hover:bg-gray-950">
          About Us
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
