import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import { ServicePhotoCard } from "@/src/components/landing/service-cards";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { primaryServiceSlugs } from "@/src/components/services-page/data";
import { ourServiceData } from "@/src/containers/services/data";

interface ServicesGridProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  /** Which services to show, in order. Defaults to the first six. */
  slugs?: string[];
  tone?: "light" | "dark";
  /** Optional link under the heading, e.g. to the full services page. */
  link?: { label: string; href: string };
  id?: string;
}

/**
 * A row of photo-led service cards drawn from the services data, for the
 * about page and the "related services" band on a service page.
 */
export default function ServicesGrid({
  eyebrow = "What we do",
  title,
  description,
  slugs = primaryServiceSlugs.slice(0, 6),
  tone = "light",
  link,
  id,
}: ServicesGridProps) {
  const dark = tone === "dark";
  const services = slugs
    .map((slug) => ourServiceData.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <PageSection dark={dark} id={id}>
      <Reveal amount={0.25}>
        <SectionHeading
          tone={dark ? "dark" : "light"}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {link && (
          <div className="mt-8 text-center">
            <Link
              href={link.href}
              className={`text-small group inline-flex items-center gap-2 font-semibold transition-colors duration-300 hover:text-primary ${
                dark ? "text-white" : "text-[#14141D]"
              }`}
            >
              {link.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </Reveal>

      {/* Phones get a swipeable rail, larger screens a grid. */}
      <div className="relative mt-14">
        <RevealGroup
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] tablet:mx-0 tablet:grid tablet:snap-none tablet:grid-cols-2 tablet:gap-5 tablet:overflow-visible tablet:px-0 tablet:pb-0 laptop:grid-cols-3 laptop:auto-rows-[340px]"
          stagger={0.12}
          amount={0.08}
        >
          {services.map((service, i) => (
            <RevealItem
              key={service.slug}
              className="w-[78vw] shrink-0 snap-start tablet:w-auto"
              distance={28}
              scale={0.97}
              direction={i % 3 === 0 ? "right" : i % 3 === 2 ? "left" : "up"}
            >
              <ServicePhotoCard service={service} index={i + 1} />
            </RevealItem>
          ))}
        </RevealGroup>
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l to-transparent tablet:hidden ${
            dark ? "from-[#0B0B12]" : "from-white"
          }`}
        />
      </div>
    </PageSection>
  );
}
