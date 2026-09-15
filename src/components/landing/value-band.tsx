import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/src/components/motion/reveal";

export default function ValueBand() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B12] py-20 tablet:py-28 laptop:py-32">
      {/* Layered blooms rather than a bitmap, so it stays crisp at any width. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 420px at 15% 20%, rgba(254,89,1,0.38) 0%, rgba(254,89,1,0) 60%), radial-gradient(760px 420px at 85% 80%, rgba(127,0,255,0.30) 0%, rgba(127,0,255,0) 62%), radial-gradient(600px 300px at 60% 10%, rgba(255,138,61,0.20) 0%, rgba(255,138,61,0) 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <Reveal amount={0.2}>
          <div className="flex rounded-[28px] border border-white/15 bg-white/[0.06] p-10 backdrop-blur-xl tablet:p-14 laptop:min-h-[380px] laptop:p-16">
            <div className="flex w-full flex-col gap-10 laptop:flex-row laptop:items-center laptop:justify-between laptop:gap-16">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                  Get In Touch
                </p>
                <h2 className="text-[30px] font-bold leading-[1.1] text-white tablet:text-[44px] laptop:text-[52px]">
                  Let&apos;s talk
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
                  Tell us what you are trying to build. We will come back with a
                  clear view of scope, approach, and what it takes to ship it.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-4 sm:flex-row laptop:flex-col">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#14141D] laptop:px-10 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Contact us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/meeting-request"
                  className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-white/30 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white laptop:px-10 transition-colors duration-300 hover:border-primary hover:bg-primary"
                >
                  Book a meeting
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
