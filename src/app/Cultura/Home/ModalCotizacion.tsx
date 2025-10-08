"use client";

import { useState, useRef, useEffect } from "react";
import { X, Calendar, User, Mountain } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { motion, AnimatePresence } from "framer-motion";

interface ModalCotizacionProps {
  onClose: () => void;
}

const PRECIO_BASE = 250000;
const PRECIO_BASE_FORMATEADO = "250.000";

export const ModalCotizacion = ({ onClose }: ModalCotizacionProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [personCount, setPersonCount] = useState(1);
  const modalRef = useRef<HTMLDivElement>(null);

  const costoTotal = PRECIO_BASE;
  const costoPorPersona = costoTotal / personCount;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleSendWhatsApp = () => {
    if (!selectedDate) return;
    const fechaFormateada = format(selectedDate, "PPP", { locale: es });
    const mensaje = `Hola, quiero cotizar una incursión hacia el Nevado del Cocuy el día *${fechaFormateada}* para *${personCount} ${
      personCount === 1 ? "persona" : "personas"
    }*. Quisiera más información, gracias.`;
    const telefono = "573114434181";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] bg-[var(--cultura-green-dark)] bg-opacity-80 backdrop-blur-sm flex justify-center items-center p-4"
      >
        <motion.div
          ref={modalRef}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-full max-w-2xl bg-[var(--cultura-white)] rounded-2xl shadow-2xl border border-[var(--cultura-gray)] overflow-hidden flex flex-col max-h-[80vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[var(--cultura-text-primary)] hover:text-[var(--cultura-terracotta)] transition-colors z-20"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>

          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
            <div className="flex flex-col items-center text-center">
              <Mountain
                size={48}
                className="text-[var(--cultura-terracotta)] mb-2"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--cultura-green-dark)]">
                Cotiza tu Aventura
              </h2>
              <p className="mt-2 text-[var(--cultura-text-secondary)]">
                Selecciona la fecha y la cantidad de viajeros.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 p-4 bg-[var(--cultura-gray)] rounded-xl border border-[var(--cultura-gray)] flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-3 text-[var(--cultura-green-dark)] flex items-center gap-2">
                  <Calendar size={20} /> Fecha del Tour
                </h3>
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={{ before: new Date() }}
                  locale={es}
                  modifiersStyles={{
                    selected: {
                      backgroundColor: "var(--cultura-green-primary)",
                      color: "var(--cultura-white)",
                    },
                  }}
                  className="day-picker-custom"
                  modifiersClassNames={{
                    selected: "day-selected",
                  }}
                />
                {selectedDate && (
                  <p className="mt-4 text-center font-medium text-[var(--cultura-green-dark)]">
                    Fecha seleccionada:{" "}
                    <span className="font-bold">
                      {format(selectedDate, "PPP", { locale: es })}
                    </span>
                  </p>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col items-center p-4 bg-[var(--cultura-gray)] rounded-xl border border-[var(--cultura-gray)]">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--cultura-green-dark)] flex items-center gap-2">
                    <User size={20} /> Cantidad de Personas
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() =>
                        setPersonCount((prev) => Math.max(1, prev - 1))
                      }
                      className="p-2 rounded-full bg-[var(--cultura-sand-accent)] text-[var(--cultura-white)] hover:bg-[var(--cultura-sand-accent)]/80 transition-colors disabled:bg-[var(--cultura-gray)] disabled:text-[var(--cultura-text-secondary)] disabled:cursor-not-allowed"
                      disabled={personCount <= 1}
                    >
                      -
                    </button>
                    <span className="text-4xl font-bold text-[var(--cultura-green-dark)] min-w-[3rem] text-center">
                      {personCount}
                    </span>
                    <button
                      onClick={() => setPersonCount((prev) => prev + 1)}
                      className="p-2 rounded-full bg-[var(--cultura-sand-accent)] text-[var(--cultura-white)] hover:bg-[var(--cultura-sand-accent)]/80 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-[var(--cultura-text-secondary)] text-center">
                    Costo total del guía: ${PRECIO_BASE_FORMATEADO}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="p-6 bg-[var(--cultura-terracotta)]/20 rounded-xl border-4 border-[var(--cultura-terracotta)] text-center shadow-md flex-grow flex flex-col justify-center"
                >
                  <p className="text-sm font-semibold text-[var(--cultura-green-dark)]">
                    Costo por persona
                  </p>
                  <h4 className="text-4xl font-extrabold text-[var(--cultura-terracotta)] my-2">
                    ${costoPorPersona.toLocaleString("es-CO")}
                  </h4>
                  {personCount > 1 && (
                    <p className="text-sm text-[var(--cultura-green-dark)] font-medium">
                      ¡Ahorran{" "}
                      <span className="font-bold text-[var(--cultura-terracotta)]">
                        {(PRECIO_BASE - costoPorPersona).toLocaleString(
                          "es-CO"
                        )}
                      </span>{" "}
                      cada uno!
                    </p>
                  )}
                  <p className="mt-4 text-[var(--cultura-text-secondary)] text-sm">
                    Tarifa de guía para {personCount}{" "}
                    {personCount === 1 ? "persona" : "personas"}. No incluye
                    equipo ni transporte.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-[var(--cultura-gray)] bg-[var(--cultura-white)]">
            <button
              onClick={handleSendWhatsApp}
              disabled={!selectedDate}
              className={`w-full px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform shadow-md active:scale-95 ${
                !selectedDate
                  ? "bg-[var(--cultura-gray)] text-[var(--cultura-text-secondary)] cursor-not-allowed"
                  : "bg-gradient-to-r from-[var(--cultura-terracotta)] to-[var(--cultura-sand-accent)] hover:from-[var(--cultura-sand-accent)] hover:to-[var(--cultura-terracotta)] text-[var(--cultura-white)] hover:scale-[1.02]"
              }`}
            >
              Confirmar Cotización
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
