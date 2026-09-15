import { notFound } from "next/navigation";
import HeroSectionBlogDetail from "@/src/components/blog-detail/HeroSectionBlogDetail";
import BlogDetailSection from "@/src/components/blog-detail/BlogDetailSection";
import BlogsSidebar from "@/src/components/blogs/BlogsSidebar";
import EmailSubscribeSection from "@/src/components/project-detail/EmailSubscribeSection";
import { fetchBlogPost } from "@/src/utils/contentful-clients";

interface PageProps {
  params: { slug: string };
}

export default async function BlogDetail({ params }: PageProps) {
  const blog = await fetchBlogPost(params.slug);

  if (!blog) return notFound();

  return (
    <>
      <HeroSectionBlogDetail blog={blog} />
      <section className="w-full py-8 md:py-12">
        <div className="container mx-auto flex flex-col laptop:flex-row gap-6 lg:gap-8 px-4 sm:px-6">
          <div className="w-full laptop:w-2/3 laptop:ml-12">
            <BlogDetailSection blog={blog} />
          </div>
          <div className="w-full laptop:w-1/3 mt-6 laptop:mt-0">
            <BlogsSidebar />
          </div>
        </div>
      </section>
      <EmailSubscribeSection />
    </>
  );
}
