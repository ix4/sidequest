# Sidequest ↗

A home for miscellaneous pages, dashboards, and useful little experiments.

A dark, glowing collection inspired by the digital clock: black and teal backgrounds,
icy-blue type, and Share Tech Mono (with a local monospace fallback).

Live: https://ix4.github.io/sidequest/ · Clock: https://ix4.github.io/sidequest/pages/clock/
Plain HTML, CSS, and JavaScript. No Jekyll. No runtime dependencies.

## Local development

Use Node.js 22 or newer. No installation step is required.

```sh
npm run dev
```

Open http://localhost:4173. Edit files under `site/` and refresh.

## Add something

```sh
npm run new -- page reading-list "Reading list"
npm run new -- dashboard habits "Habit tracker"
```

The command creates a standalone page and registers it in `site/catalog.json`.
Edit its HTML, then update the description, symbol, and color in the catalog.
Use relative asset URLs so pages work beneath a repository URL or custom domain.

## Layout

- `site/index.html`: collection landing page
- `site/catalog.json`: collection entries
- `site/pages/<slug>/`: independent pages
- `site/dashboards/<slug>/`: independent dashboards
- `site/assets/`: shared styles, icons, and scripts
- `scripts/`: local preview, validation, build, and page generator
- `dist/`: generated publish output, ignored by Git

Pulse contains clearly labeled illustrative data. Replace it with your own public
JSON or browser-accessible API. GitHub Pages serves static files; server code and
private API credentials need a separate backend. Everything deployed is public.

## Publishing

Enable **Settings → Pages → Source → GitHub Actions** once. Push to `main` to
validate the site, upload only `dist/`, and deploy. Pull requests validate without
publishing. The workflow contains no Jekyll step and the artifact includes
`.nojekyll`.

```sh
npm run check
npm run build
```

Validation checks catalog routes, duplicate entries, local HTML links, and metadata.
The build copies only `site/`, keeping repository documentation and scripts out of
the published site. Monthly Dependabot updates keep GitHub Actions current.

## Working conventions

Keep each experiment in its own folder. Share assets where useful, keep URLs
relative, label demo data, and keep secrets out of this public repository.
No license is assigned yet; choose one before inviting reuse.
