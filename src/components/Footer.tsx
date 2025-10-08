"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Mail, Phone, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface FooterLink {
  href: string;
  text: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
  open: string | null;
  toggle: (section: string) => void;
  isMobile: boolean;
}

const FOOTER_SECTIONS = {
  NAVIGATION: "Navegación",
  RESOURCES: "Recursos",
};

// Enlaces adaptados a la temática de senderismo
const NAVIGATION_LINKS: FooterLink[] = [
  { href: "/", text: "Inicio" },
  { href: "/Servicios", text: "Servicios" },
  { href: "/Galeria", text: "Galería" },
  { href: "/SobreMi", text: "Sobre mí" },
  { href: "/Contacto", text: "Contacto" },
];

const RESOURCE_LINKS: FooterLink[] = [
  { href: "/Cultura/Blog", text: "Blog" },
  { href: "/FAQs", text: "FAQs" },
  { href: "/Privacidad", text: "Privacidad" },
  { href: "/Terminos", text: "Términos" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/wilsonwikanes_5.330/",
    label: "Instagram",
    icon: <Instagram size={20} />,
  },
  {
    href: "https://www.facebook.com/wilson.correa.1865",
    label: "Facebook",
    icon: <Facebook size={20} />,
  },
  {
    href: "https://wa.me/573114435481?text=Hola,%20quiero%20más%20información%20sobre%20tu%20servicio",
    label: "WhatsApp",
    icon: <FaWhatsapp size={20} />,
  },
];

const FooterSection = ({
  title,
  links,
  open,
  toggle,
  isMobile,
}: FooterSectionProps) => {
  const isOpen = open === title;

  return (
    <div className="space-y-4">
      <button
        onClick={() => toggle(title)}
        className="w-full flex justify-between items-center text-left text-sm font-bold uppercase tracking-widest text-[var(--neutral-white)] hover:text-[var(--aqua-lake)] transition-colors duration-200 md:cursor-default"
        aria-expanded={isOpen}
        aria-controls={`footer-section-${title
          .toLowerCase()
          .replace(/\s/g, "-")}`}
      >
        {title}
        {isMobile && (
          <ChevronDown
            className={`w-5 h-5 text-[var(--neutral-white)] transition-transform duration-200 transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      <div
        id={`footer-section-${title.toLowerCase().replace(/\s/g, "-")}`}
        className={`space-y-3 text-sm transition-all duration-300 ease-in-out ${
          !isMobile || isOpen ? "block" : "hidden"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block text-[var(--neutral-text-secondary)] hover:text-[var(--neutral-white)] transition-colors duration-200"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Footer = () => {
  const [open, setOpen] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section: string) => {
    if (isMobile) {
      setOpen((prev) => (prev === section ? null : section));
    }
  };

  return (
    <footer className="bg-[var(--blue-dark)] text-[var(--neutral-white)] border-t border-[var(--neutral-gray)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-10">
        {/* Brand Section */}
        <div className="mb-12 md:mb-10 bg-[var(--blue-dark)] flex flex-col items-center text-center">
          <Link href="/" passHref className="group block">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-5">
              <Image
                src="/Logo.webp"
                alt="Guía de Senderismo"
                width={200}
                height={160}
                priority={false}
                className="bg-[var(--neutral-gray)] p-2 rounded-full shadow-lg border-4 border-[var(--teal-accent)] transition-transform duration-300 hover:scale-105"
              />
              <p className="text-sm text-[var(--neutral-text-secondary)] max-w-xs leading-relaxed sm:leading-relaxed font-light">
                Tu guía experto en el Nevado del Cocuy. Aventura, seguridad y
                conocimiento en cada paso.
              </p>
            </div>
          </Link>
        </div>
        {/* Links Sections */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          <FooterSection
            title={FOOTER_SECTIONS.NAVIGATION}
            links={NAVIGATION_LINKS}
            open={open}
            toggle={toggleSection}
            isMobile={isMobile}
          />
          <FooterSection
            title={FOOTER_SECTIONS.RESOURCES}
            links={RESOURCE_LINKS}
            open={open}
            toggle={toggleSection}
            isMobile={isMobile}
          />
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--neutral-white)]">
              Contacto
            </h3>
            <address className="not-italic space-y-2">
              <a
                href="mailto:tu-correo@ejemplo.com"
                className="text-sm text-[var(--neutral-text-secondary)] hover:text-[var(--neutral-white)] transition-colors duration-200 flex items-center gap-2"
              >
                <Mail size={16} className="text-[var(--aqua-lake)]" />
                tu-correo@ejemplo.com
              </a>
              <a
                href="tel:+573214567890"
                className=" text-sm text-[var(--neutral-text-secondary)] hover:text-[var(--neutral-white)] transition-colors duration-200 flex items-center gap-2"
              >
                <Phone size={16} className="text-[var(--teal-accent)]" />
                +57 3114434181
              </a>
            </address>
            <div className="flex gap-6 pt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  hover:text-[var(--neutral-white)] transition-colors duration-200 text-lg hover:scale-110 transform"
                  aria-label={`Enlace a ${social.label}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative Line */}
      <div className="h-0.5 bg-gradient-to-r from-[var(--teal-accent)] to-[var(--aqua-lake)] opacity-40" />
      {/* Copyright */}
      <div className="py-6 font-light text-center text-xs text-[var(--neutral-text-secondary)]">
        © {currentYear} Creado por {""}
        <a
          href="https://briamtorres.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Briam Torres & Cromneon
        </a>
        , esta es una pagina web en proceso de confirmacion. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};
