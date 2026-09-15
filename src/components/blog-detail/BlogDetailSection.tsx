/* eslint-disable @typescript-eslint/no-explicit-any */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { DetailBlogPost } from "@/src/containers/blogs/types";

type BlogDetailSectionProps = {
  blog: DetailBlogPost;
};

const BlogDetailSection: React.FC<BlogDetailSectionProps> = ({ blog }) => {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="my-4 py-2 text-sm text-gray-700">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-xl font-bold text-gray-900">{children}</h2>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file } = node.data.target.fields;
        return (
          <Image
            src={`https:${file.url}`}
            alt="Embedded image"
            width={600}
            height={400}
            className="my-4 rounded-lg"
          />
        );
      },
      [BLOCKS.TABLE]: (node: any, children: any) => (
        <table className="table-auto w-full my-4 border-collapse border border-gray-300">
          {children}
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (node: any, children: any) => (
        <tr className="border-b border-gray-300">{children}</tr>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node: any, children: any) => (
        <th className="border border-gray-300 px-4 py-2 font-bold bg-gray-100 text-gray-900">
          {children}
        </th>
      ),
      [BLOCKS.TABLE_CELL]: (node: any, children: any) => (
        <td className="border border-gray-300 px-4 py-2 text-gray-700">
          {children}
        </td>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="prose lg:prose-xl mx-auto">
      {documentToReactComponents(blog.body, richTextOptions)}
    </div>
  );
};

export default BlogDetailSection;
