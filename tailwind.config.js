/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: '1200px',
        },
      },
      colors: {
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        info: 'hsl(var(--info))',
        danger: 'hsl(var(--danger))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
        },
        border: 'hsl(var(--border))',
        foreground: 'hsl(var(--foreground))',
        background: {
          DEFAULT: 'hsl(var(--background))',
          secondary: 'hsl(var(--background-secondary))',
          tertiary: 'hsl(var(--background-tertiary))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0', transform: 'scale(.95)' } },
        fadeOut: { to: { opacity: '0', transform: 'scale(.95)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.1s ease-out',
        fadeOut: 'fadeOut 0.15s ease-out forwards',
      },
    },
  },
  plugins: [],
}

