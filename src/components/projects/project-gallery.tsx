"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/src/containers/projects/data";
import Button from "../common/button/button";

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const dynamicFilters = ["All", ...categories];
  return (
    <div className="flex flex-col tablet:flex-row min-h-screen p-4 px-6 md:px-2 lg:px-12 xl:px-16 gap-8 bg-project-bg bg-no-repeat bg-fixed bg-cover bg-center">
      {/* filters section */}
      <div className="w-full md:w-1/6 mb-4 md:mb-0 flex md:flex-col md:justify-center items-start h-max justify-between flex-wrap space-y-4 tablet:space-y-2 laptop:space-y-6">
        {dynamicFilters.map((filter) => (
          <Button
            variant={activeFilter === filter ? "custom" : "custom"}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`${
              filter === "All" ? "mt-4" : ""
            } w-[120px] md:w-[140px] lg:w-[200px] lg:h-[65px] 4k:w-[350px] 4k:h-[70px] h-[40px] tablet:h-[45px] !rounded-[6px] text-[10px] tablet:text-[12px] lg:text-[18px] 4k:text-[22px] text-center whitespace-nowrap overflow-hidden text-ellipsis ${
              activeFilter === filter
                ? "bg-[#e8e7e76b] text-primary hover:bg-[#e8e7e76b]"
                : "bg-[#F2F2F2] hover:bg-gray-200"
            } ${filter === "All" ? " shadow-[-350px_0px_90px_15px_rgba(249,_115,_22,_0.5)]" : ""}`}
          >
            {filter}
          </Button>
        ))}
      </div>
      {/* Projects Cards Section */}
      <div className="flex flex-col flex-1">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-4 lg:w-3/4 mx-auto">
          {(showAll ? filteredProjects : filteredProjects.slice(0, 6)).map(
            (project) => (
              <div
                key={project.id}
                className="flex flex-col gap-4 cursor-pointer"
              >
                <Link href={`/project-detail/${project.slug}`}>
                  <div className="relative w-full inset-[2px] h-full rounded-[20px] shadow-lg border-2 border-transparent transition-all duration-300 overflow-hidden">
                    {/* Rotating Gradient Border */}
                    <div className="absolute -inset-10 z-0 animate-spin-border bg-gradient-to-r from-transparent via-primary to-transparent ease-in-out blur-[5px]" />
                    {/* Card */}
                    <div className="relative z-10 inset-[2px] mr-1 bg-white rounded-[20px] h-[250px] sm:h-[280px] tablet:h-[300px] lg:h-[400px] shadow-lg flex items-center justify-center overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        className="rounded-5xl pr-4 object-cover w-full h-full"
                        width={700}
                        height={400}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </Link>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between gap-2 items-center">
                    <p className="font-normal text-[14px] sm:text-[16px] tablet:text-[18px] lg:text-[20px] leading-[30px] tracking-[0px]">
                      {project.category}
                    </p>
                    <p className="font-normal text-[14px] sm:text-[16px] tablet:text-[18px] lg:text-[20px] leading-[30px] tracking-[0px] text-right">
                      {project.year}
                    </p>
                  </div>
                  <h3 className="font-medium text-[20px] sm:text-[24px] tablet:text-[26px] lg:text-[30px] leading-[30px] tracking-[0px] text-center text-primary mb-8">
                    {project.name}
                  </h3>
                </div>
              </div>
            ),
          )}
        </div>
        {/* View All Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center w-full my-5 mt-10">
            <Button
              variant="custom"
              className="bg-primary text-white w-[139px] h-[52px] rounded-[39px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] gap-[8px]"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
