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
          deep: "#031525",
          darker: "#071D33",
          dark: "#0A2540",
        },
        accent: {
          DEFAULT: "#1D9BF0",
          light: "#38BDF8",
        },
        text: {
          white: "#F8FAFC",
          gray: "#94A3B8",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Sora', 'Outfit', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Outfit', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}
