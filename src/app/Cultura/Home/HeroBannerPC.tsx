"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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

const images = [
  "/Galeria/Gallery3.webp",
  "/Galeria/Gallery4.webp",
  "/Galeria/Gallery5.webp",
  "/Galeria/Gallery6.webp",
  "/Galeria/Gallery14.webp",
  "/Galeria/Gallery15.webp",
  "/Galeria/Gallery27.webp",
  "/Galeria/Gallery17.webp",
];

const HeroBannerPC = ({
  setIsModalOpen,
  setIsGuideModalOpen,
  guideInfo,
}: HeroBannerPCProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Contenedor de las imágenes con efecto de fundido */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={images[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Imagen de fondo ${currentImageIndex + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Superposición degradada para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Contenido principal del banner */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full p-6 md:p-12 lg:p-24 text-white">
        {/* Columna de texto e interactividad */}
        <div className="flex-1 max-w-xl text-left">
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
            <Button variant="green-shades" onClick={() => setIsModalOpen(true)}>
              <Calendar className="mr-2" size={20} />
              Cotizar y Reservar
            </Button>
            {/* Botón Conocer tours */}
            <Link href="/Cultura/Planes" passHref>
              <Button variant="green-gradient">
                <Compass className="mr-2" size={20} />
                Conocer Tour
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Columna de la foto del guía y el círculo interactivo */}
        <div className="relative w-[300px] h-[300px] flex-shrink-0 mt-8 md:mt-0 md:ml-12 lg:ml-24 flex items-center justify-center">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-teal-accent shadow-xl">
            <Image
              src={guideInfo.imageUrl}
              alt={guideInfo.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
          {/* Círculo interactivo superpuesto */}
          <motion.button
            className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-sm cursor-pointer border border-white/50 flex items-center justify-center transition-transform duration-300 hover:scale-105 shadow-lg"
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
        </div>
      </div>
    </section>
  );
};

export default HeroBannerPC;
