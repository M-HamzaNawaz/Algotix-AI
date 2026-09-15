import { createClient, EntrySkeletonType } from "contentful";
import { DetailBlogPost } from "../containers/blogs/types";
import { formatBlogPosts } from "./helpers";

const env = process.env;

// Global client setup for default use
const client = createClient({
  space: env.CONTENTFUL_SPACE_ID || "",
  accessToken: env.CONTENTFUL_DELIVERY_ACCESS_TOKEN || "",
  environment: env.CONTENTFUL_ENVIRONMENT || "",
  host: "cdn.contentful.com",
});

// Function to create a Contentful client dynamically
export const contentfulClient = () => {
  return createClient({
    space: env.CONTENTFUL_SPACE_ID || "",
    accessToken: env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
    environment: env.CONTENTFUL_ENVIRONMENT || "",
    host: "cdn.contentful.com",
  });
};

// Function to fetch a blog post by custom ID field
export const getBlogPost = async (slug: string | number) => {
  try {
    const localClient = contentfulClient();
    const entries = await localClient.getEntries({
      content_type: "algotixBlogs",
      "fields.id": slug,
      limit: 1,
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};

// Function to fetch a single entry by ID (also renamed the client variable inside function)
export const getEntry = async <T extends EntrySkeletonType>(
  entryId: string,
) => {
  try {
    const localClient = contentfulClient(); // Rename the client to avoid shadowing
    return await localClient.getEntry<T>(entryId);
  } catch (error) {
    console.error("Error fetching entry:", error);
    return null;
  }
};

// Function to fetch entries of a specific content type
export const getEntries = async <T extends EntrySkeletonType>(
  contentType: string,
) => {
  try {
    const localClient = contentfulClient(); // Rename the client to avoid shadowing
    const entries = await localClient.getEntries<T>({
      content_type: contentType,
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching entries:", error);
    return [];
  }
};

export async function fetchBlogPost(
  slug: string,
): Promise<DetailBlogPost | null> {
  try {
    const localClient = createClient({
      space: env.CONTENTFUL_SPACE_ID!,
      accessToken: env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
      host: "cdn.contentful.com",
    });

    const res = await localClient.getEntries({
      content_type: "algotixBlogs",
      "fields.slug": slug,
      limit: 1,
    });

    if (!res.items.length) return null;

    // Format the posts properly
    const formattedPosts = formatBlogPosts(
      res.items as Array<Record<string, unknown>>,
    );
    return formattedPosts.length ? formattedPosts[0] : null; // Return the first post or null if not found
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getAllBlogPosts() {
  const localClient = contentfulClient(); // Rename the client to avoid shadowing
  const res = await localClient.getEntries({ content_type: "algotixBlogs" });
  return res.items;
}

export async function getLatestBlogPostSlugs(): Promise<string[]> {
  try {
    const localClient = contentfulClient();
    const res = await localClient.getEntries({
      content_type: "algotixBlogs",
      order: ["-sys.createdAt"],
      limit: 15,
      select: ["fields"],
    });

    return res.items.map((item) => item.fields.slug as string);
  } catch (error) {
    console.error("Error fetching latest blog post slugs:", error);
    return [];
  }
}

export default client;
