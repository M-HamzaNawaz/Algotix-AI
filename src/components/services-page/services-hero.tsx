"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import MeetingEmailForm from "@/src/components/meetingEmailForm";
import { MountRevealGroup } from "@/src/components/motion/mount-reveal";
import { RevealItem } from "@/src/components/motion/reveal";
import { ourServiceData, serviceData } from "@/src/containers/services/data";
import { primaryServiceSlugs } from "./data";

const rail = primaryServiceSlugs
  .slice(0, 6)
  .map((slug) => ourServiceData.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

/** The services hero, built to the same recipe as the landing hero. */
export default function ServicesHero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="relative isolate w-full overflow-hidden bg-[#0B0B12]">
        <div className="absolute inset-0">
          <Image
            src="/images/services/development_phase.jpg"
            alt="Algotix AI engineers working across multiple monitors"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
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

        <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1500px] flex-col px-6 pb-10 pt-32 tablet:min-h-screen sm:px-10 desktop:px-16">
          <MountRevealGroup
            className="flex flex-1 items-center"
            stagger={0.12}
            delay={0.1}
          >
            <div className="w-full max-w-3xl">
              <RevealItem>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Services
                </span>
              </RevealItem>

              <RevealItem>
                <h1 className="mt-7 text-[28px] font-bold leading-[1.1] text-white mobile-lg:text-[34px] sm:text-5xl laptop:text-6xl desktop-lg:text-[68px]">
                  Build reliable software
                  <span className="mt-1 block text-primary">
                    that scales with your business.
                  </span>
                </h1>
              </RevealItem>

              <RevealItem>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                  {serviceData.description}
                </p>
              </RevealItem>

              <RevealItem>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(true)}
                    className="group inline-flex items-center gap-3 rounded-full border border-white/35 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-primary hover:bg-primary"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <Link
                    href="#services"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-primary"
                  >
                    View capabilities
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </RevealItem>
            </div>
          </MountRevealGroup>

          {/* Expertise rail, pinned to the bottom like the landing hero. */}
          <MountRevealGroup
            className="mt-10 border-t border-white/10 pt-7"
            stagger={0.05}
            delay={0.35}
          >
            <RevealItem distance={20} duration={0.8}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                Our Expertise
              </p>
              <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 tablet:grid-cols-3 laptop:grid-cols-6">
                {rail.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group text-sm font-medium leading-snug text-white/85 transition-colors duration-300 hover:text-primary"
                  >
                    <span className="border-b border-white/25 pb-1 transition-colors duration-300 group-hover:border-primary">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </RevealItem>
          </MountRevealGroup>
        </div>
      </section>

      <MeetingEmailForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}
