import type { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  /** Put the section on the landing page's near-black band. */
  dark?: boolean;
  /** Let the content run edge to edge (maps, full-bleed strips). */
  bleed?: boolean;
  /** Column width; the landing page uses 1300 for text-led sections. */
  width?: 1300 | 1400;
  className?: string;
  id?: string;
}

/**
 * The one spacing rhythm used by every landing section: 80px of vertical
 * padding (112px from tablet up) and a centred column with a 24px gutter on
 * phones and 40px from tablet up. Inner components should not add their own
 * outer margins or side padding.
 */
export default function PageSection({
  children,
  dark = false,
  bleed = false,
  width = 1300,
  className = "",
  id,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 tablet:py-28 ${
        dark ? "band-dark" : "bg-white"
      } ${className}`}
    >
      <div
        className={
          bleed
            ? "relative"
            : `relative mx-auto w-full px-6 sm:px-10 ${
                width === 1400 ? "max-w-[1400px]" : "max-w-[1300px]"
              }`
        }
      >
        {children}
      </div>
    </section>
  );
}
