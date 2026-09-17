"use client";
import React, { useState } from "react";
import { serviceData } from "@/src/containers/services/data";
import OrbitDesign from "./Orbit";
import { ArrowRight } from "lucide-react";
import MeetingEmailForm from "../meetingEmailForm";

const ServicesBanner = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleConsultationClick = () => {
    console.log("Book a call button clicked, showing email form");
    setShowEmailForm(true);
  };

  const handleCloseForm = () => {
    setShowEmailForm(false);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-10 px-6 pb-16 pt-28 sm:px-10 tablet-lg:min-h-[640px] tablet-lg:flex-row tablet-lg:gap-8 desktop:px-16">
          <div className="w-full space-y-4 text-left tablet-lg:w-1/2">
            <h2 className="text-2xl sm:text-[44px] leading-tight text-black lg:text-[40px] desktop-lg:text-6xl font-bold mb-8">
              <span className="text-primary">Smart Solutions </span>
              for Every Stage of Your
              <span className="text-primary"> Digital Journey</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-[18px] tablet:text-md desktop-lg:text-2xl font-medium leading-8 text-left text-[#9D9FA1] [text-underline-position:from-font] [text-decoration-skip-ink:none] mt-8 sm:mt-6">
              {serviceData.description}
            </p>
            <div className="md:w-1/3 flex gap-4 md:gap-10 mt-8 ">
              <div className="relative group mt-4">
                <button
                  onClick={handleConsultationClick}
                  className="bg-primary rounded-[90px] w-[144px] h-[52px] 4k:w-[200px] text-xs md:text-base  4k:text-xl text-secondary border-primary hover:bg-transparent hover:text-primary border-2 
                           transition-all duration-300 ease-in-out relative z-10 group-hover:pr-5"
                >
                  Book a call
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
            </div>
          </div>

          <div className="w-full tablet-lg:w-1/2">
            <OrbitDesign />
          </div>
        </div>
      </div>
      <MeetingEmailForm isOpen={showEmailForm} onClose={handleCloseForm} />
    </>
  );
};

export default ServicesBanner;
