# homepage2024

jordypereira.be: plain HTML pages built by Vite+ (`index.html`, `life.html`), styled with Tailwind 4, deployed by Netlify.

The defaults are agent-config `shared/reference/repo-defaults.md`; below is only where this repo differs.

- Edits to `reading.md` are pushed straight to `main`. The build renders it into `/reading` and fails on a line outside its format or one that names something private: the repo and site are public.
- Adding a line to `reading.md`:
  - A line is a source that helps someone understand its topic, not every source a run cites.
  - When no `## Topic` fits, add a new one.
  - The owner prunes by hand; never remove a line yourself.
  - Nothing private: no private repo, issue or internal doc, in a link or in the text. The build refuses a link into a GitHub repo that answers 404 unauthenticated, and fails if GitHub cannot be reached; it checks no other host.
  - Before editing, `git pull --ff-only`; if it refuses, stop and say why.
  - Commit and `git push`. If the push is refused, `git pull --rebase`, keep both sides of a conflict (both lines, newest first), and push again.
- Netlify builds a deploy preview for each PR. Comparing it with the live pages is part of building: do it before the PR is marked ready. A merge replaces the live site; Netlify's rollback undoes it in one click.
- `vp check` and `vp build` must pass (run them with `pnpm exec`). Oxlint and Oxfmt run through `vp check`; `vp check --fix` formats.
- A new page is a new `.html` file at the root, listed in `build.rollupOptions.input` in `vite.config.ts`, with the header copied from the others.
