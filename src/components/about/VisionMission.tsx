"use client";
import React from "react";
import Image from "next/image";
import { missionData, visionData } from "@/src/containers/about/data";

const MissionVisionSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0 -z-10">
        <Image
          src={missionData.backgroundIcon}
          alt="Background"
          width={356}
          height={256}
          objectFit="contain"
        />
      </div>

      <div className="relative z-10">
        <div className="mb-8 text-center">
          <h2 className="font-medium text-[30px] 4k:text-[40px] leading-[150%] text-primary">
            Our Mission
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Side - Image */}
          <div className="relative flex justify-center w-full md:w-1/2">
            <div className="absolute  md:w-[315px] md:h-full lg:w-[417px] xl:w-[469px]  lg:h-[339px] sm:w-[200px] tablet-max:hidden bg-orange-400 rounded-xl rotate-[169deg] shadow-md"></div>
            <Image
              src={missionData.image}
              alt="Our Mission"
              width={469}
              height={339}
              className="relative rounded-lg shadow-lg z-10"
            />
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-[29px] 4k:text-[40px] leading-[150%] py-4">
              {missionData.title}
            </h3>
            <p className="text-[15px] 4k:text-[20px] leading-[25px] text-[#9D9FA1]">
              {missionData.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <Image
          src="/images/about-us-page/line-height.png"
          alt="Connecting Line"
          width={3000}
          height={10}
        />
      </div>

      {/* Vision Section */}
      <div className="absolute right-0 top-[50%] -z-10">
        <Image
          src={visionData.backgroundIcon}
          alt="Background"
          width={356}
          height={256}
          objectFit="contain"
        />
      </div>

      <div className="relative z-10">
        <div className="mb-8 text-center">
          <h2 className="font-medium text-[30px]  4k:text-[40px] leading-[150%] text-primary">
            Our Vision
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Side */}
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-[29px] 4k:text-[40px] py-4">
              {visionData.title}
            </h3>
            <p className="text-[15px] 4k:text-[20px]  leading-[25px] text-[#9D9FA1]">
              {visionData.description}
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center w-full md:w-1/2">
            <div className="absolute   md:w-[315px] md:h-full lg:w-[417px] xl:w-[469px]  lg:h-[339px]  bg-orange-400 rounded-xl rotate-[169deg] shadow-md"></div>
            <Image
              src={visionData.image}
              alt="Our Vision"
              width={469}
              height={339}
              className="relative rounded-lg shadow-lg z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
