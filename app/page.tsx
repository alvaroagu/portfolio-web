"use client";

import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl">Hellow World, Welcome to my webside</h1>
      <p className="text-2xl">
        This website is being built, please be patient.
      </p>
      <Loader2 className="size-24 animate-spin" />
      <p className="text-2xl">by Alvaro Aguinagalde</p>
    </div>
  );
}
