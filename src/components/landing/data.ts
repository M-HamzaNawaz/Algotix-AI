import {
  Boxes,
  Cpu,
  Globe,
  Rocket,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------
   Hero
   ---------------------------------------------------------------------- */

export interface HeroSlide {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Software & AI Engineering",
    title: "Innovative Software Solutions,",
    titleAccent: "Powered by Intelligence.",
    description:
      "We combine AI, design, and engineering to turn bold ideas into business breakthroughs — architecting scalable digital products that deliver measurable results.",
    image: "/images/services/discovery_phase.jpg",
    imageAlt: "Algotix AI team collaborating around a table of laptops",
  },
  {
    eyebrow: "Data Science & AI",
    title: "Data that decides.",
    titleAccent: "Models that deliver.",
    description:
      "From data collection and preprocessing to model training and deployment, we build machine learning systems that hold up in production.",
    image: "/images/services/development_phase.jpg",
    imageAlt: "Engineer writing code across multiple monitors",
  },
  {
    eyebrow: "Product Design & Delivery",
    title: "Designed around people.",
    titleAccent: "Built to scale.",
    description:
      "Discovery, design, development, and live testing — a structured process that ships intuitive, accessible products on predictable timelines.",
    image: "/images/services/design_phase.jpg",
    imageAlt: "Designers mapping a product flow on a whiteboard",
  },
];

/* -------------------------------------------------------------------------
   Expertise links pinned under the hero
   ---------------------------------------------------------------------- */

export interface ExpertiseLink {
  label: string;
  href: string;
}

export const expertiseLinks: ExpertiseLink[] = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Data Science", href: "/services/data-science" },
  { label: "Generative AI", href: "/services/generative-ai" },
  { label: "DevOps", href: "/services/DevOps" },
  { label: "Cloud Automation", href: "/services/cloud-automation" },
];

/* -------------------------------------------------------------------------
   Technology stack
   ---------------------------------------------------------------------- */

export interface TechLogo {
  name: string;
  logo: string;
}

/* Filenames are case-sensitive on the server — these match public/images/technologies. */
export const techLogos: TechLogo[] = [
  { name: "React", logo: "/images/technologies/react.png" },
  { name: "Next.js", logo: "/images/technologies/nextjs.svg" },
  { name: "TypeScript", logo: "/images/technologies/typeScript.svg" },
  { name: "Node.js", logo: "/images/technologies/NodeJs.svg" },
  { name: "Python", logo: "/images/technologies/Python.svg" },
  { name: "Django", logo: "/images/technologies/django.png" },
  { name: "TensorFlow", logo: "/images/technologies/TensorFlow.svg" },
  { name: "PyTorch", logo: "/images/technologies/pytorch.png" },
  { name: "OpenAI", logo: "/images/technologies/openai.png" },
  { name: "AWS", logo: "/images/technologies/aws.png" },
  { name: "Kubernetes", logo: "/images/technologies/kubernetes.png" },
  { name: "Terraform", logo: "/images/technologies/terraform.png" },
  { name: "PostgreSQL", logo: "/images/technologies/PostgresSQL.svg" },
  { name: "MongoDB", logo: "/images/technologies/MongoDB.svg" },
  { name: "Flutter", logo: "/images/technologies/Flutter.svg" },
  { name: "Tailwind CSS", logo: "/images/technologies/tailwind.svg" },
];

/* -------------------------------------------------------------------------
   Differentiators
   ---------------------------------------------------------------------- */

import type { PatternKind } from "./patterns";

export interface Differentiator {
  icon: LucideIcon;
  /** Short category label shown above the title. */
  kicker: string;
  title: string;
  description: string;
  /** Tile colour and pattern tint. Each card gets its own so the grid reads as a set. */
  accent: string;
  pattern: PatternKind;
}

export const differentiators: Differentiator[] = [
  {
    icon: Rocket,
    kicker: "Team",
    title: "Expertise That Delivers",
    description:
      "Seasoned developers, AI engineers, and solution architects with proven experience across industries — turning complex challenges into reliable, scalable systems.",
    accent: "#FE5A01",
    pattern: "contours",
  },
  {
    icon: Boxes,
    kicker: "Approach",
    title: "Custom Solutions, No Compromises",
    description:
      "We don't believe in one-size-fits-all. Every product is tailored to your goals, whether that is a new AI model, a mobile app, or an integrated cloud platform.",
    accent: "#7F5BFF",
    pattern: "dotwave",
  },
  {
    icon: Globe,
    kicker: "Reach",
    title: "Global Standards, Local Commitment",
    description:
      "Based in Pakistan, delivering worldwide. Global quality with local agility, which means responsive support, efficient timelines, and cost-effective delivery.",
    accent: "#F5B301",
    pattern: "chevrons",
  },
  {
    icon: Cpu,
    kicker: "Intelligence",
    title: "AI at the Core",
    description:
      "Machine learning, generative AI, and NLP built into the product rather than bolted on, with MLOps practices that keep results reproducible.",
    accent: "#22C55E",
    pattern: "dots",
  },
  {
    icon: Workflow,
    kicker: "Process",
    title: "A Process You Can See",
    description:
      "Discovery and strategy, design, development, then live testing. Four clear stages, so you always know what is being built and why.",
    accent: "#2F80ED",
    pattern: "stripes",
  },
  {
    icon: ShieldCheck,
    kicker: "Quality",
    title: "Secure and Maintainable",
    description:
      "Rigorous testing, containerised deployments, and cloud monitoring keep what we ship resilient long after launch.",
    accent: "#EF4444",
    pattern: "dashes",
  },
];

/* -------------------------------------------------------------------------
   Proof points — these mirror the figures used elsewhere on the site.
   ---------------------------------------------------------------------- */

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "10Y", label: "of engineering experience" },
  { value: "30+", label: "companies partnered with" },
  { value: "50+", label: "customers served worldwide" },
];

/** Scrolling band under the stats. Capabilities, not office locations. */
export const capabilityMarquee: string[] = [
  "Web Development",
  "Mobile Apps",
  "Data Science",
  "Generative AI",
  "DevOps",
  "Cloud Automation",
  "Browser Extensions",
  "Blockchain & Web3",
  "Chat Bots",
  "Machine Learning",
];
