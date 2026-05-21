## React Performance

Evaluate performance in priority order: Waterfalls → Bundle Size → Server-Side → Client Fetching → Re-renders → Rendering → JS → Advanced.

**CRITICAL — Waterfalls:** Independent async operations must use `Promise.all()`. Check cheap conditions before awaiting expensive values. Start promises early in functions and await them late. Use Suspense to stream independent UI segments without waiting for all data.

**CRITICAL — Bundle size:** Never import from barrel files (`index.ts`) — import from the source file directly. Use `next/dynamic` for any heavy component not needed on the initial render. Load optional feature modules conditionally (`await import(...)`). Defer analytics/monitoring/chat until after hydration.

**HIGH — Server-side:** Module-level mutable state in RSC/SSR is a concurrency bug — it's shared across all requests. Use `React.cache()` for per-request deduplication of identical DB calls. Hoist static `fs.readFile` calls to module level. Pass only the fields Client Components need — every RSC prop is serialized to JSON.

**MEDIUM — Re-renders:** Inline component definitions (`const Child = () =>` inside a parent function) cause full unmounts on every parent render — always define components at module level. Default non-primitive props (`items = []`) create new references on every render — hoist to constants. Derive state during render, never via `useEffect + setState`. Use functional setState (`prev => prev + 1`) for updates depending on previous state. Object dependencies in `useEffect` cause stale/infinite loops — use primitives.

**MEDIUM — Rendering:** `&&` with non-boolean left side renders `0` — use ternary. `content-visibility: auto` on off-screen content. Use `useTransition` / `startTransition` for non-urgent updates. Don't animate SVG directly — wrap and animate the container.
