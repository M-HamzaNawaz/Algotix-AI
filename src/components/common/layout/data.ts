export interface HeroSectionProps {
  welcome?: string;
  welcomeColor?: string;
  title: string;
  titleColor?: string;
  title2?: string;
  title2Color?: string;
  description: string;
  descriptionColor?: string;
  button?: boolean;
  buttonColor?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonTextColor?: string;
  heroCard?: React.ReactNode;
  titleClassName?: string;
  breadcrumb?: boolean;
  stateBox1?: { number: string; label: string };
  stateBox2?: { number: string; label: string };
  stateBox3?: { number: string; label: string };
}

export const consultationLink =
  "https://calendly.com/talkwithusman/algotix-ai-free-consultation";
