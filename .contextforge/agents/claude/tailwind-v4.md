## Tailwind Design System (v4)

> Targets Tailwind CSS v4 only. Verify `tailwindVersion` before applying these patterns.

**CRITICAL — CSS Configuration:** v4 is CSS-first. Move all theme config from `tailwind.config.ts` into `@theme {}` blocks. Replace `@tailwind` directives with `@import "tailwindcss"`. Colors must be OKLCH. Dark mode via `@custom-variant dark (&:where(.dark, .dark *))` — override tokens in `.dark {}`, never with `dark:` classes in components. Base styles in `@layer base`.

**HIGH — Design Tokens:** Token hierarchy: Brand → Semantic → Component. Name by purpose (`--color-primary`, not `--color-blue`). Include radius tokens. Use `color-mix(in oklch, var(--color-primary) 10%, transparent)` for alpha variants.

**HIGH — Components:** CVA for variant components. React 19 — `ref` is a plain prop, drop `forwardRef`. `cn()` everywhere for class merging. Form inputs: `aria-invalid`, `aria-describedby`, `role="alert"` error. Shared `focusRing` constant.

**MEDIUM — Layout:** Mobile-first grids (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`). Container queries for component-level breakpoints. `size-*` for equal dimensions. `gap-*` not `space-*`.

**MEDIUM — Animations:** `@keyframes` inside `@theme`, referenced via `--animate-*` tokens. `@starting-style` for overlay entry transitions. No `tailwindcss-animate` — native CSS only.

**MEDIUM — Migration checklist:** Config → CSS, directives → `@import`, `darkMode` → `@custom-variant`, hex/hsl → OKLCH, animate plugin → `@keyframes`, `forwardRef` → plain `ref` prop, clear default scales with `--color-*: initial`.
