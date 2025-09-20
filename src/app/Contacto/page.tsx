"use client";
import { useState } from "react";
import Head from "next/head";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Check,
  XCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Datos del formulario:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error al enviar formulario:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <>
      <Head>
        <title>Contacto | Guía Nevado del Cocuy</title>
        <meta
          name="description"
          content="Contacta a nuestro guía certificado para tours al Nevado del Cocuy"
        />
      </Head>

      <div className="min-h-screen bg-[var(--neutral-white)] text-[var(--neutral-text-primary)]">
        {/* Header */}
        <header className="bg-[var(--blue-dark)] text-[var(--neutral-white)] py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Contacto
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[var(--neutral-white)]">
              ¿Listo para aventurarte en el Nevado del Cocuy? Contáctanos para
              planificar tu experiencia inolvidable.
            </p>
          </div>
        </header>

        {/* Contenido principal */}
        <main className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Información de Contacto */}
              <div className="lg:col-span-1">
                <div className="bg-[var(--neutral-gray)] rounded-xl shadow-lg p-6 sticky top-6">
                  <h2 className="text-2xl font-bold text-[var(--blue-primary)] mb-6">
                    Información de Contacto
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-[var(--blue-light)]/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[var(--blue-light)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--blue-primary)]">
                          Ubicación
                        </h3>
                        <p className="text-[var(--neutral-text-secondary)]">
                          Guican, Boyacá, Colombia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[var(--teal-accent)]/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-[var(--teal-accent)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--blue-primary)]">
                          Email
                        </h3>
                        <p className="text-[var(--neutral-text-secondary)]">
                          info@nevadococuytours.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[var(--aqua-lake)]/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-[var(--aqua-lake)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--blue-primary)]">
                          Teléfono / WhatsApp
                        </h3>
                        <p className="text-[var(--neutral-text-secondary)]">
                          +57 3114435481
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[var(--blue-light)]/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-[var(--blue-light)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--blue-primary)]">
                          Horario de Atención
                        </h3>
                        <p className="text-[var(--neutral-text-secondary)]">
                          Lunes a Sábado: 7:00 am - 7:00 pm
                        </p>
                        <p className="text-[var(--neutral-text-secondary)]">
                          Domingo: 8:00 am - 12:00 m
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--neutral-gray)]">
                    <h3 className="font-semibold text-[var(--blue-primary)] mb-4">
                      Síguenos en redes sociales
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-[var(--neutral-white)] hover:bg-[var(--blue-light)]/20 text-[var(--neutral-text-secondary)] hover:text-[var(--blue-primary)] transition-colors p-3 rounded-full"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-[var(--neutral-white)] hover:bg-[var(--blue-light)]/20 text-[var(--neutral-text-secondary)] hover:text-[var(--blue-primary)] transition-colors p-3 rounded-full"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-[var(--neutral-white)] hover:bg-[var(--blue-light)]/20 text-[var(--neutral-text-secondary)] hover:text-[var(--blue-primary)] transition-colors p-3 rounded-full"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-[var(--neutral-white)] hover:bg-[var(--blue-light)]/20 text-[var(--neutral-text-secondary)] hover:text-[var(--blue-primary)] transition-colors p-3 rounded-full"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario de Contacto y FAQ */}
              <div className="lg:col-span-2">
                <div className="bg-[var(--neutral-gray)] rounded-xl shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-[var(--blue-primary)] mb-2">
                    Envía un mensaje
                  </h2>
                  <p className="text-[var(--neutral-text-secondary)] mb-8">
                    Completa el formulario y nos pondremos en contacto contigo
                    lo antes posible.
                  </p>

                  {submitStatus === "success" && (
                    <div className="bg-[var(--teal-accent)]/20 text-[var(--teal-accent)] p-4 rounded-lg mb-6 flex items-start">
                      <Check className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <p>
                        ¡Mensaje enviado con éxito! Nos pondremos en contacto
                        contigo pronto.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-500/10 text-red-600 p-4 rounded-lg mb-6 flex items-start">
                      <XCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <p>
                        Error al enviar el mensaje. Por favor, intenta
                        nuevamente.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[var(--blue-primary)] mb-1"
                        >
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[var(--neutral-gray)] rounded-lg focus:ring-2 focus:ring-[var(--blue-light)] focus:border-[var(--blue-light)] bg-[var(--neutral-white)] text-[var(--neutral-text-primary)]"
                          placeholder="Tu nombre completo"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[var(--blue-primary)] mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[var(--neutral-gray)] rounded-lg focus:ring-2 focus:ring-[var(--blue-light)] focus:border-[var(--blue-light)] bg-[var(--neutral-white)] text-[var(--neutral-text-primary)]"
                          placeholder="tu.email@ejemplo.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[var(--blue-primary)] mb-1"
                        >
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-[var(--neutral-gray)] rounded-lg focus:ring-2 focus:ring-[var(--blue-light)] focus:border-[var(--blue-light)] bg-[var(--neutral-white)] text-[var(--neutral-text-primary)]"
                          placeholder="+57 3114435481"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-[var(--blue-primary)] mb-1"
                        >
                          Asunto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[var(--neutral-gray)] rounded-lg focus:ring-2 focus:ring-[var(--blue-light)] focus:border-[var(--blue-light)] bg-[var(--neutral-white)] text-[var(--neutral-text-primary)]"
                        >
                          <option value="">Selecciona un asunto</option>
                          <option value="tour-information">
                            Información sobre tours
                          </option>
                          <option value="custom-tour">
                            Tour personalizado
                          </option>
                          <option value="group-booking">
                            Reserva para grupo
                          </option>
                          <option value="prices">Consulta de precios</option>
                          <option value="other">Otro asunto</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[var(--blue-primary)] mb-1"
                      >
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-[var(--neutral-gray)] rounded-lg focus:ring-2 focus:ring-[var(--blue-light)] focus:border-[var(--blue-light)] bg-[var(--neutral-white)] text-[var(--neutral-text-primary)]"
                        placeholder="Cuéntanos sobre tu interés en el tour, número de personas, fechas preferidas, etc."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--blue-primary)] hover:bg-[var(--blue-dark)] text-[var(--neutral-white)] font-medium py-3 px-4 rounded-full transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          "Enviar mensaje"
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-[var(--blue-primary)] mb-6">
                    Preguntas frecuentes
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-[var(--neutral-gray)] rounded-xl p-5 shadow-lg">
                      <h3 className="font-semibold text-[var(--blue-primary)] mb-2">
                        ¿Cuál es la mejor época para visitar el Nevado del
                        Cocuy?
                      </h3>
                      <p className="text-[var(--neutral-text-secondary)]">
                        La temporada seca, entre diciembre y marzo, es ideal
                        para visitar el nevado, ya que hay menos precipitaciones
                        y mejor visibilidad.
                      </p>
                    </div>

                    <div className="bg-[var(--neutral-gray)] rounded-xl p-5 shadow-lg">
                      <h3 className="font-semibold text-[var(--blue-primary)] mb-2">
                        ¿Se necesita experiencia previa para realizar los tours?
                      </h3>
                      <p className="text-[var(--neutral-text-secondary)]">
                        Ofrecemos rutas para todos los niveles, desde
                        principiantes hasta excursionistas experimentados. Te
                        asesoraremos según tu condición física y experiencia.
                      </p>
                    </div>

                    <div className="bg-[var(--neutral-gray)] rounded-xl p-5 shadow-lg">
                      <h3 className="font-semibold text-[var(--blue-primary)] mb-2">
                        ¿Qué debo llevar para el tour?
                      </h3>
                      <p className="text-[var(--neutral-text-secondary)]">
                        Te enviaremos una lista completa de equipo necesario
                        después de reservar, que incluye ropa abrigada,
                        protección solar, botas de trekking y más.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
