import Image from "next/image";
import { Eye, Target } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import { Reveal } from "@/src/components/motion/reveal";
import { missionData, visionData } from "@/src/containers/about/data";

const rows = [
  {
    key: "mission",
    icon: Target,
    kicker: "Our mission",
    title: missionData.title,
    description: missionData.description,
    image: missionData.image,
    alt: "Algotix AI engineer at work",
  },
  {
    key: "vision",
    icon: Eye,
    kicker: "Our vision",
    title: visionData.title,
    description: visionData.description,
    image: visionData.image,
    alt: "The Algotix AI team reviewing work together",
  },
];

/** Mission and vision as two alternating photo-and-copy rows on the dark band. */
export default function MissionVision() {
  return (
    <PageSection dark id="mission">
      <Reveal amount={0.25}>
        <SectionHeading
          tone="dark"
          eyebrow="Our purpose"
          title="Mission and vision"
          description="What we are here to do, and where we are taking it."
        />
      </Reveal>

      <div className="mt-16 space-y-20 laptop:space-y-28">
        {rows.map((row, i) => {
          const Icon = row.icon;
          const flip = i % 2 === 1;
          return (
            <div
              key={row.key}
              className="grid gap-12 laptop:grid-cols-2 laptop:items-center laptop:gap-20"
            >
              <Reveal
                direction={flip ? "left" : "right"}
                amount={0.15}
                className={flip ? "laptop:order-2" : ""}
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
                  <Image
                    src={row.image}
                    alt={row.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 620px"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal amount={0.2} className={flip ? "laptop:order-1" : ""}>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                  {row.kicker}
                </p>
                <h3 className="mt-3 text-[24px] font-bold leading-tight text-white tablet:text-[30px]">
                  {row.title}
                </h3>
                <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/60 tablet:text-[17px]">
                  {row.description}
                </p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </PageSection>
  );
}
