"use client";

import { useState } from "react";
import { topics } from "@/src/containers/blogs/data";
import Image from "next/image";
import BlogCardList from "./BlogCardList";
import BlogsSidebar from "@/src/components/blogs/BlogsSidebar";
import { DetailBlogPost } from "@/src/containers/blogs/types";

type Props = {
  blogs: DetailBlogPost[];
};

const TrendingTopics = ({ blogs }: Props) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const showAllBlogs = () => {
    setSelectedTopics([]);
  };

  // Filtering logic
  const filteredBlogs =
    selectedTopics.length === 0
      ? blogs
      : blogs.filter((blog) =>
          blog.tags?.some((tag: string) => selectedTopics.includes(tag)),
        );

  return (
    <>
      <section className="py-12 px-4 text-center">
        <h2 className="font-normal text-[20px] text-center text-primary mb-8">
          EXPLORE TRENDING TOPICS
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {topics.map((topic) => {
            const isSelected = selectedTopics.includes(topic.name);
            return (
              <button
                key={topic.name}
                onClick={() => toggleTopic(topic.name)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full shadow-md transition 
                ${isSelected ? "bg-orange-100 border border-primary" : "bg-white"} 
                hover:shadow-lg`}
              >
                <Image
                  src={topic.icon}
                  alt={topic.name}
                  width={25}
                  height={25}
                />
                <span
                  className={`font-semibold text-[16px] text-center 
                  ${isSelected ? "text-orange-600" : "text-[#767676]"}`}
                >
                  {topic.name}
                </span>
              </button>
            );
          })}
          <button
            onClick={showAllBlogs}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-orange-100 hover:border border-primary transition"
          >
            <span className="font-semibold text-[16px] text-[#767676]">
              All
            </span>
          </button>
        </div>
      </section>

      <div className="w-full flex flex-col laptop:flex-row gap-4 sm:gap-5 md:gap-6 px-3 sm:px-4 ">
        <div className="w-full laptop:w-2/3 desktop:ml-10">
          <BlogCardList blogs={filteredBlogs} />
        </div>
        <div className="w-full laptop:w-1/3 sm:mt-8 laptop:mt-0 items-center justify-center flex">
          <BlogsSidebar />
        </div>
      </div>
    </>
  );
};

export default TrendingTopics;
