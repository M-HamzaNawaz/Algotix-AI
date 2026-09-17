import { Metadata } from "next";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import BlogDetail from "@/src/containers/blog-detail";
import {
  fetchBlogPost,
  getLatestBlogPostSlugs,
} from "@/src/utils/contentful-clients";
import { getLocalBlogPost, getLocalBlogPosts } from "@/src/utils/local-blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = (await fetchBlogPost(slug)) ?? (await getLocalBlogPost(slug));
  if (!blog) return { title: "Article not found" };

  const description =
    blog.excerpt || documentToPlainTextString(blog.body).slice(0, 160);

  return {
    title: blog.title,
    description,
    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const [remote, local] = await Promise.all([
    getLatestBlogPostSlugs(),
    getLocalBlogPosts(),
  ]);
  const slugs = new Set([...remote, ...local.map((post) => post.slug)]);
  return [...slugs].map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogDetail params={{ slug }} />;
}
