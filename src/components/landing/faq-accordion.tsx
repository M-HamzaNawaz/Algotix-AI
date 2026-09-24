"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import DrawLine from "@/src/components/motion/draw-line";
import { RevealGroup, RevealItem } from "@/src/components/motion/reveal";

export interface FaqItem {
  question: string;
  answer: string;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * One-open-at-a-time accordion as ruled rows under one drawn line, for a
 * light or dark band. No box around it: the rules do the work.
 */
export default function FaqAccordion({
  items,
  tone = "light",
}: {
  items: FaqItem[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = tone === "dark";
  const rule = dark ? "border-white/12" : "border-[#E4E4E8]";

  return (
    <RevealGroup
      as="ul"
      className={`relative border-t ${rule}`}
      stagger={0.09}
      amount={0.1}
    >
      <DrawLine
        axis="x"
        delay={0.1}
        className="absolute -top-px left-0 h-px w-full bg-primary"
      />
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <RevealItem
            as="li"
            key={item.question}
            direction="up"
            distance={16}
            className={`border-b ${rule}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="flex items-start gap-5">
                <span
                  className={`text-label mt-1.5 w-7 shrink-0 tabular-nums transition-colors duration-300 ${
                    isOpen
                      ? "text-primary"
                      : dark
                        ? "text-white/40"
                        : "text-[#A0A4AB]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-subheading transition-colors duration-300 ${
                    dark ? "text-white" : "text-[#14141D]"
                  } ${isOpen ? "" : "group-hover:text-primary"}`}
                >
                  {item.question}
                </span>
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  isOpen
                    ? "border-primary bg-primary text-white"
                    : dark
                      ? "border-white/20 text-white group-hover:border-primary"
                      : "border-[#E4E4E8] text-[#14141D] group-hover:border-primary"
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
                    className={`text-body max-w-3xl pb-7 pl-12 ${dark ? "text-white/60" : "text-[#6B6F76]"}`}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
