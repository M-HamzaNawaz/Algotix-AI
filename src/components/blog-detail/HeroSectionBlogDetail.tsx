import React from "react";
import Image from "next/image";
import { DetailBlogPost } from "@/src/containers/blogs/types";
import { renderStyledTitle } from "@/src/utils/textFormatting";

const HeroSectionBlogDetail = ({ blog }: { blog: DetailBlogPost }) => {
  return (
    <div className="w-full relative bg-white mx-auto">
      <div className="absolute top-0 md:top-20 right-0 w-44 h-44 z-0 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-about-us hidden lg:block"></div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center text-center pt-16 sm:pt-20 md:pt-28 lg:pt-36 pb-4 sm:pb-6 md:pb-8 px-4">
        <p className="font-normal text-base sm:text-lg md:text-[20px] text-primary mb-3 sm:mb-4 md:mb-6">
          BLOGS
        </p>

        <h1 className="font-semibold text-2xl max-w-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight text-center">
          {renderStyledTitle(blog.title)}
        </h1>

        {/* {blog.body && (
          <p className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg font-normal text-base sm:text-lg md:text-[20px] leading-relaxed text-center mt-2">
            {blog.body.toString()}
          </p>
        )} */}

        {/* {blog.category && (
          <div className="px-6 py-4 rounded-full shadow-md bg-white hover:shadow-lg flex items-center justify-center gap-4 mt-6">
            <Image
              src={blog.category.icon}
              alt={blog.category.name}
              width={25}
              height={25}
            />
            <span className="font-semibold text-[20px] text-[#767676]">
              {blog.category.name}
            </span>
          </div>
        )} */}
      </div>

      {/* Decorative grid */}
      <div className="relative w-full">
        <Image
          src="/images/blogs/decorative-grid.svg"
          alt="Decorative Grid"
          width={200}
          height={80}
          className="absolute top-0 left-0 hidden lg:block"
        />
      </div>

      {/* Hero Image */}
      {blog.bannerImage && (
        <div className="w-full lg:w-3/4 flex items-center justify-center max-w-[2500px] mx-auto mt-20">
          <Image
            src={blog.bannerImage}
            alt="Blog hero"
            width={3000}
            height={2000}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default HeroSectionBlogDetail;
