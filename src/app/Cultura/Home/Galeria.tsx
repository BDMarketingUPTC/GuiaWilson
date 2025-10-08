"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ImageIcon,
  X,
  Mountain,
  Trees,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sun,
  Palette,
  LandPlot,
  Footprints,
  Snowflake,
} from "lucide-react";

// Tu arreglo de imágenes y categorías se mantiene igual.
const images = [
  {
    id: 1,
    src: "/Galeria/Gallery1.webp",
    alt: "Formación rocosa en espiral similar a una caracola, entre rocas y vegetación paramuna.",
    title: "Roca Caracola",
    description:
      "Imponente formación rocosa en espiral que recuerda a una concha, rodeada de vegetación del páramo y roca expuesta.",
    tags: ["roca", "formación", "páramo", "geología"],
    category: "formaciones",
    date: "2023-01-15",
  },
  {
    id: 2,
    src: "/Galeria/Gallery2.webp",
    alt: "Ladera y planicie cubierta de nieve con pequeñas rocas visibles.",
    title: "Ladera Nevada",
    description:
      "Extensa superficie nevada en alta montaña, con texturas de hielo y roca que muestran el terreno glacial.",
    tags: ["nieve", "nevado", "ladera", "montaña"],
    category: "paisajes",
    date: "2023-02-20",
  },
  {
    id: 3,
    src: "/Galeria/Gallery3.webp",
    alt: "Borde de hielo con formaciones colgantes (estalactitas de hielo) y textura azulada.",
    title: "Capa de Hielo",
    description:
      "Gran masa de hielo con colgantes helados y cavidades; se aprecian las vetas y texturas propias del hielo glacial.",
    tags: ["hielo", "glaciar", "estalactitas", "frío"],
    category: "hielo",
    date: "2023-03-10",
  },
  {
    id: 4,
    src: "/Galeria/Gallery4.webp",
    alt: "Reflejo de una pared rocosa en una laguna tranquila, formando un espejo en el agua.",
    title: "Laguna Espejo",
    description:
      "Paisaje de alta montaña con agua en calma que refleja la pared rocosa, destacando simetría y tranquilidad.",
    tags: ["laguna", "reflejo", "roca", "paisaje"],
    category: "paisajes",
    date: "2023-04-05",
  },
  {
    id: 5,
    src: "/Galeria/Gallery5.webp",
    alt: "Terreno rojizo en primer plano con un casquete de hielo o glaciar en el fondo.",
    title: "Tierra Roja y Hielo",
    description:
      "Contraste entre el suelo rojizo mineralizado en primer plano y las capas de hielo o nieve que se extienden en el fondo.",
    tags: ["suelo", "minerales", "contraste", "glaciar"],
    category: "paisajes",
    date: "2023-05-12",
  },
  {
    id: 6,
    src: "/Galeria/Gallery6.webp",
    alt: "Pared rocosa rojiza tipo meseta con nieve en la base; estratos visibles en la roca.",
    title: "Meseta Rocosa Nevada",
    description:
      "Imponente pared estratificada de tonos rojizos con zona nevada en el primer plano, evidencia de procesos geológicos.",
    tags: ["acantilado", "estratos", "roca", "nieve"],
    category: "formaciones",
    date: "2023-06-18",
  },
  {
    id: 7,
    src: "/Galeria/Gallery7.webp",
    alt: "Campo de nieve y lengua de glaciar con una o dos personas en la base bajo cielo nublado.",
    title: "Campo Glacial",
    description:
      "Amplio campo de nieve e hielo con crevasses y texturas glaciares; la presencia de personas da escala al paisaje helado.",
    tags: ["glaciar", "nieve", "hielo", "montañismo"],
    category: "glaciar",
    date: "2023-07-10",
  },
  {
    id: 8,
    src: "/Galeria/Gallery8.webp",
    alt: "Frailejones en primer plano con montañas nevadas y cielo nublado al fondo.",
    title: "Frailejones en el Páramo",
    description:
      "Grupo de frailejones característicos del páramo en primer plano; montañas y nevado difuminados en el fondo.",
    tags: ["frailejones", "flora", "páramo", "paisaje"],
    category: "flora",
    date: "2023-07-25",
  },
  {
    id: 9,
    src: "/Galeria/Gallery9.webp",
    alt: "Terreno rocoso y estratificado con formaciones y suelo árido bajo cielo nuboso.",
    title: "Paisaje Rocoso",
    description:
      "Extenso paisaje de rocas estratificadas y suelos pedregosos; se aprecian texturas erosionadas y capas geológicas.",
    tags: ["roca", "estratos", "erosión", "geología"],
    category: "formaciones",
    date: "2023-08-05",
  },
  {
    id: 10,
    src: "/Galeria/Gallery10.webp",
    alt: "Ladera empinada y escarpada con parches de nieve y detalles de relieve.",
    title: "Ladera Empinada",
    description:
      "Vista de una ladera escarpada con parches de nieve en las zonas altas; pendientes pronunciadas y relieve marcado.",
    tags: ["ladera", "pendiente", "relieve", "nieve"],
    category: "paisajes",
    date: "2023-08-20",
  },
  {
    id: 11,
    src: "/Galeria/Gallery11.webp",
    alt: "Frente de glaciar o lengua de hielo con montañistas en la proximidad del borde.",
    title: "Frente de Glaciar",
    description:
      "Gran lengua de hielo sobresaliente; montañistas en el borde que aportan escala y sensación de aventura en alta montaña.",
    tags: ["glaciar", "hielo", "montañismo", "aventura"],
    category: "glaciar",
    date: "2023-09-02",
  },
  {
    id: 12,
    src: "/Galeria/Gallery12.webp",
    alt: "Pequeña laguna verde en una depresión entre colinas doradas del páramo.",
    title: "Laguna Esmeralda",
    description:
      "Laguna de color verde intenso enmarcada por colinas de tonos ocres; contraste fuerte entre agua y terreno seco.",
    tags: ["laguna", "páramo", "paisaje", "aguas"],
    category: "lagunas",
    date: "2023-09-20",
  },
  {
    id: 13,
    src: "/Galeria/Gallery13.webp",
    alt: "Laguna de aguas verdes enmarcada por montañas rocosas de tonos marrones.",
    title: "Laguna de Alta Montaña",
    description:
      "Cuerpo de agua verde turquesa rodeado por montañas áridas de gran altura, típico paisaje de páramo.",
    tags: ["laguna", "montaña", "páramo", "paisaje"],
    category: "lagunas",
    date: "2023-10-01",
  },
  {
    id: 14,
    src: "/Galeria/Gallery14.webp",
    alt: "Vista de glaciar con formaciones de hielo azuladas y texturas superficiales.",
    title: "Glaciar Azul",
    description:
      "Superficie de hielo glaciar con tonalidades azules y formas onduladas; paisaje helado en altura.",
    tags: ["glaciar", "hielo", "nieve", "alta montaña"],
    category: "glaciar",
    date: "2023-10-05",
  },
  {
    id: 15,
    src: "/Galeria/Gallery15.webp",
    alt: "Lagunas turquesas dentro de un relieve rocoso y árido.",
    title: "Lagunas de Montaña",
    description:
      "Lagunas de agua turquesa formadas entre rocas y montañas áridas; contraste vibrante entre agua y piedra.",
    tags: ["laguna", "montaña", "páramo", "paisaje"],
    category: "lagunas",
    date: "2023-10-12",
  },
  {
    id: 16,
    src: "/Galeria/Gallery16.webp",
    alt: "Montaña nevada con cielo azul parcialmente cubierto por ramas verdes en primer plano.",
    title: "Nevado con Vegetación",
    description:
      "Vista de un nevado imponente enmarcado por vegetación en primer plano; combinación de vida y cumbre helada.",
    tags: ["nevado", "nieve", "vegetación", "paisaje"],
    category: "montañas",
    date: "2023-10-18",
  },
  {
    id: 17,
    src: "/Galeria/Gallery17.webp",
    alt: "Persona observando una planicie de nieve y glaciar bajo cielo despejado.",
    title: "Explorador en el Glaciar",
    description:
      "Montañista contemplando un vasto glaciar nevado; amplitud y majestuosidad de la alta montaña.",
    tags: ["glaciar", "nieve", "exploración", "montañismo"],
    category: "glaciar",
    date: "2023-10-25",
  },
  {
    id: 18,
    src: "/Galeria/Gallery18.webp",
    alt: "Laguna rodeada de rocas y nieve en alta montaña.",
    title: "Laguna entre Rocas",
    description:
      "Laguna fría enclavada en un entorno rocoso con nieve alrededor; paisaje típico del ecosistema glaciar.",
    tags: ["laguna", "glaciar", "rocas", "páramo"],
    category: "lagunas",
    date: "2023-11-01",
  },
  {
    id: 19,
    src: "/Galeria/Gallery19.webp",
    alt: "Estructura circular de piedra en medio de un paisaje montañoso.",
    title: "Construcción Ancestral",
    description:
      "Estructura de piedra en forma circular, posiblemente de origen cultural o ritual, situada en un entorno montañoso.",
    tags: ["arqueología", "cultura", "piedra", "montaña"],
    category: "cultural",
    date: "2023-11-08",
  },
  {
    id: 20,
    src: "/Galeria/Gallery20.webp",
    alt: "Lengua glaciar con montañistas caminando en su superficie.",
    title: "Ascenso Glaciar",
    description:
      "Montañistas avanzando sobre una lengua glaciar; contraste del hielo blanco con el cielo nublado.",
    tags: ["glaciar", "nieve", "montañismo", "aventura"],
    category: "glaciar",
    date: "2023-11-15",
  },
  {
    id: 21,
    src: "/Galeria/Gallery21.webp",
    alt: "Paisaje montañoso árido bajo un cielo azul despejado.",
    title: "Montañas Doradas",
    description:
      "Extensión de montañas áridas y doradas por la vegetación seca; cielo azul intenso en contraste.",
    tags: ["montaña", "páramo", "paisaje", "relieve"],
    category: "montañas",
    date: "2023-11-22",
  },
  {
    id: 22,
    src: "/Galeria/Gallery22.webp",
    alt: "Frailejones en primer plano con un nevado al fondo bajo cielo azul.",
    title: "Frailejones y Nevado",
    description:
      "Frailejones del páramo en primer plano acompañados de un nevado imponente en el horizonte.",
    tags: ["frailejones", "flora", "nevado", "páramo"],
    category: "flora",
    date: "2023-12-01",
  },
  {
    id: 23,
    src: "/Galeria/Gallery23.webp",
    alt: "Formaciones rocosas verticales envueltas en neblina.",
    title: "Montañas Misteriosas",
    description:
      "Imponentes paredes rocosas envueltas en nubes bajas y neblina que generan un ambiente enigmático.",
    tags: ["montaña", "rocas", "neblina", "paisaje"],
    category: "montañas",
    date: "2023-12-05",
  },
  {
    id: 24,
    src: "/Galeria/Gallery24.webp",
    alt: "Pared rocosa iluminada por el sol con texturas anaranjadas.",
    title: "Muralla de Piedra",
    description:
      "Macizo rocoso de tonalidades anaranjadas y grises, resaltado por la luz del atardecer.",
    tags: ["rocas", "montaña", "atardecer", "paisaje"],
    category: "montañas",
    date: "2023-12-08",
  },
  {
    id: 25,
    src: "/Galeria/Gallery25.webp",
    alt: "Valle montañoso con cordilleras y cielo despejado.",
    title: "Cordillera Infinita",
    description:
      "Paisaje de cordilleras rocosas que se extienden hacia el horizonte, típico del ecosistema andino.",
    tags: ["montaña", "valle", "páramo", "paisaje"],
    category: "montañas",
    date: "2023-12-12",
  },
  {
    id: 26,
    src: "/Galeria/Gallery26.webp",
    alt: "Laguna rodeada de montañas verdes bajo la luz del sol.",
    title: "Espejo en la Montaña",
    description:
      "Laguna cristalina reflejando el cielo y las montañas que la rodean en el ecosistema de páramo.",
    tags: ["laguna", "montaña", "páramo", "agua"],
    category: "lagunas",
    date: "2023-12-15",
  },
  {
    id: 27,
    src: "/Galeria/Gallery27.webp",
    alt: "Glaciar con tonalidades azules intensas y texturas heladas.",
    title: "Hielo Profundo",
    description:
      "Detalle de un glaciar con tonalidades azules profundas y texturas marcadas por el paso del tiempo.",
    tags: ["glaciar", "hielo", "nieve", "montaña"],
    category: "glaciar",
    date: "2023-12-18",
  },
  {
    id: 28,
    src: "/Galeria/Gallery28.webp",
    alt: "Valle amplio con un río serpenteante entre montañas verdes.",
    title: "Valle del Río",
    description:
      "Un valle profundo atravesado por un río caudaloso que serpentea entre montañas verdes.",
    tags: ["valle", "río", "montaña", "paisaje"],
    category: "valles",
    date: "2023-12-22",
  },
];

const imageCategories = [
  { id: "all", label: "Todas", icon: <ImageIcon size={16} /> },
  { id: "paisajes", label: "Paisajes", icon: <Mountain size={16} /> },
  { id: "flora", label: "Flora", icon: <Trees size={16} /> },
  { id: "glaciar", label: "Glaciares", icon: <Sun size={16} /> },
  { id: "lagunas", label: "Lagunas", icon: <Palette size={16} /> },
  { id: "formaciones", label: "Formaciones", icon: <LandPlot size={16} /> },
  { id: "montañas", label: "Montañas", icon: <Mountain size={16} /> },
  { id: "valles", label: "Valles", icon: <ChevronRight size={16} /> },
  { id: "hielo", label: "Hielo", icon: <Snowflake size={16} /> },
  { id: "cultural", label: "Cultural", icon: <Footprints size={16} /> },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);
  const totalSlides = filteredImages.length;

  // Ajusta el número de imágenes visibles según la resolución
  const getDisplayCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        return 3; // En pantallas lg y mayores, mostrar 3
      }
      return 1; // En pantallas pequeñas, mostrar 1
    }
    return 3;
  };
  const displayCount = getDisplayCount();

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  // --- CORRECCIÓN: Usar useCallback para estabilizar las funciones ---
  const goToNextModal = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        (prev ?? 0) === filteredImages.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  }, [selectedImage, filteredImages.length]);

  const goToPrevModal = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        (prev ?? 0) === 0 ? filteredImages.length - 1 : (prev ?? 0) - 1
      );
    }
  }, [selectedImage, filteredImages.length]);
  // --- FIN DE CORRECCIÓN ---

  // El useEffect ahora está correcto ya que las funciones de callback son estables.
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (selectedImage !== null) {
        if (e.key === "ArrowRight") goToNextModal();
        if (e.key === "ArrowLeft") goToPrevModal();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, goToNextModal, goToPrevModal]); // Dependencias estables

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="Galeria"
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[var(--cultura-white)]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--cultura-text-primary)] mb-4">
            <span className="text-[var(--cultura-green-primary)]">Galería</span>{" "}
            <span className="text-[var(--cultura-sand-accent)]">Visual</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-[var(--cultura-text-secondary)] leading-relaxed">
            Descubre la majestuosidad del{" "}
            <span className="font-semibold text-[var(--cultura-green-primary)]">
              Nevado del Cocuy
            </span>{" "}
            a través de experiencias reales y paisajes que quitan el aliento.
          </p>
        </motion.div>

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
              onClick={() => {
                setActiveFilter(category.id);
                setCurrentSlide(0);
              }}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-[var(--cultura-green-primary)] text-[var(--cultura-white)] shadow-md border border-[var(--cultura-green-light)]"
                  : "bg-[var(--cultura-gray)] text-[var(--cultura-text-secondary)] hover:bg-[var(--cultura-gray)]/80 hover:text-[var(--cultura-green-primary)] border border-[var(--cultura-gray)]"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="relative overflow-hidden w-full group">
          <div
            className={`flex w-full transition-transform duration-500 ease-in-out`}
            style={{
              transform: `translateX(-${currentSlide * (100 / displayCount)}%)`,
            }}
          >
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="flex-shrink-0 w-full lg:w-1/3 p-2 cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[var(--cultura-gray)]">
                    <div className="relative w-full h-72">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-green-dark)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-[var(--cultura-white)]">
                        <h3 className="font-bold text-lg mb-1">{img.title}</h3>
                        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {img.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {totalSlides > displayCount && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--cultura-white)]/50 text-[var(--cultura-green-primary)] rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--cultura-white)]/80 transition-colors duration-300 z-20"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--cultura-white)]/50 text-[var(--cultura-green-primary)] rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--cultura-white)]/80 transition-colors duration-300 z-20"
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--cultura-green-dark)]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full max-h-full bg-[var(--cultura-green-dark)] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 text-[var(--cultura-white)]/80 hover:text-[var(--cultura-white)] transition-colors duration-300"
              >
                <X size={28} />
              </button>

              <div className="relative w-full h-[70vh] flex items-center justify-center bg-[var(--cultura-text-primary)]">
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
                <button
                  onClick={goToPrevModal}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--cultura-white)]/20 text-[var(--cultura-white)] rounded-full flex items-center justify-center hover:bg-[var(--cultura-white)]/40 transition-colors z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNextModal}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--cultura-white)]/20 text-[var(--cultura-white)] rounded-full flex items-center justify-center hover:bg-[var(--cultura-white)]/40 transition-colors z-10"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="p-6 bg-[var(--cultura-green-primary)] border-t border-[var(--cultura-green-light)]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-[var(--cultura-white)] mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <span className="text-sm font-semibold text-[var(--cultura-gray)] mt-1">
                    {selectedImage + 1} de {filteredImages.length}
                  </span>
                </div>
                <p className="text-[var(--cultura-white)] leading-relaxed mb-4">
                  {filteredImages[selectedImage].description}
                </p>
                <div className="flex justify-end">
                  <Link
                    href={`/galeria/${filteredImages[selectedImage].id}`}
                    className="inline-flex items-center text-sm font-medium text-[var(--cultura-sand-accent)] hover:text-[var(--cultura-terracotta)] transition-colors"
                    onClick={closeModal}
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
