const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
   
    fontFamily: {
      serif: ['serif'],
      heading: [
        'var(--font-family-heading)',
        'Inter',
        'SF Pro Text',
        'system-ui',
      ],
      sans: ['var(--font-family-sans)'],
      monospace: [`SF Mono`, `ui-monospace`, `Monaco`, 'Monospace'],
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: '#21aa2e',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        dark: {
          ...colors.slate,
          //DEFAULT: colors.slate[950],
          DEFAULT: "#21aa2e",
          foreground: colors.slate[100],
        },
        primary: {
          DEFAULT: '#21aa2e',
          foreground: 'hsl(var(--primary-foreground))',
          ...colors.green,
        },
        secondary: {
          DEFAULT: '#21aa2e',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: '#21aa2e',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: '#21aa2e',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: '#21aa2e',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: '#21aa2e',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: '#21aa2e',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

