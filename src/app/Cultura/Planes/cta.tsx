import React from "react";

interface ContactCTAProps {
  /** La URL completa de WhatsApp (wa.me/...) */
  whatsappUrl: string;
}

/**
 * Componente de Llamada a la Acción (CTA) persuasivo para El Cocuy.
 * Utiliza variables CSS para el estilo y un enlace directo a WhatsApp.
 */
const ContactCTA: React.FC<ContactCTAProps> = ({ whatsappUrl }) => {
  return (
    // Fondo principal con borde de acento
    <section
      className="py-16 sm:py-24 shadow-2xl rounded-xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10 
                   bg-[var(--cultura-green-primary)] 
                   border-4 border-[var(--cultura-sand-accent)]"
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* Título: Crea el deseo y enfoca la acción */}
        <h2
          className="text-4xl font-extrabold tracking-tight sm:text-5xl 
                     text-[var(--cultura-white)]"
        >
          ¿Listo para conquistar El Cocuy?
        </h2>

        {/* Subtexto: Aclara el beneficio de contactar */}
        <p
          className="mt-4 text-xl font-medium 
                     text-[var(--cultura-green-light)]"
        >
          Asegura tu cupo en la próxima expedición. Te asesoramos con la mejor
          ruta y permisos.
        </p>

        {/* Enlace CTA Principal: Ahora es un <a> para WhatsApp */}
        <div className="mt-10 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank" // Abre en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
            // Estilo base: Fondo de arena con texto primario oscuro
            className="inline-flex items-center justify-center px-8 py-4 border-2 text-lg font-bold rounded-full shadow-xl 
                       bg-[var(--cultura-sand-accent)] 
                       text-[var(--cultura-text-primary)]
                       border-[var(--cultura-sand-accent)]
                       
                       /* Hover: Cambio de color a terracota (más cálido) con texto blanco */
                       hover:bg-[var(--cultura-terracotta)] 
                       hover:border-[var(--cultura-terracotta)] 
                       hover:text-[var(--cultura-white)] 
                       
                       transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--cultura-sand-accent)] focus:ring-opacity-70"
          >
            Contactar Ahora por WhatsApp
            {/* Ícono SVG de flecha */}
            <svg
              className="ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Texto de Urgencia/Confianza */}
        <p
          className="mt-6 text-sm 
                     text-[var(--cultura-white)]/90"
        >
          Disponibilidad limitada en temporada alta. ¡No esperes más!
        </p>
      </div>
    </section>
  );
};

export default ContactCTA;
