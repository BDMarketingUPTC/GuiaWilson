"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  href?: string;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  withArrow?: boolean;
  size?: "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "secondary"
    | "light"
    | "dark"
    | "cultura-primary"
    | "cultura-secondary"
    | "cultura-accent"
    | "cultura-terracotta"
    | "green-shades"
    | "green-gradient";
  fullWidth?: boolean;
}

export const Button = ({
  children,
  onClick,
  href,
  isLoading = false,
  disabled = false,
  className = "",
  withArrow = false,
  size = "md",
  variant = "primary",
  fullWidth = false,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [internalLoading, setInternalLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    if (isLoading || internalLoading || disabled) return;

    const shouldWait = !!onClick;

    if (shouldWait) setInternalLoading(true);

    try {
      if (onClick) await onClick();

      if (href && !href.startsWith("#")) {
        router.push(href);
      }
    } finally {
      if (shouldWait) setInternalLoading(false);
    }
  };

  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-6 py-5 text-base",
    lg: "px-8 py-7 text-lg",
  };

  const variantStyles = {
    primary: {
      base: "bg-[var(--teal-accent)] text-[var(--neutral-white)]",
      topShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
      bottomShadow: "0 5px 0 #137A8A",
      active:
        "bg-[#1CA4B3] inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1.5px 0 #137A8A",
    },
    secondary: {
      base: "bg-[var(--blue-light)] text-[var(--neutral-white)]",
      topShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
      bottomShadow: "0 5px 0 #134169",
      active:
        "bg-[#113a5e] inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1.5px 0 #134169",
    },
    light: {
      base: "bg-[var(--aqua-lake)] text-[var(--neutral-text-primary)]",
      topShadow: "inset 0 1px 1px rgba(255,255,255,0.7)",
      bottomShadow: "0 4px 0 #4f8796",
      active:
        "bg-[#4f8796] inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -2px 0 #4f8796",
    },
    dark: {
      base: "bg-[var(--blue-dark)] text-[var(--neutral-white)]",
      topShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
      bottomShadow: "0 5px 0 #030d1a",
      active:
        "bg-[#030d1a] inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1.5px 0 #030d1a",
    },
    "cultura-primary": {
      base: "bg-[var(--cultura-green-primary)] text-[var(--cultura-white)]",
      topShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
      bottomShadow: "0 5px 0 var(--cultura-green-dark)",
      active:
        "bg-[var(--cultura-green-dark)] inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1.5px 0 var(--cultura-green-dark)",
    },
    "cultura-secondary": {
      base: "bg-[var(--cultura-green-light)] text-[var(--cultura-text-primary)]",
      topShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
      bottomShadow: "0 5px 0 var(--cultura-green-primary)",
      active:
        "bg-[var(--cultura-green-primary)] inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1.5px 0 var(--cultura-green-primary)",
    },
    "cultura-accent": {
      base: "bg-[var(--cultura-sand-accent)] text-[var(--cultura-text-primary)]",
      topShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
      bottomShadow: "0 5px 0 #9E7D4B",
      active:
        "bg-[#9E7D4B] inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1.5px 0 #9E7D4B",
    },
    "cultura-terracotta": {
      base: "bg-[var(--cultura-terracotta)] text-[var(--cultura-white)]",
      topShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
      bottomShadow: "0 5px 0 #854937",
      active:
        "bg-[#854937] inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1.5px 0 #854937",
    },
    "green-shades": {
      base: "bg-green-700 text-green-50",
      topShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
      bottomShadow: "0 5px 0 #166534",
      active:
        "bg-green-800 inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1.5px 0 #166534",
    },
    "green-gradient": {
      base: "bg-gradient-to-tr from-[#8dc63f] to-[#267f00] text-white",
      topShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
      bottomShadow: "0 5px 0 #166534",
      active:
        "bg-gradient-to-tr from-[#7db62f] to-[#166534] inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1.5px 0 #166534",
    },
  };

  const loading = isLoading || internalLoading;
  const isAnchorLink = href?.startsWith("#");

  if (isAnchorLink) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById((href ?? "").replace("#", ""));
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={`relative block rounded-[25px] font-bold text-center ${
          sizeClasses[size]
        } ${variantStyles[variant].base} transition-all duration-100 ease-out ${
          fullWidth ? "w-full" : ""
        } ${className}`}
        style={{
          textShadow: "0px 1px 0px #000",
          boxShadow: `${variantStyles[variant].topShadow}, ${variantStyles[variant].bottomShadow}`,
        }}
      >
        <div className="flex items-center justify-center gap-2 whitespace-nowrap">
          {children}
          {withArrow && <ArrowRight className="w-5 h-5" />}
        </div>
      </a>
    );
  }

  return (
    <div
      className={`relative ${
        fullWidth ? "w-full" : "inline-block"
      } ${className}`}
    >
      <motion.button
        onClick={handleClick}
        disabled={disabled || loading}
        className={`
          relative block rounded-[25px] font-bold text-center
          ${sizeClasses[size]}
          ${variantStyles[variant].base}
          transition-all duration-100 ease-out
          disabled:opacity-60 disabled:cursor-not-allowed
          ${loading ? "pointer-events-none" : "cursor-pointer"}
          ${fullWidth ? "w-full" : ""}
        `}
        style={{
          textShadow: "0px 1px 0px #000",
          boxShadow: `${variantStyles[variant].topShadow}, ${variantStyles[variant].bottomShadow}`,
          top: isPressed ? "5px" : "0px",
        }}
        whileHover={!disabled && !loading ? { y: -1 } : {}}
        whileTap={!disabled && !loading ? { y: 5 } : {}}
        onMouseDown={() => !disabled && !loading && setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        <div className="flex items-center justify-center gap-2 whitespace-nowrap">
          {loading ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Loader2 className="w-5 h-5" />
            </motion.span>
          ) : (
            <>
              {children}
              {withArrow && <ArrowRight className="w-5 h-5" />}
            </>
          )}
        </div>

        {isPressed && (
          <motion.div
            className="absolute inset-0 rounded-[25px] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              boxShadow: variantStyles[variant].active,
            }}
          />
        )}
      </motion.button>
    </div>
  );
};
