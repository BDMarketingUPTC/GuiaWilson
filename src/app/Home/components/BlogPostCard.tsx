"use client";

import Image from "next/image";
import Link from "next/link";
// Se elimina la importación de useState, ya que no se usa directamente en el componente exportado
// y se eliminan los componentes que hacían uso de él.

// Componente de badge categoría
const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
  const getCategoryColor = (cat: string) => {
    const colors = {
      Artesanía:
        "from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)]",
      Cosmovisión:
        "from-[var(--cultura-green-dark)] to-[var(--cultura-green-primary)]",
      Historia:
        "from-[var(--cultura-terracotta)] to-[var(--cultura-sand-accent)]",
      Planes:
        "from-[var(--cultura-green-primary)] to-[var(--cultura-green-dark)]",
      Cultura:
        "from-[var(--cultura-green-light)] to-[var(--cultura-sand-accent)]",
      Espiritualidad:
        "from-[var(--cultura-green-dark)] to-[var(--cultura-terracotta)]",
    };

    const baseCat = cat.split(" ")[0];
    return (
      colors[baseCat as keyof typeof colors] ||
      "from-[var(--cultura-gray)] to-[var(--cultura-text-secondary)]"
    );
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(
        category
      )} rounded-full shadow-sm`}
    >
      {category}
    </span>
  );
};

// **Componentes GradientText y PostInteractions ELIMINADOS por no ser usados**

// Define la interfaz para las props del componente BlogPostCard
export interface BlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  author?: string;
  date?: string;
  // **Props de interacciones ELIMINADAS de la interfaz por no ser usadas**
  // likes?: number;
  // shares?: number;
  // readTime?: string;
  featured?: boolean;
}

// Componente reutilizable para las tarjetas de artículos
const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  slug,
  imageSrc,
  imageAlt,
  category,
  author = "Wilson Correa",
  date = "Hace 2 semanas",
  // **Asignación de valores por defecto ELIMINADA por no ser usada**
  // likes = 24,
  // shares = 8,
  // readTime = "5 min",
  featured = false,
}) => {
  return (
    <Link href={`/Cultura/Blog/${slug}`}>
      <div
        className={`group relative bg-[var(--cultura-white)] rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl ${
          featured ? "md:col-span-2" : ""
        }`}
      >
        {/* Efecto de overlay al hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--cultura-gray)]/0 via-[var(--cultura-green-light)]/0 to-[var(--cultura-sand-accent)]/0 group-hover:from-[var(--cultura-green-light)]/20 group-hover:via-[var(--cultura-sand-accent)]/10 group-hover:to-[var(--cultura-green-light)]/20 transition-all duration-500 z-10 rounded-2xl"></div>

        <div className="relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={featured ? 800 : 400}
            height={featured ? 400 : 300}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Mejora de rendimiento con sizes
          />

          {/* Overlay de gradiente en la imagen */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-green-dark)]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>

          {/* Badge de categoría */}
          <div className="absolute top-4 left-4 z-20">
            <CategoryBadge category={category} />
          </div>

          {/* Indicador de featured */}
          {featured && (
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] text-white text-xs font-bold rounded-full shadow-lg">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Destacado
              </span>
            </div>
          )}
        </div>

        <div className="relative p-6 z-20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[var(--cultura-text-secondary)] font-medium">
              {date}
            </span>
            <span className="text-sm text-[var(--cultura-text-secondary)]">
              por {author}
            </span>
          </div>

          <h3
            className={`font-bold text-[var(--cultura-text-primary)] mb-3 leading-tight group-hover:text-[var(--cultura-text-primary)] transition-colors duration-300 ${
              featured ? "text-2xl" : "text-xl"
            }`}
          >
            {title}
          </h3>

          <p className="text-[var(--cultura-text-secondary)] leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center text-[var(--cultura-green-primary)] font-semibold text-sm group-hover:text-[var(--cultura-green-dark)] transition-colors duration-300">
              Leer artículo
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            {/* Si decides reintegrar las interacciones en el futuro, podrías añadirlas aquí:
            <PostInteractions
              likes={likes}
              shares={shares}
              readTime={readTime}
            />
            */}
          </div>
        </div>

        {/* Efecto de borde sutil al hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--cultura-sand-accent)]/20 transition-all duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
