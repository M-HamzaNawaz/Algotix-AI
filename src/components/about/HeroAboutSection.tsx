"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/src/components/common/button/button";
import MeetingEmailForm from "../meetingEmailForm";
import { MountRevealGroup } from "@/src/components/motion/mount-reveal";
import { RevealItem } from "@/src/components/motion/reveal";

const HeroAboutSection: React.FC = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleConsultationClick = () => {
    setShowEmailForm(true);
  };

  const handleCloseForm = () => {
    setShowEmailForm(false);
  };

  return (
    <>
      <div className="container bg-grid md:bg-none !pr-0 mx-auto overflow-hidden px-4 py-10 pt-16 sm:pt-24 w-screen h-screen tablet-lg:h-auto tablet-lg:w-auto 4k:px-20">
        {/* The group stands in for the original flex row, so the two columns
            stay siblings and the cascade reaches both. */}
        <MountRevealGroup
          className="flex flex-col tablet-lg:flex-row tablet-lg:items-start justify-center h-full tablet-lg:justify-between items-center gap-8"
          stagger={0.14}
          delay={0.1}
        >
          {/* `space-y-6` targets direct children, so each wrapper stands in for
              exactly one of the original three elements. */}
          <div className="w-full flex flex-col justify-center items-center tablet-lg:block tablet-lg:w-1/2 px-5 tablet-lg:space-y-6">
            <RevealItem>
              <h1 className="text-4xl lg:pt-28 sm:text-[32px] lg:text-[40px] desktop-lg:text-6xl font-bold text-left">
                Driven by <span className="text-primary">Innovation.</span>{" "}
                Defined by
                <div className="sm:mt-4 tablet-lg:text-left">
                  <span className="text-primary">Excellence.</span>
                </div>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="text-[13px] text-center sm:text-lg lg:text-[18px] tablet:text-md desktop-lg:text-2xl font-medium leading-[1.6] tablet-lg:text-left text-[#9D9FA1] mt-4 sm:mt-6">
                At Algotix AI, we build intelligent software and AI solutions
                that solve real problems, empower businesses, and shape the
                future—one line of code at a time.
              </p>
            </RevealItem>

            <RevealItem>
              <Button
                variant="primary"
                className="mt-6 sm:mt-8 sm:mx-0 sm:w-auto z-10 tablet-lg:text-lg"
                onClick={handleConsultationClick}
              >
                Request a Consultation
              </Button>
            </RevealItem>
          </div>

          <div className="relative w-full hidden tablet-lg:block tablet-lg:w-1/2 mt-8 tablet-lg:mt-0">
            <div className="flex flex-col tablet-lg:flex-row items-center justify-end relative">
              <div className="relative z-10 flex gap-6 md:gap-8 max-w-lg mt-16 sm:mt-24 md:mt-32">
                {/* The inner cards carry `hover:scale-105`, so the reveal
                    wrapper sits outside them and leaves that transform be. */}
                <RevealItem
                  className="md:w-[300px] xl:w-[400px] 4k:w-[500px] 4k:h-[400px]"
                  direction="right"
                >
                  <div className="overflow-hidden rounded-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
                    <Image
                      src="/images/about-us-page/businessman-laptop.png"
                      alt="Businessman working on a laptop"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </RevealItem>

                <RevealItem
                  className="md:w-[100px] xl:w-[160px] 4k:w-[200px] self-end"
                  direction="right"
                >
                  <div className="overflow-hidden rounded-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
                    <Image
                      src="/images/about-us-page/collaboration.png"
                      alt="Team collaboration"
                      width={200}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </RevealItem>
              </div>
            </div>
          </div>
        </MountRevealGroup>

        <div className="absolute top-0 md:top-20 right-0 w-44 h-44 z-0 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-about-us sm:block"></div>

        <div className="absolute bottom-0 left-0 w-44 h-44 sm:w-32 tablet-lg:hidden sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-about-us lg:block"></div>
      </div>

      {/* Email Form - Moved outside container to ensure full-screen coverage */}
      <MeetingEmailForm isOpen={showEmailForm} onClose={handleCloseForm} />
    </>
  );
};

export default HeroAboutSection;
