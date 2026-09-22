import BlogCard from "@/src/components/landing/blog-card";
import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import type { DetailBlogPost } from "@/src/containers/blogs/types";

/** Every published article as a card grid. */
export default function Articles({ blogs }: { blogs: DetailBlogPost[] }) {
  return (
    <PageSection id="articles">
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="Latest articles"
          title="From the Algotix AI team"
          description="Practical writing on the tools we use, the systems we build and what we learn along the way."
        />
      </Reveal>

      {blogs.length === 0 ? (
        <p className="text-body mt-14 text-center text-[#6B6F76]">
          No articles published yet. Check back soon.
        </p>
      ) : (
        <RevealGroup
          className="mt-14 grid gap-8 tablet:grid-cols-2 laptop:grid-cols-3"
          stagger={0.08}
          amount={0.05}
        >
          {blogs.map((post) => (
            <RevealItem
              key={post.slug || post.title}
              className="h-full"
              distance={30}
            >
              <BlogCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      )}
    </PageSection>
  );
}
