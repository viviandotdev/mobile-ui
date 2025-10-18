import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';
import defaultTheme from 'tailwindcss/defaultTheme';

const shadows = {
  'regular-xs': '0 1px 2px 0 #0a0d1408',
  'regular-sm': '0 2px 4px #1b1c1d0a',
  'regular-md': '0 16px 32px -12px #0e121b1a',
  'button-primary-focus': [
    '0 0 0 2px theme(colors.bg[white-0])',
    '0 0 0 4px theme(colors.primary[alpha-10])',
  ],
  's': 'inset 0 1px 2px #ffffff30, 0 1px 2px #00000030, 0 2px 4px #00000015',
  'm': 'inset 0 1px 2px #ffffff50, 0 2px 4px #00000030, 0 4px 8px #00000015',
  'l': 'inset 0 1px 2px #ffffff70, 0 4px 6px #00000030, 0 6px 10px #00000015',
}

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    '../../node_modules/fumadocs-ui/dist/**/*.js',
    './node_modules/@rnr/**/*.{ts,tsx}',
  ],
  presets: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('nativewind/preset'),
    createPreset({ preset: 'black' }),
  ],
  important: 'html',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      colors: {
        stroke: {
            'strong-950': 'hsl(var(--stroke-strong-950))',
            'sub-300': 'hsl(var(--stroke-sub-300))',
            'soft-200': 'hsl(var(--stroke-soft-200))',
            'weak-50': 'hsl(var(--stroke-weak-50))',
            'white-0': 'hsl(var(--stroke-white-0))',
        },
        bg: {
        'strong-950': 'hsl(var(--bg-strong-950))',
        'surface-800': 'hsl(var(--bg-surface-800))',
        'sub-300': 'hsl(var(--bg-sub-300))',
        'soft-200': 'hsl(var(--bg-soft-200))',
        'weak-50': 'hsl(var(--bg-weak-50))',
        'white-0': 'hsl(var(--bg-white-0))',
      },
          text: {
        'strong-950': 'hsl(var(--text-strong-950))',
        'sub-600': 'hsl(var(--text-sub-600))',
        'soft-400': 'hsl(var(--text-soft-400))',
        'disabled-300': 'hsl(var(--text-disabled-300))',
        'white-0': 'hsl(var(--text-white-0))',
      },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    boxShadow: {
            ...shadows,
         none: defaultTheme.boxShadow.none,
    },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-animate'),
  ],
};

export default config;
