## React Composition Patterns

Evaluate composition in priority order: Component Architecture → State Management → Implementation Patterns → React 19 APIs.

**HIGH — Component Architecture:** Boolean props (`isMulti`, `isSearchable`, `isGrouped`) create a cartesian explosion of untestable states — replace with composition. Use compound components: a root component manages state via context; named sub-components (`Select.Option`, `Modal.Header`) consume that context. Children configure behavior structurally, not via flags.

**MEDIUM — State Management:** Providers own state management details; consumers see only `{ state, actions }` — never expose raw setters like `setIsOpen`. Define context with `ContextInterface<TState, TActions, TMeta>` for a stable, injectable interface. Siblings that share state must lift it to a common provider — never duplicate local state across siblings.

**MEDIUM — Implementation Patterns:** Prefer explicit named variant components (`PrimaryButton`, `SecondaryButton`) over boolean mode props. Compose slots via sub-components (`Modal.Header`, `Modal.Footer`) or `children` — not `renderX` callback props.

**MEDIUM — React 19 (skip for React 18):** Remove `forwardRef` — accept `ref` as a plain prop. Prefer `use(Context)` over `useContext()` — it works after early returns and inside conditionals.
