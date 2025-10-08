"use client";

import Link from "next/link";
import Image from "next/image";

interface RollupBannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RollupBannerModal: React.FC<RollupBannerModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-lg h-[80vh] sm:h-[85vh] rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/Banners/RollupBanner.png"
            alt="Ruta espiritual U'wa"
            fill
            priority
            className="object-cover"
          />
          {/* Degradado solo en la parte baja */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[var(--cultura-terracotta)] text-white hover:bg-[var(--cultura-terracotta)]/80 transition-colors duration-200 z-20 shadow-md"
          aria-label="Cerrar banner emergente"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Contenido alineado en la parte inferior */}
        <div className="absolute bottom-0 w-full z-10 text-center px-6 py-8 sm:py-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg">
            Vive la Ruta Sagrada U&apos;wa
          </h3>

          <p className="text-sm sm:text-base mb-6 max-w-sm mx-auto opacity-90 leading-relaxed">
            Conecta con la naturaleza en una expedición espiritual de 5 días. ✨
            Cupos limitados + 15% de descuento hasta este fin de semana.
          </p>

          <Link
            href="/planes/ruta-sagrada-uwa"
            onClick={onClose}
            className="inline-block w-full px-6 py-3 font-semibold text-[var(--cultura-white)] rounded-xl 
                       bg-gradient-to-r from-[var(--cultura-terracotta)] to-[var(--cultura-sand-accent)] 
                       hover:from-[var(--cultura-sand-accent)] hover:to-[var(--cultura-terracotta)] 
                       transition-all duration-300 shadow-xl transform hover:scale-[1.02]"
          >
            Explorar y Reservar
          </Link>

          <button
            onClick={onClose}
            className="mt-4 text-sm text-[var(--cultura-sand-accent)] hover:text-[var(--cultura-white)] font-medium transition-colors"
          >
            Quizás en otro momento
          </button>
        </div>
      </div>
    </div>
  );
};

export default RollupBannerModal;
