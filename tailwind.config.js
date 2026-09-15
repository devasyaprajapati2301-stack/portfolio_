/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#070A11",
          900: "#0A0E17",
          800: "#0F1420",
          700: "#151C2C",
          600: "#1D2638",
        },
        ink: {
          100: "#EDF0F5",
          300: "#C4CBDA",
          500: "#8A93A6",
          700: "#5A6478",
        },
        signal: {
          DEFAULT: "#45E6C4",
          soft: "#2BB89A",
          dim: "#173F38",
        },
        neural: {
          DEFAULT: "#8B7FFF",
          soft: "#6C5FE0",
          dim: "#25204A",
        },
        amber: {
          DEFAULT: "#F5B25C",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "signal-neural": "linear-gradient(90deg, #45E6C4 0%, #8B7FFF 100%)",
        "radial-glow":
          "radial-gradient(circle, rgba(69,230,196,0.14) 0%, rgba(69,230,196,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(69,230,196,0.15)",
        "glow-violet": "0 0 40px rgba(139,127,255,0.15)",
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3.5s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
