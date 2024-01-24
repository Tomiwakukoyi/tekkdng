import React from "react";
import Desc from "./Desc";
import contentData from "@/public/data/descData";

const SubHeroSection = () => {
  return (
    <div className=" font-serif flex flex-col items-center justify-center gap-8 mt-28">
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-4xl h-6 text-gray-400">*</span>
        <h1 className=" font-medium w-300 text-center text-2xl sm:text-3xl  ">
          A passion for creating spaces
        </h1>
      </div>
      <p className="  text-gray-600 text-center w-[360px] sm:w-[480px] md:w-[550px] ">
        Our comprehensive suite of professional services caters to a diverse
        clientele, ranging from homeowners to commercial developers.
      </p>

      <div className=" flex flex-wrap items-center justify-center gap-8 mt-4">
        {contentData.map((content, index) => (
          <Desc
            key={index}
            header={content.header}
            spanContent={content.spanContent}
          />
        ))}
      </div>
    </div>
  );
};

export default SubHeroSection;
