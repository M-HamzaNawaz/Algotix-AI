import Image from "next/image";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { benefitsData } from "@/src/containers/about/data";

export default function Benefits() {
  return (
    <PageSection>
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="Key benefits"
          title="What working with us delivers"
          description="Discover how our solutions can transform your business with these powerful advantages."
        />
      </Reveal>

      <RevealGroup
        className="mt-14 grid gap-6 sm:grid-cols-2 laptop:grid-cols-4"
        stagger={0.07}
        amount={0.1}
      >
        {benefitsData.map((benefit) => (
          <RevealItem key={benefit.title} className="h-full" distance={22}>
            <div className="group flex h-full flex-col items-center rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7] p-8 text-center transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.35)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                <Image
                  src={benefit.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </span>
              <h3 className="text-subheading mt-6 text-[#14141D]">
                {benefit.title}
              </h3>
              <span className="mt-4 h-1 w-10 rounded-full bg-primary/70 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </PageSection>
  );
}
