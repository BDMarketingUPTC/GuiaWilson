// components/HeroEquipo.tsx
import Link from "next/link";
import { Backpack, ArrowRight } from "lucide-react";

const HeroEquipo: React.FC = () => {
  return (
    <section className="py-16 bg-[#ffffff] md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor del contenido y el CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#0a2342] text-[#ffffff] rounded-2xl p-8 md:p-12 shadow-xl border-b-4 border-[#378696]">
          {/* Lado izquierdo: Título y descripción persuasiva */}
          <div className="md:w-3/5 text-center md:text-left mb-6 md:mb-0">
            <Backpack className="w-10 h-10 text-[#69a7b9] mx-auto md:mx-0 mb-3" />

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ¿Listo para el Nevado?
            </h2>

            <p className="mt-2 text-xl font-light text-[#e4e7eb] max-w-lg">
              La seguridad en el Cocuy comienza con la preparación. Revisa
              nuestra guía completa de <b>Equipo Esencial</b> antes de empacar
              tu mochila.
            </p>
          </div>

          {/* Lado derecho: Botón CTA (Call to Action) */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <Link
              href="/Equipo" // Enlace a la ruta de la página de equipo
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg text-[#0a2342] bg-[#378696] hover:bg-[#69a7b9] transition duration-300 transform hover:scale-105 group"
            >
              Ver Guía de Equipo
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEquipo;
