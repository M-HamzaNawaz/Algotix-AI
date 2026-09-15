"use client";

import Image from "next/image";
import { Logo } from "../common/ui/logo";
import { footerData, NavLinksType } from "./data";
import Link from "next/link";
import { memo } from "react";

const renderLinks = (heading: string, links: NavLinksType[]) => {
  return (
    <div className="flex flex-col gap-4 w-full mobile-lg:w-[250px]">
      <p className="font-medium text-base mobile-lg:text-[18px] leading-[100%] tracking-[-1%]">
        {heading}
      </p>
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.path}
          className="flex items-center gap-3 group transition-colors duration-200 hover:text-primary"
        >
          {link.icon && (
            <Image
              src={link.icon}
              alt={link.title}
              className="w-5 h-5 transition-opacity duration-200 group-hover:opacity-80"
            />
          )}
          <p className="text-[#9B9B9C] text-sm leading-6 font-medium transition-colors duration-200 group-hover:text-primary">
            {link.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  const data = footerData;

  return (
    <footer className="relative z-10 bg-white flex flex-col px-4 mobile-sm:px-6 tablet-sm:px-8 tablet:px-14 desktop:px-20 desktop-lg:px-24 pt-10 tablet-sm:pt-12 desktop-lg:pt-14 pb-0! pb-32 sm:pb-60 h-max overflow-hidden ">
      <div className="flex flex-col tablet-lg:flex-row flex-wrap">
        {/* Left side. */}
        <div className="w-full tablet-lg:w-1/2 tablet-lg:pr-10 laptop:pr-20 laptop-lg:pr-24 desktop:pr-60 mb-8 tablet-lg:mb-0">
          <Logo />
          <p className="mt-6 tablet:mt-8 text-[#9B9B9C] font-medium text-[14px] leading-[24px] tracking-[0%]">
            {data.logo.subtitle}
          </p>
          <div className="flex gap-6 tablet:gap-8 my-6 tablet:my-8 ">
            {data.social.map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className="transition-transform duration-200 hover:scale-110"
              >
                <Image
                  src={item.logo}
                  alt={item.title}
                  className="w-5 h-5 max-w-36"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col tablet-sm:flex-row flex-wrap flex-grow justify-between gap-8 tablet-sm:gap-4">
          {/* Navigation */}
          <div className="tablet-sm:flex-1">
            {renderLinks("Navigation", data.links.navigation)}
          </div>

          {/* License */}
          <div className="tablet-sm:flex-1">
            {renderLinks("License", data.links.misc)}
          </div>

          {/* Contact */}
          <div className="tablet-sm:flex-1">
            {renderLinks("Contact", data.links.contact)}
          </div>
        </div>
      </div>

      <div></div>
      <div>
        <Image
          src="/trans_footerlogo.svg"
          width={50}
          height={50}
          className="w-full px-4 sm:px-0 sm:w-2/3 left-1/2 -translate-x-1/2 -bottom-6 h-auto absolute"
          alt="My Icon"
        />
      </div>
    </footer>
  );
};
export default memo(Footer);
