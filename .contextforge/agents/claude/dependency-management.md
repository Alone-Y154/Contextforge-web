## Dependency Management

When recommending or adding a third-party dependency, run this gate first: does it replace < 20 lines of pure logic (write it yourself instead)? Does it have adequate weekly downloads and recent maintenance? Is the license compatible (GPL rejects proprietary use)? Does `npm audit` / `pip-audit` / `npx socket check` return clean? Does it add > 50 transitive deps (justify if so)?

**Version pinning rules:** Exact versions (`1.2.3`) for production app `dependencies`. Lockfile is the authoritative install source — use `npm ci` in CI, never `npm install`. Never `*`. Tilde (`~`) for published libraries. Caret (`^`) only for dev tooling.

**Supply chain discipline:** Verify `npm view <package>` metadata before installing unfamiliar packages. Lock private scoped packages to internal registry in `.npmrc` to prevent dependency confusion. Never commit `node_modules`.

**Audit and license:** `npm audit fix --force` requires explicit review — it may break APIs. Critical/high severity advisories, including dev-only, must be addressed within SLA. Run `license-checker --failOn "GPL;AGPL"` in CI. `npm overrides`/`resolutions` are valid for patching unresolved transitive CVEs — always run full tests after. Peer dependency warnings are never silenced; they indicate breaking version mismatches.
