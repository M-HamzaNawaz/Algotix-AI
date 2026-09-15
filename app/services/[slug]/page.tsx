import { ourServiceData } from "@/src/containers/services/data";
import { Metadata } from "next";

type tParams = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: tParams;
}): Promise<Metadata> {
  const { slug } = await props.params;

  const service = ourServiceData.find((p) => p.slug === slug);
  return {
    title: service ? service.title : "service Not Found",
    description: service ? service.description : "",
  };
}

export async function generateStaticParams() {
  return ourServiceData.map((service) => ({
    slug: service.slug,
  }));
}

export { default } from "@/src/containers/services-detail";
