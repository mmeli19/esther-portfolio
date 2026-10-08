import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        lavender: {
          50: "#faf7ff",
          100: "#f3edff",
          200: "#e9deff",
          300: "#d6c2ff",
          400: "#bd9bff",
          500: "#a373ff",
          600: "#8b4fff",
          700: "#7639e8",
          800: "#622fbf",
          900: "#522a9c",
          950: "#321666",
        },
        sage: {
          50: "#f4f7f4",
          100: "#e6ede6",
          200: "#cddccd",
          300: "#a8c2a8",
          400: "#7da37d",
          500: "#5a855a",
          600: "#456845",
          700: "#385438",
          800: "#2e432e",
          900: "#273827",
          950: "#121e12",
        },
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        blush: {
          50: "#fdf5f4",
          100: "#fbe8e6",
          200: "#f6d0cc",
          300: "#edaaa3",
          400: "#e07870",
          500: "#cf5249",
          600: "#b83b33",
          700: "#9a302a",
          800: "#802c27",
          900: "#6b2a25",
          950: "#3a120f",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shimmer": "shimmer 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "lavender-gradient":
          "linear-gradient(135deg, #c4a8ff 0%, #a373ff 50%, #7639e8 100%)",
        "soft-lavender":
          "linear-gradient(135deg, #faf7ff 0%, #f3edff 50%, #e9deff 100%)",
        "mesh-lavender":
          "radial-gradient(at 0% 0%, #d6c2ff 0px, transparent 50%), radial-gradient(at 100% 0%, #bd9bff 0px, transparent 50%), radial-gradient(at 100% 100%, #a373ff 0px, transparent 50%), radial-gradient(at 0% 100%, #e9deff 0px, transparent 50%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
