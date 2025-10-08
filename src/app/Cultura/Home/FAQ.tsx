"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "¿Es necesario tener experiencia previa en senderismo?",
    answer:
      "No es indispensable. Existen rutas adaptadas a diferentes niveles, desde principiantes hasta avanzados. Siempre recibirás orientación y acompañamiento.",
  },
  {
    question: "¿Qué equipo debo llevar al Nevado del Cocuy?",
    answer:
      "Es recomendable llevar ropa térmica, botas de montaña, protector solar, hidratación y una mochila cómoda. El guía te indicará la lista completa antes del viaje.",
  },
  {
    question: "¿Cuál es la mejor época para visitar el Nevado?",
    answer:
      "La temporada seca, entre diciembre y marzo, suele ser la más adecuada para disfrutar de los paisajes y rutas con menos lluvias.",
  },
  {
    question: "¿Se requiere algún permiso especial para ingresar?",
    answer:
      "Sí, el ingreso al Parque Nacional Natural El Cocuy requiere un permiso oficial. Como guía autorizado, me encargo de gestionar estos trámites para los viajeros.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[var(--cultura-white)] py-24 px-6 md:px-12 lg:px-24">
      {/* Encabezado */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <div className="inline-flex items-center text-[var(--cultura-green-primary)] font-medium text-sm mb-4 py-1.5 px-4 bg-[var(--cultura-green-light)]/20 rounded-full border border-[var(--cultura-green-light)]/30">
          <HelpCircle size={16} className="mr-2" />
          <span>Información Práctica</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--cultura-text-primary)] mb-4">
          <span className="text-[var(--cultura-sand-accent)]">Preguntas</span>
          <span className="text-[var(--cultura-green-primary)]">
            {" "}
            Frecuentes
          </span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-[var(--cultura-text-secondary)] leading-relaxed">
          Resuelvo tus dudas más comunes para que te prepares para tu aventura
          en el{" "}
          <span className="font-semibold text-[var(--cultura-green-primary)]">
            Nevado del Cocuy
          </span>
          .
        </p>
      </motion.div>

      {/* Acordeón */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
            className="border border-[var(--cultura-gray)] rounded-xl bg-[var(--cultura-white)] shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-5 text-left"
            >
              <span className="font-medium text-[var(--cultura-green-primary)]">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[var(--cultura-sand-accent)] transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-5 pb-5 text-[var(--cultura-text-secondary)]"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
