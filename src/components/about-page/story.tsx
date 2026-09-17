"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import MeetingEmailForm from "@/src/components/meetingEmailForm";
import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import { Reveal } from "@/src/components/motion/reveal";
import { featuresData, valuesData } from "@/src/components/about-us/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const tabs = [
  { key: "features", label: "Features", data: featuresData },
  { key: "values", label: "Our values", data: valuesData },
] as const;

/** Why choose us: a photo beside a Features / Values switch. */
export default function Story() {
  const [active, setActive] =
    useState<(typeof tabs)[number]["key"]>("features");
  const [showForm, setShowForm] = useState(false);
  const tab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <>
      <PageSection>
        <div className="grid gap-14 laptop:grid-cols-2 laptop:items-center laptop:gap-20">
          <Reveal direction="right" amount={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#E4E4E8] shadow-[0_40px_80px_-40px_rgba(11,11,18,0.5)] laptop:aspect-[3/4]">
              <Image
                src="/images/about/bussiness-discussion.png"
                alt="Algotix AI engineers discussing a project"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal amount={0.2}>
              <SectionHeading
                align="left"
                eyebrow="Why Algotix AI"
                title="Why should you choose us?"
              />
            </Reveal>

            <Reveal amount={0.2}>
              <div className="mt-8 inline-flex rounded-full border border-[#E4E4E8] bg-[#F6F6F7] p-1">
                {tabs.map((t) => {
                  const isActive = t.key === active;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setActive(t.key)}
                      aria-pressed={isActive}
                      className={`relative isolate rounded-full px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#3A3D45]"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="about-tab-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-primary"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 38,
                          }}
                        />
                      )}
                      {t.label}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <h3 className="mt-8 text-[22px] font-semibold leading-snug text-[#14141D] tablet:text-[26px]">
                    {tab.data.subtitle}
                  </h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-[#6B6F76] tablet:text-[17px]">
                    {tab.data.description}
                  </p>

                  <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {tab.data.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[15px] font-medium text-[#3A3D45]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF3EA] text-primary">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(315deg,#FF5A01_0%,#FD5901_100%)] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Book a call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Reveal>
          </div>
        </div>
      </PageSection>

      <MeetingEmailForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}
