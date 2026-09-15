"use client";

import React, { useState } from "react";
import { transformSectionData } from "@/src/containers/about/data";
import MeetingEmailForm from "../meetingEmailForm";

const TransformAiSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container mx-auto mt-6 mb-12 relative">
      <div className="relative bg-gradient-to-r from-primary via-orange-500 to-primary text-white rounded-2xl py-12 sm:py-16 md:py-20 lg:py-24 shadow-shadowPrimary shadow-lg overflow-hidden">
        <div className="absolute right-2 top-2 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-grid-right z-0"></div>
        <div className="absolute left-2 bottom-2 w-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 h-0 bg-grid-left z-0"></div>

        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 px-3 sm:px-8 md:px-16 lg:px-28 xl:px-40 relative z-10 max-w-4xl mx-auto lg:max-w-3xl xl:max-w-4xl">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-tight">
            {transformSectionData.title}
          </h2>
          <p className="font-normal text-sm sm:text-base leading-relaxed text-center text-black">
            {transformSectionData.description}
          </p>
          <button
            onClick={handleOpenModal}
            className="bg-white text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold mt-2"
          >
            {transformSectionData.buttonText}
          </button>
        </div>
      </div>

      {/* Modal */}
      <MeetingEmailForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default TransformAiSection;
