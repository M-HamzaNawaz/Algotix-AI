import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  /** `dark` for sections on the near-black band. */
  tone?: "light" | "dark";
  className?: string;
}

/** The eyebrow, title and lead used by every section on the landing page. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const titleColor = tone === "dark" ? "text-white" : "text-[#14141D]";
  const bodyColor = tone === "dark" ? "text-white/60" : "text-[#6B6F76]";

  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        className={`${eyebrow ? "mt-4" : ""} max-w-3xl text-[28px] font-bold leading-tight tablet:text-4xl ${titleColor} ${
          centered ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${bodyColor} ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
