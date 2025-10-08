// src/app/ClientLayout.tsx (o donde sea que tengas tu ClientLayout)
"use client";

import { Footer } from "@/components/Footer";
import Navbar from "@/components/NavBar2";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsapp";
import SnowEffect from "@/components/ui/snowEfect";
import NextTopLoader from "nextjs-toploader"; // Importa NextTopLoader

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Añade NextTopLoader aquí */}
      <SnowEffect />
      <NextTopLoader
        color="var(--primario)" // Usa tu variable CSS para el color principal
        initialPosition={0.08}
        crawlSpeed={200}
        height={3} // Ajusta la altura si lo deseas
        crawl={true}
        showSpinner={false} // Para una barra sutil, generalmente no quieres un spinner
        easing="ease"
        speed={200}
        shadow="0 0 10px var(--primario),0 0 5px var(--primario)" // Sombra para el efecto de resplandor
      />

      <Navbar />
      <main className="pt-22">{children}</main>
      <div className="blur-bottom" />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
