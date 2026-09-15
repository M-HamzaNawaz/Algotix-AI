/**
 * Decorative corner artwork for the dark card grid. Every shape is computed
 * from fixed arithmetic rather than randomness, so the server and the browser
 * always produce identical markup.
 */
export type PatternKind =
  | "contours"
  | "dotwave"
  | "chevrons"
  | "dots"
  | "stripes"
  | "dashes";

interface PatternProps {
  kind: PatternKind;
  color: string;
  className?: string;
}

const round = (n: number) => Math.round(n * 10) / 10;

function Contours({ color }: { color: string }) {
  const lines = Array.from({ length: 8 }, (_, i) => {
    const o = i * 13;
    return `M${40 + o} 210 C ${70 + o} 160, ${25 + o} 125, ${75 + o} 90 S ${135 + o} 35, ${115 + o} -10`;
  });
  return (
    <>
      {lines.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={color}
          strokeWidth="1.4"
          opacity={round(0.95 - i * 0.09)}
        />
      ))}
    </>
  );
}

function DotWave({ color }: { color: string }) {
  const dots: { x: number; y: number; o: number }[] = [];
  for (let c = 0; c < 11; c++) {
    for (let r = 0; r < 13; r++) {
      const lift = Math.sin((c / 10) * Math.PI) * 55;
      dots.push({
        x: round(48 + c * 14),
        y: round(205 - r * 14 - lift),
        o: round(0.3 + (r / 12) * 0.65),
      });
    }
  }
  return (
    <>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2" fill={color} opacity={d.o} />
      ))}
    </>
  );
}

function Chevrons({ color }: { color: string }) {
  return (
    <>
      {[0, 1, 2, 3].map((i) => {
        const s = i * 30;
        return (
          <path
            key={i}
            d={`M${s} 210 L${140 + s * 0.2} ${50 + s} L210 ${120 + s}`}
            stroke={color}
            strokeWidth="11"
            fill="none"
          />
        );
      })}
    </>
  );
}

function Dots({ color }: { color: string }) {
  // Golden-angle spiral: evenly scattered without any randomness.
  const pts = Array.from({ length: 42 }, (_, i) => {
    const angle = i * 2.399963;
    const radius = 14 + Math.sqrt(i) * 14;
    return {
      x: round(150 + Math.cos(angle) * radius),
      y: round(150 + Math.sin(angle) * radius),
      r: round(2 + ((i * 7) % 5)),
    };
  });
  return (
    <>
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={color} opacity="0.9" />
      ))}
    </>
  );
}

function Stripes({ color }: { color: string }) {
  return (
    <>
      <clipPath id="landing-pattern-stripes">
        <path d="M200 40 A160 160 0 0 0 40 200 L200 200 Z" />
      </clipPath>
      <g clipPath="url(#landing-pattern-stripes)">
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={`M${-40 + i * 26} 220 L${140 + i * 26} 40`}
            stroke={color}
            strokeWidth="12"
          />
        ))}
      </g>
    </>
  );
}

function Dashes({ color }: { color: string }) {
  const items = Array.from({ length: 34 }, (_, i) => ({
    x: 70 + ((i * 53) % 125),
    y: 70 + ((i * 97) % 125),
    rot: (i * 47) % 180,
  }));
  return (
    <>
      {items.map((d, i) => (
        <rect
          key={i}
          x={d.x}
          y={d.y}
          width="16"
          height="4"
          rx="2"
          fill={color}
          transform={`rotate(${d.rot} ${d.x + 8} ${d.y + 2})`}
        />
      ))}
    </>
  );
}

const PATTERNS = {
  contours: Contours,
  dotwave: DotWave,
  chevrons: Chevrons,
  dots: Dots,
  stripes: Stripes,
  dashes: Dashes,
};

export default function Pattern({ kind, color, className }: PatternProps) {
  const Shape = PATTERNS[kind];
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{
        // Solid only in the far corner, fading toward the top-left where the
        // copy sits, so the artwork never competes with the text.
        maskImage:
          "linear-gradient(225deg, black 0%, black 30%, transparent 68%)",
        WebkitMaskImage:
          "linear-gradient(225deg, black 0%, black 30%, transparent 68%)",
      }}
    >
      <Shape color={color} />
    </svg>
  );
}
