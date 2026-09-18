import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { stats } from "./data";

/* Each tread starts exactly at the bottom edge of the one above and two
   thirds of a card further right, so the corners touch like real steps. The
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
          <Reveal amount={0.2}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-primary tablet:text-[13px]">
              Global Reach
            </p>
            <h2 className="mt-5 text-[28px] font-bold leading-[1.12] text-[#14141D] tablet:text-[40px] laptop:text-[34px] laptop-lg:text-[42px] laptop-xl:text-[48px]">
              Rooted in Bahawalpur.
              <span className="block text-primary">Delivering worldwide.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#6B6F76] laptop:text-[20px]">
              We partner with startups and enterprises across industries,
              pairing global engineering standards with the responsiveness of a
              close-knit team.
            </p>
          </Reveal>

          {/* The figures step down like a staircase, one card per tread. */}
          <RevealGroup
            className="flex flex-col gap-5 tablet:gap-0"
            stagger={0.12}
            amount={0.2}
          >
            {stats.map((stat, i) => (
              <RevealItem
                key={stat.label}
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
                  <div className="relative rounded-[14px] bg-[#F6F6F7] px-7 py-7">
                    <p className="text-[40px] font-bold leading-none text-primary tablet:text-[46px]">
                      {stat.value}
                    </p>
                    <p className="mt-3 max-w-[170px] text-sm leading-snug text-[#6B6F76]">
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
