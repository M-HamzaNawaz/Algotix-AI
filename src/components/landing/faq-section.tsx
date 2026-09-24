import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FaqAccordion, {
  type FaqItem,
} from "@/src/components/landing/faq-accordion";
import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import { Reveal } from "@/src/components/motion/reveal";

/**
 * FAQ as a split: the heading and the closing invitation stay put on the
 * left while the questions run down the right. Without a heading (the FAQ
 * page introduces itself) the questions take the full width.
 */
export default function FaqSection({
  items,
  tone = "dark",
  id = "have-questions",
  showHeading = true,
}: {
  items: FaqItem[];
  tone?: "light" | "dark";
  id?: string;
  /** Off when the page already introduces the FAQ, e.g. under a page intro. */
  showHeading?: boolean;
}) {
  const dark = tone === "dark";
  const cta = (
    <Reveal amount={0.3}>
      <p className={`text-body ${dark ? "text-white/60" : "text-[#6B6F76]"}`}>
        Still have questions? We are here to help.
      </p>
      <Link
        href="/contact"
        className={`text-label group mt-5 inline-flex items-center gap-3 rounded-control px-8 py-4 uppercase transition-transform duration-300 hover:-translate-y-0.5 ${
          dark
            ? "bg-white text-[#14141D]"
            : "bg-primary text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)]"
        }`}
      >
        Contact our support team
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </Reveal>
  );

  if (!showHeading) {
    return (
      <PageSection dark={dark} id={id}>
        <div className="mx-auto max-w-4xl">
          <FaqAccordion items={items} tone={tone} />
          <div className="mt-12 text-center">{cta}</div>
        </div>
      </PageSection>
    );
  }

  return (
    <PageSection dark={dark} id={id}>
      <div className="grid gap-12 laptop:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] laptop:gap-20">
        <div className="laptop:sticky laptop:top-32 laptop:self-start">
          <Reveal direction="right" distance={30} amount={0.25}>
            <SectionHeading
              align="left"
              tone={dark ? "dark" : "light"}
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Straight answers on how we work, who we work with, and what happens after launch."
            />
          </Reveal>
          <div className="mt-10 hidden laptop:block">{cta}</div>
        </div>

        <div>
          <FaqAccordion items={items} tone={tone} />
          <div className="mt-10 laptop:hidden">{cta}</div>
        </div>
      </div>
    </PageSection>
  );
}
