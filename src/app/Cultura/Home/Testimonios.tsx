"use client";
import { Quote, Star, Mountain, Compass } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Laura G.",
      text: "La experiencia fue inolvidable. El guía nos transmitió seguridad y confianza en todo momento.",
      origin: "Bogotá, Colombia",
    },
    {
      name: "Michael S.",
      text: "El Nevado del Cocuy es impresionante. Gracias al guía pudimos conocer lugares únicos sin preocupaciones.",
      origin: "Munich, Alemania",
    },
    {
      name: "Carolina P.",
      text: "Un servicio excelente, muy profesional y con gran conocimiento del senderismo en alta montaña.",
      origin: "Medellín, Colombia",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[var(--cultura-white)]">
      {/* Elementos decorativos de fondo, inspirados en AboutUs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-[var(--cultura-sand-accent)] animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-[var(--cultura-terracotta)] animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[var(--cultura-green-light)]"></div>
        <Mountain className="absolute bottom-20 right-10 w-24 h-24 text-[var(--cultura-green-light)] opacity-50" />
        <Compass className="absolute top-20 left-10 w-24 h-24 text-[var(--cultura-terracotta)] opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--cultura-text-primary)] mb-4">
            <span className="text-[var(--cultura-green-primary)]">
              Voces de la{" "}
            </span>
            <span className="text-[var(--cultura-sand-accent)]">Aventura</span>
          </h2>
          <p className="mt-4 text-[var(--cultura-text-secondary)] text-lg leading-relaxed">
            Descubre las experiencias inolvidables de quienes ya han explorado
            el{" "}
            <span className="font-semibold text-[var(--cultura-green-primary)]">
              Nevado del Cocuy
            </span>{" "}
            conmigo.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--cultura-terracotta)] to-[var(--cultura-sand-accent)] rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Reseñas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[var(--cultura-gray)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--cultura-gray)] flex flex-col justify-between hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-4">
                <Quote className="text-[var(--cultura-terracotta)] w-9 h-9 mr-4 p-1.5 bg-[var(--cultura-terracotta)]/20 rounded-full group-hover:bg-[var(--cultura-terracotta)]/40 transition-colors" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[var(--cultura-terracotta)] text-[var(--cultura-terracotta)] mr-0.5"
                    />
                  ))}
                </div>
              </div>

              <p className="text-[var(--cultura-text-primary)] italic leading-relaxed mb-6 flex-grow">
                “{t.text}”
              </p>
              <div className="border-t border-[var(--cultura-gray)] pt-4">
                <h3 className="text-[var(--cultura-green-primary)] font-semibold text-lg">
                  {t.name}
                </h3>
                <p className="text-sm text-[var(--cultura-text-secondary)] mt-1">
                  {t.origin}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
