/**
 * ExpressNext design system — Tailwind v3 preset.
 *
 * FOR TAILWIND v3 ONLY. v4 consumers import theme.css instead.
 *
 * Usage (tailwind.config.js):
 *   import expressnext from 'expressnext-design-system/tailwind-preset.js'
 *   export default {
 *     presets: [expressnext],
 *     content: ['./index.html', './src/**\/*.{js,ts,jsx,tsx}'],
 *   }
 *
 * Every value resolves to a CSS variable, so the preset carries no
 * colour of its own. brand.css + a mapping must still be imported.
 */
export default {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        success: 'var(--xn-success)',
        warning: 'var(--xn-warning)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          1: 'var(--chart-1)',
          2: 'var(--chart-2)',
          3: 'var(--chart-3)',
          4: 'var(--chart-4)',
          5: 'var(--chart-5)',
        },
      },
      fontFamily: {
        display: 'var(--xn-font-display)',
        sans: 'var(--xn-font-body)',
        mono: 'var(--xn-font-data)',
      },
      borderRadius: {
        sm: 'var(--xn-radius-sm)',
        md: 'var(--xn-radius)',
        lg: 'var(--xn-radius-lg)',
      },
      boxShadow: {
        xn: 'var(--xn-shadow)',
        glow: 'var(--xn-glow)',
      },
      backgroundImage: {
        // The hero/CTA gradient. At most one per viewport.
        'xn-accent': 'var(--xn-accent)',
      },
      transitionTimingFunction: {
        xn: 'var(--xn-ease)',
      },
      transitionDuration: {
        xn: '400ms',
      },
    },
  },
  plugins: [],
};
