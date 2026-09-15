"use client";
import React from "react";
import { ourServiceData } from "@/src/containers/services/data";
import { useParams } from "next/navigation";

const ServiceDetailSection = () => {
  const { slug } = useParams();
  const service = ourServiceData.find((item) => item.slug === slug);

  if (!service || !service.steps.length) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full pt-20 sm:pt-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 w-full">
          <h2 className="text-primary font-base 4k:text-xl text-[20px] leading-[35px] mb-2">
            Services
          </h2>
          <h1 className="text-3xl sm:text-4xl 4k:text-5xl font-bold mb-4">
            Easy, Dynamic and{" "}
            <span className="text-primary">optimal workflow</span>
          </h1>
          {/* <p className="text-base sm:text-[20px] max-w-2xl mx-auto mt-6">
            Start with a stunning homepage. Stay motivated without. Start with a
            stunning homepage, with a stunning homepage.
          </p> */}
        </div>
      </div>

      <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 desktop:px-32 py-6 sm:py-10">
        <div className="flex flex-col lg:flex-row justify-between relative">
          {service.steps.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-start mb-12 lg:mb-0 relative"
            >
              <div className="border border-primary rounded-full px-5 py-2 mb-4 text-primary font-medium self-start">
                {item.step}
              </div>

              <div
                className="w-4 h-4 bg-primary rounded-full absolute left-0 z-10 hidden lg:block"
                style={{ top: "8rem" }}
              ></div>

              <h3 className="font-semibold text-[20px] 4k:text-3xl  leading-[27px] text-[#FE5A01] mb-4 mt-2 max-w-[300px] min-h-[60px] 4k:max-w-[450px]">
                {item.title}
              </h3>

              <div className="flex-1 text-[#767676] font-normal px-2 text-[15px] 4k:text-xl mt-6">
                {item.description}
              </div>

              {index < service.steps.length - 1 && (
                <div className="w-full h-0.5 bg-[#E5E5E5] mt-6 lg:hidden"></div>
              )}
            </div>
          ))}

          {/* Horizontal line */}
          <div
            className="absolute left-0 right-0 h-0.5 bg-[#767676] hidden lg:block"
            style={{ top: "8.5rem" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailSection;
