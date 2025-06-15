"use client";

import { ContentLayout } from "../components/layout/ContentLayout";

export default function Home() {
  return (
    <>
      <ContentLayout title="Home">
        <div className="flex flex-col items-center min-h-screen p-4 text-black">
          <div className="p-15">
            <h1 className="font-bold text-md text-center">
              Hey There!!! I'm <br />
              Alvaro
            </h1>
            <p className="font-medium text-sm pt-5 font-">
              A passioante developer. Explore my projects and discover how my
              code brings ideas to life.
            </p>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
