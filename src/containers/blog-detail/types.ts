export interface Topic {
  name: string;
  icon: string;
}

export interface BlogSection {
  title: string;
  content: string;
}

export interface BlogDetail {
  slug: string;
  title: string;
  description: string;
  category: {
    name: string;
    icon: string;
  };
  images: {
    hero: string;
    thumbnail: string;
  };
  sections: BlogSection[];
}
