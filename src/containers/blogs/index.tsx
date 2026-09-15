import React from "react";
import HeroSectionBlog from "@/src/components/blogs/HeroSectionBlog";
import TrendingTopics from "@/src/components/blogs/TrendingTopics";
import { getAllBlogPosts } from "@/src/utils/contentful-clients";
import { formatBlogPosts } from "@/src/utils/helpers";
import EmailSubscribeSection from "@/src/components/project-detail/EmailSubscribeSection";
import { Reveal } from "@/src/components/motion/reveal";

const Blogs = async () => {
  const blogs = await getAllBlogPosts();
  const formattedBlogs = formatBlogPosts(blogs);

  return (
    <div>
      <HeroSectionBlog />

      <Reveal amount={0.08}>
        <TrendingTopics blogs={formattedBlogs} />
      </Reveal>

      <Reveal amount={0.15}>
        <EmailSubscribeSection className="mt-10" />
      </Reveal>
    </div>
  );
};

export default Blogs;
