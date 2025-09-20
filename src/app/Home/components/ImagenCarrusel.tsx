"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[30vh] md:h-[50vh] overflow-hidden  rounded-lg shadow-lg">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.img
          key={currentIndex} // Importante para que AnimatePresence detecte el cambio
          src={images[currentIndex]}
          alt={`Imagen de carrusel ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Transición de 1.5 segundos
        />
      </AnimatePresence>
    </div>
  );
};
