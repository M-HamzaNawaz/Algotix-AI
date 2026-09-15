"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OurServiceData } from "@/src/containers/services/types";
import Link from "next/link";
import { consultationLink } from "../common/layout/data";

interface StrategyProps {
  service: OurServiceData;
}

const StackedStrategyCards = ({ service }: StrategyProps) => {
  const [direction, setDirection] = useState<"left" | "right">("left");

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardItems = service.cardsData || [];

  const handleNext = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev + 1) % cardItems.length);
  };

  const handlePrev = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev - 1 + cardItems.length) % cardItems.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-6xl 4k:max-w-[1500px] mx-auto px-4 py-8 md:py-16 md:overflow-visible">
        <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 z-10">
            <h2 className="text-2xl md:text-3xl 4k:text-5xl font-bold text-primary text-center md:text-left">
              Strategy
            </h2>
            <p className="text-sm md:text-base text-center md:text-left lg:text-lg 4k:text-xl max-w-lg">
              {service.strategyDescription ||
                "Craft a winning strategy tailored to your business goals with our expert guidance."}
            </p>

            <div className="relative flex  justify-center md:justify-start">
              <Link href={consultationLink}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full mt-4 md:mt-6 text-sm md:text-base"
                >
                  Schedule a free call
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-64 mr-20 md:mr-10 sm:h-72 md:h-80 flex items-center justify-center mt-8 md:mt-0">
            <button
              onClick={handlePrev}
              className="absolute z-20 hover:bg-primary bg-transparent ml-10 sm:ml-2 group transition-all rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 4k:w-14 4k:h-14 flex items-center justify-center shadow-md focus:outline-none"
              style={{
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:scale-125"
              >
                <path
                  d="M15 18L9 12L15 6"
                  className="stroke-[#FF6B35] group-hover:stroke-white transition-colors duration-200"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="relative h-full w-full max-w-xs sm:max-w-sm md:max-w-md mr-10 sm:mr-20">
              <AnimatePresence>
                <motion.div
                  key={`third-card-${(currentIndex + 2) % cardItems.length}`}
                  initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
                  animate={{ opacity: 0.9, scale: 0.9, rotate: 10, zIndex: 1 }}
                  exit={{ opacity: 0, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 right-0 w-[70%]  h-full bg-white rounded-lg border border-gray-100 shadow-md shadow-gray-300"
                  style={{ transformOrigin: "bottom right" }}
                />

                <motion.div
                  key={`second-card-${(currentIndex + 1) % cardItems.length}`}
                  initial={{ opacity: 0, scale: 0.95, rotate: 5 }}
                  animate={{ opacity: 0.95, scale: 0.95, rotate: 5, zIndex: 5 }}
                  exit={{ opacity: 0, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 right-0 w-[70%]  h-full bg-white rounded-lg border border-gray-100 shadow-md shadow-gray-300"
                  style={{ transformOrigin: "bottom right" }}
                />

                <motion.div
                  key={`card-${currentIndex}`}
                  initial={{
                    opacity: 0,
                    x: direction === "left" ? 100 : -100,
                    rotate: direction === "right" ? -10 : 10,
                  }}
                  animate={{ opacity: 1, x: 0, zIndex: 10, rotate: 0 }}
                  exit={{
                    opacity: 0,
                    x: direction === "left" ? -100 : 100,
                    scale: 0.8,
                    rotate: direction === "right" ? 10 : -10,
                  }}
                  transition={{ duration: 0.8 }}
                  className={`absolute top-0 right-0 w-[70%] 4k:w-[80%] ${direction === "left" ? "origin-bottom-left" : "origin-bottom-right"} h-full  bg-white rounded-lg border-2 border-primary p-4 md:p-6 shadow-lg`}
                >
                  <h3 className="text-base md:text-lg 4k:text-2xl font-medium text-primary">
                    {cardItems[currentIndex]?.title || "Strategy"}
                  </h3>
                  <hr className="my-2 md:my-4 py-[1px] bg-primary" />
                  <p className="text-xs sm:text-sm md:text-base 4k:text-lg text-gray-600 mb-4 md:mb-8">
                    {cardItems[currentIndex]?.description ||
                      "Lorem ipsum is simply dummy text of the printing and typesetting industry."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={handleNext}
              className="absolute z-20 hover:bg-primary bg-transparent group transition-all rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12  4k:w-14 4k:h-14 flex items-center justify-center shadow-md focus:outline-none"
              style={{
                top: "50%",
                right: "0",
                transform: "translateY(-50%) translateX(50%)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:scale-125"
              >
                <path
                  d="M9 6L15 12L9 18"
                  className="stroke-[#FF6B35] group-hover:stroke-white transition-colors duration-200"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-48 h-48 bg-about-us z-0 hidden xl:block"></div>
      <div className="absolute -left-5 bottom-0 w-48 h-48 bg-about-us z-0 hidden xl:block "></div>
    </div>
  );
};

export default StackedStrategyCards;
