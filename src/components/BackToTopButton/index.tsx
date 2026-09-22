"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  easeInOutCubic,
  smoothScrollTo,
} from "@/src/components/motion/lenis-instance";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Lenis disables native smooth scrolling while it is running, so route the
  // scroll through it and fall back to the browser when it is not active.
  const scrollToTop = () => {
    // Ease in and out: the default curve covers a third of the page in the
    // first few frames, which reads as a jump rather than a glide.
    smoothScrollTo(0, { duration: 1.4, easing: easeInOutCubic });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={scrollToTop}
            className="relative flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 4k:w-18 4k:h-18 bg-primary text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:outline-none hover:ring-2 hover:ring-primary animate-bounce-in group"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-lead group-hover:animate-spin-pulse" />
            {/* Pulsating Glow */}
            <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500 animate-pulse-glow"></div>
            {/* Outer Ring for Extra Animation */}
            <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 animate-ring-spin"></div>
          </button>
        </div>
      )}
    </>
  );
};

export default BackToTopButton;
