"use client";

import Image from "next/image";
import { Logo } from "../common/ui/logo";
import { footerData, NavLinksType } from "./data";
import Link from "next/link";
import { memo } from "react";

const renderLinks = (heading: string, links: NavLinksType[]) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-body font-semibold tracking-[-1%]">{heading}</p>
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
          <p className="text-small text-[#9B9B9C] transition-colors duration-200 group-hover:text-primary">
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
    <footer className="relative z-10 bg-white flex flex-col px-6 sm:px-10 xl:px-[60px] pb-0! pb-32 sm:pb-60 h-max overflow-hidden  pt-20 tablet:pt-28">
      <div className="mx-auto grid w-full max-w-[1480px] gap-10 laptop:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] laptop:gap-16">
        {/* Left side. */}
        <div className="w-full laptop:max-w-[460px]">
          <Logo />
          <p className="text-small mt-6 tablet:mt-8 text-[#9B9B9C] tracking-[0%]">
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
        <div className="grid grid-cols-1 gap-8 tablet-sm:grid-cols-3 tablet-sm:gap-6">
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
