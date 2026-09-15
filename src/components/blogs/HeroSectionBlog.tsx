import React from "react";
import Image from "next/image";

const HeroSectionBlog = () => {
  return (
    <div className="w-full relative bg-white mx-auto">
      {/* Decorative BG Circle */}
      <div className="absolute top-0 md:top-20 right-0 w-44 h-44 z-0 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-about-us  hidden lg:block"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-16 sm:pt-20 md:pt-28 lg:pt-36 pb-4 sm:pb-6 md:pb-8 px-4">
        <p className="font-normal text-base sm:text-lg md:text-[20px] leading-tight sm:leading-[100%] tracking-[0px] text-center text-primary mb-3 sm:mb-4 md:mb-6">
          BLOGS
        </p>
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight sm:leading-snug md:leading-relaxed lg:leading-[60px] tracking-[0px] text-center">
          Heartfelt Reflections:
          <span className="text-primary">Stories</span>
          <br />
          <div>
            <span className="text-primary mt-2 sm:mt-4 md:mt-6 lg:mt-10">
              of Love, Loss,{" "}
            </span>
            and Growth
          </div>
        </h1>
        <p className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg font-normal text-base sm:text-lg md:text-[20px] leading-relaxed sm:leading-loose md:leading-[35px] tracking-[0px] text-center mt-1 sm:mt-2">
          Start with a stunning homepage. Stay motivated withoutStart with a
          stunning homepage.
        </p>
      </div>

      <div className="relative w-full mt-2">
        <hr className="border-t border-[#767676] w-full" />
        <Image
          src="/images/blogs/decorative-grid.svg"
          alt="Decorative Grid"
          width={200}
          height={80}
          className="absolute top-0 left-0 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HeroSectionBlog;
