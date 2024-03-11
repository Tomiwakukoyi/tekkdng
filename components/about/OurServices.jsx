"use client"
import React from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";

const OurServices = ({ heading, description, image }) => {
  const [hovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    scale: hovered ? 1.05 : 1, // Increase scale on hover
    config: { tension: 400, friction: 20 } // Adjust the animation parameters
  });

  return (
    <animated.div
      className="bg-gray-100 p-2 rounded-md text-black h-full text-sm w-300 flex flex-col mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: springProps.scale.interpolate((s) => `scale(${s})`) }}
    >
      <Image src={`/images/${image}`} width={300} height={300} className="p-0.5" />

      <div className="flex flex-col items-center justify-center mt-3 gap-2">
        <span className=" font-semibold">{heading}</span>
        <p className="text-center">{description}</p>
      </div>
    </animated.div>
  );
};

export default OurServices;

// We use efficient planning, organization, and execution to bring your projects
