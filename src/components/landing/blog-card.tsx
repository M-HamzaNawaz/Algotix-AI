import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import type { DetailBlogPost } from "@/src/containers/blogs/types";

const FALLBACK_IMAGE = "/images/blogs/blog-1.png";

/** Fixed locale and zone so the server-rendered date never drifts. */
export function formatDate(value: string): string {
  const parsed = new Date(value);
  if (!value || Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function excerpt(post: DetailBlogPost, length = 132): string {
  try {
    const text = documentToPlainTextString(post.body);
    return text.length > length ? `${text.slice(0, length).trimEnd()}…` : text;
  } catch {
    return "";
  }
}

/** The article card used on the landing page and the blog index. */
export default function BlogCard({ post }: { post: DetailBlogPost }) {
  return (
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
          {post.excerpt || excerpt(post)}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Read more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
