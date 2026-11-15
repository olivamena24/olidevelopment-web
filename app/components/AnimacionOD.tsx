
"use client";

import { useEffect, useState } from "react";

const escenas = [
  { src: "/animacion/logo.gif", nombre: "Oli Development" },
  { src: "/animacion/celular.gif", nombre: "Aplicaciones móviles" },
  { src: "/animacion/notebook.gif", nombre: "Desarrollo web" },
  { src: "/animacion/dashboard.gif", nombre: "Sistemas empresariales" },
];

export default function AnimacionOD() {
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setActivo((anterior) => (anterior + 1) % escenas.length);
    }, 3500);

    return () => window.clearInterval(intervalo);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-3xl bg-[#080F1F]">
      {escenas.map((escena, indice) => (
        <div
          key={escena.src}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 motion-reduce:transition-none ${
            activo === indice
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-90 opacity-0"
          }`}
          aria-hidden={activo !== indice}
        >
          <img
            src={escena.src}
            alt={escena.nombre}
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
