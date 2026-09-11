/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffd400', // Nopeza Yellow (Brand Yellow)
          light: '#ffe14d',   // Yellow 300
          dark: '#f59e0b',    // Amber 500
        },
        secondary: {
          DEFAULT: '#fbbf24', // Amber 400
          light: '#fcd34d',   // Amber 300
          dark: '#d97706',    // Amber 600
        },
        accent: {
          DEFAULT: '#f59e0b', // Amber 500
          emerald: '#10b981', // Emerald 500
          rose: '#f43f5e',
        },
        night: {
          bg: '#000000',      // Pure Black
          card: '#0a0a0a',
          cardHover: '#111111',
          border: '#1f2937',
          text: '#f8fafc',
          muted: '#9ca3af',
        },
        day: {
          bg: '#f8fafc',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: '#e2e8f0',
          text: '#0f172a',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(255, 212, 0, 0.25)',
        'glow-secondary': '0 0 30px rgba(251, 191, 36, 0.25)',
        'glow-accent': '0 0 30px rgba(245, 158, 11, 0.25)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.9)',
        'card-light': '0 20px 40px -15px rgba(148, 163, 184, 0.15)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite',
        'spin-slow': 'spin 16s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}