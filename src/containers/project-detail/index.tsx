import { projects } from "./data";
import ProjectDetailSection from "@/src/components/project-detail/projectDetailSection";
import EmailSubscribeSection from "@/src/components/project-detail/EmailSubscribeSection";
import HeroSection from "@/src/components/project-detail/HeroSection";
import ProjectOverview from "@/src/components/project-detail/projectOverview";
import TransformAiSection from "@/src/components/project-detail/TransformAiSection";
import TestimonialsSection from "@/src/components/common/Testimonials/TestimonialsSection";

type tParams = Promise<{ slug: string }>;

export default async function ProjectDetail(props: { params: tParams }) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="container mx-auto ">
      <HeroSection project={project} />
      <ProjectOverview project={project} />

      <main className="text-left tablet-lg:items-start px-4 sm:px-12 mt-4 laptop:ml-10 max-w-full lg:max-w-[1200px] xl:max-w-[1350px] 2xl:max-w-[1700px]">
        <ProjectDetailSection slug={slug} />
      </main>
      <ProjectOverview project={project} bottom={true} />

      <TransformAiSection />
      <TestimonialsSection />
      <EmailSubscribeSection />
    </section>
  );
}
