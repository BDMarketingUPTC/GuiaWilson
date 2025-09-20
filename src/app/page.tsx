"use client";

import { useState, useEffect } from "react";
import FAQ from "./Home/components/FAQ";
import Gallery from "./Home/components/Galeria";
import Newsletter from "./Home/components/Newletter";

import Services from "./Home/components/Servicios";
import Testimonials from "./Home/components/Testimonios";

// Importa los componentes de los banners y los modales
import HeroBannerMovil from "./Home/components/HeroBannerMovil";
import HeroBannerPC from "./Home/components/HeroBannerPC";
import { ModalCotizacion } from "./Home/components/ModalCotizacion";
import GuideModal from "./Home/components/GuideModal";

// Importa el hook personalizado
import { useMediaQuery } from "@/app/hooks/UseMediaQuery";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 760px)");
  // Define los estados para los modales aquí, en el componente padre
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  // Nuevo estado para controlar la carga del componente hero
  const [isLoading, setIsLoading] = useState(true);

  // useEffect para detectar si el cliente ha terminado de cargar la pantalla
  useEffect(() => {
    setIsLoading(false);
  }, [isDesktop]);

  // Información del guía (se mantiene aquí, ya que es el componente padre)
  const guideInfo = {
    name: "Willson Correa Will",
    bio: "Guía certificado con más de 20 años de experiencia en trekking y montañismo en el Nevado del Cocuy. Apasionado por la naturaleza y la seguridad de sus clientes.",
    imageUrl: "/guia.png",
    experience: "20+ años",
    languages: ["Español"],
    travelersGuided: 800,
    satisfactionRate: 99,
    whatsappNumber: "573114434181",
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
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>

      {/* Renderiza el Modal de Cotización si el estado es 'true' */}
      {isModalOpen && <ModalCotizacion onClose={() => setIsModalOpen(false)} />}

      {/* Renderiza el Modal del Guía si el estado es 'true' */}
      {isGuideModalOpen && (
        <GuideModal
          isOpen={isGuideModalOpen}
          onClose={() => setIsGuideModalOpen(false)}
          guideInfo={guideInfo}
        />
      )}
    </>
  );
}
