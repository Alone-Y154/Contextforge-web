## Frontend Aesthetics

Apply when building frontend interfaces, components, or pages. Produce working, production-grade code — not mockups or descriptions.

**CRITICAL — Design Direction:** Before writing code, commit to a bold aesthetic. Four questions: What problem does this solve? What extreme tone? (brutalist, maximalist, luxury, retro-futuristic, editorial, playful, industrial, etc.) What technical constraints? What one thing will users remember? Vague intent produces generic output.

**CRITICAL — Anti-patterns:** Never use Inter, Roboto, Arial, or Space Grotesk as the primary display font. Never produce purple/blue gradients on white. Never render a generic hero → features → CTA → footer layout. Never converge on the same aesthetic choices across different designs — vary radically.

**HIGH — Typography:** Display font sets character; body font ensures readability. Headlines at `clamp(3.5rem, 8vw, 7rem)`. Negative letter-spacing on large text. `text-wrap: balance`. Uppercase labels with `0.12em` tracking.

**HIGH — Color:** CSS variables for everything. One dominant color, one sharp accent. Commit fully to dark or light. Align color meaning to aesthetic — warm amber = nostalgia; cold cyan = technical; cream on dark = luxury.

**MEDIUM — Motion:** Orchestrated page-load stagger > scattered micro-interactions. CSS-first; `motion/react` for React. One surprising scroll or hover moment. `prefers-reduced-motion` override always included.

**MEDIUM — Space & Composition:** Asymmetry, overlap, grid-breaking elements, viewport-relative sizing. Negative space is intentional.

**MEDIUM — Visual Details:** No flat-color backgrounds — add gradient mesh, noise texture, or pattern. `opacity: 0.03–0.06` grain overlay for tactile depth. Expressive borders and shadows aligned to aesthetic.
