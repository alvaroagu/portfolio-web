"use client";

import Image from "next/image";
import { ContentLayout } from "@/components/layout/ContentLayout";
import { Button } from "@/components/ui/button";
import { ToolIcon } from "@/components/misc/ToolIcon";

export default function Home() {
  return (
    <>
      <ContentLayout title="Skills">
        <div className="flex flex-col items-center min-h-screen px-5 pt-15 text-black gap-10 ">
          <div className="flex flex-col justify-center items-center border-1 border-gray-500 rounded-sm p-10 gap-10">
            <div className="flex flex-col pt-10 items-start gap-10">
              <h1 className="text-3xl font-bold">
                Software <br /> Developer
              </h1>
              <p>
                Over the course of my programming journey, I've gained hands-on
                experience with a variety of technologies. My core programming
                skills include...
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

          <div className="flex flex-col justify-center  w-full gap-5">
            <h1 className="text-start text-lg font-medium">
              Programming Languages
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-5  bg-white/80">
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
            </div>

            <h1 className="text-start text-lg font-medium">
              Programming Languages
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-5  bg-white/80">
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
            </div>
          </div>

          <div className="flex flex-col justify-center  w-full gap-5">
            <h1 className="text-start text-lg font-medium">Library</h1>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-5  bg-white/80">
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
            </div>

            <h1 className="text-start text-lg font-medium">Data Bases</h1>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-5  bg-white/80">
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
              <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
            </div>
          </div>

          <div className="flex flex-col justify-center  w-full gap-5">
            <h1 className="text-start text-lg font-medium">Library</h1>
            <div className=""></div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
