"use client";

import Image from "next/image";
import { ContentLayout } from "@/components/layout/ContentLayout";
import { Button } from "@/components/ui/button";
import { ToolIcon } from "@/components/misc/ToolIcon";
import { InfCard } from "@/components/cards/InfCard";

export default function Home() {
  return (
    <>
      <ContentLayout title="Skills">
        <div className="flex flex-col items-center min-h-screen px-5 pt-15 text-black gap-10">
          {/* Contenedor superior - ahora con max-w para controlar el ancho */}
          <div className="flex flex-col justify-center items-center border-1 border-gray-500 rounded-sm p-10 gap-10 lg:flex-row w-full max-w-4xl">
            <div className="flex flex-col pt-10 items-start gap-10">
              <h1 className="text-3xl font-bold">
                Desarrollador <br /> Software
              </h1>
              <p>
                A lo largo de mi trayectoria como programador, he adquirido
                experiencia práctica con diversas tecnologías. Mis principales
                habilidades de programación incluyen.
              </p>
              <div className="flex flex-col justify-center items-center">
                <Button className="rounded-none w-30 py-5">Contact</Button>
              </div>
            </div>

            <div>
              <Image
                height={300}
                width={300}
                src={
                  "https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfR7c5a5XU9DjoELHJYw5m8vhgPMzXredO962Ac"
                }
                alt="alvaro-picture"
                className="rounded-md"
              />
            </div>
          </div>

          {/* Contenedor de habilidades - mismo ancho que el superior */}
          <div className="w-full max-w-4xl">
            <div className="flex flex-col justify-center w-full gap-5 lg:flex-row">
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-start text-lg font-medium w-full">
                  Lenguages de Programacion
                </h1>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full p-5 bg-white/80">
                  <ToolIcon
                    toolName="JavaScript"
                    toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRkrjFe72CTOQdznjoPu0vU1pYixJSl87ZHMGI"
                  />
                  <ToolIcon
                    toolName="Typescript"
                    toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRj1T2cF0QtdvoFZRhBs5LN3rlIkxU62Ayb1Cf"
                  />
                  <ToolIcon
                    toolName="C++"
                    toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRCuCLe8fWVpa7ut2Xl6EGQZdT9vqw0rKIcARi"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-start text-lg font-medium w-full">
                  Frameworks
                </h1>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full p-5 bg-white/80">
                  <ToolIcon
                    toolName="Laravel"
                    toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRmfOkhpv3YL7qNnRP5rbfSK9ADseB0kgldTph"
                  />
                  <ToolIcon
                    toolName="Next.js"
                    toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRtKMP8XizMN7XjFR9vQgrIYUnkVL120hf8iad"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center w-full gap-5">
              <h1 className="text-start text-lg font-medium">Librerias</h1>
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full p-5 bg-white/80">
                <ToolIcon
                  toolName="React"
                  toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRLqAfDiCp9wHAqmogNufDMP2CvyVGUTsZ3tjQ"
                />
                <ToolIcon
                  toolName="Jquery"
                  toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRPeHi0BVyqZgiRCj06oFYsvWpN1QfKxdEh8Tt"
                />
                <ToolIcon
                  toolName="Allegro"
                  toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRLKiaB2rCp9wHAqmogNufDMP2CvyVGUTsZ3tj"
                />
              </div>

              <h1 className="text-start text-lg font-medium">Bases de datos</h1>
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full p-5 bg-white/80">
                <ToolIcon
                  toolName="MongoDB"
                  toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfR4qUTmDPFGVBqSCYrJQKEyNafIA8ZbmziRHPo"
                />
                <ToolIcon
                  toolName="PSQL"
                  toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRoxpy9hM4dXUlgeEOjicArVMBJuR9FIkstfpx"
                />
                <ToolIcon
                  toolName="MySQL"
                  toolIMG="https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfRuEfpuA6MlO7QevxX3WRh15sGE0byzAVTZCad"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-full">
              <h1 className="text-start text-lg font-medium">
                Habilidades blandas
              </h1>
              <div className="flex flex-col bg-white">
                <InfCard
                  title="Comunicación Efectiva"
                  InfContent="La Comunicación Efectiva va más allá de solo hablar o escribir; se trata de transmitir y recibir información de manera clara, concisa y comprensible"
                />
                <InfCard
                  title="Resolución de Problemas"
                  InfContent="La Resolución de Problemas es la capacidad de identificar desafíos, analizarlos, y desarrollar soluciones lógicas y creativas. Como programadores, esto es el día a día: desde depurar un bug en el código hasta encontrar la arquitectura más eficiente para una nueva funcionalidad. "
                />
                <InfCard
                  title="Adaptabilidad"
                  InfContent="La Adaptabilidad es la habilidad de ajustarse y prosperar en entornos cambiantes. La industria tecnológica evoluciona a un ritmo vertiginoso, con nuevas herramientas, lenguajes y metodologías apareciendo constantemente. "
                />
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
