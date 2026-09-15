import BlogDetail from "@/src/containers/blog-detail";
import {
  fetchBlogPost,
  getLatestBlogPostSlugs,
} from "@/src/utils/contentful-clients";
import { formatSingleBlogPost } from "@/src/utils/helpers";
import { Metadata } from "next";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlogPost(slug);

  const formattedBlog = formatSingleBlogPost(blog);

  return {
    title: formattedBlog.title,
    alternates: {
      canonical: formattedBlog.slug,
    },
    openGraph: {
      title: formattedBlog.title,
      description:
        documentToPlainTextString(formattedBlog.body).slice(0, 160) + "...",
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getLatestBlogPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogDetail params={{ slug }} />;
}
