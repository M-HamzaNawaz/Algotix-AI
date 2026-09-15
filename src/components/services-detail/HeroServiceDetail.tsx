import Image from "next/image";
import { OurServiceData } from "@/src/containers/services/types";
interface StrategyProps {
  service: OurServiceData;
}

const HeroServiceDetail = ({ service }: StrategyProps) => {
  return (
    <div className="w-full relative bg-white mx-auto ">
      <Image
        src="/images/services-detail/hero-background.png"
        alt="hero-background"
        width={1600}
        height={800}
        className="w-full h-full object-cover absolute"
      />

      <div className="relative z-10 flex flex-col items-center text-center leading-[30px] pt-32 pb-8 px-4">
        <p className="text-primary font-medium mb-2 4k:text-xl ">Services</p>

        <h1 className=" text-2xl 4k:text-6xl md:text-4xl font-bold mb-2 leading-[30px]">
          Your Trusted Partner in
          <br />
          <span className="text-primary block mt-2">{service.title}.</span>
        </h1>
        <p className="max-w-md text-sm 4k:text-xl md:text-base mb-6 leading-[30px]">
          {service.description}
        </p>
      </div>

      {/* Bar chart section */}
      <div className="relative z-10 flex justify-between items-end w-full mx-auto px-4 md:px-0 mt-8">
        {service.projectImages.map((img, index) => {
          const isEdgeImage =
            index === 0 || index === service.projectImages.length - 1;
          const heights = [
            "h-40",
            "h-52 md:h-72",
            "h-72 md:h-96",
            "h-52 md:h-72",
            "h-40",
          ];

          return (
            <div
              key={img.img}
              className={`bg-[#D9D9D9] ${
                isEdgeImage ? "hidden md:block" : ""
              } w-1/4 md:w-1/6 ${heights[index]} overflow-hidden`}
            >
              <Image
                src={img.img}
                alt={img.title}
                width={300}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 w-full mx-auto bg-[#D9D9D9] mt-2 py-4 px-4 text-center text-sm">
        Trusted
      </div>
    </div>
  );
};

export default HeroServiceDetail;
