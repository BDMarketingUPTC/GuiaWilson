import React, { useState, useRef } from "react";
import Image from "next/image"; // Importamos el componente Image de Next.js
import "./ProfessionalCard.css";

interface ProfessionalCardProps {
  frontImage: string;
  backImage: string;
  altFront?: string;
  altBack?: string;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  frontImage,
  backImage,
  altFront = "Frente de la tarjeta profesional",
  altBack = "Reverso de la tarjeta profesional",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <div className="card-container">
      <div
        ref={cardRef}
        className={`professional-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
        onMouseMove={handleMouseMove}
        style={
          {
            "--mouse-x": `${mousePosition.x}%`,
            "--mouse-y": `${mousePosition.y}%`,
          } as React.CSSProperties
        }
      >
        {/* Cara frontal con imagen */}
        <div className="card-face card-front">
          <div className="card-glow"></div>
          {/* CORRECCIÓN: Usar <Image /> con 'fill' */}
          <div className="card-image-container">
            <Image
              src={frontImage}
              alt={altFront}
              fill
              className="card-image object-cover" // object-cover para asegurar que la imagen cubra el contenedor
            />
          </div>
          <div className="reflection-effect"></div>
          <div className="card-shine-overlay"></div>
        </div>

        {/* Cara trasera con imagen */}
        <div className="card-face card-back">
          <div className="card-glow"></div>
          {/* CORRECCIÓN: Usar <Image /> con 'fill' */}
          <div className="card-image-container">
            <Image
              src={backImage}
              alt={altBack}
              fill
              className="card-image object-cover" // object-cover para asegurar que la imagen cubra el contenedor
            />
          </div>
          <div className="reflection-effect"></div>
          <div className="card-shine-overlay"></div>
        </div>
      </div>

      <div className="card-instruction">
        <span>Click para voltear la tarjeta</span>
      </div>
    </div>
  );
};

export default ProfessionalCard;
