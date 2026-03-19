/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        fog: '#f8fafc',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(15, 23, 42, 0.10)',
        glow: '0 0 0 1px rgba(59,130,246,0.30), 0 10px 28px rgba(59,130,246,0.35)',
      },
    },
  },
  plugins: [],
}

