import Image from "next/image";
import { ArrowRight } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { valuesData } from "@/src/components/about-us/data";

interface ValuesEditorialProps {
  image: { src: string; alt: string; position?: string };
  tone?: "light" | "dark";
  id?: string;
}

/**
 * The company values as an editorial list beside a photograph: numbered rows
 * divided by hairlines rather than a grid of cards, each row waking on hover.
 */
export default function ValuesEditorial({
  image,
  tone = "light",
  id = "values",
}: ValuesEditorialProps) {
  const dark = tone === "dark";
  const ink = dark ? "text-white" : "text-[#14141D]";
  const line = dark ? "border-white/12" : "border-[#E4E4E8]";

  return (
    <PageSection dark={dark} id={id}>
      <div className="grid gap-14 laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] laptop:items-center laptop:gap-20">
        <Reveal
          direction="right"
          distance={40}
          amount={0.15}
          className="relative order-2 laptop:order-1"
        >
          <div
            className={`relative aspect-[4/5] overflow-hidden rounded-2xl border shadow-[0_40px_80px_-30px_rgba(11,11,18,0.5)] ${
              dark ? "border-white/10" : "border-[#E4E4E8]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
              style={{ objectPosition: image.position ?? "center" }}
            />
          </div>
          {/* The statement that anchors the values, over the photo's corner. */}
          <Reveal
            direction="up"
            distance={24}
            delay={0.3}
            amount={0.1}
            className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#0B0B12]/80 p-6 text-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl tablet:left-auto tablet:right-8 tablet:w-72"
          >
            <p className="text-heading text-primary">100%</p>
            <p className="text-label mt-1 uppercase text-white/70">
              client satisfaction
            </p>
            <p className="text-small mt-3 text-white/70">
              Client expectations stay our top priority, on every engagement.
            </p>
          </Reveal>
        </Reveal>

        <div className="order-1 laptop:order-2">
          <Reveal direction="left" distance={30} amount={0.25}>
            <SectionHeading
              align="left"
              tone={dark ? "dark" : "light"}
              eyebrow={valuesData.title}
              title={valuesData.subtitle}
              description={valuesData.description}
            />
          </Reveal>

          <RevealGroup
            as="ol"
            className={`relative mt-10 border-t ${line}`}
            stagger={0.1}
            amount={0.15}
          >
            <DrawLine
              axis="x"
              delay={0.1}
              className="absolute -top-px left-0 h-px w-full bg-primary"
            />
            {valuesData.features.map((value, i) => (
              <RevealItem
                as="li"
                key={value}
                direction="left"
                distance={24}
                className={`group flex items-center gap-6 border-b py-5 transition-colors duration-300 ${line}`}
              >
                <span className="text-label w-8 shrink-0 tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-subheading flex-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 ${ink}`}
                >
                  {value}
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 -translate-x-2 text-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </PageSection>
  );
}
