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

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-50 bg-[var(--neutral-white)] bg-opacity-90 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer group">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavItem href="/" text="Inicio" currentPath={pathname} />

            <DropdownMenu
              title="Servicios"
              isActive={activeDropdown === "Servicios"}
              onMouseEnter={() => handleDropdownHover("Servicios", true)}
              onMouseLeave={() => handleDropdownHover("Servicios", false)}
              onClick={() => handleDropdownToggle("Servicios")}
              currentPath={pathname}
              basePath="/Servicios"
            >
              <DropdownItem
                href="/Servicios"
                text="Planes"
                onClose={closeAllMenus}
                currentPath={pathname}
              />
              <DropdownItem
                href="/Servicios/Plan1"
                text="Pico Pan de Azúcar"
                onClose={closeAllMenus}
                currentPath={pathname}
              />
              <DropdownItem
                href="/Servicios/Plan2"
                text="Pico El Pulpito"
                onClose={closeAllMenus}
                currentPath={pathname}
              />
              <DropdownItem
                href="/Servicios/Plan3"
                text="Laguna Grande de la Sierra"
                onClose={closeAllMenus}
                currentPath={pathname}
              />
              <DropdownItem
                href="/Servicios/Plan4"
                text="Tour Completo Nevado del Cocuy"
                onClose={closeAllMenus}
                currentPath={pathname}
              />
            </DropdownMenu>

            <NavItem href="/Galeria" text="Galería" currentPath={pathname} />

            <DropdownMenu
              title="Sobre mí"
              isActive={activeDropdown === "SobreMi"}
              onMouseEnter={() => handleDropdownHover("SobreMi", true)}
              onMouseLeave={() => handleDropdownHover("SobreMi", false)}
              onClick={() => handleDropdownToggle("SobreMi")}
              currentPath={pathname}
              basePath="/SobreMi"
            >
              <DropdownItem
                href="/SobreMi"
                text="Información General"
                onClose={closeAllMenus}
                currentPath={pathname}
              />
              <DropdownItem
                href="/SobreMi#certificados"
                text="Certificados"
                onClose={closeAllMenus}
                currentPath={pathname}
              />
            </DropdownMenu>

            <NavItem href="/Contacto" text="Contacto" currentPath={pathname} />

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

          {/* Menú Móvil */}
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
              <MobileNavItem href="/" text="Inicio" currentPath={pathname} />

              <MobileDropdown
                title="Servicios"
                isOpen={activeDropdown === "Servicios"}
                onClick={() => handleDropdownToggle("Servicios")}
              >
                <DropdownItem
                  href="/Servicios"
                  text="Planes"
                  mobile
                  onClose={closeAllMenus}
                  currentPath={pathname}
                />
                <DropdownItem
                  href="/Servicios/Plan1"
                  text="Pico Pan de Azúcar"
                  mobile
                  onClose={closeAllMenus}
                  currentPath={pathname}
                />
                <DropdownItem
                  href="/Servicios/Plan2"
                  text="Pico El Pulpito"
                  mobile
                  onClose={closeAllMenus}
                  currentPath={pathname}
                />
                <DropdownItem
                  href="/Servicios/Plan3"
                  text="Laguna Grande de la Sierra"
                  mobile
                  onClose={closeAllMenus}
                  currentPath={pathname}
                />
                <DropdownItem
                  href="/Servicios/Plan4"
                  text="Tour Completo Nevado del Cocuy"
                  onClose={closeAllMenus}
                  currentPath={pathname}
                />
              </MobileDropdown>

              <MobileNavItem
                href="/Galeria"
                text="Galería"
                currentPath={pathname}
              />

              <MobileDropdown
                title="Sobre mí"
                isOpen={activeDropdown === "SobreMi"}
                onClick={() => handleDropdownToggle("SobreMi")}
              >
                <DropdownItem
                  href="/SobreMi"
                  text="Información General"
                  mobile
                  onClose={closeAllMenus}
                  currentPath={pathname}
                />
                <DropdownItem
                  href="/SobreMi#certificados"
                  text="Certificados"
                  mobile
                  onClose={closeAllMenus}
                  currentPath={pathname}
                />
              </MobileDropdown>

              <MobileNavItem
                href="/Contacto"
                text="Contacto"
                currentPath={pathname}
              />

              <div className="pt-4">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ... Resto de los componentes (NavItem, DropdownMenu, etc.) sin cambios
type NavItemProps = {
  href: string;
  text: string;
  currentPath: string;
};

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

type MobileNavItemProps = {
  href: string;
  text: string;
  currentPath: string;
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

type MobileDropdownProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
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

type DropdownItemProps = {
  href: string;
  text: string;
  mobile?: boolean;
  onClose: () => void;
  currentPath: string;
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

export default Navbar;
