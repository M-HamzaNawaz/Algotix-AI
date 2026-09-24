import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import BlogCard, {
  excerpt,
  formatDate,
} from "@/src/components/landing/blog-card";
import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import type { DetailBlogPost } from "@/src/containers/blogs/types";

/**
 * The article index as a magazine: two large cards lead, then the rest run
 * down the page as ruled rows with a small picture, so the list reads as
 * one index rather than a sheet of equal tiles.
 */
export default function Articles({ blogs }: { blogs: DetailBlogPost[] }) {
  const lead = blogs.slice(0, 2);
  const rest = blogs.slice(2);

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
        <>
          <RevealGroup
            className="mt-14 grid gap-8 tablet:grid-cols-2"
            stagger={0.14}
            amount={0.08}
          >
            {lead.map((post, i) => (
              <RevealItem
                key={post.slug || post.title}
                className="h-full"
                distance={30}
                direction={i === 0 ? "right" : "left"}
              >
                <BlogCard post={post} />
              </RevealItem>
            ))}
          </RevealGroup>

          {rest.length > 0 && (
            <RevealGroup
              as="ul"
              className="relative mt-14 border-t border-[#E4E4E8]"
              stagger={0.09}
              amount={0.08}
            >
              <DrawLine
                axis="x"
                delay={0.1}
                className="absolute -top-px left-0 h-px w-full bg-primary"
              />
              {rest.map((post) => {
                const date = formatDate(post.date);
                return (
                  <RevealItem
                    as="li"
                    key={post.slug || post.title}
                    direction="up"
                    distance={20}
                    className="border-b border-[#E4E4E8]"
                  >
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="group grid items-center gap-5 py-6 tablet:grid-cols-[7rem_minmax(0,1fr)_2.5rem] tablet:gap-8 laptop:grid-cols-[7rem_10rem_minmax(0,1fr)_2.5rem]"
                    >
                      <span className="relative aspect-[16/10] w-28 overflow-hidden rounded-lg bg-[#F2F2F4] tablet:aspect-[4/3]">
                        <Image
                          src={post.bannerImage || "/images/blogs/blog-1.png"}
                          alt=""
                          fill
                          sizes="112px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </span>
                      <span className="text-label uppercase text-[#A0A4AB] laptop:pt-0.5">
                        {date}
                      </span>
                      <span className="min-w-0">
                        <span className="text-subheading block text-[#14141D] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:text-primary">
                          {post.title}
                        </span>
                        <span className="text-small mt-1.5 line-clamp-2 block text-[#6B6F76]">
                          {post.excerpt || excerpt(post, 160)}
                        </span>
                      </span>
                      <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#14141D]/15 text-[#14141D] transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white tablet:flex">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          )}
        </>
      )}
    </PageSection>
  );
}
