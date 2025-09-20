"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Importar el componente Image
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ImageIcon,
  X,
  Mountain,
  Sunrise,
  Users,
  Trees,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const imageCategories = [
    { id: "all", label: "Todas", icon: <ImageIcon size={16} /> },
    { id: "landscapes", label: "Paisajes", icon: <Mountain size={16} /> },
    { id: "hiking", label: "Senderismo", icon: <Mountain size={16} /> },
    { id: "sunrises", label: "Amaneceres", icon: <Sunrise size={16} /> },
    { id: "groups", label: "Expediciones", icon: <Users size={16} /> },
    { id: "nature", label: "Naturaleza", icon: <Trees size={16} /> },
  ];

  const images = [
    {
      id: 1,
      src: "/gallery1.jpg",
      alt: "Panorámica de laguna glacial con montañas nevadas al fondo.",
      title: "Panorámica Majestuosa",
      description:
        "Vista espectacular de una laguna en el páramo, reflejando las cumbres nevadas.",
      tags: ["paisaje", "nevado", "panorámica", "laguna"],
      category: "landscapes",
      date: "2023-01-15",
    },
    {
      id: 2,
      src: "/gallery2.jpg",
      alt: "Cielo estrellado sobre una montaña oscura.",
      title: "Noche Estrellada",
      description:
        "Campamento bajo un increíble cielo nocturno lleno de estrellas.",
      tags: ["camping", "noche", "estrellas", "naturaleza"],
      category: "hiking",
      date: "2023-02-20",
    },
    {
      id: 3,
      src: "/gallery3.jpg",
      alt: "Páramo con laguna y frailejones al atardecer.",
      title: "Frailejones al Atardecer",
      description:
        "Los característicos frailejones del ecosistema paramuno, con un hermoso atardecer de fondo.",
      tags: ["flora", "frailejones", "páramo", "atardecer"],
      category: "nature",
      date: "2023-03-10",
    },
    {
      id: 4,
      src: "/gallery4.jpg",
      alt: "Vista desde la cima de una montaña hacia un valle.",
      title: "Aventura en las Alturas",
      description:
        "Un grupo de excursionistas en la cima de una montaña, disfrutando de la vista.",
      tags: ["tour", "excursionistas", "aventura", "grupo"],
      category: "groups",
      date: "2023-04-05",
    },
    {
      id: 5,
      src: "/gallery5.jpg",
      alt: "Colibrí en una planta de frailejón.",
      title: "Colibrí Paramuno",
      description:
        "Ejemplar de colibrí endémico de la zona, posado sobre un frailejón.",
      tags: ["fauna", "aves", "colibrí", "naturaleza"],
      category: "nature",
      date: "2023-05-12",
    },
    {
      id: 6,
      src: "/gallery6.jpg",
      alt: "Montaña nevada en un día nublado.",
      title: "Glaciar Perpetuo",
      description:
        "Una impresionante vista de las cumbres nevadas del macizo en un día nublado.",
      tags: ["glaciar", "nieve", "montaña", "paisaje"],
      category: "landscapes",
      date: "2023-06-18",
    },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => {
        const current = prev ?? 0;
        return current === filteredImages.length - 1 ? 0 : current + 1;
      });
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        (prev ?? 0) === 0 ? filteredImages.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="Galeria"
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[var(--neutral-white)]"
    >
      {/* Elementos decorativos de fondo, inspirados en AboutUs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-[var(--aqua-lake)] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[var(--teal-accent)] animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[var(--blue-light)]"></div>
        <Mountain className="absolute top-20 left-10 w-24 h-24 text-[var(--blue-light)]" />
        <Trees className="absolute bottom-20 right-10 w-24 h-24 text-[var(--teal-accent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--neutral-text-primary)] mb-4">
            <span className="text-[var(--blue-primary)]">Galería</span>
            <span className="text-[var(--teal-accent)]"> Visual</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--teal-accent)] to-[var(--aqua-lake)] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-[var(--neutral-text-secondary)] leading-relaxed">
            Descubre la majestuosidad del{" "}
            <span className="font-semibold text-[var(--blue-primary)]">
              Nevado del Cocuy
            </span>{" "}
            a través de experiencias reales y paisajes que quitan el aliento.
          </p>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {imageCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-[var(--blue-primary)] text-[var(--neutral-white)] shadow-md border border-[var(--blue-light)]"
                  : "bg-[var(--neutral-gray)] text-[var(--neutral-text-secondary)] hover:bg-[var(--neutral-gray)]/80 hover:text-[var(--blue-primary)] border border-[var(--neutral-gray)]"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Grid de imágenes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={`${img.category}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg border border-[var(--neutral-gray)] cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="relative w-full h-72">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    priority={index === 0} // Priorizar la primera imagen para LCP
                  />
                </div>

                {/* Overlay de gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-dark)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Información de la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[var(--neutral-white)]">
                    <h3 className="font-bold text-lg mb-1">{img.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {img.description}
                    </p>
                  </div>
                </div>

                {/* Indicador de hover */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[var(--neutral-white)]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ImageIcon className="w-4 h-4 text-[var(--blue-primary)]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mensaje cuando no hay imágenes */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-[var(--neutral-text-secondary)]"
          >
            <ImageIcon size={48} className="mx-auto mb-4 opacity-50" />
            <p>No hay imágenes en esta categoría.</p>
          </motion.div>
        )}
      </div>

      {/* Modal de imagen */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--blue-dark)]/95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full max-h-full bg-[var(--blue-dark)] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[var(--neutral-white)]/20 text-[var(--neutral-white)] rounded-full flex items-center justify-center hover:bg-[var(--neutral-white)]/40 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Imagen */}
              <div className="relative">
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Navegación */}
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[var(--neutral-white)]/20 text-[var(--neutral-white)] rounded-full flex items-center justify-center hover:bg-[var(--neutral-white)]/40 transition-colors z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[var(--neutral-white)]/20 text-[var(--neutral-white)] rounded-full flex items-center justify-center hover:bg-[var(--neutral-white)]/40 transition-colors z-10"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Información */}
              <div className="p-6 bg-[var(--blue-primary)]">
                <h3 className="text-xl font-bold text-[var(--neutral-white)] mb-2">
                  {filteredImages[selectedImage!].title}
                </h3>
                <p className="text-[var(--neutral-text-secondary)]">
                  {filteredImages[selectedImage!].description}
                </p>
                <div className="flex justify-between items-center mt-4 text-sm text-[var(--neutral-text-secondary)]">
                  <span className="font-medium">
                    {selectedImage + 1} de {filteredImages.length}
                  </span>
                  {/* El botón fue reemplazado por un componente Link */}
                  <Link
                    href="/Galeria"
                    className="text-[var(--aqua-lake)] hover:text-[var(--teal-accent)] transition-colors flex items-center"
                    onClick={closeModal} // Agregamos onClose para cerrar el modal al navegar
                  >
                    Ver detalles completos
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
