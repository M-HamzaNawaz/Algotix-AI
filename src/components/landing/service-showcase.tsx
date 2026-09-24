import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ServiceFeatureCard,
  ServicePhotoCard,
} from "@/src/components/landing/service-cards";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { ourServiceData } from "@/src/containers/services/data";

/* The lead service and the five that surround it, in reading order. */
const FEATURE = "web-development";
const SUPPORTING = [
  "mobile-app-development",
  "generative-ai",
  "DevOps",
  "data-science",
  "chat-bots",
];

/* Cell placement in the bento from laptop up: the feature holds two rows on
   the left, two cards stack beside it, three run underneath. On tablets it is
   a two-column grid with the feature across the top; on phones the cards form
   a swipeable rail. */
const CELLS = [
  "laptop:col-span-2",
  "laptop:col-span-2",
  "laptop:col-span-2",
  "laptop:col-span-2",
  "laptop:col-span-2",
];
const DIRECTIONS = ["left", "left", "up", "up", "up"] as const;

/**
 * "What we do" on the home page: an editorial header and an asymmetric,
 * photo-led bento of services with a real product preview in the lead card.
 */
export default function ServiceShowcase() {
  const feature = ourServiceData.find((s) => s.slug === FEATURE);
  const supporting = SUPPORTING.map((slug) =>
    ourServiceData.find((s) => s.slug === slug),
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));
  if (!feature) return null;

  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-white py-20 tablet:py-28"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 xl:px-[60px]">
        {/* Editorial header: statement on the left, context on the right. */}
        <div className="grid gap-8 laptop:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] laptop:items-end laptop:gap-16">
          <Reveal direction="right" distance={32} amount={0.3}>
            <p className="text-label uppercase text-primary">What we do</p>
            <h2 className="text-heading mt-4 max-w-2xl text-[#14141D]">
              Software and AI, designed and shipped by{" "}
              <span className="text-primary">one team.</span>
            </h2>
          </Reveal>
          <Reveal direction="left" distance={32} amount={0.3} delay={0.1}>
            <p className="text-body max-w-md text-[#6B6F76]">
              Web and mobile products, the infrastructure they run on, and the
              data and AI that make them smarter. Six practices, one accountable
              team from the first workshop to production.
            </p>
            <Link
              href="/services"
              className="text-small group mt-6 inline-flex items-center gap-2 font-semibold text-[#14141D] transition-colors duration-300 hover:text-primary"
            >
              See all services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Phone: a snap rail with a soft fade at the edge. Tablet up: the bento. */}
        <div className="relative mt-14">
          <RevealGroup
            className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] tablet:mx-0 tablet:grid tablet:snap-none tablet:grid-cols-2 tablet:gap-5 tablet:overflow-visible tablet:px-0 tablet:pb-0 laptop:grid-cols-6 laptop:auto-rows-[300px]"
            stagger={0.12}
            amount={0.08}
          >
            <RevealItem
              direction="right"
              distance={36}
              className="w-[88vw] shrink-0 snap-start tablet:col-span-2 tablet:w-auto laptop:col-span-4 laptop:row-span-2"
            >
              <ServiceFeatureCard
                service={feature}
                index={1}
                preview={{
                  src: "/images/projects/Cswap-dex.jpg",
                  alt: "Landing page of a decentralised exchange we built",
                }}
              />
            </RevealItem>
            {supporting.map((service, i) => (
              <RevealItem
                key={service.slug}
                direction={DIRECTIONS[i]}
                distance={30}
                scale={0.97}
                className={`w-[78vw] shrink-0 snap-start tablet:w-auto ${CELLS[i]}`}
              >
                <ServicePhotoCard service={service} index={i + 2} />
              </RevealItem>
            ))}
          </RevealGroup>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent tablet:hidden"
          />
        </div>
      </div>
    </section>
  );
}
