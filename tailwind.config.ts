import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space Aerospace Theme
        space: "#0a0e27",
        "accent-cyan": "#00f0ff",
        "accent-purple": "#a855f7",
        "accent-orange": "#ff6b35",
        glass: "rgba(13, 18, 45, 0.72)",
      },
      fontFamily: {
        display: ['"Chakra Petch"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'draw-line': 'draw-line 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        orbit: 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.4), 0 0 40px rgba(0, 240, 255, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.6), 0 0 60px rgba(0, 240, 255, 0.3)',
          },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.65' },
          '50%': { opacity: '1' },
        },
        'fade-up': {
          from: {
            opacity: '0',
            transform: 'translate3d(0, 40px, 0)',
          },
          to: {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'draw-line': {
          from: { height: '0' },
          to: { height: '100%' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
