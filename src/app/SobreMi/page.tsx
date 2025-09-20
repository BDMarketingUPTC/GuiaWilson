"use client";
import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Shield, MapPin, Heart } from "lucide-react";

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
      title: "Guía de Turismo de Aventura",
      institution: "SENA - Servicio Nacional de Aprendizaje",
      year: "2021",
      description:
        "Certificación oficial como guía especializado en turismo de aventura, con formación en primeros auxilios, orientación y manejo de grupos en entornos naturales.",
      image: "/certificates/guia-aventura.jpg",
    },
    {
      id: 2,
      title: "Primeros Auxilios en Zonas Remotas",
      institution: "Cruz Roja Colombiana",
      year: "2022",
      description:
        "Certificación en protocolos de primeros auxilios adaptados para zonas de difícil acceso y situaciones de emergencia en alta montaña.",
      image: "/certificates/primeros-auxilios.jpg",
    },
    {
      id: 3,
      title: "Especialización en Alta Montaña",
      institution: "Federación Colombiana de Montañismo",
      year: "2020",
      description:
        "Formación especializada en técnicas de ascenso, seguridad y rescate en ambientes de alta montaña y glaciares.",
      image: "/certificates/alta-montana.jpg",
    },
    {
      id: 4,
      title: "Interpretación Ambiental",
      institution: "Parques Nacionales Naturales de Colombia",
      year: "2019",
      description:
        "Capacitación en interpretación del patrimonio natural y cultural, con enfoque en los ecosistemas de páramo y glaciar.",
      image: "/certificates/interpretacion-ambiental.jpg",
    },
    {
      id: 5,
      title: "Manejo de Grupos en Situaciones Adversas",
      institution: "Defensa Civil Colombiana",
      year: "2022",
      description:
        "Certificación en liderazgo y manejo de grupos bajo condiciones climáticas adversas y situaciones de estrés.",
      image: "/certificates/manejo-grupos.jpg",
    },
    {
      id: 6,
      title: "Conocimiento Local del Ecosistema Cocuy",
      institution: "Comunidad Indígena U'wa",
      year: "2018",
      description:
        "Reconocimiento por la comunidad U'wa por el conocimiento respetuoso y profundo del territorio sagrado del Nevado del Cocuy.",
      image: "/certificates/conocimiento-local.jpg",
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

      <div className="min-h-screen bg-[var(--neutral-white)] text-[var(--neutral-text-primary)]">
        {/* Header */}
        <header className="bg-[var(--blue-dark)] text-[var(--neutral-white)] py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Sobre Mí
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[var(--neutral-white)]">
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
              className="bg-[var(--neutral-gray)] rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex items-stretch">
                <div className="md:w-2/5 p-6 md:p-8 bg-[var(--blue-primary)] flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-[var(--neutral-white)] rounded-full overflow-hidden border-4 border-[var(--neutral-gray)] relative">
                    <Image
                      src="/images/profile-guide.jpg" // Reemplaza con la ruta de tu imagen
                      alt="Fotografía del guía"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="md:w-3/5 p-6 md:p-8 space-y-4">
                  <h2 className="text-3xl font-bold text-[var(--blue-primary)]">
                    Willson Correa Will
                  </h2>
                  <p className="text-[var(--neutral-text-secondary)] leading-relaxed">
                    Guía profesional especializado en el{" "}
                    <span className="font-semibold text-[var(--blue-light)]">
                      Nevado del Cocuy
                    </span>{" "}
                    con más de 20 años de experiencia conduciendo grupos en una
                    de las maravillas naturales más impresionantes de Colombia.
                  </p>

                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-semibold text-[var(--blue-primary)]">
                      Mi Pasión
                    </h3>
                    <p className="text-[var(--neutral-text-secondary)]">
                      Mi conexión con el Cocuy comenzó en mi infancia, cuando
                      acompañaba a mi padre en expediciones a la región. Desde
                      entonces, he dedicado mi vida a explorar cada rincón de
                      este paraíso natural y a compartir su belleza con quienes
                      buscan aventuras auténticas y seguras.
                    </p>
                    <h3 className="text-lg font-semibold text-[var(--blue-primary)]">
                      Mi Enfoque
                    </h3>
                    <p className="text-[var(--neutral-text-secondary)]">
                      No solo te guío por las rutas; te ayudo a conectar con la
                      esencia de la montaña, a entender su ecosistema único y a
                      vivir una experiencia transformadora con el máximo respeto
                      por el entorno y las comunidades locales.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center p-4 bg-[var(--neutral-white)] rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-[var(--blue-light)]">
                        250+
                      </div>
                      <div className="text-sm text-[var(--neutral-text-secondary)]">
                        Expediciones
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[var(--neutral-white)] rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-[var(--teal-accent)]">
                        98%
                      </div>
                      <div className="text-sm text-[var(--neutral-text-secondary)]">
                        Satisfacción
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[var(--neutral-white)] rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-[var(--aqua-lake)]">
                        1200+
                      </div>
                      <div className="text-sm text-[var(--neutral-text-secondary)]">
                        Aventureros
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[var(--neutral-white)] rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-[var(--blue-light)]">
                        10+
                      </div>
                      <div className="text-sm text-[var(--neutral-text-secondary)]">
                        Años de Experiencia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Valores y Enfoque */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--neutral-gray)] rounded-xl p-6 shadow-lg">
                <div className="bg-[var(--blue-light)]/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[var(--blue-light)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--blue-primary)] mb-2">
                  Seguridad Primero
                </h3>
                <p className="text-[var(--neutral-text-secondary)]">
                  Tu seguridad es mi prioridad absoluta. Utilizo equipos de
                  primera calidad y sigo protocolos estrictos en todas las
                  expediciones.
                </p>
              </div>

              <div className="bg-[var(--neutral-gray)] rounded-xl p-6 shadow-lg">
                <div className="bg-[var(--teal-accent)]/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[var(--teal-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--blue-primary)] mb-2">
                  Sostenibilidad
                </h3>
                <p className="text-[var(--neutral-text-secondary)]">
                  Practico y promuevo el turismo responsable, minimizando
                  nuestro impacto y apoyando a las comunidades locales.
                </p>
              </div>

              <div className="bg-[var(--neutral-gray)] rounded-xl p-6 shadow-lg">
                <div className="bg-[var(--aqua-lake)]/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[var(--aqua-lake)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--blue-primary)] mb-2">
                  Conocimiento Local
                </h3>
                <p className="text-[var(--neutral-text-secondary)]">
                  En cada tour comparto conocimientos sobre el ecosistema único
                  del páramo y glaciar, fomentando su conservación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Certificados */}
        <section
          className="py-12 px-4 md:px-8 bg-[var(--neutral-white)]"
          id="certificados"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--blue-primary)]">
                Certificaciones y Credenciales
              </h2>
              <p className="text-[var(--neutral-text-secondary)] mt-2 max-w-2xl mx-auto">
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
                  className="bg-[var(--neutral-gray)] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  <div className="h-48 bg-[var(--neutral-gray)] overflow-hidden relative">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-[var(--blue-primary)] mb-1">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-[var(--blue-light)] mb-2">
                      {certificate.institution} • {certificate.year}
                    </p>
                    <p className="text-sm text-[var(--neutral-text-secondary)] line-clamp-3">
                      {certificate.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <p className="text-[var(--neutral-text-secondary)] mb-4">
                ¿Quieres ver más detalles sobre mis credenciales?
              </p>
              <button className="bg-[var(--blue-primary)] hover:bg-[var(--blue-dark)] text-[var(--neutral-white)] font-medium py-2 px-6 rounded-full transition-colors">
                Solicitar referencias completas
              </button>
            </div>
          </div>
        </section>

        {/* Modal de Certificado */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="fixed inset-0 bg-[var(--blue-dark)] bg-opacity-90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[var(--neutral-white)] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="relative">
                  <button
                    className="absolute top-4 right-4 z-10 bg-[var(--neutral-gray)] rounded-full p-2 hover:bg-[var(--neutral-text-secondary)] transition-colors"
                    onClick={() => setSelectedCertificate(null)}
                  >
                    <svg
                      className="w-6 h-6 text-[var(--neutral-text-secondary)]"
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
                  <div className="h-72 bg-[var(--neutral-gray)] overflow-hidden relative">
                    <Image
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                <div className="p-6 overflow-y-auto">
                  <h2 className="text-2xl font-bold text-[var(--blue-primary)] mb-2">
                    {selectedCertificate.title}
                  </h2>
                  <p className="text-[var(--blue-light)] mb-4">
                    {selectedCertificate.institution} •{" "}
                    {selectedCertificate.year}
                  </p>
                  <p className="text-[var(--neutral-text-secondary)] mb-6">
                    {selectedCertificate.description}
                  </p>
                  <div className="bg-[var(--neutral-gray)] rounded-lg p-4">
                    <h3 className="font-semibold text-[var(--blue-primary)] mb-2">
                      Habilidades validadas:
                    </h3>
                    <ul className="list-disc list-inside text-[var(--neutral-text-secondary)] space-y-1">
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
