import LandingHero from "@/src/components/landing/hero";
import TechStack from "@/src/components/landing/tech-stack";
import CaseStudies from "@/src/components/landing/case-studies";
import ValueBand from "@/src/components/landing/value-band";
import Difference from "@/src/components/landing/difference";
import Insights from "@/src/components/landing/insights";
import Proof from "@/src/components/landing/proof";
import ServicesGrid from "@/src/components/landing/services-grid";
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
      <ServicesGrid
        eyebrow="What we do"
        title="Software and AI services, end to end"
        description="From the first web app to production AI, one team covers design, engineering, data and operations."
        link={{ label: "See all services", href: "/services" }}
      />
      <Proof />
      <TechStack />
      <CaseStudies />
      <Difference />
      <Insights blogs={blogs} />
      <ValueBand />
    </>
  );
}
