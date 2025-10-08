"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Componente para textos con gradiente
const GradientText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-[var(--cultura-green-primary)] via-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] ${className}`}
    >
      {children}
    </span>
  );
};

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

// Componente de interacciones (likes, shares)
const PostInteractions: React.FC<{
  likes: number;
  shares: number;
  readTime: string;
}> = ({ likes, shares, readTime }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setCurrentLikes(isLiked ? currentLikes - 1 : currentLikes + 1);
  };

  return (
    <div className="flex items-center justify-between pt-4 mt-4 border-t border-[var(--cultura-gray)]">
      <div className="flex items-center space-x-4 text-sm text-[var(--cultura-text-secondary)]">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 transition-all duration-200 ${
            isLiked
              ? "text-[var(--cultura-terracotta)]"
              : "hover:text-[var(--cultura-terracotta)]"
          }`}
        >
          <svg
            className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span>{currentLikes}</span>
        </button>

        <button className="flex items-center space-x-1 hover:text-[var(--cultura-green-primary)] transition-colors duration-200">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span>{shares}</span>
        </button>

        <span className="flex items-center space-x-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{readTime}</span>
        </span>
      </div>
    </div>
  );
};

// Define la interfaz para las props del componente BlogPostCard
interface BlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  author?: string;
  date?: string;
  likes?: number;
  shares?: number;
  readTime?: string;
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
  likes = 24,
  shares = 8,
  readTime = "5 min",
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

            <PostInteractions
              likes={likes}
              shares={shares}
              readTime={readTime}
            />
          </div>
        </div>

        {/* Efecto de borde sutil al hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--cultura-sand-accent)]/20 transition-all duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );
};

// Componente de filtro por categoría
const CategoryFilter: React.FC<{
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <button
        onClick={() => onCategoryChange("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeCategory === "all"
            ? "bg-gradient-to-r from-[var(--cultura-green-primary)] to-[var(--cultura-sand-accent)] text-white shadow-lg"
            : "bg-[var(--cultura-gray)] text-[var(--cultura-text-secondary)] hover:bg-[var(--cultura-gray)]/80"
        }`}
      >
        Todos los temas
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-gradient-to-r from-[var(--cultura-green-primary)] to-[var(--cultura-sand-accent)] text-white shadow-lg"
              : "bg-[var(--cultura-gray)] text-[var(--cultura-text-secondary)] hover:bg-[var(--cultura-gray)]/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// Componente de newsletter
const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular suscripción
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="bg-gradient-to-br from-[var(--cultura-green-dark)] to-[var(--cultura-green-primary)] rounded-2xl p-8 md:p-12 text-white my-16 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--cultura-green-light)]/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--cultura-sand-accent)]/10 rounded-full translate-y-24 -translate-x-24"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Mantente Conectado con la Cultura U&apos;wa{" "}
          {/* LÍNEA 314: ' -> &apos; */}
        </h3>
        <p className="text-[var(--cultura-white)] mb-6 leading-relaxed">
          Recibe artículos exclusivos, actualizaciones culturales y guías
          especiales directamente en tu correo. Únete a nuestra comunidad de
          amantes de la cultura ancestral.
        </p>

        {isSubscribed ? (
          <div className="bg-[var(--cultura-green-light)]/20 border border-[var(--cultura-green-primary)]/30 rounded-xl p-4 inline-flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-[var(--cultura-green-light)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[var(--cultura-white)] font-medium">
              ¡Gracias por suscribirte!
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg bg-[var(--cultura-gray)]/10 border border-[var(--cultura-gray)]/20 text-[var(--cultura-white)] placeholder-[var(--cultura-white)] focus:outline-none focus:ring-2 focus:ring-[var(--cultura-sand-accent)] focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] text-[var(--cultura-white)] font-semibold rounded-lg hover:from-[var(--cultura-terracotta)] hover:to-[var(--cultura-sand-accent)] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Suscribirse
            </button>
          </form>
        )}

        <p className="text-[var(--cultura-white)]/70 text-xs mt-4">
          Sin spam. Puedes darte de baja en cualquier momento.
        </p>
      </div>
    </section>
  );
};

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const blogCategories = [
    {
      title: "Artesanía y Tradición: Tejiendo Historias con Hilos de Sabiduría",
      description:
        "Explora el profundo significado de los tejidos y la alfarería U&apos;wa. Cada pieza es un universo de historias, colores y tradiciones milenarias que conectan el pasado con el presente.", // LÍNEA 467: ' -> &apos;
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
        "Adéntrate en la relación sagrada del pueblo U&apos;wa con las montañas del Nevado del Cocuy. Descubre cómo la tierra es un ser vivo y un templo natural que guía su existencia.", // LÍNEA 471: ' -> &apos;
      slug: "CosmovisionyEspiritualidad",
      imageSrc: "/Blog/Cosmovision.jpg",
      imageAlt:
        "Paisaje místico del Nevado del Cocuy con una persona meditando.",
      category: "Cosmovisión",
      likes: 38,
      shares: 12,
      readTime: "6 min",
    },
    {
      title: "Historia y Territorio: La Resistencia Milenaria del Pueblo U'wa",
      description:
        "Viaja al pasado para entender la inquebrantable resistencia de los U&apos;wa. Conoce las leyendas que han forjado su identidad y su profundo vínculo con la tierra a través de los siglos.", // LÍNEA 482: ' -> &apos;
      slug: "HistoriayTerritorio",
      imageSrc: "/Blog/Historia.jpg",
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

  const categories = Array.from(
    new Set(blogCategories.map((post) => post.category))
  );
  const filteredPosts =
    activeCategory === "all"
      ? blogCategories
      : blogCategories.filter((post) => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-[var(--cultura-white)]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--cultura-green-dark)] via-[var(--cultura-green-primary)] to-[var(--cultura-sand-accent)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5 z-0"></div>

        <section className="relative bg-green text-white overflow-hidden">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Blog/Territorio6.jpg')",
            }}
          ></div>

          {/* Filtro oscuro */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Contenido */}
          <div className="container mx-auto px-4 py-24 md:py-32 max-w-7xl relative z-10 text-center">
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-[var(--cultura-white)]/10 backdrop-blur-sm rounded-full border border-[var(--cultura-white)]/20">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="text-sm font-semibold">Blog Cultural</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Explora la <GradientText>Esencia U&apos;wa</GradientText>
            </h1>

            <p className="text-lg md:text-xl text-[var(--cultura-white)] mb-8">
              Bienvenido al blog de un viaje al corazón de la cultura U&apos;wa.
              Sumérgete en historias ancestrales, mitos sagrados y guías
              prácticas que transformarán tu expedición en una experiencia de
              conexión profunda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Cultura/Blog/Planes"
                className="px-8 py-3 bg-gradient-to-r from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] text-[var(--cultura-white)] font-semibold rounded-lg hover:from-[var(--cultura-terracotta)] hover:to-[var(--cultura-sand-accent)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Vivir la experiencia U&apos;wa
              </Link>
              <button className="px-8 py-3 bg-[var(--cultura-white)]/10 backdrop-blur-sm text-[var(--cultura-white)] font-semibold rounded-lg border border-[var(--cultura-white)]/20 hover:bg-[var(--cultura-white)]/20 transition-all duration-300">
                Ver Todos los Temas
              </button>
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--cultura-white)] to-transparent"></div>
      </section>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl -mt-8 relative z-20">
        {/* Filtros de Categoría */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Grid de Artículos */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Estadísticas del Blog */}
        {/* <section className="bg-[var(--cultura-white)] rounded-2xl p-8 shadow-lg border border-[var(--cultura-gray)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[var(--cultura-green-primary)] mb-2">
                50+
              </div>
              <div className="text-[var(--cultura-text-secondary)] text-sm">
                Artículos Publicados
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--cultura-sand-accent)] mb-2">
                10K+
              </div>
              <div className="text-[var(--cultura-text-secondary)] text-sm">
                Lectores Mensuales
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--cultura-terracotta)] mb-2">
                5
              </div>
              <div className="text-[var(--cultura-text-secondary)] text-sm">
                Categorías Temáticas
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--cultura-green-light)] mb-2">
                98%
              </div>
              <div className="text-[var(--cultura-text-secondary)] text-sm">
                Satisfacción del Lector
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
