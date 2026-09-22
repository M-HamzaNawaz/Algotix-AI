"use client";

import React, { useState } from "react";
import Button from "../common/button/button";
import AnimatedCard from "../animatedCard/animatedCard";
import TechnologyCards from "./TechnologyCards";
import AnimatedBackground from "../animatedBackground";
import MeetingEmailForm from "../meetingEmailForm";
import { MountRevealGroup } from "@/src/components/motion/mount-reveal";
import { RevealItem } from "@/src/components/motion/reveal";

const Hero: React.FC = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleConsultationClick = () => {
    setShowEmailForm(true);
  };

  const handleCloseForm = () => {
    setShowEmailForm(false);
  };

  return (
    <>
      <div className="container min-h-screen mt-12 lg:mt-0 px-8 flex-col flex tablet-lg:flex tablet-lg:flex-row justify-between desktop-lg:justify-around desktop:min-h-screen items-center py-10 sm:pt-20 w-full relative 4k:px-48 4k:py-20 4k:mt-20">
        <AnimatedBackground />

        {/* The group stands in for the original `.content-wrapper` div, so the
            flex layout that CSS targets by class is untouched. */}
        <MountRevealGroup
          className="content-wrapper"
          stagger={0.15}
          delay={0.15}
        >
          <div className="lg:px-8 4k:px-16">
            <RevealItem>
              <h2 className="animate-gradient-pan text-lg sm:text-xl lg:text-2xl desktop-lg:text-4xl 4k:text-4xl font-semibold leading-[1.2] text-left mt-4 bg-gradient-to-r from-[#FE5A01] via-[#7F00FF] to-[#FE5A01] bg-clip-text text-transparent">
                Welcome to Algotix AI
              </h2>
            </RevealItem>

            <RevealItem>
              <h1 className="text-2xl sm:text-[32px] md:text-4xl lg:text-[40px] laptop-lg:text-[42px] desktop:text-[48px] desktop-lg:text-[61px] font-bold leading-[1.2] desktop-lg:leading-[1.3] text-left 4k:text-7xl mt-3 py-2">
                Innovative Software Solutions,
                <span className="text-primary">
                  <br className="hidden sm:block" /> Powered by Intelligence.
                </span>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="max-w-2xl desktop:max-w-3xl lg:py-4 desktop:py-6 text-base sm:text-lg lg:text-[18px] tablet:text-md desktop-lg:text-xl font-medium leading-relaxed text-justify text-[#9D9FA1] mt-0 4k:text-3xl 4k:leading-[1.8]">
                We build intelligent momentum—combining AI, design, and
                engineering to turn bold ideas into business breakthroughs. Our
                team of experts works hand-in-hand with clients to architect
                scalable digital products, accelerate innovation, and deliver
                measurable results in record time.
              </p>
            </RevealItem>

            <RevealItem>
              <Button
                variant="primary"
                className="my-6 mx-auto py-6 sm:mx-0 sm:mt-8 desktop:text-lg desktop:my-10 4k:text-2xl 4k:px-10 4k:py-5"
                onClick={handleConsultationClick}
              >
                Request a Consultation
              </Button>
            </RevealItem>

            {/* `4k:scale-110` is a transform utility, so the reveal wrapper
                goes inside rather than on the same element. */}
            <div className="lg:mt-28 desktop:mt-20 4k:scale-110">
              <RevealItem>
                <AnimatedCard />
              </RevealItem>
            </div>
          </div>

          <div className="4k:scale-110">
            <RevealItem direction="left">
              <TechnologyCards />
            </RevealItem>
          </div>
        </MountRevealGroup>
      </div>
      {/* Email Form - Moved outside container to ensure full-screen coverage */}
      <MeetingEmailForm isOpen={showEmailForm} onClose={handleCloseForm} />
    </>
  );
};

export default Hero;
