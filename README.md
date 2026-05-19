![Logo](https://v1.prionation.io/logo.png)

# PRAYOGA — Creative Lab & Identity Studio

[![Darwin Prayoga](https://img.shields.io/badge/Darwin-Prayoga-blue)](https://github.com/darwinprayoga)
[![Deno Fresh](https://img.shields.io/badge/Deno-Fresh-70ffaf?logo=deno)](https://fresh.deno.dev)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Live](https://img.shields.io/badge/Live-v1.prionation.io-blue)](https://v1.prionation.io)

A premium personal portfolio & experimental digital lab built entirely with **Deno Fresh** + **Preact** — designed with an iOS glassmorphism aesthetic. Zero runtime overhead, edge-rendered, zero database dependencies.

---

## ✦ Pages & Features

### 🏠 Landing — `darwinprayoga.deno.dev` / `v1.prionation.io`
- Light-first theme with forced dark-mode toggle guide (iOS-style toggle with animated cue)
- **Pokémon Identity Lab** — enter any nickname to claim a deterministic, identity-locked Pokémon companion (hash-based, no DB)
- Two CTAs: **Explore My Journey** → Journey page | **Customize Project ✨** → Requirement Builder

### 🧬 Pokémon Identity — `/{username}`
- Full Pokémon profile card with iOS glassmorphism aesthetic
- **iPhone-style bottom drawer** (`My Profile ↑`) — reveals algorithmically derived personality traits from Pokémon type + battle stats
- **Instagram Story exporter** — generates a 1080×1920 canvas card with username, Pokémon name, primary trait, and `v1.prionation.io` watermark
- Trait engine maps Fire → Trailblazer, Psychic → Strategist, high Speed → Rapid Executor, etc.

### 🪐 Pokémons World — `/world`
- Compendium of 10 curated popular Pokémon
- Global search powered by PokeAPI (search any of 898 Pokémon)
- Rich modal with battle stats, abilities, height/weight, character archetype lore
- **No username input** — clicking "Generate My Character Identity" assigns a random nickname from a curated pool and navigates to their identity page

### 🗺 Explore My Journey — (in-app page)
- Career timeline: 2022 Foundation vs 2026 AI Scale era comparison
- CV preview modals (embedded PDF iframes) for both `resume.pdf` and `resume-2026.pdf`
- UBSI championship certificate preview
- Social links: LinkedIn, Twitter, Instagram

### 🛠 Customize Project — `/plan`
- Multi-section interactive requirement builder
- Selects: Architecture Stack, Domain config, Design style, Pages, DB Collections, APIs, Extra add-ons (SEO/Auth/Analytics/PWA)
- **Live estimate calculator** — floating iOS-style panel shows dynamic budget ($USD) + delivery timeline (weeks)
- **⚡ Real-Time Edge Analytics** card with link to Google PageSpeed Insights
- Inline sandboxes: FastMeal Food Menu demo + Fashion Catalogue demo (no page navigation required)
- Submit → glass modal with copyable `consult@prionation.io` recipient + full proposal specs

### 🍔 FastMeal Demo — `/fastmeal`
- Full interactive food ordering simulation: Burger, Pizza, Sushi + drinks
- Cart, quantity controls, totals — Performance stack showcase

### 👗 Fashion Catalogue — `/sickkfashion`
- Full-scroll visual product catalogue — Experience stack showcase

---

## 🏗 Tech Stack

| Layer | Technology |
|---|---|
| Runtime | [Deno](https://deno.land) v1.x |
| Framework | [Fresh](https://fresh.deno.dev) (file-based routing, islands architecture) |
| UI | [Preact](https://preactjs.com) + [Twind](https://twind.style) (Tailwind-in-JS) |
| Data | [PokeAPI](https://pokeapi.co) (public, no auth) |
| Storage | **None** — fully stateless, deterministic hash for identity lock |
| Assets | Compressed PNG/SVG, PDF embeds |
| Deploy | [Deno Deploy](https://deno.com/deploy) |

---

## 🚀 Getting Started

**Prerequisites:** [Deno](https://docs.deno.com/runtime/manual/getting_started/installation) installed.

```bash
# Clone
git clone git@github.com:darwinprayoga/prayoga.git
cd prayoga

# Start development server (hot-reload)
deno task start
```

Runs at **http://localhost:8000**

```bash
# Type check only
deno check main.ts dev.ts

# Build static assets
deno task build
```

---

## 📁 Project Structure

```
prayoga/
├── routes/           # File-based pages (Fresh routing)
│   ├── index.tsx     # Landing page
│   ├── [username].tsx # Pokémon identity page
│   ├── world.tsx     # Pokémons World compendium
│   ├── plan.tsx      # Project requirement builder
│   ├── history.tsx   # Redirects → /world
│   └── ...
├── islands/          # Interactive client-side Preact components
│   ├── Intro.tsx     # Landing hero + Pokémon lab
│   ├── Share.tsx     # Identity card + bottom drawer
│   ├── PokemonsWorld.tsx # Compendium + detail modals
│   ├── Pricing.tsx   # Requirement builder + estimate engine
│   ├── Journey.tsx   # Career timeline + PDF previews
│   ├── FoodMenu.tsx  # FastMeal ordering demo
│   ├── Fashion.tsx   # Fashion catalogue demo
│   └── Server.tsx    # Server-side info display
├── components/       # Shared non-interactive components
│   ├── Sync.tsx      # <head> / meta tags
│   ├── Icons.tsx     # SVG icon components
│   └── Nav.tsx       # Navigation back-button
├── utils/
│   └── pokemon.ts    # Hash-based identity lock + PokeAPI fetch
├── static/           # Public assets (images, fonts, PDFs)
│   ├── avatar.png
│   ├── logo.png
│   ├── resume.pdf
│   ├── resume-2026.pdf
│   └── ...
├── twind.config.ts   # Tailwind/Twind configuration
├── deno.json         # Tasks + import map
└── fresh.gen.ts      # Auto-generated manifest
```

---

## 🎨 Design System

- **Aesthetic**: Apple iOS glassmorphism — frosted glass cards, ambient blur orbs, system-blue accents
- **Themes**: Light (`#F2F2F7` base) + Dark (`#000000` base) — toggled via iOS-style switch
- **Typography**: System UI stack (`-apple-system, system-ui, sans-serif`)
- **Animations**: `animate-fade-in-up`, `animate-bounce`, `animate-pulse`, iOS spring drawer transitions

---

## 🧬 Pokémon Identity Algorithm

The identity lock is **fully deterministic and offline** — no database:

```ts
function getPokemonIndex(username: string): number {
    const clean = username.trim().toLowerCase();
    let hash = 0;
    for (let i = 0; i < clean.length; i++) {
        hash = clean.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 898) + 1; // Maps to Pokédex #1–898
}
```

The same nickname will **always** yield the same Pokémon — everywhere, forever.

---

## 📧 Contact & Consulting

- **Consulting**: [consult@prionation.io](mailto:consult@prionation.io)
- **Live Site**: [v1.prionation.io](https://v1.prionation.io)
- **LinkedIn**: [linkedin.com/in/darwinprayoga](https://linkedin.com/in/darwinprayoga)
- **GitHub**: [github.com/darwinprayoga](https://github.com/darwinprayoga)

---

© 2022 Darwin Prayoga. All rights reserved. (Updated 05/19/2026)
