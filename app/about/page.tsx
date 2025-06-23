"use client";

import { PostCard } from "@/components/cards/PostCard";
import { ContentLayout } from "@/components/layout/ContentLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // Importa el componente Link

export default function About() {
  return (
    <>
      <ContentLayout title="About">
        <div className="flex flex-col items-center min-h-screen p-0 text-black gap-10">
          <div className="flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-center lg:items-center lg:px-40">
            <div className="py-15 lg:flex-1 lg:flex lg:justify-center ">
              <Image
                className="rounded-full"
                src="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRaJ6ld4D0krVUvwCJO43Hzbeyc6EgQp1Gf8tN"
                alt="picture-about-alvaro"
                width={200}
                height={200}
              />
            </div>

            <div className="flex flex-col justify-center items-center lg:flex-1 lg:justify-start lg:items-start">
              <h1 className="text-xl text-center sm:text-2xl sm:font-medium lg:text-4xl lg:font-bold lg:pb-5">
                Bienvenido a todos soy Alvaro, <br />
                Desarrollador Web
              </h1>
              <div className="flex flex-col">
                <p className="text-sm text-center p-6 sm:text-lg  lg:text-start lg:p-0">
                  Soy desarrollador web con más de dos años de experiencia en la
                  creación y optimización de aplicaciones web robustas y
                  escalables. Mi principal objetivo es convertir ideas complejas
                  en interfaces de usuario intuitivas y funcionales,
                  garantizando una experiencia de usuario excepcional.
                </p>

                <Link href="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfR7r04xA9DjoELHJYw5m8vhgPMzXredO962AcW">
                  {/* Tu botón se convierte en el contenido del link */}
                  <Button className="rounded-none bg-red-400 w-full lg:w-xs">
                    Descargar resumen
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white/80 p-10 gap-5 md:flex-col lg:w-full lg:items-center">
            <div>{/* <h2>Recent posts</h2> */}</div>
            <div className="flex flex-col gap-5 lg:flex-row ">
              <PostCard
                desing="desing, Pattern"
                date="22-05-25"
                postName="Opinion sobre DeepWiki"
                postContent="Estaba a punto de tirar la toalla cuando, buscando soluciones, me topé con algo llamado DeepWiki. Al principio, fui escéptico. ¿Una herramienta de inteligencia artificial que promete generar documentación automáticamente? Sonaba demasiado bueno para ser verdad. Pero la desesperación es una gran motivadora, así que decidí darle una oportunidad."
              />
              <PostCard
                desing="desing, Pattern"
                date="22-05-25"
                postName="Next.js 15: ¿Cómo actualizar tu proyecto?"
                postContent="Si ya estás usando Next.js y te preguntas cómo subirte al tren de la última versión, ¡este post es para ti! La llegada de Next.js 15 trae consigo mejoras significativas, especialmente en la estabilidad y funcionalidades avanzadas del App Router "
              />
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
