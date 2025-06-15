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

interface ProjectCardProps {
  nameProject: string;
  projectDescription: string;
}

export function ProjectCard({
  nameProject,
  projectDescription,
}: ProjectCardProps) {
  return (
    <>
      <Card className="bg-white/50 ">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardContent>
          <Image
            src="/test.png"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </CardContent>
        <p className="pl-6">{projectDescription}</p>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}
