"use client";

import { useState, useEffect } from "react";
import FAQ from "./Home/components/FAQ";
import Gallery from "./Home/components/Galeria";

import Services from "./Home/components/Servicios";
import Testimonials from "./Home/components/Testimonios";

// Importa los componentes de los banners y los modales
import HeroBannerMovil from "./Home/components/HeroBannerMovil";
import HeroBannerPC from "./Home/components/HeroBannerPC";
import { ModalCotizacion } from "./Home/components/ModalCotizacion";
import GuideModal from "./Home/components/GuideModal";

// Importa el hook personalizado
import { useMediaQuery } from "@/app/hooks/UseMediaQuery";
import BlogSection from "./Home/components/BlogSection";
import RollupBannerModal from "./Home/components/RollUpBanner";
import HeroEquipo from "./Home/components/HeroEquipo";

// Clave de almacenamiento local para el banner (para no mostrarlo repetidamente)
const ROLLUP_SHOWN_KEY = "rollupBannerShown";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 760px)");
  // Define los estados para los modales
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isRollupOpen, setIsRollupOpen] = useState(false); // NUEVO ESTADO PARA EL ROLLUP

  // Estado para controlar la carga inicial del componente hero
  const [isLoading, setIsLoading] = useState(true);

  // Información del guía (se mantiene aquí, ya que es el componente padre)
  const guideInfo = {
    name: "Willson Correa Will",
    bio: "Guía certificado con más de 20 años de experiencia en trekking y montañismo en el Nevado del Cocuy. Apasionado por la naturaleza y la seguridad de sus clientes.",
    imageUrl: "/Guia.webp",
    experience: "20+ años",
    languages: ["Español"],
    travelersGuided: 2200,
    satisfactionRate: 99,
    whatsappNumber: "573114434181",
  };

  // Lógica para mostrar el Rollup Banner y controlar la carga inicial
  useEffect(() => {
    setIsLoading(false); // La pantalla ha terminado de cargar el cliente

    const wasShown = localStorage.getItem(ROLLUP_SHOWN_KEY);

    // Solo muestra el banner si no se ha mostrado antes en esta sesión/navegador
    if (!wasShown) {
      const timer = setTimeout(() => {
        setIsRollupOpen(true);
      }, 3000); // 3 segundos de retraso antes de mostrar

      return () => clearTimeout(timer);
    }
  }, []);

  // Función para cerrar el rollup banner y registrar que se mostró
  const handleRollupClose = () => {
    setIsRollupOpen(false);
    // Guarda en localStorage para no mostrarlo de nuevo por un tiempo
    // Aquí usamos Date.now() para simular que se mostró y lo guardamos por 1 día
    localStorage.setItem(ROLLUP_SHOWN_KEY, Date.now().toString());
  };

  return (
    <>
      <main>
        {/* Renderizado Condicional del Banner con un estado de carga */}
        {isLoading ? (
          <div className="w-full min-h-screen bg-gray-200 animate-pulse"></div>
        ) : isDesktop ? (
          <HeroBannerPC
            setIsModalOpen={setIsModalOpen}
            setIsGuideModalOpen={setIsGuideModalOpen}
            guideInfo={guideInfo}
          />
        ) : (
          <HeroBannerMovil />
        )}
        <Services />
        <Gallery />
        <HeroEquipo />
        <Testimonials />
        <FAQ />
        <BlogSection />
        {/* <Newsletter /> */}
      </main>

      {/* Renderiza el Modal de Cotización */}
      {isModalOpen && <ModalCotizacion onClose={() => setIsModalOpen(false)} />}

      {/* Renderiza el Modal del Guía */}
      {isGuideModalOpen && (
        <GuideModal
          isOpen={isGuideModalOpen}
          onClose={() => setIsGuideModalOpen(false)}
          guideInfo={guideInfo}
        />
      )}

      {/* Renderiza el NUEVO Rollup Banner Modal */}
      {isRollupOpen && (
        <RollupBannerModal isOpen={isRollupOpen} onClose={handleRollupClose} />
      )}
    </>
  );
}
