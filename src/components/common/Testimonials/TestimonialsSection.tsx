"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { testimonialsData } from "@/src/containers/about/data";
import useBreakpoint from "@/src/hooks/useMediaQueryHook";
import Button from "../button/button";
import Link from "next/link";

interface VariantsProps {
  direction: number;
  position?: () => string;
}

const TestimonialsSection: React.FC = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const { isTablet } = useBreakpoint();

  const indexInArrayScope =
    ((activeIndex % testimonialsData.length) + testimonialsData.length) %
    testimonialsData.length;

  const visibleItems = [...testimonialsData, ...testimonialsData].slice(
    indexInArrayScope,
    indexInArrayScope + 3,
  );
  const handleClick = (newDirection: number) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick(-1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: ({ position }: VariantsProps) => {
      if (position && position() === "top") {
        return { y: -150, opacity: 0 };
      } else {
        return { y: 150, opacity: 0 };
      }
    },
    center: ({ position, direction }: VariantsProps) => {
      return {
        scale: position && position() === "center" ? 1 : 1,
        x: position && position() === "center" && isTablet ? -50 : 0,
        zIndex: getZIndex({ position, direction }),
        borderLeft:
          position && position() === "center"
            ? "20px solid #fe5901"
            : "1px solid #fe5901",
        opacity: 1,
        y: 0,
      };
    },
    exit: ({ position }: VariantsProps) => {
      if (position && position() === "top") {
        return { y: 150, opacity: 0 };
      } else {
        return { y: 150, opacity: 0, x: 0 };
      }
    },
  };

  function getZIndex({
    position,
    direction,
  }: {
    position?: () => string;
    direction: number;
  }): number {
    const indexes: { [key: string]: number } = {
      left: direction > 0 ? 2 : 1,
      center: 3,
      right: direction > 0 ? 1 : 2,
    };
    return position && position() ? indexes[position()] : 0;
  }

  return (
    <section className="bg-[#F6F6F6] relative border-t border-b  md:py-0 border-orange-400 mb-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left */}
        <div className="hidden lg:block lg:w-2/5 px-4 lg:px-10 text-center lg:text-left">
          <h2 className="font-medium text-[28px] lg:text-[38px] leading-[37px] text-primary">
            TESTIMONIALS
          </h2>
          <p className="mt-4 text-[14px] lg:text-[16px] text-[#9D9FA1] leading-relaxed">
            From startups to global enterprises, our clients share how Algotix
            AI helped them innovate faster, scale smarter, and exceed
            expectations.{" "}
          </p>
          <div>
            <Link href="/contact#get-in-touch">
              <Button
                variant="primary"
                className="mt-6 w-full sm:w-auto py-3 px-6"
              >
                Want to be one of them?
              </Button>
            </Link>
          </div>
        </div>
        {/* Right - Testimonial Cards */}
        <div className="md:w-[461px] w-full relative md:mx-auto lg:mx-0 md:mt-0 my-20 md:h-[460px] h-[500px] overflow-visible">
          <div className="flex flex-col items-center w-full">
            <div className="flex m-5 flex-col h-screen gap-4 ">
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleItems.map((item) => {
                  const isCenter = item === visibleItems[1];
                  return (
                    <motion.div
                      className={`flex items-center px-4 py-[3px] border rounded-xl box-content  shadow-shadowPrimary shadow-md bg-[#FFFFFF]  w-[300px] md:w-[430px]  h-[160px] md:h-[140px] border-primary `}
                      key={item.id}
                      layout
                      custom={{
                        direction,
                        position: () => {
                          if (item === visibleItems[0]) {
                            return "top";
                          } else if (item === visibleItems[1]) {
                            return "center";
                          } else {
                            return "bottom";
                          }
                        },
                      }}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 1 }}
                      style={{ position: "relative", flexShrink: 0 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px]"
                      />
                      <div className="ml-4 md:ml-6">
                        <h4 className="font-bold text-[16px] md:text-[18px] leading-[100%] tracking-[0%] mb-2 md:mb-4">
                          {item.name}
                        </h4>
                        <p className="font-light text-[14px] md:text-[16px] leading-[1.3] tracking-[0%] text-[#6B7280]">
                          {item.text}
                        </p>
                      </div>

                      <div
                        className={`absolute top-2 right-2 md:top-2 md:right-4 text-xl md:text-2xl  ${isCenter ? "text-primary" : "text-gray-400"}`}
                      >
                        ❝
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
