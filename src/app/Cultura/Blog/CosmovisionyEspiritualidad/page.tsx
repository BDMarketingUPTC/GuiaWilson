import Image from "next/image";
import Link from "next/link";

// Define la interfaz para las props del componente BlogPostCard
interface BlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  imageSrc: string; // El tipo es ahora 'string'
  imageAlt: string;
}

// Componente reutilizable para las tarjetas de artículos
const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  slug,
  imageSrc,
  imageAlt,
}) => {
  return (
    <Link
      href={`/Cultura/Blog/${slug}`}
      className="block transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-2xl"
    >
      <div className="bg-[var(--cultura-white)] rounded-xl shadow-lg overflow-hidden border border-[var(--cultura-gray)]/20 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400} // Se añade width
            height={300} // Se añade height
            className="w-full h-48 object-cover transition-transform duration-700 ease-out hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-green-dark)]/20 to-transparent" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-[var(--cultura-text-primary)] mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-[var(--cultura-text-secondary)] leading-relaxed line-clamp-3 flex-1">
            {description}
          </p>
          <span className="inline-block mt-4 text-[var(--cultura-green-primary)] font-semibold text-sm hover:text-[var(--cultura-green-dark)] transition-colors duration-300">
            Leer más →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default function CosmovisionyEspiritualidadPage() {
  // Las rutas de las imágenes son ahora strings
  const recentBlogPosts = [
    {
      title: "Artesanía y Tradición: La mochila, un universo portátil",
      description:
        "Cada hilo y color en las artesanías U&apos;wa tiene un significado. Sumérgete en el legado ancestral de los artesanos de la montaña.", // LÍNEA 113: ' -> &apos;
      slug: "ArtesaniayTradicion",
      imageSrc: "/Blog/Artesanias.jpg",
      imageAlt: "Primer plano de una mochila U'wa.",
    },
    {
      title: "Historia y Territorio: Un viaje a las raíces de Güicán",
      description:
        "Conoce las leyendas y el pasado milenario que han forjado el territorio de Güicán y la identidad del pueblo U&apos;wa.", // LÍNEA 119: ' -> &apos;
      slug: "HistoriayTerritorio",
      imageSrc: "/Blog/Territorio.jpg",
      imageAlt: "Vista de un paisaje histórico del Cocuy.",
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
    <main className="min-h-screen bg-[var(--cultura-white)]">
      {/* Hero Section con gradiente espiritual */}
      <section className="relative">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/Galeria/Gallery11.webp"
            alt="Montañas del Nevado del Cocuy al amanecer"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Filtro oscuro */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 py-20 md:py-28 max-w-7xl relative z-10">
          <div className="text-center text-[var(--cultura-white)] max-w-4xl mx-auto">
            <div className="inline-flex items-center mb-4 px-4 py-2 bg-[var(--cultura-white)]/10 backdrop-blur-sm rounded-full border border-[var(--cultura-white)]/20">
              <div className="w-2 h-2 bg-[var(--cultura-sand-accent)] rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold">
                Espiritualidad Ancestral
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cosmovisión y{" "}
              <span className="text-[var(--cultura-sand-accent)]">
                Espiritualidad U&apos;wa {/* LÍNEA 145: ' -> &apos; */}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--cultura-white)]/90 leading-relaxed max-w-3xl mx-auto">
              Un viaje profundo al corazón de las creencias y tradiciones
              ancestrales que dan forma a la identidad del Pueblo U&apos;wa.
              Descubre {/* LÍNEA 160: ' -> &apos; */}
              la magia de su narrativa sagrada.
            </p>
          </div>
        </div>

        {/* Gradiente inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--cultura-white)] to-transparent" />
      </section>
      {/* --- */}
      {/* Featured Image Section */}
      <section className="relative -mt-16 mb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/9]">
              <Image
                src="/Galeria/Gallery18.webp"
                alt="Vista panorámica de las montañas del Nevado del Cocuy al amanecer, con una atmósfera mística."
                fill
                className="object-contain md:object-cover transition-transform duration-1000 ease-out hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-green-dark)]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-[var(--cultura-white)]">
                <span className="text-sm font-light">
                  &quot;Zizuma&quot; - El templo natural del Pueblo U&apos;wa{" "}
                  {/* LÍNEA 145: " -> &quot;, " -> &quot;, ' -> &apos; (corregido en la línea 185) */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- */}
      {/* Content Section */}
      <section className="relative mb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="max-w-none">
            {/* Introducción */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--cultura-text-primary)] mb-6">
                El Nevado: Un Templo para el Pueblo U&apos;wa{" "}
                {/* LÍNEA 167: ' -> &apos; */}
              </h2>
              <div className="h-1 w-20 bg-[var(--cultura-sand-accent)] mx-auto mb-6"></div>
            </div>

            <div className="space-y-8 text-[var(--cultura-text-primary)] leading-relaxed text-lg">
              <p>
                Para el pueblo U&apos;wa, el territorio de la Sierra Nevada del{" "}
                {/* LÍNEA 182: ' -> &apos; */}
                Cocuy, Güicán y Chita no es solo su hogar; es el corazón del
                mundo. Ellos se conciben a sí mismos como los guardianes de este
                lugar sagrado, responsables de mantener el equilibrio cósmico a
                través de sus prácticas espirituales.
              </p>

              <div className="bg-[var(--cultura-white)] rounded-xl p-8 border-l-4 border-[var(--cultura-green-primary)] shadow-sm">
                <p className="text-[var(--cultura-text-primary)] italic text-lg">
                  El{" "}
                  <strong className="text-[var(--cultura-green-dark)]">
                    Nevado del Cocuy
                  </strong>
                  , conocido por ellos como{" "}
                  <strong className="text-[var(--cultura-terracotta)]">
                    &apos;Zizuma&apos;{" "}
                    {/* LÍNEA 185: ' -> &apos;, ' -> &apos; */}
                  </strong>
                  , no es simplemente una formación geográfica, sino un ser
                  vivo, un &apos;ser-montaña&apos; sagrado. Se considera un
                  templo {/* LÍNEA 182: ' -> &apos;, ' -> &apos; */}
                  natural, el lugar donde habitan los espíritus ancestrales.
                </p>
              </div>

              {/* Sección Werjaya */}
              <div className="mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--cultura-green-dark)] mb-6 flex items-center">
                  <span className="w-3 h-3 bg-[var(--cultura-sand-accent)] rounded-full mr-3"></span>
                  La figura del &apos;Werjaya&apos; y la sanación espiritual{" "}
                  {/* LÍNEA 194: ' -> &apos;, ' -> &apos; */}
                </h3>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <p>
                      En el centro de la cosmovisión U&apos;wa se encuentra el{" "}
                      {/* LÍNEA 200: ' -> &apos; */}
                      <strong>Werjaya</strong>, el sabio espiritual y líder de
                      la comunidad. Su sabiduría no proviene de libros, sino de
                      una conexión profunda con el territorio, los sueños y la
                      tradición oral transmitida por generaciones.
                    </p>
                    <p>
                      El Werjaya es el intermediario entre el mundo físico y el
                      espiritual, y su función principal es realizar rituales de
                      sanación para el pueblo y para la Madre Tierra.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[var(--cultura-green-light)]/10 to-[var(--cultura-sand-accent)]/10 rounded-lg p-6 border border-[var(--cultura-gray)]/20">
                    <h4 className="font-bold text-[var(--cultura-green-dark)] mb-3">
                      Prácticas Espirituales
                    </h4>
                    <ul className="space-y-2 text-[var(--cultura-text-secondary)]">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--cultura-green-primary)] rounded-full mr-3"></span>
                        Ceremonias de armonización con la naturaleza
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--cultura-green-primary)] rounded-full mr-3"></span>
                        Cantos sagrados para el equilibrio cósmico
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--cultura-green-primary)] rounded-full mr-3"></span>
                        Rituales de agradecimiento a los ancestros
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Imagen dentro del contenido */}
              <div className="my-12 rounded-xl overflow-hidden shadow-xl">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/Blog/Espiritualidad1.png"
                    alt="Anciana U'wa con atuendo tradicional, meditando frente a las montañas del Cocuy."
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-green-dark)]/20 to-transparent"></div>
                </div>
                <div className="bg-[var(--cultura-white)] p-4 text-center">
                  <span className="text-sm text-[var(--cultura-text-secondary)]">
                    La sabiduría ancestral se transmite en la contemplación del
                    territorio sagrado
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Section Mejorado */}
            <div className="bg-gradient-to-br from-[var(--cultura-green-primary)] to-[var(--cultura-terracotta)] rounded-2xl p-8 mt-16 text-center text-[var(--cultura-white)] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--cultura-white)]/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--cultura-sand-accent)]/20 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">
                  Experimenta la espiritualidad en cada paso
                </h4>
                <p className="mb-6 leading-relaxed text-[var(--cultura-white)]/95">
                  La belleza de la Sierra Nevada se potencia al entender su
                  significado espiritual. Te invito a un viaje que va más allá
                  de la aventura: una experiencia de conexión donde cada montaña
                  se convierte en oportunidad para la reflexión y la sanación.
                </p>
                <a
                  href="https://wa.me/573114435481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[var(--cultura-sand-accent)] text-[var(--cultura-text-primary)] font-bold py-3 px-8 rounded-full hover:bg-[var(--cultura-white)] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Comienza tu viaje espiritual
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* --- */}
      {/* Recent Blog Posts Section */}
      <section className="bg-gradient-to-b from-[var(--cultura-white)] to-[var(--cultura-gray)]/10 py-16 border-t border-[var(--cultura-gray)]/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cultura-text-primary)] mb-4">
              Continúa Tu Exploración Cultural
            </h2>
            <p className="text-[var(--cultura-text-secondary)] max-w-2xl mx-auto">
              Descubre otros aspectos fascinantes de la tradición y cosmovisión
              del Pueblo U&apos;wa {/* LÍNEA 293: ' -> &apos; */}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentBlogPosts.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
