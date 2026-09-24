import LandingHero from "@/src/components/landing/hero";
import TechStack from "@/src/components/landing/tech-stack";
import CaseStudies from "@/src/components/landing/case-studies";
import ValueBand from "@/src/components/landing/value-band";
import Difference from "@/src/components/landing/difference";
import Insights from "@/src/components/landing/insights";
import Proof from "@/src/components/landing/proof";
import ServiceShowcase from "@/src/components/landing/service-showcase";
import type { DetailBlogPost } from "@/src/containers/blogs/types";
import { getAllBlogPosts } from "@/src/utils/contentful-clients";
import { formatBlogPosts } from "@/src/utils/helpers";
import { getLocalBlogPosts, mergeBlogPosts } from "@/src/utils/local-blogs";

/**
 * The insights strip is a nice-to-have, so a Contentful outage must not take
 * the whole landing page down with it.
 */
async function loadInsights(): Promise<DetailBlogPost[]> {
  let remote: DetailBlogPost[] = [];
  try {
    remote = formatBlogPosts(await getAllBlogPosts());
  } catch (error) {
    console.error("Landing page: could not load blog posts.", error);
  }
  return mergeBlogPosts(remote, await getLocalBlogPosts());
}

export default async function Home() {
  const blogs = await loadInsights();

  return (
    <>
      <LandingHero />
      <ServiceShowcase />
      <Proof />
      <TechStack />
      <CaseStudies />
      <Difference />
      <Insights blogs={blogs} />
      <ValueBand />
    </>
  );
}
