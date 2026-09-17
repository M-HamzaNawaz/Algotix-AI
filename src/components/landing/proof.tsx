import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { capabilityMarquee, stats } from "./data";

export default function Proof() {
  return (
    <section className="band-gradient relative overflow-hidden border-t border-white/[0.06] pb-0 pt-20 tablet:pt-28">
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 sm:px-10">
        <div className="grid gap-14 laptop:grid-cols-2 laptop:items-center laptop:gap-20">
          <Reveal amount={0.2}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              Global Reach
            </p>
            <h2 className="mt-4 text-[28px] font-bold leading-tight text-white tablet:text-4xl">
              Rooted in Bahawalpur.
              <span className="block text-primary">Delivering worldwide.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
              We partner with startups and enterprises across industries,
              pairing global engineering standards with the responsiveness of a
              close-knit team.
            </p>
          </Reveal>

          <RevealGroup
            className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 tablet:grid-cols-3"
            stagger={0.1}
            amount={0.2}
          >
            {stats.map((stat) => (
              <RevealItem key={stat.label} distance={26}>
                <div className="h-full bg-[#0B0B12]/70 px-6 py-9 text-center backdrop-blur-sm tablet:px-5">
                  <p className="text-[40px] font-bold leading-none text-primary tablet:text-[44px]">
                    {stat.value}
                  </p>
                  <p className="mx-auto mt-3 max-w-[150px] text-sm leading-snug text-white/55">
                    {stat.label}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      {/* Capability marquee */}
      <div className="relative z-10 mt-16 border-t border-white/10 py-6">
        <div className="landing-marquee flex w-max gap-10 tablet:gap-16">
          {/* Duplicated once so the loop has no visible seam. */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-10 tablet:gap-16"
              aria-hidden={copy === 1}
            >
              {capabilityMarquee.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex shrink-0 items-center gap-10 whitespace-nowrap text-lg font-semibold text-white/80 tablet:gap-16 tablet:text-xl"
                >
                  {item}
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
