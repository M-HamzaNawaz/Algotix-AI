import QuestionsSection from "@/src/components/services/QuestionsSection";
import ServicesBanner from "@/src/components/services/ServicesBanner";
import React from "react";
import LatestBlog from "@/src/components/services/latestBlog";
import OurServices from "@/src/components/services/ourServices";
import Workflow from "@/src/components/services/workflow";
import { getAllBlogPosts } from "@/src/utils/contentful-clients";
import { formatBlogPosts } from "@/src/utils/helpers";
import { Reveal } from "@/src/components/motion/reveal";

const Services = async () => {
  const blogs = await getAllBlogPosts();
  const formattedBlogs = formatBlogPosts(blogs);

  return (
    <div className="mx-auto">
      <ServicesBanner />

      <Reveal amount={0.1}>
        <Workflow />
      </Reveal>

      <Reveal amount={0.08}>
        <OurServices />
      </Reveal>

      <Reveal amount={0.1}>
        <QuestionsSection />
      </Reveal>

      <Reveal amount={0.1}>
        <LatestBlog blogs={formattedBlogs} />
      </Reveal>
    </div>
  );
};

export default Services;
