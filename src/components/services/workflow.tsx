"use client";
import React, { useState, useEffect } from "react";
import { workFlowData } from "@/src/containers/services/data";
import Image from "next/image";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Workflow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContent(false);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % workFlowData.data.length,
        );
        setShowContent(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for the image
  const imageVariants = {
    initial: {
      opacity: 0,
      // y: -100,
      // scale: 0.8,
      transformOrigin: "center center",
    },
    animate: {
      opacity: 1,
      y: 0,
      // scale: 1,
      transition: {
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      // y: 100,
      // scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animation variants for workflow steps
  const stepVariants = {
    initial: {
      opacity: 0,
      height: "auto",
      marginBottom: 0,
      overflow: "hidden",
    },
    animate: {
      opacity: 1,
      height: "auto",
      overflow: "visible",
      transition: {
        duration: 0.5,
        ease: easeInOut,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      marginBottom: 0,
      overflow: "hidden",
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  const descriptionVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <div className="text-center mb-10 w-full ">
          <h2 className="text-primary text-lg font-semibold mb-2 4k:text-3xl">
            Work Process
          </h2>
          <h1 className="text-3xl font-bold mb-4 4k:text-4xl">
            Our <span className="text-primary">Proven </span>
            Development Process
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto 4k:text-xl ">
            From initial concept to deployment, our streamlined process ensures
            your software is built right—efficiently, collaboratively, and with
            long-term success in mind.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between w-full items-center gap-20 ">
          {/* Animated Workflow Steps */}
          <div className="w-full md:w-1/2 z-10 flex flex-col gap-5 overflow-hidden">
            {workFlowData.data.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`border-primary border-2 relative px-6 py-3 md:py-5  duration-300 rounded-xl space-x-4 flex items-start 
                  ${index === currentIndex ? "bg-primary " : " bg-white"}
                  `}
                style={{ zIndex: workFlowData.data.length - index }}
              >
                <div
                  className={` p-3 rounded-lg     ${index === currentIndex ? "bg-primaryLight " : " bg-primary"}`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={200}
                    height={200}
                    className={` w-6 h-6 `}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`md:text-xl  font-semibold     ${index === currentIndex ? "text-white " : " text-primary"}`}
                  >
                    {step.title}
                  </h3>
                  <AnimatePresence mode="wait">
                    {index === currentIndex && showContent ? (
                      <motion.p
                        key={`full-description-${step.id}`}
                        variants={descriptionVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className={`text-sm md:text-base ${index === currentIndex ? "text-white" : "text-primary"}`}
                      >
                        {step.description}
                      </motion.p>
                    ) : (
                      <motion.p
                        key={`short-description-${step.id}`}
                        variants={descriptionVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className={`text-sm md:text-base ${index === currentIndex ? "text-white" : "text-primary"}`}
                      >
                        {step.description.split(" ").slice(0, 3).join(" ") +
                          "..."}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="w-full md:w-1/2 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="rounded-lg overflow-hidden flex justify-center items-center"
              >
                <Image
                  src={workFlowData.data[currentIndex].rightImage}
                  alt="Team Meeting"
                  width={600}
                  height={480}
                  className="w-full h-[420px] object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-20 -right-0 w-48 h-48 bg-about-us rounded-full opacity-50 z-0"></div>
    </div>
  );
};

export default Workflow;
