/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dreamy blue/green and peachy theme
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fbd9a5',
          300: '#f8c06d',
          400: '#f5a332',
          500: '#f28c0a',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Regal theme - Gold and dark with oriental touches
        regal: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        regalDark: {
          50: '#2d2d2d',
          100: '#3a3a3a',
          200: '#4a4a4a',
          300: '#5a5a5a',
          400: '#6a6a6a',
          500: '#7a7a7a',
          600: '#8a8a8a',
          700: '#9a9a9a',
          800: '#aaaaaa',
          900: '#bababa',
        },
        // Dreamy theme - Sunset/marmalade/blood-orange with high saturation
        dreamy: {
          50: '#fff8f0',
          100: '#ffe8d1',
          200: '#ffd1a3',
          300: '#ffb366',
          400: '#ff8c29',
          500: '#ff6900',
          600: '#e64d00',
          700: '#cc3300',
          800: '#b31a00',
          900: '#990000',
        },
        dreamyBlue: {
          50: '#f0f8ff',
          100: '#e0f0ff',
          200: '#c1e1ff',
          300: '#8cc7ff',
          400: '#47a3ff',
          500: '#1a8cff',
          600: '#0073e6',
          700: '#0059cc',
          800: '#004db3',
          900: '#004099',
        },
        dreamyPurple: {
          50: '#f8f0ff',
          100: '#f0e0ff',
          200: '#e1c1ff',
          300: '#c78cff',
          400: '#a347ff',
          500: '#8c1aff',
          600: '#7300e6',
          700: '#5900cc',
          800: '#4d00b3',
          900: '#400099',
        },
        // Theme-specific text colors
        text: {
          light: '#1e40af', // Deep blue
          dark: '#dbeafe', // Light blue
          regal: '#fef3c7', // Keep gold for regal
          dreamy: '#1e3a8a', // Deep navy blue
        },
        // Theme-specific background colors
        bg: {
          light: '#f0f9ff',
          dark: '#0c4a6e',
          regal: '#a16207',
          dreamy: '#fff8f0',
        }
      },
      fontFamily: {
        'elegant': ['Inter', 'system-ui', 'sans-serif'],
        'futuristic': ['JetBrains Mono', 'monospace'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.8)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
