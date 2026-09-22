import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { testimonialsData } from "@/src/containers/about/data";

/** Client quotes as a card grid, with a closing invitation card. */
export default function Testimonials({
  tone = "dark",
}: {
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const card = dark
    ? "border-white/10 bg-white/[0.05]"
    : "border-[#E4E4E8] bg-[#F6F6F7]";

  return (
    <PageSection dark={dark}>
      <Reveal amount={0.25}>
        <SectionHeading
          tone={dark ? "dark" : "light"}
          eyebrow="Testimonials"
          title="What our clients say"
          description="From startups to global enterprises, our clients share how Algotix AI helped them innovate faster, scale smarter, and exceed expectations."
        />
      </Reveal>

      <RevealGroup
        className="mt-14 grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3"
        stagger={0.08}
        amount={0.1}
      >
        {testimonialsData.map((item) => (
          <RevealItem key={item.id} className="h-full" distance={24}>
            <figure
              className={`flex h-full flex-col rounded-2xl border p-8 ${card}`}
            >
              <Quote className="h-7 w-7 text-primary" strokeWidth={1.6} />
              <blockquote
                className={`text-body mt-5 flex-1 ${dark ? "text-white/70" : "text-[#3A3D45]"}`}
              >
                {item.text.trim()}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="relative h-11 w-11 overflow-hidden rounded-full bg-white/10">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <span
                  className={`text-body font-semibold ${dark ? "text-white" : "text-[#14141D]"}`}
                >
                  {item.name.trim()}
                </span>
              </figcaption>
            </figure>
          </RevealItem>
        ))}

        <RevealItem className="h-full" distance={24}>
          <Link
            href="/contact"
            className="group flex h-full flex-col justify-between rounded-2xl bg-[linear-gradient(315deg,#FF5A01_0%,#FD5901_100%)] p-8 text-white shadow-[0_24px_50px_-24px_rgba(254,89,1,0.8)] transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="text-label uppercase text-white/80">
              Your project next
            </p>
            <div>
              <h3 className="text-subheading">Want to be one of them?</h3>
              <span className="text-label mt-5 inline-flex items-center gap-2 uppercase">
                Talk to us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </RevealItem>
      </RevealGroup>
    </PageSection>
  );
}
