# expressnext-design-system

Brand primitives and token mappings for every ExpressNext surface — sales decks,
the marketing site, and every client-facing app.

Dark ground. One cyan hue. Barlow + JetBrains Mono. Every number in mono.

```bash
npm i github:tomr1233/expressnext-design-system#v1.0.0
```

**[USAGE.md](./USAGE.md) is the contract** — which files to import for which
surface, and the colour and type rules. Read it before changing any colour, font
or radius on an ExpressNext surface.

## What's here

| File | Purpose |
|---|---|
| `brand.css` | Brand primitives. The single source of truth. |
| `shadcn.css` | Mapping: shadcn/Radix slots → primitives. App surfaces. |
| `deck.css` | Mapping: deck/atmosphere slots → primitives. Sales surfaces. |
| `fonts.css` | Self-hosted @fontsource imports + the mono rule. |
| `theme.css` | Tailwind **v4** bridge (`@theme`). |
| `tailwind-preset.js` | Tailwind **v3** preset. |

One palette, two mappings: `brand.css` defines each value once, and both token
vocabularies in the estate — shadcn's `--background/--foreground/...` and the
deck's `--bg/--fg/--hair/...` — resolve back to it. Change the cyan in one place.

v1 is **tokens only**. No components; they get added when a second repo needs the
same one.

## Design decisions

The ten decisions behind this, and the alternatives rejected, are recorded in the
spec at `~/workspace/design-system/specs/expressnext-design-system.md`. The
load-bearing ones:

- Every surface is ExpressNext-branded. There is no white-label theming.
- Cyan is the only brand hue; `#3B82F6` is retired estate-wide.
- One canonical mode: dark.
- Tokens are installed, not copied — copies drift.

Open: logo, brand voice, and the chart ramp (the five values shipped in
`brand.css` are provisional).
