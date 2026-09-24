import Link from "next/link";
import { ArrowRight } from "lucide-react";

import BlogCard from "@/src/components/landing/blog-card";
import PageSection from "@/src/components/landing/page-section";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import type { DetailBlogPost } from "@/src/containers/blogs/types";

/** A few more articles under a post, in the insights card. */
export default function RelatedPosts({ posts }: { posts: DetailBlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <PageSection className="border-t border-[#E4E4E8]" id="more-articles">
      <Reveal amount={0.25}>
        <div className="flex flex-col gap-6 tablet:flex-row tablet:items-end tablet:justify-between">
          <div>
            <p className="text-label uppercase text-primary">Keep reading</p>
            <h2 className="text-heading mt-4 text-[#14141D]">
              More from the blog
            </h2>
          </div>
          <Link
            href="/blogs"
            className="text-small group inline-flex shrink-0 items-center gap-2 font-semibold text-[#14141D] transition-colors duration-300 hover:text-primary"
          >
            All articles
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <RevealGroup
        className="mt-12 grid gap-8 tablet:grid-cols-2 laptop:grid-cols-3"
        stagger={0.14}
        amount={0.08}
      >
        {posts.map((post, i) => (
          <RevealItem
            key={post.slug || post.title}
            className="h-full"
            distance={30}
            direction={
              i === 0 ? "right" : i === posts.length - 1 ? "left" : "up"
            }
          >
            <BlogCard post={post} />
          </RevealItem>
        ))}
      </RevealGroup>
    </PageSection>
  );
}
