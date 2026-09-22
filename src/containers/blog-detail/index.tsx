import Image from "next/image";
import { notFound } from "next/navigation";

import ArticleBody from "@/src/components/blog-detail-page/article-body";
import MarkdownBody from "@/src/components/blog-detail-page/markdown-body";
import { formatDate } from "@/src/components/landing/blog-card";
import PageHero from "@/src/components/landing/page-hero";
import PageSection from "@/src/components/landing/page-section";
import SubscribeBand from "@/src/components/landing/subscribe-band";
import { Reveal } from "@/src/components/motion/reveal";
import { fetchBlogPost } from "@/src/utils/contentful-clients";
import { getLocalBlogPost } from "@/src/utils/local-blogs";

interface PageProps {
  params: { slug: string };
}

/** One article: its banner as the hero, the body, then the subscribe band. */
export default async function BlogDetail({ params }: PageProps) {
  const blog =
    (await fetchBlogPost(params.slug)) ?? (await getLocalBlogPost(params.slug));
  if (!blog) return notFound();

  const date = formatDate(blog.date);
  const byline = [blog.author, date].filter(Boolean).join(" · ");

  return (
    <>
      <PageHero
        image={blog.bannerImage || "/images/heroes/blogs.jpg"}
        imageAlt={blog.title}
        eyebrow="Insights"
        title={blog.title}
        description={byline}
        secondary={{ label: "All articles", href: "/blogs" }}
      />

      <PageSection>
        <article className="mx-auto max-w-3xl">
          {(blog.author || date) && (
            <Reveal
              direction="right"
              distance={28}
              amount={0.3}
              className="mb-10 flex items-center gap-4 border-b border-[#E4E4E8] pb-8"
            >
              {blog.authorImage && (
                <span className="relative h-12 w-12 overflow-hidden rounded-full bg-[#F2F2F4]">
                  <Image
                    src={blog.authorImage}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
              )}
              <div>
                {blog.author && (
                  <p className="text-body font-semibold text-[#14141D]">
                    {blog.author}
                  </p>
                )}
                {date && (
                  <p className="text-small uppercase tracking-[0.14em] text-[#A0A4AB]">
                    {date}
                  </p>
                )}
              </div>
            </Reveal>
          )}
          <Reveal amount={0.05} distance={32} delay={0.15}>
            {blog.content ? (
              <MarkdownBody content={blog.content} />
            ) : (
              <ArticleBody blog={blog} />
            )}
          </Reveal>
        </article>
      </PageSection>

      <SubscribeBand />
    </>
  );
}
