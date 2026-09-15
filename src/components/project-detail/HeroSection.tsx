"use client";
import React from "react";
import Link from "next/link";
import { ProjectData } from "@/src/containers/project-detail/data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ project }: { project: ProjectData }) => {
  return (
    <div className="relative container mx-auto px-4 pt-16 sm:pt-24 w-full flex flex-col items-center text-center tablet-lg:text-left tablet-lg:flex-row tablet-lg:items-start tablet-lg:justify-between">
      {/* Text Section */}
      <div className="w-full tablet-lg:w-1/2 flex flex-col text-left tablet-lg:items-start px-4 sm:px-12 py-14 laptop:ml-10 relative">
        <h1 className="font-semibold text-[44px] leading-[70px] tracking-[0px] text-black">
          {project.title}
        </h1>
        <h1 className="font-semibold text-[44px] leading-[70px] tracking-[0px] text-primary">
          Case Study
        </h1>
        <p className="text-[20px] font-normal leading-[35px] text-left max-w-[639px] text-[#000000]">
          {project.description}
        </p>

        <Link href="/projects">
          <div className="relative group">
            <button
              className="bg-primary rounded-[90px] w-[180px] h-[52px]  mt-6 sm:mt-8 hidden md:block text-xs md:text-base text-secondary border-primary hover:bg-transparent hover:text-primary border-2 
                 transition-all duration-300 ease-in-out relative z-10 group-hover:pr-5"
            >
              Back to Projects
              <ArrowRight
                className="absolute right-3 top-1/2 -translate-y-1/2 
                   opacity-0 group-hover:opacity-100 
                   transform rotate-[-45deg] group-hover:translate-x-[3px] 
                   transition-all duration-300 ease-in-out 
                   w-4 h-4 md:w-5 md:h-5"
                color="#fe5901"
              />
            </button>
          </div>
        </Link>

        {/* <div className="absolute -bottom-24 left-0 xl:left-[510px] 2xl:left-[910px] w-44 h-44 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-about-us hidden lg:hidden xl:block z-0"></div> */}
      </div>

      {/* Image Section */}
      <div className="relative w-full tablet-lg:w-1/2 flex justify-end">
        <Image
          src={project.images.hero}
          alt="Hero"
          width={727}
          height={592}
          className="max-w-full h-auto shadow-xl drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
