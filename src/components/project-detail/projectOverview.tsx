import React from "react";
import Image from "next/image";
import { ProjectOverviewProps } from "@/src/containers/project-detail/data";
import ImageShowcase from "../common/ui/image-showcase";

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  project,
  bottom = false,
}) => {
  return (
    <section className="container mx-auto mt-16 ">
      <div
        className={`flex flex-col lg:flex-row gap-10 px-4 lg:px-12  mx-auto laptop:ml-12  `}
      >
        <div className={`w-full lg:w-3/4 ${bottom ? "hidden" : "block"}`}>
          <ImageShowcase
            images={
              Array.from({ length: 10 }).fill(project.images.detail) as string[]
            }
            alt="project detail"
          />
        </div>

        {/* Right section */}
        <div className="lg:w-1/3 space-y-8">
          <div className={`${bottom ? "hidden" : "block"}`}>
            <div>
              <h2 className="font-medium text-[20px] leading-[150%] tracking-[0%] mb-6">
                Project Title
              </h2>
              <h3 className="font-medium text-[20px] leading-[150%] tracking-[0%] text-[#525252] mb-4">
                {project.companyName}
              </h3>
            </div>
            <div>
              <h3 className="font-medium text-[20px] leading-[150%] tracking-[0%] mb-4">
                {project.technology}
              </h3>
              <div className="flex gap-4">
                {project.images.techIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-3 rounded-xl shadow-xl w-16 h-16 flex items-center justify-center mb-6"
                  >
                    <Image
                      src={icon}
                      alt={`tech-${index}`}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-[20px] leading-[150%] tracking-[0%] mb-2">
                {project.platformAvailability}
              </h3>
              <div className="bg-gray-50 p-3 rounded-xl shadow-xl w-fit">
                <Image
                  src={project.images.platformIcon}
                  alt="platform"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div></div>
          </div>
          <div className={`${bottom ? "block lg:hidden" : "hidden lg:block"}`}>
            <h3 className="font-medium text-[20px] leading-[150%] tracking-[0%] text-primary mb-2">
              Need Help?
            </h3>
            <p className="font-medium text-[14px] leading-[150%] tracking-[0%] mb-6 max-w-[260px]">
              Let us know if you have any concern or query and we will be happy
              to help.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: project.images.contactIcons.email,
                  title: "Customer Support",
                  value: project.contactInfo.email,
                },
                {
                  icon: project.images.contactIcons.hr,
                  title: "General Inquiry",
                  value: project.contactInfo.hr,
                },
                {
                  icon: project.images.contactIcons.location,
                  title: "Head Office",
                  value: project.contactInfo.address,
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="rounded-full w-8 h-8">
                    <Image
                      src={item.icon}
                      alt={`contact-${index}`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-[16px] leading-[150%] tracking-[0%] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 ">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
