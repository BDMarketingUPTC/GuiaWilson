"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Check,
  X,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  Shield,
  Heart,
  Navigation,
  Thermometer,
  BarChart3,
} from "lucide-react";

interface TourPlan {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  price: string;
  rating: number;
  reviews: number;
  location: string;
  bestSeason: string;
  altitude: string;
  elevationGain: string;
  itinerary: DayItinerary[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  whatToBring: string[];
  faqs: FAQ[];
  gallery: string[];
}

interface DayItinerary {
  day: number;
  title: string;
  description: string;
  distance: string;
  elevation: string;
  duration: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const planData: TourPlan = {
  id: 4,
  title: "Tour Completo Nevado del Cocuy",
  subtitle: "Experiencia integral en todos los nevados",
  image: "/planes/plan4.jpg",
  description:
    "La aventura definitiva: un recorrido épico y completo por los principales atractivos del Parque Nacional Natural El Cocuy. Esta expedición incluye el ascenso a varios picos, la exploración de lagunas y la travesía por valles remotos, ofreciendo una inmersión total en la belleza y el desafío de la alta montaña andina.",
  duration: "5 días / 4 noches",
  difficulty: "Alta",
  groupSize: "Máximo 6 personas",
  price: "$1,200.000 COP por persona",
  rating: 5.0,
  reviews: 18,
  location: "Parque Nacional Natural El Cocuy, Boyacá",
  bestSeason: "Diciembre a Febrero y Julio a Agosto",
  altitude: "5,150 metros sobre el nivel del mar",
  elevationGain: "+2,000 metros acumulados",
  itinerary: [
    {
      day: 1,
      title: "Llegada y aclimatación en Güicán",
      description:
        "Encuentro en Güicán y traslado al alojamiento. Charla detallada sobre la expedición, revisión de equipo y una caminata suave para iniciar el proceso de aclimatación en las cercanías del pueblo.",
      distance: "3 km",
      elevation: "2,900 - 3,200 m",
      duration: "2-3 horas",
    },
    {
      day: 2,
      title: "Caminata al Valle de los Frailejones",
      description:
        "Ingresaremos al parque y comenzaremos la caminata por el valle, rodeados de frailejones milenarios. El día culmina con el armado de campamento en un punto estratégico para el siguiente día.",
      distance: "10 km",
      elevation: "3,200 - 4,000 m",
      duration: "6-7 horas",
    },
    {
      day: 3,
      title: "Ascenso al Pico El Pulpito",
      description:
        "Madrugaremos para el ascenso técnico a El Pulpito. Una vez en la cima, disfrutaremos de una vista inigualable del macizo y continuaremos la expedición hacia la zona de las lagunas.",
      distance: "12 km",
      elevation: "4,000 - 4,800 - 4,200 m",
      duration: "9-10 horas",
    },
    {
      day: 4,
      title: "Ruta de las Lagunas y Glaciar",
      description:
        "Exploraremos las lagunas glaciares de colores vibrantes y nos acercaremos al glaciar. Aquí, se brindarán instrucciones básicas de glaciarismo y seguridad. Acamparemos cerca de la Laguna Grande.",
      distance: "8 km",
      elevation: "4,200 - 4,600 m",
      duration: "5-6 horas",
    },
    {
      day: 5,
      title: "Ascenso al Pan de Azúcar y regreso",
      description:
        "El último gran desafío. Ascenderemos al Pico Pan de Azúcar. Tras la celebración, emprenderemos el largo descenso de regreso hasta el punto de partida y el transporte a Güicán.",
      distance: "15 km",
      elevation: "4,600 - 5,150 - 3,200 m",
      duration: "10-12 horas",
    },
  ],
  highlights: [
    "Recorrido por todos los picos principales y lagunas",
    "Acampada en múltiples localizaciones del parque",
    "Avistamiento integral de flora y fauna local",
    "Sesión de fotografía profesional de paisajes",
    "Guía certificado especializado en alta montaña",
  ],
  included: [
    "Guía certificado UIAGM (por cada 3 participantes)",
    "Alimentación completa gourmet durante la expedición",
    "Todo el equipo de campamento (carpas, sleeping bags)",
    "Equipo de seguridad para glaciar (crampones, piolet, arnés, casco)",
    "Seguro de accidentes y rescate ampliado",
    "Transporte ida y vuelta desde Güicán",
    "Permisos de ingreso al Parque Nacional",
  ],
  notIncluded: [
    "Equipo personal (botas de montaña, ropa térmica, etc.)",
    "Bebidas alcohólicas y gastos personales",
    "Transporte hasta Güicán",
    "Propinas para guías y equipo de apoyo",
  ],
  whatToBring: [
    "Botas de alta montaña (preferiblemente con suela rígida y Gore-Tex)",
    "Ropa de expedición en 3 capas (interior, aislante, exterior)",
    "Mochila de 50-60 litros para todo el equipo",
    "Sleeping bag para -10°C y aislante térmico",
    "Frontal, baterías de repuesto y power bank",
    "Documentos de identidad y carnet de seguro médico",
    "Protector solar, gafas de sol, gorro, guantes y buff",
  ],
  faqs: [
    {
      question: "¿Qué nivel de experiencia se requiere para este tour?",
      answer:
        "Este es un tour de alta exigencia, diseñado para montañistas experimentados. Se requiere excelente condición física y experiencia previa en trekking de varios días y a gran altitud. No es apto para principiantes.",
    },
    {
      question: "¿La comida es apta para dietas especiales?",
      answer:
        "Sí, podemos adaptar la alimentación a dietas vegetarianas, veganas o por alergias. Es crucial que nos lo comuniques con anticipación al momento de la reserva para poder preparar los alimentos adecuadamente.",
    },
    {
      question: "¿Hay comunicación durante el recorrido?",
      answer:
        "No hay señal de celular en la mayoría del parque. Nuestro equipo de guías cuenta con comunicación satelital para emergencias y seguimiento del recorrido, garantizando tu seguridad en todo momento.",
    },
  ],
  gallery: [
    "/gallery/tour-completo-1.jpg",
    "/gallery/tour-completo-2.jpg",
    "/gallery/tour-completo-3.jpg",
    "/gallery/tour-completo-4.jpg",
  ],
};

const whatsappMessage = `¡Hola! Estoy muy interesado(a) en el tour más completo del Nevado del Cocuy. Quisiera recibir más información y cotizar la expedición de 5 días.`;
const whatsappLink = `https://wa.me/573114434181?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function TourDetailPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Alta":
        return "bg-red-500/10 text-red-500 border border-red-500/20";
      case "Media-Alta":
        return "bg-orange-500/10 text-orange-500 border border-orange-500/20";
      case "Media":
        return "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border border-gray-500/20";
    }
  };

  const toggleItinerary = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>
          {planData.title} | Aventuras El Cocuy - Guías Certificados
        </title>
        <meta name="description" content={planData.description} />
        <meta
          name="keywords"
          content="tour completo, sierra nevada del cocuy, montañismo colombia, expedición, trekking, alta montaña, boyacá"
        />
      </Head>

      <div className="min-h-screen bg-[var(--neutral-white)] text-[var(--neutral-text-primary)]">
        {/* Banner principal con imagen y título */}
        <header className="relative w-full h-80 md:h-[500px] overflow-hidden">
          <Image
            src={planData.image}
            alt={planData.title}
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--blue-dark)]/70 flex items-center justify-center p-4 text-center">
            <div className="relative z-10 text-[var(--neutral-white)] max-w-4xl">
              <Link
                href="/Servicios"
                className="absolute -top-16 left-0 text-sm flex items-center gap-2 text-[var(--neutral-white)] hover:text-[var(--aqua-lake)] transition-colors"
              >
                <ArrowLeft size={16} />
                Volver a tours
              </Link>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin size={18} className="text-[var(--aqua-lake)]" />
                <span className="text-sm font-medium">{planData.location}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">
                {planData.title}
              </h1>
              <p className="text-lg md:text-xl font-medium mb-6">
                {planData.subtitle}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-1 bg-[var(--blue-primary)]/70 px-3 py-1 rounded-full">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{planData.rating}</span>
                  <span className="text-sm">({planData.reviews} reviews)</span>
                </div>
                <div
                  className={
                    getDifficultyColor(planData.difficulty) +
                    " px-3 py-1 rounded-full text-sm font-semibold"
                  }
                >
                  {planData.difficulty}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Contenido principal del tour */}
        <main className="max-w-6xl mx-auto py-12 px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Columna izquierda: Descripción y detalles */}
            <div className="lg:col-span-2">
              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--blue-primary)] mb-4">
                  La Aventura
                </h2>
                <p className="text-lg text-[var(--neutral-text-secondary)] leading-relaxed mb-6">
                  {planData.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center text-center p-4 bg-[var(--neutral-gray)] rounded-lg border border-[var(--blue-light)]/10">
                    <Thermometer
                      size={24}
                      className="text-[var(--blue-primary)] mb-2"
                    />
                    <span className="font-semibold text-sm">
                      Altitud máxima
                    </span>
                    <span className="text-xs text-[var(--neutral-text-secondary)]">
                      {planData.altitude}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-[var(--neutral-gray)] rounded-lg border border-[var(--blue-light)]/10">
                    <BarChart3
                      size={24}
                      className="text-[var(--blue-primary)] mb-2"
                    />
                    <span className="font-semibold text-sm">
                      Desnivel acumulado
                    </span>
                    <span className="text-xs text-[var(--neutral-text-secondary)]">
                      {planData.elevationGain}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-[var(--neutral-gray)] rounded-lg border border-[var(--blue-light)]/10">
                    <Calendar
                      size={24}
                      className="text-[var(--blue-primary)] mb-2"
                    />
                    <span className="font-semibold text-sm">Mejor época</span>
                    <span className="text-xs text-[var(--neutral-text-secondary)]">
                      {planData.bestSeason}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-[var(--neutral-gray)] rounded-lg border border-[var(--blue-light)]/10">
                    <Navigation
                      size={24}
                      className="text-[var(--blue-primary)] mb-2"
                    />
                    <span className="font-semibold text-sm">
                      Tipo de terreno
                    </span>
                    <span className="text-xs text-[var(--neutral-text-secondary)]">
                      Glaciar, roca, páramo
                    </span>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--blue-primary)] mb-4 flex items-center gap-2">
                  <Clock size={24} />
                  Itinerario Detallado
                </h3>
                <div className="space-y-4">
                  {planData.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="border border-[var(--blue-light)]/20 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItinerary(day.day)}
                        className="w-full flex justify-between items-center p-4 bg-[var(--blue-light)]/5 hover:bg-[var(--blue-light)]/10 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--blue-primary)] text-[var(--neutral-white)] font-bold">
                            {day.day}
                          </div>
                          <h4 className="text-left font-semibold text-[var(--blue-primary)]">
                            {day.title}
                          </h4>
                        </div>
                        {expandedDay === day.day ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>
                      {expandedDay === day.day && (
                        <div className="p-4 bg-[var(--neutral-white)]">
                          <p className="mb-4 text-[var(--neutral-text-secondary)]">
                            {day.description}
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="text-center p-2 bg-[var(--neutral-gray)] rounded">
                              <span className="block font-semibold text-[var(--blue-primary)]">
                                Distancia
                              </span>
                              <span>{day.distance}</span>
                            </div>
                            <div className="text-center p-2 bg-[var(--neutral-gray)] rounded">
                              <span className="block font-semibold text-[var(--blue-primary)]">
                                Elevación
                              </span>
                              <span>{day.elevation}</span>
                            </div>
                            <div className="text-center p-2 bg-[var(--neutral-gray)] rounded">
                              <span className="block font-semibold text-[var(--blue-primary)]">
                                Duración
                              </span>
                              <span>{day.duration}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--blue-primary)] mb-4 flex items-center gap-2">
                  <Star
                    size={24}
                    className="text-yellow-500 fill-yellow-500/20"
                  />
                  Puntos Destacados del Tour
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                  {planData.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 bg-[var(--blue-light)]/5 rounded-lg border border-[var(--blue-light)]/10"
                    >
                      <Check
                        size={20}
                        className="text-[var(--teal-accent)] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--blue-primary)] mb-4 flex items-center gap-2">
                  <Heart size={24} className="text-red-500" />
                  Equipo Recomendado
                </h3>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                  <p className="text-amber-800 text-sm font-medium">
                    Importante: El equipo personal es responsabilidad del
                    participante y es esencial para su seguridad y comodidad
                    durante la expedición.
                  </p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
                  {planData.whatToBring.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-2 text-sm text-[var(--neutral-text-secondary)]"
                    >
                      <Check
                        size={16}
                        className="text-[var(--teal-accent)] flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--blue-primary)] mb-4 flex items-center gap-2">
                  <Shield size={24} className="text-[var(--teal-accent)]" />
                  Preguntas Frecuentes
                </h3>
                <div className="space-y-4">
                  {planData.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-[var(--blue-light)]/20 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center p-4 bg-[var(--blue-light)]/5 hover:bg-[var(--blue-light)]/10 transition-colors text-left"
                      >
                        <span className="font-medium text-[var(--blue-primary)]">
                          {faq.question}
                        </span>
                        {activeFAQ === index ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>
                      {activeFAQ === index && (
                        <div className="p-4 bg-[var(--neutral-white)]">
                          <p className="text-[var(--neutral-text-secondary)]">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Columna derecha: Resumen y CTA */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-[var(--neutral-white)] p-6 rounded-lg shadow-xl border border-[var(--blue-light)]/10">
                <h3 className="text-2xl font-bold text-[var(--blue-primary)] mb-4">
                  Reserva tu Aventura
                </h3>
                <p className="text-lg font-semibold text-[var(--teal-accent)] mb-2">
                  {planData.price}
                </p>
                <p className="text-sm text-[var(--neutral-text-secondary)] mb-6">
                  Precio por persona. Contáctanos para cotizaciones de grupo.
                </p>

                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-6"
                >
                  <button className="w-full bg-gradient-to-r from-[var(--teal-accent)] to-[var(--aqua-lake)] text-[var(--neutral-white)] py-4 px-6 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-2">
                    Reservar por WhatsApp
                  </button>
                </Link>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2 text-sm text-blue-800 mb-2">
                    <Shield size={16} />
                    <span className="font-semibold">Garantía de seguridad</span>
                  </div>
                  <p className="text-xs text-blue-700">
                    Guiado por profesionales con equipo de seguridad certificado
                    y protocolos de alta montaña.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[var(--blue-primary)] mb-3 flex items-center gap-2">
                      <Check size={18} className="text-[var(--teal-accent)]" />
                      Servicios incluidos:
                    </h4>
                    <ul className="space-y-2">
                      {planData.included.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-[var(--neutral-text-secondary)]"
                        >
                          <Check
                            size={16}
                            className="text-[var(--teal-accent)] flex-shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--blue-primary)] mb-3 flex items-center gap-2">
                      <X size={18} className="text-red-500" />
                      No incluido:
                    </h4>
                    <ul className="space-y-2">
                      {planData.notIncluded.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-[var(--neutral-text-secondary)]"
                        >
                          <X
                            size={16}
                            className="text-red-500 flex-shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--neutral-gray)]">
                  <h4 className="font-semibold text-[var(--blue-primary)] mb-3">
                    Política de cancelación
                  </h4>
                  <ul className="text-xs text-[var(--neutral-text-secondary)] space-y-1">
                    <li>• 15+ días antes: Reembolso del 80%</li>
                    <li>• 7-14 días antes: Reembolso del 50%</li>
                    <li>• 3-6 días antes: Reembolso del 25%</li>
                    <li>• Menos de 48 horas: No hay reembolso</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
