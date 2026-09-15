import type { ServiceData, WorkflowSectionData } from "./types";

export const workFlowData = {
  image: "/images/services/workflow.png",
  data: [
    {
      id: 1,
      title: "Discovery & Strategy",
      description: "In-depth analysis to ensure the best approach.",
      image: "/images/services/research.png",
      rightImage: "/images/services/discovery_phase.jpg",
    },
    {
      id: 2,
      title: "Designing",
      description: "Creating intuitive and responsive interfaces.",
      image: "/images/services/designing.png",
      rightImage: "/images/services/design_phase.jpg",
    },
    {
      id: 3,
      title: "Development",
      description: "Building high-performance cross-platform apps.",
      image: "/images/services/development.png",
      rightImage: "/images/services/development_phase.jpg",
    },
    {
      id: 4,
      title: "Live Testing",
      description: "Ensuring a smooth and optimized launch.",
      image: "/images/services/testing.png",
      rightImage: "/images/services/testing_phase.jpg",
    },
  ],
};

export interface Step {
  step: string;
  title: string;
  description: string;
}
export interface OurServiceData {
  id: number;
  slug: string;
  title: string;
  description: string;
  strategyDescription?: string;
  tags: { name: string; description: string }[];
  logos: string[];
  cardsData: { title: string; description: string }[];
  projectImages: { title: string; img: string; url: string }[];
  categories: string[];
  showInAll: boolean;
  steps: Step[];
}

export const filters = [
  "All",
  "Web",
  "Mobile",
  "DevOps",
  "Data",
  "AI",
  "Cloud",
  "Blockchain",
];

export const ourServiceData: OurServiceData[] = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    description:
      "We build modern, secure, and scalable web applications tailored to your business needs.",
    strategyDescription:
      "We focus on building user-centric, responsive web applications with robust, scalable backends to ensure seamless experiences and sustainable growth for your business.",
    tags: [
      {
        name: "Requirement Gathering & Planning",
        description:
          "We conduct in-depth consultations to understand your business objectives, user requirements, and technical needs. This involves stakeholder interviews, market research, and creating detailed project roadmaps with clear milestones to ensure alignment and a solid foundation for development.",
      },
      {
        name: "Design & Development",
        description:
          "Our team crafts visually appealing, user-centric designs using tools like Figma and Adobe XD, followed by robust development with frameworks like React, Angular, or Django. We prioritize responsive design, accessibility, and seamless functionality to deliver engaging web experiences.",
      },
      {
        name: "Testing & Optimization",
        description:
          "We perform comprehensive testing, including unit, integration, and end-to-end tests, using tools like Jest and Cypress. Performance optimization is achieved through code minification, lazy loading, and CDN integration, ensuring fast load times and scalability under high traffic.",
      },
    ],
    logos: [
      "/images/technologies/react.png",
      "/images/technologies/nextjs.svg",
      "/images/technologies/django.png",
      "/images/technologies/angular.png",
      "/images/technologies/tailwind.svg",
      "/images/technologies/node-js.png",
    ],
    cardsData: [
      {
        title: "User-Centric Design",
        description:
          "Crafting responsive and accessible web interfaces tailored to your audience's needs.",
      },
      {
        title: "Scalable Development",
        description:
          "Building robust web applications with modern frameworks for seamless performance.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Requirement Gathering",
        description:
          "Collaborating with stakeholders to define business goals and technical requirements.",
      },
      {
        step: "STEP 2",
        title: "UI/UX Design",
        description:
          "Creating responsive, user-friendly designs with tools like Figma and Adobe XD.",
      },
      {
        step: "STEP 3",
        title: "Development",
        description:
          "Building scalable applications using React, Angular, or Django frameworks.",
      },
      {
        step: "STEP 4",
        title: "Testing & Optimization",
        description:
          "Ensuring quality with comprehensive testing and performance enhancements.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Web"],
    showInAll: true,
  },
  {
    id: 2,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "We design and develop high-performance mobile applications for both Android and iOS platforms.",
    strategyDescription:
      "We prioritize intuitive, platform-consistent user experiences, using cross-platform frameworks to deliver high-performance apps quickly and cost-effectively.",
    tags: [
      {
        name: "Conceptualization & Design",
        description:
          "We collaborate with you to conceptualize innovative app ideas, creating wireframes and prototypes with tools like Figma. Our design process focuses on intuitive user interfaces, adhering to platform-specific guidelines (Material Design for Android, Human Interface Guidelines for iOS) to ensure a native feel.",
      },
      {
        name: "Development",
        description:
          "Our developers use technologies like Flutter, React Native, or Kotlin to build high-quality, performant mobile apps. We implement robust backend integrations and APIs to support features like real-time updates, push notifications, and secure data handling.",
      },
      {
        name: "Testing & Optimization",
        description:
          "We conduct rigorous testing across devices and OS versions using tools like Appium and Firebase Test Lab. Optimization includes reducing app size, improving battery efficiency, and enhancing load times to deliver a seamless user experience on both Android and iOS.",
      },
    ],
    logos: [
      "/images/technologies/Android.svg",
      "/images/technologies/Android Studio.svg",
      "/images/technologies/Kotlin.svg",
      "/images/technologies/react.png",
      "/images/technologies/flutter-icon.png",
      "/images/technologies/dotnet.png",
      "/images/technologies/firebase.png",
      "/images/technologies/figma.png",
    ],
    cardsData: [
      {
        title: "Native-Like Experience",
        description:
          "Delivering intuitive mobile apps with platform-specific design standards.",
      },
      {
        title: "Cross-Platform Efficiency",
        description:
          "Building apps with Flutter or React Native for consistent performance.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "App Conceptualization",
        description:
          "Defining app ideas and creating wireframes aligned with your goals.",
      },
      {
        step: "STEP 2",
        title: "UI/UX Design",
        description:
          "Crafting intuitive interfaces adhering to iOS and Android guidelines.",
      },
      {
        step: "STEP 3",
        title: "App Development",
        description:
          "Building high-performance apps with Flutter, React Native, or Kotlin.",
      },
      {
        step: "STEP 4",
        title: "Testing & Optimization",
        description:
          "Rigorous testing and optimization for seamless cross-device performance.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Mobile"],
    showInAll: true,
  },
  {
    id: 3,
    slug: "DevOps",
    title: "DevOps",
    description:
      "Streamline your development and operations with our expert DevOps services. We specialize in CI/CD, IaC, Docker, Kubernetes, and cloud monitoring.",
    strategyDescription:
      "We streamline your software delivery through automated CI/CD pipelines, infrastructure as code, and real-time monitoring,ensuring faster releases, higher reliability, and easier scalability.",
    tags: [
      {
        name: "CI/CD Pipelines Setup",
        description:
          "We design and implement automated CI/CD pipelines using tools like Jenkins, GitLab CI, or GitHub Actions. This includes configuring automated builds, testing, and deployments to reduce manual errors and accelerate release cycles for consistent, reliable software delivery.",
      },
      {
        name: "Infrastructure as Code (IaC)",
        description:
          "We utilize tools like Terraform and Ansible to define and manage infrastructure through code, ensuring consistency, scalability, and version control. This approach enables rapid provisioning and modification of cloud resources across AWS, Azure, or GCP.",
      },
      {
        name: "Monitoring",
        description:
          "We implement real-time monitoring solutions using Prometheus and Grafana, setting up dashboards and alerts to track system performance, resource utilization, and application health. This ensures proactive issue detection and optimal system reliability.",
      },
    ],
    logos: [
      "/images/technologies/kubernetes.png",
      "/images/technologies/aws.png",
      "/images/technologies/terraform.png",
      "/images/technologies/prometheus.png",
    ],
    cardsData: [
      {
        title: "Automated Pipelines",
        description:
          "Streamlined CI/CD workflows for rapid and reliable deployments.",
      },
      {
        title: "Cloud Scalability",
        description:
          "Infrastructure management with IaC for flexible, scalable systems.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["DevOps"],
    showInAll: true,
  },
  {
    id: 4,
    slug: "browser-extensions",
    title: "Browser Extensions",
    description:
      "We build powerful and secure browser extensions tailored to your business workflows.",
    strategyDescription:
      "We enhance user productivity through custom browser extensions, focusing on seamless integration, lightweight performance, and cross-browser compatibility.",
    tags: [
      {
        name: "Requirement Analysis",
        description:
          "We engage with stakeholders to deeply understand business needs, user workflows, and technical constraints. This involves creating detailed specifications and use cases to ensure the extension enhances productivity and aligns with your strategic goals.",
      },
      {
        name: "Development",
        description:
          "Using modern JavaScript frameworks like React or TypeScript, we develop lightweight, secure, and high-performance browser extensions. Our code adheres to browser-specific APIs (Chrome, Firefox, Edge) to ensure compatibility and seamless functionality.",
      },
      {
        name: "Testing",
        description:
          "We perform rigorous testing, including functional, security, and performance tests, using tools like Mocha or Selenium. This ensures the extension is reliable, secure against vulnerabilities, and performs well across different browser environments.",
      },
      {
        name: "Publishing",
        description:
          "We manage the entire publishing process, from preparing submission packages to complying with browser store guidelines (e.g., Chrome Web Store, Firefox Add-ons). We handle updates and maintenance to ensure ongoing compatibility and performance.",
      },
    ],
    logos: [
      "/images/technologies/Firefox.svg",
      "/images/technologies/javascript-logo.png",
      "/images/technologies/Chrome.svg",
      "/images/technologies/webpack.png",
    ],
    cardsData: [
      {
        title: "Custom Functionality",
        description:
          "Tailored extensions to enhance productivity and workflows.",
      },
      {
        title: "Browser Compatibility",
        description:
          "Seamless performance across major browsers like Chrome and Firefox.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Requirement Analysis",
        description:
          "Defining business needs and user workflows for targeted extensions.",
      },
      {
        step: "STEP 2",
        title: "Extension Development",
        description:
          "Building lightweight extensions with React or TypeScript.",
      },
      {
        step: "STEP 3",
        title: "Rigorous Testing",
        description:
          "Ensuring reliability and security with comprehensive testing.",
      },
      {
        step: "STEP 4",
        title: "Store Publishing",
        description:
          "Managing submission and updates for Chrome and Firefox stores.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Web"],
    showInAll: true,
  },
  {
    id: 5,
    slug: "data-science",
    title: "Data Science",
    description:
      "Unlock the power of your data with our data science services.",
    strategyDescription:
      "We provide end-to-end data science solutions, from data collection and preprocessing to model training and visualization, ensuring actionable insights for your business.",
    tags: [
      {
        name: "Data Collection",
        description:
          "We gather structured and unstructured data from diverse sources, including APIs, databases, and web scraping tools. Our process ensures data integrity and compliance with privacy regulations like GDPR, preparing a robust dataset for analysis.",
      },
      {
        name: "Data Preprocessing",
        description:
          "We clean and transform raw data using tools like Pandas and NumPy, handling missing values, outliers, and inconsistencies. This step includes normalization, encoding, and feature engineering to ensure data  is ready for accurate modeling and analysis.",
      },
      {
        name: "Model Training",
        description:
          "We train machine learning models using frameworks like PyTorch or TensorFlow, selecting algorithms tailored to your use case (e.g., regression, classification, clustering). We ctructures and unstructured data from diverse sources, including APIs, databases, and web scraping tools. Our process ensures data integrity and compliance with privacy regulations like GDPR, preparing a robust dataset for analysis.",
      },
      {
        name: "Data Visualization",
        description:
          "We create interactive and insightful visualizations using tools like Matplotlib, Seaborn, or Tableau. These visualizations help uncover patterns, trends, and actionable insights, presented in formats like dashboards or reports for stakeholder decision-making.",
      },
    ],
    logos: [
      "/images/technologies/Python.svg",
      "/images/technologies/aws.png",
      "/images/technologies/pandas.png",
      "/images/technologies/pytorch.png",
      "/images/technologies/go.png",
      "/images/technologies/django.png",
    ],
    cardsData: [
      {
        title: "Insightful Analytics",
        description:
          "Extracting actionable insights from complex datasets for decision-making.",
      },
      {
        title: "Model Optimization",
        description:
          "Building and fine-tuning machine learning models for accuracy.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Data"],
    showInAll: true,
  },
  {
    id: 6,
    slug: "chat-bots",
    title: "Chat Bots",
    description:
      "Enhance customer interaction and automate support with intelligent chatbots tailored to your business needs.",
    strategyDescription:
      "Our chatbot strategy combines advanced NLP and conversational design to create intelligent, context-aware virtual assistants. We focus on seamless system integrations and personalized interactions to automate workflows and enhance user engagement across multiple touchpoints.",

    tags: [
      {
        name: "Intent Recognition",
        description:
          "We leverage natural language processing (NLP) with tools like Dialogflow or Rasa to design chatbots that accurately identify user intents. This ensures precise responses to user queries, enhancing engagement and satisfaction across diverse use cases.",
      },
      {
        name: "Conversational Design",
        description:
          "We craft natural, context-aware conversational flows using techniques like dialogue trees and state management. Our designs prioritize user experience, incorporating tone, personality, and multilingual support to create engaging and intuitive interactions.",
      },
      {
        name: "Integration with APIs",
        description:
          "We seamlessly integrate chatbots with your existing systems, such as CRMs (e.g., Salesforce), e-commerce platforms, or custom APIs. This enables real-time data access, personalized responses, and automated workflows like order tracking or ticket creation.",
      },
    ],
    logos: [
      "/images/technologies/Opera.svg",
      "/images/technologies/node-js.png",
      "/images/technologies/Python.svg",
      "/images/technologies/firebase.png",
    ],
    cardsData: [
      {
        title: "Intelligent Interaction",
        description:
          "AI-powered chatbots for personalized and responsive user engagement.",
      },
      {
        title: "System Integration",
        description:
          "Seamless connections with CRMs and platforms for automated workflows.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["AI"],
    showInAll: true,
  },
  {
    id: 7,
    slug: "generative-ai",
    title: "Generative AI (ML, AI)",
    description:
      "We build cutting-edge generative AI solutions for text, image, and code generation using state-of-the-art models.",
    strategyDescription:
      "Our generative AI strategy revolves around fine-tuned, domain-specific models that deliver high-quality, creative outputs for text, image, and code generation. We emphasize custom model development, prompt engineering, and seamless integration to automate content workflows and drive innovation.",

    tags: [
      {
        name: "Model Fine-tuning",
        description:
          "We fine-tune pre-trained models like GPT or Stable Diffusion using domain-specific datasets to optimize performance for your use case. This includes transfer learning and hyperparameter tuning to achieve high accuracy and relevance in outputs.",
      },
      {
        name: "Prompt Engineering",
        description:
          "We design precise and context-aware prompts to maximize the quality of AI-generated outputs. Our approach leverages best practices in prompt crafting, ensuring consistency, creativity, and alignment with your specific application needs.",
      },
      {
        name: "Custom LLMs",
        description:
          "We develop tailored large language models using frameworks like Hugging Face or PyTorch, customized for your industry or use case. This includes model training, optimization, and deployment to deliver scalable, high-performance AI solutions.",
      },
      {
        name: "AI Integration & Automation",
        description:
          "We integrate generative AI into your workflows, connecting with APIs, databases, or front-end systems. This enables automated content creation, customer support, or analytics, streamlining operations and enhancing user experiences.",
      },
    ],
    logos: [
      "/images/technologies/Python.svg",
      "/images/technologies/pytorch.png",
      "/images/technologies/openai.png",
    ],
    cardsData: [
      {
        title: "Custom AI Models",
        description:
          "Tailored generative AI solutions for text, images, and code.",
      },
      {
        title: "Workflow Automation",
        description:
          "Integrating AI for automated content creation and analytics.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["AI"],
    showInAll: true,
  },
  {
    id: 8,
    slug: "cloud-automation",
    title: "Cloud & Automation",
    description:
      "Automate infrastructure, testing, and workflows using modern cloud platforms and automation tools like Selenium and RPA.",
    strategyDescription:
      "Our cloud and automation strategy leverages robust cloud architectures, infrastructure automation, and advanced testing to build scalable, secure, and efficient systems. We integrate RPA solutions to streamline repetitive tasks, reduce operational overhead, and accelerate digital transformation.",

    tags: [
      {
        name: "Cloud Architecture",
        description:
          "We design scalable, secure, and cost-efficient cloud architectures using platforms like AWS, Azure, or GCP. Our approach includes multi-region setups, load balancing, and fault-tolerant systems to ensure high availability and performance.",
      },
      {
        name: "Infrastructure Automation",
        description:
          "We automate infrastructure provisioning and management with tools like Terraform, Ansible, or CloudFormation. This ensures consistent, repeatable deployments, reduces manual effort, and enables rapid scaling to meet business demands.",
      },
      {
        name: "Test Automation",
        description:
          "We implement automated testing frameworks using Selenium and tools like TestNG or Pytest. This covers UI, API, and performance testing, ensuring your applications are robust, bug-free, and optimized for end-user satisfaction.",
      },
      {
        name: "RPA Workflows",
        description:
          "We deploy robotic process automation (RPA) using tools like UiPath or Automation Anywhere to streamline repetitive tasks like data entry or report generation. This enhances efficiency, reduces errors, and frees up resources for strategic initiatives.",
      },
    ],
    logos: [
      "/images/technologies/Azure.svg",
      "/images/technologies/aws.png",
      "/images/technologies/Jenkins.svg",
      "/images/technologies/Python.svg",
      "/images/technologies/Terraform-icon.svg",
    ],
    cardsData: [
      {
        title: "Cloud Optimization",
        description:
          "Scalable and secure cloud architectures for high availability.",
      },
      {
        title: "Automated Workflows",
        description: "Streamlined testing and RPA for efficient operations.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Cloud"],
    showInAll: true,
  },
  {
    id: 9,
    slug: "blockchain-web3",
    title: "Blockchain & Web3",
    description:
      "We build secure, decentralized applications and blockchain solutions using modern Web3 technologies.",
    strategyDescription:
      "Our Blockchain & Web3 strategy focuses on building secure, decentralized applications powered by robust smart contracts. We prioritize security audits, seamless integrations with popular chains, and user-friendly decentralized experiences to drive trust and innovation in your blockchain solutions.",

    tags: [
      {
        name: "Smart Contracts",
        description:
          "We develop and audit secure smart contracts using Solidity or Rust for platforms like Ethereum and Solana. Our process includes rigorous testing with tools like Hardhat or Foundry to ensure code integrity, security, and gas efficiency.",
      },
      {
        name: "Wallet & Payment Integration",
        description:
          "We integrate Web3 wallets like MetaMask or Phantom and enable blockchain-based payment systems. This ensures secure, seamless transactions and user authentication, supporting cryptocurrencies and stablecoins for diverse use cases.",
      },
      {
        name: "Tokenomics & Launch",
        description:
          "We design sustainable token economies, including token supply, utility, and governance models. Our team supports secure token launches, from whitepaper creation to deployment on platforms like Ethereum or Binance Smart Chain, ensuring compliance and scalability.",
      },
    ],
    logos: [
      "/images/technologies/ethereum.png",
      "/images/technologies/Solidity.svg",
      "/images/technologies/bitcoin.png",
      "/images/technologies/solana.jpg",
      "/images/technologies/hardhat.svg",
    ],
    cardsData: [
      {
        title: "Decentralized Apps",
        description:
          "Building secure DApps for transparent and trustless interactions.",
      },
      {
        title: "Token Systems",
        description:
          "Designing sustainable tokenomics for blockchain projects.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Smart Contract Design",
        description:
          "Crafting secure smart contracts tailored to your blockchain needs.",
      },
      {
        step: "STEP 2",
        title: "Wallet Integration",
        description:
          "Integrating Web3 wallets for seamless user authentication and payments.",
      },
      {
        step: "STEP 3",
        title: "Tokenomics Planning",
        description:
          "Designing sustainable token economies for project success.",
      },
      {
        step: "STEP 4",
        title: "DApp Deployment",
        description:
          "Launching secure and scalable decentralized applications.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Blockchain", "Web3"],
    showInAll: true,
  },
  {
    id: 10,
    slug: "android-app-development",
    title: "Android Development",
    description:
      "Custom Android applications using Kotlin and Java with Material Design principles.",
    strategyDescription:
      "Our Android development strategy centers on creating high-performance, native apps using Kotlin and Java, aligned with Google's Material Design. We emphasize smooth user experiences, scalability, and deep integration with Android's ecosystem to deliver impactful mobile solutions.",

    tags: [
      {
        name: "Native Android Development",
        description:
          "We build native Android apps using Kotlin and Java with Android Studio, ensuring optimal performance, smooth UI transitions, and full access to Android-specific features and APIs.",
      },
      {
        name: "Material Design",
        description:
          "We implement Google's Material Design principles to create intuitive, accessible, and visually consistent user interfaces that feel natural to Android users.",
      },
      {
        name: "Play Store Optimization",
        description:
          "We manage the complete Google Play Store submission process, including ASO (App Store Optimization) strategies to improve app discoverability and download rates.",
      },
    ],
    logos: [
      "/images/technologies/Android.svg",
      "/images/technologies/Kotlin.svg",
      "/images/technologies/Android Studio.svg",
      "/images/technologies/firebase.png",
    ],
    cardsData: [
      {
        title: "Native Performance",
        description:
          "Optimized Android apps with smooth UI and full platform integration.",
      },
      {
        title: "App Store Visibility",
        description:
          "Enhanced discoverability through effective Play Store optimization.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Requirement Analysis",
        description:
          "Defining app requirements to align with user and business needs.",
      },
      {
        step: "STEP 2",
        title: "Material Design",
        description:
          "Crafting intuitive interfaces using Google's Material Design principles.",
      },
      {
        step: "STEP 3",
        title: "Native Development",
        description: "Building high-performance apps with Kotlin and Java.",
      },
      {
        step: "STEP 4",
        title: "Play Store Submission",
        description:
          "Optimizing and launching apps for maximum visibility on Google Play.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Mobile"],
    showInAll: false,
  },
  {
    id: 11,
    slug: "ios-app-development",
    title: "iOS App Development",
    description:
      "Custom iOS applications using Swift with Human Interface Guidelines.",
    strategyDescription:
      "Our iOS app strategy is built on developing high-quality native applications using Swift, following Apple's Human Interface Guidelines. We focus on performance, intuitive design, and App Store readiness to create seamless and engaging user experiences for iOS users.",

    tags: [
      {
        name: "Native iOS Development",
        description:
          "We build native iOS apps using Swift and Xcode for optimal performance.",
      },
      {
        name: "App Store Submission",
        description:
          "We optimize and manage App Store listings for visibility.",
      },
      {
        name: "Core Data Integration",
        description:
          "We implement Core Data for efficient local storage and syncing.",
      },
    ],
    logos: [
      "/images/technologies/Swift.svg",
      "/images/technologies/Xcode.svg",
      "/images/technologies/firebase.png",
      "/images/technologies/Dart.svg",
      "/images/technologies/Apple.svg",
      "/images/technologies/Flutter.svg",
    ],
    cardsData: [
      {
        title: "Native iOS Experience",
        description:
          "High-performance apps with seamless Apple ecosystem integration.",
      },
      {
        title: "App Store Optimization",
        description:
          "Effective strategies for improved visibility on the App Store.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Requirement Analysis",
        description:
          "Defining app requirements for optimal iOS user experiences.",
      },
      {
        step: "STEP 2",
        title: "UI/UX Design",
        description:
          "Crafting interfaces aligned with Apple's Human Interface Guidelines.",
      },
      {
        step: "STEP 3",
        title: "Swift Development",
        description:
          "Building native iOS apps with Swift for high performance.",
      },
      {
        step: "STEP 4",
        title: "App Store Submission",
        description:
          "Optimizing and launching apps for maximum App Store visibility.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Mobile"],
    showInAll: false,
  },
  {
    id: 12,
    slug: "flutter-app-development",
    title: "Flutter Development",
    description:
      "Cross-platform mobile applications using Flutter for iOS and Android with a single codebase.",
    strategyDescription:
      "Our Flutter strategy leverages a single codebase to deliver visually consistent, high-performance mobile apps for both iOS and Android. We emphasize rapid development, pixel-perfect UI, and smooth animations to provide cost-effective, cross-platform solutions without compromising on quality.",

    tags: [
      {
        name: "Cross-Platform Development",
        description:
          "We build apps for both iOS and Android using Flutter's single codebase.",
      },
      {
        name: "State Management",
        description:
          "We implement efficient state management using Provider, Riverpod, or BLoC.",
      },
      {
        name: "App Store & Play Store Submission",
        description:
          "We optimize and manage listings for both App Store and Google Play Store.",
      },
    ],
    logos: [
      "/images/technologies/Flutter.svg",
      "/images/technologies/Dart.svg",
      "/images/technologies/firebase.png",
      "/images/technologies/Android.svg",
      "/images/technologies/Apple.svg",
      "/images/technologies/VScode.svg",
    ],
    cardsData: [
      {
        title: "Unified Codebase",
        description:
          "Efficient development for iOS and Android with Flutter's single codebase.",
      },
      {
        title: "Rich Interfaces",
        description:
          "Custom widgets for consistent and engaging user experiences.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Project Planning",
        description:
          "Defining requirements for cross-platform app development.",
      },
      {
        step: "STEP 2",
        title: "UI/UX Design",
        description:
          "Creating consistent interfaces with Flutter's customizable widgets.",
      },
      {
        step: "STEP 3",
        title: "Flutter Development",
        description:
          "Building apps with a single codebase for iOS and Android.",
      },
      {
        step: "STEP 4",
        title: "Store Submission",
        description: "Optimizing listings for App Store and Google Play Store.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Mobile"],
    showInAll: false,
  },
  {
    id: 13,
    slug: "react-native-app-development",
    title: "React Native Development",
    description:
      "Cross-platform mobile apps using React Native for fast development and native performance.",
    strategyDescription:
      "Our React Native strategy focuses on building cross-platform apps with native-like performance and rapid development cycles. Using a shared JavaScript codebase, we deliver robust, scalable, and feature-rich applications that feel truly native across both iOS and Android devices.",

    tags: [
      {
        name: "Cross-Platform Development",
        description:
          "We create apps for iOS and Android using React Native's JavaScript framework.",
      },
      {
        name: "Play Store Submission",
        description:
          "We handle submission processes for both App Store and Google Play Store.",
      },
      {
        name: "Native Modules",
        description:
          "We integrate native modules for enhanced performance and functionality.",
      },
    ],
    logos: [
      "/images/technologies/react.png",
      "/images/technologies/JavaScript.svg",
      "/images/technologies/node-js.png",
      "/images/technologies/Android Studio.svg",
      "/images/technologies/Apple.svg",
    ],
    cardsData: [
      {
        title: "Rapid Development",
        description:
          "Fast app creation with reusable components and hot reloading.",
      },
      {
        title: "Native-Like Performance",
        description:
          "Access to platform features for near-native app experiences.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Requirement Analysis",
        description:
          "Defining app requirements for cross-platform development.",
      },
      {
        step: "STEP 2",
        title: "UI/UX Design",
        description:
          "Crafting consistent interfaces with React Native components.",
      },
      {
        step: "STEP 3",
        title: "App Development",
        description: "Building apps with React Native for iOS and Android.",
      },
      {
        step: "STEP 4",
        title: "Store Submission",
        description:
          "Optimizing apps for App Store and Google Play Store listings.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Mobile"],
    showInAll: false,
  },
  {
    id: 14,
    slug: "frontend-web-development",
    title: "Frontend Development",
    description:
      "Interactive and responsive web interfaces using modern JavaScript frameworks and libraries.",
    strategyDescription:
      "Our frontend strategy focuses on crafting highly interactive, responsive, and visually stunning web interfaces. We leverage modern frameworks like React, Vue, or Angular to ensure fast performance, seamless user experience, and scalability across all devices.",

    tags: [
      {
        name: "Responsive Design",
        description:
          "We create web interfaces that adapt seamlessly across devices.",
      },
      {
        name: "JavaScript Frameworks",
        description:
          "We leverage React, Vue, or Angular for dynamic user experiences.",
      },
      {
        name: "Performance Optimization",
        description:
          "We optimize frontend code for fast loading and smooth interactions.",
      },
    ],
    logos: [
      "/images/technologies/react.png",
      "/images/technologies/Vue.svg",
      "/images/technologies/JavaScript.svg",
      "/images/technologies/tailwind.svg",
      "/images/technologies/HTML5.svg",
      "/images/technologies/CSS3.svg",
      "/images/technologies/Bootstrap.svg",
      "/images/technologies/Sass.svg",
    ],
    cardsData: [
      {
        title: "Dynamic Interfaces",
        description:
          "Engaging and interactive UIs with modern JavaScript frameworks.",
      },
      {
        title: "Optimized Performance",
        description:
          "Fast-loading, responsive designs for seamless user experiences.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Requirement Gathering",
        description:
          "Understanding user needs for intuitive frontend interfaces.",
      },
      {
        step: "STEP 2",
        title: "UI/UX Design",
        description:
          "Crafting responsive designs with tools like Figma and Tailwind.",
      },
      {
        step: "STEP 3",
        title: "Frontend Development",
        description: "Building dynamic interfaces with React, Vue, or Angular.",
      },
      {
        step: "STEP 4",
        title: "Performance Optimization",
        description:
          "Ensuring fast load times and smooth interactions across devices.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Web"],
    showInAll: false,
  },
  {
    id: 15,
    slug: "backend-web-development",
    title: "Backend Development",
    description:
      "Robust and scalable server-side applications using modern backend technologies.",
    strategyDescription:
      "Our backend strategy emphasizes building robust, scalable, and secure server-side applications. We use modern languages and frameworks to design efficient APIs, enable seamless integrations, and ensure high availability and performance under load.",

    tags: [
      {
        name: "API Development",
        description: "We build secure and efficient REST or GraphQL APIs.",
      },
      {
        name: "Database Management",
        description:
          "We design and optimize databases for performance and scalability.",
      },
      {
        name: "Cloud Integration",
        description: "We deploy backend solutions on AWS, Azure, or GCP.",
      },
    ],
    logos: [
      "/images/technologies/FastAPI.svg",
      "/images/technologies/node-js.png",
      "/images/technologies/Express.svg",
      "/images/technologies/Python.svg",
      "/images/technologies/MongoDB.svg",
      "/images/technologies/PostgresSQL.svg",
      "/images/technologies/aws.png",
      "/images/technologies/Mongoose.svg",
      "/images/technologies/Nodemon.svg",
    ],
    cardsData: [
      {
        title: "Efficient APIs",
        description:
          "Secure and scalable REST or GraphQL APIs for seamless integration.",
      },
      {
        title: "Robust Databases",
        description:
          "Optimized database solutions for high performance and growth.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Requirement Analysis",
        description:
          "Defining backend requirements for scalability and integration.",
      },
      {
        step: "STEP 2",
        title: "API Design",
        description: "Crafting secure and efficient REST or GraphQL APIs.",
      },
      {
        step: "STEP 3",
        title: "Database Development",
        description: "Building optimized databases with MongoDB or PostgreSQL.",
      },
      {
        step: "STEP 4",
        title: "Cloud Deployment",
        description:
          "Deploying scalable backend solutions on AWS, Azure, or GCP.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Web"],
    showInAll: false,
  },
  {
    id: 19,
    slug: "ci-cd-automation",
    title: "CI/CD Automation",
    description:
      "Automated build, test, and deployment pipelines for rapid and reliable software delivery.",
    strategyDescription:
      "Our CI/CD strategy automates build, test, and deployment pipelines to accelerate delivery cycles and improve reliability. We integrate best practices to ensure faster rollouts, minimal downtime, and continuous improvement in software quality.",

    tags: [
      {
        name: "Pipeline Automation",
        description:
          "We design automated CI/CD pipelines using Jenkins, GitLab CI, or GitHub Actions.",
      },
      {
        name: "Testing Integration",
        description:
          "We integrate unit, integration, and end-to-end tests into CI/CD workflows.",
      },
      {
        name: "Deployment Strategies",
        description:
          "We implement blue-green, canary, and rolling deployments for minimal downtime.",
      },
    ],
    logos: [
      "/images/technologies/Jenkins.svg",
      "/images/technologies/GitLab.svg",
      "/images/technologies/GitHub.svg",
      "/images/technologies/CircleCI.svg",
      "/images/technologies/Travis CI.svg",
    ],
    cardsData: [
      {
        title: "Streamlined Pipelines",
        description:
          "Automated CI/CD for faster and consistent software releases.",
      },
      {
        title: "Zero-Downtime Deployments",
        description: "Advanced strategies for seamless and reliable updates.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["DevOps"],
    showInAll: false,
  },
  {
    id: 20,
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure Management",
    description:
      "Scalable and secure cloud infrastructure setup and management for optimal performance.",
    strategyDescription:
      "Our cloud infrastructure strategy focuses on designing and managing scalable, secure, and cost-effective environments. We leverage leading cloud providers, implement best practices for high availability, and optimize resources for performance and compliance.",

    tags: [
      {
        name: "Cloud Orchestration",
        description:
          "We manage cloud resources using AWS, Azure, or GCP services.",
      },
      {
        name: "Cost Optimization",
        description:
          "We optimize cloud resources for cost efficiency and scalability.",
      },
    ],
    logos: [
      "/images/technologies/aws.png",
      "/images/technologies/Azure.svg",
      "/images/technologies/GCC.svg",
      "/images/technologies/Terraform-icon.svg",
    ],
    cardsData: [
      {
        title: "Cloud Scalability",
        description:
          "Flexible infrastructure to support growth and high demand.",
      },
      {
        title: "Cost Efficiency",
        description: "Optimized cloud setups to minimize operational expenses.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Cloud", "DevOps"],
    showInAll: false,
  },
  {
    id: 21,
    slug: "monitoring-observability",
    title: "Monitoring and Observability",
    description:
      "Comprehensive monitoring and logging solutions for real-time system insights and performance tracking.",
    strategyDescription:
      "Our monitoring and observability strategy provides comprehensive, real-time insights into your systems. We implement advanced logging, alerting, and analytics to ensure proactive issue detection, performance optimization, and operational excellence.",

    tags: [
      {
        name: "Real-Time Monitoring",
        description:
          "We implement Prometheus and Grafana for live system metrics.",
      },
      {
        name: "Log Management",
        description:
          "We use ELK Stack or Loki for centralized logging and analysis.",
      },
      {
        name: "Alerting Systems",
        description:
          "We configure proactive alerts for system health and anomalies.",
      },
    ],
    logos: [
      "/images/technologies/Grafana.svg",
      "/images/technologies/prometheus.png",
      "/images/technologies/NewRelic.png",
      "/images/technologies/Terraform-icon.svg",
    ],
    cardsData: [
      {
        title: "Real-Time Insights",
        description: "Live monitoring for proactive system health management.",
      },
      {
        title: "Centralized Logging",
        description:
          "Unified logs for quick diagnostics and performance tracking.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["DevOps"],
    showInAll: false,
  },
  {
    id: 22,
    slug: "machine-learning",
    title: "Machine Learning",
    description:
      "Building and deploying predictive models using advanced machine learning algorithms.",
    strategyDescription:
      "Our machine learning strategy revolves around developing accurate, production-ready predictive models. We focus on data preprocessing, feature engineering, and model optimization to deliver impactful insights and intelligent automation for your business.",

    tags: [
      {
        name: "Predictive Modeling",
        description:
          "We develop models for forecasting and decision-making using TensorFlow and PyTorch.",
      },
      {
        name: "Model Optimization",
        description:
          "We fine-tune models for accuracy and performance with hyperparameter tuning.",
      },
      {
        name: "MLOps",
        description:
          "We automate model deployment and monitoring using MLflow and Kubeflow.",
      },
    ],
    logos: [
      "/images/technologies/TensorFlow.svg",
      "/images/technologies/pytorch.png",
      "/images/technologies/scikit-learn.svg",
      "/images/technologies/Webflow.svg",
    ],
    cardsData: [
      {
        title: "Predictive Analytics",
        description:
          "Accurate models for forecasting and strategic decision-making.",
      },
      {
        title: "Automated MLOps",
        description:
          "Streamlined pipelines for model deployment and monitoring.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["AI"],
    showInAll: false,
  },
  {
    id: 23,
    slug: "data-visualization",
    title: "Data Visualization",
    description:
      "Creating interactive and insightful dashboards for data-driven decision-making.",
    strategyDescription:
      "Our data visualization strategy transforms complex data into interactive, easy-to-understand dashboards. We focus on clarity, storytelling, and user-centric design to empower decision-makers with actionable insights at a glance.",

    tags: [
      {
        name: "Interactive Dashboards",
        description:
          "We build dynamic visualizations using Tableau, Power BI, and Plotly.",
      },
      {
        name: "Data Storytelling",
        description:
          "We craft visuals that communicate insights clearly and effectively.",
      },
      {
        name: "Real-Time Analytics",
        description:
          "We enable live data updates for up-to-date visualizations.",
      },
    ],
    logos: [
      "/images/technologies/powerbi.jpg",
      "/images/technologies/NumPy.svg",
      "/images/technologies/Ploty.svg",
      "/images/technologies/D3.svg",
      "/images/technologies/Matplotlib.svg",
    ],
    cardsData: [
      {
        title: "Dynamic Dashboards",
        description: "Interactive visuals for real-time data-driven decisions.",
      },
      {
        title: "Clear Insights",
        description:
          "Effective storytelling through intuitive data visualizations.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Data Collection",
        description: "Gathering relevant data for insightful visualizations.",
      },
      {
        step: "STEP 2",
        title: "Dashboard Design",
        description:
          "Crafting interactive dashboards with Tableau or Power BI.",
      },
      {
        step: "STEP 3",
        title: "Data Integration",
        description: "Enabling real-time data updates for dynamic visuals.",
      },
      {
        step: "STEP 4",
        title: "Insight Delivery",
        description:
          "Delivering clear, actionable insights through visualizations.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Data"],
    showInAll: false,
  },
  {
    id: 24,
    slug: "big-data-processing",
    title: "Big Data Processing",
    description:
      "Handling and analyzing large-scale datasets with distributed computing frameworks.",
    strategyDescription:
      "Our big data strategy enables efficient processing and analysis of massive datasets using distributed computing frameworks like Hadoop and Spark. We ensure scalability, high performance, and cost efficiency to unlock value from your data at scale.",

    tags: [
      {
        name: "Distributed Computing",
        description:
          "We process massive datasets using Apache Spark and Hadoop.",
      },
      {
        name: "Data Pipelines",
        description: "We build scalable ETL pipelines with Airflow and Kafka.",
      },
      {
        name: "Cloud Integration",
        description:
          "We leverage AWS Redshift, Google BigQuery, or Snowflake for big data storage.",
      },
    ],
    logos: [
      "/images/technologies/Spark.svg",
      "/images/technologies/Hadoop.svg",
      "/images/technologies/Airflow.svg",
      "/images/technologies/Kafka.svg",
    ],
    cardsData: [
      {
        title: "Large-Scale Processing",
        description:
          "Efficient handling of massive datasets with distributed systems.",
      },
      {
        title: "Scalable Pipelines",
        description:
          "Robust ETL workflows for batch and streaming data processing.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Data"],
    showInAll: false,
  },
  {
    id: 25,
    slug: "natural-language-processing",
    title: "Natural Language Processing",
    description:
      "Developing solutions for text analysis, sentiment detection, and language understanding.",
    strategyDescription:
      "Our NLP strategy leverages advanced text analysis techniques to understand, interpret, and generate human language. We focus on sentiment analysis, entity recognition, and language modeling to build intelligent, language-aware applications.",

    tags: [
      {
        name: "Text Analytics",
        description:
          "We extract insights from text using NLTK, SpaCy, and Hugging Face.",
      },
      {
        name: "Chatbot Development",
        description: "We build intelligent chatbots with Dialogflow and Rasa.",
      },
      {
        name: "Sentiment Analysis",
        description: "We analyze text to detect emotions and opinions.",
      },
    ],
    logos: [
      "/images/technologies/NLTK.png",
      "/images/technologies/SpaCy.png",
      "/images/technologies/HuggingFace.svg",
      "/images/technologies/Dialogflow.png",
    ],
    cardsData: [
      {
        title: "Text Insights",
        description:
          "Advanced NLP for extracting meaning from unstructured text.",
      },
      {
        title: "Conversational AI",
        description:
          "Intelligent chatbots for enhanced user engagement and support.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Data"],
    showInAll: false,
  },
  {
    id: 26,
    slug: "configuration-management",
    title: "Configuration Management",
    description:
      "Streamlining server and application configurations through automation tools.",
    strategyDescription:
      "Our configuration management strategy automates and standardizes server and application configurations. We use tools like Ansible, Chef, or Puppet to ensure consistency, reduce errors, and simplify infrastructure maintenance and scaling.",

    tags: [
      {
        name: "Automated Configurations",
        description:
          "We use Ansible, Puppet, and Chef for consistent system setups.",
      },
      {
        name: "Compliance Enforcement",
        description:
          "We ensure configurations meet security and regulatory standards.",
      },
      {
        name: "Scalable Management",
        description:
          "We automate configurations for large-scale cloud environments.",
      },
    ],
    logos: [
      "/images/technologies/Ansible.svg",
      "/images/technologies/Puppet.svg",
      "/images/technologies/aws.png",
      "/images/technologies/GCC.svg",
    ],
    cardsData: [
      {
        title: "Consistent Setups",
        description:
          "Automated configurations for uniform server environments.",
      },
      {
        title: "Secure Compliance",
        description: "Ensuring adherence to security and regulatory standards.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Cloud"],
    showInAll: false,
  },
  {
    id: 27,
    slug: "serverless-automation",
    title: "Serverless Automation",
    description:
      "Building and managing serverless architectures for cost-efficient and scalable applications.",
    strategyDescription:
      "Our serverless strategy focuses on designing scalable, cost-efficient applications without server management overhead. We leverage frameworks like AWS Lambda or Azure Functions to build event-driven architectures that scale seamlessly with demand.",

    tags: [
      {
        name: "Serverless Frameworks",
        description:
          "We use AWS Lambda, Azure Functions, and Google Cloud Functions.",
      },
      {
        name: "Event-Driven Automation",
        description:
          "We design workflows triggered by events for real-time processing.",
      },
      {
        name: "Cost Optimization",
        description:
          "We optimize serverless setups for minimal operational costs.",
      },
    ],
    logos: [
      "/images/technologies/aws.png",
      "/images/technologies/Azure.svg",
      "/images/technologies/Google Cloud.svg",
      "/images/technologies/Serverless.png",
      "/images/technologies/EventBridge.svg",
    ],
    cardsData: [
      {
        title: "Serverless Scalability",
        description: "Auto-scaling apps with zero server management overhead.",
      },
      {
        title: "Event-Driven Workflows",
        description:
          "Real-time processing with optimized serverless architectures.",
      },
    ],
    steps: [],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Cloud"],
    showInAll: false,
  },
  {
    id: 28,
    slug: "smart-contract-development",
    title: "Smart Contract Development",
    description:
      "Building secure and automated smart contracts for decentralized applications on blockchain platforms.",
    strategyDescription:
      "Our smart contract strategy ensures secure, efficient, and fully audited code for blockchain applications. We focus on Solidity or Rust development, rigorous testing, and gas optimization to deliver reliable decentralized solutions.",

    tags: [
      {
        name: "Solidity Programming",
        description:
          "We develop smart contracts using Solidity for Ethereum and compatible blockchains.",
      },
      {
        name: "Security Audits",
        description:
          "We conduct rigorous audits to ensure smart contracts are secure and bug-free.",
      },
      {
        name: "Automation",
        description:
          "We create self-executing contracts to automate trustless transactions.",
      },
    ],
    logos: [
      "/images/technologies/Solidity.svg",
      "/images/technologies/ethereum.png",
      "/images/technologies/hardhat.svg",
      "/images/technologies/OpenZeppelin.png",
    ],
    cardsData: [
      {
        title: "Secure Contracts",
        description:
          "Tamper-proof smart contracts for reliable blockchain operations.",
      },
      {
        title: "Automated Transactions",
        description:
          "Self-executing contracts for trustless and efficient workflows.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Contract Planning",
        description:
          "Defining smart contract requirements for blockchain applications.",
      },
      {
        step: "STEP 2",
        title: "Solidity Development",
        description:
          "Building secure contracts using Solidity for Ethereum platforms.",
      },
      {
        step: "STEP 3",
        title: "Security Audits",
        description:
          "Conducting rigorous audits to ensure contract reliability.",
      },
      {
        step: "STEP 4",
        title: "Contract Deployment",
        description:
          "Deploying smart contracts for automated, trustless transactions.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Blockchain"],
    showInAll: false,
  },
  {
    id: 29,
    slug: "decentralized-finance",
    title: "Decentralized Finance (DeFi)",
    description:
      "Developing decentralized financial applications for peer-to-peer transactions without intermediaries.",
    strategyDescription:
      "Our DeFi strategy empowers financial systems with transparent, trustless, and automated protocols. We design secure smart contracts, integrate liquidity solutions, and build user-friendly interfaces to drive adoption of decentralized financial services.",

    tags: [
      {
        name: "DeFi Protocols",
        description:
          "We build protocols for lending, borrowing, and trading on blockchains.",
      },
      {
        name: "Liquidity Pools",
        description:
          "We create solutions for decentralized liquidity provision and yield farming.",
      },
      {
        name: "Tokenomics",
        description:
          "We design token economies to incentivize participation and growth.",
      },
    ],
    logos: [
      "/images/technologies/Uniswap.svg",
      "/images/technologies/Aave.svg",
      "/images/technologies/Compound.svg",
      "/images/technologies/Chainlink.svg",
      "/images/technologies/MakerDAO.svg",
    ],
    cardsData: [
      {
        title: "DeFi Protocols",
        description: "Decentralized solutions for lending, trading, and more.",
      },
      {
        title: "Liquidity Solutions",
        description:
          "Scalable liquidity pools for seamless financial operations.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "Protocol Planning",
        description:
          "Designing DeFi protocols for lending, trading, and borrowing.",
      },
      {
        step: "STEP 2",
        title: "Tokenomics Design",
        description:
          "Crafting sustainable token economies to drive participation.",
      },
      {
        step: "STEP 3",
        title: "Smart Contract Development",
        description:
          "Building secure contracts for decentralized finance applications.",
      },
      {
        step: "STEP 4",
        title: "Platform Deployment",
        description:
          "Launching scalable DeFi solutions on blockchain networks.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Blockchain"],
    showInAll: false,
  },
  {
    id: 30,
    slug: "non-fungible-tokens",
    title: "Non-Fungible Tokens (NFTs)",
    description:
      "Creating and managing unique digital assets for ownership and trading on blockchain networks.",
    strategyDescription:
      "Our NFT strategy covers the full lifecycle from minting to marketplace deployment. We create unique, verifiable digital assets and build trading platforms that enable secure buying, selling, and showcasing of digital collectibles and art.",

    tags: [
      {
        name: "NFT Minting",
        description:
          "We develop platforms for creating and minting unique digital assets.",
      },
      {
        name: "Marketplaces",
        description:
          "We build NFT marketplaces for buying, selling, and trading.",
      },
      {
        name: "Digital Ownership",
        description:
          "We enable verifiable ownership of digital art, collectibles, and more.",
      },
    ],
    logos: [
      "/images/technologies/OpenSea.png",
      "/images/technologies/Rarible.png",
      "/images/technologies/IPFS.png",
      "/images/technologies/solana.jpg",
      "/images/technologies/Polygon.svg",
    ],
    cardsData: [
      {
        title: "NFT Creation",
        description:
          "Platforms for minting unique and verifiable digital assets.",
      },
      {
        title: "Marketplace Solutions",
        description:
          "Seamless NFT trading platforms for creators and collectors.",
      },
    ],
    steps: [
      {
        step: "STEP 1",
        title: "NFT Planning",
        description: "Defining requirements for unique digital asset creation.",
      },
      {
        step: "STEP 2",
        title: "Minting Platform",
        description:
          "Building platforms for secure NFT minting and management.",
      },
      {
        step: "STEP 3",
        title: "Marketplace Development",
        description:
          "Creating NFT marketplaces for buying, selling, and trading.",
      },
      {
        step: "STEP 4",
        title: "Blockchain Deployment",
        description: "Deploying NFT solutions on Solana, Polygon, or Ethereum.",
      },
    ],
    projectImages: [
      {
        title: "Left Most",
        img: "/images/services-detail/web-left-most.png",
        url: "algotix.ai",
      },
      {
        title: "Second Left",
        img: "/images/services-detail/web-second-left.png",
        url: "algotix.ai",
      },
      {
        title: "Center",
        img: "/images/services-detail/web-center.png",
        url: "algotix.ai",
      },
      {
        title: "Second Right",
        img: "/images/services-detail/web-second-right.png",
        url: "algotix.ai",
      },
      {
        title: "Right Most",
        img: "/images/services-detail/web-right-most.png",
        url: "algotix.ai",
      },
    ],
    categories: ["Blockchain"],
    showInAll: false,
  },
];

export const blogData = [
  {
    id: 1,
    title: "How our AI services can transform your business",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/services/dron.jpg",
    authorImage: "/images/services/reviewer_img_1.png",
    author: "John Doe",
    date: "July 15, 2022",
  },
  {
    id: 2,
    title: "Top 5 Tips for App Development",
    description: "Learn the best practices for app development.",
    image: "/images/services/dron.jpg",
    authorImage: "/images/services/reviewer_img_2.png",
    author: "Jane Smith",
    date: "June 20, 2022",
  },
  {
    id: 3,
    title: "Top 5 Tips ",
    description: "Learn the best practices for app development.",
    image: "/images/services/dron.jpg",
    authorImage: "/images/services/reviewer_img_2.png",
    author: "Jane Smith",
    date: "June 20, 2022",
  },
  {
    id: 4,
    title: " App Development",
    description: "Learn the best practices for app development.",
    image: "/images/services/dron.jpg",
    authorImage: "/images/services/reviewer_img_2.png",
    author: "Jane Smith",
    date: "June 20, 2022",
  },
  {
    id: 5,
    title: " for App Development",
    description: "Learn the best practices for app development.",
    image: "/images/services/dron.jpg",
    authorImage: "/images/services/reviewer_img_2.png",
    author: "Jane Smith",
    date: "June 20, 2022",
  },
] as const;

export const serviceData: ServiceData = {
  title: "Smart Solutions for Every Stage of Your Digital Journey",
  description:
    "At Algotix AI, we offer a full spectrum of software development and AI-driven services designed to solve real business problems and accelerate digital transformation. Whether you're building a product from scratch, integrating advanced AI models, or modernizing legacy systems, our team of experts delivers tailored, scalable, and secure solutions.",
  images: {
    left: "/images/services/services-image.png",
    banner: "/images/services/services-banner.png",
  },
};
export const transformSectionData = {
  title: "Have Questions?",
  description:
    "Have an idea, project, or challenge? Let’s build something exceptional together.",
  buttonText: "Contact us",
};

export const workflowSectionData: WorkflowSectionData = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};
