"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Star, Users, Calendar, Heart, ArrowRight } from "lucide-react";

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  guideInfo: {
    name: string;
    bio: string;
    imageUrl: string;
    experience: string;
    languages: string[];
    travelersGuided: number;
    satisfactionRate: number;
    whatsappNumber: string;
  };
}

const GuideModal: React.FC<GuideModalProps> = ({
  isOpen,
  onClose,
  guideInfo,
}) => {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const whatsappMessage = `Hola, estoy interesado en un tour al Cocuy y me gustaría contactar con ${guideInfo.name}.`;
  const whatsappLink = `https://wa.me/${
    guideInfo.whatsappNumber
  }?text=${encodeURIComponent(whatsappMessage)}`;

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--cultura-green-dark)] bg-opacity-80 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={onClose}
        >
          <motion.div
            className="bg-[var(--cultura-white)] text-[var(--cultura-text-primary)] rounded-2xl shadow-2xl p-6 w-full max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto relative border-2 border-[var(--cultura-sand-accent)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[var(--cultura-text-secondary)] hover:text-[var(--cultura-terracotta)] transition-colors text-3xl font-light leading-none z-10"
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0 relative w-48 h-48 md:w-56 md:h-56">
                <Image
                  src={guideInfo.imageUrl}
                  alt={`Fotografía de ${guideInfo.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full border-4 border-[var(--cultura-sand-accent)] shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute -bottom-2 -right-2 bg-[var(--cultura-sand-accent)] text-[var(--cultura-white)] p-2 rounded-full shadow-lg">
                  <Award size={20} />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-extrabold text-[var(--cultura-green-dark)] mb-2">
                  {guideInfo.name}
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[var(--cultura-sand-accent)] text-[var(--cultura-sand-accent)]"
                    />
                  ))}
                  <span className="ml-2 font-semibold text-[var(--cultura-text-secondary)]">
                    4.9/5
                  </span>
                </div>
                <p className="text-lg text-[var(--cultura-text-primary)] leading-relaxed mb-6">
                  {guideInfo.bio}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center justify-center p-3 bg-[var(--cultura-gray)] rounded-lg">
                    <Calendar className="text-[var(--cultura-green-light)] w-6 h-6 mb-1" />
                    <span className="font-bold text-xl text-[var(--cultura-green-light)]">
                      {guideInfo.experience}
                    </span>
                    <span className="text-sm text-[var(--cultura-text-secondary)]">
                      Experiencia
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-[var(--cultura-gray)] rounded-lg">
                    <Users className="text-[var(--cultura-terracotta)] w-6 h-6 mb-1" />
                    <span className="font-bold text-xl text-[var(--cultura-terracotta)]">
                      {guideInfo.travelersGuided}+
                    </span>
                    <span className="text-sm text-[var(--cultura-text-secondary)]">
                      Viajeros guiados
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-[var(--cultura-gray)] rounded-lg">
                    <Heart className="text-[var(--cultura-terracotta)] w-6 h-6 mb-1" />
                    <span className="font-bold text-xl text-[var(--cultura-terracotta)]">
                      {guideInfo.satisfactionRate}%
                    </span>
                    <span className="text-sm text-[var(--cultura-text-secondary)]">
                      Satisfacción
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-base">
                  <p>
                    <strong className="text-[var(--cultura-green-dark)]">
                      Idiomas:
                    </strong>{" "}
                    <span className="text-[var(--cultura-text-primary)] font-medium">
                      {guideInfo.languages.join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[var(--cultura-white)] bg-gradient-to-r from-[var(--cultura-green-dark)] to-[var(--cultura-green-primary)] hover:from-[var(--cultura-green-primary)] hover:to-[var(--cultura-green-light)] transition-colors duration-200 font-bold shadow-md w-full sm:w-auto"
              >
                Contactar por WhatsApp
                <ArrowRight size={18} className="ml-2" />
              </a>

              <Link
                href="/Cultura/SobreMi"
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[var(--cultura-green-dark)] border-2 border-[var(--cultura-green-dark)] hover:bg-[var(--cultura-gray)] transition-colors duration-200 font-semibold w-full sm:w-auto"
              >
                Más información sobre mí
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GuideModal;
