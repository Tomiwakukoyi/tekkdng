"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const autoCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getLinkClasses = (path) => {
    const isActive = pathname === path;
    return `
      relative flex items-center justify-center text-gray-600 font-medium transition duration-300 pl-4
      ${isActive ? "text-gray-900" : ""} 
      before:absolute before:bottom-[-6px] before:left-0 
      before:h-[2px] before:bg-[#17a2b8] before:w-0 before:transition-all before:duration-500 
      hover:before:w-[130%] 
      ${isActive ? "before:w-[130%]" : ""}
    `;
  };

  return (
    <div className="py-5 pt-6 px-10 md:px-20 fixed top-0 bg-white flex items-center justify-between w-screen z-50">
      {/* Logo */}
      <Link href="/">
        <div>
          <span className="text-md font-semibold font-sans">Tekkd NG</span>
        </div>
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button
        className="sm:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <></> : <DragHandleIcon fontSize="medium" />}
      </button>

      {/* Nav items for Mobile Screens */}
      {isMobileMenuOpen && (
        <div className="sm:hidden z-20 bg-white h-screen top-0 left-0 w-screen absolute">
          <div className="flex flex-col absolute items-end right-0 pt-6 pr-10">
            <button className="" onClick={toggleMobileMenu}>
              <CloseIcon />
            </button>
            <div className="flex flex-col items-end space-y-8 mt-10">
              <Link href="/">
                <span onClick={autoCloseMenu} className={getLinkClasses("/")}>
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span
                  onClick={autoCloseMenu}
                  className={getLinkClasses("/about")}
                >
                  About
                </span>
              </Link>
              <Link href="/portfolio">
                <span
                  onClick={autoCloseMenu}
                  className={getLinkClasses("/portfolio")}
                >
                  Portfolio
                </span>
              </Link>
              <Link href="/contactus">
                <span
                  onClick={autoCloseMenu}
                  className={getLinkClasses("/contactus")}
                >
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Nav items for SM and Up Screens */}
      <div className="hidden sm:flex sm:items-center sm:justify-center sm:space-x-3 md:space-x-8">
        <Link href="/">
          <span className={getLinkClasses("/")}>Home</span>
        </Link>
        <Link href="/about">
          <span className={getLinkClasses("/about")}>About</span>
        </Link>
        <Link href="/portfolio">
          <span className={getLinkClasses("/portfolio")}>Portfolio</span>
        </Link>
        <Link href="/contactus">
          <span className={getLinkClasses("/contactus")}>Contact Us</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
