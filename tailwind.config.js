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
        background: "#0E0A07", // Negro profundo
        secondary: "#00857C", // Verde azulado
        accent: "#933023", // Rojo ladrillo
        highlight: "#234930", // Verde oscuro
        "light-bg": "#FFF", // Beige
        "primary-btn": "#D67D20", // Naranja deportivo
        success: "#34C759", // Verde para confirmaciones
        error: "#FF3B30", // Rojo para errores
        warning: "#FFD700", // Amarillo para advertencias

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "#D67D20",
          foreground: "#FCF3E3",
        },
        secondary: {
          DEFAULT: "#00857C",
          foreground: "#FCF3E3",
        },
        destructive: {
          DEFAULT: "#FF3B30",
          foreground: "#FCF3E3",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#933023",
          foreground: "#FCF3E3",
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

