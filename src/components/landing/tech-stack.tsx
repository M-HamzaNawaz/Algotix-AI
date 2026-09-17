import Image from "next/image";

import { Reveal } from "@/src/components/motion/reveal";
import { techLogosRowA, techLogosRowB, type TechLogo } from "./data";

export default function TechStack() {
  return (
    <section className="bg-white py-20 tablet:py-28">
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10">
        <Reveal className="text-center" amount={0.2}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            Our Stack
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-[28px] font-bold leading-tight text-[#14141D] tablet:text-4xl">
            Built on proven, production-grade technology
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B6F76]">
            We pick tools for longevity, not novelty, so what we ship stays
            maintainable long after launch.
          </p>
        </Reveal>
      </div>

      {/* Two plain rows of wordmarks drifting in opposite directions. */}
      <div className="mt-14 w-full overflow-hidden">
        <LogoRow items={techLogosRowA} reverse />
        <LogoRow items={techLogosRowB} className="mt-10" />
      </div>
    </section>
  );
}

export function LogoRow({
  items,
  reverse = false,
  className = "",
}: {
  items: TechLogo[];
  /** Reverse runs the same loop backwards, so the row drifts left to right. */
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`landing-marquee flex w-max ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: "70s" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((tech) => (
              <div
                key={`${copy}-${tech.name}`}
                className="flex shrink-0 items-center gap-3 pr-16 opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 tablet:pr-28"
              >
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={40}
                  height={40}
                  className="h-8 w-auto object-contain tablet:h-9"
                />
                <span className="whitespace-nowrap text-[16px] font-semibold text-[#6B6F76] tablet:text-[18px]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
