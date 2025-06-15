"use client";

import { Loader2 } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import { ContentLayout } from "../components/layout/ContentLayout";

export default function Home() {
  return (
    <>
      <ContentLayout title="Home">
        <div className="flex flex-col justify-center items-center min-h-screen p-4 text-center">
          Hello World!!!!
        </div>
      </ContentLayout>
    </>
  );
}
