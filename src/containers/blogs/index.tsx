import React from "react";
import HeroSectionBlog from "@/src/components/blogs/HeroSectionBlog";
import TrendingTopics from "@/src/components/blogs/TrendingTopics";
import { getAllBlogPosts } from "@/src/utils/contentful-clients";
import { formatBlogPosts } from "@/src/utils/helpers";
import EmailSubscribeSection from "@/src/components/project-detail/EmailSubscribeSection";
import { Reveal } from "@/src/components/motion/reveal";
import PageSection from "@/src/components/landing/page-section";

const Blogs = async () => {
  const blogs = await getAllBlogPosts();
  const formattedBlogs = formatBlogPosts(blogs);

  return (
    <div>
      <HeroSectionBlog />

      <PageSection dark>
        <Reveal amount={0.08}>
          <TrendingTopics blogs={formattedBlogs} />
        </Reveal>
      </PageSection>

      <PageSection>
        <Reveal amount={0.15}>
          <EmailSubscribeSection />
        </Reveal>
      </PageSection>
    </div>
  );
};

export default Blogs;
