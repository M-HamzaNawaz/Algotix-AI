import { MountRevealGroup } from "@/src/components/motion/mount-reveal";
import { RevealItem } from "@/src/components/motion/reveal";

/** Compact dark opener for utility pages that have no hero photo. */
export default function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="band-dark relative overflow-hidden pb-20 pt-40 tablet:pb-24 tablet:pt-48">
      <MountRevealGroup
        className="relative z-10 mx-auto w-full max-w-[1300px] px-6 sm:px-10"
        stagger={0.12}
        delay={0.1}
      >
        <RevealItem>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        </RevealItem>
        <RevealItem>
          <h1 className="mt-7 max-w-3xl text-[32px] font-bold leading-[1.1] text-white sm:text-5xl laptop:text-[56px]">
            {title}
          </h1>
        </RevealItem>
        {description && (
          <RevealItem>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
          </RevealItem>
        )}
      </MountRevealGroup>
    </section>
  );
}
