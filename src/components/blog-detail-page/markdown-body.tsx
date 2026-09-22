import Image from "next/image";
import type { ReactNode } from "react";
import { compileMDX } from "next-mdx-remote/rsc";

type Props = { children?: ReactNode };

/* The same type scale as the Contentful renderer, for Markdown posts. */
const components = {
  h1: ({ children }: Props) => (
    <h2 className="text-subheading mt-12 text-[#14141D]">{children}</h2>
  ),
  h2: ({ children }: Props) => (
    <h2 className="text-subheading mt-12 text-[#14141D]">{children}</h2>
  ),
  h3: ({ children }: Props) => (
    <h3 className="text-body font-semibold mt-9 font-semibold text-[#14141D]">
      {children}
    </h3>
  ),
  p: ({ children }: Props) => (
    <p className="text-body my-5 text-[#3A3D45]">{children}</p>
  ),
  ul: ({ children }: Props) => (
    <ul className="text-lead my-5 list-disc space-y-2 pl-6 text-[#3A3D45] marker:text-primary">
      {children}
    </ul>
  ),
  ol: ({ children }: Props) => (
    <ol className="text-lead my-5 list-decimal space-y-2 pl-6 text-[#3A3D45] marker:font-semibold marker:text-primary">
      {children}
    </ol>
  ),
  li: ({ children }: Props) => <li className="[&>p]:my-0">{children}</li>,
  blockquote: ({ children }: Props) => (
    <blockquote className="text-lead my-8 border-l-4 border-primary pl-6 italic text-[#14141D] [&>p]:my-0">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-[#E4E4E8]" />,
  strong: ({ children }: Props) => (
    <strong className="font-semibold text-[#14141D]">{children}</strong>
  ),
  a: ({ href, children }: Props & { href?: string }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
    >
      {children}
    </a>
  ),
  code: ({ children }: Props) => (
    <code className="rounded-md bg-[#F6F6F7] px-1.5 py-0.5 font-mono text-[0.9em] text-[#14141D]">
      {children}
    </code>
  ),
  pre: ({ children }: Props) => (
    <pre className="text-small my-6 overflow-x-auto rounded-2xl border border-[#E4E4E8] bg-[#0B0B12] p-5 text-white [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-white">
      {children}
    </pre>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) =>
    src ? (
      <Image
        src={src}
        alt={alt || ""}
        width={1200}
        height={750}
        className="my-8 h-auto w-full rounded-2xl border border-[#E4E4E8]"
      />
    ) : null,
};

/** Renders a Markdown article from src/content/blogs. */
export default async function MarkdownBody({ content }: { content: string }) {
  const { content: markup } = await compileMDX({
    source: content,
    components,
  });
  return <>{markup}</>;
}
