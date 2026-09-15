export interface ServiceData {
  title: string;
  description: string;
  images: {
    left: string;
    banner: string;
  };
}

interface CardItem {
  title: string;
  description: string;
}
interface ImagesData {
  title: string;
  img: string;
  url: string;
}

export interface OurServiceData {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: { name: string; description: string }[];
  logos: string[];
  cardsData: CardItem[];
  projectImages: ImagesData[];
  strategyDescription?: string;
}

export interface WorkflowSectionData {
  description: string;
}
