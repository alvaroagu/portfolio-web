"use client";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { ContentLayout } from "@/components/layout/ContentLayout";
import { useGetProjects } from "@/hooks/projects/useGetProjects";

export default function Projects() {
  const { data: projects, isLoading, error } = useGetProjects();
  if (isLoading) {
    return (
      <ContentLayout title="Home">
        <div className="flex flex-col items-center min-h-screen p-0 text-black">
          <div className="pt-15 px-8">
            <h1 className="font-bold text-xl text-center sm:text-4xl">
              Cargando proyectos...
            </h1>
          </div>
        </div>
      </ContentLayout>
    );
  }
  if (error) {
    return (
      <ContentLayout title="Home">
        <div className="flex flex-col items-center min-h-screen p-0 text-black">
          <div className="pt-15 px-8">
            <h1 className="font-bold text-xl text-center sm:text-4xl text-red-500">
              Error al cargar los proyectos: {error.message}
            </h1>
          </div>
        </div>
      </ContentLayout>
    );
  }
  return (
    <>
      <ContentLayout title="Projects">
        <div className="flex flex-col items-center min-h-screen p-0 text-black">
          <div className="flex flex-col pt-15 px-6 sm:px-12 sm:gap-5 sm:justify-center sm:items-center">
            <h1 className="text-2xl font-medium sm:text-3xl">
              Lista de proyectos
            </h1>
            <p className="text-sm sm:text-lg">
              Cada proyecto de esta sección representa mi capacidad para
              transformar desafíos complejos en soluciones de software robustas
              y eficientes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 md:grid-cols-3 sm:p-10">
            {projects?.map((project) => (
              <ProjectCard
                key={project._id} // Asegúrate de que cada proyecto tenga un id único
                projectName={project.name}
                projectDescription={project.description}
                urlImage={project.image}
                {...(project.languageImage && {
                  languageImage: project.languageImage,
                })}
                {...(project.languages && { languages: project.languages })}
              />
            ))}
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
