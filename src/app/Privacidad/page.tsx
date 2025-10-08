"use client";

import Head from "next/head";
import { Shield, Lock, Send } from "lucide-react";

// Componente principal de la página de Política de Privacidad
export default function PrivacyPolicyPage() {
  const lastUpdated = "Octubre 2025";
  const guideName = "Tu Guía de Senderismo Wilson Correa"; // Placeholder para el nombre del guía

  return (
    <>
      <Head>
        <title>Política de Privacidad | Nevado del Cocuy Guía</title>
        <meta
          name="description"
          content={`Política de privacidad para los servicios de senderismo de ${guideName} en el Nevado del Cocuy.`}
        />
      </Head>

      <div className="min-h-screen bg-[var(--neutral-white2)]">
        {/* Encabezado Principal */}
        <div className="bg-[var(--blue-dark)] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-12 h-12 text-[var(--teal-accent)] mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--neutral-white)] mb-2">
              Política de Privacidad
            </h1>
            <p className="text-md text-[var(--aqua-lake)]">
              Última actualización: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Contenido de la Política */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* 1. Introducción */}
            <div className="p-6 bg-[var(--neutral-white)] rounded-xl shadow-lg border-l-4 border-[var(--teal-accent)]">
              <h2 className="text-2xl font-bold text-[var(--blue-primary)] mb-4">
                1. Compromiso con tu Privacidad
              </h2>
              <p className="text-[var(--neutral-text-primary)] leading-relaxed">
                Tu privacidad es fundamental. Esta política explica cómo{" "}
                <strong className="text-[var(--blue-dark)]">{guideName}</strong>{" "}
                recopila, utiliza, protege y divulga la información personal que
                nos proporcionas al reservar nuestros servicios de senderismo
                guiado en el Parque Nacional Natural El Cocuy.
              </p>
            </div>

            {/* 2. Información Recopilada */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--blue-primary)] border-b-2 border-[var(--neutral-gray)] pb-2 flex items-center gap-2">
                <Lock className="w-6 h-6 text-[var(--blue-light)]" />
                2. Tipos de Información que Recolectamos
              </h2>
              <p className="text-[var(--neutral-text-secondary)]">
                Recopilamos la información estrictamente necesaria para
                gestionar tu reserva y garantizar tu seguridad durante la
                caminata:
              </p>
              <ul className="space-y-3 p-4 bg-[var(--neutral-gray)] rounded-lg">
                <li>
                  <strong className="text-[var(--neutral-text-primary)]">
                    Datos de Contacto:
                  </strong>{" "}
                  Nombre completo, número de teléfono, correo electrónico y
                  nacionalidad.
                </li>
                <li>
                  <strong className="text-[var(--neutral-text-primary)]">
                    Datos de Identificación:
                  </strong>{" "}
                  Número de documento de identidad (requerido para permisos del
                  Parque).
                </li>
                <li>
                  <strong className="text-[var(--neutral-text-primary)]">
                    Datos de Salud y Seguridad:
                  </strong>{" "}
                  Información sobre condiciones médicas, alergias, o experiencia
                  previa en altura, esencial para tu seguridad y el seguro de
                  viaje/rescate.
                </li>
              </ul>
            </div>

            {/* 3. Uso de la Información */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--blue-primary)] border-b-2 border-[var(--neutral-gray)] pb-2 flex items-center gap-2">
                <Send className="w-6 h-6 text-[var(--blue-light)]" />
                3. ¿Cómo Usamos tu Información?
              </h2>
              <p className="text-[var(--neutral-text-secondary)] leading-relaxed">
                Tu información se utiliza para los siguientes propósitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--neutral-text-primary)] ml-4">
                <li>
                  <strong className="text-[var(--teal-accent)]">
                    Procesamiento de Reservas:
                  </strong>{" "}
                  Confirmar y gestionar tu caminata.
                </li>
                <li>
                  <strong className="text-[var(--teal-accent)]">
                    Cumplimiento Legal:
                  </strong>{" "}
                  Adquirir los permisos de ingreso obligatorios ante Parques
                  Nacionales Naturales de Colombia y seguros de asistencia.
                </li>
                <li>
                  <strong className="text-[var(--teal-accent)]">
                    Seguridad Operacional:
                  </strong>{" "}
                  Evaluar riesgos y preparar el equipo necesario (oxígeno,
                  botiquín) en caso de emergencia.
                </li>
              </ul>
            </div>

            {/* 4. Compartir Información */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--blue-primary)] border-b-2 border-[var(--neutral-gray)] pb-2">
                4. Compartición y Divulgación
              </h2>
              <p className="text-[var(--neutral-text-secondary)] leading-relaxed">
                Solo compartiremos tu información personal cuando sea
                estrictamente necesario para operar el servicio:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--neutral-text-primary)] ml-4">
                <li>
                  <b>Parques Nacionales Naturales:</b> Para la emisión de tu
                  permiso de ingreso.
                </li>
                <li>
                  <b>Compañías de Seguros/Rescate:</b> Para la cobertura
                  obligatoria de asistencia y rescate.
                </li>
                <li>
                  <b>Proveedores de Alojamiento/Transporte (si aplica):</b> Solo
                  si tu paquete incluye estos servicios.
                </li>
              </ul>
              <p className="italic text-[var(--neutral-text-secondary)] pt-4 border-t border-dashed border-[var(--neutral-gray)]">
                <strong className="text-[var(--blue-primary)]">
                  Nunca venderemos
                </strong>{" "}
                o alquilaremos tu información personal a terceros para fines de
                marketing.
              </p>
            </div>

            {/* 5. Derechos del Usuario */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--blue-primary)] border-b-2 border-[var(--neutral-gray)] pb-2">
                5. Tus Derechos
              </h2>
              <p className="text-[var(--neutral-text-secondary)] leading-relaxed">
                De acuerdo con la ley de protección de datos colombiana, tienes
                derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--neutral-text-primary)] ml-4">
                <li>
                  <b>Acceder</b> a la información que tenemos sobre ti.
                </li>
                <li>
                  <b>Rectificar</b> cualquier dato incompleto o inexacto.
                </li>
                <li>
                  <b>Suprimir</b> tus datos, siempre y cuando no exista una
                  obligación legal de conservarlos.
                </li>
              </ul>
              <p className="text-[var(--neutral-text-secondary)] pt-4">
                Para ejercer cualquiera de estos derechos, por favor,
                contáctanos directamente.
              </p>
            </div>

            {/* Pie de Contacto */}
            <div className="mt-12 text-center p-8 bg-[var(--blue-light)] rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-[var(--neutral-white)] mb-3">
                Contacto
              </h3>
              <p className="text-[var(--neutral-white2)] mb-2 max-w-lg mx-auto">
                Para preguntas sobre esta política, por favor, contacta a:
              </p>
              <p className="text-xl font-semibold text-[var(--teal-accent)]">
                +57 3114434181
              </p>
              <p className="text-[var(--neutral-white2)]">
                Estamos comprometidos a proteger tu privacidad y garantizar una
                experiencia segura y memorable en el Nevado del Cocuy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
