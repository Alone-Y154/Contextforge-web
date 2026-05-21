## TypeScript Advanced Types

Apply when building type-safe libraries, reusable generics, API clients, form validation, or complex inference logic.

**HIGH — Generics:** Constrain with `extends`. Multiple params for merge patterns. Prefer inference over explicit type args.

**HIGH — Conditional Types:** `T extends Cond ? A : B`. `infer` for extracting return/element/promise types. Distributive over unions — `[T]` to prevent. Nest for type→string literal mappings.

**HIGH — Mapped Types:** `[P in keyof T]` with `readonly`/`?`/`-?`/`-readonly` modifiers. Key remapping via `as \`get${Capitalize<K>}\``. Property filtering via `as T[K] extends U ? K : never`. Recursive `DeepReadonly`/`DeepPartial` via mapped + conditional.

**HIGH — Discriminated Unions:** Literal discriminant field (`type`/`status`). TypeScript narrows in switch/if automatically. `assertNever(x: never)` default branch = exhaustive checking. Never use boolean flags for mutually exclusive states.

**HIGH — Type Inference:** `infer` inside conditional types. Type guards (`value is T`) for runtime narrowing. Assertion functions (`asserts value is T`). `as const` for literal preservation + union-from-array.

**MEDIUM — Template Literals:** Event handler names from event unions. Dot-path types. String manipulation built-ins.

**MEDIUM — Best Practices:** `unknown` over `any`. `interface` for object shapes. Avoid `as T` casts — type guards only. `"strict": true` always. Cache complex types in named aliases. Write `AssertEqual` type tests.
