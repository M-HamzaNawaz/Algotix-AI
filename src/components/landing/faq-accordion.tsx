"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { RevealGroup, RevealItem } from "@/src/components/motion/reveal";

export interface FaqItem {
  question: string;
  answer: string;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** One-open-at-a-time accordion, styled for a light or dark band. */
export default function FaqAccordion({
  items,
  tone = "light",
}: {
  items: FaqItem[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = tone === "dark";

  return (
    <RevealGroup
      className={`overflow-hidden rounded-2xl border ${
        dark ? "border-white/10 bg-white/[0.04]" : "border-[#E4E4E8] bg-white"
      }`}
      stagger={0.06}
      amount={0.1}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <RevealItem key={item.question} distance={16}>
            <div
              className={`border-b last:border-b-0 ${
                dark ? "border-white/10" : "border-[#E4E4E8]"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left tablet:px-8"
              >
                <span
                  className={`text-[16px] font-semibold leading-snug tablet:text-[17px] ${
                    dark ? "text-white" : "text-[#14141D]"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                    isOpen
                      ? "border-primary bg-primary text-white"
                      : dark
                        ? "border-white/20 text-white"
                        : "border-[#E4E4E8] text-[#14141D]"
                  }`}
                >
                  <Plus
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={2}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`max-w-3xl px-6 pb-7 text-[15px] leading-relaxed tablet:px-8 ${
                        dark ? "text-white/60" : "text-[#6B6F76]"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
