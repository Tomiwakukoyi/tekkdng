"use client"; // Make sure to keep this line if using Next.js 13 with React Server Components
import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import OurServices from "@/components/about/OurServices";
import MeetTheTeam from "@/components/team/MeetTheTeam";
import employees from "@/public/data/employees";
import servicesData from "@/public/data/servicesData";

const About = () => {
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const headerRef = useRef(null);
  const introRef = useRef(null);

  // Define spring properties for services and team sections
  const [servicesProps, setServicesProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
  }));
  const [teamProps, setTeamProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
  }));
  const [headerProps, setHeaderProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
  }));
  const [introProps, setIntroProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
  }));

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderProps({
            opacity: 1,
            transform: "translateY(0)",
            config: { tension: 200, friction: 20 },
          });
          observer.unobserve(headerRef.current);
        }
      },
      { threshold: 0.1 }
    );

    const introObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroProps({
            opacity: 1,
            transform: "translateY(0)",
            config: { tension: 200, friction: 20 },
          });
          introObserver.unobserve(introRef.current);
        }
      },
      { threshold: 0.1 }
    );

    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesProps({
            opacity: 1,
            transform: "translateY(0)",
            config: { tension: 200, friction: 20 },
          });
          servicesObserver.unobserve(servicesRef.current);
        }
      },
      { threshold: 0.1 }
    );

    const teamObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTeamProps({
            opacity: 1,
            transform: "translateY(0)",
            config: { tension: 200, friction: 20 },
          });
          teamObserver.unobserve(teamRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (introRef.current) introObserver.observe(introRef.current);
    if (servicesRef.current) servicesObserver.observe(servicesRef.current);
    if (teamRef.current) teamObserver.observe(teamRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (introRef.current) introObserver.unobserve(introRef.current);
      if (servicesRef.current) servicesObserver.unobserve(servicesRef.current);
      if (teamRef.current) teamObserver.unobserve(teamRef.current);
    };
  }, [setHeaderProps, setIntroProps, setServicesProps, setTeamProps]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 w-screen overflow-hidden overflow-x-hidden">
      {/* Animated Header */}
      <animated.span
        ref={headerRef}
        style={headerProps}
        className="font-serif text-3xl md:text-3xl lg:text-4xl font-medium text-center py-6 pb-5"
      >
        About
      </animated.span>

      {/* Animated Introductory Text */}
      <animated.div
        ref={introRef}
        style={introProps}
        className="flex items-center justify-center text-center"
      >
        <span className="text-sm md:text-base w-[90%] lg:w-[70%]">
          Tekkd Solutions is a comprehensive IT & Digital services company
          catering to a diverse clientele, ranging from different industries. We
          provide a wide range of services to help you with your projects, from
          start to finish.
        </span>
      </animated.div>

      <div className="flex flex-col items-start justify-start">
        {/* Animated Services Section */}
        <animated.div ref={servicesRef} style={servicesProps} className="flex flex-col items-center justify-center">
          <span className="text-sm md:text-base font-semibold flex mx-auto mt-5 md:mt-10">
            Our Services
          </span>
          <div className="flex gap-8 items-center justify-center mx-auto flex-wrap mt-3 w-[70%]">
            {servicesData.map((service, index) => (
              <OurServices key={index} {...service} />
            ))}
          </div>
        </animated.div>
      </div>

      <span className="text-sm md:text-base font-bold flex mx-auto mt-8 md:mt-10">
        Meet The Team
      </span>

      {/* Animated Team Section */}
      <animated.div
        ref={teamRef}
        style={teamProps}
        className="flex gap-5 mx-auto flex-wrap mt-3 w-[70%]"
      >
        {employees.map((employee, index) => (
          <MeetTheTeam key={index} {...employee} />
        ))}
      </animated.div>
    </div>
  );
};

export default About;
