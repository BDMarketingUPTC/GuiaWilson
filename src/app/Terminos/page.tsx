"use client";

import Head from "next/head";
import { Scale, Users, Mountain, DollarSign, Shield } from "lucide-react";

export default function TermsAndConditionsPage() {
  const guideName = "Tu Guía de Senderismo (Nombre)";
  const guideContact = "+57 3114434181";

  return (
    <>
      <Head>
        <title>Términos y Condiciones | Nevado del Cocuy Guía</title>
        <meta
          name="description"
          content={`Términos y condiciones de servicio para el senderismo guiado con ${guideName} en el Nevado del Cocuy.`}
        />
      </Head>

      <div className="min-h-screen bg-[var(--neutral-white2)]">
        {/* Encabezado Principal */}
        <div className="bg-[var(--blue-primary)] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-12 h-12 text-[var(--teal-accent)] mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--neutral-white)] mb-2">
              Términos y Condiciones
            </h1>
            <p className="text-lg text-[var(--aqua-lake)]">
              Acuerdo de Servicio para el Senderismo Guiado en El Cocuy
            </p>
          </div>
        </div>

        {/* Contenido de los Términos */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* 1. Alcance del Servicio */}
            <div className="space-y-4 p-6 bg-[var(--neutral-white)] rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-[var(--blue-dark)] flex items-center gap-2 border-b-2 border-[var(--neutral-gray)] pb-2">
                <Users className="w-6 h-6 text-[var(--teal-accent)]" />
                1. Aceptación y Alcance del Servicio
              </h2>
              <p className="text-[var(--neutral-text-primary)] leading-relaxed">
                Al reservar una actividad de senderismo con{" "}
                <strong className="text-[var(--blue-primary)]">
                  {guideName}
                </strong>
                , usted acepta estos términos. Nuestro servicio se limita a la{" "}
                <b>
                  guianza, coordinación logística (permisos, transporte local)
                </b>{" "}
                y asistencia básica en ruta. No incluye tiquetes aéreos ni
                alojamiento fuera del Parque, a menos que se especifique
                explícitamente en el paquete contratado.
              </p>
            </div>

            {/* 2. Reservas y Pagos */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--blue-dark)] flex items-center gap-2 border-b-2 border-[var(--neutral-gray)] pb-2">
                <DollarSign className="w-6 h-6 text-[var(--teal-accent)]" />
                2. Proceso de Reserva y Condiciones de Pago
              </h2>
              <ul className="space-y-3 p-4 bg-[var(--neutral-gray)] rounded-lg text-[var(--neutral-text-secondary)]">
                <li>
                  <strong className="text-[var(--neutral-text-primary)]">
                    Pago Inicial:
                  </strong>{" "}
                  Se requiere un depósito del <b>50%</b> del valor total para
                  confirmar la reserva y asegurar la compra de permisos del
                  Parque.
                </li>
                <li>
                  <strong className="text-[var(--neutral-text-primary)]">
                    Pago Final:
                  </strong>{" "}
                  El saldo restante (50%) debe ser liquidado a más tardar{" "}
                  <b>15 días antes</b> de la fecha de inicio del tour.
                </li>
                <li>
                  <strong className="text-[var(--neutral-text-primary)]">
                    Costos Adicionales:
                  </strong>{" "}
                  Cualquier gasto personal, propinas, comidas no incluidas o
                  servicios médicos/farmacéuticos durante la ruta correrán por
                  cuenta del cliente.
                </li>
              </ul>
            </div>

            {/* 3. Política de Cancelación */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--blue-dark)] flex items-center gap-2 border-b-2 border-[var(--neutral-gray)] pb-2">
                <Mountain className="w-6 h-6 text-[var(--teal-accent)]" />
                3. Cancelaciones, Modificaciones y No-Show
              </h2>
              <ul className="list-disc list-inside space-y-3 text-[var(--neutral-text-primary)] ml-4">
                <li>
                  <b>Cancelación con más de 30 días:</b> Se reembolsa el 100%
                  del depósito (excepto gastos bancarios no recuperables).
                </li>
                <li>
                  <b>Cancelación entre 15 y 30 días:</b> Se retiene el 50% del
                  depósito inicial para cubrir gastos administrativos y de
                  permisos.
                </li>
                <li>
                  <b>Cancelación con menos de 15 días o No-Show:</b> No se
                  ofrece reembolso, ya que el guía incurre en el 100% de los
                  costos operacionales y permisos.
                </li>
                <li>
                  <b>Fuerza Mayor (Clima, Cierre del Parque):</b> Si la
                  actividad debe ser cancelada por cierres oficiales o clima
                  extremo antes del inicio, se ofrecerá un{" "}
                  <strong className="text-[var(--teal-accent)]">
                    reagendamiento sin costo
                  </strong>{" "}
                  o el reembolso total (menos gastos de permisos no
                  reembolsables por la entidad).
                </li>
              </ul>
            </div>

            {/* 4. Responsabilidad y Riesgo */}
            <div className="space-y-4 p-6 bg-[var(--neutral-gray)] rounded-xl shadow-md border-l-4 border-[var(--blue-dark)]">
              <h2 className="text-2xl font-bold text-[var(--blue-dark)] flex items-center gap-2 border-b-2 border-[var(--neutral-white2)] pb-2">
                <Shield className="w-6 h-6 text-[var(--blue-dark)]" />
                4. Aceptación del Riesgo y Responsabilidad
              </h2>
              <p className="text-[var(--neutral-text-primary)] leading-relaxed">
                El cliente reconoce que el senderismo en alta montaña (más de
                4.000 m.s.n.m.) implica <b>riesgos inherentes</b>, incluyendo el
                mal de altura, caídas, hipotermia y condiciones climáticas
                extremas.
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--neutral-text-secondary)] ml-4">
                <li>
                  El cliente debe informar al guía sobre cualquier condición
                  médica previa.
                </li>
                <li>
                  El guía está facultado para modificar o cancelar la ruta si la
                  seguridad del grupo está comprometida (p. ej., por mal de
                  altura o clima severo).
                </li>
                <li>
                  Es <b>obligatorio</b> contar con un seguro médico y de rescate
                  válido para la duración del tour (incluido en el paquete).
                </li>
              </ul>
            </div>

            {/* 5. Ley Aplicable y Jurisdicción */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--blue-dark)] border-b-2 border-[var(--neutral-gray)] pb-2">
                5. Ley Aplicable y Contacto
              </h2>
              <p className="text-[var(--neutral-text-secondary)] leading-relaxed">
                Estos Términos se rigen por las leyes de la República de
                Colombia. Cualquier disputa que surja se someterá a la
                jurisdicción de los tribunales de Duitama o Tunja (Boyacá).
              </p>
              <p className="text-[var(--neutral-text-secondary)]">
                Para cualquier consulta sobre estos Términos, por favor,
                contáctame en:{" "}
                <strong className="text-[var(--teal-accent)]">
                  {guideContact}
                </strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
