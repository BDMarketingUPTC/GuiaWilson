"use client";

import { useEffect, useRef } from "react";

export default function SnowEffect() {
  // Usamos un ref para rastrear el ID del intervalo
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const createSnowflakes = () => {
      // 1. Busca todos los elementos con la clase 'snow-effect'
      const snowEffectElements = document.querySelectorAll(".snow-effect");

      // 2. Si no hay elementos con la clase, no hagas nada
      if (snowEffectElements.length === 0) {
        return;
      }

      // 3. Itera sobre cada elemento para agregarle el efecto de nieve
      snowEffectElements.forEach((targetElement) => {
        let snowContainer = targetElement.querySelector(
          ".snowflakes-container"
        );

        // Si el contenedor no existe, créalo dentro del elemento objetivo
        if (!snowContainer) {
          snowContainer = document.createElement("div");
          snowContainer.classList.add("snowflakes-container");
          // Asegúrate de que el contenedor se posicione correctamente
          (snowContainer as HTMLElement).style.position = "absolute";
          (snowContainer as HTMLElement).style.top = "0";
          (snowContainer as HTMLElement).style.left = "0";
          (snowContainer as HTMLElement).style.width = "100%";
          (snowContainer as HTMLElement).style.height = "100%";
          (snowContainer as HTMLElement).style.overflow = "hidden";
          (snowContainer as HTMLElement).style.pointerEvents = "none";
          (snowContainer as HTMLElement).style.zIndex = "0"; // Asegura que esté detrás
          targetElement.appendChild(snowContainer);
          // Para que el efecto sea visible, el padre debe ser posicionado
          (targetElement as HTMLElement).style.position = "relative";
          (targetElement as HTMLElement).style.zIndex = "1";
        }

        // 4. Crea los copos de nieve dentro del contenedor
        for (let i = 0; i < 20; i++) {
          const snowflake = document.createElement("div");
          snowflake.classList.add("snowflake");

          const size = Math.random() * 4 + 2;
          const left = Math.random() * 100;
          const duration = Math.random() * 5 + 5;
          const delay = Math.random() * 5;

          snowflake.style.width = `${size}px`;
          snowflake.style.height = `${size}px`;
          snowflake.style.left = `${left}%`; // Usar porcentaje para la posición horizontal
          snowflake.style.opacity = (Math.random() * 0.6 + 0.4).toString();
          snowflake.style.animationDuration = `${duration}s`;
          snowflake.style.animationDelay = `${delay}s`;

          snowContainer.appendChild(snowflake);

          // 5. Opcional: Elimina los copos cuando terminan para no sobrecargar el DOM
          setTimeout(() => snowflake.remove(), duration * 1000 + delay * 1000);
        }
      });
    };

    // Llama a la función al inicio y establece un intervalo
    createSnowflakes();
    intervalRef.current = setInterval(createSnowflakes, 5000);

    // Limpieza: elimina los copos y el intervalo
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      const snowContainers = document.querySelectorAll(".snowflakes-container");
      snowContainers.forEach((container) => container.remove());
    };
  }, []); // Array de dependencias vacío para que se ejecute solo una vez

  return null;
}
