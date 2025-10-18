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
        revolve: 'revolve-1 15s linear infinite',
        'revolve-1': 'revolve-1 15s linear infinite',
        'revolve-2': 'revolve-2 15s linear infinite',
        'revolve-3': 'revolve-3 15s linear infinite',
        'revolve-4': 'revolve-4 15s linear infinite',
        'revolve-5': 'revolve-5 15s linear infinite',
        'revolve-6': 'revolve-6 15s linear infinite',
        'revolve-7': 'revolve-7 15s linear infinite',
        'revolve-8': 'revolve-8 15s linear infinite',
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
        revolve: {
          '0%': { transform: 'rotate(0deg) translateX(140px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(140px) rotate(-360deg)' },
        },
        'revolve-1': {
          '0%': { transform: 'rotate(0deg) translateX(140px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(140px) rotate(-360deg)' },
        },
        'revolve-2': {
          '0%': { transform: 'rotate(45deg) translateX(140px) rotate(-45deg)' },
          '100%': { transform: 'rotate(405deg) translateX(140px) rotate(-405deg)' },
        },
        'revolve-3': {
          '0%': { transform: 'rotate(90deg) translateX(140px) rotate(-90deg)' },
          '100%': { transform: 'rotate(450deg) translateX(140px) rotate(-450deg)' },
        },
        'revolve-4': {
          '0%': { transform: 'rotate(135deg) translateX(140px) rotate(-135deg)' },
          '100%': { transform: 'rotate(495deg) translateX(140px) rotate(-495deg)' },
        },
        'revolve-5': {
          '0%': { transform: 'rotate(180deg) translateX(140px) rotate(-180deg)' },
          '100%': { transform: 'rotate(540deg) translateX(140px) rotate(-540deg)' },
        },
        'revolve-6': {
          '0%': { transform: 'rotate(225deg) translateX(140px) rotate(-225deg)' },
          '100%': { transform: 'rotate(585deg) translateX(140px) rotate(-585deg)' },
        },
        'revolve-7': {
          '0%': { transform: 'rotate(270deg) translateX(140px) rotate(-270deg)' },
          '100%': { transform: 'rotate(630deg) translateX(140px) rotate(-630deg)' },
        },
        'revolve-8': {
          '0%': { transform: 'rotate(315deg) translateX(140px) rotate(-315deg)' },
          '100%': { transform: 'rotate(675deg) translateX(140px) rotate(-675deg)' },
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
