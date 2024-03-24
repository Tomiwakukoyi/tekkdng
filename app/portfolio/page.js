import Clients from "@/components/portfolio/Clients";
import clientsData from "@/public/data/clients";
import React from "react";
import Link from 'next/link'

const Portfolio = () => {
  return (
    <section className="flex flex-col gap-16 mt-16">
      <div className="flex flex-col gap-4 ">
        <h1 className=" font-semibold text-xl  mx-auto">Our Clientele</h1>
        <span className="text-sm font-sans md:text-lg text-center px-2 md:px-5 md:w-[80%] mx-auto ">We have worked with clients spanning accross various key sectors.
         We can't disclose names because of NDA but we have listed the sectors where
          our clientele stretches accross. <br /> 
          We are not limited to these fields, these are simply our major client areas. Do reach out to us <Link href="/contactus">
                <span className=" text-red-400"
                >
                  here
                </span>
              </Link> to find out more.
          </span>
      </div>
      <div className=" flex flex-wrap items-center justify-start gap-6">
        {clientsData.map((data, index) => (
          <Clients key={index} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
