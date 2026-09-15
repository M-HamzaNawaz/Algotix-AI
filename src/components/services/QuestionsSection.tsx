"use client";
import React from "react";
import Image from "next/image";
import { transformSectionData } from "@/src/containers/services/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { routes } from "@/src/constants/routes";

const QuestionsSection: React.FC = () => {
  return (
    <section className="mt-10 relative ">
      <div className="relative bg-[#F6F6F6] rounded-2xl py-12 sm:py-16 md:py-20 lg:py-40 flex flex-col items-center text-center">
        <div
          className="absolute left-4 bottom-4 
          w-16 h-16 
          sm:w-24 sm:h-24 
          md:w-32 md:h-32 
          lg:w-48 lg:h-48 
          bg-grid-bottom  md:block hidden
        "
        ></div>

        <div
          className="absolute right-4 top-4 
          w-16 h-16 
          sm:w-24 sm:h-24 
          md:w-48 md:h-32 
          lg:w-48 lg:h-48 
          bg-about-us md:block hidden
        "
        ></div>

        <div className="absolute top-10 left-[20%] hidden lg:block">
          <Image
            src="/images/services/user1.png"
            alt="User 1"
            width={280}
            height={270}
            className="max-w-full h-auto"
          />
        </div>

        <div className="absolute top-44 right-[15%] hidden lg:block">
          <Image
            src="/images/services/user2.png"
            alt="User 2"
            width={130}
            height={120}
            className="max-w-full h-auto"
          />
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-40 lg:max-w-[50%] mx-auto">
          <h2 className="text-3xl sm:text-4xl 4k:text-5xl md:text-[38px] font-medium leading-tight tracking-normal">
            {transformSectionData.title}
          </h2>

          <p className="font-normal text-sm 4k:text-xl sm:text-base leading-relaxed text-black max-w-[600px] mx-auto">
            {transformSectionData.description}
          </p>
          <div className="relative group">
            <button
              className="bg-primary rounded-[90px] w-[144px] h-[52px] 4k:w-[200px] 4k:text-xl text-xs md:text-base text-secondary border-primary hover:bg-transparent hover:text-primary border-2 
                                         transition-all duration-300 ease-in-out relative z-10 group-hover:pr-5"
            >
              <Link href={routes.CONTACT.path}>
                {transformSectionData.buttonText}
                <ArrowRight
                  className="absolute right-3 top-1/2 -translate-y-1/2 
                                             opacity-0 group-hover:opacity-100 
                                             transform rotate-[-45deg] group-hover:translate-x-[3px] 
                                              transition-all duration-300  ease-in-out 
                                              w-4 h-4 md:w-5 md:h-5"
                  color="#fe5901"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
