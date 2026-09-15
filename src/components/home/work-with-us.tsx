import React, { memo } from "react";
import { WorkWithUsDataType } from "./data";
import Benefit from "./benefit";
import Image from "next/image";
import ellipse from "@/public/ellipse.svg";
import ellipseFull from "@/public/ellipse_full.svg";
import Subscribemail from "./subscribemail";
interface WorkWithUsProps {
  data: WorkWithUsDataType;
}
function WorkWithUsSection({ data }: WorkWithUsProps) {
  return (
    <div className="px-10 tablet:px-44 pt-40 pb-20 bg-grid relative overflow-hidden">
      <h1 className="text-black font-semibold text-[32px] tablet:text-[38px] leading-[50px] tablet:leading-[57px] text-left ">
        Why you should <span className="text-primary">work with us?</span>
      </h1>

      <div className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-0 flex flex-wrap gap-4 sm:gap-24 justify-center items-start px-4 sm:px-6 md:px-8">
        {data.benefits.map((item, idx) => (
          <Benefit {...item} key={idx} />
        ))}
      </div>
      <Subscribemail />

      <div className="absolute -bottom-32 tablet:-bottom-48 -left-10 tablet:-left-20 tablet-max:hidden">
        <Image src={ellipse} alt="Ellipse" />
      </div>
      {/* <div className="absolute -top-10 tablet:-top-20 -right-5 tablet:-right-20 rotate-180 tablet-max:hidden md:scale-50 lg:right-10 lg:scale-75 xl:scale-100 xl:-right-10">
        <Image src={ellipse} alt="Ellipse" />
      </div> */}
      <div className="absolute top-60 tablet:top-36 right-52 tablet-max:hidden md:scale-50 md:right-24 lg:right-32 lg:scale-75 xl:right-52 xl:scale-100">
        <Image src={ellipseFull} alt="Ellipse" />
      </div>
    </div>
  );
}

export default memo(WorkWithUsSection);
