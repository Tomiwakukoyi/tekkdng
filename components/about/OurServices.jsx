"use client";
import React from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";

const OurServices = ({ id, heading, description, image }) => {
  const [hovered, setHovered] = React.useState(false);

  // Create multiple spring animations for different effects
  const cardSpring = useSpring({
    transform: hovered ? "translateY(-8px)" : "translateY(0px)",
    boxShadow: hovered
      ? "0 22px 40px rgba(0, 0, 0, 0.1)"
      : "0 6px 20px rgba(0, 0, 0, 0.05)",
    config: { tension: 300, friction: 20 },
  });

  const imageSpring = useSpring({
    transform: hovered ? "scale(1.08)" : "scale(1)",
    config: { tension: 200, friction: 20 },
  });

  const textSpring = useSpring({
    color: hovered ? "#000000" : "#333333",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      className="bg-white rounded-xl overflow-hidden w-full max-w-[320px] h-full flex flex-col shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={cardSpring}
    >
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-full h-0 pb-[70%] overflow-hidden">
        <animated.div className="absolute inset-0" style={imageSpring}>
          <Image
            src={`/images/${image}`}
            alt={heading}
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-300"
          />
        </animated.div>
      </div>

      {/* Content container */}
      <div className="flex flex-col p-6 flex-grow">
        <animated.h3 className="font-bold text-lg mb-3" style={textSpring}>
          {heading}
        </animated.h3>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* Learn more link */}
        <div className="mt-auto pt-4">
          <Link href={`/services/${id}`}>
            <animated.span
              className="text-gray-800 font-medium text-sm inline-flex items-center cursor-pointer group"
              style={textSpring}
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </animated.span>
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default OurServices;
