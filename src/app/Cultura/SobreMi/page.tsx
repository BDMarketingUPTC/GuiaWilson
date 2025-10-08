"use client";
import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Shield, MapPin, Heart } from "lucide-react";
import ProfessionalCard from "./componentes/TarjetaProfesional";
import Link from "next/link";

interface Certificate {
  id: number;
  title: string;
  institution: string;
  year: string;
  description: string;
  image: string;
}

export default function AboutPage() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Primeros Auxilios",
      institution: "SENA - Servicio Nacional de Aprendizaje",
      year: "2023",
      description:
        "Certificación oficial en primeros auxilios con una duración de 48 horas, enfocada en la atención inicial de emergencias y técnicas de asistencia básica.",
      image: "/Certificados/Certificado1.png",
    },
    {
      id: 2,
      title: "Curso Virtual en Turismo - Jóvenes con Sentido",
      institution: "Consejería Presidencial para la Juventud - Colombia Joven",
      year: "2021",
      description:
        "Finalización de los 20 módulos del curso virtual en turismo con una duración aproximada de 40 horas, orientado al fortalecimiento de competencias turísticas y estrategias de juventud.",
      image: "/Certificados/Certificado2.png",
    },
    {
      id: 3,
      title: "Primer Respondiente Forestal",
      institution: "Cuerpo de Bomberos Voluntarios de Bogotá D.C.",
      year: "2024",
      description:
        "Formación como primer respondiente forestal con una intensidad de 24 horas teórico-prácticas, orientada a la preparación y respuesta ante emergencias forestales.",
      image: "/Certificados/Certificado3.png",
    },
    {
      id: 4,
      title: "Administración de Emergencias en Incendios Forestales",
      institution: "Cuerpo de Bomberos Voluntarios de Bogotá D.C.",
      year: "2024",
      description:
        "Certificación en la administración de emergencias en incendios forestales con una duración de 24 horas académicas teórico-prácticas, en el marco del proyecto Colombia Resiliente.",
      image: "/Certificados/Certificado4.png",
    },
    {
      id: 5,
      title: "Registro Nacional de Turismo - Guía de Turismo",
      institution:
        "Cámara de Comercio de Duitama - Ministerio de Comercio, Industria y Turismo",
      year: "2025",
      description:
        "Inscripción en el Registro Nacional de Turismo como Guía de Turismo profesional, con tarjeta profesional No. 7359, acreditando competencias para el ejercicio formal del turismo.",
      image: "/Certificados/Certificado5.png",
    },
  ];

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Sobre Mí | Guía Nevado del Cocuy</title>
        <meta
          name="description"
          content="Conoce a tu guía certificado para tours al Nevado del Cocuy"
        />
      </Head>

      <div className="min-h-screen bg-[var(--cultura-white)] text-[var(--cultura-text-primary)]">
        {/* Header */}
        <header className="bg-[var(--cultura-green-dark)] text-[var(--cultura-white)] py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Sobre Mí
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[var(--cultura-white)]">
              Conoce mi experiencia, pasión por la montaña y certificaciones
              como guía experto del Nevado del Cocuy.
            </p>
          </div>
        </header>

        {/* Sección de Información General */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="bg-[var(--cultura-gray)] rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex items-stretch">
                {/* Tarjeta profesional */}
                <div
                  className="md:w-2/5 p-6 md:p-8 flex items-center justify-center bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/bannerMockup.png')",
                  }}
                >
                  <ProfessionalCard
                    frontImage="/Certificados/TarjetaProfesional/TarjetaProfesionalFrente.png"
                    backImage="/Certificados/TarjetaProfesional/TarjetaProfesionalReverso.png"
                    altFront="Tarjeta profesional frontal"
                    altBack="Tarjeta profesional reverso"
                  />
                </div>

                {/* Contenido del perfil del guía */}
                <div className="md:w-3/5 p-6 md:p-8">
                  {/* Contenedor principal para la imagen y el texto inicial */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    {/* Imagen del guía */}
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--cultura-gray)] relative flex-shrink-0">
                      <Image
                        src="/Guia.png"
                        alt="Fotografía del guía"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    {/* Texto de la descripción inicial */}
                    <div className="space-y-4 text-center md:text-left">
                      <h2 className="text-3xl font-bold text-[var(--cultura-green-primary)]">
                        Willson Correa Will
                      </h2>
                      <p className="text-[var(--cultura-text-secondary)] leading-relaxed">
                        Guía profesional especializado en el{" "}
                        <span className="font-semibold text-[var(--cultura-green-light)]">
                          Nevado del Cocuy
                        </span>{" "}
                        con más de 20 años de experiencia conduciendo grupos en
                        una de las maravillas naturales más impresionantes de
                        Colombia.
                      </p>
                    </div>
                  </div>

                  {/* Sección de Mi Pasión y Mi Enfoque */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-semibold text-[var(--cultura-green-primary)]">
                      Mi Pasión
                    </h3>
                    <p className="text-[var(--cultura-text-secondary)]">
                      Mi conexión con el Cocuy comenzó en mi infancia, cuando
                      acompañaba a mi padre en expediciones a la región. Desde
                      entonces, he dedicado mi vida a explorar cada rincón de
                      este paraíso natural y a compartir su belleza con quienes
                      buscan aventuras auténticas y seguras.
                    </p>
                    <h3 className="text-lg font-semibold text-[var(--cultura-green-primary)]">
                      Mi Enfoque
                    </h3>
                    <p className="text-[var(--cultura-text-secondary)]">
                      No solo te guío por las rutas; te ayudo a conectar con la
                      esencia de la montaña, a entender su ecosistema único y a
                      vivir una experiencia transformadora con el máximo respeto
                      por el entorno y las comunidades locales.
                    </p>
                  </div>

                  {/* Grid de estadísticas */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center p-4 bg-[var(--cultura-white)] rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-[var(--cultura-sand-accent)]">
                        1000+
                      </div>
                      <div className="text-sm text-[var(--cultura-text-secondary)]">
                        Expediciones
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[var(--cultura-white)] rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-[var(--cultura-green-light)]">
                        98%
                      </div>
                      <div className="text-sm text-[var(--cultura-text-secondary)]">
                        Satisfacción
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[var(--cultura-white)] rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-[var(--cultura-terracotta)]">
                        2200+
                      </div>
                      <div className="text-sm text-[var(--cultura-text-secondary)]">
                        Aventureros
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[var(--cultura-white)] rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-[var(--cultura-sand-accent)]">
                        20+
                      </div>
                      <div className="text-sm text-[var(--cultura-text-secondary)]">
                        Años de Experiencia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sección de Valores y Enfoque */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--cultura-gray)] rounded-xl p-6 shadow-lg">
                <div className="bg-[var(--cultura-green-light)]/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[var(--cultura-green-light)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--cultura-green-primary)] mb-2">
                  Seguridad Primero
                </h3>
                <p className="text-[var(--cultura-text-secondary)]">
                  Tu seguridad es mi prioridad absoluta. Utilizo equipos de
                  primera calidad y sigo protocolos estrictos en todas las
                  expediciones.
                </p>
              </div>
              <div className="bg-[var(--cultura-gray)] rounded-xl p-6 shadow-lg">
                <div className="bg-[var(--cultura-sand-accent)]/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[var(--cultura-sand-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--cultura-green-primary)] mb-2">
                  Sostenibilidad
                </h3>
                <p className="text-[var(--cultura-text-secondary)]">
                  Practico y promuevo el turismo responsable, minimizando
                  nuestro impacto y apoyando a las comunidades locales.
                </p>
              </div>
              <div className="bg-[var(--cultura-gray)] rounded-xl p-6 shadow-lg">
                <div className="bg-[var(--cultura-terracotta)]/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[var(--cultura-terracotta)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--cultura-green-primary)] mb-2">
                  Conocimiento Local
                </h3>
                <p className="text-[var(--cultura-text-secondary)]">
                  En cada tour comparto conocimientos sobre el ecosistema único
                  del páramo y glaciar, fomentando su conservación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Certificados */}
        <section
          className="py-12 px-4 md:px-8 bg-[var(--cultura-white)]"
          id="certificados"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--cultura-green-primary)]">
                Certificaciones y Credenciales
              </h2>
              <p className="text-[var(--cultura-text-secondary)] mt-2 max-w-2xl mx-auto">
                Mi formación continua me permite ofrecer experiencias seguras,
                educativas y memorables en el Nevado del Cocuy
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((certificate) => (
                <motion.div
                  key={certificate.id}
                  variants={itemVariants}
                  className="bg-[var(--cultura-gray)] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  <div className="h-48 bg-[var(--cultura-gray)] overflow-hidden relative">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-[var(--cultura-green-primary)] mb-1">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-[var(--cultura-green-light)] mb-2">
                      {certificate.institution} • {certificate.year}
                    </p>
                    <p className="text-sm text-[var(--cultura-text-secondary)] line-clamp-3">
                      {certificate.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <p className="text-[var(--cultura-text-secondary)] mb-4">
                ¿Quieres ver más detalles sobre mis credenciales?
              </p>
              <Link href="/Cultura/Contacto">
                <button className="bg-[var(--cultura-sand-accent)] hover:bg-[var(--cultura-terracotta)] text-[var(--cultura-white)] font-medium py-2 px-6 rounded-full transition-colors">
                  Solicitar referencias completas
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Modal de Certificado */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="fixed inset-0 bg-[var(--cultura-green-dark)] bg-opacity-90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[var(--cultura-white)] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="relative">
                  <button
                    className="absolute top-4 right-4 z-10 bg-[var(--cultura-gray)] rounded-full p-2 hover:bg-[var(--cultura-text-secondary)] transition-colors"
                    onClick={() => setSelectedCertificate(null)}
                  >
                    <svg
                      className="w-6 h-6 text-[var(--cultura-text-secondary)]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="h-72 bg-[var(--cultura-gray)] overflow-hidden relative">
                    <Image
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                <div className="p-6 overflow-y-auto">
                  <h2 className="text-2xl font-bold text-[var(--cultura-green-primary)] mb-2">
                    {selectedCertificate.title}
                  </h2>
                  <p className="text-[var(--cultura-green-light)] mb-4">
                    {selectedCertificate.institution} •{" "}
                    {selectedCertificate.year}
                  </p>
                  <p className="text-[var(--cultura-text-secondary)] mb-6">
                    {selectedCertificate.description}
                  </p>
                  <div className="bg-[var(--cultura-gray)] rounded-lg p-4">
                    <h3 className="font-semibold text-[var(--cultura-green-primary)] mb-2">
                      Habilidades validadas:
                    </h3>
                    <ul className="list-disc list-inside text-[var(--cultura-text-secondary)] space-y-1">
                      <li>Protocolos de seguridad en alta montaña</li>
                      <li>Manejo de grupos en condiciones adversas</li>
                      <li>Primeros auxilios en zonas remotas</li>
                      <li>Conocimiento del ecosistema local</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
