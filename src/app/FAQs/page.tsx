"use client";

import { JSX, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

// Definición de tipos para las preguntas
interface FAQItem {
  id: number;
  question: string;
  answer: JSX.Element;
  category: string;
}

// Datos de las Preguntas Frecuentes
const faqs: FAQItem[] = [
  {
    id: 1,
    question: "¿Qué debo llevar obligatoriamente para la caminata?",
    category: "Preparación",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          **Documentos:** Cédula de identidad (o pasaporte) y los permisos de
          ingreso al Parque.
        </li>
        <li>
          **Vestuario:** Tres capas (térmica, fleece y chaqueta impermeable).
        </li>
        <li>**Calzado:** Botas de montaña impermeables con buen agarre.</li>
        <li>
          **Otros:** Guantes, gorro, protector solar y labial con protección UV,
          gafas de sol y agua (mínimo 2 litros).
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    question:
      "¿Es necesario contar con experiencia previa en senderismo de altura?",
    category: "Requisitos",
    answer: (
      <p>
        No es estrictamente necesario, pero sí es **obligatorio tener una buena
        condición física** y gozar de buena salud. La altitud puede afectar a
        cualquier persona. Te recomiendo aclimatarte previamente al menos 2 días
        en El Cocuy o Güicán.
      </p>
    ),
  },
  {
    id: 3,
    question: "¿Cómo se maneja el mal de altura (soroche)?",
    category: "Salud y Seguridad",
    answer: (
      <p>
        La prevención es clave. Ofrecemos mate de coca y te aconsejamos caminar
        lento y constante. Si experimentas síntomas severos (dolor de cabeza
        intenso, náuseas), debemos descender. Siempre llevamos un botiquín de
        primeros auxilios y oxígeno de emergencia.
      </p>
    ),
  },
  {
    id: 4,
    question: "¿Cuál es la mejor época del año para visitar El Cocuy?",
    category: "General",
    answer: (
      <p>
        La **temporada seca** (con más probabilidad de cielo despejado) es
        generalmente de **diciembre a marzo** y de **julio a agosto**. Sin
        embargo, el clima de montaña es impredecible, así que la preparación es
        siempre fundamental.
      </p>
    ),
  },
  {
    id: 5,
    question: "¿Cuánto cuesta la caminata guiada y qué incluye?",
    category: "Reservas y Costos",
    answer: (
      <p>
        El costo varía según la ruta (Ritacuba Blanco, Laguna Grande de la
        Sierra, etc.) y la duración. Generalmente incluye: **permisos del
        Parque, seguro de rescate, servicio de guía certificado, transporte
        local** desde el pueblo hasta el inicio del sendero y, en algunos casos,
        alimentación. Contáctame para un presupuesto personalizado.
      </p>
    ),
  },
];

// Componente individual del ítem FAQ (para el acordeón)
const FAQItemComponent = ({
  faq,
  isOpen,
  setOpenId,
}: {
  faq: FAQItem;
  isOpen: boolean;
  setOpenId: (id: number | null) => void;
}) => {
  const toggleOpen = () => {
    setOpenId(isOpen ? null : faq.id);
  };

  return (
    <div className="border-b border-[var(--neutral-gray)] last:border-b-0">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg hover:text-[var(--teal-accent)] transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="text-[var(--neutral-text-primary)]">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--teal-accent)]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-1 text-[var(--neutral-text-secondary)] leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Componente principal de la página
export default function FAQsPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  // Obtiene categorías únicas para los botones de filtro
  const categories = ["Todos", ...new Set(faqs.map((faq) => faq.category))];

  // Filtra las FAQs según la categoría seleccionada
  const filteredFaqs = faqs.filter((faq) =>
    selectedCategory === "Todos" ? true : faq.category === selectedCategory
  );

  return (
    <>
      <Head>
        <title>FAQs | Nevado del Cocuy Senderismo</title>
        <meta
          name="description"
          content="Preguntas Frecuentes sobre tours y caminatas en el Nevado del Cocuy"
        />
      </Head>

      <div className="min-h-screen bg-[var(--neutral-white2)]">
        {/* Sección del encabezado (Hero pequeño) */}
        <div className="bg-[var(--blue-primary)] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <HelpCircle className="w-12 h-12 text-[var(--teal-accent)] mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--neutral-white)] mb-4">
                Preguntas Frecuentes
              </h1>
              <p className="text-lg text-[var(--aqua-lake)]">
                Todo lo que necesitas saber antes de iniciar tu aventura en la
                Sierra Nevada del Cocuy.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contenido principal de las FAQs */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Filtros de Categoría (UI/UX: Navegación sencilla) */}
            <div className="mb-8 flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenId(null); // Cierra cualquier FAQ al cambiar de categoría
                  }}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${
                      selectedCategory === category
                        ? "bg-[var(--teal-accent)] text-[var(--neutral-white)] shadow-md"
                        : "bg-[var(--neutral-gray)] text-[var(--neutral-text-secondary)] hover:bg-[var(--aqua-lake)] hover:text-[var(--neutral-white)]"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Acordeón de FAQs */}
            <motion.div
              layout
              className="bg-[var(--neutral-white)] p-6 md:p-8 rounded-xl shadow-lg border border-[var(--neutral-gray)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <FAQItemComponent
                    key={faq.id}
                    faq={faq}
                    isOpen={openId === faq.id}
                    setOpenId={setOpenId}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-[var(--neutral-text-secondary)]">
                  No hay preguntas en esta categoría.
                </div>
              )}
            </motion.div>

            {/* Llamada a la acción / Contacto */}
            <div className="mt-12 text-center p-8 bg-[var(--blue-light)] rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-[var(--neutral-white)] mb-3">
                ¿Aún tienes dudas?
              </h2>
              <p className="text-[var(--neutral-white2)] mb-6 max-w-lg mx-auto">
                Si tu pregunta no ha sido resuelta, ¡escríbeme directamente!
                Estoy aquí para ayudarte a planificar tu travesía.
              </p>
              <Link href="/Contacto" passHref>
                <motion.button
                  className="bg-[var(--teal-accent)] text-[var(--neutral-white)] font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-[var(--blue-dark)] hover:scale-[1.02]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contacta a tu Guía
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
