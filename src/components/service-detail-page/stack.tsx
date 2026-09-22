import Image from "next/image";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import type { OurServiceData } from "@/src/containers/services/data";

/** Turns "/images/technologies/react.png" into "react" for the alt text. */
function nameFromPath(path: string): string {
  const file = path.split("/").pop() ?? "";
  return decodeURIComponent(
    file.replace(/\.[a-z0-9]+$/i, "").replace(/[-_]/g, " "),
  );
}

export default function Stack({ service }: { service: OurServiceData }) {
  if (!service.logos.length) return null;

  return (
    <PageSection>
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="Technologies"
          title={`The stack behind our ${service.title.toLowerCase()}`}
          description="Proven tools we use in production, chosen for reliability, community and long-term support."
        />
      </Reveal>

      <RevealGroup
        className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-4"
        stagger={0.09}
        amount={0.2}
      >
        {service.logos.map((logo) => (
          <RevealItem key={logo} distance={16}>
            <div className="glow-card glow-light sheen sheen-light relative isolate overflow-hidden flex h-24 w-36 items-center justify-center rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.35)]">
              <Image
                src={logo}
                alt={nameFromPath(logo)}
                width={96}
                height={48}
                className="h-10 w-auto max-w-[96px] object-contain"
              />
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </PageSection>
  );
}
