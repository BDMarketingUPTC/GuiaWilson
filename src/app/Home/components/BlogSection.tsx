"use client";

import Link from "next/link";
import BlogPostCard from "./BlogPostCard";

// Define la interfaz para los datos de un post
interface BlogData {
  title: string;
  description: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  likes?: number;
  shares?: number;
  readTime?: string;
}

// Datos de ejemplo para el blog (puedes pasarlos como props o desde una API)
const blogData: BlogData[] = [
  {
    title: "Artesanía y Tradición: Tejiendo Historias con Hilos de Sabiduría",
    description:
      "Explora el profundo significado de los tejidos y la alfarería U'wa. Cada pieza es un universo de historias, colores y tradiciones milenarias que conectan el pasado con el presente.",
    slug: "ArtesaniayTradicion",
    imageSrc: "/Blog/Artesanias.jpg",
    imageAlt: "Artesana U'wa tejiendo una mochila con patrones coloridos.",
    category: "Artesanía",
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
    imageSrc: "/Blog/Historia.jpg",
    imageAlt: "Antiguo grabado rupestre en una roca con paisaje montañoso.",
    category: "Historia",
    likes: 51,
    shares: 22,
    readTime: "8 min",
  },
];

const BlogSection: React.FC = () => {
  const latestPosts = blogData.slice(0, 3); // Muestra los últimos 3 posts

  return (
    <section className="bg-[var(--cultura-white)] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--cultura-green-dark)] mb-4 leading-tight">
            Conoce Nuestro Blog <br /> en la seccion Cultura
          </h2>
          <p className="text-[var(--cultura-text-secondary)] text-lg max-w-2xl mx-auto">
            Sumérgete en historias que honran la sabiduría ancestral del pueblo
            U&apos;wa. Artículos, mitos y guías para conectar con su cultura.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/Cultura/Blog" // Cambia esta ruta a la de tu página de blog
            className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--cultura-green-primary)] to-[var(--cultura-sand-accent)] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
