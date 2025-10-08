"use client";

import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);

  const isCulturalTheme = pathname.startsWith("/Cultura");

  const homeLink = isCulturalTheme ? "/Cultura" : "/";

  const closeAllMenus = useCallback(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeAllMenus]);

  useEffect(() => {
    closeAllMenus();
  }, [pathname, closeAllMenus]);

  const handleDropdownHover = (menu: string, isEntering: boolean) => {
    if (window.innerWidth > 1024) {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);

      if (isEntering) {
        setActiveDropdown(menu);
      } else {
        dropdownTimeout.current = setTimeout(() => {
          setActiveDropdown(null);
        }, 200);
      }
    }
  };

  const handleDropdownToggle = (menu: string) => {
    if (window.innerWidth <= 1024) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    } else {
      setActiveDropdown(null);
    }
  };

  const whatsappNumber = "3114434181";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const xtremeNavItems = [
    {
      href: "/Servicios",
      text: "Servicios",
      dropdown: "Servicios",
      children: [
        { href: "/Servicios", text: "Planes" },
        { href: "/Servicios/Plan1", text: "Pico Pan de Azúcar" },
        { href: "/Servicios/Plan2", text: "Pico El Pulpito" },
        { href: "/Servicios/Plan3", text: "Laguna Grande de la Sierra" },
        { href: "/Servicios/Plan4", text: "Tour Completo Nevado del Cocuy" },
      ],
    },
    {
      href: "/SobreMi",
      text: "Sobre mí",
      dropdown: "SobreMi",
      children: [
        { href: "/SobreMi", text: "Información General" },
        { href: "/SobreMi#certificados", text: "Certificados" },
      ],
    },
    { href: "/Galeria", text: "Galería" },
    { href: "/Contacto", text: "Contacto" },
  ];

  const culturalNavItems = [
    { href: "/Cultura/Planes", text: "Tour Espiritual" },
    {
      href: "/Cultura/Blog",
      text: "Blog Cultural U´wa",
      dropdown: "Blog",
      children: [
        {
          href: "/Cultura/Blog",
          text: "Cultura U'wa",
        },
        {
          href: "/Cultura/Blog/ArtesaniayTradicion",
          text: "Artesanias y Tradicion",
        },
        {
          href: "/Cultura/Blog/CosmovisionyEspiritualidad",
          text: "CosmovisionYEspiritu",
        },
        {
          href: "/Cultura/Blog/HistoriayTerritorio",
          text: "Historia y Territorio",
        },
      ],
    },
    { href: "/Cultura/Galeria", text: "Galería" },
    { href: "/Cultura/SobreMi", text: "Sobre mi" },
    { href: "/Cultura/Contacto", text: "Contacto" },
  ];

  const currentNavItems = isCulturalTheme ? culturalNavItems : xtremeNavItems;

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-50 bg-[var(--neutral-white2)] bg-opacity-90 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={homeLink} passHref>
              <div className="flex items-center cursor-pointer group">
                <Image
                  src="/logoAnimado.gif"
                  alt="Logo"
                  width={110}
                  height={110}
                  className="transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>
          {/* Botones de Tema en Móvil */}
          <div className="flex-grow flex justify-center lg:hidden gap-2">
            <ThemeImageButton
              text="Xtreme"
              href="/"
              currentPath={pathname}
              src="/UI/BotonXtreme.png"
            />
            <ThemeImageButton
              text="Cultura"
              href="/Cultura"
              currentPath={pathname}
              src="/UI/BotonCultura.png"
            />
          </div>

          {/* Menú de Escritorio y Botones de Tema */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeImageButton
              text="Xtreme"
              href="/"
              currentPath={pathname}
              src="/UI/BotonXtreme.png"
            />
            <ThemeImageButton
              text="Cultura"
              href="/Cultura"
              currentPath={pathname}
              src="/UI/BotonCultura.png"
            />

            {currentNavItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu
                  key={item.href}
                  title={item.text}
                  isActive={activeDropdown === item.dropdown}
                  onMouseEnter={() => handleDropdownHover(item.dropdown, true)}
                  onMouseLeave={() => handleDropdownHover(item.dropdown, false)}
                  onClick={() => handleDropdownToggle(item.dropdown)}
                  currentPath={pathname}
                  basePath={item.href}
                >
                  {item.children?.map((child) => (
                    <DropdownItem
                      key={child.href}
                      href={child.href}
                      text={child.text}
                      onClose={closeAllMenus}
                      currentPath={pathname}
                    />
                  ))}
                </DropdownMenu>
              ) : (
                <NavItem
                  key={item.href}
                  href={item.href}
                  text={item.text}
                  currentPath={pathname}
                />
              )
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-[var(--neutral-white)] bg-gradient-to-r from-[var(--teal-accent)] to-[var(--aqua-lake)] hover:from-[var(--aqua-lake)] hover:to-[var(--teal-accent)] font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl flex items-center space-x-2"
              onClick={closeAllMenus}
            >
              <Image
                src="/iconoWhatsapW.png"
                alt="Icono WhatsApp"
                width={20}
                height={20}
              />
              <span>Contactar Ahora</span>
            </a>
          </div>

          {/* Botón de Menú Móvil */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[var(--blue-primary)] hover:text-[var(--blue-dark)] focus:outline-none transition-all duration-300 hover:bg-[var(--neutral-gray)]"
              aria-label="Menu"
            >
              <svg
                className="h-7 w-7"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-[var(--neutral-white)] border-t border-[var(--neutral-gray)] shadow-inner"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {currentNavItems.map((item) =>
                item.dropdown ? (
                  <MobileDropdown
                    key={item.href}
                    title={item.text}
                    isOpen={activeDropdown === item.dropdown}
                    onClick={() => handleDropdownToggle(item.dropdown)}
                  >
                    {item.children?.map((child) => (
                      <DropdownItem
                        key={child.href}
                        href={child.href}
                        text={child.text}
                        mobile
                        onClose={closeAllMenus}
                        currentPath={pathname}
                      />
                    ))}
                  </MobileDropdown>
                ) : (
                  <MobileNavItem
                    key={item.href}
                    href={item.href}
                    text={item.text}
                    currentPath={pathname}
                  />
                )
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-xl text-lg font-semibold text-[var(--neutral-white)] bg-gradient-to-r from-[var(--teal-accent)] to-[var(--aqua-lake)] hover:from-[var(--aqua-lake)] hover:to-[var(--teal-accent)] transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center space-x-2"
                onClick={closeAllMenus}
              >
                <Image
                  src="/iconoWhatsapW.png"
                  alt="Icono WhatsApp"
                  width={24}
                  height={24}
                />
                <span>Contactar Ahora</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// TIPOS DE COMPONENTES AUXILIARES (sin cambios relevantes)
type NavItemProps = {
  href: string;
  text: string;
  currentPath: string;
};

type DropdownItemProps = {
  href: string;
  text: string;
  mobile?: boolean;
  onClose: () => void;
  currentPath: string;
};

type DropdownMenuProps = {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  currentPath: string;
  basePath: string;
};

type MobileNavItemProps = {
  href: string;
  text: string;
  currentPath: string;
};

type MobileDropdownProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

// **ThemeButtonProps eliminada por no ser usada**

type ThemeImageButtonProps = {
  href: string;
  text: string;
  currentPath: string;
  src: string;
};

// COMPONENTES AUXILIARES (ThemeImageButton modificado)

const NavItem = ({ href, text, currentPath }: NavItemProps) => {
  const isActive =
    currentPath === href || (href !== "/" && currentPath.startsWith(href));
  return (
    <Link href={href} passHref>
      <div
        className={`relative cursor-pointer group font-medium ${
          isActive
            ? "text-[var(--blue-dark)]"
            : "text-[var(--neutral-text-secondary)] hover:text-[var(--blue-primary)]"
        } transition-all duration-300`}
      >
        {text}
        <span
          className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[var(--teal-accent)] to-[var(--aqua-lake)] group-hover:w-full transition-all duration-300 ${
            isActive ? "w-full" : "w-0"
          }`}
        ></span>
      </div>
    </Link>
  );
};

const DropdownItem = ({
  href,
  text,
  mobile = false,
  onClose,
  currentPath,
}: DropdownItemProps) => {
  const isActiveItem = currentPath === href;
  return (
    <Link href={href} passHref>
      <div
        onClick={onClose}
        className={`${
          mobile ? "px-6 py-3 text-base" : "block px-4 py-2.5 text-sm"
        } ${
          isActiveItem
            ? "bg-[var(--neutral-gray)] text-[var(--blue-dark)]"
            : "text-[var(--neutral-text-secondary)] hover:bg-[var(--neutral-gray)] hover:text-[var(--blue-dark)]"
        } transition-all duration-200 cursor-pointer`}
      >
        {text}
      </div>
    </Link>
  );
};

const DropdownMenu = ({
  title,
  children,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
  currentPath,
  basePath,
}: DropdownMenuProps) => {
  const isMenuHighlighted = isActive || currentPath.startsWith(basePath);

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={onClick}
        className={`flex items-center font-medium ${
          isMenuHighlighted
            ? "text-[var(--blue-dark)]"
            : "text-[var(--neutral-text-primary)] hover:text-[var(--blue-primary)]"
        } transition-all duration-300`}
      >
        {title}
        <motion.svg
          className="ml-1 h-5 w-5 transform transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isActive ? 180 : 0 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute left-0 mt-3 w-56 rounded-xl shadow-xl bg-[var(--neutral-white)] border border-[var(--neutral-gray)] overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="py-2 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavItem = ({ href, text, currentPath }: MobileNavItemProps) => {
  const isActive =
    currentPath === href || (href !== "/" && currentPath.startsWith(href));
  return (
    <Link href={href} passHref>
      <div
        className={`block px-5 py-4 rounded-xl text-lg font-medium ${
          isActive
            ? "bg-[var(--neutral-gray)] text-[var(--blue-dark)]"
            : "text-[var(--neutral-text-primary)] hover:bg-[var(--neutral-gray)] hover:text-[var(--blue-dark)]"
        } transition-all duration-200`}
      >
        {text}
      </div>
    </Link>
  );
};

const MobileDropdown = ({
  title,
  children,
  isOpen,
  onClick,
}: MobileDropdownProps) => (
  <div className="space-y-2">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-5 py-4 rounded-xl text-lg font-medium text-[var(--neutral-text-primary)] hover:bg-[var(--neutral-gray)] hover:text-[var(--blue-primary)] transition-all duration-200"
    >
      {title}
      <motion.svg
        className="ml-2 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </motion.svg>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="pl-6 space-y-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Componente ThemeImageButton modificado para aplicar efectos directamente a la imagen

const ThemeImageButton = ({
  href,
  text,
  currentPath,
  src,
}: ThemeImageButtonProps) => {
  const isXtremeActive =
    text === "Xtreme" && !currentPath.startsWith("/Cultura");
  const isCulturalActive =
    text === "Cultura" && currentPath.startsWith("/Cultura");

  const isActive = isXtremeActive || isCulturalActive;

  return (
    <Link href={href} passHref>
      <div className={`relative w-[120px] h-[50px] cursor-pointer block`}>
        {/* Glow de fondo solo si está activo */}
        {isActive && (
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/40 blur-lg animate-pulse z-0" />
        )}

        {/* Imagen principal */}
        <Image
          src={src}
          alt={text}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-contain transition-transform duration-200 ease-out z-10
            ${isActive ? "scale-105 opacity-100" : "scale-100 opacity-70"}
            hover:scale-105 hover:opacity-100
            active:scale-95
          `}
        />
      </div>
    </Link>
  );
};

export default Navbar;
