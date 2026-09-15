import Image from "next/image";
import React from "react";
import { technologies } from "./data";

const TechCards = () => {
  return (
    <div className="hidden  tablet:grid grid-cols-3 gap-1  mt-10 ml-24 lg:m-0 sm:grid-cols-3 lg:grid-cols-3 p-0 desktop:mt-10">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`group relative flex items-center justify-center rounded-lg  transition-all hover:border-transparent shadow-lg shadow-shadowPrimary ${tech.width} ${tech.height} ${tech.className}`}
        >
          {/* Gradient Border Effect */}
          <div
            className={`absolute -inset-[2px] rounded-lg p-1 transition-all opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-br ${tech.colorFrom} ${tech.colorTo}`}
          ></div>
          {/* Card Content */}
          <div className="relative flex items-center justify-center w-full h-full bg-white rounded-lg">
            <Image
              src={tech.logo}
              alt={`${tech.name} Logo`}
              className={`group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0 filter rounded-lg p-2`}
              width={tech.ImageWidth}
              height={tech.ImageHeight}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechCards;
