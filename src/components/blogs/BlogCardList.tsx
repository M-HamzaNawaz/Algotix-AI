import Image from "next/image";
import { DetailBlogPost } from "@/src/containers/blogs/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  blogs: DetailBlogPost[];
};

const BlogCardList = ({ blogs }: Props) => {
  return (
    <section className="space-y-6 py-6 sm:py-8 md:py-10">
      <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 mt-6 sm:mt-8 md:mt-10 text-left space-y-4 sm:space-y-6 md:space-y-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
          >
            {/* Image + Tags */}
            <div className="relative flex-shrink-0 w-full sm:w-[200px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[200px] md:h-[220px] lg:h-[245px]">
              <Image
                src={blog.bannerImage}
                alt={blog.title}
                width={200}
                height={150}
                className="w-full h-full object-cover rounded"
              />
              {/* <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-wrap gap-1 sm:gap-2 z-10">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-xs sm:text-sm font-semibold text-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>

            {/* Content */}
            <div className="flex-1 mt-3 sm:mt-0 max-h-[245px] flex flex-col justify-between max-w-[410px] desktop:max-w-[500px]">
              <div>
                <p className="font-normal text-sm sm:text-[16px] text-[#8F8F8F] mb-1">
                  {blog.date}
                </p>
                <h3 className="font-semibold text-lg sm:text-[20px] text-[#363636] mb-1 sm:mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2 max-h-[150px] overflow-hidden">
                  {blog.body?.content?.[0]?.content?.[0] &&
                  "value" in blog.body.content[0].content[0] &&
                  typeof blog.body.content[0].content[0].value === "string"
                    ? blog.body.content[0].content[0].value.slice(0, 120)
                    : ""}
                </p>
              </div>
              <Link
                href={`/blogs/${blog.slug}`}
                className="w-full md:w-1/3 flex gap-4 md:gap-10 mt-4"
              >
                <div className="relative group">
                  <button
                    className="bg-primary rounded-[90px] w-[130px] h-[40px] text-xs md:text-base text-secondary border-primary hover:bg-transparent hover:text-primary border-2 
                           transition-all duration-300 ease-in-out relative z-10 group-hover:pr-5"
                  >
                    See Details
                    <ArrowRight
                      className="absolute right-3 top-1/2 -translate-y-1/2 
                               opacity-0 group-hover:opacity-100 
                               transform rotate-[-45deg] group-hover:translate-x-[3px] 
                               transition-all duration-300 ease-in-out 
                               w-4 h-4 md:w-5 md:h-5"
                      color="#fe5901"
                    />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCardList;
