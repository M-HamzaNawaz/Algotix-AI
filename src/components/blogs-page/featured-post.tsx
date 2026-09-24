import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { excerpt, formatDate } from "@/src/components/landing/blog-card";
import PageSection from "@/src/components/landing/page-section";
import { Reveal } from "@/src/components/motion/reveal";
import type { DetailBlogPost } from "@/src/containers/blogs/types";

/**
 * The newest article as a wide spotlight: the picture slides in from the
 * left, the copy from the right, meeting in the middle.
 */
export default function FeaturedPost({ post }: { post: DetailBlogPost }) {
  const href = `/blogs/${post.slug}`;
  const summary = post.excerpt || excerpt(post, 220);

  return (
    <PageSection id="featured" className="border-b border-[#E4E4E8]">
      <div className="grid gap-10 laptop:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] laptop:items-center laptop:gap-16">
        <Reveal direction="right" distance={40} amount={0.2}>
          <Link
            href={href}
            className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-[#ECECEF] bg-[#F2F2F4] shadow-[0_40px_80px_-40px_rgba(11,11,18,0.35)]"
          >
            <Image
              src={post.bannerImage || "/images/heroes/blogs.jpg"}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </Reveal>

        <Reveal direction="left" distance={40} amount={0.2} delay={0.12}>
          <p className="text-label uppercase text-primary">Featured article</p>
          <p className="text-small mt-4 uppercase tracking-[0.14em] text-[#A0A4AB]">
            {[post.author, formatDate(post.date)].filter(Boolean).join(" · ")}
          </p>
          <h2 className="text-heading mt-4 text-[#14141D]">
            <Link
              href={href}
              className="transition-colors duration-300 hover:text-primary"
            >
              {post.title}
            </Link>
          </h2>
          {summary && (
            <p className="text-body mt-6 max-w-xl text-[#6B6F76]">{summary}</p>
          )}
          <Link
            href={href}
            className="text-label group mt-9 inline-flex items-center gap-3 rounded-control bg-primary px-8 py-4 uppercase text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF6A1A]"
          >
            Read the article
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </PageSection>
  );
}
