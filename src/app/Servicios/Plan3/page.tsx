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
  id: 3,
  title: "Tour a la Laguna Grande de la Sierra",
  subtitle: "Espejo natural entre montañas",
  image: "/planes/plan3.jpg",
  description:
    "Una ruta mágica hacia la Laguna Grande de la Sierra, donde las aguas cristalinas reflejan las cumbres nevadas en un espectáculo natural incomparable. Este tour es perfecto para amantes de la naturaleza y la fotografía, ofreciendo una experiencia inmersiva en el corazón del páramo andino.",
  duration: "2 días / 1 noche",
  difficulty: "Media",
  groupSize: "Máximo 10 personas",
  price: "$420.000 COP por persona",
  rating: 5.0,
  reviews: 68,
  location: "Parque Nacional Natural El Cocuy, Boyacá",
  bestSeason: "Diciembre a Febrero y Julio a Agosto",
  altitude: "4,000 metros sobre el nivel del mar",
  elevationGain: "600 metros acumulados",
  itinerary: [
    {
      day: 1,
      title: "Caminata al campamento base",
      description:
        "Encuentro en Güicán y traslado a la entrada del parque. Realizaremos una caminata por un sendero de frailejones hasta llegar al campamento base, cerca de la Laguna Grande, donde armaremos las tiendas para pasar la noche.",
      distance: "7 km",
      elevation: "3,200 - 4,000 m",
      duration: "5-6 horas",
    },
    {
      day: 2,
      title: "Exploración de la laguna y regreso",
      description:
        "Disfrutaremos de un amanecer mágico en la laguna, exploraremos sus alrededores y las lagunas secundarias. Después de un almuerzo en el campamento, desarmaremos el equipo para regresar por el mismo sendero.",
      distance: "7 km",
      elevation: "4,000 - 3,200 m",
      duration: "4-5 horas",
    },
  ],
  highlights: [
    "Lagunas glaciares de colores turquesa y azul profundo",
    "Caminata por el majestuoso valle de frailejones",
    "Avistamiento de venados, cóndores y fauna local",
    "Campamento en un entorno natural privilegiado",
  ],
  included: [
    "Guía certificado",
    "Alimentación completa (1 desayuno, 2 almuerzos, 1 cena)",
    "Equipo de campamento (carpa, aislante, sleeping)",
    "Seguro de accidentes",
    "Transporte desde Güicán hasta la entrada del parque",
  ],
  notIncluded: [
    "Transporte hasta Güicán",
    "Equipo personal (botas, ropa, mochila, etc.)",
    "Bebidas alcohólicas y gastos personales",
    "Propinas para guías",
  ],
  whatToBring: [
    "Botas de montaña impermeables (obligatorio)",
    "Ropa por capas (térmica, fleece, impermeable)",
    "Mochila de 30-40 litros con protector de lluvia",
    "Protector solar, gafas de sol y gorra",
    "Frontal o linterna con baterías extra",
    "Kit personal de higiene y medicamentos",
  ],
  faqs: [
    {
      question: "¿Es apto para personas sin experiencia?",
      answer:
        "Sí. Este tour es de dificultad media, ideal para principiantes con una condición física moderada que deseen incursionar en el senderismo de montaña. No requiere experiencia técnica ni en glaciares.",
    },
    {
      question: "¿Qué tan frías son las noches en el campamento?",
      answer:
        "Las temperaturas pueden descender por debajo de los 0°C. Es fundamental contar con un buen equipo de campamento, como el sleeping y el aislante que proporcionamos, además de llevar ropa térmica adecuada.",
    },
    {
      question: "¿Puedo ver los picos nevados desde la laguna?",
      answer:
        "Sí. La Laguna Grande de la Sierra ofrece vistas espectaculares de los picos nevados del Cocuy. En días despejados, el reflejo de las cumbres en el agua es uno de los mayores atractivos de la ruta.",
    },
  ],
  gallery: [
    "/gallery/laguna-grande-1.jpg",
    "/gallery/laguna-grande-2.jpg",
    "/gallery/laguna-grande-3.jpg",
    "/gallery/laguna-grande-4.jpg",
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
          content="laguna grande, sierra nevada del cocuy, páramo, caminata, boyacá, trekking, fotografía, laguna"
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
