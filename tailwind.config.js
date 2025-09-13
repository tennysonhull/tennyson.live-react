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
        // Majestic theme - Gold and dark with oriental touches (formerly Regal)
        majestic: {
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
        // Fun theme - Sunset/marmalade/blood-orange with high saturation (formerly Dreamy)
        fun: {
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
        // Fun theme secondary colors (original dreamySecondary)
        funSecondary: {
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
        funAccent: {
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
        // New Dreamy theme - Pleasant teal, blue, pink, violet
        dreamy: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Dreamy theme secondary colors - Pleasant blues
        dreamySecondary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dreamyAccent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Semantic text colors that work across all themes
        content: {
          primary: {
            light: '#1e293b',    // Dark slate
            dark: '#f8fafc',     // Light gray
            fun: '#1e293b',      // Dark slate
            majestic: '#fef3c7', // Gold
            dreamy: '#e0e7ff',   // Light blue
          },
          secondary: {
            light: '#64748b',    // Slate-500
            dark: '#cbd5e1',     // Slate-300
            fun: '#475569',      // Slate-600
            majestic: '#fde68a', // Amber-200
            dreamy: '#c7d2fe',   // Indigo-200
          },
          muted: {
            light: '#94a3b8',    // Slate-400
            dark: '#94a3b8',     // Slate-400
            fun: '#64748b',      // Slate-500
            majestic: '#fcd34d', // Amber-300
            dreamy: '#a5b4fc',   // Indigo-300
          },
          subtle: {
            light: '#cbd5e1',    // Slate-300
            dark: '#64748b',     // Slate-500
            fun: '#94a3b8',      // Slate-400
            majestic: '#fbbf24', // Amber-400
            dreamy: '#818cf8',   // Indigo-400
          }
        },
        // Semantic background colors
        surface: {
          primary: {
            light: '#ffffff',    // White
            dark: '#1e293b',     // Slate-800
            fun: '#fff8f0',      // Orange-50
            majestic: '#262626', // Neutral-800
            dreamy: 'rgba(20, 20, 45, 0.6)', // Lighter blue-violet glass effect
          },
          secondary: {
            light: '#f8fafc',    // Slate-50
            dark: '#334155',     // Slate-700
            fun: '#ffe8d1',      // Orange-100
            majestic: '#404040', // Neutral-700
            dreamy: 'rgba(25, 25, 55, 0.55)', // Lighter blue-violet glass effect
          },
          accent: {
            light: '#f1f5f9',    // Slate-100
            dark: '#475569',     // Slate-600
            fun: '#ffd1a3',      // Orange-200
            majestic: '#525252', // Neutral-600
            dreamy: 'rgba(30, 30, 65, 0.5)', // Lighter blue-violet glass effect
          }
        },
        // Interactive colors
        interactive: {
          primary: {
            light: '#3b82f6',    // Blue-500
            dark: '#60a5fa',     // Blue-400
            fun: '#ff6900',      // Orange-500
            majestic: '#f59e0b', // Amber-500
            dreamy: '#6366f1',   // Indigo-500
          },
          secondary: {
            light: '#10b981',    // Emerald-500
            dark: '#34d399',     // Emerald-400
            fun: '#1a8cff',      // Blue-500
            majestic: '#d97706', // Amber-600
            dreamy: '#8b5cf6',   // Violet-500
          },
          accent: {
            light: '#f59e0b',    // Amber-500
            dark: '#fbbf24',     // Amber-400
            fun: '#a347ff',      // Purple-500
            majestic: '#b45309', // Amber-700
            dreamy: '#a855f7',   // Purple-500
          }
        },
        // Panel header gradient colors (matching name gradients but lighter)
        panelHeader: {
          light: 'linear-gradient(to right, #0284c7, #16a34a, #d97706)', // Same as name
          dark: 'linear-gradient(to right, #60a5fa, #4ade80, #fbbf24)', // Same as name
          fun: 'linear-gradient(to right, #ff6900, #1a8cff, #a347ff)', // Same as name
          majestic: 'linear-gradient(to right, #fde68a, #fcd34d, #fbbf24)', // Same as name
          dreamy: 'linear-gradient(to right, #a5b4fc, #818cf8, #c084fc, #d8b4fe)', // Lighter version of name gradient
        },
        // Icon background gradient colors (matching theme colors)
        iconBg: {
          light: 'linear-gradient(to bottom right, #3b82f6, #10b981, #f59e0b)', // Blue, emerald, amber
          dark: 'linear-gradient(to bottom right, #60a5fa, #34d399, #fbbf24)', // Lighter versions
          fun: 'linear-gradient(to bottom right, #ff6900, #1a8cff, #a347ff)', // Orange, blue, purple
          majestic: 'linear-gradient(to bottom right, #f59e0b, #d97706, #b45309)', // Gold variations
          dreamy: 'linear-gradient(to bottom right, #6366f1, #8b5cf6, #a855f7)', // Purple/blue variations
        },
        // Support button gradient colors (for "Support My Work" panel)
        supportButton: {
          light: 'linear-gradient(to right, #ec4899, #f97316)', // Pink to orange
          dark: 'linear-gradient(to right, #f472b6, #fb923c)', // Lighter versions
          fun: 'linear-gradient(to right, #ff6900, #ff8c00)', // Orange variations
          majestic: 'linear-gradient(to right, #f59e0b, #d97706)', // Gold variations
          dreamy: 'linear-gradient(to right, #8b5cf6, #a855f7)', // Purple variations
        },
        // Theme-specific notification colors
        notification: {
          light: {
            bg: '#fef3c7', // Light yellow background
            border: '#f59e0b', // Amber border
            text: '#92400e', // Dark amber text
          },
          dark: {
            bg: '#1e3a8a', // Dark blue background
            border: '#3b82f6', // Blue border
            text: '#dbeafe', // Light blue text
          },
          fun: {
            bg: '#fff8f0', // Light orange background
            border: '#ff6900', // Orange border
            text: '#cc3300', // Dark orange text
          },
          majestic: {
            bg: '#fef3c7', // Light gold background
            border: '#f59e0b', // Gold border
            text: '#92400e', // Dark gold text
          },
          dreamy: {
            bg: '#0f0f23', // Very dark blue-violet background
            border: '#6366f1', // Indigo border
            text: '#dbeafe', // Light blue text
          },
        },
        // Theme-specific form colors
        form: {
          light: {
            label: '#374151', // neutral-700
            input: '#ffffff',
            border: '#d1d5db', // neutral-300
            focus: '#3b82f6', // primary-500
            placeholder: '#9ca3af', // neutral-400
          },
          dark: {
            label: '#e5e5e5', // neutral-200
            input: 'rgba(0, 0, 0, 0.2)',
            border: '#4b5563', // neutral-600
            focus: '#60a5fa', // primary-400
            placeholder: '#9ca3af', // neutral-400
          },
          fun: {
            label: '#1e293b', // slate-800
            input: '#ffffff',
            border: '#d1d5db', // neutral-300
            focus: '#3b82f6', // primary-500
            placeholder: '#9ca3af', // neutral-400
          },
          majestic: {
            label: '#fde68a', // regal-200
            input: 'rgba(45, 45, 45, 0.3)',
            border: '#b45309', // regal-700
            focus: '#fbbf24', // regal-400
            placeholder: '#fcd34d', // regal-300
          },
          dreamy: {
            label: '#dbeafe', // blue-100
            input: 'rgba(5, 5, 15, 0.85)',
            border: '#6366f1', // indigo-500
            focus: '#818cf8', // indigo-400
            placeholder: '#a5b4fc', // indigo-300
          }
        }
      },
      fontFamily: {
        'elegant': ['Inter', 'system-ui', 'sans-serif'],
        'futuristic': ['JetBrains Mono', 'monospace'],
        'display': ['Trade Winds', 'cursive'],
        'body': ['Sensation', 'system-ui', 'sans-serif'],
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
