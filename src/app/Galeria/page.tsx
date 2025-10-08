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

// Categorías disponibles
const categories = [
  { id: "all", name: "Todas las categorías" },
  { id: "paisajes", name: "Paisajes" },
  { id: "montañas", name: "Montañas" },
  { id: "glaciares", name: "Glaciares" },
  { id: "lagunas", name: "Lagunas" },
  { id: "valles", name: "Valles" },
  { id: "flora", name: "Flora" },

  { id: "cultural", name: "Cultural / Histórico" },
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
            className="fixed inset-0 bg-[var(--blue-dark)] bg-opacity-90 z-100 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[var(--neutral-white)] rounded-xl max-w-4xl w-full max-h-[75vh] overflow-hidden flex flex-col shadow-2xl"
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
