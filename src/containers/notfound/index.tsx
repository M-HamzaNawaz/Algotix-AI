import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MountRevealGroup } from "@/src/components/motion/mount-reveal";
import { RevealItem } from "@/src/components/motion/reveal";

const NotFound = () => {
  return (
    <section className="band-dark relative flex min-h-screen items-center overflow-hidden pb-20 pt-40">
      <MountRevealGroup
        className="relative z-10 mx-auto w-full max-w-[1300px] px-6 text-center sm:px-10"
        stagger={0.12}
        delay={0.1}
      >
        <RevealItem>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            Error 404
          </p>
        </RevealItem>
        <RevealItem>
          <h1 className="mt-5 text-[36px] font-bold leading-[1.1] text-white sm:text-5xl laptop:text-[64px]">
            We could not find that page.
          </h1>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            The link may be outdated, or the page may have moved. Head back home
            or browse our services.
          </p>
        </RevealItem>
        <RevealItem>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#14141D] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Back to home
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-primary"
            >
              View services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealItem>
      </MountRevealGroup>
    </section>
  );
};

export default NotFound;
