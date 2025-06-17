"use client";
import Image from "next/image";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToolIcon } from "../misc/ToolIcon";

interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
}

export function ProjectCard({
  projectName,
  projectDescription,
}: ProjectCardProps) {
  return (
    <>
      <Card className="bg-white/60">
        <CardHeader>
          <CardTitle>{projectName}</CardTitle>
          <CardDescription></CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardContent>
          <Image
            src={
              "https://0q13aoua0x.ufs.sh/f/iFwLeXYUurfROgT0k8pbsT180JVWKvo3tjmFunZ2QgPRiMaE"
            }
            width={400}
            height={400}
            alt="Picture of the author"
            className="rounded-md"
          />
        </CardContent>
        <p className="pl-6">{projectDescription}</p>
        <CardFooter className=" flex flex-col justify-start items-start gap-2">
          <p className="font-medium">Técnologias Utilizadas</p>
          <div className="flex flex-row gap-4">
            <ToolIcon toolName="C" toolIMG="logo-c.PNG" />
            <ToolIcon toolName="Allegro" toolIMG="allegro.PNG" />
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
