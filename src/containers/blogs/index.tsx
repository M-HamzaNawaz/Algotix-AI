import Articles from "@/src/components/blogs-page/articles";
import BlogsHero from "@/src/components/blogs-page/blogs-hero";
import FeaturedPost from "@/src/components/blogs-page/featured-post";
import SubscribeBand from "@/src/components/landing/subscribe-band";
import { getAllBlogPosts } from "@/src/utils/contentful-clients";
import { formatBlogPosts } from "@/src/utils/helpers";
import { getLocalBlogPosts, mergeBlogPosts } from "@/src/utils/local-blogs";
import type { DetailBlogPost } from "./types";

/** Blog index in the landing recipe: dark hero, article grid, subscribe band. */
const Blogs = async () => {
  let remote: DetailBlogPost[] = [];
  try {
    remote = formatBlogPosts(await getAllBlogPosts());
  } catch {
    // Contentful unreachable: fall back to the articles kept in the repo.
  }
  const blogs = [...mergeBlogPosts(remote, await getLocalBlogPosts())].sort(
    (a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0),
  );
  const [featured, ...rest] = blogs;

  return (
    <>
      <BlogsHero />
      {featured && <FeaturedPost post={featured} />}
      <Articles blogs={rest} />
      <SubscribeBand />
    </>
  );
};

export default Blogs;
