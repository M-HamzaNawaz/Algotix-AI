import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import {
  primaryServiceSlugs,
  serviceIcons,
} from "@/src/components/services-page/data";
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
 * A cascade of service cards drawn from the services data, so the home page
 * and the "related services" band on a service page stay in step with the
 * services page itself.
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

  const card = dark
    ? "border-white/10 bg-[rgba(255,255,255,0.04)] backdrop-blur-sm hover:border-primary/60 hover:bg-[rgba(255,255,255,0.07)]"
    : "glow-light sheen-light border-[#E4E4E8] bg-white hover:border-primary/40 hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.35)]";
  const tile = dark
    ? "border border-white/15 bg-[rgba(255,255,255,0.06)] group-hover:border-primary"
    : "bg-[#FFF3EA]";

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

      <RevealGroup
        className="mt-14 grid gap-6 sm:grid-cols-2 laptop:grid-cols-3"
        stagger={0.12}
        amount={0.08}
      >
        {services.map((service, i) => {
          const Icon = serviceIcons[service.slug];
          return (
            <RevealItem
              key={service.slug}
              className="h-full"
              distance={26}
              // Columns lean in from alternating sides so the grid reads as a
              // gathering rather than a single lift.
              direction={i % 3 === 0 ? "right" : i % 3 === 2 ? "left" : "up"}
            >
              <Link
                href={`/services/${service.slug}`}
                className={`glow-card sheen relative isolate overflow-hidden group flex h-full flex-col rounded-2xl border p-7 transition-all duration-400 hover:-translate-y-1.5 ${card}`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-lg text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white ${tile}`}
                >
                  {Icon && <Icon className="h-6 w-6" strokeWidth={1.7} />}
                </span>

                <h3
                  className={`text-subheading mt-6 ${dark ? "text-white" : "text-[#14141D]"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-body mt-3 flex-1 ${dark ? "text-white/60" : "text-[#6B6F76]"}`}
                >
                  {service.description}
                </p>

                <span className="text-small mt-7 inline-flex items-center gap-2 font-semibold text-primary">
                  Explore service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </PageSection>
  );
}
