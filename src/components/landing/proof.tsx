import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { stats } from "./data";

/* Each tread sits below the one above, with a gap between them, and three
   quarters of a card further right, like a flight of steps. The
   sizes are fractions of the column so the shape holds at every width. */
const STAIR_STEPS = [
  "tablet:w-[40%] tablet:ml-0",
  "tablet:w-[40%] tablet:ml-[30%]",
  "tablet:w-[40%] tablet:ml-[60%]",
];

export default function Proof() {
  return (
    <section className="relative overflow-hidden border-t border-[#E4E4E8] bg-white py-20 tablet:py-28">
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 xl:px-[60px]">
        <div className="grid gap-14 laptop:grid-cols-2 laptop:items-center laptop:gap-20">
          <Reveal direction="right" amount={0.2}>
            <p className="text-label uppercase text-primary">Global Reach</p>
            <h2 className="text-heading mt-5 text-[#14141D]">
              Rooted in Pakistan.
              <span className="block text-primary">Delivering worldwide.</span>
            </h2>
            <p className="text-lead mt-7 max-w-xl text-[#6B6F76]">
              We partner with startups and enterprises across industries,
              pairing global engineering standards with the responsiveness of a
              close-knit team.
            </p>
          </Reveal>

          {/* The figures step down like a staircase, one card per tread. */}
          <RevealGroup
            className="flex flex-col gap-5 tablet:gap-6"
            stagger={0.17}
            amount={0.2}
          >
            {stats.map((stat, i) => (
              <RevealItem
                key={stat.label}
                direction="left"
                distance={26}
                className={STAIR_STEPS[i] ?? ""}
              >
                {/* A thin rim with an orange highlight that travels around it:
                    a rotating conic gradient sits behind the card and only
                    the 2px edge shows through. */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-[#E4E4E8] p-[2px] shadow-[0_30px_60px_-40px_rgba(11,11,18,0.35)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="h-full w-full animate-spin-border bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,rgba(254,90,1,0.35)_290deg,#FE5A01_330deg,transparent_360deg)] motion-reduce:animate-none" />
                  </div>
                  <div className="relative rounded-[14px] bg-[#F6F6F7] px-6 py-8 text-center">
                    <p className="text-figure text-primary">{stat.value}</p>
                    <p className="text-small mx-auto mt-3 max-w-[170px] text-[#6B6F76]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
