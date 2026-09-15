import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import { Reveal } from "@/src/components/motion/reveal";

const CARD =
  "group flex min-h-[280px] flex-col rounded-2xl border border-[#E4E4E8] bg-white p-9 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.35)] laptop:p-10";

const TILE =
  "flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF3EA] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white";

export default function LetsTalk() {
  return (
    <section className="bg-[#F6F6F7] py-20 tablet:py-28">
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10">
        <Reveal amount={0.2}>
          <div className="grid gap-12 laptop:grid-cols-2 laptop:items-center laptop:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                Get In Touch
              </p>
              <h2 className="mt-4 text-[32px] font-bold leading-tight text-[#14141D] tablet:text-5xl">
                Let&apos;s talk
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#6B6F76]">
                Tell us what you are trying to build. We will come back with a
                clear view of scope, approach, and what it takes to ship it.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(315deg,#FF5A01_0%,#FD5901_100%)] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Contact us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/meeting-request"
                  className="group inline-flex items-center gap-3 rounded-full border border-[#D6D6DB] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#14141D] transition-colors duration-300 hover:border-primary hover:text-primary"
                >
                  Book a meeting
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* The icon sits at the top and the copy at the bottom, so the
                extra height reads as room rather than empty space. */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className={CARD}>
                <div className={TILE}>
                  <MapPin className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <div className="mt-auto pt-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A0A4AB]">
                    Where we work
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-snug text-[#14141D] laptop:text-xl">
                    Pakistan-based, delivering worldwide
                  </p>
                </div>
              </div>

              <Link href="/faq" className={CARD}>
                <div className={TILE}>
                  <Mail className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <div className="mt-auto pt-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A0A4AB]">
                    Have a question?
                  </p>
                  <p className="mt-3 inline-flex items-center gap-2 text-lg font-semibold leading-snug text-[#14141D] transition-colors duration-300 group-hover:text-primary laptop:text-xl">
                    Read our FAQ
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
