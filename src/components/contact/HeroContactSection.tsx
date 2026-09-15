"use client";
import React from "react";
import Image from "next/image";

const HeroContactSection: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/contact/union.svg"
          alt="Union Grid"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-10 pt-16 sm:pt-24 flex flex-col tablet-lg:flex-row tablet-lg:items-start items-center justify-between gap-8 relative z-10">
        {/* Left Text Content */}
        <div className="w-full flex flex-col justify-center items-center tablet-lg:block tablet-lg:w-1/2 px-5 tablet-lg:space-y-6 laptop:ml-10">
          <h1 className="text-2xl lg:pt-10 sm:pt-4 sm:text-[32px] lg:text-[38px] desktop-lg:text-5xl text-left font-semibold leading-snug tracking-[0px] mt-6 sm:mt-2">
            Get in Touch For a Quick
            <div className="sm:mt-4 tablet-lg:text-left">
              <span className="text-primary text-orange-500">Support</span> and
              Solutions
            </div>
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] tablet:text-md desktop-lg:text-2xl font-medium leading-8 text-left text-[#9D9FA1] [text-underline-position:from-font] [text-decoration-skip-ink:none] mt-8 sm:mt-6">
            Need help with custom solutions or have inquiries?
            <br className="hidden md:block" />
            We’re here to discuss your goals and how we can bring them to life!
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full items-center flex justify-center tablet-lg:block tablet-lg:w-5/12 mt-8 tablet-lg:mt-0 relative z-20">
          <div className="overflow-hidden rounded-lg transform transition-all hover:scale-105 duration-300 ease-in-out w-[300px] xl:w-[450px]">
            <Image
              src="/images/contact/contact-image.png"
              alt="Contact Us"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-0 md:top-20 right-0 w-44 h-44 z-0 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-about-us lg:block hidden"></div>
      <div className="absolute bottom-0 mt-10 left-0 w-16 h-16 sm:w-24 sm:h-24 xl:w-48 xl:h-48 bg-grid-bottom xl:block hidden md:hidden"></div>
    </div>
  );
};

export default HeroContactSection;
