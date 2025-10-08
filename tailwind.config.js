// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#132F51", // Azul oscuro del banner
        },
        accent: {
          orange: "#F79C28", // Naranja del banner
          green: "#4CAE50", // Verde de "cumbre"
        },
        gray: {
          100: "#F5F5F5", // Gris claro para fondos
          200: "#E5E5E5", // Gris para bordes y separadores
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252", // Texto secundario
          800: "#262626", // Texto principal
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
