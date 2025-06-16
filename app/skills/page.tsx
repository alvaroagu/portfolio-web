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
                Software <br /> Developer
              </h1>
              <p>
                Over the course of my programming journey, I&apos;ve gained
                hands-on experience with a variety of technologies. My core
                programming skills include...
              </p>
              <div className="flex flex-col justify-center items-center">
                <Button className="rounded-none w-30 py-5">Contact</Button>
              </div>
            </div>

            <div>
              <Image
                height={300}
                width={300}
                src={"/test.png"}
                alt="alvaro-picture"
              />
            </div>
          </div>

          {/* Contenedor de habilidades - mismo ancho que el superior */}
          <div className="w-full max-w-4xl">
            <div className="flex flex-col justify-center w-full gap-5 lg:flex-row">
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-start text-lg font-medium w-full">
                  Programming Languages
                </h1>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full p-5 bg-white/80">
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-start text-lg font-medium w-full">
                  Frameworks
                </h1>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full p-5 bg-white/80">
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                  <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center w-full gap-5">
              <h1 className="text-start text-lg font-medium">Library</h1>
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full p-5 bg-white/80">
                <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              </div>

              <h1 className="text-start text-lg font-medium">Data Bases</h1>
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full p-5 bg-white/80">
                <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
                <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              </div>
            </div>

            <div className="flex flex-col justify-center w-full">
              <h1 className="text-start text-lg font-medium">Soft Skills</h1>
              <div className="flex flex-col bg-white">
                <InfCard
                  title="this is the title"
                  InfContent="This is the content in my inf card, ikd what to say here this is just to test the component ."
                />
                <InfCard
                  title="this is the title"
                  InfContent="This is the content in my inf card, ikd what to say here this is just to test the component ."
                />
                <InfCard
                  title="this is the title"
                  InfContent="This is the content in my inf card, ikd what to say here this is just to test the component ."
                />
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
