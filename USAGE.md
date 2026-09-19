# Using the ExpressNext design system

Read this before changing any colour, font or radius on an ExpressNext surface.

Full spec and the reasoning behind each decision:
`~/workspace/design-system/specs/expressnext-design-system.md`

## Install

```bash
npm i github:tomr1233/expressnext-design-system#v1.0.0
```

Pinned by tag on purpose. A brand tweak is a bump you choose, not a surprise.

## Which files do I import?

| Surface | What it is | Mapping |
|---|---|---|
| **App** | onboarding, dashboards, intake/booking forms | `shadcn.css` |
| **Sales** | decks, VSLs, landing pages | `deck.css` |

`brand.css` and `fonts.css` are always imported. Import `brand.css` **first** —
the mappings are `var()` references into it and resolve to nothing without it.

### Tailwind v4 (onboarding, booking-intake-form, n8n-chat-demo)

```css
@import "tailwindcss";
@import "expressnext-design-system/brand.css";
@import "expressnext-design-system/shadcn.css";
@import "expressnext-design-system/fonts.css";
@import "expressnext-design-system/theme.css";
```

### Tailwind v3 (Expressnext-website, system3-v2)

```css
@import "expressnext-design-system/brand.css";
@import "expressnext-design-system/shadcn.css";
@import "expressnext-design-system/fonts.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```js
// tailwind.config.js
import expressnext from 'expressnext-design-system/tailwind-preset.js';

export default {
  presets: [expressnext],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
};
```

Do not use `theme.css` on v3, or `tailwind-preset.js` on v4.

### Deck / sales surface

```css
@import "expressnext-design-system/brand.css";
@import "expressnext-design-system/deck.css";
@import "expressnext-design-system/fonts.css";
```

`deck.css` fills the same variable names the deck components already read
(`--bg`, `--fg`, `--hair`, `--primary`, `--accent`), so no component edits are
needed. It replaces the deck's local `src/styles/tokens.css`.

## The rules

### Colour

1. **Cyan is the only brand hue.** No second brand hue gets introduced without
   revisiting the spec. `#3B82F6`, `#22D3EE`, `#60A5FA`, `#93C5FD` are retired.
2. **Cyan marks action and emphasis only** — primary buttons, active states,
   focus rings, one hero element per view. It is not a decorative fill. If
   everything is cyan, nothing is.
3. **`--xn-accent` (the gradient) is for hero/CTA moments.** At most one per
   viewport.
4. **State colours never carry brand meaning** and never appear as decoration.
   `--xn-danger` is red; that is a state, not a reopening of rule 1.
5. **Charts are the one exception** to the single-hue rule, because series must
   be distinguishable. Use `--chart-1..5` only.

### Type

| Role | Family | Weights | Applies to |
|---|---|---|---|
| Display | Barlow Condensed | 600, 700 | Headlines, big numbers, section titles |
| Body | Barlow | 400, 500 | Prose, labels, buttons |
| Data | JetBrains Mono | variable | Every number, ID, price, metric, timestamp, code |

**The mono rule is absolute.** If a value is a number, an identifier, or
something a reader might compare against another value, it is mono. Use
`font-mono` (Tailwind) or `.xn-data` (plain HTML). This is the single most
recognisable thing about the system.

Barlow has no variable build on @fontsource, so only the listed static weights
are loaded. Using Barlow 600 or Barlow Condensed 400 will silently synthesise —
add the weight to `fonts.css` instead.

### Never

- A literal colour value in application code. If you need a colour that is not
  here, that is a spec conversation, not a local override.
- A literal colour in `shadcn.css` or `deck.css`. Those files only ever `var()`
  a primitive. A literal there is a bug.
- A second `globals.css`. One file, one answer. (This is the drift that put two
  conflicting stylesheets in `expressnext-onboarding`.)
- Per-client theming. Every surface is ExpressNext-branded — that was a
  deliberate decision, not an oversight.

## Extending

Adding a primitive to `brand.css` is normal. Adding one to a mapping is not.

Components are deliberately **not** in v1. Add one here only when a second repo
needs the same component — until then it lives in the repo that needs it.

## Modes

The system has one mode: dark. `.dark` is mapped to identical values so shadcn
blocks that assume the class still render correctly. There is no light mode; if a
surface genuinely needs one (a printed quote, a bright-sunlight field view), that
reopens the spec rather than getting a local override.
