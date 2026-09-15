import gear from "@/public/gear.svg";
import globe from "@/public/globe.svg";
import rocket from "@/public/rocket.svg";

interface WorkWithUsBenefits {
  title: string;
  description: string;
  icon: string;
}

export interface WorkWithUsDataType {
  benefits: WorkWithUsBenefits[];
}

const workWithUsBenefits: WorkWithUsBenefits[] = [
  {
    icon: rocket,
    title: "Expertise That Delivers",
    description:
      "Our team consists of seasoned developers, AI engineers, and solution architects with proven experience across industries and technologies. We turn complex challenges into reliable, scalable solutions.",
  },
  {
    icon: gear,
    title: "Custom Solutions, No Compromises",
    description:
      "We don’t believe in one-size-fits-all. Every product we build is tailored to your unique business goals—whether it's a new AI model, mobile app, or an integrated cloud platform.",
  },
  {
    icon: globe,
    title: "Global Standards, Local Commitment",
    description:
      "Based in Pakistan, delivering worldwide. We offer the perfect blend of global quality and local agility, ensuring responsive support, efficient timelines, and cost-effective services.",
  },
];

export const workWithUsData: WorkWithUsDataType = {
  benefits: workWithUsBenefits,
};
