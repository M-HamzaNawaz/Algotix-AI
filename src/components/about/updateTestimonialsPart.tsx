"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { testimonialsData } from "@/src/containers/about/data";
import Button from "../common/button/button";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % testimonialsData.length;
      const testimonial = { ...testimonialsData[index] };

      testimonial.quoteIcon = i === 1 ? "orange" : "gray";

      result.push(testimonial);
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="bg-[#F6F6F6] relative border-t border-b border-orange-400 mt-40 mb-10">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left */}
        <div className="md:w-1/2 px-4 md:px-6 lg:px-10 text-center md:text-left">
          <h2 className="font-medium text-[28px] md:text-[38px]   leading-[37px] text-primary">
            TESTIMONIALS
          </h2>
          <p className="mt-4 text-[14px] md:text-[16px] text-[#9D9FA1] leading-relaxed">
            See what some of our clients has to say about Algotix AI.
          </p>
          <Button variant="primary" className="mt-6 w-full sm:w-auto py-3 px-6">
            Want to become our clients?
          </Button>
        </div>

        {/* Right - Testimonial Cards */}
        <div className="md:w-[330px] flex flex-col md:mt-0 relative w-full mt-10 ">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${activeIndex}-${index}`}
              className={`relative bg-white w-full max-w-[400px] mx-auto md:mx-0  shadow-shadowPrimary shadow-md
                ${index === 0 ? "translate-y-[-10px] md:translate-y-[-20px] lg:translate-y-[-30px]" : ""}
                ${index === 1 ? "translate-x-[-10px] md:translate-x-[-20px] lg:translate-x-[-40px]" : ""}
                ${index === 2 ? "translate-y-[10px] md:translate-y-[20px] lg:translate-y-[30px]" : ""}`}
              style={{
                maxWidth: "100%",
                marginLeft: index === 1 ? "-15px" : "0",
                transition: "all 0.5s ease",
                border: "1px solid #FF5C00",
                borderRadius: "16px",
                position: "relative",
              }}
            >
              <div className="absolute left-0 mt-12 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-white">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-6 pl-10">
                <div className="flex flex-col mb-2">
                  <h4 className="font-bold text-[16px] text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p
                    className="font-normal text-[14px] leading-[100%] tracking-[0%]
"
                  >
                    {/* {testimonial.company || "Abstergo Ltd."} */}
                    Abstergo Ltd
                  </p>
                </div>
                <p className="text-[14px] leading-relaxed text-gray-500 mt-2">
                  {testimonial.text ||
                    "Working with [Your Company Name] was a game-changer for our business. Their intuitive and modern website design not website design"}
                </p>
              </div>

              <div
                className={`absolute top-2 right-2 md:top-4 md:right-4 text-xl md:text-2xl
                  ${testimonial.quoteIcon === "orange" ? "text-primary" : "text-gray-400"}`}
              >
                ❝
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
