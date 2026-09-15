import React from "react";
import { ProjectData } from "@/src/containers/project-detail/data";

const ProjectDetailResult = ({ project }: { project: ProjectData }) => {
  return (
    <div className="mb-10 lg:w-3/4">
      {project.result.map((section, index) => (
        <div key={index}>
          <h2 className="font-medium text-[30px] leading-[45px] tracking-[0%]">
            {section.title}
          </h2>
          <p className="font-normal text-[20px] leading-[30px] tracking-[0px] text-[#525252] mt-6">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailResult;
