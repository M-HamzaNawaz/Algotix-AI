import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* The site's type scale: eight sizes, used everywhere instead of ad-hoc
         pixel values. The display and heading steps scale with the viewport
         (32→56px and 28→40px between phone and desktop), the rest are fixed.
         Line height, and where it is fixed, weight and tracking, come with
         the size so components only choose a role. */
      fontSize: {
        display: [
          "clamp(2rem, 0.9rem + 3.2vw, 3.5rem)",
          { lineHeight: "1.08", fontWeight: "700" },
        ],
        heading: [
          "clamp(1.75rem, 0.6rem + 2.2vw, 2.5rem)",
          { lineHeight: "1.15", fontWeight: "700" },
        ],
        subheading: ["1.25rem", { lineHeight: "1.35", fontWeight: "600" }],
        lead: ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        label: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.18em", fontWeight: "600" },
        ],
        figure: ["2.75rem", { lineHeight: "1", fontWeight: "700" }],
      },
      screens: {
        // Mobile Devices
        "mobile-xs": { min: "320px" },
        "mobile-xs-max": { max: "319px" },

        "mobile-sm": { min: "375px" },
        "mobile-sm-max": { max: "374px" },

        "mobile-md": { min: "414px" },
        "mobile-md-max": { max: "413px" },

        "mobile-lg": { min: "480px" },
        "mobile-lg-max": { max: "479px" },

        "mobile-xl": { min: "540px" },
        "mobile-xl-max": { max: "539px" },

        // Tablet Devices
        "tablet-sm": { min: "600px" },
        "tablet-sm-max": { max: "599px" },

        tablet: { min: "768px" },
        "tablet-max": { max: "767px" },

        "tablet-lg": { min: "900px" },
        "tablet-lg-max": { max: "899px" },

        // Laptop Devices
        laptop: { min: "1024px" },
        "laptop-max": { max: "1023px" },

        "laptop-lg": { min: "1280px" },
        "laptop-lg-max": { max: "1279px" },

        "laptop-xl": { min: "1440px" },
        "laptop-xl-max": { max: "1439px" },

        // Desktop Devices
        desktop: { min: "1600px" },
        "desktop-max": { max: "1599px" },

        "desktop-lg": { min: "1920px" },
        "desktop-lg-max": { max: "1919px" },

        // 4K Devices
        "4k": { min: "2560px" },
        "4k-max": { max: "2559px" },
      },
      keyframes: {
        "spin-border": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-fast-middle": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "moving-line": {
          "0%": { transform: "translateX(-100%)", width: "0%" },
          "100%": { transform: "translateX(0%)", width: "100%" },
        },
        slideLogo: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        slideLogoOpposite: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50%)" },
        },
        slideLogoHorizontal: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideLogoHorizontalOpposite: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-medium": "spin 5s linear infinite",
        "spin-fast": "spin 3s linear infinite",
        "spin-border": "spin-border 5s linear infinite",
        "moving-line": "moving-line 2s ease-in-out infinite alternate",
        "slide-logos": "slideLogo 300s linear infinite",
        "slide-logos-opposite": "slideLogoOpposite 300s linear infinite",
        "slide-logos-horizontal": "slideLogoHorizontal 300s linear infinite",
        "slide-logos-horizontal-opposite":
          "slideLogoHorizontalOpposite 300s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        /* The channel form lets opacity modifiers work (bg-primary/10,
           hover:border-primary/40, focus:ring-primary/60). A plain
           var(--primary) cannot take an alpha, so Tailwind silently dropped
           every such class. */
        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        primaryLight: "rgb(var(--primary-light-rgb) / <alpha-value>)",
        primaryDark: "rgb(var(--primary-dark-rgb) / <alpha-value>)",
        secondary: "var(--secondary)",
        textDark: "var(--text-dark)",
        shadowPrimary: "var(--shadow-primary)",
      },
      boxShadow: {
        bottom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-svg": "url('/images/homepage/bg-curve.svg')",
        "curved-divider": "url('/images/homepage/curved-divider.png')",
        "hero-bg": "url('/images/common/hero-bg.png')",
        "hero-bg-svg": "url('/images/common/hero-bg.svg')",
        "hero-bd": "url('/images/common/breed-crumb.png')",
        "hero-breedcrumb": "url('/images/homepage/breedCrumb.png')",
        "bg-left-circle": "url('/images/about/bg-left-circle.svg')",
        "bg-right-circle": "url('/images/about/bg-right-circle.svg')",
        "bg-overlay": "url('/images/about/overlay-blur.svg')",
        grid: "url('/grid.svg')",
        "about-us": "url('/images/about-us-page/bg-aboutus.svg')",
        "grid-left": "url('/images/about-us-page/grid-left.svg')",
        "grid-right": "url('/images/about-us-page/grid-right.svg')",
        "grid-bottom": "url('/images/services/grid-3.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
