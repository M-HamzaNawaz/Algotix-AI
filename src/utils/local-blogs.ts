import fs from "fs/promises";
import path from "path";
import { BLOCKS, type Document } from "@contentful/rich-text-types";

import type { DetailBlogPost } from "@/src/containers/blogs/types";

/**
 * Articles kept in the repo as Markdown, alongside the ones in Contentful.
 * Each file in src/content/blogs starts with a small front matter block:
 *
 *   ---
 *   title: "..."
 *   slug: "my-article"
 *   date: "2026-09-10"
 *   author: "Algotix AI Team"
 *   excerpt: "One or two sentences for the card."
 *   bannerImage: "/images/blogs/local/my-article.jpg"
 *   ---
 */
const BLOG_DIR = path.join(process.cwd(), "src", "content", "blogs");

/* Local posts have no rich-text body; an empty document keeps the type whole. */
const EMPTY_DOCUMENT: Document = {
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [],
};

function parseFrontMatter(raw: string): {
  meta: Record<string, string>;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line
      .slice(colon + 1)
      .trim()
      .replace(/^["'](.*)["']$/, "$1");
    if (key) meta[key] = value;
  }
  return { meta, body: match[2].trim() };
}

function toTime(date: string): number {
  const time = new Date(date).getTime();
  return Number.isNaN(time) ? 0 : time;
}

export async function getLocalBlogPosts(): Promise<DetailBlogPost[]> {
  let files: string[];
  try {
    files = await fs.readdir(BLOG_DIR);
  } catch {
    return [];
  }

  const posts: DetailBlogPost[] = [];
  for (const file of files) {
    if (!/\.mdx?$/.test(file)) continue;
    const raw = await fs.readFile(path.join(BLOG_DIR, file), "utf-8");
    const { meta, body } = parseFrontMatter(raw);
    const slug = meta.slug || file.replace(/\.mdx?$/, "");
    if (!meta.title) continue;
    posts.push({
      title: meta.title,
      slug,
      date: meta.date || "",
      author: meta.author || "",
      authorImage: meta.authorImage || "",
      bannerImage: meta.bannerImage || "",
      excerpt: meta.excerpt || "",
      body: EMPTY_DOCUMENT,
      content: body,
    });
  }
  return posts.sort((a, b) => toTime(b.date) - toTime(a.date));
}

export async function getLocalBlogPost(
  slug: string,
): Promise<DetailBlogPost | null> {
  const posts = await getLocalBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

/** Merges sources, newest first; the first occurrence of a slug wins. */
export function mergeBlogPosts(
  ...sources: DetailBlogPost[][]
): DetailBlogPost[] {
  const seen = new Set<string>();
  const merged: DetailBlogPost[] = [];
  for (const post of sources.flat()) {
    const key = post.slug || post.title;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(post);
  }
  return merged.sort((a, b) => toTime(b.date) - toTime(a.date));
}
