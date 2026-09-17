"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import { Reveal } from "@/src/components/motion/reveal";
import { ourServiceData } from "@/src/containers/services/data";
import { primaryServiceSlugs, serviceIcons, serviceImages } from "./data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = primaryServiceSlugs
  .map((slug) => ourServiceData.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

/**
 * A list of services on the left, the selected one explained on the right.
 *
 * Every service's photo and copy stay mounted and cross-fade in place, so the
 * panel is sized by the longest entry and never changes height while the
 * visitor moves through the list. The list rows stretch to match it.
 */
export default function ServiceExplorer() {
  const [active, setActive] = useState(0);

  return (
    <PageSection id="services">
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="Our Services"
          title="Software development services"
          description="Product-minded engineering across web, mobile, cloud, data and AI, so you can ship faster without sacrificing quality."
        />
      </Reveal>

      <Reveal className="mt-14" amount={0.08}>
        <div className="grid overflow-hidden rounded-2xl border border-[#E4E4E8] bg-white laptop:grid-cols-[340px_minmax(0,1fr)]">
          <ul className="flex flex-col border-b border-[#E4E4E8] laptop:border-b-0 laptop:border-r">
            {services.map((item, i) => {
              const Icon = serviceIcons[item.slug];
              const isActive = i === active;
              return (
                <li
                  key={item.slug}
                  className="flex flex-1 border-b border-[#E4E4E8] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`relative isolate flex w-full items-center gap-4 px-6 py-5 text-left transition-colors duration-300 ${
                      isActive ? "" : "hover:bg-[#FAFAFB]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="service-row-highlight"
                        className="absolute inset-0 -z-10 bg-[#F6F6F7]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 38,
                        }}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="service-row-bar"
                        className="absolute inset-y-0 left-0 w-[3px] bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 38,
                        }}
                      />
                    )}
                    {Icon && (
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                          isActive
                            ? "bg-primary text-white"
                            : "bg-[#FFF3EA] text-primary"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                    )}
                    <span
                      className={`text-[15px] leading-snug ${
                        isActive
                          ? "font-semibold text-[#14141D]"
                          : "font-medium text-[#3A3D45]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="min-w-0 p-8 tablet:p-12">
            {/* The field's photo, the same size for every service. */}
            <div className="relative h-[220px] overflow-hidden rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7] tablet:h-[300px]">
              {services.map((item, i) => {
                const image = serviceImages[item.slug];
                if (!image) return null;
                const isActive = i === active;
                return (
                  <motion.div
                    key={item.slug}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 1.04,
                    }}
                    transition={{ duration: 0.6, ease: EASE }}
                    aria-hidden={!isActive}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* From laptop width up, all nine copy blocks share one grid cell,
                so this area is as tall as the longest of them and the card
                never resizes. Stacked layouts just show the active one. */}
            <div className="mt-9 laptop:grid">
              {services.map((item, i) => {
                const isActive = i === active;
                return (
                  <motion.div
                    key={item.slug}
                    className={`laptop:[grid-area:1/1] ${
                      isActive ? "" : "pointer-events-none hidden laptop:block"
                    }`}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 12,
                    }}
                    transition={{ duration: 0.4, ease: EASE }}
                    inert={!isActive}
                    aria-hidden={!isActive}
                  >
                    <h3 className="text-[26px] font-bold leading-tight text-primary tablet:text-[34px]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-[16px] leading-relaxed text-[#3A3D45] tablet:text-[17px]">
                      {item.description}
                    </p>
                    {item.strategyDescription && (
                      <p className="mt-4 text-[16px] leading-relaxed text-[#6B6F76] tablet:text-[17px]">
                        {item.strategyDescription}
                      </p>
                    )}

                    {item.tags.length > 0 && (
                      <div className="mt-7 flex flex-wrap gap-2.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag.name}
                            className="rounded-full border border-[#E4E4E8] bg-[#F6F6F7] px-3.5 py-1.5 text-[12px] font-medium text-[#3A3D45]"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/services/${item.slug}`}
                      tabIndex={isActive ? 0 : -1}
                      className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(315deg,#FF5A01_0%,#FD5901_100%)] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Explore {item.title}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </PageSection>
  );
}
