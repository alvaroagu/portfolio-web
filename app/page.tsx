"use client";

import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 text-center">
      {" "}
      {/* Agregamos padding y centrado de texto */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {" "}
        {/* Ajuste de tamaño de texto y negrita */}
        Hello World, Welcome to my website
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8">
        {" "}
        {/* Ajuste de tamaño de texto y margen inferior */}
        This website is being built, please be patient.
      </p>
      <Loader2 className="size-16 sm:size-20 md:size-24 animate-spin text-blue-500 mb-8" />{" "}
      {/* Ajuste de tamaño de loader y color */}
      <p className="text-md sm:text-lg md:text-xl text-gray-600">
        {" "}
        {/* Ajuste de tamaño de texto y color */}
        by Alvaro Aguinagalde
      </p>
    </div>
  );
}
