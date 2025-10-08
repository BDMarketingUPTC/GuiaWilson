"use client";

import React, { useState, useRef, Fragment } from "react";
import Link from "next/link";
import Image from "next/image"; // Importar Next.js Image
import { Dialog, Transition } from "@headlessui/react";

// =================================================================
// # INTERFACES / TYPES
// =================================================================

export interface Etapa {
  id: number;
  nombre: string;
  focoEspiritual: string;
  objetivo: string;
  descripcionCompleta: string;
  icono: string;
  color: string;
  duracion: string;
  altitud: string;
  imagen: string;
}

export interface Testimonio {
  id: number;
  nombre: string;
  fecha: string;
  contenido: string;
  avatar: string;
  rating: number;
}

export interface PreguntaFrecuente {
  id: number;
  pregunta: string;
  respuesta: string;
}

interface ModalContent {
  isOpen: boolean;
  etapa: Etapa | null;
}

// =================================================================
// # CONFIGURACIÓN Y DATOS (CONSTANTES)
// =================================================================

// **CONFIGURACIÓN DE CONTACTO**
const WHATSAPP_NUMBER = "573114434181";
const ENCODED_MESSAGE = encodeURIComponent(
  "¡Hola! Me interesa el viaje 'Senderos del Espíritu' en el Cocuy y me gustaría saber más detalles para reservar mi cupo."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${ENCODED_MESSAGE}`;

const etapas: Etapa[] = [
  // **ETAPA 1: INMERSIÓN CULTURAL Y CONEXIÓN**
  {
    id: 1,
    nombre: "La Bienvenida U'wa y Andina",
    focoEspiritual: "Apertura y Reconocimiento",
    objetivo:
      "Llegada y asentamiento. Recorrido consciente por El Cocuy/Güicán. Encuentro con la cosmovisión local, visitando un punto cultural o artesanal para conectar con la gente y su historia.",
    descripcionCompleta:
      "Esta etapa es la bienvenida al territorio. Antes de ascender, dedicaremos tiempo a caminar el pueblo de Güicán o El Cocuy, observando su arquitectura y su gente. Visitaremos un espacio cultural o artesanal para un primer contacto con la **cosmovisión U&apos;wa** y las tradiciones andinas. Es un momento para **poner la intención** en el viaje, honrando el territorio y preparándonos mentalmente desde el respeto y la humildad.", // LÍNEA 459: ' -> &apos;
    icono: "🏘️",
    color: "from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)]",
    duracion: "Primer día (Mañana) 3 Horas",
    altitud: "2,750 - 2,900 m",
    imagen: "/planes/PlanCultural1.webp",
  },
  // **ETAPA 2: El Reencuentro con la Madre Tierra**
  {
    id: 2,
    nombre: "El Reencuentro con la Madre Tierra",
    focoEspiritual: "Limpieza y Presencia",
    objetivo:
      "Inicio en Güicán. Aclimatación consciente. Soltar la prisa y la rutina. Prácticas de respiración en el bosque andino para sintonizar con el territorio (Ruiria).",
    descripcionCompleta:
      "Esta primera etapa te sumerge en la tranquilidad de Güicán, la puerta de entrada a nuestro viaje. Es un día dedicado a la aclimatación física y espiritual, donde aprenderás a dejar atrás el bullicio de la vida cotidiana. Realizaremos prácticas de respiración y meditación en el exuberante bosque andino de Ruiria, sintonizando con la energía vital de la Madre Tierra y preparándonos para las alturas que nos esperan. Aquí se forja la base de nuestra conexión con el entorno y con nosotros mismos.",
    icono: "🌱",
    color: "from-[var(--cultura-green-primary)] to-[var(--cultura-green-dark)]",
    duracion: "Primer día (Tarde) 4 Horas",
    altitud: "2,800 - 3,200 m",
    imagen: "/planes/PlanCultural2.webp",
  },
  // **ETAPA 3 a 7 (Tus etapas originales, con ID actualizado)**
  {
    id: 3,
    nombre: "La Carga y el Desapego",
    focoEspiritual: "Soltar lo que pesa",
    objetivo:
      'Ascenso a la zona de páramo (ej. Lagunillas). La exigencia física simboliza la reflexión sobre las "cargas" mentales. Es la etapa para dejar ir el control y entregarse al ritmo de la montaña.',
    descripcionCompleta:
      "El segundo día marca el inicio del ascenso hacia la zona de páramo, un ecosistema único y desafiante. La exigencia física de la caminata, por senderos como los que llevan a Lagunillas, se convierte en una metáfora poderosa para reflexionar sobre las **&apos;cargas&apos; emocionales y mentales** que llevamos. Es un momento crucial para practicar el **desapego**, soltar el control y aprender a fluir con el ritmo majestuoso e inquebrantable de la montaña. Cada paso es una oportunidad para aligerar el espíritu.", // LÍNEA 473: ' -> &apos;
    icono: "⛰️",
    color: "from-[var(--cultura-gray)] to-[var(--cultura-text-secondary)]",
    duracion: "Segundo Dia 2 Horas + ",
    altitud: "3,200 - 4,000 m",
    imagen: "/planes/PlanCultural3.webp",
  },
  {
    id: 4,
    nombre: "El Silencio del Agua Viva",
    focoEspiritual: "Claridad y Renovación",
    objetivo:
      "Ruta a las lagunas (ej. Laguna Grande de la Sierra). El agua, un elemento sagrado para la cultura U'wa, inspira el silencio interior. Meditación para ver el reflejo de la verdad sin juicio.",
    descripcionCompleta:
      "En esta etapa, nuestra travesía nos lleva a las impresionantes lagunas de la Sierra, como la mítica Laguna Grande. Para la cultura U&apos;wa, el agua es un elemento sagrado de pureza y conocimiento. Aquí, el objetivo es cultivar el **silencio interior**, inspirados por la quietud de las aguas. Realizaremos meditaciones contemplativas junto a las lagunas, buscando la **claridad mental** y la capacidad de ver nuestra verdad interna sin juicio, permitiendo que la serenidad del entorno renueve nuestro ser.",
    icono: "💧",
    color:
      "from-[var(--cultura-green-light)] to-[var(--cultura-green-primary)]",
    duracion: "Segundo Dia 3 Horas +",
    altitud: "3,800 - 4,200 m",
    imagen: "/planes/PlanCultural4.webp",
  },
  {
    id: 5,
    nombre: "La Cima del Ser",
    focoEspiritual: "Perspectiva y Libertad",
    objetivo:
      "Ascenso a un punto alto. Se busca la nueva perspectiva de la vida que solo da la altura. Sentir la inmensidad del paisaje del Cocuy y la pequeñez del ego, alcanzando la libertad espiritual.",
    descripcionCompleta:
      "El día cumbre de nuestra peregrinación nos lleva a un punto elevado, ofreciéndonos vistas panorámicas inigualables de la Sierra Nevada del Cocuy. Este ascenso físico simboliza la búsqueda de una **nueva perspectiva de la vida**, una claridad que solo se alcanza desde las alturas. Aquí, en la vastedad del paisaje, confrontamos la inmensidad de la naturaleza y la humildad de nuestro propio ser, trascendiendo el ego para experimentar una profunda sensación de **libertad espiritual** y conexión universal.",
    icono: "🏔️",
    color: "from-[var(--cultura-terracotta)] to-[var(--cultura-sand-accent)]",
    duracion: "Segundo Dia 4 Horas+",
    altitud: "4,200 - 4,800 m",
    imagen: "/planes/PlanCultural5.webp",
  },
  {
    id: 6,
    nombre: "El Regreso Consciente",
    focoEspiritual: "Integración y Promesa",
    objetivo:
      "El descenso de vuelta a Güicán. El objetivo es traer la enseñanza de la montaña a la vida diaria. Reflexión final y compromiso personal de ser un guardián respetuoso de la tierra.",
    descripcionCompleta:
      "La etapa de descenso es un momento para la **integración y la reflexión**. No es solo un retorno físico, sino una oportunidad para asimilar todas las enseñanzas y transformaciones vividas en la montaña. Realizaremos una ceremonia final de agradecimiento y estableceremos un **compromiso personal** para llevar la sabiduría y el respeto por la tierra a nuestra vida diaria, convirtiéndonos en guardianes conscientes del planeta y de nuestro propio espíritu renovado.",
    icono: "🔄",
    color:
      "from-[var(--cultura-green-light)] to-[var(--cultura-green-primary)]",
    duracion: "Segundo Dia (Tarde) 4 Horas+",
    altitud: "4,800 - 2,800 m",
    imagen: "/planes/PlanCultural6.webp",
  },
  // **ETAPA 7: CIERRE Y RELAX EN LAS TERMAS**
  {
    id: 7,
    nombre: "Sanación y Cierre en Agua Caliente",
    focoEspiritual: "Renovación y Gratitud",
    objetivo:
      "Visita a las Termales de Güicán/Chiscas. Relajación física profunda y meditación de gratitud. Sellar la transformación antes de regresar a la vida cotidiana.",
    descripcionCompleta:
      "El final perfecto para nuestra peregrinación es la **relajación profunda** en las Termales naturales de Güicán (o Chiscas). Esta etapa está dedicada a la sanación del cuerpo y del espíritu. La calidez del agua mineral ayuda a liberar las tensiones físicas acumuladas, mientras que realizamos una **meditación de gratitud** final. Es el **sello de la transformación**, un momento para asentar la nueva energía y prepararse para llevar la paz y la claridad de la montaña a la vida cotidiana.",
    icono: "♨️",
    color: "from-[var(--cultura-blue-primary)] to-[var(--cultura-teal-dark)]",
    duracion: "Tercer Día (Tarde) 3 Horas",
    altitud: "2,800 - 2,800 m",
    imagen: "/planes/PlanCultural7.webp",
  },
];

const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: "María González",
    fecha: "Enero 2024",
    contenido:
      "Esta experiencia transformó mi perspectiva de la vida. La conexión con la cultura U&apos;wa y la guía experta hicieron que cada paso tuviera un significado profundo.", // LÍNEA 591: ' -> &apos;
    avatar: "/images/avatar1.jpg",
    rating: 7,
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    fecha: "Diciembre 2023",
    contenido:
      "Más que un trekking, fue un viaje interior. Las ceremonias espirituales y el silencio de la montaña me ayudaron a reconectar con mi esencia.",
    avatar: "/images/avatar2.jpg",
    rating: 7,
  },
  {
    id: 3,
    nombre: "Ana Martínez",
    fecha: "Noviembre 2023",
    contenido:
      "Increíble experiencia. El guía no solo conoce cada rincón del Cocuy, sino que comparte la sabiduría ancestral de forma respetuosa y profunda.",
    avatar: "/images/avatar3.jpg",
    rating: 7,
  },
];

const preguntasFrecuentes: PreguntaFrecuente[] = [
  {
    id: 1,
    pregunta: "¿Qué nivel de condición física se requiere?",
    respuesta:
      "Se requiere un buen estado físico ya que caminaremos a alturas entre 2,800 y 4,800 metros. Recomendamos entrenamiento previo con caminatas en montaña si es posible.",
  },
  {
    id: 2,
    pregunta: "¿Qué incluye el paquete?",
    respuesta:
      "Incluye guía especializado, alimentación completa, alojamiento en refugios, permisos de ingreso, seguro de viaje, ceremonias espirituales y transporte local desde Güicán.",
  },
  {
    id: 3,
    pregunta: "¿Cómo es el protocolo de respeto a la cultura U&apos;wa?", // LÍNEA 593: ' -> &apos;
    respuesta:
      "Seguimos estrictamente las directrices de la comunidad U&apos;wa y Parques Nacionales. No accedemos a sitios sagrados prohibidos y realizamos ceremonias solo en lugares permitidos con el debido respeto.", // LÍNEA 593: ' -> &apos;
  },
  {
    id: 4,
    pregunta: "¿Qué debo llevar?",
    respuesta:
      "Ropa térmica, impermeable, botas de montaña, sleeping bag, linterna frontal, protector solar, botella de agua, y lo más importante: mente abierta y corazón dispuesto.",
  },
];

// =================================================================
// # COMPONENTES
// =================================================================

// --- Componente Modal Mejorado (EtapaModal) ---

interface EtapaModalProps {
  isOpen: boolean;
  onClose: () => void;
  etapa: Etapa; // Pasamos el objeto 'Etapa' completo
}

const EtapaModal: React.FC<EtapaModalProps> = ({ isOpen, onClose, etapa }) => {
  // Función para renderizar la tarjeta de característica (Feature Card)
  const FeatureCard = ({
    icon,
    label,
    value,
  }: {
    icon: string;
    label: string;
    value: string;
  }) => (
    <div className="flex flex-col items-center p-4 bg-[var(--cultura-white)]/10 backdrop-blur-sm rounded-xl border border-[var(--cultura-white)]/20 shadow-lg text-center">
      <span className="text-3xl mb-2">{icon}</span>
      <p className="text-xs uppercase font-semibold text-[var(--cultura-white)]/80">
        {label}
      </p>
      <p className="text-lg font-bold text-[var(--cultura-white)]">{value}</p>
    </div>
  );

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-[var(--cultura-white)] text-left align-middle shadow-2xl transition-all">
                {/* 1. SECCIÓN DE CABECERA/VISUAL INMERSIVA */}
                <div
                  className={`relative p-8 md:p-12 text-[var(--cultura-white)] bg-gradient-to-r ${etapa.color}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${etapa.imagen})` }}
                  />
                  <div className="relative z-10">
                    <span className="text-7xl mb-4 block">{etapa.icono}</span>
                    <p className="text-sm font-semibold uppercase tracking-widest mb-1 text-[var(--cultura-white)]/80">
                      ETAPA {etapa.id}
                    </p>
                    <Dialog.Title
                      as="h3"
                      className="text-4xl md:text-5xl font-extrabold leading-tight"
                    >
                      {etapa.nombre}
                    </Dialog.Title>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <FeatureCard
                        icon="⏳"
                        label="Duración Estimada"
                        value={etapa.duracion}
                      />
                      <FeatureCard
                        icon="🧭"
                        label="Altitud Máxima"
                        value={etapa.altitud}
                      />
                      <FeatureCard
                        icon="🧘"
                        label="Foco Espiritual"
                        value={etapa.focoEspiritual}
                      />
                    </div>
                  </div>
                </div>

                {/* 2. CONTENIDO Y PERSUASIÓN */}
                <div className="p-8 md:p-12 text-[var(--cultura-text-primary)]">
                  <h4 className="text-2xl font-bold mb-3 border-b border-[var(--cultura-gray)] pb-2 text-[var(--cultura-green-primary)]">
                    🚀 El Objetivo Central
                  </h4>
                  <p className="text-xl leading-relaxed mb-6 font-semibold">
                    {etapa.objetivo}
                  </p>

                  <h4 className="text-2xl font-bold mb-3 border-b border-[var(--cultura-gray)] pb-2 text-[var(--cultura-green-primary)]">
                    📜 Profundidad de la Peregrinación
                  </h4>
                  <div
                    className="text-lg text-[var(--cultura-text-secondary)] leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{
                      __html: etapa.descripcionCompleta
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/(\. )/g, ". <br/><br>"), // Optimización del reemplazo de doble espacio por un solo br
                    }}
                  />

                  {/* 3. LLAMADA A LA ACCIÓN (CTA) PERSUASIVA - WhatsApp */}
                  <div className="mt-10 pt-6 border-t border-[var(--cultura-gray)] flex flex-col md:flex-row justify-between items-center bg-[var(--cultura-gray)]/30 p-6 rounded-xl">
                    <p className="text-xl font-bold text-[var(--cultura-text-primary)] mb-4 md:mb-0">
                      ¿Sientes el llamado de la montaña?
                    </p>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="inline-flex justify-center rounded-full bg-gradient-to-r from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] px-8 py-3 text-lg font-bold text-[var(--cultura-white)] hover:from-[var(--cultura-terracotta)] hover:to-[var(--cultura-sand-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--cultura-sand-accent)] transition-all shadow-xl hover:shadow-2xl"
                    >
                      Reserva tu Camino Sagrado Ahora
                      <svg
                        className="w-5 h-5 ml-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Botón de Cierre Secundario */}
                <div className="p-8 pt-0 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-[var(--cultura-gray)] px-6 py-2 text-md font-medium text-[var(--cultura-text-secondary)] hover:bg-[var(--cultura-gray)]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--cultura-green-light)] transition-colors"
                    onClick={onClose}
                  >
                    Volver a las Etapas
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

// --- Componente Principal ---
const SenderosEspiritualesPage: React.FC = () => {
  const [etapaActiva, setEtapaActiva] = useState<number>(1);
  const [testimonioActivo, setTestimonioActivo] = useState<number>(0); // Se mantiene para navegación manual o futura implementación de carrusel
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  const [modalState, setModalState] = useState<ModalContent>({
    isOpen: false,
    etapa: etapas[0],
  });

  const etapasRef = useRef<HTMLDivElement>(null); // Se mantiene para el scroll
  const navButtonsRef = useRef<HTMLDivElement>(null);

  // NOTA: El useEffect para el carrusel de testimonios ha sido eliminado, ya que solo actualizaba el estado
  // de forma automática, pero el usuario no lo podía controlar (dot buttons ya hacen esto).

  const handleEtapaClick = (id: number) => {
    setEtapaActiva(id);

    // Scroll a la etapa específica
    const targetElement = document.getElementById(`etapa-${id}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Mejora Adicional: Scroll horizontal para centrar el botón activo en móviles
    if (navButtonsRef.current) {
      const buttonElement = navButtonsRef.current.querySelector(
        `[data-etapa-id="${id}"]`
      );
      if (buttonElement) {
        const container = navButtonsRef.current;
        const offset =
          (buttonElement as HTMLElement).offsetLeft -
          container.offsetWidth / 2 +
          (buttonElement as HTMLElement).offsetWidth / 2;
        container.scroll({ left: offset, behavior: "smooth" });
      }
    }
  };

  const handleFaqToggle = (id: number) => {
    setFaqAbierta(faqAbierta === id ? null : id);
  };

  const openModal = (etapa: Etapa) => {
    setModalState({ isOpen: true, etapa });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <div className="min-h-screen bg-[var(--cultura-white)] text-[var(--cultura-text-primary)] font-sans">
      {/* Hero Section Mejorada */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--cultura-white)] z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Galeria/Gallery27.webp')" }}
        ></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 bg-[var(--cultura-white)]/10 backdrop-blur-md px-4 py-2 rounded-full border border-[var(--cultura-white)]/20">
              <div className="w-2 h-2 bg-[var(--cultura-sand-accent)] rounded-full animate-pulse"></div>
              <span className="text-[var(--cultura-white)] text-sm font-medium tracking-wide">
                EXPERIENCIA U&apos;WA AUTÉNTICA {/* LÍNEA 598: ' -> &apos; */}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-[var(--cultura-white)] mb-8 leading-[0.95] tracking-tight">
              Senderos del
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cultura-sand-accent)] via-[var(--cultura-terracotta)] to-[var(--cultura-sand-accent)] animate-gradient">
                Espíritu
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--cultura-white)]/80 mb-12 max-w-2xl leading-relaxed font-light">
              Tres días de <b>transformación profunda</b> en la Sierra Nevada
              del Cocuy. Un viaje guiado por la sabiduría ancestral U&apos;wa.{" "}
              {/* LÍNEA 603: ' -> &apos; */}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botón principal CTA - WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[var(--cultura-white)] hover:bg-[var(--cultura-sand-accent)] text-[var(--cultura-text-primary)] hover:text-[var(--cultura-white)] px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-2xl"
              >
                <span>Comenzar mi viaje</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Botón para hacer scroll a etapas */}
              <Link href="#etapas" passHref scroll={false}>
                <button
                  onClick={(e) => {
                    // Prevenir el comportamiento de Link si hay problemas
                    e.preventDefault();
                    if (etapasRef.current) {
                      etapasRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="group bg-transparent hover:bg-[var(--cultura-white)]/10 text-[var(--cultura-white)] backdrop-blur-sm px-10 py-4 rounded-full font-semibold text-lg border-2 border-[var(--cultura-white)]/40 hover:border-[var(--cultura-white)] transition-all duration-300"
                >
                  Explorar etapas
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-[var(--cultura-white)]/60">
            <span className="text-xs uppercase tracking-wider">
              Descubre más
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Sección de Introducción Mejorada */}
      <section className="py-20 bg-[var(--cultura-white)] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  {/* CORRECCIÓN: Usar <Image> de Next.js en lugar de <img> */}
                  <Image // LÍNEA 552: Corrección del warning 'no-img-element'
                    src="/GuiaFoto.webp"
                    alt="Guía local del Cocuy"
                    width={500} // Se añade un width/height para Image
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[var(--cultura-white)] p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[var(--cultura-green-primary)] to-[var(--cultura-green-dark)] rounded-full flex items-center justify-center text-[var(--cultura-white)] font-bold text-lg">
                      Wil
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--cultura-text-primary)]">
                        Wilson Correa, tu guía
                      </h4>
                      <p className="text-sm text-[var(--cultura-text-secondary)]">
                        Nativo de Güicán
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--cultura-text-primary)] mb-6">
                Más que una caminata, una{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cultura-green-primary)] to-[var(--cultura-sand-accent)]">
                  peregrinación espiritual
                </span>
              </h2>
              <p className="text-lg text-[var(--cultura-text-secondary)] mb-6 leading-relaxed">
                Desde la base en <b>Güicán</b>, la tierra que me vio nacer y
                crecer, te invito a una experiencia que trasciende lo físico.
                Este no es un simple itinerario de trekking, sino una{" "}
                <b>hoja de ruta para el alma</b>.
              </p>
              <p className="text-lg text-[var(--cultura-text-secondary)] mb-8 leading-relaxed">
                Hemos diseñado esta travesía de la mano del profundo respeto por
                el conocimiento ancestral de la <b>comunidad U&apos;wa</b>{" "}
                (gente sabia), quienes nos enseñan a ver la montaña como{" "}
                <b>&apos;Ruiria&apos;</b>, un ser vivo y sagrado.
              </p>

              <div className="bg-gradient-to-r from-[var(--cultura-green-light)]/10 to-[var(--cultura-sand-accent)]/10 p-6 rounded-2xl border-l-4 border-[var(--cultura-green-primary)]">
                <p className="text-lg italic text-[var(--cultura-text-secondary)]">
                  &quot;Mi rol, como guía local, es ser el{" "}
                  <b>puente respetuoso</b> {/* LÍNEA 846: " -> &quot; */}
                  entre el visitante y este ecosistema sagrado. Se requiere
                  <b> humildad, silencio y apertura</b> para recibir la
                  enseñanza del páramo. Te acompañaré para que el esfuerzo
                  físico se convierta en una herramienta de liberación
                  interior.&quot; {/* LÍNEA 846: " -> &quot; */}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-gradient-to-r from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] px-8 py-3 text-lg font-bold text-[var(--cultura-white)] hover:from-[var(--cultura-terracotta)] hover:to-[var(--cultura-sand-accent)] transition-all shadow-xl hover:shadow-2xl"
            >
              ¡Sí, quiero esta transformación!
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Etapas Mejorada */}
      <section
        id="etapas"
        ref={etapasRef}
        className="py-20 bg-[var(--cultura-white)] relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--cultura-text-primary)] mb-4">
              Las 7 Etapas de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cultura-green-primary)] to-[var(--cultura-sand-accent)]">
                Liberación Espiritual
              </span>
            </h2>
            <p className="text-xl text-[var(--cultura-text-secondary)] max-w-3xl mx-auto">
              Cada etapa está diseñada cuidadosamente para guiarte en un proceso
              de transformación interior, combinando el esfuerzo físico con
              prácticas espirituales ancestrales.
            </p>
          </div>

          {/* Navegación de etapas - Adaptada para carrusel en móvil */}
          <div
            className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-4 custom-scrollbar"
            ref={navButtonsRef}
          >
            <div className="flex space-x-2 md:space-x-4 bg-[var(--cultura-white)]/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg flex-shrink-0 md:flex-wrap">
              {etapas.map((etapa) => (
                <button
                  key={etapa.id}
                  data-etapa-id={etapa.id} // Atributo para el scroll horizontal
                  onClick={() => handleEtapaClick(etapa.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all flex-shrink-0 ${
                    etapaActiva === etapa.id
                      ? `bg-gradient-to-r ${etapa.color} text-[var(--cultura-white)] shadow-md`
                      : "text-[var(--cultura-text-secondary)] hover:bg-[var(--cultura-gray)]/50"
                  }`}
                >
                  <span className="text-xl">{etapa.icono}</span>
                  <span className="font-medium whitespace-nowrap">
                    Etapa {etapa.id}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* Estilo CSS para hacer el carrusel en móvil */}
          <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
              height: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: var(--cultura-gray);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: var(--cultura-white);
            }
          `}</style>

          {/* Contenido de etapas */}
          <div className="space-y-16">
            {etapas.map((etapa) => (
              <div
                key={etapa.id}
                id={`etapa-${etapa.id}`}
                className={`bg-[var(--cultura-white)] rounded-3xl shadow-xl overflow-hidden transition-all duration-500 ${
                  etapaActiva === etapa.id
                    ? "ring-2 ring-[var(--cultura-green-primary)]/30 transform scale-[1.02]"
                    : ""
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <div
                      className="h-64 md:h-full bg-cover bg-center flex items-center justify-center"
                      style={{ backgroundImage: `url(${etapa.imagen})` }}
                    >
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    <div className="absolute top-6 left-6 z-10">
                      <div
                        className={`bg-gradient-to-r ${etapa.color} text-[var(--cultura-white)] px-4 py-2 rounded-full font-bold text-lg shadow-lg`}
                      >
                        Etapa {etapa.id}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8 md:p-10">
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center bg-[var(--cultura-gray)]/30 px-3 py-1 rounded-full">
                        <svg
                          className="w-4 h-4 text-[var(--cultura-text-secondary)] mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-sm font-medium text-[var(--cultura-text-secondary)]">
                          {etapa.duracion}
                        </span>
                      </div>
                      <div className="flex items-center bg-[var(--cultura-gray)]/30 px-3 py-1 rounded-full">
                        <svg
                          className="w-4 h-4 text-[var(--cultura-text-secondary)] mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          ></path>
                        </svg>
                        <span className="text-sm font-medium text-[var(--cultura-text-secondary)]">
                          {etapa.altitud}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--cultura-text-primary)] mb-3">
                      {etapa.nombre}
                    </h3>
                    <div className="mb-6">
                      <span className="inline-block bg-gradient-to-r from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] text-[var(--cultura-white)] px-4 py-1 rounded-full text-sm font-semibold">
                        {etapa.focoEspiritual}
                      </span>
                    </div>
                    <p className="text-[var(--cultura-text-secondary)] text-lg leading-relaxed mb-6">
                      {etapa.objetivo}
                    </p>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => openModal(etapa)}
                        className="bg-[var(--cultura-green-primary)] hover:bg-[var(--cultura-green-dark)] text-[var(--cultura-white)] px-6 py-2 rounded-full font-medium transition-colors flex items-center"
                      >
                        <span>Saber más</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </button>
                      <Link href="/Cultura/Galeria" passHref>
                        <button className="border border-[var(--cultura-gray)] hover:border-[var(--cultura-text-secondary)] text-[var(--cultura-text-secondary)] px-6 py-2 rounded-full font-medium transition-colors">
                          Ver galería
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Testimonios Mejorada */}
      <section
        id="testimonios"
        className="py-20 bg-gradient-to-br from-[var(--cultura-green-dark)] to-[var(--cultura-terracotta)] text-[var(--cultura-white)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Voces de Transformación
            </h2>
            <p className="text-xl text-[var(--cultura-white)]/90 max-w-3xl mx-auto">
              Descubre las experiencias de quienes ya han recorrido este camino
              espiritual en la Sierra Nevada del Cocuy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[var(--cultura-white)]/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col items-center text-center mb-8">
                <h3 className="text-2xl font-bold mb-1">
                  {testimonios[testimonioActivo].nombre}
                </h3>
                <p className="text-[var(--cultura-white)]/80 mb-4">
                  {testimonios[testimonioActivo].fecha}
                </p>
                <div className="flex">
                  {[...Array(7)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonios[testimonioActivo].rating
                          ? "text-[var(--cultura-sand-accent)]"
                          : "text-[var(--cultura-white)]/40"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-center italic leading-relaxed mb-8">
                &quot;{testimonios[testimonioActivo].contenido}&quot;
              </blockquote>

              <div className="flex justify-center space-x-2">
                {testimonios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonioActivo(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      testimonioActivo === index
                        ? "bg-[var(--cultura-white)]"
                        : "bg-[var(--cultura-white)]/40"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección FAQ Mejorada */}
      <section id="faq" className="py-20 bg-[var(--cultura-white)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--cultura-text-primary)] mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-[var(--cultura-text-secondary)] max-w-3xl mx-auto">
              Resolvemos tus dudas sobre esta experiencia transformadora en la
              Sierra Nevada del Cocuy.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {preguntasFrecuentes.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-[var(--cultura-gray)] last:border-b-0"
              >
                <button
                  onClick={() => handleFaqToggle(faq.id)}
                  className="flex justify-between items-center w-full py-6 text-left font-semibold text-lg text-[var(--cultura-text-primary)] hover:text-[var(--cultura-green-primary)] transition-colors"
                >
                  <span>{faq.pregunta}</span>
                  <svg
                    className={`w-5 h-5 text-[var(--cultura-green-primary)] transition-transform ${
                      faqAbierta === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    faqAbierta === faq.id ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-[var(--cultura-text-secondary)] leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Componente: Renderizado condicional del nuevo modal */}
      {modalState.etapa && (
        <EtapaModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          etapa={modalState.etapa}
        />
      )}
    </div>
  );
};

export default SenderosEspiritualesPage;
