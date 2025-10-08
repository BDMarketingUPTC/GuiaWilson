// app/equipo/page.tsx
import {
  Mountain,
  Shirt,
  Zap,
  Shield,
  BookOpen,
  CheckCircle,
  MessageSquare, // Cambiado de Whatsapp a MessageSquare
} from "lucide-react";
import Image from "next/image"; // Importar el componente Image de Next.js

// --- Definiciones de Tipos y Datos (Se mantienen igual para claridad) ---

interface ItemDeEquipo {
  nombre: string;
  descripcion: string;
}

interface SeccionDeEquipo {
  titulo: string;
  icono: React.ElementType;
  color: string;
  items: ItemDeEquipo[];
}

const equipoEsencial: SeccionDeEquipo[] = [
  // ... (Los datos de equipoEsencial se mantienen igual)
  {
    titulo: "Vestimenta por Capas",
    icono: Shirt,
    color: "text-[#378696]", // teal-accent
    items: [
      {
        nombre: "Capa Base Térmica",
        descripcion:
          "Camisetas y pantalones de lana merino o sintéticos. Es vital que expulsen la humedad.",
      },
      {
        nombre: "Capa Intermedia (Aislamiento)",
        descripcion:
          "Polar (fleece) grueso y/o una chaqueta de plumas (down jacket) de 600+ fill power.",
      },
      {
        nombre: "Capa Externa (Protección)",
        descripcion:
          "Chaqueta y pantalón impermeables/cortavientos (Gore-Tex o similar). Es la barrera contra lluvia y viento.",
      },
      {
        nombre: "Botas de Montaña",
        descripcion:
          'Impermeables, de caña alta, con buen soporte de tobillo y suela rígida para nieve/hielo. ¡Ya "domadas"!',
      },
    ],
  },
  {
    titulo: "Accesorios y Protección",
    icono: Shield,
    color: "text-[#69a7b9]", // aqua-lake
    items: [
      {
        nombre: "Gorro y Buff/Balaclava",
        descripcion:
          "Para mantener la cabeza y el cuello abrigados. Se pierde mucho calor por la cabeza.",
      },
      {
        nombre: "Guantes (2 pares)",
        descripcion:
          "Un par ligero (para el ascenso) y un par impermeable/térmico de alta montaña (para la cumbre).",
      },
      {
        nombre: "Gafas de Sol Categoría 3 o 4",
        descripcion:
          "La radiación UV es extrema en altura y el reflejo en la nieve es muy peligroso (ceguera de nieve).",
      },
      {
        nombre: "Protector Solar y Labial",
        descripcion:
          "Factor de protección solar (FPS) muy alto (50+). Aplicar cada 2 horas.",
      },
    ],
  },
  {
    titulo: "Herramientas y Varios",
    icono: Zap,
    color: "text-[#0a2342]", // blue-primary
    items: [
      {
        nombre: "Mochila (40-50 Litros)",
        descripcion:
          "Cómoda, con soporte lumbar y cubierta impermeable (rain cover).",
      },
      {
        nombre: "Linterna Frontal",
        descripcion:
          "Con pilas o batería de repuesto. Esenciales para caminatas antes del amanecer.",
      },
      {
        nombre: "Botella de Agua/Termo",
        descripcion:
          "Mínimo 2 litros de capacidad (no se recomienda camelbak por congelación). Termo para bebidas calientes.",
      },
      {
        nombre: "Botiquín Personal",
        descripcion:
          "Medicamentos básicos, vendas, pastillas para purificar agua y elementos de higiene personal.",
      },
    ],
  },
];

// --- Componente de Tarjeta de Ítem (Se mantiene igual) ---

const ItemCard: React.FC<{ item: ItemDeEquipo }> = ({ item }) => (
  <li className="flex items-start space-x-3 py-3 border-b border-[#e4e7eb] last:border-b-0">
    <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#378696]" />
    <div>
      <h4 className="text-lg font-semibold text-[#1f2937] leading-tight">
        {item.nombre}
      </h4>
      <p className="text-sm text-[#6b7280] mt-0.5">{item.descripcion}</p>
    </div>
  </li>
);

// --- Componente de Sección de Equipo (Se mantiene igual) ---

const SeccionCard: React.FC<{ seccion: SeccionDeEquipo }> = ({ seccion }) => {
  const Icon = seccion.icono;

  return (
    <div className="bg-[#ffffff] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#378696]/50">
      {/* Encabezado de la Sección */}
      <div className="flex items-center space-x-3 mb-4 border-b pb-3 border-[#e4e7eb]/50">
        <Icon className={`w-8 h-8 ${seccion.color} flex-shrink-0`} />
        <h3 className="text-2xl font-bold text-[#0a2342] tracking-wide">
          {seccion.titulo}
        </h3>
      </div>

      {/* Lista de Ítems */}
      <ul className="divide-y divide-[#e4e7eb]">
        {seccion.items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

// --- Componente de Llamada a la Acción (CTA) ---

const CTASection: React.FC = () => {
  const phoneNumber = "+573114434181";
  const preFilledMessage = encodeURIComponent(
    "¡Hola! Estoy planeando mi expedición al Cocuy y me gustaría saber más detalles sobre el equipo esencial y disponibilidad de guías."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${preFilledMessage}`;

  return (
    <div className="mt-16 bg-[#1c4b78] py-12 rounded-xl shadow-2xl text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff]">
        ¿Dudas sobre tu Equipo? ¡Pregúntale a un Experto!
      </h2>
      <p className="mt-3 text-xl text-[#69a7b9] max-w-2xl mx-auto">
        Un guía certificado te puede asesorar sobre el clima, alquiler de
        equipos y garantizar tu seguridad en la travesía.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg text-[#0a2342] bg-[#378696] hover:bg-[#69a7b9] transition duration-300 transform hover:scale-105"
      >
        <MessageSquare className="w-6 h-6 mr-2" />{" "}
        {/* Cambiado de Whatsapp a MessageSquare */}
        Contacta a tu Guía por WhatsApp
      </a>
    </div>
  );
};

// --- Componente para la Imagen Estratégica ---

const ImageSection: React.FC = () => (
  <div className="mt-16 mb-16 relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
    {/* NOTA: Debes reemplazar '/images/guia-cocuy.jpg' con la ruta real de tu imagen. */}
    {/* Es crucial usar el componente Image de Next.js para optimización. */}
    <Image
      src="/Blog/Senderismo.png" // RUTA DE EJEMPLO
      alt="Guía de senderismo bien equipado en el Nevado del Cocuy"
      fill
      style={{ objectFit: "cover" }}
      className="filter brightness-75 transition duration-500 hover:brightness-100" // Efecto sutil de hover
    />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      <p className="text-4xl font-black text-[#ffffff] text-shadow-lg p-4">
        ¡La calidad de tu equipo marca la diferencia!
      </p>
    </div>
  </div>
);

// --- Componente Principal de la Página ---

const EquipoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {" "}
      {/* neutral-white2 */}
      {/* --- Encabezado Hero (CORRECCIÓN DE COLOR AQUÍ) --- */}
      <header className="bg-[#0a2342] py-20 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Mountain className="w-12 h-12 text-[#69a7b9] flex-shrink-0" />
            <div>
              {/* Títulos en blanco para contraste sobre fondo azul oscuro */}
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#ffffff]">
                Equipo Esencial para El Cocuy
              </h1>
              <p className="mt-2 text-xl font-light text-[#ffffff]/90">
                Prepárate para la Alta Montaña: Lo que NO puede faltar en tu
                mochila.
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* --- Contenido Principal --- */}
      <main className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grilla de Tarjetas con la información del equipo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipoEsencial.map((seccion, index) => (
              <SeccionCard key={index} seccion={seccion} />
            ))}
          </div>

          {/* 1. Sección de Imagen Estratégica (Muestra el uso del equipo) */}
          <ImageSection />

          {/* 2. Sección de CTA (Punto de conversión estratégico) */}
          <CTASection />

          {/* 3. Sección de NOTA IMPORTANTE */}
          <div className="mt-16 p-8 bg-[#1c4b78]/10 border-l-4 border-[#1c4b78] rounded-r-lg">
            <h3 className="text-2xl font-bold text-[#0a2342] mb-3 flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-[#1c4b78]" />
              <span>Nota del Guía</span>
            </h3>
            <p className="text-lg text-[#1f2937]">
              <b>Se recomienda que todo el equipo debe sea de montaña</b>, no de
              uso casual. Las
              <b>
                Botas de Montaña se recomiendan impermeables y usadas
                previamente.
              </b>
              Si tienes dudas sobre alguna pieza, consúltanos antes de la
              expedición. La hidratación y la protección contra el frío son los
              factores más críticos.
            </p>
          </div>
        </div>
      </main>
      {/* --- Pie de Página --- */}
    </div>
  );
};

export default EquipoPage;
