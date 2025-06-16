"use client";

import { PostCard } from "@/components/cards/PostCard";
import { ContentLayout } from "@/components/layout/ContentLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <>
      <ContentLayout title="About">
        <div className="flex flex-col items-center min-h-screen p-0 text-black gap-10">
          <div className="flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-center lg:items-center lg:px-40">
            <div className="py-15 lg:flex-1 lg:flex lg:justify-center ">
              <Image
                className="rounded-full"
                src="/test.png"
                alt="picture-about-alvaro"
                width={200}
                height={200}
              />
            </div>

            <div className="flex flex-col justify-center items-center lg:flex-1 lg:justify-start lg:items-start">
              <h1 className="text-xl text-center sm:text-2xl sm:font-medium lg:text-4xl lg:font-bold lg:pb-5">
                Hi, I'm Alvaro, <br />
                Software Developer
              </h1>
              <div className="flex flex-col">
                <p className="text-sm text-center p-6 sm:text-lg  lg:text-start lg:p-0">
                  I'm a web developer with over two years of experience building
                  and optimizing robust and scalable web applications. My main
                  focus is translating complex ideas into intuitive and
                  functional user interfaces, ensuring an exceptional user
                  experience.
                </p>
                <Button className="rounded-none bg-red-400 w-full lg:w-xs">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white/80 p-10 gap-5 md:flex-col lg:w-full lg:items-center">
            <div>
              <h2>Recent posts</h2>
            </div>
            <div className="flex flex-col gap-5 lg:flex-row ">
              <PostCard
                desing="desing, Pattern"
                date="22-05-25"
                postName="Making a desing"
                postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              />
              <PostCard
                desing="desing, Pattern"
                date="22-05-25"
                postName="Making a desing"
                postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              />
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
