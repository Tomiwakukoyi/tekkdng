import OurServices from "@/components/about/OurServices";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <span className="font-serif text-3xl md:text-3xl lg:text-4xl font-medium text-center py-6 pb-5 ">
        About
      </span>
      <div className="flex flex-col items-start justify-start">
        <span className=" text-center flex mx-auto text-sm w-[80%]">
          Tekkd Solutions is a comprehensive IT & Digital services company
          catering to a diverse clientele, ranging from different industries. We
          provide a wide range of services to help you with your project, from
          start to finish.
        </span>
        <span className=" text-sm font-bold ml-5">Our Services</span>
        <OurServices />
        <span>
          Project Management: Our experienced team of project managers will
          ensure that your project is delivered on time and on budget. We use
          efficient planning, organization, and execution to bring your projects
          to life. <br /> Consulting: We offer expert advice and strategic
          guidance to help you make informed decisions about your business. Our
          consulting services cover a wide range of areas, including IT,
          marketing, and finance.
          <br /> Software and Web Development: Our development team can create
          cutting-edge software and web solutions tailored to your specific
          needs. We specialize in creating scalable and user-friendly
          applications that will help you achieve your business goals. <br />
          Digital/Social Media Marketing: We can help you reach and engage your
          target audience with our comprehensive digital and social media
          marketing services. We will help you grow your brand awareness and
          drive sales. <br /> Hardware Supply and Maintenance: We can supply you
          with the hardware you need and provide ongoing maintenance to ensure
          that your systems are running smoothly.
        </span>
        <span>
          Why Choose Tekkd Solutions? We have a team of experienced
          professionals who are passionate about what they do. We are committed
          to providing our clients with high-quality services at competitive
          prices. We have a proven track record of success. We are confident
          that we can provide you with the services you need to achieve your
          goals. Contact us today to learn more about how we can help you.
        </span>
      </div>
    </div>
  );
};

export default About;
