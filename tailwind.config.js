/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Colores personalizados para Parchados
        background: "#F8F5F0", // Beige claro
        secondary: "#2F4B7C", // Azul más claro
        accent: "#EAC67A", // Amarillo dorado
        highlight: "#003F5C", // Azul profundo
        "light-bg": "#F8F5F0", // Beige claro
        "primary-btn": "#003F5C", // Azul profundo
        "text-color": "#1E293B", // Gris oscuro
        "detail-color": "#A5C8E1", // Azul pastel
        success: "#34C759", // Verde para confirmaciones
        error: "#FF3B30", // Rojo para errores
        warning: "#FFD700", // Amarillo para advertencias

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "#1E293B",

        primary: {
          DEFAULT: "#003F5C",
          foreground: "#F8F5F0",
        },
        secondary: {
          DEFAULT: "#2F4B7C",
          foreground: "#F8F5F0",
        },
        destructive: {
          DEFAULT: "#FF3B30",
          foreground: "#F8F5F0",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#EAC67A",
          foreground: "#1E293B",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

