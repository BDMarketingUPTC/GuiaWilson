"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
  FaMapMarkerAlt,
  FaChevronRight,
  FaWhatsapp,
} from "react-icons/fa";

// Datos de los planes actualizados con la nueva información
const plansData = [
  {
    id: 1,
    title: "Ascenso al Pico Pan de Azúcar",
    subtitle: "Conquista la cumbre más alta del Cocuy",
    image: "/planes/plan1.jpg",
    description:
      "Ascenso al imponente Pan de Azúcar (5,150 m), el pico más alto de la Sierra Nevada del Cocuy. Una experiencia para aventureros con buena condición física.",
    duration: "3 días / 2 noches",
    difficulty: "Alta",
    groupSize: "Máximo 6 personas",
    price: "$650.000 COP",
    rating: 4.9,
    reviews: 42,
    location: "Parque Nacional El Cocuy",
    altitude: "5,150 m.s.n.m",
    highlights: [
      "Vistas panorámicas desde la cumbre",
      "Acompañamiento de guía especializado",
      "Caminata por glaciares y páramo",
      "Avistamiento de cóndores y fauna andina",
    ],
    included: [
      "Guía certificado",
      "Alimentación completa",
      "Equipo de seguridad",
      "Seguro de accidentes",
      "Transporte desde Güicán",
    ],
    notIncluded: [
      "Equipo personal (botas, sleeping, etc.)",
      "Bebidas alcohólicas",
      "Gastos no especificados",
    ],
  },
  {
    id: 2,
    title: "Tour al Pico El Pulpito",
    subtitle: "La formación rocosa icónica",
    image: "/planes/plan2.jpg",
    description:
      "Descubre la emblemática formación rocosa conocida como El Pulpito, con sus impresionantes paredes verticales y vistas únicas del macizo montañoso.",
    duration: "2 días / 1 noche",
    difficulty: "Media-Alta",
    groupSize: "Máximo 8 personas",
    price: "$480.000 COP",
    rating: 4.7,
    reviews: 28,
    location: "Parque Nacional El Cocuy",
    altitude: "4,800 m.s.n.m",
    highlights: [
      "Vistas del valle de Frailejones",
      "Fotografía de paisajes únicos",
      "Encuentro con flora endémica",
      "Amanecer en las alturas",
    ],
    included: [
      "Guía certificado",
      "Alimentación completa",
      "Equipo de seguridad",
      "Seguro de accidentes",
      "Transporte desde Güicán",
    ],
    notIncluded: [
      "Equipo personal (botas, sleeping, etc.)",
      "Bebidas alcohólicas",
      "Gastos no especificados",
    ],
  },
  {
    id: 3,
    title: "Tour a la Laguna Grande de la Sierra",
    subtitle: "Espejo natural entre montañas",
    image: "/planes/plan3.jpg",
    description:
      "Una ruta mágica hacia la Laguna Grande de la Sierra, donde las aguas cristalinas reflejan las cumbres nevadas en un espectáculo natural incomparable.",
    duration: "2 días / 1 noche",
    difficulty: "Media",
    groupSize: "Máximo 10 personas",
    price: "$420.000 COP",
    rating: 4.8,
    reviews: 35,
    location: "Parque Nacional El Cocuy",
    altitude: "4,300 m.s.n.m",
    highlights: [
      "Lagunas glaciares de colores",
      "Caminata por valle de frailejones",
      "Avistamiento de venados y cóndores",
      "Campamento en entorno natural privilegiado",
    ],
    included: [
      "Guía certificado",
      "Alimentación completa",
      "Equipo de campamento",
      "Seguro de accidentes",
      "Transporte desde Güicán",
    ],
    notIncluded: [
      "Equipo personal (botas, sleeping, etc.)",
      "Bebidas alcohólicas",
      "Gastos no especificados",
    ],
  },
  {
    id: 4,
    title: "Expedición Completa Nevado del Cocuy",
    subtitle: "Experiencia integral en todos los nevados",
    image: "/planes/plan4.jpg",
    description:
      "La aventura definitiva: recorrido completo por los principales atractivos del Parque Nacional Natural El Cocuy. Incluye todos los picos, lagunas y valles.",
    duration: "5 días / 4 noches",
    difficulty: "Alta",
    groupSize: "Máximo 6 personas",
    price: "$1.200.000 COP",
    rating: 5.0,
    reviews: 18,
    location: "Parque Nacional El Cocuy",
    altitude: "5,150 m.s.n.m",
    highlights: [
      "Recorrido por todos los picos principales",
      "Acampada en múltiples localizaciones",
      "Avistamiento integral de flora y fauna",
      "Fotografía profesional de paisajes",
      "Experiencia de inmersión total",
    ],
    included: [
      "Guía certificado especializado",
      "Alimentación completa gourmet",
      "Todo el equipo de campamento y seguridad",
      "Seguro de accidentes ampliado",
      "Transporte ida y vuelta desde Güicán",
      "Permisos y entradas al parque",
    ],
    notIncluded: [
      "Equipo personal (botas, sleeping, etc.)",
      "Bebidas alcohólicas",
      "Gastos personales",
      "Propinas (opcionales)",
    ],
  },
];

type Plan = (typeof plansData)[0];

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Alta":
        return "bg-red-100 text-red-800 border-red-200";
      case "Media-Alta":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Media":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor()}`}
    >
      {difficulty}
    </span>
  );
};

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleQuoteClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const generateWhatsAppMessage = (plan: Plan) => {
    return `¡Hola! Estoy interesado en el tour "${plan.title}". ¿Podrían darme más información y disponibilidad?`;
  };

  return (
    <section className="bg-gradient-to-b from-[var(--neutral-white)] to-[var(--neutral-gray)] py-16 lg:py-24 snow-effect">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[var(--teal-accent)] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Aventuras en la Naturaleza
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--blue-primary)] mb-4">
            Descubre el Nevado del Cocuy
          </h2>
          <p className="text-lg text-[var(--neutral-text-secondary)] max-w-3xl mx-auto">
            Explora los paisajes más espectaculares de Colombia con nuestros
            planes diseñados para todo tipo de aventureros.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className="group bg-[var(--neutral-white)] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full border border-[var(--neutral-gray)]"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <DifficultyBadge difficulty={plan.difficulty} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-dark)]/80 to-transparent flex items-end p-5">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--neutral-white)] leading-tight mb-1">
                      {plan.title}
                    </h3>
                    <div className="flex items-center text-sm text-[var(--aqua-lake)]">
                      <FaMapMarkerAlt className="mr-1" />
                      <span>{plan.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-[var(--neutral-text-secondary)] text-sm mb-3 italic">
                  {plan.subtitle}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(plan.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-xs text-[var(--neutral-text-secondary)]">
                      ({plan.reviews})
                    </span>
                  </div>
                  <span className="text-xs font-medium bg-blue-50 text-[var(--blue-light)] px-2 py-1 rounded">
                    {plan.altitude}
                  </span>
                </div>

                <p className="text-[var(--neutral-text-primary)] text-sm mb-5 line-clamp-3">
                  {plan.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs text-[var(--neutral-text-secondary)] mb-5">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[var(--blue-light)]" />
                    {plan.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUsers className="text-[var(--aqua-lake)]" />
                    {plan.groupSize}
                  </span>
                </div>

                <div className="mt-auto pt-4 border-t border-[var(--neutral-gray)]">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-[var(--teal-accent)]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[var(--neutral-text-secondary)]">
                      por persona
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleQuoteClick(plan)}
                      className="flex-grow bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-primary)] text-[var(--neutral-white)] py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-2 text-sm"
                    >
                      <FaWhatsapp className="text-lg" />
                      Cotizar
                    </button>
                    <Link
                      href={`/Servicios/Plan${plan.id}`}
                      className="flex items-center justify-center w-12 h-12 border border-[var(--blue-light)] text-[var(--blue-light)] rounded-lg font-medium hover:bg-[var(--blue-light)] hover:text-[var(--neutral-white)] transition-colors duration-200"
                      title="Ver detalles"
                    >
                      <FaChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/Servicios"
            className="inline-flex items-center text-[var(--blue-primary)] font-semibold hover:text-[var(--teal-accent)] transition-colors"
          >
            Ver todos los tours disponibles
            <FaChevronRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Modal de Cotización Mejorado */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-[var(--neutral-white)] rounded-xl p-6 max-w-md w-full shadow-2xl relative animate-scale-in">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-[var(--neutral-text-secondary)] hover:text-[var(--neutral-text-primary)] transition-colors z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex items-start mb-4">
              <div className="relative h-16 w-16 rounded-lg overflow-hidden mr-4">
                <Image
                  src={selectedPlan.image}
                  alt={selectedPlan.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[var(--blue-primary)]">
                  {selectedPlan.title}
                </h2>
                <p className="text-sm text-[var(--neutral-text-secondary)]">
                  {selectedPlan.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-[var(--neutral-text-primary)] mb-6">
              <div>
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2 text-[var(--teal-accent)]">
                  <FaCheckCircle />
                  Servicios incluidos:
                </h3>
                <ul className="text-sm text-[var(--neutral-text-secondary)] space-y-1 pl-7">
                  {selectedPlan.included.map((item, index) => (
                    <li
                      key={index}
                      className="relative before:content-['✓'] before:absolute before:-left-4 before:text-[var(--teal-accent)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2 text-red-600">
                  <FaTimesCircle />
                  No incluido:
                </h3>
                <ul className="text-sm text-[var(--neutral-text-secondary)] space-y-1 pl-7">
                  {selectedPlan.notIncluded.map((item, index) => (
                    <li
                      key={index}
                      className="relative before:content-['×'] before:absolute before:-left-4 before:text-red-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-center text-[var(--blue-primary)] font-semibold text-lg">
                Precio: {selectedPlan.price} por persona
              </p>
              <p className="text-center text-xs text-[var(--neutral-text-secondary)] mt-1">
                Precios especiales para grupos
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/573114434181?text=${encodeURIComponent(
                  generateWhatsAppMessage(selectedPlan)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                Contactar por WhatsApp
              </a>
              <button
                onClick={handleCloseModal}
                className="text-[var(--neutral-text-secondary)] py-2 hover:text-[var(--neutral-text-primary)] transition-colors"
              >
                Continuar explorando
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
