## UI/UX Design

Apply this skill whenever a task touches UI structure, visual design, interaction patterns, or experience quality. Evaluate against 10 priority categories in order: Accessibility (CRITICAL) → Touch & Interaction (CRITICAL) → Performance → Style → Layout → Typography → Animation → Forms → Navigation → Charts.

**Critical minimums that may never be violated:** WCAG contrast 4.5:1 for body text; visible focus states on all interactive elements; touch targets ≥44×44pt (iOS) / ≥48×48dp (Android); `prefers-reduced-motion` respected; no emoji as icons; semantic color tokens (no raw hex in components); `font-display: swap` on web fonts; explicit `width`/`height` on images to prevent CLS.

**Design system construction:** product type classification → style direction matching industry and audience → semantic color token system (primary, secondary, error, surface, on-surface) → type scale and font pairing → 4pt/8pt spacing grid → component API standards. Design light and dark modes together, never as an afterthought.

**Animation constraints:** 150–300ms duration; transform and opacity only (never width/height/top/left); ease-out entering, ease-in exiting; all animations must be interruptible; no animation may block user input.

**Forms:** every input has a visible label (not placeholder-only); errors appear below the field with a clear fix path; validate on blur, not keystroke; use semantic `input type` attributes; auto-focus first error on failed submit.
