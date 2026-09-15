import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import { Reveal, RevealGroup, RevealItem } from "@/src/components/motion/reveal";
import type { DetailBlogPost } from "@/src/containers/blogs/types";

const FALLBACK_IMAGE = "/images/blogs/blog-1.png";

/** Fixed locale and zone so the server-rendered date never drifts. */
function formatDate(value: string): string {
  const parsed = new Date(value);
  if (!value || Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function excerpt(post: DetailBlogPost): string {
  try {
    const text = documentToPlainTextString(post.body);
    return text.length > 132 ? `${text.slice(0, 132).trimEnd()}…` : text;
  } catch {
    return "";
  }
}

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
              <Link
                href={`/blogs/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#ECECEF] bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.4)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F2F4]">
                  <Image
                    src={post.bannerImage || FALLBACK_IMAGE}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {formatDate(post.date) && (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A0A4AB]">
                      {formatDate(post.date)}
                    </p>
                  )}

                  <h3 className="mt-3 text-lg font-semibold leading-snug text-[#14141D] transition-colors duration-300 group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B6F76]">
                    {excerpt(post)}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
