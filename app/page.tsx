"use client";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { ContentLayout } from "../components/layout/ContentLayout";
import { useGetProjects } from "@/hooks/projects/useGetProjects";

export default function Home() {
  // Usa el hook para obtener los proyectos
  const { data: projects, isLoading, error } = useGetProjects();

  // Usa useEffect para loguear los datos una vez que estén disponibles
  // useEffect(() => {
  //   if (!isLoading && !error && projects) {
  //     console.log("Proyectos cargados:", projects);
  //   }
  // }, [projects, isLoading, error]);

  // Muestra un estado de carga mientras se obtienen los datos
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

  // Muestra un mensaje de error si ocurre algún problema
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
      <ContentLayout title="Home">
        <div className="flex flex-col items-center min-h-screen p-0 text-black">
          <div className="pt-15 px-8">
            <h1 className="font-bold text-xl text-center sm:text-4xl">
              Bienvenidos !!!
              <br />
              Soy Alvaro, desarrollador de Software
            </h1>
            <p className="font-light text-md pt-5 sm:text-xl sm:font-light">
              Un desarrollador apasionado. Explora mis proyectos y descubre cómo
              mi código da vida a tus ideas.
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
