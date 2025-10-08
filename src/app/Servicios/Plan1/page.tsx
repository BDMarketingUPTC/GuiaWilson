"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Mountain,
  Users,
  DollarSign,
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
  id: 1,
  title: "Ascenso al Pico Pan de Azúcar",
  subtitle: "Conquista la cumbre más alta del Parque Nacional Natural El Cocuy",
  image: "/planes/plan1.jpg",
  description:
    "Experimenta una de las aventuras más desafiantes y gratificantes de Colombia con el ascenso al Pico Pan de Azúcar (5,150 m.s.n.m), el punto más alto de la Sierra Nevada del Cocuy. Esta expedición de 3 días está diseñada para montañistas con buena condición física que buscan enfrentarse a glaciares, páramos andinos y altitudes extremas, todo bajo la supervisión de guías certificados y con equipo de seguridad especializado.",
  duration: "3 días / 2 noches",
  difficulty: "Alta",
  groupSize: "Máximo 6 personas",
  price: "$650.000 COP por persona",
  rating: 4.9,
  reviews: 42,
  location: "Parque Nacional Natural El Cocuy, Boyacá",
  bestSeason: "Diciembre a Febrero y Julio a Agosto",
  altitude: "5,150 metros sobre el nivel del mar",
  elevationGain: "1,200 metros acumulados",
  itinerary: [
    {
      day: 1,
      title: "Llegada y aclimatación",
      description:
        "Encuentro en Güicán, traslado al alojamiento en la zona de entrada al parque. Charla informativa, revisión de equipo y caminata de aclimatación por los alrededores.",
      distance: "4 km",
      elevation: "3,200 - 3,500 m",
      duration: "3-4 horas",
    },
    {
      day: 2,
      title: "Ascenso al campamento base",
      description:
        "Caminata progresiva hacia el campamento base Laguna Grande de la Sierra, con espectaculares vistas de los picos nevados y avistamiento de fauna andina.",
      distance: "8 km",
      elevation: "3,500 - 4,200 m",
      duration: "6-7 horas",
    },
    {
      day: 3,
      title: "Ascenso a la cumbre y regreso",
      description:
        "Madrugada para el ascenso final al Pan de Azúcar. Técnicas básicas de glaciarismo. Celebración en la cumbre y descenso hasta el punto de inicio.",
      distance: "12 km",
      elevation: "4,200 - 5,150 - 3,200 m",
      duration: "10-12 horas",
    },
  ],
  highlights: [
    "Vistas panorámicas desde la cumbre más alta del Cocuy",
    "Acompañamiento de guía de alta montaña certificado",
    "Caminata sobre glaciar tropical (equipo especializado incluido)",
    "Avistamiento de cóndores, venados y fauna andina única",
    "Atardeceres inolvidables en el páramo",
    "Fotografía profesional de la experiencia (opcional)",
  ],
  included: [
    "Guía certificado UIAGM (por cada 3 participantes)",
    "Alimentación completa (desayuno, almuerzo tipo picnic y cena)",
    "Equipo de seguridad (crampones, piolet, arnés, casco)",
    "Seguro de accidentes y rescate",
    "Transporte desde Güicán hasta el punto de inicio",
    "Permisos de ingreso al Parque Nacional",
    "Alojamiento en refugios básicos (noche 1 y 2)",
  ],
  notIncluded: [
    "Equipo personal (botas de montaña, sleeping, mochila, etc.)",
    "Bebidas alcohólicas y gastos personales",
    "Transporte hasta Güicán",
    "Propinas para guías y equipo de apoyo",
    "Servicios no especificados en el plan",
  ],
  whatToBring: [
    "Botas de montaña impermeables (preferiblemente con Gore-Tex)",
    "Mochila de 40-50 litros con protector de lluvia",
    "Ropa térmica y de abrigo (primera, segunda y tercera capa)",
    "Sleeping bag para -10°C y aislante térmico",
    "Frontal o linterna con baterías de repuesto",
    "Protector solar factor 50+, lentes de sol y protector labial",
    "Documentos de identidad y carnet de seguro médico",
  ],
  faqs: [
    {
      question: "¿Qué condición física necesito para este tour?",
      answer:
        "Se requiere excelente condición física. Es recomendable tener experiencia previa en alta montaña (por encima de 4,000 m) y realizar entrenamiento cardiovascular previo (correr, ciclismo o senderismo) al menos 2 meses antes de la expedición.",
    },
    {
      question: "¿Hay riesgo de mal de altura?",
      answer:
        "Sí, al alcanzar los 5,150 m existe riesgo de mal de altura. Nuestros guías están entrenados para detectar síntomas tempranos y tomar las medidas necesarias, que pueden incluir descenso inmediato si fuera necesario.",
    },
    {
      question: "¿Qué medidas de seguridad tienen?",
      answer:
        "Contamos con protocolos de seguridad certificados, comunicación satelital, botiquín de primeros auxilios de alta montaña y oxímetro para medir saturación de oxígeno. Todos nuestros guías tienen certificación en Wilderness First Responder.",
    },
  ],
  gallery: [
    "/gallery/pan-de-azucar-1.jpg",
    "/gallery/pan-de-azucar-2.jpg",
    "/gallery/pan-de-azucar-3.jpg",
    "/gallery/pan-de-azucar-4.jpg",
  ],
};

const whatsappMessage = `¡Hola! Me gustaría cotizar y reservar el tour "${planData.title}". ¿Podrían darme más información? Estoy listo(a) para esta aventura.`;
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
          content="pan de azúcar, sierra nevada del cocuy, montañismo colombia, ascenso, glaciar, alta montaña, boyacá, trekking"
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
                  Descripción de la Aventura
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

              {/* Ficha de datos clave */}
              <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col items-center text-center p-4 bg-[var(--neutral-gray)] rounded-lg border border-[var(--blue-light)]/10">
                  <Clock
                    size={24}
                    className="text-[var(--blue-primary)] mb-2"
                  />
                  <span className="font-semibold text-sm">Duración</span>
                  <span className="text-xs text-[var(--neutral-text-secondary)]">
                    {planData.duration}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-[var(--neutral-gray)] rounded-lg border border-[var(--blue-light)]/10">
                  <Mountain
                    size={24}
                    className="text-[var(--blue-primary)] mb-2"
                  />
                  <span className="font-semibold text-sm">Dificultad</span>
                  <span
                    className={`text-xs font-bold ${getDifficultyColor(
                      planData.difficulty
                    )} px-2 py-1 rounded-full`}
                  >
                    {planData.difficulty}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-[var(--neutral-gray)] rounded-lg border border-[var(--blue-light)]/10">
                  <Users
                    size={24}
                    className="text-[var(--blue-primary)] mb-2"
                  />
                  <span className="font-semibold text-sm">Tamaño de Grupo</span>
                  <span className="text-xs text-[var(--neutral-text-secondary)]">
                    {planData.groupSize}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-[var(--neutral-gray)] rounded-lg border border-[var(--blue-light)]/10">
                  <DollarSign
                    size={24}
                    className="text-[var(--blue-primary)] mb-2"
                  />
                  <span className="font-semibold text-sm">Precio</span>
                  <span className="text-xs font-bold text-[var(--teal-accent)]">
                    {planData.price}
                  </span>
                </div>
              </section>

              {/* Itinerario del tour */}
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

              {/* Puntos destacados del tour */}
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

              {/* Qué llevar */}
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

              {/* FAQ Section */}
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
                  Precio por persona. Descuentos disponibles para grupos de 4+
                  personas.
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
                    Guiado por profesionales UIAGM con equipo de seguridad
                    certificado y protocolos de alta montaña.
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
