export interface ProjectData {
  slug: string;
  client: string;
  category: string;
  startDate: string;
  endDate: string;
  tag: string;
  budget: string;
  title: string;
  description: string;
  images: {
    hero: string;
    background: string;
    detail: string;
    robot: string;
    workflow: string;
    discussion: string;
    techIcons: string[];
    platformIcon: string;
    contactIcons: {
      email: string;
      hr: string;
      location: string;
    };
  };
  sections: { title: string; content: string }[];
  result: { title: string; content: string }[];
  companyName: string;
  technology: string;
  platformAvailability: string;
  contactInfo: {
    email: string;
    hr: string;
    address: string;
  };
}
export interface ProjectOverviewProps {
  project: ProjectData;
  bottom?: boolean;
}

export const projects: ProjectData[] = [
  {
    slug: "medical-platform",
    client: "Client Corp",
    category: "Finance",
    startDate: "May 10, 2022",
    endDate: "Dec 20, 2023",
    tag: "Development",
    budget: "Around 15000$",
    title: "Medical Jobs Portal",
    description:
      "A comprehensive medical jobs portal connecting healthcare professionals with employment opportunities.",
    images: {
      hero: "/images/project-detail/radiologyjobs-hero.png",
      background: "/images/project-detail/bg-tradepro.png",
      detail: "/images/project-detail/radiology-image.png",
      robot: "/images/project-detail/robot.png",
      workflow: "/images/project-detail/image.png",
      discussion: "/images/projects/project-discussion.png",

      techIcons: [
        "/images/technologies/nextjs.svg",
        "/images/project-detail/tailwind.svg",
        "/images/technologies/mysql.svg",
        "/images/technologies/figma.png",
      ],
      platformIcon: "/images/project-detail/website.svg",
      contactIcons: {
        email: "/images/project-detail/mail-icon.svg",
        hr: "/images/project-detail/work.svg",
        location: "/images/project-detail/location-icon.svg",
      },
    },
    sections: [
      {
        title: "Strategy",
        content:
          "Strategy is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
      {
        title: "Implementation",
        content:
          "Implementation is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
    ],
    result: [
      {
        title: "Conclusion",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
    ],
    companyName: "Medical Jobs Solutions",
    technology: "Technology",
    platformAvailability: "Platform availability",
    contactInfo: {
      email: "hi@algotix.ai",
      hr: "hi@algotix.ai",
      address: "375 Park Ave, New York, NY 10152, United States",
    },
  },

  {
    slug: "ecommerce-platform",
    client: "Client Corp",
    category: "Finance",
    startDate: "May 10, 2022",
    endDate: "Dec 20, 2023",
    tag: "Development",
    budget: "Around 15000$",
    title: "Token Swap & LP Tool",
    description:
      "An online token swap and liquidity provision tool for decentralized trading.",
    images: {
      hero: "/images/project-detail/cswapdex-hero.png",
      background: "/images/project-detail/bg-tradepro.png",
      detail: "/images/project-detail/connect.png",
      robot: "/images/project-detail/robot.png",
      workflow: "/images/project-detail/image.png",
      discussion: "/images/projects/project-discussion.png",

      techIcons: [
        "/images/technologies/nextjs.svg",
        "/images/technologies/aws.png",
        "/images/technologies/typescript.svg",
      ],
      platformIcon: "/images/project-detail/website.svg",
      contactIcons: {
        email: "/images/project-detail/mail-icon.svg",
        hr: "/images/project-detail/work.svg",
        location: "/images/project-detail/location-icon.svg",
      },
    },
    sections: [
      {
        title: "Strategy",
        content:
          "Strategy is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
      {
        title: "Implementation",
        content:
          "Implementation is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
    ],
    result: [
      {
        title: "Conclusion",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
    ],
    companyName: "DeFi Solutions",
    technology: "Technology",
    platformAvailability: "Platform availability",
    contactInfo: {
      email: "hi@algotix.ai",
      hr: "hi@algotix.ai",
      address: "375 Park Ave, New York, NY 10152, United States",
    },
  },
  {
    slug: "ai-assistant",
    client: "Client Corp",
    category: "CRM",
    startDate: "June 17, 2023",
    endDate: "Feb 23, 2024",
    tag: "Design, Work",
    budget: "Around 9000$",
    title: "AI Document Transcription Tool",
    description:
      "An AI-powered assistant that transcribes documents with high accuracy using advanced machine learning.",
    images: {
      hero: "/images/project-detail/leoai-hero.png",
      background: "/images/project-detail/bg-tradepro.png",
      detail: "/images/project-detail/leo-hero.png",
      robot: "/images/project-detail/robot.png",
      workflow: "/images/project-detail/image.png",
      discussion: "/images/projects/project-discussion.png",

      techIcons: [
        "/images/project-detail/Next.js.svg",
        "/images/technologies/typescript.svg",
        "/images/technologies/nestjs.svg",
      ],
      platformIcon: "/images/project-detail/website.svg",
      contactIcons: {
        email: "/images/project-detail/mail-icon.svg",
        hr: "/images/project-detail/work.svg",
        location: "/images/project-detail/location-icon.svg",
      },
    },
    sections: [
      {
        title: "Wireframing",
        content:
          "Wireframing is a Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
      {
        title: "Challenges",
        content:
          "Challenges Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
    ],
    result: [
      {
        title: "Result",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
    ],
    companyName: "AI Transcription Solutions",
    technology: "Technology",
    platformAvailability: "Platform availability",
    contactInfo: {
      email: "hi@algotix.ai",
      hr: "hi@algotix.ai",
      address: "375 Park Ave, New York, NY 10152, United States",
    },
  },

  {
    slug: "ecommerce-solution",
    client: "Client Corp",
    category: "Finance",
    startDate: "May 10, 2022",
    endDate: "Dec 20, 2023",
    tag: "Development",
    budget: "Around 15000$",
    title: "ITAD Landing Page",
    description:
      "A professional landing page for IT asset disposition and decommissioning services.",
    images: {
      hero: "/images/project-detail/oceantech-hero.png",
      background: "/images/project-detail/bg-tradepro.png",
      detail: "/images/project-detail/OT-hero.png",
      robot: "/images/project-detail/robot.png",
      workflow: "/images/project-detail/image.png",
      discussion: "/images/projects/project-discussion.png",

      techIcons: [
        "/images/technologies/typescript.svg",
        "/images/project-detail/Next.js.svg",
        "/images/technologies/vercel.svg",
      ],
      platformIcon: "/images/project-detail/website.svg",
      contactIcons: {
        email: "/images/project-detail/mail-icon.svg",
        hr: "/images/project-detail/work.svg",
        location: "/images/project-detail/location-icon.svg",
      },
    },
    sections: [
      {
        title: "Strategy",
        content:
          "Strategy is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
      {
        title: "Implementation",
        content:
          "Implementation is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
    ],
    result: [
      {
        title: "Conclusion",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
    ],
    companyName: "ITAD Solutions",
    technology: "Technology",
    platformAvailability: "Platform availability",
    contactInfo: {
      email: "hi@algotix.ai",
      hr: "hi@algotix.ai",
      address: "375 Park Ave, New York, NY 10152, United States",
    },
  },

  {
    slug: "customer-support-tool",
    client: "Client Corp",
    category: "Finance",
    startDate: "May 10, 2022",
    endDate: "Dec 20, 2023",
    tag: "Development",
    budget: "Around 15000$",
    title: "Property Negotiation Platform",
    description:
      "An online property negotiation platform for real estate transactions and deal management.",
    images: {
      hero: "/images/project-detail/truofer-hero.png",
      background: "/images/project-detail/bg-tradepro.png",
      detail: "/images/project-detail/truofer.png",
      robot: "/images/project-detail/robot.png",
      workflow: "/images/project-detail/image.png",
      discussion: "/images/projects/project-discussion.png",

      techIcons: [
        "/images/project-detail/Next.js.svg",
        "/images/project-detail/aws-amplify-logo.png",
        "/images/technologies/typescript.svg",
        "/images/technologies/nestjs.svg",
      ],
      platformIcon: "/images/project-detail/website.svg",
      contactIcons: {
        email: "/images/project-detail/mail-icon.svg",
        hr: "/images/project-detail/work.svg",
        location: "/images/project-detail/location-icon.svg",
      },
    },
    sections: [
      {
        title: "Strategy",
        content:
          "Strategy is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
      {
        title: "Implementation",
        content:
          "Implementation is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
    ],
    result: [
      {
        title: "Conclusion",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
    ],
    companyName: "Property Solutions",
    technology: "Technology",
    platformAvailability: "Platform availability",
    contactInfo: {
      email: "hi@algotix.ai",
      hr: "hi@algotix.ai",
      address: "375 Park Ave, New York, NY 10152, United States",
    },
  },

  {
    slug: "crm-solution",
    client: "Client Corp",
    category: "Finance",
    startDate: "May 10, 2022",
    endDate: "Dec 20, 2023",
    tag: "Development",
    budget: "Around 15000$",
    title: "School Alert System",
    description:
      "An alert-sending application for school administrators to manage emergency communications.",
    images: {
      hero: "/images/project-detail/studentsheild-hero.png",
      background: "/images/project-detail/bg-tradepro.png",
      detail: "/images/project-detail/student-sheild.png",
      robot: "/images/project-detail/robot.png",
      workflow: "/images/project-detail/image.png",
      discussion: "/images/projects/project-discussion.png",

      techIcons: [
        "/images/project-detail/react-icon.svg",
        "/images/technologies/javascript.svg",
        "/images/project-detail/aws-amplify-logo.png",
        "/images/technologies/nodejs.svg",
      ],
      platformIcon: "/images/project-detail/website.svg",
      contactIcons: {
        email: "/images/project-detail/mail-icon.svg",
        hr: "/images/project-detail/work.svg",
        location: "/images/project-detail/location-icon.svg",
      },
    },
    sections: [
      {
        title: "Strategy",
        content:
          "Strategy is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
      {
        title: "Implementation",
        content:
          "Implementation is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
    ],
    result: [
      {
        title: "Conclusion",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
    ],
    companyName: "School Solutions",
    technology: "Technology",
    platformAvailability: "Platform availability",
    contactInfo: {
      email: "hi@algotix.ai",
      hr: "hi@algotix.ai",
      address: "375 Park Ave, New York, NY 10152, United States",
    },
  },

  {
    slug: "ai-dashboard",
    client: "Client Corp",
    category: "Finance",
    startDate: "May 10, 2022",
    endDate: "Dec 20, 2023",
    tag: "Development",
    budget: "Around 15000$",
    title: "AI Outreach Tool",
    description:
      "An AI-powered outreach tool built for scheduled outreach campaigns and automated communication.",
    images: {
      hero: "/images/project-detail/owli-hero.png",
      background: "/images/project-detail/bg-tradepro.png",
      detail: "/images/project-detail/Dashboard-owli.jpg",
      robot: "/images/project-detail/robot.png",
      workflow: "/images/project-detail/image.png",
      discussion: "/images/projects/project-discussion.png",

      techIcons: [
        "/images/technologies/laravel.png",
        "/images/technologies/vue.svg",
        "/images/technologies/aws.png",
      ],
      platformIcon: "/images/project-detail/website.svg",
      contactIcons: {
        email: "/images/project-detail/mail-icon.svg",
        hr: "/images/project-detail/work.svg",
        location: "/images/project-detail/location-icon.svg",
      },
    },
    sections: [
      {
        title: "Strategy",
        content:
          "Strategy is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
      {
        title: "Implementation",
        content:
          "Implementation is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
    ],
    result: [
      {
        title: "Conclusion",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
    ],
    companyName: "AI Outreach Solutions",
    technology: "Technology",
    platformAvailability: "Platform availability",
    contactInfo: {
      email: "hi@algotix.ai",
      hr: "hi@algotix.ai",
      address: "375 Park Ave, New York, NY 10152, United States",
    },
  },

  {
    slug: "gaming-utility-app",
    client: "Client Corp",
    category: "Finance",
    startDate: "May 10, 2022",
    endDate: "Dec 20, 2023",
    tag: "Development",
    budget: "Around 15000$",
    title: "Towing Management System",
    description:
      "A comprehensive towing management system for towing companies to streamline operations.",
    images: {
      hero: "/images/project-detail/relaytow-hero.png",
      background: "/images/project-detail/bg-tradepro.png",
      detail: "/images/project-detail/relay-tow.png",
      robot: "/images/project-detail/robot.png",
      workflow: "/images/project-detail/image.png",
      discussion: "/images/projects/project-discussion.png",

      techIcons: [
        "/images/project-detail/react-icon.svg",
        "/images/technologies/javascript.svg",
        "/images/technologies/vercel.svg",
        "/images/project-detail/figma-icon.svg",
      ],
      platformIcon: "/images/project-detail/website.svg",
      contactIcons: {
        email: "/images/project-detail/mail-icon.svg",
        hr: "/images/project-detail/work.svg",
        location: "/images/project-detail/location-icon.svg",
      },
    },
    sections: [
      {
        title: "Strategy",
        content:
          "Strategy is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
      {
        title: "Implementation",
        content:
          "Implementation is a crucial part of the design process, acting as the blueprint for any website or application. It is a low-fidelity visual representation of the layout, focusing on structure rather than design details. By creating wireframes, designers can easily map out the user interface (UI) elements and how they interact with each other. ",
      },
    ],
    result: [
      {
        title: "Conclusion",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      },
    ],
    companyName: "Towing Solutions",
    technology: "Technology",
    platformAvailability: "Platform availability",
    contactInfo: {
      email: "hi@algotix.ai",
      hr: "hi@algotix.ai",
      address: "375 Park Ave, New York, NY 10152, United States",
    },
  },
];
