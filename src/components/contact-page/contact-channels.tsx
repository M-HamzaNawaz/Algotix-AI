import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { contactData } from "@/src/containers/contact/data";

function iconFor(link: string): LucideIcon {
  if (link.startsWith("mailto:")) return Mail;
  if (link.startsWith("tel:")) return Phone;
  return MapPin;
}

/** Address, email and phone as three cards in the landing card style. */
export default function ContactChannels() {
  return (
    <PageSection>
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="Contact us"
          title="Ways to reach us"
          description="Write, call, or drop by. We reply to every message within one business day."
        />
      </Reveal>

      <RevealGroup
        className="mt-14 grid gap-6 tablet:grid-cols-3"
        stagger={0.1}
        amount={0.15}
      >
        {contactData.map((item) => {
          const Icon = iconFor(item.link);
          const external = item.link.startsWith("http");
          return (
            <RevealItem key={item.title} className="h-full" distance={32}>
              <Link
                href={item.link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7] p-8 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-[#A0A4AB] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="text-subheading mt-6 text-[#14141D]">
                  {item.title}
                </h3>
                <p className="text-body mt-2 text-[#6B6F76]">
                  {item.description}
                </p>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </PageSection>
  );
}
