import { Code2, Handshake, PhoneCall, Send } from "lucide-react";
import type { StripStep } from "@/src/components/landing/steps-strip";

/** Where applications go while no roles are listed. */
export const careersEmail = "hr@algotix.ai";

export interface OpenRole {
  title: string;
  team: string;
  location: string;
  type: string;
  /** Where to apply: a page, a job board listing, or a mailto link. */
  href: string;
}

/* Empty on purpose: there are no open positions at the moment. Add roles here
   and the careers page lists them automatically. */
export const openRoles: OpenRole[] = [];

/** The steps between an application and a first day. */
export const hiringSteps: StripStep[] = [
  {
    title: "Apply",
    description:
      "Send your CV and a few lines about the work you are proudest of. A link to code or a product you shipped helps.",
    icon: Send,
  },
  {
    title: "Intro call",
    description:
      "A short conversation about your background, what you are looking for and how the team works day to day.",
    icon: PhoneCall,
  },
  {
    title: "Technical conversation",
    description:
      "A practical discussion around real problems from our projects, with an engineer you would work with. No trick questions.",
    icon: Code2,
  },
  {
    title: "Offer and onboarding",
    description:
      "A clear offer, then a structured first few weeks so you are shipping with the team early on.",
    icon: Handshake,
  },
];
