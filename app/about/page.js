import OurServices from "@/components/about/OurServices";
import MeetTheTeam from "@/components/team/MeetTheTeam";
import employees from "@/public/data/employees";
import servicesData from "@/public/data/servicesData";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 w-screen  overflow-hidden overflow-x-hidden">
      <span className="font-serif text-3xl md:text-3xl lg:text-4xl font-medium text-center py-6 pb-5 ">
        About
      </span>
      <div className="flex flex-col items-start justify-start ">
        <span className=" text-center flex mx-auto text-sm md:text-base w-[80%]">
          Tekkd Solutions is a comprehensive IT & Digital services company
          catering to a diverse clientele, ranging from different industries. We
          provide a wide range of services to help you with your projects, from
          start to finish.
        </span>
        <span className=" text-sm md:text-base font-bold flex mx-auto mt-5 md:mt-10">
          Our Services``
        </span>

        <div className="flex gap-8 items-center justify-center mx-auto flex-wrap mt-3 w-[70%]">
          {servicesData.map((service, index) => (
            <OurServices key={index} {...service} />
          ))}
        </div>
      </div>

      <span className=" text-sm md:text-base font-bold flex mx-auto mt-8 md:mt-10">
        Meet The Team
      </span>
      <div className="flex gap-5 mx-auto flex-wrap mt-3 w-[70%]">
        {employees.map((employees, index) => (
          <MeetTheTeam key={index} {...employees} />
        ))}
      </div>
    </div>
  );
};

export default About;
