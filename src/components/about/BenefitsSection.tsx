"use client";
import Image from "next/image";
import { benefitsData } from "@/src/containers/about/data";

const BenefitsSection: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const BenefitCard = ({ benefit, isGrayBackground }: any) => {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 border-2
          ${
            isGrayBackground
              ? "bg-orange-100 border-gray-300 shadow-md shadow-primary/20 bg-gradient-to-br from-gray-100 to-gray-200"
              : "bg-white border-transparent hover:border-primary"
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 rounded-xl"></div>

        <div className="flex flex-col items-center z-10">
          <div className="mb-6 bg-primary/10 rounded-full">
            <Image
              src={benefit.icon}
              alt={benefit.title}
              width={40}
              height={40}
            />
          </div>

          <p className="font-semibold text-[20px] 4k:text-2xl leading-[150%]">
            {benefit.title}
          </p>

          <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-primary/0 rounded-xl"></div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="text-center relative z-10">
        <div>
          <h2 className="font-semibold text-[42px] 4k:text-5xl leading-[150%] text-center mb-4">
            Key{" "}
            <span className="text-primary relative">
              Benefits
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 4k:text-xl">
            Discover how our solutions can transform your business with these
            powerful advantages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 pb-16">
          {benefitsData.map((benefit, index) => {
            const isGrayBackground = [0, 2, 5, 7].includes(index);
            return (
              <BenefitCard
                key={index}
                benefit={benefit}
                index={index}
                isGrayBackground={isGrayBackground}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute right-0 top-0 w-48 h-48 bg-about-us z-0 hidden lg:block"></div>
      <div className="absolute left-2 bottom-0 w-48 h-48 bg-about-us z-0 hidden lg:block"></div>
    </section>
  );
};

export default BenefitsSection;
