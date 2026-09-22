"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import { Reveal } from "@/src/components/motion/reveal";
import { projects } from "@/src/containers/projects/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const INITIAL_COUNT = 6;

const filters = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

/** Filterable case-study grid in the landing card style. */
export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const matching =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const visible = showAll ? matching : matching.slice(0, INITIAL_COUNT);

  return (
    <PageSection id="projects">
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="Our work"
          title="Selected case studies"
          description="A selection of the products we have designed, built and shipped for clients across industries."
        />
      </Reveal>

      <Reveal className="mt-10" amount={0.3}>
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mx-auto flex w-max max-w-full flex-wrap justify-center gap-1 rounded-full border border-[#E4E4E8] bg-[#F6F6F7] p-1"
        >
          {filters.map((item) => {
            const isActive = item === filter;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setFilter(item);
                  setShowAll(false);
                }}
                className={`relative isolate rounded-full px-5 py-2 text-label uppercase transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#3A3D45] hover:text-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 420, damping: 38 }}
                  />
                )}
                {item}
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div
        layout
        className="mt-12 grid gap-8 tablet:grid-cols-2 laptop:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: EASE }}
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {matching.length > INITIAL_COUNT && !showAll && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="group inline-flex items-center gap-3 rounded-full border border-[#14141D]/25 px-8 py-4 text-label uppercase text-[#14141D] transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
          >
            Show all projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </PageSection>
  );
}
