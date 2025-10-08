"use client";

import { motion, Variants } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--blue-primary)] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Mail className="absolute top-1/4 left-1/4 w-24 h-24 text-[var(--aqua-lake)]" />
        <ArrowRight className="absolute bottom-1/4 right-1/4 w-20 h-20 text-[var(--aqua-lake)]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto text-center max-w-2xl relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center text-[var(--aqua-lake)] font-medium text-sm mb-4 py-1.5 px-4 bg-[var(--blue-light)]/20 rounded-full border border-[var(--blue-light)]/30"
        >
          <Mail size={16} className="mr-2" />
          <span>No te lo pierdas</span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-[var(--neutral-white)] mb-4 leading-tight"
        >
          Únete a la Aventura
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[var(--neutral-text-secondary)] text-lg mb-8"
        >
          Recibe en tu correo actualizaciones sobre nuevas rutas, consejos de
          senderismo y promociones exclusivas para explorar el{" "}
          <span className="font-semibold text-[var(--neutral-white)]">
            Nevado del Cocuy
          </span>
          .
        </motion.p>

        <motion.form
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 w-full sm:w-auto px-6 py-4 rounded-full border border-[var(--neutral-gray)] bg-[var(--blue-light)] text-[var(--neutral-white)] placeholder-[var(--neutral-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--aqua-lake)] shadow-inner transition-all duration-300"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-[var(--teal-accent)] text-[var(--neutral-white)] font-semibold rounded-full shadow-lg hover:bg-[var(--teal-accent)]/80 transition-all duration-300 hover:-translate-y-0.5"
          >
            Suscribirme
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
