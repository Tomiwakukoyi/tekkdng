import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <Link href="/contactus">
      <button className="flex mx-auto mt-5 bg-gray-900 hover:bg-slate-700 px-4 py-2 rounded-md">
        <span className=" font-medium text-sm text-gray-200">
          Contact Us
        </span>
      </button>
    </Link>
  );
};

export default Cta;
