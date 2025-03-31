"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ScrollButtons() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons when page is scrolled down a bit
      if (window.scrollY > 300) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!showButtons) return null;

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-2 z-50">
      <button
        onClick={scrollToTop}
        className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
      <button
        onClick={scrollToBottom}
        className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Scroll to bottom"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
}
