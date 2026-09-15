"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Projects } from "./data";
import Image from "next/image";
import Button from "../common/button/button";
import TechCard from "../common/techCard.tsx";

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextIndex = (currentIndex + 1) % Projects.length;

  // Clear timeout on component unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleTransition = (direction: string, newIndex: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setSlideDirection(direction);
    setIsScrollingPaused(true);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrollingPaused(false);
        }, 500);
      }, 50);
    }, 500);
  };

  const handleButtonClick = (direction: string, newIndex: number) => {
    handleTransition(direction, newIndex);
  };

  const nextSlide = () => {
    handleButtonClick("left", nextIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + Projects.length) % Projects.length;
    handleButtonClick("right", newIndex);
  };

  return (
    <>
      <div className="container-fluid w-full desktop-lg:mt-0 mx-auto relative">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/images/contact/union.svg"
            alt="Union Grid"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex justify-center w-full 4k:max-w-[3840px] 4k:mx-auto">
          <section className="flex flex-col-reverse justify-center laptop:flex-row items-center mx-auto w-full lg:items-start gap-8 max-w-[1920px] 4k:max-w-[2560px]">
            <section className="pl-4">
              {/* Left Content */}
              <div
                className={`p-2 min-h-[370px] mobile-sm:min-h-[340px] tablet-sm:min-h-[260px] laptop:min-h-[350px] desktop-lg:min-h-[470px] w-[220px] mobile-sm:w-[280px] mobile-lg:w-[340px] tablet-sm:w-[500px] laptop:-ml-24 laptop:w-[300px] laptop:mt-32 laptop-xl:mt-60 laptop-xl:-ml-40 desktop:mt-40 space-y-1 transition-all duration-300 ${
                  isTransitioning
                    ? `opacity-0 transform ${slideDirection === "left" ? "-translate-x-1" : "translate-x-1"}`
                    : "opacity-100 transform translate-x-0"
                }`}
              >
                {/* Project Title */}
                <h2 className="w-[220px] text-primary mobile-sm:w-[280px] mobile-lg:w-[340px] tablet-sm:w-max laptop:w-[300px] desktop:w-[400px] text-2xl tablet:text-3xl desktop:text-4xl desktop-lg:text-5xl 4k:text-[60px] 4k:w-[500px] font-semibold">
                  {Projects[currentIndex].title}
                </h2>
                {/* Project Description */}
                <p className="text-justify w-[220px] mobile-sm:w-[280px] mobile-lg:w-[340px] tablet-sm:w-[500px] laptop:w-[300px] laptop:pt-9 desktop:w-[400px] desktop-lg:text-2xl 4k:w-[600px] 4k:text-3xl">
                  {Projects[currentIndex].description}
                </p>

                <div className="w-[220px] mobile-sm:w-[280px] mobile-lg:w-[340px] tablet-sm:w-[500px] laptop:w-[300px] laptop:pt-1 desktop:w-[400px] 4k:w-[500px]">
                  <div className="flex flex-wrap gap-2 my-3">
                    {Projects[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 desktop-lg:py-3 4k:py-4 4k:px-5 4k:text-xl border-[1px] border-primary bg-opacity-10 rounded-full text-sm text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 w-full justify-center lg:justify-start tablet-sm:w-[500px] laptop:w-[300px] desktop:w-[400px] desktop-lg:[450px] 4k:w-[550px]">
                  {Projects[currentIndex].technologies.map((tech) => (
                    <TechCard
                      key={tech.name}
                      logo={tech.logo}
                      name={tech.name}
                      width="w-[58px] desktop-lg:w-[95px] 4k:w-[120px]"
                      height="h-[59px] desktop-lg:h-[85px] 4k:h-[120px]"
                      className=""
                      colorFrom={tech.colorFrom}
                      colorTo={tech.colorTo}
                      imageWidth={tech.imageWidth}
                      imageHeight={tech.imageHeight}
                      grayscale="none"
                    />
                  ))}
                </div>
              </div>
              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-4 justify-center z-50 mt-20 mobile-sm:mt-0 md:-mt-2 lg:mt-10 4k:mt-20">
                <Button
                  variant="custom"
                  onClick={prevSlide}
                  className="group w-[40px] h-[40px] laptop-lg:w-[50px] laptop-lg:h-[50px] desktop-lg:w-[70px] desktop-lg:h-[70px] gap-0 rounded-full bg-white top-[70px] laptop-xl:top-8 4k:top-20 desktop:-top-20 laptop:left-56 laptop-xl:left-40 desktop:left-20 desktop-lg:left-60 desktop-lg:top-52 p-2 hover:bg-primary"
                  disabled={isTransitioning}
                  style={{
                    boxShadow: `
          0px 11px 24px 0px #0000001A,
          0px 43px 43px 0px #00000017,
          0px 97px 58px 0px #0000000D,
          0px 172px 69px 0px #00000003,
          0px 268px 75px 0px #00000000
        `,
                  }}
                >
                  <ChevronLeft className="w-full h-full text-primary group-hover:text-white" />
                </Button>

                <Button
                  variant="custom"
                  onClick={nextSlide}
                  className="group w-[40px] h-[40px] laptop-lg:w-[50px] laptop-lg:h-[50px] desktop-lg:w-[70px] desktop-lg:h-[70px] gap-0 rounded-full bg-white top-[70px] laptop-xl:top-8 4k:top-20 laptop-xl:left-44 desktop:-top-20 laptop:left-56 desktop:left-24 desktop-lg:left-72 desktop-lg:top-52 p-2 hover:bg-primary"
                  disabled={isTransitioning}
                  style={{
                    boxShadow: `
          0px 11px 24px 0px #0000001A,
          0px 43px 43px 0px #00000017,
          0px 97px 58px 0px #0000000D,
          0px 172px 69px 0px #00000003,
          0px 268px 75px 0px #00000000
        `,
                  }}
                >
                  <ChevronRight className="w-full h-full text-primary group-hover:text-white" />
                </Button>
              </div>
            </section>

            {/* Image Container */}
            <section className="laptop:mt-[70px] desktop-lg:mt-[60px] relative">
              {/* Recent Work */}
              <div className="lg:relative tablet:left-[500px] h-[38px] tablet:w-[170px] tablet:-top-14 laptop-lg-max:-top-24 tablet:right-[300px] laptop-xl:left-[800px] desktop:left-[900px] desktop-lg:left-[1130px] 4k:left-[1050px] desktop:-top-24 desktop-lg:-top-16 laptop:left-[420px] tablet-sm:left-[400px] laptop-xl:w-[200px] laptop-lg:w-[200px] desktop-lg:w-[300px] desktop-lg:mt-12">
                <h1 className="text-2xl text-primary font-semibold desktop:text-3xl desktop-lg:text-[32px] mt-10">
                  Recent Work
                </h1>
              </div>

              {/* Next Slide Preview */}
              <div
                className="hidden md:hidden lg:block absolute right-[10px] -top-10 left-5 laptop:-left-2 laptop:-top-8 w-[522px] laptop:w-[500px] laptop-xl:w-[800px] laptop-xl:mt-20 laptop-xl:-left-[10px] 4k:left-44 laptop-xl:h-[550px] desktop:-top-28 desktop:w-[850px] desktop:left-[50px] h-[500px] desktop:h-[550px] desktop-lg:-left-[10px] desktop-lg:h-[750px] desktop-lg:w-[1100px] desktop-lg:mt-36 4k:h-[800px] 4k:w-[1100px] overflow-hidden rounded-lg"
                style={{
                  zIndex: isTransitioning && slideDirection === "left" ? 2 : 0,
                  opacity:
                    isTransitioning && slideDirection === "left" ? 1 : 0.3,
                  transform:
                    isTransitioning && slideDirection === "left"
                      ? "translate(15%, 8%) scale(1)"
                      : "translate(25%, 0) scale(0.95)",
                  transition: "all 500ms ease-in-out",
                }}
              >
                <Image
                  src={Projects[nextIndex].image}
                  alt={Projects[nextIndex].title}
                  className="w-full object-cover"
                  style={{
                    objectPosition: "top",
                  }}
                  width={1100}
                  height={3044} // Placeholder, actual height cropped by container
                  priority
                />
              </div>

              {/* Current Slide */}
              <div
                className="hidden md:hidden lg:block w-[522px] left-[100px] tablet:-top-10 laptop:left-[80px] laptop:w-[500px] laptop-xl:w-[830px] laptop-xl:left-[100px] laptop-xl:mt-28 laptop-xl:h-[550px] desktop:left-[180px] desktop:w-[850px] h-[500px] desktop:h-[550px] desktop:-top-36 desktop-lg:-top-40 desktop-lg:h-[700px] desktop-lg:w-[1100px] desktop-lg:mt-48 4k:h-[800px] 4k:w-[1100px] 4k:left-[340px] overflow-hidden shadow-lg rounded-lg relative"
                style={{
                  zIndex: isTransitioning ? 0 : 1,
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning
                    ? `scale(1) translate(${
                        slideDirection === "left" ? "1%" : "8%"
                      }, ${slideDirection === "right" ? "-5%" : "0"})`
                    : "scale(1) translate(0, 0)",
                  transition: "all 500ms ease-in-out",
                }}
                onMouseEnter={() => !isTransitioning && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="w-full h-full">
                  <Image
                    src={Projects[currentIndex].image}
                    alt={Projects[currentIndex].title}
                    className={`w-full object-cover transition-transform duration-[3000ms] ease-linear ${
                      isHovered && !isScrollingPaused
                        ? "hover:pause-on-hover"
                        : ""
                    }`}
                    style={{
                      transform:
                        isHovered && !isScrollingPaused
                          ? "translateY(calc(-100% + 650px))"
                          : "translateY(0)",
                      objectPosition: "top",
                    }}
                    width={1100}
                    height={3044}
                    priority
                  />
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
      <div
        className="
    w-full items-stretch
    min-h-[40px]
    transform scale-y-[1] sm:scale-x-[1]
    bg-curved-divider bg-no-repeat bg-cover
    mobile-sm:min-h-[48px]
    mobile-md:min-h-[56px]
    tablet:min-h-[102px] tablet:transform-none
    laptop:min-h-[130px] laptop:transform-none
    laptop-lg:min-h-[195px] laptop-lg:transform-none
    desktop:min-h-[250px] desktop:transform-none desktop:-mt-72
    desktop-lg:min-h-[265px] desktop-lg:transform-none desktop-lg:-mt-64
    4k:min-h-[350px] 4k:transform-none 4k:-mt-64
  "
      />
      <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-grid-bottom lg:block hidden -z-30"></div>
    </>
  );
};

export default RecentProjects;
