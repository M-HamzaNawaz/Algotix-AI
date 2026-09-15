import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import developmentIcon from "@/public/images/carousel/development.svg";
import mobileIcon from "@/public/images/carousel/mobile-app.png";
import extensionIcon from "@/public/images/carousel/extension.png";
import devopsIcon from "@/public/images/carousel/devops.png";
import aiIcon from "@/public/images/carousel/ai-assistant.png";
import blockchainIcon from "@/public/images/carousel/blockchain.png";
import cloudAutomationIcon from "@/public/images/carousel/cloud-sync.png";
import dataScienceIcon from "@/public/images/carousel/data-science.png";

interface Slide {
  title: string;
  description: string;
  icon: string | StaticImport | StaticImageData;
  slug: string;
}
export const slides: Slide[] = [
  {
    title: "Web Development",
    description:
      "Build fast, secure, and responsive websites using modern frameworks that deliver seamless user experiences across all devices and screen sizes.",
    icon: developmentIcon,
    slug: "web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Create powerful mobile apps for iOS and Android using native or cross-platform tools to deliver high performance and intuitive user interfaces.",
    icon: mobileIcon,
    slug: "mobile-app-development",
  },
  {
    title: "DevOps Services",
    description:
      "Streamline development cycles with CI/CD pipelines, automated testing, and scalable infrastructure for faster, more efficient software delivery.",
    icon: devopsIcon,
    slug: "DevOps",
  },
  {
    title: "Browser Extensions",
    description:
      "Develop smart, secure, and user-friendly extensions for Chrome, Firefox, and more to enhance browser capabilities and productivity.",
    icon: extensionIcon,
    slug: "browser-extensions",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Leverage advanced analytics, data visualization, and machine learning to extract actionable insights from raw, unstructured, or complex datasets.",
    icon: dataScienceIcon,
    slug: "data-science",
  },
  {
    title: "AI & Chatbot Solutions",
    description:
      "Build intelligent chatbots with natural language processing, automation, and API integration to enhance customer engagement and support.",
    icon: aiIcon,
    slug: "chat-bots",
  },
  {
    title: "Cloud & Automation",
    description:
      "Design secure, scalable cloud architectures with automated deployments using AWS, GCP, or Azure to boost efficiency and reduce operational costs.",
    icon: cloudAutomationIcon,
    slug: "cloud-automation",
  },
  {
    title: "Blockchain & Web3",
    description:
      "Create secure, decentralized applications and smart contracts for Ethereum, Solana, and other blockchain platforms to power the next-gen internet.",
    icon: blockchainIcon,
    slug: "blockchain-web3",
  },
];
