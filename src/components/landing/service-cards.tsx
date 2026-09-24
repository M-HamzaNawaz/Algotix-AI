import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import {
  serviceIcons,
  serviceImages,
} from "@/src/components/services-page/data";
import type { OurServiceData } from "@/src/containers/services/data";

interface CardProps {
  service: OurServiceData;
  index: number;
  className?: string;
  /** Tells next/image how wide the card renders, for the right source size. */
  sizes?: string;
}

/**
 * A photo-led service card: the field's photograph fills the card, the copy
 * sits on a gradient at the foot, and hovering pulls the picture in, reveals
 * the short description and lights the arrow.
 */
export function ServicePhotoCard({
  service,
  index,
  className = "",
  sizes = "(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 480px",
}: CardProps) {
  const Icon = serviceIcons[service.slug];
  const photo = serviceImages[service.slug];

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative isolate flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl bg-[#14141D] p-6 text-white transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary tablet:p-7 ${className}`}
    >
      {photo && (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          className="-z-20 object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
      )}
      {/* Two overlays: the base keeps the copy legible, the second deepens on hover. */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B0B12]/95 via-[#0B0B12]/45 to-[#0B0B12]/10"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#0B0B12]/0 transition-colors duration-500 group-hover:bg-[#0B0B12]/25"
      />

      <span className="absolute left-6 top-6 flex items-center gap-3 tablet:left-7 tablet:top-7">
        <span className="text-label tabular-nums text-white/70">
          {String(index).padStart(2, "0")}
        </span>
      </span>
      <span className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-primary group-hover:bg-primary tablet:right-7 tablet:top-7">
        {Icon && <Icon className="h-5 w-5" strokeWidth={1.8} />}
      </span>

      <span className="relative">
        <span className="text-subheading block text-white">
          {service.title}
        </span>
        {/* Always readable on touch screens; slides open on hover elsewhere. */}
        <span className="text-small mt-2 block max-w-[92%] text-white/70 transition-all duration-500 laptop:max-h-0 laptop:translate-y-2 laptop:opacity-0 laptop:group-hover:max-h-24 laptop:group-hover:translate-y-0 laptop:group-hover:opacity-100">
          <span className="line-clamp-3">{service.description}</span>
        </span>
        <span className="mt-4 flex items-center justify-between">
          <span className="text-label uppercase text-white/70 transition-colors duration-300 group-hover:text-white">
            Explore
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </span>
      </span>

      {/* A hairline that draws across the foot on hover. */}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
    </Link>
  );
}

interface FeatureProps extends CardProps {
  /** A real product screenshot shown in the browser frame. */
  preview: { src: string; alt: string };
}

/**
 * The lead card of the showcase: a dark editorial panel with the service's
 * capabilities and a browser frame holding a real product we shipped. The
 * frame lifts on hover as if picked up.
 */
export function ServiceFeatureCard({
  service,
  index,
  preview,
  className = "",
}: FeatureProps) {
  const Icon = serviceIcons[service.slug];
  const capabilities = service.tags.slice(0, 3).map((t) => t.name);

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative isolate flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl bg-[#0B0B12] p-7 text-white transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary tablet:p-10 ${className}`}
    >
      <Image
        src="/images/editorial/feature-code.jpg"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 900px"
        className="-z-20 object-cover opacity-30 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#0B0B12_20%,rgba(11,11,18,0.82)_55%,rgba(11,11,18,0.45)_100%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(254,89,1,0.35),transparent)] transition-opacity duration-700 group-hover:opacity-80"
      />

      <span className="flex items-center justify-between">
        <span className="text-label tabular-nums text-white/70">
          {String(index).padStart(2, "0")}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-primary group-hover:bg-primary">
          {Icon && <Icon className="h-5 w-5" strokeWidth={1.8} />}
        </span>
      </span>

      <span className="relative mt-10 max-w-md laptop:mt-14">
        <span className="text-heading block text-white">{service.title}</span>
        <span className="text-body mt-4 block text-white/65">
          {service.description}
        </span>
        <span className="mt-6 flex flex-wrap gap-2">
          {capabilities.map((name) => (
            <span
              key={name}
              className="text-label rounded-control border border-white/15 bg-white/[0.06] px-3 py-1.5 text-white/80 backdrop-blur-md transition-colors duration-300 group-hover:border-white/30"
            >
              {name}
            </span>
          ))}
        </span>
        <span className="text-label mt-8 inline-flex items-center gap-3 uppercase text-white">
          Explore service
          <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </span>

      {/* Browser frame with a real product. Sits under the copy on small
          screens and hangs off the bottom-right corner from laptop up. */}
      <span className="relative mt-8 block w-full overflow-hidden rounded-xl border border-white/15 bg-[#14141D] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-3 laptop:absolute laptop:-bottom-10 laptop:-right-12 laptop:mt-0 laptop:w-[58%] laptop:group-hover:-translate-x-2 laptop:group-hover:-translate-y-6">
        <span className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-[#1B1B25] px-3">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </span>
        <span className="relative block aspect-[16/10]">
          <Image
            src={preview.src}
            alt={preview.alt}
            fill
            sizes="(max-width: 1024px) 90vw, 520px"
            className="object-cover object-top"
          />
        </span>
      </span>
    </Link>
  );
}
