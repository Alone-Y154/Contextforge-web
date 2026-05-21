# ContextForge Git Safety

Do not commit, push, merge, rebase, reset, delete branches, or rewrite history unless explicitly requested by the user.

## Git Workflow

Never commit directly to `main` or `master`. Every change gets its own branch with a conventional prefix: `feature/`, `bugfix/`, `hotfix/`, `refactor/`, `docs/`.

**Commit messages** follow Conventional Commits: `type(scope): subject` (imperative, ≤72 chars), blank line, body that explains *why* the change was made (not what — the diff shows that), issue reference at foot. Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`. Delete merged branches.

**Safety constraints:** Use `--force-with-lease` instead of `--force`. Never `reset --hard`, force-push, or amend commits already on a shared branch without explicit user confirmation. Run tests locally before pushing.

**Sync:** Keep feature branches rebased onto `main`. Prefer `git pull --rebase` over merge-pulls. Use `git fetch --prune` to clean stale references. Commit only working states; stage with `git add -p` or review `git diff --staged` before committing.
