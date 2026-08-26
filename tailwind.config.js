/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#1d160f", // nav bar
          900: "#d1beaf",
          800: "#ac9888",
          700: "#d3c0ae",
        },
        brown: {
          950: "#a18c79",
          900: "#2A1D12",
          800: "#3B2A19",
          700: "#4E3A22",
          600: "#63492B",
          500: "#7A5A36",
        },
        beige: {
          50: "#FBF8F3",
          100: "#F5EFE4",
          200: "#EDE2CE",
          300: "#E2D2B4",
        },
        gold: {
          400: "#d8b995", // button whatsapp
          500: "#f1dfbe",
          600: "#f3e0bd",
          700: "#b6ab96",
        },
        anthracite: {
          800: "#23262B",
          900: "#181A1E",
        },
      },
      fontFamily: {
        heading: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(228, 196, 138, 0.18) 0%, rgba(236, 216, 178, 0) 70%)",
        "hero-gradient":
          "linear-gradient(160deg, #1B140E 0%, #695746 45%, #c5b3a3 100%)",
        noise: "url('/noise.svg')",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.45)",
        glow: "0 0 40px rgba(198,161,91,0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        fluid: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
            keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
