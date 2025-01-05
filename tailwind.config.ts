import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: "767px" },
        tablet: { min: "768px", max: "1023px" },
        desktop: { min: "1024px" },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: ['60px', {
          lineHeight: '72px',
          letterSpacing: '-2%',
          fontWeight: '700', // Bold
        }],
        'h1-t': ['48px', {
          lineHeight: '48px',
          letterSpacing: '-2%',
          fontWeight: '700', // Bold
        }],
        'h1-m': ['36px', {
          lineHeight: '40px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        h2: ['36px', {
          lineHeight: '40px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        'h2-sm': ['18px', {
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        h3: ['30px', {
          lineHeight: '36px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold by default
        }],
        'h3-sm': ['24px', {
          lineHeight: '32px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold by default
        }],
        subtitle: ['20px', {
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal
        }],
        'subtitle-sm': ['18px', {
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal
        }],
        body1: ['18px', {
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal
        }],
        'body1-sm': ['16px', {
          lineHeight: '24px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal
        }],
        body2: ['16px', {
          lineHeight: '24px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal by default
        }],
        body3: ['14px', {
          lineHeight: '20px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal by default
        }],
      },
      dropShadow: {
        "md": [
          "0 4px 3px rgba(0, 0, 0, 0.07)",
          "0 2px 2px rgba(0, 0, 0, 0.08)"
        ],
        "lg": [
          "0 4px 3px rgba(0, 0, 0, 0.10)",
          "0 10px 8px rgba(0, 0, 0, 0.04)"
        ],
        "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          DEFAULT: '#ffffff',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        'gray-dark': {
          DEFAULT: '#030712',
          50: '#ffffff',
          100: '#f9fafb',
          200: '#f3f4f6',
          300: '#e5e7eb',
          400: '#d1d5db',
          500: '#9ca3af',
          600: '#6b7280',
          700: '#4b5563',
          800: '#374151',
          900: '#1f2937',
          950: '#111827',
        },
        emerald: {
          500: '#10b981',  // The emerald color shown in the image
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
