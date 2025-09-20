"use client";
import { useState, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Define los tipos de la interfaz
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  date: string;
}

// Datos de ejemplo para la galería
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery1.jpg",
    alt: "Panorámica de laguna glacial con montañas nevadas al fondo.",
    title: "Panorámica Majestuosa",
    description:
      "Vista espectacular de una laguna en el páramo, reflejando las cumbres nevadas.",
    tags: ["paisaje", "nevado", "panorámica", "laguna"],
    category: "paisajes",
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
    category: "tours",
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
    category: "flora",
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
    category: "tours",
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
    category: "fauna",
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
    category: "paisajes",
    date: "2023-06-18",
  },
  {
    id: 7,
    src: "/gallery7.jpg",
    alt: "Montaña nevada y una edificación en el páramo.",
    title: "Cumbres del Nevado",
    description:
      "Una majestuosa montaña cubierta de nieve bajo un cielo nublado, con una estructura en la base.",
    tags: ["nieve", "montaña", "páramo", "naturaleza"],
    category: "paisajes",
    date: "2023-07-22",
  },
  {
    id: 8,
    src: "/gallery8.jpg",
    alt: "Páramo rocoso con un lago y cielo nublado.",
    title: "Sendero en el Páramo",
    description:
      "Camino rocoso que atraviesa un paisaje de páramo cubierto de niebla.",
    tags: ["páramo", "sendero", "naturaleza", "paisaje"],
    category: "paisajes",
    date: "2023-08-30",
  },
  {
    id: 9,
    src: "/gallery9.jpg",
    alt: "Frailejones con montañas al fondo.",
    title: "Paisaje de Frailejones",
    description:
      "Una vista del paisaje del páramo, con frailejones en primer plano y las montañas al fondo.",
    tags: ["flora", "frailejones", "páramo", "naturaleza"],
    category: "flora",
    date: "2023-08-30",
  },
];

// Categorías disponibles
const categories = [
  { id: "all", name: "Todas las categorías" },
  { id: "paisajes", name: "Paisajes" },
  { id: "fauna", name: "Fauna" },
  { id: "flora", name: "Flora" },
  { id: "tours", name: "Tours" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Optimización 1: UseMemo para filtrar imágenes de forma eficiente.
  const filteredImages = useMemo(() => {
    // Retraso simulado para ver el esqueleto de carga
    // Esto se elimina en producción.
    return galleryImages.filter((image) => {
      const matchesCategory =
        selectedCategory === "all" || image.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Optimización 2: Mejorar el layout y las transiciones
  // Usamos layoutId para transiciones suaves al filtrar
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  // Optimización 3: Skeleton Loader y manejo de estado de carga
  const [isFiltering, setIsFiltering] = useState(false);

  // Manejador para el cambio de filtro
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsFiltering(true);
    setSelectedCategory(e.target.value);
    // Simula una pequeña carga para que se vea el efecto del skeleton
    setTimeout(() => {
      setIsFiltering(false);
    }, 300); // 300ms de retardo
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFiltering(true);
    setSearchQuery(e.target.value);
    setTimeout(() => {
      setIsFiltering(false);
    }, 300);
  };

  return (
    <>
      <Head>
        <title>Galería de Fotos | Nevado del Cocuy</title>
        <meta
          name="description"
          content="Galería de fotos de los tours al Nevado del Cocuy"
        />
      </Head>

      <div className="min-h-screen bg-[var(--neutral-white)] text-[var(--neutral-text-primary)] snow-effect">
        {/* Header */}
        <header className="bg-[var(--blue-dark)] text-[var(--neutral-white)] py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Galería del Nevado del Cocuy
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[var(--neutral-white)]">
              Descubre la majestuosidad de uno de los paisajes naturales más
              impresionantes de Colombia a través de nuestra colección de
              fotografías.
            </p>
          </div>
        </header>

        {/* Filtros y Búsqueda */}
        <section className="sticky top-0 z-10 bg-[var(--neutral-white)] shadow-lg py-4 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Barra de búsqueda */}
              <div className="relative w-full md:w-1/2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[var(--neutral-text-secondary)]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Buscar por título, descripción o etiquetas..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-[var(--neutral-gray)] focus:ring-2 focus:ring-[var(--blue-light)] focus:border-[var(--blue-light)] text-[var(--neutral-text-primary)]"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

              {/* Selector de categorías */}
              <div className="w-full md:w-auto">
                <select
                  className="w-full px-4 py-2 rounded-lg border border-[var(--neutral-gray)] focus:ring-2 focus:ring-[var(--blue-light)] focus:border-[var(--blue-light)] text-[var(--neutral-text-primary)]"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de imágenes y Skeleton Loader */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {isFiltering ? (
              // Skeleton Loader
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-[var(--neutral-gray)] rounded-xl h-64 shadow-lg"
                  ></div>
                ))}
              </div>
            ) : filteredImages.length > 0 ? (
              <>
                <p className="text-[var(--neutral-text-secondary)] mb-6">
                  Mostrando {filteredImages.length}{" "}
                  {filteredImages.length === 1 ? "imagen" : "imágenes"}
                  {selectedCategory !== "all"
                    ? ` en ${
                        categories.find((c) => c.id === selectedCategory)?.name
                      }`
                    : ""}
                  {searchQuery ? ` para "${searchQuery}"` : ""}
                </p>

                <motion.div
                  layout // Habilita las transiciones de layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredImages.map((image) => (
                    <motion.div
                      key={image.id}
                      layoutId={`gallery-item-${image.id}`} // Único layoutId para cada imagen
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-[var(--neutral-gray)] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="h-48 bg-[var(--neutral-gray)] overflow-hidden relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          // Optimización de rendimiento: Pre-cargamos la imagen
                          priority={image.id <= 3}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-[var(--blue-primary)] mb-1">
                          {image.title}
                        </h3>
                        <p className="text-sm text-[var(--neutral-text-secondary)] mb-2">
                          {image.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {image.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 rounded-full bg-[var(--teal-accent)]/10 text-[var(--teal-accent)]"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            ) : (
              // Mensaje cuando no se encuentran imágenes
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 mx-auto text-[var(--neutral-text-secondary)] mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-[var(--neutral-text-primary)] mb-2">
                  No se encontraron imágenes
                </h3>
                <p className="text-[var(--neutral-text-secondary)]">
                  Intenta con otros términos de búsqueda o selecciona una
                  categoría diferente.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Modal de imagen */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-[var(--blue-dark)] bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[var(--neutral-white)] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal lo cierre
            >
              <div className="relative">
                <button
                  className="absolute top-4 right-4 z-10 bg-[var(--neutral-white)] rounded-full p-2 hover:bg-[var(--neutral-gray)] transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg
                    className="w-6 h-6 text-[var(--neutral-text-secondary)]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="h-96 bg-[var(--neutral-gray)] overflow-hidden relative">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
              <div className="p-6 overflow-y-auto">
                <h2 className="text-2xl font-bold text-[var(--blue-primary)] mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-[var(--neutral-text-secondary)] mb-4">
                  {selectedImage.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-[var(--blue-primary)] mb-1">
                      Categoría
                    </h4>
                    <p className="text-[var(--neutral-text-secondary)] capitalize">
                      {selectedImage.category}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--blue-primary)] mb-1">
                      Fecha
                    </h4>
                    <p className="text-[var(--neutral-text-secondary)]">
                      {selectedImage.date}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <h4 className="font-semibold text-[var(--blue-primary)] mb-1">
                      Etiquetas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedImage.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[var(--teal-accent)]/10 text-[var(--teal-accent)]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}
