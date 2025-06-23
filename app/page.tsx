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
            <ProjectCard
              projectName="Juego Monopolio"
              projectDescription="Hemos desarrollado cada componente desde cero, desde el detallado tablero y las animaciones de los dados, con una interfaz gráfica intuitiva y efectos visuales creados con Allegro,"
              urlImage="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfR9yavJlNBY2nv6x4tElPTjVoX87CJqNcu3w0L"
            />
            <ProjectCard
              projectName="Puzzle-8"
              projectDescription="Se ha realizado utilizando algoritmos de búsqueda avanzados en Python. Estos algoritmos, como la Búsqueda en Amplitud (BFS) o el potente algoritmo A* (que utiliza heurísticas como la Distancia Manhattan "
              urlImage="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRl5xVKBWZqOs1cPQYNFbviAztg9JRhTXB2DGo"
            />
            <ProjectCard
              projectName="Consultas a BD con NPL"
              projectDescription="Hemos desarrollado un sistema que permite realizar consultas a bases de datos utilizando lenguaje natural, es decir, ¡pueden hacer preguntas como si hablaran con una persona! Esto es posible gracias a la poderosa integración de la Inteligencia Artificial de Gemini"
              urlImage="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRskikY64UhyO1EpAH5cJ6jD4TBwX9fCLiMzux"
            />
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
