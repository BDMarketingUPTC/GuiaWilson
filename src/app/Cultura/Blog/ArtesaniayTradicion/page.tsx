import Image from "next/image";
import Link from "next/link";

// Define la interfaz para las props del componente BlogPostCard
interface BlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  imageSrc: string;
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
            width={400}
            height={300}
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

export default function ArtesaniayTradicionPage() {
  const recentBlogPosts = [
    {
      title: "Cosmovisión y Espiritualidad: El nevado, un templo de sanación",
      description:
        "Descubre cómo el Nevado del Cocuy es un lugar sagrado para la cultura U&apos;wa.", // Línea 100: ' -> &apos;
      slug: "CosmovisionyEspiritualidad",
      imageSrc: "/Blog/Cosmovision.jpg",
      imageAlt: "Nevado El Cocuy al atardecer.",
    },
    {
      title: "Historia y Territorio: Un viaje a las raíces de Güicán",
      description:
        "Sumérgete en las historias ancestrales que han forjado el territorio de Güicán.",
      slug: "HistoriayTerritorio",
      imageSrc: "/Blog/Territorio.jpg",
      imageAlt: "Grabado rupestre en una piedra del Cocuy.",
    },
    {
      title: "Planes: Tu camino hacia la aventura con propósito",
      description:
        "Conoce los planes de senderismo y sanación diseñados para una experiencia transformadora.",
      slug: "Planes",
      imageSrc: "/Blog/Planes.jpg",
      imageAlt: "Caminante observando un paisaje andino.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--cultura-white)]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center">
        {/* Imagen de fondo */}
        <Image
          src="/Blog/FondoArtesanias.png"
          alt="Fondo cultural U'wa" // La comilla en un atributo no suele dar problemas, pero la mantendré.
          fill
          priority
          className="object-cover object-center"
        />

        {/* Capa oscura encima */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-4 py-20 md:py-28 max-w-7xl relative z-10">
          <div className="text-center text-[var(--cultura-white)] max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-[var(--cultura-white)]/10 backdrop-blur-sm rounded-full border border-[var(--cultura-white)]/20">
              <span className="text-sm font-semibold">Cultura U&apos;wa</span>{" "}
              {/* Línea 161: ' -> &apos; */}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Artesanía y Tradición del{" "}
              <span className="text-[var(--cultura-sand-accent)]">
                Pueblo U&apos;wa {/* Línea 168: ' -> &apos; */}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--cultura-white)]/90 leading-relaxed max-w-3xl mx-auto">
              Un legado de conocimientos que se transmiten de generación en
              generación. Honramos la habilidad, la paciencia y el profundo
              respeto por la naturaleza.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative -mt-16 mb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="
          relative flex items-center justify-center bg-black 
          min-h-[70vh] md:min-h-[80vh] 
        "
            >
              {/* Fondo difuminado */}
              <video
                src="/Blog/Artesanias.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
              />

              {/* Video principal centrado */}
              <video
                src="/Blog/Artesanias.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 h-full max-h-[90vh] object-contain"
              />

              {/* Overlay degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--cultura-green-dark)]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            {/* Introducción */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--cultura-text-primary)] mb-6">
                La esencia de la cultura U&apos;wa en sus manos{" "}
                {/* Línea 182: ' -> &apos; */}
              </h2>
              <div className="h-1 w-20 bg-[var(--cultura-sand-accent)] mx-auto mb-6"></div>
            </div>

            <div className="space-y-8 text-[var(--cultura-text-primary)] leading-relaxed">
              <p className="text-lg">
                Las artesanías del pueblo U&apos;wa, conocidos como &quot;la
                gente de la{" "}
                {/* Línea 212: ' -> &apos; ; Línea 219: " -> &quot; */}
                montaña&quot; o &quot;gente sabia&quot;, no son meros objetos
                decorativos. Son{" "}
                {/* Línea 219: " -> &quot; ; Línea 219: " -> &quot; ; Línea 219: " -> &quot; */}
                una extensión de su cosmovisión y una manifestación tangible de
                su conexión con la naturaleza y el universo.
              </p>

              {/* Sección Tejido */}
              <div className="bg-[var(--cultura-white)] rounded-xl p-8 border border-[var(--cultura-gray)]/10">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--cultura-green-dark)] mb-6">
                  El arte del tejido: la mochila, un universo portátil
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="mb-4">
                      Si hay una pieza que define la tradición U&apos;wa, es la{" "}
                      {/* Línea 266: ' -> &apos; */}
                      mochila. Más que un simple bolso, es un objeto de profunda
                      significación espiritual y social.
                    </p>
                    <p>
                      Los patrones y diseños no son aleatorios. Representan
                      elementos sagrados como el sol, la luna, las estrellas,
                      los ríos, las montañas y los animales.
                    </p>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/Blog/Artesanias.jpg"
                      alt="Primer plano de las manos de una artesana U'wa tejiendo una mochila con hilos coloridos." // La comilla en un atributo no suele dar problemas.
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Sección Alfarería */}
              <div className="bg-[var(--cultura-white)] rounded-xl p-8 border border-[var(--cultura-gray)]/10">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--cultura-green-dark)] mb-6">
                  Alfarería y cestería: la tierra y sus secretos
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <p className="mb-4">
                      La alfarería U&apos;wa es un arte que se nutre
                      directamente de {/* Línea 270: ' -> &apos; */}
                      la tierra. Utilizando el barro extraído de las orillas de
                      los ríos, los artesanos modelan vasijas, ollas y figuras
                      con significado ceremonial.
                    </p>
                    <p>
                      El proceso de amasado, cocción y decoración es un ritual
                      que honra al &quot;dueño&quot; del barro, pidiendo permiso
                      para su {/* Línea 274: " -> &quot; */}
                      uso y agradeciendo su generosidad.
                    </p>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                    <Image
                      src="/Blog/Alfareria.png"
                      alt="Mujer U'wa moldeando una vasija de barro."
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[var(--cultura-green-primary)] to-[var(--cultura-green-dark)] rounded-2xl p-8 mt-12 text-center text-[var(--cultura-white)] shadow-xl">
              <h4 className="text-2xl font-bold mb-4">
                Vive esta cultura en persona
              </h4>
              <p className="mb-6 leading-relaxed">
                Las historias de estos objetos cobran vida cuando las
                experimentas de primera mano. Conoce los paisajes que inspiran
                estos diseños y a las personas que los crean.
              </p>

              <a
                href="https://wa.me/573114434181"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[var(--cultura-sand-accent)] text-[var(--cultura-text-primary)] font-bold py-3 px-8 rounded-full hover:bg-[var(--cultura-terracotta)] hover:text-[var(--cultura-white)] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contáctame para planear tu viaje
                <span className="ml-2">→</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="bg-[var(--cultura-white)] py-16 border-t border-[var(--cultura-gray)]/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cultura-text-primary)] mb-4">
              Explora Más Sobre la Cultura U&apos;wa
            </h2>
            <p className="text-[var(--cultura-text-secondary)] max-w-2xl mx-auto">
              Descubre otros aspectos fascinantes de la tradición y cosmovisión
              del Pueblo U&apos;wa
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
