"use client";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { ContentLayout } from "../components/layout/ContentLayout";

export default function Home() {
  return (
    <>
      <ContentLayout title="Home">
        <div className="flex flex-col items-center min-h-screen p-0 text-black">
          <div className="pt-15 px-8">
            <h1 className="font-bold text-xl text-center sm:text-4xl">
              Hey There!!! I'm <br />
              Alvaro
            </h1>
            <p className="font-light text-md pt-5 sm:text-xl sm:font-light">
              A passioante developer. Explore my projects and discover how my
              code brings ideas to life.
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
