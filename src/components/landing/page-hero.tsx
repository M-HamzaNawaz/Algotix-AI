"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import MeetingEmailForm from "@/src/components/meetingEmailForm";
import { MountRevealGroup } from "@/src/components/motion/mount-reveal";
import { RevealItem } from "@/src/components/motion/reveal";

export interface HeroLink {
  label: string;
  /** Omit on the primary action to open the meeting request form instead. */
  href?: string;
}

export interface HeroRailItem {
  label: string;
  href: string;
}

export interface PageHeroProps {
  image: string;
  imageAlt: string;
  /** CSS object-position for the photo, e.g. "center 30%". */
  imagePosition?: string;
  eyebrow: string;
  title: ReactNode;
  /** Second line of the heading, set in the brand orange. */
  accent?: ReactNode;
  description: string;
  primary?: HeroLink;
  secondary?: HeroLink;
  /** Optional list of links pinned to the bottom, like the landing hero. */
  rail?: { label: string; items: HeroRailItem[] };
}

/* Tailwind needs the full class names, so the column count is looked up. */
const RAIL_COLUMNS: Record<number, string> = {
  1: "laptop:grid-cols-1",
  2: "laptop:grid-cols-2",
  3: "laptop:grid-cols-3",
  4: "laptop:grid-cols-4",
  5: "laptop:grid-cols-5",
  6: "laptop:grid-cols-6",
};

/**
 * The full-bleed dark hero every inner page opens with: a photo under brand
 * scrims, a pill eyebrow, a two-line heading, one outlined action and one text
 * link, and an optional rail of links along the bottom edge.
 */
export default function PageHero({
  image,
  imageAlt,
  imagePosition = "center",
  eyebrow,
  title,
  accent,
  description,
  primary,
  secondary,
  rail,
}: PageHeroProps) {
  const [showForm, setShowForm] = useState(false);
  const railColumns = rail ? RAIL_COLUMNS[Math.min(rail.items.length, 6)] : "";

  const actionClass =
    "group inline-flex items-center gap-3 rounded-control border border-white/35 px-7 py-3.5 text-label uppercase text-white transition-all duration-300 hover:border-primary hover:bg-primary";

  return (
    <>
      <section className="relative isolate w-full overflow-hidden bg-[#0B0B12]">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>

        {/* Readability scrims: dark from the left, dark at the top and bottom. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B12] via-[#0B0B12]/80 to-[#0B0B12]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12] via-transparent to-[#0B0B12]/85" />
        <div
          className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(254,89,1,0.22) 0%, rgba(254,89,1,0) 70%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1600px] flex-col px-6 pb-20 pt-32 tablet:min-h-screen sm:px-10 xl:px-[60px] tablet:pb-28">
          <MountRevealGroup
            className="flex flex-1 items-center"
            stagger={0.15}
            delay={0.1}
          >
            <div className="w-full max-w-3xl">
              <RevealItem>
                <span className="text-label inline-flex items-center gap-2 rounded-control border border-white/20 bg-white/5 px-4 py-2 uppercase text-white/80 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {eyebrow}
                </span>
              </RevealItem>

              <RevealItem>
                <h1 className="text-display mt-7 text-white">
                  {title}
                  {accent && (
                    <span className="mt-1 block text-primary">{accent}</span>
                  )}
                </h1>
              </RevealItem>

              <RevealItem>
                <p className="text-body mt-6 max-w-xl text-white/65">
                  {description}
                </p>
              </RevealItem>

              {(primary || secondary) && (
                <RevealItem>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    {primary &&
                      (primary.href ? (
                        <Link href={primary.href} className={actionClass}>
                          {primary.label}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setShowForm(true)}
                          className={actionClass}
                        >
                          {primary.label}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      ))}
                    {secondary && secondary.href && (
                      <Link
                        href={secondary.href}
                        className="text-small group inline-flex min-h-[40px] items-center gap-2 text-white/75 transition-colors duration-300 hover:text-primary"
                      >
                        {secondary.label}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </RevealItem>
              )}
            </div>
          </MountRevealGroup>

          {rail && rail.items.length > 0 && (
            <MountRevealGroup
              className="mt-10 border-t border-white/10 pt-7"
              stagger={0.05}
              delay={0.35}
            >
              <RevealItem distance={20} duration={0.8}>
                <p className="text-label uppercase text-white/45">
                  {rail.label}
                </p>
                <div
                  className={`-mb-2 mt-3 grid grid-cols-2 gap-x-8 gap-y-0 tablet:grid-cols-3 ${railColumns}`}
                >
                  {rail.items.map((item) => (
                    <Link
                      key={`${item.label}-${item.href}`}
                      href={item.href}
                      className="text-small group block py-2 text-white/85 transition-colors duration-300 hover:text-primary"
                    >
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </RevealItem>
            </MountRevealGroup>
          )}
        </div>
      </section>

      <MeetingEmailForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}
