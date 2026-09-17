import { RevealGroup, RevealItem } from "@/src/components/motion/reveal";

export interface Metric {
  value: string;
  label: string;
}

/** The light key-figures strip that sits directly under a page hero. */
export default function MetricsStrip({ items }: { items: Metric[] }) {
  /* Three figures fit side by side at every width; four go 2×2 until laptop. */
  const three = items.length === 3;
  const columns = three ? "grid-cols-3" : "grid-cols-2 laptop:grid-cols-4";
  const divider = three
    ? "border-l border-[#E4E4E8]"
    : "laptop:border-l laptop:border-[#E4E4E8]";
  return (
    <section className="border-b border-[#E4E4E8] bg-white pt-8 tablet:pt-12">
      <RevealGroup
        className={`mx-auto grid w-full max-w-[1300px] px-6 sm:px-10 ${columns}`}
        stagger={0.08}
        amount={0.3}
      >
        {items.map((m, i) => (
          <RevealItem key={m.label} distance={18}>
            <div className={`px-2 py-10 text-center ${i > 0 ? divider : ""}`}>
              <p className="text-[32px] font-bold leading-none text-primary tablet:text-[44px]">
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
