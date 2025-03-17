/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0B0E', // Near black
          light: '#12141A',
          card: '#1A1D25',
        },
        primary: {
          DEFAULT: '#2563EB', // Vibrant blue
          dark: '#1E40AF',
          light: '#60A5FA',
        },
        secondary: {
          DEFAULT: '#7C3AED', // Vibrant purple
          dark: '#5B21B6',
          light: '#A78BFA',
        },
        accent: {
          DEFAULT: '#10B981', // Emerald green
          dark: '#059669',
          light: '#34D399',
        },
        danger: {
          DEFAULT: '#EF4444', // Red
          dark: '#B91C1C',
        },
        neutral: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          dark: '#374151',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
        'glow-sm': '0 0 10px rgba(37, 99, 235, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
