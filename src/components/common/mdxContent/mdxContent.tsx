import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";

interface MDXContentProps {
  content: string;
}

export default async function MDXContent({ content }: MDXContentProps) {
  const { content: markup } = await compileMDX<{ title: string; date: string }>(
    {
      source: content,
    },
  );

  return <>{markup}</>;
}
