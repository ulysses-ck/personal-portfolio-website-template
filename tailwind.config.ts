import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
        'h1-desktop-bold': ['60px', {
          lineHeight: '72px',
          letterSpacing: '-2%',
          fontWeight: '700', // Bold
        }],
        'h1-tablet-bold': ['48px', {
          lineHeight: '48px',
          letterSpacing: '-2%',
          fontWeight: '700', // Bold
        }],
        'h1-mobile-semibold': ['36px', {
          lineHeight: '40px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        'h2-desktop-semibold': ['36px', {
          lineHeight: '40px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        'h2-tablet-semibold': ['18px', {
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        'h3-desktop-semibold': ['30px', {
          lineHeight: '36px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold by default
        }],
        'h3-desktop-bold': ['30px', {
          lineHeight: '36px',
          letterSpacing: '-2%',
          fontWeight: '700', // Bold
        }],
        'h3-tablet-semibold': ['24px', {
          lineHeight: '32px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold by default
        }],
        'h3-tablet-bold': ['24px', {
          lineHeight: '32px',
          letterSpacing: '-2%',
          fontWeight: '700', // Bold
        }],
        'subtitle-all-normal': ['20px', {
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal
        }],
        'subtitle-all-semibold': ['20px', {
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        'subtitle-tablet-mobile-normal': ['18px', { // tablet mobile
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal
        }],
        'subtitle-tablet-mobile-semibold': ['18px', { // tablet mobile
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        'body1-all-normal': ['18px', {
          lineHeight: '28px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal
        }],
        'body1-tablet-mobile-normal': ['16px', { // tablet mobile
          lineHeight: '24px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        'body2-all-normal': ['16px', {
          lineHeight: '24px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal by default
        }],
        'body2-all-medium': ['16px', {
          lineHeight: '24px',
          letterSpacing: '-2%',
          fontWeight: '500', // Medium
        }],
        'body2-all-semibold': ['16px', {
          lineHeight: '24px',
          letterSpacing: '-2%',
          fontWeight: '600', // Semi Bold
        }],
        'body3-all-normal': ['14px', {
          lineHeight: '20px',
          letterSpacing: '-2%',
          fontWeight: '400', // Normal by default
        }],
        'body3-all-medium': ['14px', {
          lineHeight: '20px',
          letterSpacing: '-2%',
          fontWeight: '500', // Medium
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
          50: '#111827',
          100: '#1f2937',
          200: '#374151',
          300: '#4b5563',
          400: '#6b7280',
          500: '#9ca3af',
          600: '#d1d5db',
          700: '#e5e7eb',
          800: '#f3f4f6',
          900: '#f9fafb',
          950: '#ffffff',
        },
        emerald: {
          500: '#10b981',  // The emerald color shown in the image
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
