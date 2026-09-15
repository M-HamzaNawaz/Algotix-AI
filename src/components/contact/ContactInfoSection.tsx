"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { contactData } from "@/src/containers/contact/data";

const ContactInfoSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-12 lg:py-12">
      <div className="container mx-auto px-4 xl:max-w-[1440px] 4k:max-w-[1920px] xl:px-12">
        <h2 className="font-medium text-[30px] leading-[100%] tracking-[0px] mb-10 px-10">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-10">
          {contactData.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="relative overflow-hidden block transition-transform duration-300 hover:scale-[1.02] group"
              target={item.link.includes("http") ? "_blank" : "_self"}
              rel={item.link.includes("http") ? "noopener noreferrer" : ""}
            >
              <div
                className={`p-8 rounded-xl border 
                  ${hoveredIndex === index ? "border-primary" : "border-gray-200"} 
                  shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full`}
                onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-start mb-6">
                  <div
                    className={`w-16 h-16 rounded-md flex items-center justify-center transition-colors duration-300 
                    ${hoveredIndex === index ? "bg-primary" : "bg-white shadow-lg"}`}
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src={`/images/contact/${item.icon}`}
                        alt={item.title}
                        fill
                        className="transition-all duration-300"
                        style={{
                          filter:
                            hoveredIndex === index
                              ? "brightness(0) invert(1)"
                              : "none",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 pl-4 flex items-center mt-8">
                    <div className="w-full h-[1px] bg-gray-200 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold  mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
