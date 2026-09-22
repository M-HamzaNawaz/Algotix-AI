import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import GlowCard from "@/src/components/landing/glow-card";
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

  /* Dark: glass with an inset highlight; light: the site's grey card. Both
     lift on hover, take an orange border and an orange-tinted shadow. */
  const card = dark
    ? "border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.065),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_48px_-28px_rgba(0,0,0,0.7)] hover:border-primary/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_32px_64px_-32px_rgba(254,89,1,0.35),0_24px_48px_-28px_rgba(0,0,0,0.8)]"
    : "border-[#E4E4E8] bg-[#F6F6F7] hover:border-primary/40 hover:bg-white hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.35)]";
  const quoteTile = dark
    ? "border-primary/20 bg-[linear-gradient(180deg,rgba(254,89,1,0.16),rgba(254,89,1,0.06))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
    : "border-primary/20 bg-[#FFF3EA]";
  const divider = dark ? "border-white/[0.07]" : "border-[#E4E4E8]";
  const ring = dark ? "ring-white/10" : "ring-black/5";

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
            <GlowCard
              as="figure"
              className={`group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 ${card}`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-lg border text-primary transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:-rotate-6 group-hover:shadow-[0_10px_24px_-8px_rgba(254,89,1,0.5)] ${quoteTile}`}
              >
                <Quote className="h-5 w-5" strokeWidth={1.6} />
              </span>

              <blockquote
                className={`text-body mt-6 flex-1 transition-colors duration-500 ${
                  dark
                    ? "text-white/70 group-hover:text-white/90"
                    : "text-[#3A3D45]"
                }`}
              >
                {item.text.trim()}
              </blockquote>

              <figcaption
                className={`mt-7 flex items-center gap-3 border-t pt-5 ${divider}`}
              >
                <span
                  className={`relative h-11 w-11 overflow-hidden rounded-full bg-white/10 ring-2 transition-shadow duration-500 group-hover:ring-primary/60 ${ring}`}
                >
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
            </GlowCard>
          </RevealItem>
        ))}

        <RevealItem className="h-full" distance={24}>
          {/* Glossy orange invitation: a richer gradient than the buttons,
              a top highlight, and an arrow pill that nudges on hover. */}
          <Link
            href="/contact"
            className="group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#FF7A2E_0%,#FE5A01_45%,#E84E00_100%)] p-8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.12),0_28px_56px_-26px_rgba(254,89,1,0.85)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.12),0_36px_70px_-26px_rgba(254,89,1,1)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[45%] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0))]"
            />
            <p className="text-label uppercase text-white/80">
              Your project next
            </p>
            <div>
              <h3 className="text-subheading">Want to be one of them?</h3>
              <span className="text-label mt-5 inline-flex items-center gap-3 uppercase">
                Talk to us
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.18] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:bg-white/30">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </div>
          </Link>
        </RevealItem>
      </RevealGroup>
    </PageSection>
  );
}
