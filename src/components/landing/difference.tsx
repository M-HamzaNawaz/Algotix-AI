import Image from "next/image";

import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { differentiators } from "./data";

/**
 * The Algotix difference as a split: the statement and a photograph hold the
 * left and stay put, while the six reasons run down the right as ruled rows,
 * each with its own accent bar that fills on hover.
 */
export default function Difference() {
  return (
    <section
      id="difference"
      className="band-gradient relative overflow-hidden border-t border-white/[0.06] py-20 tablet:py-28"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 xl:px-[60px]">
        <div className="grid gap-14 laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] laptop:gap-20">
          <div className="laptop:sticky laptop:top-28 laptop:self-start">
            <Reveal direction="right" distance={30} amount={0.25}>
              <p className="text-label uppercase text-primary">
                Why Algotix AI
              </p>
              <h2 className="text-heading mt-4 max-w-xl text-white">
                The Algotix difference
              </h2>
              <p className="text-body mt-4 max-w-lg text-white/60">
                We don&apos;t just build software. We bring the strategic depth
                and technical precision your product needs to hold up in the
                real world.
              </p>
            </Reveal>
            <Reveal
              direction="right"
              distance={40}
              amount={0.15}
              delay={0.1}
              className="mt-10 hidden laptop:block"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/editorial/circuit-board.jpg"
                  alt="Close-up of a circuit board"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0B12]/80 via-transparent to-transparent"
                />
                <span className="text-label absolute bottom-5 left-5 uppercase text-white/80">
                  Engineering, end to end
                </span>
              </div>
            </Reveal>
          </div>

          <RevealGroup
            as="ol"
            className="relative border-t border-white/12"
            stagger={0.11}
            amount={0.08}
          >
            <DrawLine
              axis="x"
              delay={0.1}
              className="absolute -top-px left-0 h-px w-full bg-primary"
            />
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealItem
                  as="li"
                  key={item.title}
                  direction="left"
                  distance={26}
                  className="group relative border-b border-white/12 py-7 pl-5 laptop:py-8"
                >
                  {/* Accent bar on the left edge, filling top to bottom on hover. */}
                  <span
                    aria-hidden
                    className="absolute bottom-7 left-0 top-7 w-[3px] origin-top scale-y-0 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 laptop:bottom-8 laptop:top-8"
                    style={{ backgroundColor: item.accent }}
                  />
                  <div className="flex items-start gap-5">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white"
                      style={{
                        backgroundColor: item.accent,
                        boxShadow: `0 12px 26px -12px ${item.accent}`,
                      }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="text-label text-white/50">
                          {item.kicker}
                        </p>
                        <span className="text-label tabular-nums text-white/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-subheading mt-1 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                        {item.title}
                      </h3>
                      <p className="text-body mt-2 max-w-xl text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
