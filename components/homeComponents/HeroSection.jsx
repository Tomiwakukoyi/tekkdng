import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" w-screen flex flex-col items-center justify-center h-[50vh] mt-14">
      <div className=" flex flex-col gap-3">
        <div className=" w-80 flex items-center justify-center ml-5 ">
          <span className="font-serif text-2xl font-medium text-center">
            Innovation and sustainability through digital technology
          </span>
        </div>
        <p className=" w-[350px] text-gray-600 text-center text-sm">
          Tekkd prioritizes creating solutions to different spheres and
          industries using digital technology as the foundation.
        </p>
      </div>

      <Link href="/about">
        <button className=" bg-gray-950 w-28 h-10 rounded-lg mt-5 text-white text-sm hover:bg-gray-900">
          About Us
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
