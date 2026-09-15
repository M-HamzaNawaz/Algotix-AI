import { projectsProps } from "./types";

const filters = [
  "All",
  "Technology",
  "CRM",
  "E-commerce",
  "Customer Support",
  "Gaming",
  "Medical",
];
const projects: projectsProps[] = [
  {
    id: 1,
    category: "Medical",
    name: "Medical Jobs Portal",
    year: "2023-2024",
    // logo: "/images/projects/radiology.PNG",
    image: "/images/project-detail/radiology-image.png",
    slug: "medical-platform",
  },
  {
    id: 2,
    category: "Technology",
    name: "Token Swap & LP Tool",
    year: "2023-2024",
    // logo: "/images/projects/cswap-logo.png",
    image: "/images/projects/Cswap-dex.jpg",
    slug: "ecommerce-platform",
  },
  {
    id: 3,
    category: "Technology",
    name: "AI Document Transcription Tool",
    year: "2023-2024",
    image: "/images/project-detail/leo-ai.png",
    slug: "ai-assistant",
  },
  {
    id: 4,
    category: "Technology",
    name: "ITAD Landing Page",
    year: "2023-2024",
    image: "/images/project-detail/oceantech.png",
    slug: "ecommerce-solution",
  },
  {
    id: 6,
    category: "Technology",
    name: "Towing Management System",
    year: "2023-2024",
    image: "/images/project-detail/relay-tow.png",
    slug: "gaming-utility-app",
  },
  {
    id: 7,
    category: "Technology",
    name: "School Alert System",
    year: "2023-2024",
    image: "/images/project-detail/student-sheild.png",
    slug: "crm-solution",
  },
  {
    id: 8,
    category: "Technology",
    name: "Property Negotiation Platform",
    year: "2023-2024",
    image: "/images/project-detail/truofer.png",
    slug: "customer-support-tool",
  },
];

export { filters, projects };

export const faqData = [
  {
    question: "What services does Algotix AI provide?",
    answer:
      "We offer a full range of services including AI and machine learning development, custom software and app development, data analytics, cloud infrastructure, automation tools, and system integrations.",
  },
  {
    question: "Do you work with clients outside of Pakistan?",
    answer:
      "Yes, Algotix AI partners with clients globally. We provide remote development, consulting, and support to organizations across industries and time zones.",
  },
  {
    question: "Can I hire your team for a specific module or feature?",
    answer:
      "Absolutely. We offer flexible engagement models and can work on individual components, integrations, or full end-to-end development depending on your needs.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we offer ongoing support, performance monitoring, and maintenance services to ensure your software runs smoothly and stays updated over time.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Our solutions are industry-agnostic, but we have strong experience in fintech, healthcare, e-commerce, education, logistics, and enterprise automation.",
  },
  {
    question: "How do you ensure the security of software and data?",
    answer:
      "We follow best practices in secure coding, data encryption, and compliance standards. Security is integrated into every stage of our development process.",
  },
  {
    question: "Can you build AI solutions tailored to my business needs?",
    answer:
      "Yes. We specialize in creating custom AI and ML models that are trained and optimized for your specific workflows, data, and goals.",
  },
];
