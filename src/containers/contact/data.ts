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
    title: "+1 (530) 992-8933",
    description: "Say Hello to Algotix AI!",
    link: "tel:+15309928933",
  },
];

import { FileText, MessageSquare, PhoneCall } from "lucide-react";
import type { StripStep } from "@/src/components/landing/steps-strip";

/** What happens after someone gets in touch. */
export const nextSteps: StripStep[] = [
  {
    title: "Tell us about it",
    description:
      "Use the form, email or phone. A few lines about what you are building and where you are today is enough to start.",
    icon: MessageSquare,
  },
  {
    title: "We talk it through",
    description:
      "A short call to understand your goals, constraints and timeline, and to answer your questions about how we work.",
    icon: PhoneCall,
  },
  {
    title: "You get a clear proposal",
    description:
      "Scope, team, approach and an estimate, written so you can compare options and decide with confidence.",
    icon: FileText,
  },
];
