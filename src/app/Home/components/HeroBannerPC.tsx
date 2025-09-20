"use client";

import { motion } from "framer-motion";
import { Calendar, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroBannerPCProps {
  setIsModalOpen: (isOpen: boolean) => void;
  setIsGuideModalOpen: (isOpen: boolean) => void;
  guideInfo: {
    name: string;
    bio: string;
    imageUrl: string;
    experience: string;
    languages: string[];
    travelersGuided: number;
    satisfactionRate: number;
    whatsappNumber: string;
  };
}

const HeroBannerPC = ({
  setIsModalOpen,
  setIsGuideModalOpen,
}: HeroBannerPCProps) => {
  const backgroundImage = "/gallery6.jpg";

  return (
    <section className="relative w-full min-h-screen overflow-hidden snow-effect">
      {/* Contenedor de la imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Montañas nevadas del Parque Nacional Natural El Cocuy"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Superposición degradada para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Contenido principal del banner */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-6 md:p-12 lg:p-24 text-white">
        <div className="max-w-xl text-left">
          {/* Título principal del hero */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tu aventura en el{" "}
            <span className="text-teal-accent">Nevado del Cocuy</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-lg md:text-xl mb-8 leading-relaxed font-light"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Descubre paisajes espectaculares, lagunas cristalinas y cumbres
            nevadas con guías expertos.
          </motion.p>

          {/* Contenedor de botones */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Botón Cotizar y Reservar */}
            <Button onClick={() => setIsModalOpen(true)}>
              <Calendar className="mr-2" size={20} />
              Cotizar y Reservar
            </Button>
            {/* Botón Conocer tours */}
            <Link href="/Servicios">
              <Button>
                <Compass className="mr-2" size={20} />
                Conocer tours
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Círculo interactivo que abre el modal del guía */}
      <motion.button
        className="absolute bottom-10 right-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-sm cursor-pointer border border-white/50 flex items-center justify-center transition-transform duration-300 hover:scale-105"
        onClick={() => setIsGuideModalOpen(true)}
        aria-label="Información del guía"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute inset-0 rounded-full bg-white/50 animate-ping"></span>
        <div className="relative z-10 flex items-center justify-center text-white text-2xl font-bold">
          i
        </div>
      </motion.button>
    </section>
  );
};

export default HeroBannerPC;
