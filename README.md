# 🌌 Astro Blog with Svelte Islands & Nanostores

> Learning project: building a blog with Astro's island architecture, Svelte interactivity, and nanostores for micro-state management.

## What Is This?

A static blog built with **Astro** that uses **Svelte components as interactive islands**. Instead of shipping a full SPA, Astro renders HTML at build time and only hydrates the interactive parts (Svelte components) where needed.

This project was also deployed as a **micro-frontend** — loaded inside a React host application via iframe at `micro.cosasdev.comovas.es`.

## What I Learned

| Concept | Implementation |
|---------|---------------|
| **Astro island architecture** | Static HTML with selective hydration (`client:load`, `client:visible`) |
| **Svelte in Astro** | `.svelte` components as interactive islands inside `.astro` pages |
| **Nanostores (micro-state)** | Lightweight state management: `NanoBoton`, `NanoMenu`, `NanoAñadirCosas` |
| **Component switching** | `CambiarComponentes` — router-like component swapping without a router |
| **Data fetching** | `ListPueblos` & `ListAves` — fetching JSON endpoints at build time |
| **Content collections** | Markdown + MDX blog posts with frontmatter |
| **RSS & Sitemap** | Auto-generated RSS feed and sitemap.xml |
| **CSS Grid** | Raster grid system (`r-grid`, `r-cell`) for responsive layouts |
| **Micro-frontends** | Deployed as an iframe child of a React host app |

## Tech Stack

- **Astro 1.6** — static site generator with island architecture
- **Svelte 3** — interactive island components
- **Nanostores** — ultra-light state management
- **MDX** — Markdown with embedded components
- **Raster Grid** — CSS grid layout system
- **TypeScript** — type-safe config and data files

## Project Structure

```
src/
├── components/
│   ├── Foobar.svelte          # Island: component switcher demo
│   ├── NanoBoton.svelte       # Nanostore-powered button
│   ├── NanoMenu.svelte        # Nanostore-powered menu
│   ├── NanoAñadirCosas.svelte # Nanostore: add items to state
│   ├── CambiarComponentes.svelte  # Dynamic component loader
│   ├── ListPueblos.svelte     # Fetch + render pueblos data
│   └── ListAves.svelte        # Fetch + render aves data
├── layouts/
│   └── BlogPost.astro         # Blog post template
├── pages/
│   ├── index.astro            # Home with Svelte island demos
│   ├── blog.astro             # Blog listing
│   ├── blog/*.md              # Markdown blog posts
│   ├── about.md               # About page
│   ├── english/vocabulario.md # English vocabulary notes
│   ├── pueblos.json.js        # JSON data endpoint
│   └── rss.xml.js             # RSS feed generator
└── config.ts                  # Site config
```

## Run It

```bash
npm install
npm run dev     # → localhost:3000
npm run build   # → ./dist/
```

## Live Demo

🌐 `micro.cosasdev.comovas.es` — restored and live!

---

*Part of my learning journey at [comovas.es](https://web.comovas.es)*
