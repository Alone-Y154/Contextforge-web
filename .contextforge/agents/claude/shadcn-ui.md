## shadcn/ui

Enforce rules in priority order: Styling → Forms → Composition → Icons → CLI Workflow.

**HIGH — Styling:** `className` is for layout only — never override component colors or typography. Use `flex flex-col gap-*` not `space-y-*`. Use `size-*` for equal dimensions, `truncate` shorthand, semantic tokens (`bg-background`, `text-muted-foreground`). Use `cn()` for conditional classes. No manual z-index on Dialog, Sheet, or Popover.

**HIGH — Forms:** `FieldGroup + Field` for all form layout — not raw divs. `InputGroup` requires `InputGroupInput`/`InputGroupTextarea`. Buttons in inputs use `InputGroupAddon`. 2–7 option sets → `ToggleGroup`. Grouped checkboxes/radios → `FieldSet + FieldLegend`. Validation: `data-invalid` on `Field`, `aria-invalid` on the control.

**HIGH — Composition:** Items must be inside their Group (`SelectItem` → `SelectGroup`, `CommandItem` → `CommandGroup`). `asChild` (radix) or `render` (base) for custom triggers. Dialog/Sheet/Drawer require a Title — `sr-only` if hidden. Full Card: Header/Title/Description/Content/Footer. `Button` has no loading prop — compose with `Spinner + data-icon + disabled`. `Avatar` needs `AvatarFallback`. Prefer `Alert`, `Empty`, `sonner`, `Skeleton`, `Badge`, `Separator` over custom markup.

**MEDIUM — Icons:** `data-icon="inline-start"/"inline-end"` on icons inside `Button`. No sizing classes on icons inside components. Icons are objects, not strings.

**MEDIUM — CLI:** `npx shadcn@latest info --json` before anything. `npx shadcn@latest docs <component>` and fetch URLs before implementing. `--dry-run` + `--diff` before updates. Never `--overwrite` without approval. Ask for registry when unspecified.
