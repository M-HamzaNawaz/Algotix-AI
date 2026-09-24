import Image from "next/image";
import { Mail, MapPin, Briefcase } from "lucide-react";

import DrawLine from "@/src/components/motion/draw-line";
import { RevealGroup, RevealItem } from "@/src/components/motion/reveal";

import PageSection from "@/src/components/landing/page-section";
import { Reveal } from "@/src/components/motion/reveal";
import ProjectDetailSection from "@/src/components/project-detail/projectDetailSection";
import type { ProjectData } from "@/src/containers/project-detail/data";

/** Product screenshot, the write-up, and a sidebar of facts and contacts. */
export default function Overview({ project }: { project: ProjectData }) {
  const contacts = [
    { icon: Mail, title: "Customer support", value: project.contactInfo.email },
    {
      icon: Briefcase,
      title: "General inquiry",
      value: project.contactInfo.hr,
    },
    { icon: MapPin, title: "Head office", value: project.contactInfo.address },
  ];

  const facts = [
    { label: "Client", value: project.client },
    { label: "Industry", value: project.category },
    { label: "Timeline", value: `${project.startDate} to ${project.endDate}` },
    { label: "Engagement", value: project.tag },
  ];

  return (
    <PageSection>
      {/* At a glance: the facts as one ruled row before the product itself. */}
      <RevealGroup
        as="ul"
        className="relative mb-12 grid border-t border-[#E4E4E8] sm:grid-cols-2 laptop:grid-cols-4"
        stagger={0.1}
        amount={0.3}
      >
        <DrawLine
          axis="x"
          delay={0.1}
          className="absolute -top-px left-0 h-px w-full bg-primary"
        />
        {facts.map((fact) => (
          <RevealItem
            as="li"
            key={fact.label}
            direction="up"
            distance={18}
            className="border-b border-[#E4E4E8] py-5 laptop:border-b-0 laptop:border-r laptop:px-6 laptop:first:pl-0 laptop:last:border-r-0"
          >
            <p className="text-label uppercase text-[#A0A4AB]">{fact.label}</p>
            <p className="text-body mt-1.5 font-semibold text-[#14141D]">
              {fact.value}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal amount={0.1}>
        <div className="overflow-hidden rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7] shadow-[0_40px_80px_-40px_rgba(11,11,18,0.45)]">
          <div className="flex items-center gap-1.5 border-b border-[#E4E4E8] bg-white px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E4E4E8]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E4E4E8]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E4E4E8]" />
          </div>
          <Image
            src={project.images.hero}
            alt={`${project.title} screenshot`}
            width={1440}
            height={900}
            priority
            className="h-auto w-full"
          />
        </div>
      </Reveal>

      <div className="mt-16 grid gap-12 laptop:grid-cols-[minmax(0,1fr)_320px] laptop:gap-16">
        <Reveal amount={0.05}>
          <div className="text-body prose-project max-w-none text-[#3A3D45]">
            <ProjectDetailSection slug={project.mdx ?? project.slug} />
          </div>
        </Reveal>

        <aside className="space-y-6">
          <Reveal direction="left" amount={0.2}>
            <div className="rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7] p-7">
              <p className="text-label uppercase text-primary">Project</p>
              <h3 className="text-subheading mt-3 text-[#14141D]">
                {project.companyName}
              </h3>

              <p className="text-label mt-7 uppercase text-[#A0A4AB]">
                {project.technology}
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {project.images.techIcons.map((icon) => (
                  <span
                    key={icon}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm"
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </span>
                ))}
              </div>

              <p className="text-label mt-7 uppercase text-[#A0A4AB]">
                {project.platformAvailability}
              </p>
              <span className="mt-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                <Image
                  src={project.images.platformIcon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </span>
            </div>
          </Reveal>

          <Reveal direction="left" amount={0.2}>
            <div className="rounded-2xl border border-[#E4E4E8] bg-white p-7">
              <p className="text-label uppercase text-primary">Need help?</p>
              <p className="text-body mt-3 text-[#6B6F76]">
                Let us know if you have any concern or query and we will be
                happy to help.
              </p>
              <ul className="mt-6 space-y-5">
                {contacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF3EA] text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-small font-semibold text-[#14141D]">
                          {item.title}
                        </p>
                        <p className="text-small mt-0.5 text-[#6B6F76]">
                          {item.value}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </aside>
      </div>

      {/* Visual showcase: two more views of the product, offset so they read
          as a spread rather than a pair of thumbnails. */}
      <div className="mt-20 grid gap-6 tablet:grid-cols-12 tablet:gap-8">
        <Reveal
          direction="right"
          distance={40}
          amount={0.15}
          className="tablet:col-span-7"
        >
          <figure className="group overflow-hidden rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.images.detail}
                alt={`${project.title}, product detail`}
                fill
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <figcaption className="text-label border-t border-[#E4E4E8] bg-white px-5 py-3 uppercase text-[#6B6F76]">
              Product detail
            </figcaption>
          </figure>
        </Reveal>
        <Reveal
          direction="left"
          distance={40}
          amount={0.15}
          delay={0.12}
          className="tablet:col-span-5 tablet:mt-16"
        >
          <figure className="group overflow-hidden rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.images.workflow}
                alt={`${project.title}, workflow`}
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <figcaption className="text-label border-t border-[#E4E4E8] bg-white px-5 py-3 uppercase text-[#6B6F76]">
              Workflow
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </PageSection>
  );
}
