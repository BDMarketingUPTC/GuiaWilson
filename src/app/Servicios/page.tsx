"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";

// Define los tipos de la interfaz
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
  highlights: string[];
  included: string[];
  notIncluded: string[];
}

export default function ServicesPage() {
  const [addedPlans, setAddedPlans] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tourPlans: TourPlan[] = [
    {
      id: 1,
      title: "Tour al Pico Pan de Azúcar",
      subtitle: "La cumbre más alta del Cocuy",
      image: "/planes/plan1.jpg",
      description:
        "Ascenso al imponente Pan de Azúcar (5,150 m), el pico más alto de la Sierra Nevada del Cocuy. Una experiencia para aventureros con buena condición física.",
      duration: "3 días / 2 noches",
      difficulty: "Alta",
      groupSize: "Máximo 6 personas",
      price: "$650.000 COP por persona",
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
      price: "$480.000 COP por persona",
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
      price: "$420.000 COP por persona",
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
      title: "Tour Completo Nevado del Cocuy",
      subtitle: "Experiencia integral en todos los nevados",
      image: "/planes/plan4.jpg",
      description:
        "La aventura definitiva: recorrido completo por los principales atractivos del Parque Nacional Natural El Cocuy. Incluye todos los picos, lagunas y valles.",
      duration: "5 días / 4 noches",
      difficulty: "Alta",
      groupSize: "Máximo 6 personas",
      price: "$1,200.000 COP por persona",
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

  const handleAddPlan = (id: number) => {
    if (!addedPlans.includes(id)) {
      setAddedPlans([...addedPlans, id]);
    }
  };

  const handleRemovePlan = (id: number) => {
    setAddedPlans(addedPlans.filter((planId) => planId !== id));
  };

  const getSelectedPlans = () => {
    return tourPlans.filter((plan) => addedPlans.includes(plan.id));
  };

  // Función para generar el mensaje de WhatsApp
  const generateWhatsAppMessage = () => {
    const selectedTourTitles = getSelectedPlans()
      .map((plan) => `* ${plan.title} - ${plan.price}`)
      .join("\n");

    const message = `¡Hola! He seleccionado ${addedPlans.length} tour(s) y me gustaría obtener una cotización. Aquí está mi selección:\n\n${selectedTourTitles}\n\nPor favor, ayúdenme a confirmar la disponibilidad y los detalles. ¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/573114434181?text=${encodedMessage}`;
    return whatsappLink;
  };

  return (
    <>
      <Head>
        <title>Servicios y Tours | Guía Nevado del Cocuy</title>
        <meta
          name="description"
          content="Descubre nuestros tours especializados al Nevado del Cocuy y elige la aventura perfecta para ti"
        />
      </Head>

      <div className="min-h-screen bg-[var(--neutral-white)]">
        {/* Header */}
        <header className="bg-[var(--blue-primary)] text-[var(--neutral-white)] py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tours y Servicios
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[var(--neutral-text-secondary)]">
              Elige la aventura perfecta para explorar la majestuosidad del
              Nevado del Cocuy
            </p>
          </div>
        </header>

        {/* Sección de Tours */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {addedPlans.length > 0 && (
              <div className="bg-[var(--aqua-lake)] text-[var(--blue-primary)] p-4 rounded-lg mb-8 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <div>
                  <span className="font-semibold">
                    {addedPlans.length} tour(s) seleccionado(s)
                  </span>
                  <p className="text-sm">
                    Revisa tu selección en el botón flotante en la parte
                    inferior derecha.
                  </p>
                </div>
                <button
                  onClick={() => setAddedPlans([])}
                  className="bg-[var(--blue-primary)] text-[var(--neutral-white)] px-4 py-2 rounded-full text-sm hover:bg-[var(--blue-dark)] transition-colors"
                >
                  Limpiar selección
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tourPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-[var(--neutral-gray)] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
                    addedPlans.includes(plan.id)
                      ? "ring-2 ring-[var(--teal-accent)]"
                      : ""
                  }`}
                >
                  <div className="relative h-48 bg-[var(--neutral-text-secondary)] overflow-hidden">
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          plan.difficulty === "Alta"
                            ? "bg-red-500/80 text-white"
                            : plan.difficulty === "Media-Alta"
                            ? "bg-orange-500/80 text-white"
                            : "bg-[var(--blue-light)]/80 text-[var(--neutral-white)]"
                        }`}
                      >
                        {plan.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-[var(--blue-primary)] text-lg mb-1">
                      {plan.title}
                    </h3>
                    <p className="text-[var(--aqua-lake)] text-sm mb-3">
                      {plan.subtitle}
                    </p>
                    <p className="text-[var(--neutral-text-primary)] text-sm mb-4 line-clamp-3">
                      {plan.description}
                    </p>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[var(--neutral-text-secondary)] font-semibold">
                        {plan.duration}
                      </span>
                      <span className="text-[var(--teal-accent)] font-bold">
                        {plan.price}
                      </span>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Link href={`/Servicios/Plan${plan.id}`}>
                        <button className="w-full bg-[var(--blue-primary)] hover:bg-[var(--blue-light)] text-[var(--neutral-white)] py-2 px-4 rounded-full transition-colors text-sm font-medium">
                          Ver detalles del tour
                        </button>
                      </Link>

                      {addedPlans.includes(plan.id) ? (
                        <button
                          onClick={() => handleRemovePlan(plan.id)}
                          className="w-full border-2 border-[var(--teal-accent)] hover:bg-[var(--teal-accent)]/10 text-[var(--teal-accent)] py-2 px-4 rounded-full transition-colors text-sm font-medium flex items-center justify-center"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Quitar de la selección
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAddPlan(plan.id)}
                          className="w-full bg-[var(--teal-accent)] hover:bg-[var(--teal-accent)]/80 text-[var(--neutral-white)] py-2 px-4 rounded-full transition-colors text-sm font-medium flex items-center justify-center"
                        >
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          Agregar a mi plan
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Información adicional */}
            <div className="mt-12 bg-[var(--blue-light)]/10 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[var(--neutral-text-primary)] mb-4">
                ¿Necesitas ayuda para elegir?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-[var(--blue-light)]/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-[var(--blue-primary)]"
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
                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8a4 4 0 0 0-8 0m0 0h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-[var(--neutral-text-primary)]">
                    Asesoría personalizada
                  </h3>
                  <p className="text-sm text-[var(--neutral-text-secondary)]">
                    Te ayudamos a elegir el tour según tu condición física y
                    experiencia
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[var(--teal-accent)]/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-[var(--teal-accent)]"
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
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m8 8 4 4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-[var(--neutral-text-primary)]">
                    Grupos privados
                  </h3>
                  <p className="text-sm text-[var(--neutral-text-secondary)]">
                    ¿Viajas en grupo? Contáctanos para cotizaciones
                    personalizadas
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[var(--aqua-lake)]/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-[var(--aqua-lake)]"
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
                        d="M8 7h8m-8 4h8m-8 4h8M8 15h8M6 3v18l4-2 4 2 4-2 4 2V3l-4 2-4-2-4 2-4-2Z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-[var(--neutral-text-primary)]">
                    Equipo incluido
                  </h3>
                  <p className="text-sm text-[var(--neutral-text-secondary)]">
                    Ofrecemos alquiler de equipo especializado para alta montaña
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Botón flotante de cotización */}
        {addedPlans.length > 0 && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-6 right-6 z-50 transition-transform duration-300 transform hover:scale-105"
          >
            <div className="relative bg-[var(--teal-accent)] text-[var(--neutral-white)] rounded-full p-4 flex items-center justify-center shadow-lg animate-pulse-fast">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-xs font-bold">
                {addedPlans.length}
              </span>
            </div>
          </button>
        )}

        {/* Modal de Resumen de Cotización */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-[var(--blue-dark)] bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="bg-[var(--neutral-white)] rounded-lg max-w-lg w-full p-6 relative">
              <button
                className="absolute top-4 right-4 z-10 bg-[var(--neutral-white)] rounded-full p-2 hover:bg-[var(--neutral-gray)] transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-6 h-6 text-[var(--neutral-text-secondary)]" />
              </button>
              <h2 className="text-2xl font-bold text-[var(--blue-primary)] mb-4">
                Tu plan de tours
              </h2>
              <p className="text-[var(--neutral-text-secondary)] mb-6">
                Revisa los tours que has seleccionado antes de enviar tu
                cotización.
              </p>

              <div className="space-y-4 max-h-60 overflow-y-auto mb-6">
                {getSelectedPlans().map((plan) => (
                  <div
                    key={plan.id}
                    className="flex items-center space-x-4 bg-[var(--neutral-gray)] p-3 rounded-lg"
                  >
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      width={64}
                      height={64}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--blue-primary)]">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-[var(--neutral-text-secondary)]">
                        {plan.price}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemovePlan(plan.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-1/2 border-2 border-[var(--blue-primary)] text-[var(--blue-primary)] py-3 px-6 rounded-full font-bold hover:bg-[var(--blue-primary)] hover:text-white transition-colors"
                >
                  Revisar mi selección
                </button>
                <Link
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-1/2"
                >
                  <button className="w-full bg-[var(--teal-accent)] text-white py-3 px-6 rounded-full font-bold hover:bg-[var(--teal-accent)]/80 transition-colors">
                    Terminar cotización por WhatsApp
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
