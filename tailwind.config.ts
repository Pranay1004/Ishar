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
        // Brutalist Luxury Palette
        'void': '#070215',
        'neon-acid': '#CCFF00',
        'ultraviolet': '#9D00FF',
        'stark-white': '#FFFFFF',
        'digital-red': '#FF2D55',
        'electric-blue': '#00F0FF',
        'charcoal': '#1A1A1A',
        'toxic-yellow': '#FFD700',
      },
      fontFamily: {
        'monument': ['Monument Extended', 'sans-serif'],
        'neue': ['Neue Montreal', 'sans-serif'],
        'grotesk': ['Clash Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 3s steps(1) infinite',
        'distort': 'distort 4s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'horizontal-scroll': 'horizontal-scroll 30s linear infinite',
        'diagonal-wipe': 'diagonal-wipe 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        'split-reveal': 'split-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'noise': 'noise 0.5s steps(10) infinite',
        'text-scramble': 'text-scramble 2.5s steps(30) forwards',
        'perspective-rotate': 'perspective-rotate 8s cubic-bezier(0.65, 0, 0.35, 1) infinite',
        'magnetic-pulse': 'magnetic-pulse 3s cubic-bezier(0.16, 1, 0.3, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
          '87%': { transform: 'translate(-2px, -2px) scale(1.01)' },
        },
        distort: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '40% 60% 30% 70% / 30% 40% 70% 60%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 70% 30% 50% 40%' },
        },
        'horizontal-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'diagonal-wipe': {
          '0%': { clipPath: 'polygon(0% 0%, 0% 0%, 0% 0%)' },
          '100%': { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)' },
        },
        'split-reveal': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '50%': { transform: 'scaleX(1)', transformOrigin: 'left' },
          '50.1%': { transform: 'scaleX(1)', transformOrigin: 'right' },
          '100%': { transform: 'scaleX(0)', transformOrigin: 'right' },
        },
        noise: {
          '0%, 100%': { backgroundSize: '100% 100%', opacity: '0.8' },
          '10%, 60%': { backgroundSize: '150% 150%', opacity: '0.6' },
          '30%, 80%': { backgroundSize: '130% 120%', opacity: '0.7' },
        },
        'text-scramble': {
          '0%': { filter: 'blur(5px)', letterSpacing: '-10px', opacity: '0' },
          '50%': { filter: 'blur(2px)', letterSpacing: '2px', opacity: '0.5' },
          '100%': { filter: 'blur(0)', letterSpacing: 'normal', opacity: '1' },
        },
        'perspective-rotate': {
          '0%': { transform: 'perspective(1200px) rotateY(0deg)' },
          '50%': { transform: 'perspective(1200px) rotateY(15deg)' },
          '100%': { transform: 'perspective(1200px) rotateY(0deg)' },
        },
        'magnetic-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 2px rgba(204, 255, 0, 0.3), 0 0 0 4px rgba(157, 0, 255, 0.2), 0 0 30px rgba(204, 255, 0, 0.2)' },
          '50%': { boxShadow: '0 0 0 4px rgba(204, 255, 0, 0.4), 0 0 0 8px rgba(157, 0, 255, 0.3), 0 0 50px rgba(204, 255, 0, 0.3)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
      boxShadow: {
        'acid': '0 0 20px rgba(204, 255, 0, 0.6)',
        'acid-lg': '0 0 40px rgba(204, 255, 0, 0.8)',
        'ultraviolet': '0 0 25px rgba(157, 0, 255, 0.7)',
        'split': '15px 15px 0px rgba(204, 255, 0, 1), -15px -15px 0px rgba(157, 0, 255, 1)',
        'brutal': '10px 10px 0px rgba(0, 0, 0, 1)',
        'digital': '0 0 0 2px rgba(255, 255, 255, 0.2), 0 10px 40px -10px rgba(157, 0, 255, 0.5)',
      },
      textShadow: {
        'acid': '0 0 10px rgba(204, 255, 0, 0.8)',
        'glitch': '2px 2px rgba(255, 45, 85, 0.7), -2px -2px rgba(0, 240, 255, 0.7)',
      },
    },
  },
  plugins: [],
};

export default config;
