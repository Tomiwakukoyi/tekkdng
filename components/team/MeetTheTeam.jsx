"use client";
import React from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";

const MeetTheTeam = ({ picture, name, position }) => {
  const [hovered, setHovered] = React.useState(false);

  const cardSpring = useSpring({
    transform: hovered ? "translateY(-8px)" : "translateY(0px)",
    boxShadow: hovered
      ? "0 15px 30px rgba(0, 0, 0, 0.1)"
      : "0 5px 15px rgba(0, 0, 0, 0.05)",
    config: { tension: 300, friction: 20 },
  });

  const imageSpring = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      className="bg-white rounded-xl overflow-hidden shadow-md w-full max-w-[250px]"
      style={cardSpring}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full h-0 pb-[100%] overflow-hidden">
        <animated.div className="absolute inset-0" style={imageSpring}>
          <Image
            src={`/images/${picture}`}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-300 pt-5"
          />
        </animated.div>
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </animated.div>
  );
};

export default MeetTheTeam;
