import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { projects } from "@/src/containers/projects/data";

interface MoreProjectsProps {
  /** The project being read, left out of the picks. */
  exclude?: string;
  count?: number;
  tone?: "light" | "dark";
  id?: string;
}

/** Three other case studies, in the same card as the projects gallery. */
export default function MoreProjects({
  exclude,
  count = 3,
  tone = "light",
  id,
}: MoreProjectsProps) {
  const dark = tone === "dark";
  const picks = projects.filter((p) => p.slug !== exclude).slice(0, count);
  if (picks.length === 0) return null;

  return (
    <PageSection
      id={id}
      dark={dark}
      className={dark ? "" : "border-t border-[#E4E4E8]"}
    >
      <Reveal amount={0.25}>
        <SectionHeading
          tone={dark ? "dark" : "light"}
          eyebrow="More work"
          title="Other case studies"
          description="A few more of the products we have designed, built and shipped."
        />
      </Reveal>

      <RevealGroup
        className="mt-14 grid gap-8 tablet:grid-cols-2 laptop:grid-cols-3"
        stagger={0.14}
        amount={0.08}
      >
        {picks.map((project, i) => (
          <RevealItem
            key={project.slug}
            className="h-full"
            distance={28}
            direction={
              i === 0 ? "right" : i === picks.length - 1 ? "left" : "up"
            }
          >
            <Link
              href={`/project-detail/${project.slug}`}
              className="glow-card glow-light sheen sheen-light relative isolate group flex h-full flex-col overflow-hidden rounded-2xl border border-[#ECECEF] bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.4)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#ECECEF] bg-[#F2F2F4]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-label flex items-center justify-between gap-4 uppercase text-[#A0A4AB]">
                  <span className="text-primary">{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-subheading mt-3 text-[#14141D] transition-colors duration-300 group-hover:text-primary">
                  {project.name}
                </h3>
                <span className="text-small mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                  View case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-12 text-center" amount={0.3}>
        <Link
          href="/projects"
          className={`group inline-flex items-center gap-3 rounded-control border px-8 py-4 text-label uppercase transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white ${
            dark
              ? "border-white/30 text-white"
              : "border-[#14141D]/25 text-[#14141D]"
          }`}
        >
          All projects
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </PageSection>
  );
}
