import React from "react";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";

const HeroSection = () => {
  return (
    <div className=" w-screen flex flex-col gap-3 items-center justify-center  mt-14 md:mt-24">
      <div className=" flex flex-col gap-3">
        <div className=" w-80 md:w-[550px] flex items-center justify-center ml-5 ">
          <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-center">
            Innovation and sustainability through digital technology
          </span>
        </div>
        <p className=" w-[350px] md:w-[540px] text-gray-600 text-center text-sm  ml-0 md:ml-6 ">
          Tekkd prioritizes creating solutions to different spheres and
          industries using digital technology as the foundation.
        </p>
      </div>

      <Link href="/about">
        <button className=" bg-gray-900 w-28 sm:w-28 h-10 rounded-lg mt-5 text-white text-sm hover:bg-gray-950">
          About Us
        </button>
      </Link>
      <Socials />
      <div className=" mt-5 sm:hidden">
        <Image
          src="/images/banner3.png"
          width={400}
          height={0}
          className=" mx-auto h-[50%] sm:w-full px-3  rounded-3xl"
        />
      </div>
      <div className=" mt-5 hidden sm:block ">
        <Image
          src="/images/banner2.jpg"
          width={1000}
          height={0}
          className=" mx-auto sm:w-full px-3  rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
