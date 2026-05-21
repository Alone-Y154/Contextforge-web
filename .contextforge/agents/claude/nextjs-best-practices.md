## Next.js Best Practices

In Next.js App Router, every component is a Server Component by default. Add `'use client'` only when the component genuinely requires `useState`, `useEffect`, event handlers, or browser-only APIs. Keep `'use client'` at the deepest possible leaf node — parent layout and page files should almost never be Client Components.

**Data fetching strategy per data type:** static content → `fetch(url)` (default, build-time cached); periodically updated → `fetch(url, { next: { revalidate: N } })` (ISR); per-request personalized → `fetch(url, { cache: 'no-store' })`; DB/ORM queries → add `noStore()` or `export const dynamic = 'force-dynamic'` at the route level. Never use `useEffect + useState` for data that could be fetched in a Server Component.

**Server Actions are required for mutations:** `'use server'` directive, Zod validation on all inputs, typed return values (`{ success, data }` or `{ success: false, error }`), `revalidatePath()`/`revalidateTag()` after writes. Server-side authorization — never trust client-provided IDs.

**Route file conventions:** `loading.tsx` and `error.tsx` are required on every route segment that fetches data. `error.tsx` must be a Client Component (`'use client'`). `not-found.tsx` for `notFound()` calls. Route groups `(name)` organize without affecting URLs. `route.ts` for API endpoints.

**Performance non-negotiables:** `next/image` (not `<img>`), `next/link` (not `<a href>`), `next/font`, `next/dynamic` for heavy below-fold Client Components. Every extra `'use client'` directive increases the JS bundle.
