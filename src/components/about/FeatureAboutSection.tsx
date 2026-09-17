"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../common/button/button";
import { featuresData, valuesData } from "../about-us/data";
import { ArrowRight } from "lucide-react";
import MeetingEmailForm from "../meetingEmailForm";

const FeaturesAboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"features" | "values">("features");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const data = activeTab === "features" ? featuresData : valuesData;

  const handleConsultationClick = () => {
    console.log("Book a call button clicked, showing email form");
    setShowEmailForm(true);
  };

  const handleCloseForm = () => {
    setShowEmailForm(false);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="text-center relative z-10">
          <h2 className="text-3xl 4k:text-5xl md:text-4xl font-semibold">
            Why Should You <span className="text-primary">Choose Us?</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between relative z-10 mt-10 gap-6">
          {/* Left Side */}
          <div className="relative flex justify-center w-full md:w-[45%] ">
            <Image
              src="/images/about/featureSection.png"
              alt="AI Helmet"
              width={381}
              height={700}
              className="rounded-lg max-w-[100vw] w-[500px]"
            />
            <div className="absolute bottom-36 md:bottom-24 lg:bottom-36 left-1/2 transform -translate-x-1/2 bg-black/5 p-4 md:p-6 md:px-8 lg:px-16 rounded-3xl text-white border border-white/50 shadow-lg flex flex-col items-center backdrop-blur-sm w-[90%] md:w-[80%] lg:w-[90%] max-w-[300px]">
              <h3 className="text-lg font-semibold">Get Started</h3>
              <p className="text-sm opacity-80">It’s free!</p>
              <div className="flex gap-4 md:gap-10 mt-4">
                <div className="relative group">
                  <button
                    onClick={handleConsultationClick}
                    className="bg-primary rounded-[90px] w-[144px] h-[52px] text-xs md:text-base text-secondary border-primary hover:bg-white hover:text-primary border-2 transition-all duration-300 ease-in-out relative z-10 group-hover:pr-5"
                  >
                    Book a call
                    <ArrowRight
                      className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform rotate-[-45deg] group-hover:translate-x-[3px] transition-all duration-300 ease-in-out w-4 h-4 md:w-5 md:h-5"
                      color="#fe5901"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-[50%] ">
            <div className="flex gap-4 justify-center md:justify-start mb-10">
              <Button
                variant={activeTab === "features" ? "primary" : "secondary"}
                className="px-8 rounded-full transition-all text-nowrap font-bold"
                onClick={() => setActiveTab("features")}
              >
                Features
              </Button>
              <Button
                variant={activeTab === "values" ? "primary" : "secondary"}
                className="px-6 py-2 rounded-full transition-all text-nowrap font-bold"
                onClick={() => setActiveTab("values")}
              >
                Our Values
              </Button>
            </div>
            <h3 className="mt-6 font-semibold text-[29px] leading-[32px] tracking-[-0.2px] 4k:text-4xl">
              {data.subtitle}
            </h3>
            <p className="text-[15px] mt-4 text-[#9D9FA1] 4k:text-xl">
              {data.description}
            </p>

            {/* Features or Values List */}
            <div className="grid grid-cols-2 gap-4 mt-6 py-5 ">
              {data.features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <hr className="border-t border-gray-300 w-full mb-2" />
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 text-lg 4k:text-2xl">
                      ■
                    </span>
                    <p className="text-sm 4k:text-xl">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Form - Rendered outside container for full-screen coverage */}
      <MeetingEmailForm isOpen={showEmailForm} onClose={handleCloseForm} />
    </>
  );
};

export default FeaturesAboutSection;
