import { RevealGroup, RevealItem } from "@/src/components/motion/reveal";
import { metrics } from "./data";

/** The key-figures strip that sits directly under the hero. */
export default function Metrics() {
  return (
    <section className="border-b border-[#E4E4E8] bg-white">
      <RevealGroup
        className="mx-auto grid w-full max-w-[1300px] grid-cols-2 px-6 sm:px-10 laptop:grid-cols-4"
        stagger={0.08}
        amount={0.3}
      >
        {metrics.map((m, i) => (
          <RevealItem key={m.label} distance={18}>
            <div
              className={`py-10 text-center ${
                i > 0 ? "laptop:border-l laptop:border-[#E4E4E8]" : ""
              }`}
            >
              <p className="text-[40px] font-bold leading-none text-primary tablet:text-[44px]">
                {m.value}
              </p>
              <p className="mx-auto mt-3 max-w-[180px] text-sm leading-snug text-[#6B6F76]">
                {m.label}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
