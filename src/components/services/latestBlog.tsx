"use client";

import React, { useState, useEffect, useMemo, memo } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ellipse from "@/public/ellipse.svg";
import ellipseFull from "@/public/ellipse_full.svg";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { routes } from "@/src/constants/routes";
import { DetailBlogPost } from "@/src/containers/blogs/types";
import auhorImage from "@/public/images/services/authorImage.svg";

interface VariantsProps {
  direction: number;
  position?: () => string;
}

interface LatestBlogProps {
  blogs: DetailBlogPost[];
}

const LatestBlog = ({ blogs }: LatestBlogProps) => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const indexInArrayScope = useMemo(() => {
    return ((activeIndex % blogs.length) + blogs.length) % blogs.length;
  }, [activeIndex, blogs]);

  const visibleItems = useMemo(() => {
    return blogs.slice(indexInArrayScope, indexInArrayScope + 3);
  }, [indexInArrayScope, blogs]);

  const handleClick = (newDirection: number) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getZIndex = useMemo(
    () =>
      ({
        position,
        direction,
      }: {
        position?: () => string;
        direction: number;
      }) => {
        const indexes: { [key: string]: number } = {
          left: direction > 0 ? 2 : 1,
          center: 3,
          right: direction > 0 ? 1 : 2,
        };
        return position && position() ? indexes[position()] : 0;
      },
    [],
  );

  const variants = useMemo(
    () => ({
      enter: ({ position }: VariantsProps) => {
        return {
          y: position && position() === "top" ? -150 : 150,
          opacity: 0,
        };
      },
      center: ({ position, direction }: VariantsProps) => ({
        scale: 1,
        zIndex: getZIndex({ position, direction }),
        rotate: 0,
        opacity: 1,
        y: 0,
      }),
      exit: () => ({
        y: 150,
        opacity: 0,
      }),
    }),
    [getZIndex],
  );

  return (
    <div className="bg-white w-full bg-grid overflow-hidden relative">
      <div className="max-w-7xl mx-auto 4k:max-w-[1950px]">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black 4k:text-6xl">
              Latest Blog
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base 4k:text-xl">
              Explore insights, tips and the latest updates across various
              industries through our curated blog posts. From expert opinions to
              how-to guides, our blogs are crafted to inform, inspire, and keep
              you ahead in your field.
            </p>

            <Link href={routes.BLOGS.path}>
              <div className="flex justify-start items-center gap-4 my-6">
                <div className="relative group">
                  <button className="bg-primary rounded-full w-[144px] h-[52px] text-sm sm:text-base text-secondary border-primary hover:bg-transparent hover:text-primary border-2 transition-all duration-300 ease-in-out relative z-10 group-hover:pr-5">
                    More Blogs
                    <ArrowRight
                      className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 rotate-[-45deg] group-hover:translate-x-[3px] transition-all duration-300 w-4 h-4"
                      color="#fe5901"
                    />
                  </button>
                </div>
              </div>
            </Link>

            <div className="mt-6 flex items-center flex-wrap gap-4">
              <div className="flex -space-x-3">
                <Image
                  src="/images/services/reviewers.png"
                  alt="Reviewer"
                  width={170}
                  height={50}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div>
                <Image
                  src="/images/services/stars.png"
                  alt="Rating"
                  width={150}
                  height={30}
                />
                <p className="font-bold text-sm">Trusted by 20k+ clients</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-6 w-full min-h-[480px] md:min-h-[550px]">
                <AnimatePresence mode="popLayout" initial={false}>
                  {visibleItems.map((item, index) => (
                    <motion.div
                      key={index}
                      layout
                      custom={{
                        direction,
                        position: () => {
                          if (item === visibleItems[0]) return "top";
                          if (item === visibleItems[1]) return "center";
                          return "bottom";
                        },
                      }}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 1 }}
                      className="bg-white w-full max-w-[500px] 4k:max-w-[700px] mx-auto h-auto min-h-[160px] p-4 border border-primary rounded-lg shadow-md flex flex-col sm:flex-row gap-3"
                    >
                      <div className="w-full sm:w-1/4 flex-shrink-0">
                        <Image
                          src={item.bannerImage}
                          alt={item.title}
                          width={160}
                          height={120}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="w-full sm:w-3/4 flex flex-col justify-between">
                        <div>
                          <h2 className="text-base sm:text-lg font-semibold text-black 4k:text-xl">
                            {item.title}
                          </h2>
                          <p className="text-xs sm:text-sm 4k:text-base text-gray-700 mt-1 line-clamp-3">
                            {item.body?.content?.[0]?.content?.[0] &&
                            "value" in item.body.content[0].content[0] &&
                            typeof item.body.content[0].content[0].value ===
                              "string"
                              ? item.body.content[0].content[0].value.slice(
                                  0,
                                  100,
                                )
                              : ""}
                          </p>
                        </div>
                        <div className="mt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div className="flex items-center gap-2">
                            <Image
                              src={item.authorImage || auhorImage}
                              alt={item.authorImage}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                            <span className="font-medium text-xs">
                              by {item.author || "Alexa John"}
                            </span>
                          </div>
                          <span className="text-gray-500 text-xs">
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Ellipses */}
      <div className="absolute -bottom-32 tablet:-bottom-48 -left-10 tablet:-left-20 hidden lg:block">
        <Image src={ellipse} alt="Ellipse" />
      </div>
      <div className="absolute -top-10 tablet:-top-20 -right-5 tablet:-right-20 rotate-180 hidden md:block md:scale-50 lg:right-10 lg:scale-75 xl:scale-100 xl:-right-10 origin-top-right">
        <Image src={ellipse} alt="Ellipse" />
      </div>
      <div className="hidden xl:block absolute top-60 right-52 xl:right-0 xl:top-11 xl:scale-[6]">
        <Image src={ellipseFull} alt="Ellipse" />
      </div>
    </div>
  );
};

export default memo(LatestBlog);
