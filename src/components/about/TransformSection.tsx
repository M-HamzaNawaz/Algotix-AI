"use client";

import { transformSectionData } from "@/src/containers/about/data";
import Image from "next/image";
import React, { useState } from "react";
import MeetingEmailForm from "../meetingEmailForm";

const TransformSection: React.FC = () => {
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
      <section className="container mx-auto px-10 py-8 relative lg:px-20 xl:px-40">
        <div className="relative bg-gradient-to-r from-primary via-orange-500 to-primary text-white rounded-2xl py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="absolute right-2 top-2 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 md:bg-grid-right"></div>
          <div className="absolute left-2 bottom-2 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 md:bg-grid-left"></div>

          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 px-3 sm:px-8 md:px-16 lg:px-36 xl:px-52">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl 4k:text-4xl leading-tight">
              {transformSectionData.title}
            </h2>
            <p className="font-normal text-sm sm:text-base 4k:text-xl leading-relaxed text-center text-white">
              {transformSectionData.description}
            </p>
            <button
              onClick={handleConsultationClick}
              className="bg-white text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold mt-2"
            >
              {transformSectionData.buttonText}
            </button>
          </div>
        </div>

        <div className="mx-auto px-2 sm:px-6 md:px-12 lg:px-20 xl:px-40 mt-12 sm:mt-0 sm:transform sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20 py-4">
          <div className="bg-white text-black rounded-xl shadow-lg flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-primary py-4">
            {transformSectionData.services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-5 flex-1"
              >
                <div className="text-orange-500">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="mt-2 font-normal text-sm sm:text-base md:text-lg lg:text-xl 4k:text-2xl leading-tight">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-8 sm:h-4 md:h-2 lg:h-0"></div>
      </section>

      {/* Email Form - Rendered outside container for full-screen coverage */}
      <MeetingEmailForm isOpen={showEmailForm} onClose={handleCloseForm} />
    </>
  );
};

export default TransformSection;
