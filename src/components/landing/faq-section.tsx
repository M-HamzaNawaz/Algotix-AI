import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FaqAccordion, {
  type FaqItem,
} from "@/src/components/landing/faq-accordion";
import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import { Reveal } from "@/src/components/motion/reveal";

/** FAQ band with the accordion and a closing link to the contact page. */
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
  return (
    <PageSection dark={dark} id={id}>
      {showHeading && (
        <Reveal amount={0.25}>
          <SectionHeading
            tone={dark ? "dark" : "light"}
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Straight answers on how we work, who we work with, and what happens after launch."
          />
        </Reveal>
      )}

      <div className={`mx-auto max-w-4xl ${showHeading ? "mt-14" : ""}`}>
        <FaqAccordion items={items} tone={tone} />
      </div>

      <Reveal className="mt-12" amount={0.3}>
        <div className="text-center">
          <p
            className={`text-body ${dark ? "text-white/60" : "text-[#6B6F76]"}`}
          >
            Still have questions? We are here to help.
          </p>
          <Link
            href="/contact"
            className={`text-label group mt-5 inline-flex items-center gap-3 rounded-control px-8 py-4 uppercase transition-transform duration-300 hover:-translate-y-0.5 ${dark ? "bg-white text-[#14141D]" : "bg-[linear-gradient(315deg,#FF5A01_0%,#FD5901_100%)] text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)]"}`}
          >
            Contact our support team
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </PageSection>
  );
}
