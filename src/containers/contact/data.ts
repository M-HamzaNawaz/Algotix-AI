export interface ContactData {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const contactData: ContactData[] = [
  {
    icon: "icon-location.png",
    title: "Our address",
    description: "375 Park Ave, New York, NY 10152, United States",
    link: "https://www.google.com/maps/search/?api=1&query=375+Park+Ave,+New+York,+NY+10152,+United+States",
  },
  {
    icon: "email-icon.svg",
    title: "Info@algotix.ai",
    description: "Queries are welcome!",
    link: "mailto:Info@algotix.ai",
  },
  {
    icon: "phone-icon.svg",
    title: "(415) 739-28463",
    description: "Say Hello to Algotix AI!",
    link: "tel:(415) 739-28463",
  },
];
