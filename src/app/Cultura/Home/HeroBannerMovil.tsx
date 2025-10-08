"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModalCotizacion } from "./ModalCotizacion";
import GuideModal from "./GuideModal";

const HeroBanner = () => {
  const backgroundImage = "/bannerCelularCultura.png";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  const guideInfo = {
    name: "Willson Correa Will",
    bio: "Guía certificado con más de 20 años de experiencia en trekking y montañismo en el Nevado del Cocuy. Apasionado por la naturaleza y la seguridad de sus clientes.",
    imageUrl: "/Guia.png",
    experience: "20+ años",
    languages: ["Español"],
    travelersGuided: 800,
    satisfactionRate: 99,
    whatsappNumber: "573114434181",
  };

  const openCotizacionModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="relative w-full overflow-hidden min-h-screen md:min-h-auto background-gray">
      <div className="flex flex-col md:flex-row h-full">
        <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex-grow">
          <Image
            src={backgroundImage}
            alt="Explorador de alta montaña en el Nevado del Cocuy"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
            priority
          />
          <div className="absolute inset-0 "></div>

          <motion.button
            className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--cultura-white)]/30 backdrop-blur-sm cursor-pointer border border-[var(--cultura-white)]/50 flex items-center justify-center"
            onClick={() => setIsGuideModalOpen(true)}
            aria-label="Información del guía"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute inset-0 rounded-full bg-[var(--cultura-white)]/50 animate-ping"></span>
            <div className="relative z-10 flex items-center justify-center text-[var(--cultura-white)] text-2xl font-bold">
              i
            </div>
          </motion.button>
        </div>

        <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[var(--cultura-white)] md:bg-transparent text-[var(--cultura-text-primary)] md:text-[var(--cultura-white)]">
          <div className="text-center md:text-left max-w-2xl">
            <motion.p
              className="text-base md:text-xl text-[var(--cultura-text-secondary)] md:text-[var(--cultura-white)] mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubre paisajes espectaculares, lagunas cristalinas y cumbres
              nevadas con guías expertos en trekking y montañismo.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-4 justify-center md:flex-row md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button variant="green-gradient" onClick={openCotizacionModal}>
                <Calendar className="mr-2" size={20} />
                Cotizar y Reservar
              </Button>

              <Link href="/Cultura/Planes">
                <Button variant="green-shades">
                  <Compass className="mr-2" size={20} />
                  Tour Cultural
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {isModalOpen && <ModalCotizacion onClose={() => setIsModalOpen(false)} />}

      {isGuideModalOpen && (
        <GuideModal
          isOpen={isGuideModalOpen}
          onClose={() => setIsGuideModalOpen(false)}
          guideInfo={guideInfo}
        />
      )}
    </section>
  );
};

export default HeroBanner;
