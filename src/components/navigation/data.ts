import { routes } from "@/src/constants/routes";
import linkedInLogo from "@/public/linkedin logo.svg";
import facebookLogo from "@/public/facebook logo.svg";
import instagramLogo from "@/public/instagram logo.svg";
import location from "@/public/location.svg";
import email from "@/public/email.svg";
// import phone from "@/public/phone.svg";
import {
  StaticImport,
  StaticImageData,
} from "next/dist/shared/lib/get-img-props";

type FooterDataType = {
  logo: {
    subtitle: string;
  };
  links: {
    navigation: NavLinksType[];
    services: NavLinksType[];
    company: NavLinksType[];
    misc: NavLinksType[];
    contact: NavLinksType[];
  };
  copyright: string;
  careersLink: NavLinksType;
  social: SocialItemType[];
};

type SocialItemType = {
  logo: string;
  link: string;
  title: string;
};

export type NavLinksType = {
  icon?: string | StaticImageData | StaticImport;
  title: string;
  path: string;
};

const footerNavLinks: NavLinksType[] = [
  {
    ...routes.SERVICES,
  },
  {
    ...routes.PROJECTS,
  },
  {
    ...routes.ABOUT_PAGE,
  },
  {
    ...routes.BLOGS,
  },
  {
    ...routes.CONTACT,
  },
  {
    title: "FAQ",
    path: "/faq",
  },
];

/* The six services the footer lists; the full catalogue lives on /services. */
const footerServiceLinks: NavLinksType[] = [
  { title: "Web Development", path: "/services/web-development" },
  { title: "Mobile App Development", path: "/services/mobile-app-development" },
  { title: "Generative AI", path: "/services/generative-ai" },
  { title: "DevOps", path: "/services/DevOps" },
  { title: "Data Science", path: "/services/data-science" },
  { title: "Cloud & Automation", path: "/services/cloud-automation" },
];

const footerCompanyLinks: NavLinksType[] = [
  { ...routes.ABOUT_PAGE },
  { ...routes.CAREERS },
  { title: "FAQ", path: "/faq" },
  { ...routes.PRIVACY_POLICY },
];

const footerMiscLinks: NavLinksType[] = [
  {
    ...routes.PRIVACY_POLICY,
  },
];

const footerContactLinks: NavLinksType[] = [
  // {
  //   title: "+62 101 1122",
  //   path: "tel:+621011122",
  //   icon: phone,
  // },
  {
    title: "hi@algotix.ai",
    path: "mailto:hi@algotix.ai",
    icon: email,
  },
  {
    title: "375 Park Ave, New York, NY 10152, United States",
    path: "https://www.google.com/maps/search/?api=1&query=375+Park+Ave,+New+York,+NY+10152,+United+States",
    icon: location,
  },
];

const socialLinks: SocialItemType[] = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/algotixai",
    logo: facebookLogo,
  },
  /* Twitter / X is left out until there is a real profile to link to: the
     entry used to point at the Facebook page. To restore it, import the logo
     from "@/public/Twitter logo.svg" and add an entry with the profile URL. */
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

export const footerData: FooterDataType = {
  logo: {
    subtitle:
      "At Algotix AI, we combine deep technical expertise with a passion for innovation—turning bold ideas into transformative software solutions. From AI to automation, design to deployment—our mission is to craft technology that delivers real-world value across every industry.",
  },
  careersLink: {
    ...routes.CAREERS,
  },
  copyright: `© ${new Date().getFullYear()}, Algotix AI. All Rights Reserved.`,
  links: {
    navigation: footerNavLinks,
    services: footerServiceLinks,
    company: footerCompanyLinks,
    misc: footerMiscLinks,
    contact: footerContactLinks,
  },
  social: socialLinks,
};
