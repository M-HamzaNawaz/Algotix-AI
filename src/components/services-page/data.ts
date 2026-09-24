import {
  Blocks,
  Bot,
  Briefcase,
  Cloud,
  CodeXml,
  Database,
  Hammer,
  Monitor,
  PenTool,
  Puzzle,
  Rocket,
  Search,
  Server,
  Smartphone,
  Sparkles,
  UserPlus,
  Users,
  Building2,
  Coins,
  GraduationCap,
  HeartPulse,
  Truck,
  Megaphone,
  Recycle,
  type LucideIcon,
} from "lucide-react";

/** The nine top-level services, in the order the explorer lists them. */
export const primaryServiceSlugs = [
  "web-development",
  "mobile-app-development",
  "DevOps",
  "browser-extensions",
  "data-science",
  "chat-bots",
  "generative-ai",
  "cloud-automation",
  "blockchain-web3",
];

export const serviceIcons: Record<string, LucideIcon> = {
  "web-development": CodeXml,
  "mobile-app-development": Smartphone,
  DevOps: Server,
  "browser-extensions": Puzzle,
  "data-science": Database,
  "chat-bots": Bot,
  "generative-ai": Sparkles,
  "cloud-automation": Cloud,
  "blockchain-web3": Blocks,
};

/* Figures already used elsewhere on the site, plus the four-stage process. */
export const metrics = [
  { value: "10Y", label: "of engineering experience" },
  { value: "30+", label: "companies partnered with" },
  { value: "50+", label: "customers served worldwide" },
  { value: "4", label: "clear delivery stages" },
];

export interface DeliveryStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

/* The development process as described on the about page and README. */
export const deliverySteps: DeliveryStep[] = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "In-depth analysis to align the solution with your business objectives, identifying key requirements and crafting a strategic roadmap.",
  },
  {
    icon: PenTool,
    title: "Designing",
    description:
      "Intuitive, responsive interfaces that prioritise user experience and accessibility, agreed with you before a line of production code.",
  },
  {
    icon: Hammer,
    title: "Development",
    description:
      "Robust, high-performance applications built with the latest technologies and best practices, shipped in focused iterations.",
  },
  {
    icon: Rocket,
    title: "Live Testing",
    description:
      "Rigorous testing for a smooth, optimised launch, with performance and reliability checked before and after go-live.",
  },
];

export interface TechItem {
  name: string;
  logo: string;
}

export interface TechCategory {
  name: string;
  icon: LucideIcon;
  items: TechItem[];
}

const T = "/images/technologies/";

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    icon: Monitor,
    items: [
      { name: "React", logo: `${T}react.png` },
      { name: "Next.js", logo: `${T}nextjs.svg` },
      { name: "Vue.js", logo: `${T}Vue.svg` },
      { name: "Angular", logo: `${T}angular.png` },
      { name: "TypeScript", logo: `${T}typeScript.svg` },
      { name: "Tailwind CSS", logo: `${T}tailwind.svg` },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", logo: `${T}NodeJs.svg` },
      { name: "Python", logo: `${T}Python.svg` },
      { name: "Django", logo: `${T}django.png` },
      { name: "FastAPI", logo: `${T}FastAPI.svg` },
      { name: "NestJS", logo: `${T}nestjs.svg` },
      { name: "Laravel", logo: `${T}laravel.png` },
      { name: ".NET Core", logo: `${T}dotnet.png` },
    ],
  },
  {
    name: "Database",
    icon: Database,
    items: [
      { name: "PostgreSQL", logo: `${T}PostgresSQL.svg` },
      { name: "MySQL", logo: `${T}mysql.svg` },
      { name: "MongoDB", logo: `${T}MongoDB.svg` },
      { name: "Firebase", logo: `${T}firebase.png` },
    ],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    items: [
      { name: "Flutter", logo: `${T}Flutter.svg` },
      { name: "React Native", logo: `${T}react.png` },
      { name: "Kotlin", logo: `${T}Kotlin.svg` },
      { name: "Swift", logo: `${T}Swift.svg` },
      { name: "Android", logo: `${T}Android.svg` },
      { name: "Dart", logo: `${T}Dart.svg` },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    items: [
      { name: "AWS", logo: `${T}aws.png` },
      { name: "Azure", logo: `${T}Azure.svg` },
      { name: "Google Cloud", logo: `${T}Google%20Cloud.svg` },
      { name: "Kubernetes", logo: `${T}kubernetes.png` },
      { name: "Terraform", logo: `${T}terraform.png` },
      { name: "Jenkins", logo: `${T}Jenkins.svg` },
      { name: "GitHub", logo: `${T}GitHub.svg` },
    ],
  },
  {
    name: "AI & ML",
    icon: Sparkles,
    items: [
      { name: "TensorFlow", logo: `${T}TensorFlow.svg` },
      { name: "PyTorch", logo: `${T}pytorch.png` },
      { name: "OpenAI", logo: `${T}openai.png` },
      { name: "Hugging Face", logo: `${T}HuggingFace.svg` },
      { name: "scikit-learn", logo: `${T}scikit-learn.svg` },
      { name: "pandas", logo: `${T}pandas.png` },
      { name: "NumPy", logo: `${T}NumPy.svg` },
    ],
  },
  {
    name: "Web3",
    icon: Blocks,
    items: [
      { name: "Solidity", logo: `${T}Solidity.svg` },
      { name: "Ethereum", logo: `${T}ethereum.png` },
      { name: "Polygon", logo: `${T}Polygon.svg` },
      { name: "Hardhat", logo: `${T}hardhat.svg` },
    ],
  },
];

export interface EngagementModel {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Who the model suits. */
  bestFor: string;
  /** What comes with it. */
  includes: string[];
}

/* The three ways of working offered on the contact form. */
export const engagementModels: EngagementModel[] = [
  {
    icon: UserPlus,
    title: "Staff Augmentation",
    description:
      "Specialised engineers integrated directly into your team, adding capacity without the hiring overhead.",
    bestFor: "Teams that need senior capacity quickly",
    includes: [
      "Engineers embedded in your team",
      "Your tools, your process, your rituals",
      "Scale up or down as the roadmap moves",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "A long-term, cross-functional team aligned to your product roadmap, working as an extension of your company.",
    bestFor: "Products with a long roadmap",
    includes: [
      "Design, engineering and QA in one squad",
      "A roadmap we own together",
      "A stable team whose context compounds",
    ],
  },
  {
    icon: Briefcase,
    title: "Fixed Gigs",
    description:
      "A clearly scoped project delivered end to end, from planning through deployment, on an agreed price and timeline.",
    bestFor: "Clearly scoped deliverables",
    includes: [
      "Fixed scope, price and timeline",
      "Discovery through deployment",
      "Handover with documentation",
    ],
  },
];

/**
 * One photo per service for the explorer panel. All are Unsplash photos
 * (Unsplash licence: free to use, no attribution required); the source photo
 * id is noted so any of them can be swapped later.
 */
export const serviceImages: Record<string, { src: string; alt: string }> = {
  "web-development": {
    // unsplash photo-1487014679447-9f8336841d58
    src: "/images/services/explorer/web-development.jpg",
    alt: "Laptop on a desk showing a product website",
  },
  "mobile-app-development": {
    // unsplash photo-1556656793-08538906a9f8
    src: "/images/services/explorer/mobile-app-development.jpg",
    alt: "Smartphones laid out on a desk",
  },
  DevOps: {
    // unsplash photo-1544197150-b99a580bb7a8
    src: "/images/services/explorer/devops.jpg",
    alt: "Network patch panel with connected cables",
  },
  "browser-extensions": {
    // unsplash photo-1481487196290-c152efe083f5
    src: "/images/services/explorer/browser-extensions.jpg",
    alt: "Laptop with a website open in the browser",
  },
  "data-science": {
    // unsplash photo-1551288049-bebda4e38f71
    src: "/images/services/explorer/data-science.jpg",
    alt: "Analytics dashboard with charts on a monitor",
  },
  "chat-bots": {
    // unsplash photo-1485827404703-89b55fcc595e
    src: "/images/services/explorer/chat-bots.jpg",
    alt: "Friendly humanoid robot",
  },
  "generative-ai": {
    // unsplash photo-1677442136019-21780ecad995
    src: "/images/services/explorer/generative-ai.jpg",
    alt: "Three-dimensional AI letters over a circuit pattern",
  },
  "cloud-automation": {
    // unsplash photo-1558494949-ef010cbdcc31
    src: "/images/services/explorer/cloud-automation.jpg",
    alt: "Rows of servers in a data centre",
  },
  "blockchain-web3": {
    // unsplash photo-1639322537228-f710d846310a
    src: "/images/services/explorer/blockchain-web3.jpg",
    alt: "Chain of linked blocks rendered in 3D",
  },
};

export interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  /** A real case study on the site that backs the claim up. */
  caseStudy: { name: string; slug: string };
}

/* Sectors where we have shipped products. Every entry points at a case study
   from src/containers/project-detail/data.ts, so nothing here is unbacked. */
export const industries: Industry[] = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Hiring and workflow platforms that connect healthcare professionals with the organisations that need them.",
    caseStudy: { name: "Medical Jobs Portal", slug: "medical-platform" },
  },
  {
    icon: Coins,
    title: "Fintech & Web3",
    description:
      "Token swap and liquidity tools for decentralised trading, with clear and dependable transaction flows.",
    caseStudy: { name: "Token Swap & LP Tool", slug: "ecommerce-platform" },
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Alerting and communication tools that let school administrators reach the right people in an emergency.",
    caseStudy: { name: "School Alert System", slug: "crm-solution" },
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Operations software that keeps dispatch, jobs and fleets moving for companies on the road.",
    caseStudy: { name: "Towing Management System", slug: "gaming-utility-app" },
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Negotiation and deal management platforms that bring buyers, sellers and offers into one place.",
    caseStudy: {
      name: "Property Negotiation Platform",
      slug: "customer-support-tool",
    },
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "AI assistants that take repetitive work off your team, such as transcribing documents accurately at scale.",
    caseStudy: { name: "AI Document Transcription Tool", slug: "ai-assistant" },
  },
  {
    icon: Megaphone,
    title: "Sales & Marketing",
    description:
      "AI-powered outreach tools that plan, schedule and automate campaigns and customer communication.",
    caseStudy: { name: "AI Outreach Tool", slug: "ai-dashboard" },
  },
  {
    icon: Recycle,
    title: "IT Services",
    description:
      "Professional marketing sites for IT asset disposition and decommissioning providers.",
    caseStudy: { name: "ITAD Landing Page", slug: "ecommerce-solution" },
  },
];
