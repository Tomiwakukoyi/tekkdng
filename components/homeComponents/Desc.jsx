import React from "react";

const Desc = ({ header, spanContent }) => {
  return (
    <div className="flex flex-col font-serif">
      <h1 className="text font-medium">{header}</h1>
      <span className=" text-[14px] w-[370px] text-gray-600">
        {spanContent}
      </span>
    </div>
  );
};

export default Desc;
