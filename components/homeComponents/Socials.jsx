"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Socials = () => {
  const router = useRouter();

  const handleNavigate = (url) => {
    router.push(url);
  };

  return (
    <div className="flex text-gray-600 gap-3">
      <FaTwitter
        onClick={() => handleNavigate("https://twitter.com/tommyk_dev")}
      />
      <FaLinkedin
        onClick={() =>
          handleNavigate("https://www.linkedin.com/company/optimindng/")
        }
      />
      <FaInstagram
        onClick={() => handleNavigate("https://instagram.com/tekkd.ng")}
      />
      <SiGmail
        onClick={() => handleNavigate("mailto:tomiwakukoyi07@gmail.com")}
      />
    </div>
  );
};

export default Socials;