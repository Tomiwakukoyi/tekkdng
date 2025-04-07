"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa";

const Socials = () => {
  const router = useRouter();

  const handleNavigate = (url) => {
    router.push(url, "_blank"); // Add "_blank" target to open in new tab/window
  };

  return (
    <div className="flex text-gray-600 gap-3">
      {/* <a
        href="https://twitter.com/tommyk_dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter fontSize={22} />
      </a> */}
      {/* <a
        href="https://www.linkedin.com/company/optimindng/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin fontSize={22} />
      </a> */}
      <a
        href="https://instagram.com/tekkd.ng"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram fontSize={22} />
      </a>
      <a
        href="mailto:tekkdng@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail fontSize={22} />
      </a>
      <a href="tel:+2347083325053" target="_blank" rel="noopener noreferrer">
        <FaPhone fontSize={22} />
      </a>
    </div>
  );
};

export default Socials;
