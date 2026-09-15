"use client";
import { useEffect, useState } from "react";
import { slides } from "./data";
import Image from "next/image";
import Button from "../common/button/button";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px) and (min-width: 721px)",
  });
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (isDesktop) {
          return prevIndex === slides.length - 3 ? 0 : prevIndex + 1;
        } else if (isTablet) {
          return prevIndex === slides.length - 2 ? 0 : prevIndex + 1;
        } else {
          return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isDesktop, isTablet]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (isDesktop) {
        return prevIndex === 0 ? slides.length - 3 : prevIndex - 1;
      } else if (isTablet) {
        return prevIndex === 0 ? slides.length - 2 : prevIndex - 1;
      } else {
        return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (isDesktop) {
        return prevIndex === slides.length - 3 ? 0 : prevIndex + 1;
      } else if (isTablet) {
        return prevIndex === slides.length - 2 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleLearnMore = (slug: string) => {
    router.push(`/services/${slug}`);
  };

  return (
    <div className="relative bg-white w-[377px] mobile-sm:w-full max-w-[400px] mobile-sm:max-w-[425px] tablet:max-w-[700px] laptop:max-w-[900px] laptop-lg:max-w[1150px] laptop-xl:max-w-[1300px] desktop:max-w-[1450px] desktop-lg:max-w-[1650px] mx-auto mb-0 shadow-lg mobile-sm:p-6 rounded-[30px]">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ms-12"
          style={{
            transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
            width: `${(slides.length * 100) / 1}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-1/3 flex flex-col items-center ps-0 pe-10 pt-10 pb-10 tablet-sm:p-4 box-border ${
                index === currentIndex + 1 ? "z-10" : ""
              }`}
            >
              {/* Animated Card Container */}
              <div className="relative w-[200px] tablet-sm:w-[250px] laptop:w-[350px] desktop:w-[400px] desktop-lg:w-[470px] h-[528px] rounded-xl overflow-hidden">
                {/* Rotating Gradient Border */}
                <div className="absolute -inset-10 z-0 animate-spin-border bg-gradient-to-r from-transparent via-primary to-transparent ease-in-out blur-[5px]"></div>

                {/* Card Content */}
                <div className="absolute inset-[2px] flex flex-col items-center bg-white rounded-xl w-[calc(100%-4px)] shadow-shadowPrimary z-10 transition-all duration-300">
                  <Image
                    className="mt-10 tablet:mt-20 mb-10 "
                    src={slide.icon}
                    alt={slide.title}
                    width={50}
                    height={50}
                  />
                  <h3 className="tablet-sm:text-lg tablet:text-xl text-center laptop:text-2xl font-bold text-gray-800">
                    {slide.title}
                  </h3>
                  <p className="mobile-xs:text-[15px]  min-h-[125px] max-h-[125px] text-[#9D9FA1] text-center mt-2 font-medium text-md p-3 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button
                    type="button"
                    variant="tertiary"
                    className="w-[140px] h-[48px] mobile-xs:w-[120px] mobile-xs:h-[44px] laptop:w-[150px] laptop:h-[60px] font-bold mt-40 tablet:mt-20 bg-primary hover:shadow-shadowPrimary shadow-2xl text-white px-4 text-sm whitespace-nowrap rounded-full hover:bg-white hover:text-primary transition"
                    onClick={() => handleLearnMore(slide.slug)}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[120px] tablet-sm:w-[50px] tablet-sm:h-[176px] bg-[#F2F2F2] text-gray-800 p-2 hover:bg-gray-200 focus:outline-none"
      >
        <Image
          className="ml-1"
          src="/images/carousel/handlePrev.png"
          alt="handlePrev"
          width={20}
          height={20}
        />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[120px] tablet-sm:w-[50px] tablet-sm:h-[176px] bg-[#F2F2F2] text-gray-800 p-2 hover:bg-gray-200 focus:outline-none"
      >
        <Image
          className="ml-2"
          src="/images/carousel/handleNext.png"
          alt="handleNext"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default Carousel;
