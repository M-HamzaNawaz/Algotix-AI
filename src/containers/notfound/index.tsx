import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MountRevealGroup } from "@/src/components/motion/mount-reveal";
import { RevealItem } from "@/src/components/motion/reveal";

const NotFound = () => {
  return (
    <section className="band-dark relative flex min-h-screen items-center overflow-hidden pb-20 pt-40">
      <MountRevealGroup
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 text-center sm:px-10 xl:px-[60px]"
        stagger={0.15}
        delay={0.1}
      >
        <RevealItem>
          <p className="text-label uppercase text-primary">Error 404</p>
        </RevealItem>
        <RevealItem>
          <h1 className="text-display mt-5 text-white">
            We could not find that page.
          </h1>
        </RevealItem>
        <RevealItem>
          <p className="text-body mx-auto mt-6 max-w-xl text-white/65">
            The link may be outdated, or the page may have moved. Head back home
            or browse our services.
          </p>
        </RevealItem>
        <RevealItem>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="text-label group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 uppercase text-[#14141D] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Back to home
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="text-small group inline-flex items-center gap-2 text-white/75 transition-colors duration-300 hover:text-primary"
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
