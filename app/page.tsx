"use client";

import { ExampleComponent } from "@/components/ExampleComponent";

export default function Home() {
  // Define los datos que quieres pasar al componente
  const userData = {
    username: "nombreUsuario",
    email: "correo@ejemplo.com",
  };

  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      {/* Invoca tu componente y pasa las props */}
      <ExampleComponent
        username={userData.username}
        email={userData.email}
      />
    </div>
  );
}
