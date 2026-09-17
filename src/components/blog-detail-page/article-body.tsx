/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import type { DetailBlogPost } from "@/src/containers/blogs/types";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
      <p className="my-5 text-[17px] leading-relaxed text-[#3A3D45]">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_1]: (_node: any, children: any) => (
      <h2 className="mt-12 text-[30px] font-bold leading-tight text-[#14141D]">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_2]: (_node: any, children: any) => (
      <h2 className="mt-12 text-[26px] font-bold leading-tight text-[#14141D]">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: any) => (
      <h3 className="mt-9 text-[21px] font-semibold leading-snug text-[#14141D]">
        {children}
      </h3>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: any) => (
      <ul className="my-5 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-[#3A3D45] marker:text-primary">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_node: any, children: any) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 text-[17px] leading-relaxed text-[#3A3D45] marker:text-primary">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: any) => (
      <li className="[&>p]:my-0">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_node: any, children: any) => (
      <blockquote className="my-8 border-l-4 border-primary pl-6 text-[18px] italic leading-relaxed text-[#14141D] [&>p]:my-0">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-10 border-[#E4E4E8]" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const file = node.data?.target?.fields?.file;
      if (!file?.url) return null;
      return (
        <Image
          src={`https:${file.url}`}
          alt={node.data.target.fields.title || ""}
          width={file.details?.image?.width || 1200}
          height={file.details?.image?.height || 800}
          className="my-8 h-auto w-full rounded-2xl border border-[#E4E4E8]"
        />
      );
    },
    [BLOCKS.TABLE]: (_node: any, children: any) => (
      <div className="my-8 overflow-x-auto rounded-2xl border border-[#E4E4E8]">
        <table className="w-full border-collapse text-[15px]">
          <tbody>{children}</tbody>
        </table>
      </div>
    ),
    [BLOCKS.TABLE_ROW]: (_node: any, children: any) => (
      <tr className="border-b border-[#E4E4E8] last:border-b-0">{children}</tr>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (_node: any, children: any) => (
      <th className="bg-[#F6F6F7] px-4 py-3 text-left font-semibold text-[#14141D] [&>p]:my-0">
        {children}
      </th>
    ),
    [BLOCKS.TABLE_CELL]: (_node: any, children: any) => (
      <td className="px-4 py-3 align-top text-[#3A3D45] [&>p]:my-0">
        {children}
      </td>
    ),
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
      >
        {children}
      </a>
    ),
  },
};

/** The Contentful rich text of one article, in the site's type scale. */
export default function ArticleBody({ blog }: { blog: DetailBlogPost }) {
  return <>{documentToReactComponents(blog.body, options)}</>;
}
