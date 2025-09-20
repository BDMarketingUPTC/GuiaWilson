"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Map, Mountain, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModalCotizacion } from "./ModalCotizacion";

// Componente para partículas animadas optimizadas
const Particles = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[var(--neutral-100)] to-[var(--neutral-100)]/90" />
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const x1 = Math.random() * 100;
        const y1 = Math.random() * 100;
        const x2 = Math.random() * 100;
        const y2 = Math.random() * 100;
        return (
          <g key={`line-${i}`} className="animate-path-flow">
            <line
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#gradient-path)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              className="path-line"
              style={
                {
                  "--x-dir": (Math.random() - 0.5) * 2,
                  "--y-dir": (Math.random() - 0.5) * 2,
                  "--i": i,
                } as React.CSSProperties
              }
            />
            <circle
              cx={`${x1}%`}
              cy={`${y1}%`}
              r="1.5"
              fill="url(#gradient-dot)"
              className="path-dot"
            />
            <circle
              cx={`${x2}%`}
              cy={`${y2}%`}
              r="1.5"
              fill="url(#gradient-dot)"
              className="path-dot"
            />
          </g>
        );
      })}
      <defs>
        <linearGradient id="gradient-path" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--blue-light)" />
          <stop offset="100%" stopColor="var(--green-light)" />
        </linearGradient>
        <radialGradient
          id="gradient-dot"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="var(--blue-light)" />
          <stop offset="100%" stopColor="var(--green-primary)" />
        </radialGradient>
      </defs>
    </svg>
    <style jsx>{`
      @keyframes path-flow-anim {
        0% {
          transform: translate(0, 0);
          opacity: 0;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          transform: translate(var(--x-dir, 0), var(--y-dir, 0));
          opacity: 0;
        }
      }
      .path-line,
      .path-dot {
        animation: path-flow-anim 25s linear infinite;
        animation-delay: calc(var(--i, 0) * 1s);
      }
    `}</style>
  </div>
);

// Componente para motas de nieve/polvo flotantes optimizado
const DustParticles = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full bg-[var(--neutral-400)]"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.1,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

// Componente para iconos de montaña decorativos
const MountainIcons = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-5 pointer-events-none opacity-30">
      <div className="flex justify-between px-10">
        <Mountain size={40} className="text-[var(--blue-light)]" />
        <Mountain size={60} className="text-[var(--blue-light)]" />
        <Mountain size={50} className="text-[var(--blue-light)]" />
        <Mountain size={45} className="text-[var(--blue-light)]" />
      </div>
    </div>
  );
};

const MOBILE_BREAKPOINT = 768;

export const HeroBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [checkIsMobile]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay prevented:", err);
      });
    }
  }, [isMobile]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[var(--neutral-100)] text-[var(--neutral-400)]">
      {/* Fondo de video y capas de efecto mejoradas */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {isMobile ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover  "
          >
            <source src="/videos/HeroMobile.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover z-[-1]"
          >
            <source src="/videos/HeroPc.mp4" type="video/mp4" />
            <source src="/videos/HeroPc.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        )}

        {/* Capas de gradiente mejoradas para mejor contraste */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[var(--neutral-100)] via-[var(--neutral-100)]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neutral-100)]/30 to-[var(--neutral-100)]/10" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[var(--neutral-100)]/20 to-[var(--neutral-100)]/50" /> */}
      </div>

      {/* Elementos decorativos */}
      <Particles />
      <DustParticles />
      <MountainIcons />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center justify-center text-center max-w-5xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center space-y-6"
        >
          {/* Icono decorativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-2"
          >
            <div className="p-3 rounded-full bg-[var(--blue-light)]/20 backdrop-blur-sm">
              <Compass size={32} className="text-[var(--blue-primary)]" />
            </div>
          </motion.div>

          {/* Título principal */}
          <h1 className="text-4xl font-bold leading-tight px-4 text-[var(--blue-dark)] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block mb-2">Conquista la</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue-primary)] to-[var(--green-primary)]">
              cumbre
            </span>
          </h1>

          {/* Subtítulo */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: 0.3,
            }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-[var(--neutral-300)] font-light leading-relaxed"
          >
            Tu aventura hacia el{" "}
            <span className="font-semibold text-[var(--blue-primary)]">
              Nevado del Cocuy
            </span>{" "}
            comienza aquí
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: 0.4,
            }}
            className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button>
              <Map className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              <span>Cotizar mi aventura</span>
            </Button>

            <Button>
              <span>Conocer planes</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {isModalOpen && <ModalCotizacion onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};
