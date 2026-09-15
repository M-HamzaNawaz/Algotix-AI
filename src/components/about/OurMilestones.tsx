import { milestonesData } from "@/src/containers/about/data";
import Image from "next/image";
import React from "react";

const OurMilestones = () => {
  return (
    <div className="relative ">
      <div className="container mx-auto max-w-6xl 4k:max-w-7xl mt-8 text-center px-4 md:px-0 relative z-10">
        <h2 className="font-medium md:text-[38px] md:leading-[57px] text-[30px] leading-[45px] tracking-[0px] text-center">
          <span className="text-primary">Algotix AI</span> is dedicated to
          providing <span className="text-primary">innovative solutions</span>{" "}
          that empower your business. Our team of experts is committed to
          delivering{" "}
          <span className="text-primary">quality and excellence</span> in every
          project.
        </h2>

        <p className="font-medium md:text-[20px] leading-[30px] md:leading-[45px] mt-4 md:px-36 text-[20px] tracking-[0px] text-center">
          We have successfully delivered{" "}
          <span className="text-primary">250+ projects</span>, earning top
          ratings on Clutch and Upwork. Our commitment to excellence has made us
          a trusted partner in the industry.
        </p>
      </div>
      <div className="w-full h-full overflow-hidden relative mt-20">
        <div className="absolute -inset-10 z-[-100] animate-spin-border py-8 bg-gradient-to-r from-transparent via-primary to-transparent ease-in-out blur-[5px]"></div>

        <div className="bg-[#F6F6F6] my-[2px] py-6 relative z-0">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6 md:px-40">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="flex justify-center items-center w-full h-40">
                <Image
                  src="/images/about-us-page/clutch-icon.svg"
                  alt="Logo"
                  width={180}
                  height={50}
                  className="w-40 h-auto object-contain"
                />
              </div>
            </div>
            {milestonesData.stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col justify-center items-center h-full"
              >
                <div className="flex justify-center items-center w-full h-40">
                  {stat.value.includes(".svg") ? (
                    <Image
                      src={stat.value}
                      alt={stat.label || "Logo"}
                      width={120}
                      height={50}
                      className="w-40 h-auto object-contain"
                    />
                  ) : (
                    <p className="font-semibold text-[70px] leading-[150%] tracking-[0%] text-primary">
                      {stat.value}
                    </p>
                  )}
                </div>
                {stat.label && (
                  <p className="font-semibold text-[20px] leading-[150%] tracking-[0%] text-center mt-2">
                    {stat.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-60 w-48 h-48 bg-about-us z-0 hidden lg:block"></div>
    </div>
  );
};

export default OurMilestones;
