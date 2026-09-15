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
    logo: string;
    robot: string;
    tradePro: string;
    discussion: string;
  };
  sections: { title: string; content: string }[];
  result: { title: string; content: string }[];
  checkmarks: string[];
}
