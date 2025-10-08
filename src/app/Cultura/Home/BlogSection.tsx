import React from "react";
import Image from "next/image";
import Link from "next/link";

// Definición de la interfaz para los datos de la categoría
interface Category {
  title: string;
  description: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  featured?: boolean;
  likes: number;
  shares: number;
  readTime: string;
}

// Datos proporcionados por el usuario
const blogCategories: Category[] = [
  {
    title: "Artesanía y Tradición: Tejiendo Historias con Hilos de Sabiduría",
    description:
      "Explora el profundo significado de los tejidos y la alfarería U'wa. Cada pieza es un universo de historias, colores y tradiciones milenarias que conectan el pasado con el presente.",
    slug: "ArtesaniayTradicion",
    imageSrc: "/Blog/Artesanias.jpg",
    imageAlt: "Artesana U'wa tejiendo una mochila con patrones coloridos.",
    category: "Artesanía",
    featured: true,
    likes: 42,
    shares: 15,
    readTime: "7 min",
  },
  {
    title: "Cosmovisión U'wa: La Montaña como Ser Sagrado",
    description:
      "Adéntrate en la relación sagrada del pueblo U'wa con las montañas del Nevado del Cocuy. Descubre cómo la tierra es un ser vivo y un templo natural que guía su existencia.",
    slug: "CosmovisionyEspiritualidad",
    imageSrc: "/Blog/Cosmovision.jpg",
    imageAlt: "Paisaje místico del Nevado del Cocuy con una persona meditando.",
    category: "Cosmovisión",
    likes: 38,
    shares: 12,
    readTime: "6 min",
  },
  {
    title: "Historia y Territorio: La Resistencia Milenaria del Pueblo U'wa",
    description:
      "Viaja al pasado para entender la inquebrantable resistencia de los U'wa. Conoce las leyendas que han forjado su identidad y su profundo vínculo con la tierra a través de los siglos.",
    slug: "HistoriayTerritorio",
    imageSrc: "/Blog/Territorio.jpg",
    imageAlt: "Antiguo grabado rupestre en una roca con paisaje montañoso.",
    category: "Historia",
    likes: 51,
    shares: 22,
    readTime: "8 min",
  },
  {
    title: "Guía Completa: Planes de Senderismo y Conexión Espiritual",
    description:
      "Prepárate para la aventura. Información detallada sobre nuestros planes de senderismo y sanación, diseñados para una conexión única y transformadora con la cultura U'wa.",
    slug: "Planes",
    imageSrc: "/Blog/Planes.jpg",
    imageAlt:
      "Caminante de espaldas contemplando la majestuosidad de la montaña.",
    category: "Planes",
    likes: 29,
    shares: 18,
    readTime: "5 min",
  },
];

// Ruta de la imagen del banner
//const bannerImageSrc = "/Banners/BlogBannerPc.jpg";

const BlogSectionWithBanner: React.FC = () => {
  return (
    <section
      id="blog-categories-banner"
      className="bg-gradient-to-b from-[var(--cultura-white)] to-[var(--cultura-gray)]/20 py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Banner responsive */}
        <div className="relative h-[200px] md:h-[400px] w-full mx-auto mb-16 rounded-2xl overflow-hidden shadow-xl">
          <picture>
            {/* Imagen para pantallas grandes */}
            <source
              media="(min-width: 768px)"
              srcSet="/Banners/BlogBannerPC.jpg"
            />
            {/* Imagen para móviles */}
            <Image
              src="/Banners/BlogBannerMovil.png"
              alt="Explora nuestras publicaciones del blog"
              fill
              className="object-cover brightness-90"
              priority
            />
          </picture>
        </div>

        {/* Grid de categorías mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogCategories.map((post) => (
            <a
              key={post.slug}
              href={`/Cultura/Blog/${post.slug}`}
              className="group block rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 transition-all duration-500 hover:shadow-xl"
            >
              {/* Badge de categoría */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.featured
                        ? "bg-[var(--cultura-terracotta)] text-[var(--cultura-white)]"
                        : "bg-[var(--cultura-sand-accent)]/80 text-[var(--cultura-text-primary)]"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-text-primary)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 bg-[var(--cultura-white)] border-t-4 border-[var(--cultura-green-primary)] group-hover:border-[var(--cultura-sand-accent)] transition-colors duration-300">
                <h3 className="text-lg font-bold text-[var(--cultura-text-primary)] mb-3 line-clamp-2 group-hover:text-[var(--cultura-green-dark)] transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--cultura-text-secondary)] mb-4 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>

                {/* Estadísticas y metadatos */}
                <div className="flex items-center justify-between text-xs text-[var(--cultura-text-secondary)] border-t border-[var(--cultura-gray)]/30 pt-3">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-[var(--cultura-terracotta)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.likes}
                    </span>

                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-[var(--cultura-green-light)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  <span className="bg-[var(--cultura-green-primary)]/10 text-[var(--cultura-green-dark)] px-2 py-1 rounded-full font-medium">
                    {post.featured ? "Destacado" : "Popular"}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action al final */}
        <div className="text-center mt-12">
          <Link href="/Cultura/Blog" passHref>
            <button className="bg-gradient-to-r from-[var(--cultura-green-primary)] to-[var(--cultura-green-dark)] hover:from-[var(--cultura-green-dark)] hover:to-[var(--cultura-terracotta)] text-[var(--cultura-white)] font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Ver Todos los Artículos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSectionWithBanner;
