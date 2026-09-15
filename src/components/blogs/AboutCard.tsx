import Image from "next/image";
import { aboutInfo, socialLinks } from "@/src/containers/blogs/data";
import Link from "next/link";

const AboutCard = () => {
  return (
    <div className="mt-2  px-4 laptop:px-0 mb-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-[410px]  space-y-8">
        <h3 className="font-medium text-lg leading-[100%] tracking-[0px] text-[#767676] mt-6">
          About
        </h3>

        <div className="flex items-center space-x-3">
          <Image
            src={aboutInfo.logo}
            alt="Algotix Logo"
            width={70}
            height={70}
            className="rounded-full"
          />

          <div className="space-y-3">
            <h4 className="font-semibold text-[14px] leading-[100%] tracking-[0px] text-primary">
              {aboutInfo.name}
            </h4>
            <p className="font-medium text-[14px] leading-[100%] tracking-[0px] text-[#767676]">
              {aboutInfo.type}
            </p>
          </div>
        </div>

        <p className="font-normal text-[16px] leading-[20px] tracking-[0px] text-[#767676]">
          {aboutInfo.description}
        </p>

        <p className="font-medium text-[16px] leading-[100%] tracking-[0px]">
          {aboutInfo.location}
        </p>

        <div className="flex items-start gap-6 mt-2">
          {socialLinks.map((item, idx) => (
            <Link href={item.link} key={idx}>
              <Image
                src={item.logo}
                alt={item.title}
                className="w-5 h-5 max-w-36"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
