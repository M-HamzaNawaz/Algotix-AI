import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { differentiators } from "./data";
import Pattern from "./patterns";

export default function Difference() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0B0B12] py-20 tablet:py-28">
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10">
        <Reveal className="text-center" amount={0.2}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            Why Algotix AI
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-[28px] font-bold leading-tight text-white tablet:text-4xl">
            The Algotix difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            We don&apos;t just build software. We bring the strategic depth and
            technical precision your product needs to hold up in the real world.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3"
          stagger={0.09}
          amount={0.08}
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealItem key={item.title} className="h-full" distance={28}>
                <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-[#17171F] p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-white/15">
                  <Pattern
                    kind={item.pattern}
                    color={item.accent}
                    className="pointer-events-none absolute -bottom-3 -right-3 h-[62%] w-[58%] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg text-white"
                      style={{
                        backgroundColor: item.accent,
                        boxShadow: `0 12px 26px -12px ${item.accent}`,
                      }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-medium tabular-nums tracking-[0.12em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative z-10 mt-12 max-w-[72%]">
                    <p className="text-[12px] text-white/55">{item.kicker}</p>
                    <h3 className="mt-2 text-[21px] font-semibold leading-snug text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="relative z-10 mt-auto max-w-[70%] pt-9 text-[13px] leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
