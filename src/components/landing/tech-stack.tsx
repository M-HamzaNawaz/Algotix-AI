import Image from "next/image";
import type React from "react";
import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiAndroid,
  SiAnsible,
  SiApachekafka,
  SiCircleci,
  SiDjango,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiGrafana,
  SiHuggingface,
  SiJenkins,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPandas,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedux,
  SiScikitlearn,
  SiSolidity,
  SiSwift,
  SiTailwindcss,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { techLogosRowA, techLogosRowB, type TechLogo } from "./data";

/**
 * Single-colour marks for the dark band, keyed by the name in `data.ts`.
 *
 * Whitening the full-colour logo files with a CSS filter turns every opaque
 * pixel white, so logos drawn as a filled shape with the detail in a second
 * colour (TypeScript's square, Ansible's circle, Swift's rounded square)
 * collapse into blank blocks. These vector marks are drawn as one colour with
 * the detail cut out, which is the only kind of logo that reads on dark.
 *
 * Azure is not in Simple Icons (Microsoft's marks were withdrawn from it),
 * hence the one import from the VS Code set.
 */
/* `color` is the brand colour shown on hover. Marks whose brand colour is black
   or near-black use white instead, because they would vanish on the dark band.
   Every mark rests dimmed and gains a glow in its colour on hover, so even the
   white ones visibly switch on. */
const MONO_ICONS: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Python: { icon: SiPython, color: "#4B8BBE" },
  Django: { icon: SiDjango, color: "#44B78B" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  OpenAI: { icon: SiOpenai, color: "#FFFFFF" },
  AWS: { icon: SiAmazonwebservices, color: "#FF9900" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Terraform: { icon: SiTerraform, color: "#844FBA" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Flutter: { icon: SiFlutter, color: "#54C5F8" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  Azure: { icon: VscAzure, color: "#0089D6" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  GitLab: { icon: SiGitlab, color: "#FC6D26" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Prometheus: { icon: SiPrometheus, color: "#E6522C" },
  Kafka: { icon: SiApachekafka, color: "#FFFFFF" },
  Ansible: { icon: SiAnsible, color: "#EE0000" },
  CircleCI: { icon: SiCircleci, color: "#FFFFFF" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  Swift: { icon: SiSwift, color: "#F05138" },
  Kotlin: { icon: SiKotlin, color: "#7F52FF" },
  Android: { icon: SiAndroid, color: "#3DDC84" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  Vue: { icon: SiVuedotjs, color: "#4FC08D" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  "Hugging Face": { icon: SiHuggingface, color: "#FFD21E" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  pandas: { icon: SiPandas, color: "#E70488" },
  Solidity: { icon: SiSolidity, color: "#FFFFFF" },
};

/**
 * On hover the white mark cross-fades to the original full-colour logo file.
 * These are the exceptions: their original artwork is black or dark navy and
 * would vanish on the dark band, so they keep the vector mark and light up in
 * the colour above instead (white is how these brands show themselves on dark).
 */
const KEEP_MONO_ON_HOVER = new Set([
  "Next.js",
  "GitHub",
  "Kafka",
  "CircleCI",
  "Vercel",
  "Solidity",
  "OpenAI",
  "AWS",
  "Django",
  "pandas",
]);

export default function TechStack() {
  return (
    <section className="band-gradient relative overflow-hidden py-20 tablet:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 xl:px-[60px]">
        <Reveal className="text-center" amount={0.2}>
          <p className="text-label uppercase text-primary">Our Stack</p>
          <h2 className="text-heading mx-auto mt-4 max-w-3xl text-white">
            Built on proven, production-grade technology
          </h2>
          <p className="text-body mx-auto mt-4 max-w-2xl text-white/60">
            We pick tools for longevity, not novelty, so what we ship stays
            maintainable long after launch.
          </p>
        </Reveal>
      </div>

      {/* Two plain rows of wordmarks drifting in opposite directions. */}
      <RevealGroup
        className="relative z-10 mt-24 w-full overflow-hidden tablet:mt-32"
        amount={0.3}
        stagger={0.22}
      >
        <RevealItem direction="right" distance={48}>
          <LogoRow items={techLogosRowA} tone="dark" reverse />
        </RevealItem>
        <RevealItem direction="left" distance={48} className="mt-10">
          <LogoRow items={techLogosRowB} tone="dark" />
        </RevealItem>
      </RevealGroup>
    </section>
  );
}

/** The mark for one row entry: a white vector on dark, the colour file on light. */
function LogoMark({ tech, dark }: { tech: TechLogo; dark: boolean }) {
  const mono = dark ? MONO_ICONS[tech.name] : undefined;
  if (mono) {
    const Icon = mono.icon;
    const swap = !KEEP_MONO_ON_HOVER.has(tech.name);
    return (
      <span className="relative block h-9 w-9 shrink-0 tablet:h-10 tablet:w-10">
        <Icon
          /* Dimmed white at rest. The hover stays pure CSS (a variable carries
             the colour), so this can remain a server component. */
          style={{ "--brand": mono.color } as React.CSSProperties}
          className={`absolute inset-0 h-full w-full text-white/55 transition-all duration-300 ${
            swap
              ? "group-hover:opacity-0"
              : "group-hover:text-[color:var(--brand)] group-hover:[filter:drop-shadow(0_0_10px_var(--brand))]"
          }`}
          aria-label={`${tech.name} logo`}
        />
        {swap && (
          <Image
            src={tech.logo}
            alt=""
            aria-hidden
            width={80}
            height={80}
            className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </span>
    );
  }
  return (
    <Image
      src={tech.logo}
      alt={`${tech.name} logo`}
      width={40}
      height={40}
      className={`h-9 w-auto object-contain tablet:h-10 ${
        dark ? "brightness-0 invert" : ""
      }`}
    />
  );
}

export function LogoRow({
  items,
  reverse = false,
  className = "",
  tone = "light",
}: {
  items: TechLogo[];
  /** Reverse runs the same loop backwards, so the row drifts left to right. */
  reverse?: boolean;
  className?: string;
  /** On dark bands the marks are white and take their brand colour on hover. */
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`landing-marquee flex w-max ${reverse ? "marquee-reverse" : ""} ${
          dark ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{ animationDuration: "70s" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((tech) => (
              <div
                key={`${copy}-${tech.name}`}
                className={`group flex shrink-0 items-center pr-16 transition duration-300 tablet:pr-28 ${
                  dark
                    ? "gap-3.5"
                    : "gap-3.5 opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                }`}
              >
                <LogoMark tech={tech} dark={dark} />
                <span
                  className={`text-lead whitespace-nowrap font-semibold ${dark ? " text-white/65 transition-colors duration-300 group-hover:text-white " : " text-[#6B6F76] "}`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
