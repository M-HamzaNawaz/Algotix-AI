export interface Topic {
  name: string;
  icon: string;
}

export interface BlogCard {
  id: number;
  slug: string;
  image: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  hasExternalLink?: boolean;
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
import linkedInLogo from "@/public/linkedin logo.svg";
import facebookLogo from "@/public/facebook logo.svg";
import twitterLogo from "@/public/Twitter logo.svg";
import instagramLogo from "@/public/instagram logo.svg";
import aboutLogo from "@/public/images/blogs/aboutLogo.svg";

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

export const blogs: BlogCard[] = [
  {
    id: 1,
    slug: "top-10-tech-innovations-2025",
    image: "/images/blogs/blog-1.png",
    date: "February 12, 2024",
    title: "Top 10 Tech Innovations to Watch in 2025",
    description:
      "Explore the groundbreaking technologies shaping the future — from AI to quantum computing.",
    tags: ["Technology", "Trends"],
  },
  {
    id: 2,
    slug: "top-10-tech-innovations-2025",
    image: "/images/blogs/blog-2.png",
    date: "February 14, 2024",
    title: "The Future of Remote Startups",
    description:
      "Remote work is transforming how startups operate and grow in today's fast-paced world.",
    tags: ["Startups", "Business"],
  },
  {
    id: 3,
    slug: "top-10-tech-innovations-2025",
    image: "/images/blogs/blog-3.png",
    date: "February 15, 2024",
    title: "2025's Top Travel Destinations",
    description:
      "Plan your next adventure with these trending destinations around the globe.",
    tags: ["Travel", "Trends"],
  },
  {
    id: 4,
    slug: "top-10-tech-innovations-2025",
    image: "/images/blogs/blog-4.png",
    date: "February 18, 2024",
    title: "Leadership Lessons in Modern Management",
    description:
      "Discover essential strategies to lead and manage teams effectively in the digital age.",
    tags: ["Management", "Business"],
  },
  {
    id: 5,
    slug: "top-10-tech-innovations-2025",
    image: "/images/blogs/blog-5.png",
    date: "February 20, 2024",
    title: "Breaking News: AI Disrupting Sports Training",
    description:
      "From performance analytics to injury prevention — how AI is reshaping the world of sports.",
    tags: ["Sport", "Technology"],
  },
  {
    id: 6,
    slug: "top-10-tech-innovations-2025",
    image: "/images/blogs/blog-6.png",
    date: "February 22, 2024",
    title: "Latest in Global Business Trends",
    description:
      "Get insights into the emerging trends transforming the global business landscape.",
    tags: ["Business", "News"],
  },
  {
    id: 7,
    slug: "top-10-tech-innovations-2025",
    image: "/images/blogs/blog-3.png",
    date: "February 25, 2024",
    title: "Startup News: Unicorns of 2025",
    description:
      "These startups are making waves — here's what makes them the next big thing.",
    tags: ["Startups", "News"],
  },
];

export const aboutInfo = {
  name: "Algotix Blogs",
  type: "Software House",
  description:
    "Algotix Blogs is your go-to platform for insights into technology, business, startups, and trends. Discover expert perspectives, innovative ideas, and the latest updates shaping the future.",
  location: "New York, USA",
  logo: aboutLogo,
};

export const socialLinks = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/algotixai",
    logo: facebookLogo,
  },
  {
    title: "Twitter / X",
    link: "https://www.twitter.com/algotixai",
    logo: twitterLogo,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/algotix",
    logo: linkedInLogo,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/algotix.ai",
    logo: instagramLogo,
  },
];

export const techData = {
  techIcons: [
    "/images/project-detail/react-icon.svg",
    "/images/project-detail/django-icon.svg",
    "/images/project-detail/figma-icon.svg",
  ],
  techNames: ["React", "Django", "Figma"],
  description: "Organize, track, and collaborate on projects easily.",
};

export const getTechnologies = (): Technology[] => {
  return techData.techIcons.map((icon, index) => ({
    icon: icon,
    name: techData.techNames[index],
    description: techData.description,
  }));
};

export const blogData: BlogPost[] = [
  {
    title: "Trends for 2024",
    slug: "trends-for-2024",
    date: "2024-01-10",
    description: "Organize, track, and collaborate on projects easily.",
    author: "Algotix Team",
    tags: ["Trends", "2024"],
    hasExternalLink: true,
  },
  {
    title: "Latest Tech Gadgets",
    slug: "latest-tech-gadgets",
    date: "2024-01-15",
    description: "Organize, track, and collaborate on projects easily.",
    author: "Algotix Team",
    tags: ["Tech", "Gadgets"],
    hasExternalLink: true,
  },
  {
    title: "Trends for 2024",
    slug: "trends-for-2024-2",
    date: "2024-01-20",
    description: "Organize, track, and collaborate on projects easily.",
    author: "Algotix Team",
    tags: ["Trends", "2024"],
    hasExternalLink: true,
  },
  {
    title: "Latest Tech Gadgets",
    slug: "latest-tech-gadgets-2",
    date: "2024-01-25",
    description: "Organize, track, and collaborate on projects easily.",
    author: "Algotix Team",
    tags: ["Tech", "Gadgets"],
    hasExternalLink: true,
  },
];

export const featuredPostsData: Post[] = [
  {
    id: 1,
    title: "The Code Behind the Curtain: How Tech Shapes Our World",
    date: "February 12, 2024",
    image: "/images/blogs/blog-6.png",
    categories: ["Tech", "News"],
  },
  {
    id: 2,
    title: "Emerging Technologies to Watch in 2024",
    date: "March 5, 2024",
    image: "/images/blogs/blog-2.png",
    categories: ["Tech", "Innovation"],
  },
  {
    id: 3,
    title: "AI Revolution: The Impact on Modern Industries",
    date: "April 2, 2024",
    image: "/images/blogs/blog-3.png",
    categories: ["AI", "Business"],
  },
];
