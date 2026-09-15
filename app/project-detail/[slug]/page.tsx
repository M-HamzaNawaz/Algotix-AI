import { Metadata } from "next";
import { projects } from "@/src/containers/project-detail/data";

type tParams = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: tParams;
}): Promise<Metadata> {
  const { slug } = await props.params;

  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? project.title : "Project Not Found",
    description: project ? project.description : "",
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export { default } from "@/src/containers/project-detail";
