/* eslint-disable @typescript-eslint/no-explicit-any */
import { twMerge } from "tailwind-merge";
import { DetailBlogPost } from "../containers/blogs/types";

/**
 * Concatenates truthy classes into a space-separated string.
 *
 * @param classes - The classes to concatenate.
 * @returns The concatenated classes.
 */
export const clx = (...classes: (string | boolean | undefined)[]): string => {
  return twMerge(classes.filter(Boolean).join(" "));
};

export interface BlogPostData {
  title: string;
  slug: string;
  date: string;
  body: Document;
  author: string;
  authorImage: string;
  bannerImage: string;
}

export function formatBlogPosts(
  blogPosts: Record<string, any>[],
): DetailBlogPost[] {
  return blogPosts.map((post) => ({
    title: post.fields.title || "",
    slug: post.fields.slug || "",
    date: post.fields.date || "",
    body: post.fields.body,
    author: post.fields.author || "",
    authorImage: post.fields.authorImage?.fields?.file?.url
      ? `https:${post.fields.authorImage.fields.file.url}`
      : "",
    bannerImage: post.fields.bannerImage?.fields?.file?.url
      ? `https:${post.fields.bannerImage.fields.file.url}`
      : "",
  }));
}

export function formatSingleBlogPost(post: any): DetailBlogPost {
  return {
    title: post.title || "",
    slug: post.slug || "",
    date: post.date || "",
    body: post.body,
    author: post.author || "",
    authorImage: post.authorImage?.fields?.file?.url
      ? `https:${post.authorImage.fields.file.url}`
      : "",
    bannerImage: post.bannerImage?.fields?.file?.url
      ? `https:${post.bannerImage.file.url}`
      : "",
  };
}
