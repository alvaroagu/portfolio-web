"use client";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { ContentLayout } from "@/components/layout/ContentLayout";

export default function Projects() {
  return (
    <>
      <ContentLayout title="Projects">
        <div className="flex flex-col items-center min-h-screen p-0 text-black">
          <div className="flex flex-col pt-15 px-6 sm:px-12 sm:gap-5 sm:justify-center sm:items-center">
            <h1 className="text-2xl font-medium sm:text-3xl">Project List</h1>
            <p className="text-sm sm:text-lg">
              Each project in this section represents my ability to transform
              complex challenges into robust and efficient software solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 md:grid-cols-3 sm:p-10">
            <ProjectCard
              projectName="Project Name 1"
              projectDescription="Project description"
            />
            <ProjectCard
              projectName="Project Name 2"
              projectDescription="Project description"
            />
            <ProjectCard
              projectName="Project Name 3"
              projectDescription="Project description"
            />

            <ProjectCard
              projectName="Project Name 1"
              projectDescription="Project description"
            />
            <ProjectCard
              projectName="Project Name 2"
              projectDescription="Project description"
            />
            <ProjectCard
              projectName="Project Name 3"
              projectDescription="Project description"
            />
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
