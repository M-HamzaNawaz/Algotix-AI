"use client";

import Image from "next/image";
import { HeroSectionProps } from "../common/layout/data";
import {
  motion,
  AnimatePresence,
  backOut,
  easeOut,
  easeIn,
} from "framer-motion";
import { useState, useEffect } from "react";
import Button from "../common/button/button";
import MeetingEmailForm from "../meetingEmailForm";

const StateBox = ({
  number,
  label,
  className = "",
  index = 0,
}: {
  number: string;
  label: string;
  className?: string;
  index?: number;
}) => {
  return (
    <motion.div
      className={`relative group  ${className}`}
      initial={{ opacity: 0, x: 50, scale: 0.8 }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          delay: 0.8 + index * 0.6,
          duration: 0.7,
          ease: backOut,
        },
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-6 right-4 w-1 h-1 bg-orange-300/50 rounded-full animate-ping" />
        <div className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-pink-300/40 rounded-full animate-bounce" />
      </div>

      <div
        className="relative bg-gradient-to-br from-white/20 via-orange-50/30 to-pink-50/20
        backdrop-blur-xl border border-white/30 shadow-2xl shadow-orange-500/20
        p-3 rounded-2xl overflow-hidden
        w-28 h-28 tablet:w-32 tablet:h-32 laptop:w-[182px] laptop:h-[172px]
        flex flex-col items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-pink-400/10 to-purple-400/10
          opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
          -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
        />

        <motion.h3
          className="font-bold text-[18px] tablet:text-[22px] laptop:text-[28px] text-transparent bg-clip-text
            bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 mb-1 relative z-10 tracking-[0px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
        >
          {number}
        </motion.h3>

        <motion.p
          className="font-normal text-[12px] tablet:text-[14px] laptop:text-[20px] text-gray-700 text-center
            leading-tight relative z-10 tracking-[0px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
        >
          {label}
        </motion.p>

        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1
          bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full
          opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        />
      </div>
    </motion.div>
  );
};

const ProjectsHeroSection = ({
  stateBox1,
  stateBox2,
  stateBox3,
}: HeroSectionProps) => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  const words = [
    "Excellence.",
    "Innovation.",
    "Solutions.",
    "Success.",
    "Growth.",
    "Impact.",
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  const wordVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: easeIn,
      },
    },
  };

  const handleConsultationClick = () => {
    console.log("Request a Consultation button clicked, showing email form");
    setShowEmailForm(true);
  };

  const handleCloseForm = () => {
    setShowEmailForm(false);
  };

  return (
    <>
      <div className="container mx-auto items-center justify-center flex overflow-hidden px-4 pt-16 sm:pt-24 w-screen min-h-[80vh] tablet-lg:h-auto tablet-lg:w-auto">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/images/contact/union.svg"
            alt="Union Grid"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col tablet-lg:flex-row tablet-lg:items-start justify-center h-full tablet-lg:justify-between items-center gap-8">
          <div className="w-full flex flex-col justify-center items-center tablet-lg:block tablet-lg:w-1/2 px-5 tablet-lg:space-y-6 pt-20 tablet-lg:pt-20 laptop:ml-10 ">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl desktop-lg:text-7xl font-bold text-center tablet-lg:text-left">
              <motion.span
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-primary"
              >
                Innovative{" "}
              </motion.span>
              <motion.span
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-black"
              >
                Software{" "}
              </motion.span>
              <motion.span
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-black"
              >
                Projects{" "}
              </motion.span>
              <motion.div
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="sm:mt-4 tablet-lg:text-left inline-block"
              >
                <span className="text-black">Drive </span>
                <span
                  className="relative inline-flex h-[1.2em] min-w-[130px] align-top"
                  style={{ display: "inline-block" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      variants={wordVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute top-0 left-0 text-primary w-full"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.8,
                  duration: 0.8,
                },
              }}
              className="text-[13px] text-center sm:text-lg lg:text-[18px] tablet:text-md desktop-lg:text-2xl font-medium leading-[1.6] tablet-lg:text-left text-[#9D9FA1] mt-4 sm:mt-6"
            >
              At AlgotixAI, we specialize in creating cutting-edge software
              solutions and AI-driven applications that transform businesses.
              Our expert development team delivers custom projects ranging from
              enterprise software and mobile applications to advanced AI systems
              and automation tools.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.2,
                  duration: 0.6,
                },
              }}
              className="mt-6 sm:mt-8"
            >
              <Button
                variant="primary"
                className="mt-6 sm:mt-8 sm:mx-0 sm:w-auto z-10 tablet-lg:text-lg cursor-pointer"
                onClick={handleConsultationClick}
              >
                Request a Consultation
              </Button>
            </motion.div>
          </div>

          <div className="w-full tablet-lg:w-1/2 flex flex-col items-center justify-center gap-3 tablet:gap-4 laptop:gap-6 mt-8 pt-2 tablet:pt-6 laptop:pt-10 tablet:mt-10 laptop:mt-8 mb-16 laptop:mb-24 sm:mb-32 mobile-xs-max:mt-0">
            {stateBox1 && (
              <StateBox
                number={stateBox1.number}
                label={stateBox1.label}
                index={0}
                className="shadow-lg shadow-shadowPrimary hover:shadow-xl hover:shadow-shadowPrimary/60 transition-all duration-300 transform rotate-3 hover:rotate-0"
              />
            )}
            {stateBox2 && (
              <StateBox
                number={stateBox2.number}
                label={stateBox2.label}
                index={1}
                className="ml-8 tablet:ml-10 laptop:ml-10 mr-40 tablet:mr-50 laptop:mr-60 md:mr-80 shadow-lg shadow-shadowPrimary hover:shadow-xl hover:shadow-shadowPrimary/60 transition-all duration-300 transform -rotate-2 hover:rotate-0"
              />
            )}
            {stateBox3 && (
              <StateBox
                number={stateBox3.number}
                label={stateBox3.label}
                index={2}
                className="shadow-lg shadow-shadowPrimary hover:shadow-xl hover:shadow-shadowPrimary/60 transition-all duration-300 transform rotate-1 hover:rotate-0"
              />
            )}
          </div>
        </div>

        <div className="absolute hidden top-0 md:hidden lg:block lg:top-20 right-0 w-44 h-44 -z-10 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-about-us sm:block"></div>

        <div className="absolute hidden bottom-0 left-0 w-44 h-44 sm:w-32 sm:h-32 md:hidden md:w-40 -z-10  md:h-40 lg:w-48 lg:h-48 bg-about-us lg:block"></div>
      </div>
      <MeetingEmailForm isOpen={showEmailForm} onClose={handleCloseForm} />
    </>
  );
};

export default ProjectsHeroSection;
