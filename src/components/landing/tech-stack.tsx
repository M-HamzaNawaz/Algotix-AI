import Image from "next/image";

import { Reveal, RevealGroup, RevealItem } from "@/src/components/motion/reveal";
import { techLogos } from "./data";

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

        <RevealGroup
          className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[#ECECEF] bg-[#ECECEF] tablet:grid-cols-4 laptop:grid-cols-8"
          stagger={0.05}
          amount={0.08}
        >
          {techLogos.map((tech) => (
            <RevealItem key={tech.name} distance={18} duration={0.5}>
              <div className="group flex h-[104px] flex-col items-center justify-center gap-2.5 bg-white px-3 transition-colors duration-300 hover:bg-[#FFF7F2]">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={40}
                  height={40}
                  className="h-8 w-auto object-contain opacity-85 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                />
                <span className="text-center text-[11px] font-medium leading-tight text-[#8A8F98] transition-colors duration-300 group-hover:text-[#14141D]">
                  {tech.name}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
