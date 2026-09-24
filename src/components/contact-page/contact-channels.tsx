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
import DrawLine from "@/src/components/motion/draw-line";
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

function labelFor(link: string): string {
  if (link.startsWith("mailto:")) return "Email";
  if (link.startsWith("tel:")) return "Phone";
  return "Office";
}

/**
 * Email, phone and address set large, as three typographic rows under one
 * rule. The whole row is the link; hovering it turns the text orange and
 * sends the arrow on its way.
 */
export default function ContactChannels() {
  return (
    <PageSection id="channels">
      <div className="grid gap-10 laptop:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] laptop:gap-20">
        <Reveal direction="right" distance={30} amount={0.25}>
          <SectionHeading
            align="left"
            eyebrow="Contact us"
            title="Ways to reach us"
            description="Write, call, or drop by. Whichever you choose, a person reads it."
          />
        </Reveal>

        <RevealGroup
          as="ul"
          className="relative border-t border-[#E4E4E8]"
          stagger={0.14}
          amount={0.15}
        >
          <DrawLine
            axis="x"
            delay={0.1}
            className="absolute -top-px left-0 h-px w-full bg-primary"
          />
          {contactData.map((item) => {
            const Icon = iconFor(item.link);
            const external = item.link.startsWith("http");
            const isAddress =
              !item.link.startsWith("mailto:") && !item.link.startsWith("tel:");
            return (
              <RevealItem
                as="li"
                key={item.title}
                direction="left"
                distance={26}
                className="border-b border-[#E4E4E8]"
              >
                <Link
                  href={item.link}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary tablet:gap-8 tablet:py-9"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#FFF3EA] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="text-label block uppercase text-[#A0A4AB]">
                      {labelFor(item.link)}
                    </span>
                    <span
                      className={`mt-1.5 block break-words text-[#14141D] transition-colors duration-300 group-hover:text-primary ${
                        isAddress ? "text-subheading" : "text-heading"
                      }`}
                    >
                      {isAddress ? item.description : item.title}
                    </span>
                    {!isAddress && (
                      <span className="text-small mt-1 block text-[#6B6F76]">
                        {item.description}
                      </span>
                    )}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#14141D]/15 text-[#14141D] transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </PageSection>
  );
}
