"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import DrawLine from "@/src/components/motion/draw-line";
import {
  EASE_OUT_EXPO,
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { stats } from "./data";

/* Equirectangular map, 1000 x 500: x = (lon + 180) / 360 * 1000,
   y = (90 - lat) / 180 * 500. The frame trims the empty polar bands. */
const VIEW = { top: 15, height: 400 };
const pct = (x: number, y: number) => ({
  left: `${x / 10}%`,
  top: `${((y - VIEW.top) / VIEW.height) * 100}%`,
});

const HQ = { x: 706, y: 163, label: "Pakistan · HQ" };

type Side = "above" | "below" | "left";

const REGIONS: {
  id: string;
  x: number;
  y: number;
  label: string;
  side: Side;
  arc: string;
}[] = [
  {
    id: "na",
    x: 294,
    y: 137,
    label: "North America",
    side: "below",
    arc: "M706 163 Q 500 40 294 137",
  },
  {
    id: "eu",
    x: 500,
    y: 107,
    label: "Europe",
    side: "above",
    arc: "M706 163 Q 600 60 500 107",
  },
  {
    id: "me",
    x: 654,
    y: 180,
    label: "Middle East",
    side: "left",
    arc: "M706 163 Q 680 150 654 180",
  },
  {
    id: "sea",
    x: 788,
    y: 246,
    label: "Southeast Asia",
    side: "below",
    arc: "M706 163 Q 760 190 788 246",
  },
  {
    id: "au",
    x: 920,
    y: 344,
    label: "Australia",
    side: "below",
    arc: "M706 163 Q 860 210 920 344",
  },
];

const LABEL_SIDE: Record<Side, string> = {
  above: "-translate-x-1/2 -translate-y-[calc(100%+16px)]",
  below: "-translate-x-1/2 translate-y-4",
  left: "-translate-x-[calc(100%+14px)] -translate-y-1/2",
};

/* The routes draw themselves in when the section shows and retract when it
   leaves, like every other reveal on the site. */
const routeVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0, transition: { duration: 0.25 } },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: EASE_OUT_EXPO },
  },
};

/**
 * Global reach: the statement and three figures on the left, and on the right
 * a dotted world map with routes drawing out from Pakistan to the regions we
 * deliver to, a pulse at each end and a light travelling along each route.
 */
export default function Proof() {
  const still = useReducedMotion();

  return (
    <section
      id="reach"
      className="relative overflow-hidden border-t border-[#E4E4E8] bg-white py-20 tablet:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 xl:px-[60px]">
        <div className="grid gap-14 laptop:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] laptop:items-center laptop:gap-20">
          <div>
            <Reveal direction="right" distance={30} amount={0.25}>
              <p className="text-label uppercase text-primary">Global reach</p>
              <h2 className="text-heading mt-4 text-[#14141D]">
                Rooted in Pakistan.
                <span className="block text-primary">
                  Delivering worldwide.
                </span>
              </h2>
              <p className="text-body mt-5 max-w-lg text-[#6B6F76]">
                We partner with startups and enterprises across industries,
                pairing global engineering standards with the responsiveness of
                a close-knit team.
              </p>
            </Reveal>

            <RevealGroup
              as="ul"
              className="relative mt-10 grid grid-cols-3 border-t border-[#E4E4E8]"
              stagger={0.14}
              amount={0.3}
            >
              <DrawLine
                axis="x"
                delay={0.1}
                className="absolute -top-px left-0 h-px w-full bg-primary"
              />
              {stats.map((stat) => (
                <RevealItem
                  as="li"
                  key={stat.label}
                  direction="up"
                  distance={18}
                  className="border-r border-[#E4E4E8] py-6 pr-4 last:border-r-0 tablet:pr-6 [&:not(:first-child)]:pl-4 tablet:[&:not(:first-child)]:pl-6"
                >
                  <p className="text-heading tabular-nums text-primary">
                    {stat.value}
                  </p>
                  <p className="text-small mt-1.5 text-[#6B6F76]">
                    {stat.label}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* The map. Base dots are a static picture; routes, pulses and
              labels sit on top and animate. */}
          <RevealGroup
            className="relative aspect-[1000/400] w-full"
            stagger={0.15}
            amount={0.2}
          >
            <Image
              src="/images/world-dots.svg"
              alt="Dotted world map with Pakistan highlighted"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain"
            />

            <svg
              viewBox={`0 ${VIEW.top} 1000 ${VIEW.height}`}
              className="absolute inset-0 h-full w-full overflow-visible"
              aria-hidden
            >
              {REGIONS.map((r) => (
                <motion.path
                  key={r.id}
                  id={`route-${r.id}`}
                  d={r.arc}
                  fill="none"
                  stroke="#FE5901"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeOpacity={0.7}
                  variants={routeVariants}
                />
              ))}

              {/* Lights travelling along each route. */}
              {!still &&
                REGIONS.map((r, i) => (
                  <circle key={`light-${r.id}`} r={3.5} fill="#FE5901">
                    <animateMotion
                      dur="3.4s"
                      begin={`${1.6 + i * 0.5}s`}
                      repeatCount="indefinite"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                      keyTimes="0;1"
                    >
                      <mpath href={`#route-${r.id}`} />
                    </animateMotion>
                  </circle>
                ))}

              {/* Region markers. */}
              {REGIONS.map((r) => (
                <g key={`pin-${r.id}`}>
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r={9}
                    fill="#FE5901"
                    fillOpacity={0.18}
                    className="map-pulse"
                  />
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r={4}
                    fill="#14141D"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                </g>
              ))}

              {/* Home. */}
              <g>
                <circle
                  cx={HQ.x}
                  cy={HQ.y}
                  r={16}
                  fill="#FE5901"
                  fillOpacity={0.22}
                  className="map-pulse"
                />
                <circle
                  cx={HQ.x}
                  cy={HQ.y}
                  r={6}
                  fill="#FE5901"
                  stroke="#fff"
                  strokeWidth={2.5}
                />
              </g>
            </svg>

            {/* Labels are HTML so they stay legible at any width. The home
                label sits above its pin, and hangs to the left on phones so
                it stays on screen. */}
            <RevealItem
              direction="up"
              distance={10}
              className="absolute"
              style={pct(HQ.x, HQ.y)}
            >
              <span className="text-label inline-block -translate-x-full -translate-y-[calc(100%+16px)] whitespace-nowrap rounded-control bg-primary px-3 py-1.5 uppercase text-white shadow-[0_12px_26px_-12px_rgba(254,89,1,0.9)] tablet:-translate-x-1/2">
                {HQ.label}
              </span>
            </RevealItem>
            {REGIONS.map((r) => (
              <RevealItem
                key={`label-${r.id}`}
                direction="up"
                distance={10}
                className="absolute hidden tablet:block"
                style={pct(r.x, r.y)}
              >
                <span
                  className={`text-label inline-block whitespace-nowrap rounded-control border border-[#E4E4E8] bg-white/90 px-2.5 py-1 uppercase text-[#14141D] shadow-[0_10px_24px_-14px_rgba(11,11,18,0.35)] backdrop-blur ${LABEL_SIDE[r.side]}`}
                >
                  {r.label}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
