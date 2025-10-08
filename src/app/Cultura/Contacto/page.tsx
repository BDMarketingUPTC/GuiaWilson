"use client";
import { useState, useCallback } from "react";
import Head from "next/head";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Check,
  XCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Define la URL del script de Google Apps Script (GAS)
const GAS_WEB_APP_URL = process.env.NEXT_PUBLIC_GAS_WEB_APP_URL;
const SECURITY_KEY = process.env.NEXT_PUBLIC_GAS_SECURITY_KEY;

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// Componente del Spinner de Carga
const LoadingSpinner = () => (
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
);

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    if (!GAS_WEB_APP_URL || !SECURITY_KEY) {
      console.error("GAS_WEB_APP_URL o SECURITY_KEY no están configurados.");
      setSubmitStatus("error");
      return;
    }

    // Los datos a enviar, incluyendo la clave de seguridad
    const payload = {
      ...formData,
      securityKey: SECURITY_KEY,
    };

    try {
      const response = await fetch(GAS_WEB_APP_URL, {
        method: "POST",
        mode: "cors", // Importante para GAS
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // Tipo de contenido que GAS puede manejar (simula formulario)
        },
        body: JSON.stringify(payload),
      });

      // GAS siempre devuelve 200, la respuesta real está en el JSON
      const result = await response.json();

      if (result.result === "success") {
        setSubmitStatus("success");
        setFormData(initialState); // Limpiar formulario
      } else {
        console.error("Error del servidor GAS:", result.message);
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error al enviar formulario:", error);
    } finally {
      // Opcional: restablecer a "idle" después de 5 segundos
      // setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const isSubmitting = submitStatus === "loading";

  return (
    <>
      <Head>
        <title>Contacto | Guía Nevado del Cocuy</title>
        <meta
          name="description"
          content="Contacta a nuestro guía certificado para tours al Nevado del Cocuy"
        />
      </Head>

      {/* Uso de la nueva paleta de colores */}
      <div className="min-h-screen bg-[var(--cultura-white)] text-[var(--cultura-text-primary)]">
        {/* Header - Fondo: Verde Oscuro */}
        <header className="bg-[var(--cultura-green-dark)] text-[var(--cultura-white)] py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Contacto
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[var(--cultura-white)]">
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
                {/* Fondo: Gris de Cultura */}
                <div className="bg-[var(--cultura-gray)] rounded-xl shadow-lg p-6 sticky top-6">
                  {/* Título: Verde Primario */}
                  <h2 className="text-2xl font-bold text-[var(--cultura-green-primary)] mb-6">
                    Información de Contacto
                  </h2>

                  <div className="space-y-6">
                    {/* Tarjetas de Información */}
                    <div className="flex items-start">
                      {/* Icono Ubicación: Verde Claro */}
                      <div className="bg-[var(--cultura-green-light)]/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[var(--cultura-green-light)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--cultura-green-primary)]">
                          Ubicación
                        </h3>
                        <p className="text-[var(--cultura-text-secondary)]">
                          Guican, Boyacá, Colombia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      {/* Icono Email: Arena Accent */}
                      <div className="bg-[var(--cultura-sand-accent)]/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-[var(--cultura-sand-accent)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--cultura-green-primary)]">
                          Email
                        </h3>
                        <p className="text-[var(--cultura-text-secondary)]">
                          info@nevadococuytours.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      {/* Icono Teléfono: Terracota */}
                      <div className="bg-[var(--cultura-terracotta)]/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-[var(--cultura-terracotta)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--cultura-green-primary)]">
                          Teléfono / WhatsApp
                        </h3>
                        <p className="text-[var(--cultura-text-secondary)]">
                          +57 3114435481
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      {/* Icono Horario: Verde Claro */}
                      <div className="bg-[var(--cultura-green-light)]/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-[var(--cultura-green-light)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--cultura-green-primary)]">
                          Horario de Atención
                        </h3>
                        <p className="text-[var(--cultura-text-secondary)]">
                          Lunes a Sábado: 7:00 am - 7:00 pm
                        </p>
                        <p className="text-[var(--cultura-text-secondary)]">
                          Domingo: 8:00 am - 12:00 m
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Redes Sociales */}
                  <div className="mt-8 pt-6 border-t border-[var(--cultura-gray)]">
                    <h3 className="font-semibold text-[var(--cultura-green-primary)] mb-4">
                      Síguenos en redes sociales
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/wilson.correa.1865"
                        target="_blank"
                        // Fondo: Blanco de Cultura, Hover: Verde Claro/20, Texto: Gris secundario, Hover Texto: Verde Primario
                        className="bg-[var(--cultura-white)] hover:bg-[var(--cultura-green-light)]/20 text-[var(--cultura-text-secondary)] hover:text-[var(--cultura-green-primary)] transition-colors p-3 rounded-full"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>

                      <a
                        href="https://www.instagram.com/wilsonwikanes_5.330/"
                        target="_blank"
                        className="bg-[var(--cultura-white)] hover:bg-[var(--cultura-green-light)]/20 text-[var(--cultura-text-secondary)] hover:text-[var(--cultura-green-primary)] transition-colors p-3 rounded-full"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://wa.me/573114435481?text=Hola,%20quiero%20más%20información%20sobre%20tu%20servicio"
                        target="_blank"
                        className="bg-[var(--cultura-white)] hover:bg-[var(--cultura-green-light)]/20 text-[var(--cultura-text-secondary)] hover:text-[var(--cultura-green-primary)] transition-colors p-3 rounded-full"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario de Contacto */}
              <div className="lg:col-span-2">
                {/* Fondo: Gris de Cultura */}
                <div className="bg-[var(--cultura-gray)] rounded-xl shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-[var(--cultura-green-primary)] mb-2">
                    Envía un mensaje
                  </h2>

                  {/* Mensajes de estado (Reemplaza el formulario en caso de éxito) */}
                  {submitStatus === "success" ? (
                    // Mensaje de éxito: Fondo Verde Claro/10, Texto Verde Primario
                    <div className="text-center py-20 bg-[var(--cultura-green-light)]/10 rounded-xl">
                      <Check className="w-16 h-16 text-[var(--cultura-green-primary)] mx-auto mb-6" />
                      <h3 className="text-3xl font-extrabold text-[var(--cultura-green-primary)] mb-4">
                        ¡Mensaje Enviado con Éxito!
                      </h3>
                      <p className="text-xl text-[var(--cultura-text-primary)] max-w-md mx-auto">
                        Agradecemos tu interés. Nuestro guía se pondrá en
                        contacto contigo muy pronto para planificar tu aventura.
                      </p>
                      <button
                        onClick={() => setSubmitStatus("idle")}
                        // Botón: Verde Primario, Hover: Verde Oscuro
                        className="mt-6 bg-[var(--cultura-green-primary)] hover:bg-[var(--cultura-green-dark)] text-[var(--cultura-white)] font-medium py-2 px-6 rounded-full transition-colors"
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-[var(--cultura-text-secondary)] mb-8">
                        Completa el formulario y nos pondremos en contacto
                        contigo lo antes posible.
                      </p>

                      {/* Mensaje de Error */}
                      {submitStatus === "error" && (
                        // Mensaje de Error: Fondo Terracota/10, Texto Terracota
                        <div className="bg-[var(--cultura-terracotta)]/10 text-[var(--cultura-terracotta)] p-4 rounded-lg mb-6 flex items-start">
                          <XCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                          <p>
                            Error al enviar el mensaje. Por favor, intenta
                            nuevamente. Si el problema persiste, contáctanos por
                            WhatsApp.
                          </p>
                        </div>
                      )}

                      {/* Formulario */}
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-[var(--cultura-green-primary)] mb-1"
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
                              // Input: Border Gris, Focus Anillo Verde Claro, Fondo Blanco Cultura
                              className="w-full px-4 py-2 border border-[var(--cultura-gray)] rounded-lg focus:ring-2 focus:ring-[var(--cultura-green-light)] focus:border-[var(--cultura-green-light)] bg-[var(--cultura-white)] text-[var(--cultura-text-primary)]"
                              placeholder="Tu nombre completo"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-[var(--cultura-green-primary)] mb-1"
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
                              className="w-full px-4 py-2 border border-[var(--cultura-gray)] rounded-lg focus:ring-2 focus:ring-[var(--cultura-green-light)] focus:border-[var(--cultura-green-light)] bg-[var(--cultura-white)] text-[var(--cultura-text-primary)]"
                              placeholder="tu.email@ejemplo.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-[var(--cultura-green-primary)] mb-1"
                            >
                              Teléfono
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-[var(--cultura-gray)] rounded-lg focus:ring-2 focus:ring-[var(--cultura-green-light)] focus:border-[var(--cultura-green-light)] bg-[var(--cultura-white)] text-[var(--cultura-text-primary)]"
                              placeholder="+57 3114435481"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium text-[var(--cultura-green-primary)] mb-1"
                            >
                              Asunto *
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-[var(--cultura-gray)] rounded-lg focus:ring-2 focus:ring-[var(--cultura-green-light)] focus:border-[var(--cultura-green-light)] bg-[var(--cultura-white)] text-[var(--cultura-text-primary)]"
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
                              <option value="prices">
                                Consulta de precios
                              </option>
                              <option value="other">Otro asunto</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-[var(--cultura-green-primary)] mb-1"
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
                            className="w-full px-4 py-2 border border-[var(--cultura-gray)] rounded-lg focus:ring-2 focus:ring-[var(--cultura-green-light)] focus:border-[var(--cultura-green-light)] bg-[var(--cultura-white)] text-[var(--cultura-text-primary)]"
                            placeholder="Cuéntanos sobre tu interés en el tour, número de personas, fechas preferidas, etc."
                          ></textarea>
                        </div>

                        <div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            // Botón: Verde Primario, Hover: Verde Oscuro
                            className="w-full bg-[var(--cultura-green-primary)] hover:bg-[var(--cultura-green-dark)] text-[var(--cultura-white)] font-medium py-3 px-4 rounded-full transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <LoadingSpinner />
                                Enviando...
                              </>
                            ) : (
                              "Enviar mensaje"
                            )}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-[var(--cultura-green-primary)] mb-6">
                    Preguntas frecuentes
                  </h2>
                  <div className="space-y-4">
                    {/* Tarjeta de FAQ: Fondo Gris Cultura */}
                    <div className="bg-[var(--cultura-gray)] rounded-xl p-5 shadow-lg">
                      <h3 className="font-semibold text-[var(--cultura-green-primary)] mb-2">
                        ¿Cuál es la mejor época para visitar el Nevado del
                        Cocuy?
                      </h3>
                      <p className="text-[var(--cultura-text-secondary)]">
                        La temporada seca, entre diciembre y marzo, es ideal
                        para visitar el nevado, ya que hay menos precipitaciones
                        y mejor visibilidad.
                      </p>
                    </div>

                    <div className="bg-[var(--cultura-gray)] rounded-xl p-5 shadow-lg">
                      <h3 className="font-semibold text-[var(--cultura-green-primary)] mb-2">
                        ¿Se necesita experiencia previa para realizar los tours?
                      </h3>
                      <p className="text-[var(--cultura-text-secondary)]">
                        Ofrecemos rutas para todos los niveles, desde
                        principiantes hasta excursionistas experimentados. Te
                        asesoraremos según tu condición física y experiencia.
                      </p>
                    </div>

                    <div className="bg-[var(--cultura-gray)] rounded-xl p-5 shadow-lg">
                      <h3 className="font-semibold text-[var(--cultura-green-primary)] mb-2">
                        ¿Qué debo llevar para el tour?
                      </h3>
                      <p className="text-[var(--cultura-text-secondary)]">
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
