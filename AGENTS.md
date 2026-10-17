# homepage2024

jordypereira.be: plain HTML pages built by Vite+ (`index.html`, `life.html`), styled with Tailwind 4, deployed by Netlify.

- Edits to `reading.md` are pushed straight to `main`. The build renders it into `/reading` and fails on a line outside its format or one that names something private: the repo and site are public.
- Code changes go by PR. Netlify builds a deploy preview; compare it with the live pages, get a review, and the session merges. A merge replaces the live site; Netlify's rollback undoes it in one click.
- `vp check` and `vp build` must pass (run them with `pnpm exec`). Oxlint and Oxfmt run through `vp check`; `vp check --fix` formats.
- A new page is a new `.html` file at the root, listed in `build.rollupOptions.input` in `vite.config.ts`, with the header copied from the others.
