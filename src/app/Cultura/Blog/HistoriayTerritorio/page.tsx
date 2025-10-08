"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Estilos globales de las variables de color (útil si no están en globals.css)
const customStyles = `
  :root {
    --cultura-green-primary: #3b764a;
    --cultura-green-dark: #2a5232;
    --cultura-green-light: #6a9c78;
    --cultura-sand-accent: #c4a169;
    --cultura-terracotta: #a85f47;
    --cultura-white: #fafafa;
    --cultura-gray: #d3d3d3;
    --cultura-text-secondary: #5a5a5a;
    --cultura-text-primary: #2e2e2e;
  }
`;

// Componente para textos con gradiente
const GradientText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-[var(--cultura-sand-accent)] via-[var(--cultura-terracotta)] to-[var(--cultura-green-primary)] ${className}`}
    >
      {children}
    </span>
  );
};

// Componente para items con ícono de color
const IconText: React.FC<{
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}> = ({ children, variant = "primary" }) => {
  const colorClass =
    variant === "primary"
      ? "bg-[var(--cultura-green-primary)]"
      : "bg-[var(--cultura-terracotta)]";

  return (
    <li className="flex items-start group">
      <span
        className={`w-3 h-3 ${colorClass} rounded-full mt-2 mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-125`}
      ></span>
      <span className="group-hover:text-[var(--cultura-text-primary)] transition-colors duration-300">
        {children}
      </span>
    </li>
  );
};

// Componente de timeline
const TimelineItem: React.FC<{
  year: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ year, title, description, isActive, onClick }) => {
  return (
    <div
      className={`relative pl-10 pb-8 cursor-pointer transition-all duration-500 ${
        isActive ? "opacity-100 scale-105" : "opacity-70 hover:opacity-90"
      }`}
      onClick={onClick}
    >
      <div
        className={`absolute left-0 top-0 w-6 h-6 rounded-full border-4 ${
          isActive
            ? "bg-[var(--cultura-terracotta)] border-[var(--cultura-white)] shadow-lg scale-125"
            : "bg-[var(--cultura-white)] border-[var(--cultura-terracotta)]"
        } transition-all duration-300 z-10`}
      ></div>
      <div
        className={`absolute left-3 top-6 w-0.5 h-full ${
          isActive
            ? "bg-gradient-to-b from-[var(--cultura-terracotta)] to-[var(--cultura-green-primary)]"
            : "bg-[var(--cultura-gray)]/30"
        }`}
      ></div>

      <div
        className={`p-6 rounded-xl border transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-br from-[var(--cultura-green-light)]/10 to-[var(--cultura-sand-accent)]/5 border-[var(--cultura-terracotta)]/30 shadow-lg"
            : "bg-[var(--cultura-white)] border-[var(--cultura-gray)]/20 hover:border-[var(--cultura-terracotta)]/20"
        }`}
      >
        <span
          className={`text-sm font-semibold ${
            isActive
              ? "text-[var(--cultura-terracotta)]"
              : "text-[var(--cultura-text-secondary)]"
          }`}
        >
          {year}
        </span>
        <h4
          className={`text-lg font-bold mt-2 mb-3 ${
            isActive
              ? "text-[var(--cultura-text-primary)]"
              : "text-[var(--cultura-text-secondary)]"
          }`}
        >
          {title}
        </h4>
        <p
          className={`text-sm leading-relaxed transition-all duration-500 ${
            isActive
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

// Componente para las tarjetas de artículos
const BlogPostCard: React.FC<{
  title: string;
  description: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
}> = ({ title, description, slug, imageSrc, imageAlt }) => {
  return (
    <Link
      href={`/Cultura/Blog/${slug}`}
      className="block transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-2xl group"
    >
      <div className="bg-[var(--cultura-white)] rounded-xl shadow-lg overflow-hidden border border-[var(--cultura-gray)]/20 h-full flex flex-col relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--cultura-green-primary)]/0 via-[var(--cultura-terracotta)]/0 to-[var(--cultura-sand-accent)]/0 group-hover:from-[var(--cultura-green-primary)]/5 group-hover:via-[var(--cultura-terracotta)]/3 group-hover:to-[var(--cultura-sand-accent)]/5 transition-all duration-700 z-10 rounded-xl"></div>

        <div className="relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-green-dark)]/30 to-transparent" />
          <div className="absolute top-4 right-4 bg-[var(--cultura-terracotta)] text-[var(--cultura-white)] text-xs font-bold py-1 px-3 rounded-full shadow-md">
            Cultura U&apos;wa {/* LÍNEA 152: ' -> &apos; */}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col relative z-20">
          <h3 className="text-xl font-bold text-[var(--cultura-text-primary)] mb-3 leading-tight group-hover:text-[var(--cultura-green-dark)] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[var(--cultura-text-secondary)] leading-relaxed line-clamp-3 flex-1">
            {description}
          </p>
          <span className="inline-flex items-center mt-4 text-[var(--cultura-green-primary)] font-semibold text-sm group-hover:text-[var(--cultura-green-dark)] transition-all duration-300 group-hover:translate-x-1">
            Leer más
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
        </div>
      </div>
    </Link>
  );
};

export default function HistoriayTerritorioPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: "Época Prehispánica",
      title: "Orígenes Ancestrales",
      description:
        "Los U&apos;wa habitan desde tiempos inmemoriales la Sierra Nevada del Cocuy, desarrollando una cosmovisión única basada en la relación sagrada con el territorio.", // LÍNEA 300: ' -> &apos;
    },
    {
      year: "Siglo XVI",
      title: "Resistencia a la Conquista",
      description:
        "Frente a la invasión española, los U&apos;wa mantuvieron una férrea resistencia, protegiendo sus territorios sagrados y preservando sus tradiciones.", // LÍNEA 307: ' -> &apos;
    },
    {
      year: "Siglo XIX",
      title: "Consolidación Cultural",
      description:
        "A pesar de las presiones externas, la cultura U&apos;wa se fortalece mediante la transmisión oral y la defensa de sus espacios sagrados.", // LÍNEA 328: ' -> &apos;
    },
    {
      year: "Siglo XX-XXI",
      title: "Lucha por la Autonomía",
      description:
        "El pueblo U&apos;wa continúa defendiendo su territorio frente a amenazas modernas, logrando reconocimiento legal de su resguardo y derechos ancestrales.", // LÍNEA 347: ' -> &apos;
    },
  ];

  const recentBlogPosts = [
    {
      title: "Artesanía y Tradición: La mochila, un universo portátil",
      description:
        "Cada hilo y color en las artesanías U&apos;wa tiene un significado. Sumérgete en el legado ancestral de los artesanos de la montaña.", // LÍNEA 372: ' -> &apos;
      slug: "ArtesaniayTradicion",
      imageSrc: "/Blog/Artesanias.jpg",
      imageAlt: "Primer plano de una mochila U'wa.",
    },
    {
      title: "Cosmovisión y Espiritualidad: El nevado, un templo de sanación",
      description:
        "Descubre cómo el Nevado del Cocuy, para la cultura U&apos;wa, es un lugar sagrado. Adéntrate en las profundidades de un mundo de conexión espiritual.", // LÍNEA 385: ' -> &apos;
      slug: "CosmovisionyEspiritualidad",
      imageSrc: "/Blog/Cosmovision.jpg",
      imageAlt: "Nevado El Cocuy al atardecer.",
    },

    {
      title: "Planes: Tu camino hacia la aventura con propósito",
      description:
        "Descubre los planes de senderismo y sanación diseñados para que vivas una experiencia transformadora.",
      slug: "Planes",
      imageSrc: "/Blog/Planes.jpg",
      imageAlt: "Caminante observando un paisaje montañoso.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--cultura-white)] overflow-hidden">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Blog/FondoTerritorio.png')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 w-full px-4 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-wider text-[var(--cultura-white)] animate-fade-in">
              Legado Milenario
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl animate-slide-up">
              Historia y{" "}
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--cultura-sand-accent)] via-[var(--cultura-terracotta)] to-[var(--cultura-green-primary)]">
                Territorio U&apos;wa {/* LÍNEA 380: ' -> &apos; */}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-[var(--cultura-white)]/80 md:text-xl animate-fade-in-delayed">
              Un viaje en el tiempo para entender cómo el paisaje y las leyendas
              ancestrales han forjado la identidad y la resistencia del Pueblo
              U&apos;wa. {/* LÍNEA 382: ' -> &apos; */}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative -mt-16 mb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--cultura-white)] transform hover:scale-[1.01] transition-transform duration-700">
            <div className="aspect-[21/9] relative">
              <Image
                src="/Blog/Territorio.jpg"
                alt="Ancestro U'wa observando el vasto territorio de la sierra nevada."
                fill
                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-terracotta)]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-[var(--cultura-white)] backdrop-blur-sm bg-black/30 p-2 rounded-lg">
                <span className="text-sm font-light">
                  Territorio ancestral del Pueblo U&apos;wa - Güicán, Boyacá{" "}
                  {/* LÍNEA 397: ' -> &apos; */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <article className="max-w-none">
            {/* Introducción */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--cultura-text-primary)] mb-6">
                Guardianes de un <GradientText>Legado Milenario</GradientText>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[var(--cultura-sand-accent)] to-[var(--cultura-terracotta)] mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-[var(--cultura-text-secondary)] max-w-3xl mx-auto">
                El territorio del resguardo indígena U&apos;wa de Güicán no es
                solo {/* LÍNEA 417: ' -> &apos; */}
                una extensión de tierra; es el escenario de un legado histórico
                y cultural que se ha mantenido vivo por generaciones.
              </p>
            </div>

            {/* Sección con imagen y texto lado a lado */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-square relative">
                  <Image
                    src="/Blog/Territorio2.jpg"
                    alt="Vista panorámica del territorio U'wa"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-terracotta)]/30 to-transparent"></div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--cultura-green-dark)] mb-6">
                  El Territorio como Entidad Viva
                </h3>
                <p className="text-[var(--cultura-text-primary)] leading-relaxed mb-6">
                  Para los U&apos;wa, el territorio no es un simple recurso,
                  sino una {/* LÍNEA 434: ' -> &apos; */}
                  entidad viva con la que mantienen una relación de reciprocidad
                  y respeto. Cada montaña, río y bosque tiene un significado
                  espiritual profundo.
                </p>

                <div className="bg-gradient-to-r from-[var(--cultura-green-light)]/5 to-[var(--cultura-sand-accent)]/5 rounded-xl p-6 border-l-4 border-[var(--cultura-green-primary)]">
                  <p className="text-[var(--cultura-text-primary)] italic">
                    &quot;La tierra es nuestra madre. De ella venimos y a ella{" "}
                    {/* LÍNEA 459: " -> &quot; y " -> &quot; */}
                    volveremos. Por eso la cuidamos y respetamos como a nuestra
                    propia familia.&quot; {/* LÍNEA 459: " -> &quot; */}
                  </p>
                  <span className="block mt-2 text-sm text-[var(--cultura-text-secondary)]">
                    - Sabio U&apos;wa{" "}
                    {/* LÍNEA 459: ' -> &apos; (corregido en la línea 502) */}
                  </span>
                </div>
              </div>
            </div>

            {/* Cita destacada */}
            <div className="bg-gradient-to-r from-[var(--cultura-green-light)]/10 to-[var(--cultura-sand-accent)]/10 rounded-2xl p-8 md:p-12 border-l-8 border-[var(--cultura-terracotta)] relative overflow-hidden mb-16">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--cultura-terracotta)]/10 rounded-full"></div>
              <div className="absolute -left-5 -bottom-5 w-20 h-20 bg-[var(--cultura-green-primary)]/10 rounded-full"></div>

              <p className="text-[var(--cultura-text-primary)] italic text-xl md:text-2xl leading-relaxed relative z-10">
                La historia U&apos;wa se narra a través de los{" "}
                {/* LÍNEA 502: ' -> &apos; */}
                <strong className="text-[var(--cultura-green-dark)]">
                  mitos de origen
                </strong>{" "}
                que explican la creación del mundo y el papel de su pueblo en
                él. A diferencia de las historias escritas, las suyas están
                grabadas en la memoria colectiva y en los mismos paisajes que
                recorren.
              </p>
            </div>

            {/* Sección Resistencia */}
            <div className="mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--cultura-green-dark)] mb-8 text-center">
                La Resistencia a Través del Tiempo
              </h3>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                  <p className="text-[var(--cultura-text-primary)] leading-relaxed text-lg">
                    El territorio U&apos;wa ha sido un bastión de su cultura. A
                    lo {/* LÍNEA 537: ' -> &apos; */}
                    largo de la historia, el pueblo ha demostrado una
                    inquebrantable resistencia cultural y física para defender
                    su autonomía y sus tierras sagradas.
                  </p>
                  <p className="text-[var(--cultura-text-primary)] leading-relaxed text-lg">
                    La geografía imponente del{" "}
                    <strong className="text-[var(--cultura-green-dark)]">
                      Parque Nacional Natural El Cocuy
                    </strong>{" "}
                    ha servido como un refugio natural que les ha permitido
                    preservar sus costumbres, su lengua y su cosmovisión frente
                    a las presiones externas.
                  </p>

                  <div className="bg-gradient-to-br from-[var(--cultura-terracotta)]/5 to-[var(--cultura-green-primary)]/5 rounded-xl p-6 mt-6">
                    <h4 className="font-bold text-[var(--cultura-terracotta)] mb-3 text-lg">
                      Logros de la Resistencia U&apos;wa{" "}
                      {/* LÍNEA 571: ' -> &apos; */}
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-[var(--cultura-white)] rounded-lg shadow-sm">
                        <span className="block text-2xl font-bold text-[var(--cultura-green-primary)]">
                          1990
                        </span>
                        <span className="text-sm text-[var(--cultura-text-secondary)]">
                          Reconocimiento del Resguardo
                        </span>
                      </div>
                      <div className="text-center p-3 bg-[var(--cultura-white)] rounded-lg shadow-sm">
                        <span className="block text-2xl font-bold text-[var(--cultura-green-primary)]">
                          2000+
                        </span>
                        <span className="text-sm text-[var(--cultura-text-secondary)]">
                          Hectáreas Protegidas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--cultura-white)] rounded-xl p-6 border border-[var(--cultura-gray)]/20 shadow-lg">
                  <h4 className="font-bold text-[var(--cultura-terracotta)] mb-4 text-xl">
                    Pilares de la Resistencia U&apos;wa{" "}
                    {/* LÍNEA 575: ' -> &apos; */}
                  </h4>
                  <ul className="space-y-4 text-[var(--cultura-text-secondary)]">
                    <IconText>Defensa del territorio sagrado</IconText>
                    <IconText variant="secondary">
                      Preservación de la lengua tradicional
                    </IconText>
                    <IconText>Transmisión oral de conocimientos</IconText>
                    <IconText variant="secondary">
                      Prácticas culturales ancestrales
                    </IconText>
                    <IconText>Organización comunitaria sólida</IconText>
                    <IconText variant="secondary">
                      Respeto a la autoridad tradicional
                    </IconText>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline Interactiva */}
            <div className="mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--cultura-text-primary)] mb-10 text-center">
                Línea de Tiempo Histórica
              </h3>

              <div className="relative">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    isActive={activeTimeline === index}
                    onClick={() => setActiveTimeline(index)}
                  />
                ))}
              </div>
            </div>

            {/* Sección de Galería de Imágenes */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--cultura-text-primary)] mb-8 text-center">
                Galería del Territorio U&apos;wa{" "}
                {/* LÍNEA 571: ' -> &apos; (corregido en la línea 502) */}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div
                    key={item}
                    className="aspect-square relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <Image
                      src={`/Blog/Territorio${item}.jpg`}
                      alt={`Imagen ${item} del territorio U'wa`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[var(--cultura-terracotta)] to-[var(--cultura-green-dark)] rounded-2xl p-8 md:p-12 text-center text-[var(--cultura-white)] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--cultura-white)]/10 rounded-full -translate-y-16 -translate-x-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[var(--cultura-sand-accent)]/20 rounded-full translate-y-12 translate-x-12"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[var(--cultura-green-primary)]/15 rounded-full"></div>

              <div className="relative z-10">
                <h4 className="text-3xl font-bold mb-4">
                  Recorre un Territorio con Historia
                </h4>
                <p className="mb-6 leading-relaxed text-[var(--cultura-white)]/95 text-lg max-w-2xl mx-auto">
                  Las historias más fascinantes no están en los libros, sino en
                  la tierra misma. Te ofrezco la oportunidad de un viaje único
                  para descubrir los secretos que el territorio de El Cocuy y la
                  cultura U&apos;wa tienen para contarte.{" "}
                  {/* LÍNEA 571: ' -> &apos; (corregido en la línea 502) */}
                </p>
                <a
                  href="https://wa.me/573114435481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[var(--cultura-sand-accent)] text-[var(--cultura-text-primary)] font-bold py-4 px-10 rounded-full hover:bg-[var(--cultura-white)] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg group"
                >
                  Explora la Historia Viva
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="bg-gradient-to-b from-[var(--cultura-white)] to-[var(--cultura-gray)]/10 py-16 border-t border-[var(--cultura-gray)]/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cultura-text-primary)] mb-4">
              Descubre Más Sobre la Cultura U&apos;wa{" "}
              {/* LÍNEA 571: ' -> &apos; (corregido en la línea 502) */}
            </h2>
            <p className="text-[var(--cultura-text-secondary)] max-w-2xl mx-auto text-lg">
              Explora otros aspectos fundamentales de la tradición y vida del
              Pueblo U&apos;wa a través de nuestros artículos especializados.{" "}
              {/* LÍNEA 575: ' -> &apos; (corregido en la línea 502) */}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentBlogPosts.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/Cultura/Blog"
              className="inline-flex items-center bg-gradient-to-r from-[var(--cultura-green-primary)] to-[var(--cultura-terracotta)] text-[var(--cultura-white)] font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Ver todos los artículos del blog
              <svg
                className="w-4 h-4 ml-2"
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
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
