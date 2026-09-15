import React from "react";
import MDXContent from "../common/mdxContent/mdxContent";
import styles from "./../../styles/projectDetail.module.css";
import fs from "fs/promises";
import path from "path";

interface SectionProps {
  slug: string;
}

async function getMdxData(slug: string): Promise<string> {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "projects",
    `${slug}.mdx`,
  );
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return `Error: Could not load ${slug}.mdx`;
  }
}

const ProjectDetailSection: React.FC<SectionProps> = async ({ slug }) => {
  const fileData = await getMdxData(slug);

  return (
    <div className={`lg:w-3/4 ${styles.mdxContent}`}>
      <MDXContent content={fileData} />
    </div>
  );
};

export default ProjectDetailSection;
