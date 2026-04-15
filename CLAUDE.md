# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200
npm run build      # Production build → dist/
npm run watch      # Rebuild on file changes
npm test           # Run unit tests (Vitest + jsdom)
```

## Architecture

**Angular 21** app using standalone components (no NgModules), lazy-loaded routes, and component-scoped SCSS.

### Folder structure

```
src/app/
├── core/           # Singleton services, models, static data
│   ├── models/     # Product interface
│   ├── services/   # WhatsappService (only external integration)
│   └── data/       # Static PRODUCTS array (source of truth)
├── features/       # One folder per route (home, catalogue, product-detail, lookbook, about, order)
├── shared/         # Navbar, Footer, WhatsApp float button, CfaCurrencyPipe
└── styles/         # _variables.scss, _typography.scss, _animations.scss
```

### Routing

All routes are lazy-loaded via `loadComponent()` in [app.routes.ts](src/app/app.routes.ts). The root layout (navbar + router-outlet + footer + WhatsApp button) is defined in [app.ts](src/app/app.ts).

| Path | Feature |
|------|---------|
| `/` | Home |
| `/catalogue` | Product grid with category filter |
| `/catalogue/:id` | Product detail (`:id` is a slug, not a numeric ID) |
| `/lookbook` | Tabbed product showcase |
| `/notre-histoire` | About/values |
| `/commander` | Order process & FAQs |

### State management

No library — state is local:
- Products come from the static `PRODUCTS` array in `core/data/products.data.ts`
- Filtering happens in-memory inside catalogue/lookbook components
- `ActivatedRoute.params.subscribe()` is used in ProductDetail to react to slug changes

### WhatsApp integration

`WhatsappService` in `core/services/whatsapp.ts` is the only external integration. It generates `https://wa.me/{phone}?text={encoded}` links. The phone number `22600000000` is a placeholder.

## Design system

Variables are in [src/styles/_variables.scss](src/styles/_variables.scss):

- **Gold** `$or` `#C4922A`, **Brown** `$terre` `#7A3B1E`, **Cream** `$creme` `#F5EFE0`, **Dark** `$anthracite` `#1C1A18`
- **Fonts**: Cormorant Garamond (display), DM Sans (body), Cinzel (accent)
- **Breakpoints**: mobile < 768px, tablet 768–1024px, desktop ≥ 1024px

## Key conventions

- All components use `standalone: true` and import their own dependencies
- Component styles use SCSS (`inlineStyleLanguage: "scss"`)
- TypeScript strict mode is enabled (`strict: true`, `strictTemplates: true`)
- No HTTP client or backend — adding one requires `provideHttpClient()` in `appConfig` ([main.ts](src/main.ts))
