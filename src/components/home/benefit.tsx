import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import { memo } from "react";

interface BenefitProps {
  icon: string | StaticImageData | StaticImport;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 w-full sm:w-[340px] md:w-[360px] lg:w-[380px] max-w-[380px]">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        <Image
          src={icon}
          alt={title}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0"
        />
        <h1 className="font-medium text-lg sm:text-xl md:text-2xl leading-6 sm:leading-7 md:leading-8">
          {title}
        </h1>
      </div>
      <p className="mt-4 sm:mt-5 md:mt-6 font-medium text-base sm:text-lg leading-5 sm:leading-6 text-[#9D9FA1] w-full">
        {description}
      </p>
    </div>
  );
};

export default memo(Benefit);
