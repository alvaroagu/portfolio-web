"use client";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { ContentLayout } from "@/components/layout/ContentLayout";

export default function Projects() {
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
            <ProjectCard
              projectName="Juego Monopolio"
              projectDescription="Hemos desarrollado cada componente desde cero, desde el detallado tablero y las animaciones de los dados, con una interfaz gráfica intuitiva y efectos visuales creados con Allegro"
              urlImage="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfR9yavJlNBY2nv6x4tElPTjVoX87CJqNcu3w0L"
            />
            <ProjectCard
              projectName="Puzzle-8"
              projectDescription="Se ha realizado utilizando algoritmos de búsqueda avanzados en Python. Estos algoritmos, como la Búsqueda en Amplitud (BFS) o el potente algoritmo A* (que utiliza heurísticas como la Distancia Manhattan"
              urlImage="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRl5xVKBWZqOs1cPQYNFbviAztg9JRhTXB2DGo"
            />
            <ProjectCard
              projectName="Consultas a BD con PLN"
              projectDescription="Hemos desarrollado un sistema que permite realizar consultas a bases de datos utilizando lenguaje natural, es decir, ¡pueden hacer preguntas como si hablaran con una persona! Esto es posible gracias a la poderosa integración de la Inteligencia Artificial de Gemini

"
              urlImage="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRskikY64UhyO1EpAH5cJ6jD4TBwX9fCLiMzux"
            />
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
