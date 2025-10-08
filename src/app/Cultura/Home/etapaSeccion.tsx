"use client";

import Link from "next/link";
import React from "react";

// Puedes importar el WHATSAPP_LINK desde el archivo anterior si lo tienes
// o redefinirlo aquí para que el componente sea independiente.
const WHATSAPP_NUMBER = "573114434181";
const ENCODED_MESSAGE = encodeURIComponent(
  "¡Hola! Vengo desde el Home. Me interesa el viaje 'Senderos del Espíritu' y quiero ver la disponibilidad."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${ENCODED_MESSAGE}`;

interface CallToActionEtapasProps {
  // Puedes pasar un título y subtítulo personalizado si lo necesitas
  title?: string;
  subtitle?: string;
}

const CallToActionEtapas: React.FC<CallToActionEtapasProps> = ({
  title = "¿Listo para Iniciar la Transformación?",
  subtitle = "El camino te espera en la Sierra Nevada. Descubre el itinerario y la profunda intención detrás de cada etapa de tu peregrinación.",
}) => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col items-center text-center">
        {/* ---------------------------------- */}
        {/* Bloque Persuasivo Principal */}
        {/* ---------------------------------- */}
        <div className="max-w-4xl bg-gradient-to-br from-[var(--cultura-green-primary)] to-[var(--cultura-green-dark)] p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl transform hover:scale-[1.01] transition duration-500 ease-in-out">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--cultura-sand-accent)] mb-3">
            TU PRÓXIMO DESTINO ES INTERIOR
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--cultura-white)] leading-tight mb-4">
            {title}
          </h2>
          <p className="text-xl text-[var(--cultura-white)]/90 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            {/* CTA 1: Ver Etapas (Hash Link) */}
            {/* Usamos el componente Link de Next.js con el hash para scroll. 
                Asegúrate de que la etiqueta en tu página tenga id="etapas". */}
            <Link href="/Cultura/Planes" passHref scroll={true}>
              <button
                // Diseño enfocado en la naturaleza/tierra
                className="inline-flex items-center justify-center rounded-full bg-[var(--cultura-sand-accent)] px-10 py-4 text-lg font-bold text-[var(--cultura-text-primary)] shadow-lg hover:shadow-xl transition-all hover:bg-[var(--cultura-sand-accent)]/80 focus:outline-none focus:ring-4 focus:ring-[var(--cultura-sand-accent)]/50"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
                Explorar 7 Etapas
              </button>
            </Link>

            {/* CTA 2: WhatsApp (Reserva Directa) */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-[var(--cultura-white)] px-10 py-4 text-lg font-bold text-[var(--cultura-white)] shadow-lg hover:bg-[var(--cultura-white)]/10 transition-all focus:outline-none focus:ring-4 focus:ring-[var(--cultura-white)]/50"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 2.5a9.531 9.531 0 100 19.062 9.531 9.531 0 000-19.062zM17.062 13.918c-.188-.125-.938-.563-1.082-.625-.141-.078-.244-.109-.359.109-.125.219-.484.703-.594.844-.109.141-.219.156-.406.047-.781-.359-2.031-.813-2.859-2.031-.266-.391-.031-.609.188-.828.125-.125.244-.219.359-.359.141-.188.188-.313.281-.516.094-.188.047-.359-.016-.516-.062-.156-.359-.906-.499-1.25-.141-.359-.281-.313-.406-.313h-.359c-.109 0-.281.047-.438.219-.156.172-.594.563-.594 1.375s.609 1.594.699 1.719.094.156.188.313a7.358 7.358 0 002.594 3.141c.641.406 1.156.578 1.563.734.547.203.875.172 1.203.109.359-.063 1.082-.445 1.234-.875.156-.422.156-.781.109-.875-.047-.094-.172-.141-.359-.25z"></path>
              </svg>
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionEtapas;
