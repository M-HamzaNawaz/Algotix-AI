import { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  body: Document;
  author: string;
  authorImage: string;
  bannerImage: string;
  hasExternalLink?: boolean;
  description?: string;
}

export interface BlogPostFields {
  title: string;
  slug: string;
  date: string;
  bannerImage: string;
  body: Document;
  author: string;
  authorImage: string;
}

export interface BlogCard {
  id: number;
  slug: string;
  image: string;
  date: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface DetailBlogPost {
  title: string;
  slug: string;
  author: string;
  authorImage: string;
  bannerImage: string;
  date: string;
  body: Document;
  tags?: string[];
  /** Markdown source, for posts kept in the repo under src/content/blogs. */
  content?: string;
  /** Short summary for cards; derived from the body when absent. */
  excerpt?: string;
}

export interface Topic {
  name: string;
  icon: string;
}

export interface Technology {
  icon: string;
  name: string;
  description: string;
}

export interface Post {
  id: number;
  title: string;
  date: string;
  image: string;
  categories: string[];
}
