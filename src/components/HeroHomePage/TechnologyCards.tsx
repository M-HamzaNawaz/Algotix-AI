import React from "react";
import { technologies } from "./data";
import TechCard from "../common/techCard.tsx";

const TechnologyCards = () => {
  return (
    <div className="hidden tablet:grid grid-cols-3 gap-12 xl:gap-0 desktop-[gap-0] mt-10 ml-24 lg:m-0 sm:grid-cols-3 lg:grid-cols-3 p-0 desktop:mt-10">
      {technologies.map((tech, index) => (
        <TechCard
          key={index}
          logo={tech.logo}
          name={tech.name}
          width={tech.width}
          height={tech.height}
          className={tech.className}
          colorFrom={tech.colorFrom}
          colorTo={tech.colorTo}
          imageWidth={tech.ImageWidth}
          imageHeight={tech.ImageHeight}
        />
      ))}
    </div>
  );
};

export default TechnologyCards;
