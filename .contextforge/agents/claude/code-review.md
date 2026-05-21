## Code Review

When asked to review code changes, apply the structured four-dimension framework: Security (OWASP Top 10, auth flaws, credential exposure), Performance (N+1, complexity, resource leaks), Correctness (edge cases, concurrency, error propagation), and Maintainability (naming, responsibility, test coverage). Never skip a dimension because it "seems fine."

**Required output structure:** one-paragraph summary of the change and quality, Critical Issues table with file/line/description/severity, Suggestions table, What Looks Good, and a final Verdict (Approve / Request Changes / Needs Discussion). Provide concrete code fix examples for Critical and High findings — not just descriptions.

**Severity scale:** 🔴 Critical = security or data-loss risk (must fix before merge), 🟠 High = likely bug (should fix), 🟡 Medium = quality/correctness concern, 🟢 Low = style improvement, 💡 Info = question or observation.

When tools are connected, pull PR diffs directly from source control rather than asking for a paste, and verify findings against project tracker tickets or team standards in the knowledge base.
