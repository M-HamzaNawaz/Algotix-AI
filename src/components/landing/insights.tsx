import Link from "next/link";
import { ArrowRight } from "lucide-react";

import BlogCard from "@/src/components/landing/blog-card";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import type { DetailBlogPost } from "@/src/containers/blogs/types";

export default function Insights({ blogs }: { blogs: DetailBlogPost[] }) {
  const posts = blogs.slice(0, 3);
  if (!posts.length) return null;

  return (
    <section className="bg-white py-20 tablet:py-28">
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10">
        <Reveal amount={0.2}>
          <div className="flex flex-col gap-6 tablet:flex-row tablet:items-end tablet:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                Insights
              </p>
              <h2 className="mt-4 max-w-2xl text-[28px] font-bold leading-tight text-[#14141D] tablet:text-4xl">
                Ideas worth building on
              </h2>
            </div>

            <Link
              href="/blogs"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#14141D] transition-colors duration-300 hover:text-primary"
            >
              All insights
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-12 grid gap-8 tablet:grid-cols-2 laptop:grid-cols-3"
          stagger={0.1}
          amount={0.08}
        >
          {posts.map((post) => (
            <RevealItem key={post.slug || post.title} distance={30}>
              <BlogCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
