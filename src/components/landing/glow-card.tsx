"use client";

import {
  useCallback,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

/**
 * A card whose soft brand glow follows the pointer. The glow itself is drawn
 * by the `.glow-card` rule in globals.css from the two variables set here, so
 * this stays a thin wrapper and the rest of the card can be styled as usual.
 */
export default function GlowCard({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: "div" | "figure";
  className?: string;
  children: ReactNode;
}) {
  const onMouseMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`,
    );
  }, []);

  return (
    <Tag
      className={`glow-card ${className}`}
      onMouseMove={onMouseMove}
      style={{ "--mx": "50%", "--my": "0%" } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
