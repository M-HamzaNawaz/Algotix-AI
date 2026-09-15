import { BlogDetail, Topic } from "./types";

export const topics: Topic[] = [
  { name: "Technology", icon: "/images/blogs/technology.svg" },
  { name: "Travel", icon: "/images/blogs/travel.svg" },
  { name: "Sport", icon: "/images/blogs/sport.svg" },
  { name: "Business", icon: "/images/blogs/business.svg" },
  { name: "Trends", icon: "/images/blogs/trends.svg" },
  { name: "Management", icon: "/images/blogs/management.svg" },
  { name: "Startups", icon: "/images/blogs/startups.svg" },
  { name: "News", icon: "/images/blogs/news.svg" },
];

export const blogsData: BlogDetail[] = [
  {
    slug: "top-10-tech-innovations-2025",
    title: "Top 10 Tech Innovations to Watch in 2025",
    description:
      "Explore the groundbreaking technologies shaping the future — from AI to quantum computing.",
    category: {
      name: "Technology",
      icon: "/images/blogs/technology.svg",
    },
    images: {
      hero: "/images/blogs/blog-hero.png",
      thumbnail: "/images/blogs/blog-thumbnail.png",
    },
    sections: [
      {
        title: "Wireframing",
        content:
          "Wireframing is a Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      },
      {
        title: "Challenges",
        content:
          "Challenges Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      },
      {
        title: "Result",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      },
    ],
  },
];
