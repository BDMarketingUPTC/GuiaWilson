"use client";
import { motion, Variants } from "framer-motion";
import {
  Mountain,
  Compass,
  Users,
  Shield,
  Award,
  MapPin,
  ArrowRight,
  Star,
  Calendar,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="SobreMi"
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[var(--neutral-100)]"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-[var(--yellow-light)] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[var(--green-light)] animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[var(--blue-light)]"></div>
        <Mountain className="absolute top-20 left-10 w-24 h-24 text-[var(--blue-light)]" />
        <Compass className="absolute bottom-20 right-10 w-24 h-24 text-[var(--green-light)]" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
          className="relative flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--blue-light)] w-full h-[400px] md:h-[500px] group">
            <Image
              src="/about-guide.jpg"
              alt="Guía de senderismo en el Nevado del Cocuy"
              width={1000}
              height={1000}
              className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-primary)]/10 via-transparent to-[var(--green-primary)]/20 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-6 right-6 bg-[var(--yellow-primary)] text-[var(--blue-dark)] py-2 px-4 rounded-full flex items-center shadow-lg"
            >
              <Award size={16} className="mr-2" />
              <span className="text-sm font-semibold">Guía Certificado</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 bg-[var(--blue-primary)] text-[var(--neutral-500)] py-2 px-4 rounded-lg flex items-center shadow-md"
            >
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[var(--yellow-primary)] text-[var(--yellow-primary)] mr-0.5"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9/5</span>
            </motion.div>
          </div>

          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--green-primary)] rounded-full opacity-20 -z-10"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--yellow-primary)] rounded-full opacity-20 -z-10"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center text-[var(--yellow-dark)] font-medium text-sm mb-2 py-1.5 px-4 bg-[var(--yellow-light)]/30 rounded-full border border-[var(--yellow-primary)]/30">
              <MapPin size={14} className="mr-2" />
              <span>Nevado del Cocuy, Colombia</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[var(--neutral-400)]">
              <span className="text-[var(--blue-primary)]">Conoce a tu </span>
              <span className="text-[var(--green-primary)]">guía experto</span>
            </h2>

            <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--green-primary)] to-[var(--yellow-primary)] rounded-full"></div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[var(--neutral-300)] text-lg leading-relaxed"
          >
            Soy un guía de turismo{" "}
            <span className="font-semibold text-[var(--blue-primary)]">
              certificado
            </span>{" "}
            y apasionado por las montañas. Con más de{" "}
            <span className="font-semibold text-[var(--green-primary)]">
              8 años de experiencia
            </span>{" "}
            en senderismo y expediciones, acompaño a viajeros de todo el mundo a
            descubrir la majestuosidad del{" "}
            <span className="font-semibold text-[var(--blue-primary)]">
              Nevado del Cocuy
            </span>
            , garantizando{" "}
            <span className="font-semibold text-[var(--green-primary)]">
              seguridad
            </span>
            ,
            <span className="font-semibold text-[var(--green-primary)]">
              {" "}
              conocimiento
            </span>{" "}
            y una
            <span className="font-semibold text-[var(--green-primary)]">
              {" "}
              conexión auténtica
            </span>{" "}
            con la naturaleza.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 py-4"
          >
            <div className="text-center p-4 bg-[var(--neutral-500)] rounded-xl border border-[var(--neutral-200)] shadow-sm">
              <div className="flex justify-center mb-2">
                <Calendar className="text-[var(--blue-primary)] w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-[var(--blue-primary)]">
                8+
              </div>
              <div className="text-sm text-[var(--neutral-300)]">
                Años de experiencia
              </div>
            </div>

            <div className="text-center p-4 bg-[var(--neutral-500)] rounded-xl border border-[var(--neutral-200)] shadow-sm">
              <div className="flex justify-center mb-2">
                <Users className="text-[var(--green-primary)] w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-[var(--green-primary)]">
                500+
              </div>
              <div className="text-sm text-[var(--neutral-300)]">
                Viajeros guiados
              </div>
            </div>

            <div className="text-center p-4 bg-[var(--neutral-500)] rounded-xl border border-[var(--neutral-200)] shadow-sm">
              <div className="flex justify-center mb-2">
                <Heart className="text-[var(--yellow-primary)] w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-[var(--yellow-primary)]">
                98%
              </div>
              <div className="text-sm text-[var(--neutral-300)]">
                Satisfacción
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2"
          >
            <div className="flex items-start p-5 bg-[var(--neutral-500)] rounded-xl border border-[var(--neutral-200)] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="p-3 bg-[var(--blue-primary)]/10 rounded-full mr-4 group-hover:bg-[var(--blue-primary)]/20 transition-colors">
                <Mountain className="text-[var(--blue-primary)] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--neutral-400)] mb-1">
                  Experiencia
                </h3>
                <p className="text-sm text-[var(--neutral-300)]">
                  8+ años guiando rutas en alta montaña
                </p>
              </div>
            </div>

            <div className="flex items-start p-5 bg-[var(--neutral-500)] rounded-xl border border-[var(--neutral-200)] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="p-3 bg-[var(--green-primary)]/10 rounded-full mr-4 group-hover:bg-[var(--green-primary)]/20 transition-colors">
                <Shield className="text-[var(--green-primary)] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--neutral-400)] mb-1">
                  Seguridad
                </h3>
                <p className="text-sm text-[var(--neutral-300)]">
                  Primeros auxilios y orientación avanzada
                </p>
              </div>
            </div>

            <div className="flex items-start p-5 bg-[var(--neutral-500)] rounded-xl border border-[var(--neutral-200)] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="p-3 bg-[var(--yellow-primary)]/10 rounded-full mr-4 group-hover:bg-[var(--yellow-primary)]/20 transition-colors">
                <Users className="text-[var(--yellow-primary)] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--neutral-400)] mb-1">
                  Confianza
                </h3>
                <p className="text-sm text-[var(--neutral-300)]">
                  Acompañamiento profesional personalizado
                </p>
              </div>
            </div>

            <div className="flex items-start p-5 bg-[var(--neutral-500)] rounded-xl border border-[var(--neutral-200)] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="p-3 bg-[var(--blue-primary)]/10 rounded-full mr-4 group-hover:bg-[var(--blue-primary)]/20 transition-colors">
                <Compass className="text-[var(--blue-primary)] w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--neutral-400)] mb-1">
                  Conocimiento
                </h3>
                <p className="text-sm text-[var(--neutral-300)]">
                  Expertos en ecología y cultura local
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-6 flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-[var(--green-primary)] text-[var(--neutral-500)] font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center">
              <span>Conoce mis expediciones</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button className="border-2 border-[var(--blue-primary)] text-[var(--blue-primary)] font-semibold py-3 px-6 rounded-full shadow-sm hover:bg-[var(--blue-primary)]/5 transition-all duration-300">
              Leer testimonios
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
