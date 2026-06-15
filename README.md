# Automata AI Expo Landing Page

A polished static landing page for **Automata AI**, a device-aware AutoML framework that turns raw datasets into optimized, deployable Edge AI models with automated preprocessing, model generation, optimization, packaging, and reporting.

The page is designed as a QR-code destination for expo flyers, posters, and NFC cards. It is a showcase landing page, not the full product website.

## Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages deployment workflow

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Editing Content

Most public-facing content is centralized in:

```text
src/data/siteData.ts
```

Replace the placeholder links there for:

- Product website
- GitHub repository
- Research/system paper
- Demo video
- Presentation
- Team LinkedIn, GitHub, and email links

## GitHub Pages

This project uses `base: './'` in `vite.config.ts`, which works well for GitHub Pages project sites without needing to hardcode the repository name.

To deploy:

1. Push the repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set the source to **GitHub Actions**.
4. Push to the `main` branch or run the `Deploy to GitHub Pages` workflow manually.

If you prefer a fixed base path, set `VITE_BASE_PATH` during build. Example:

```bash
VITE_BASE_PATH=/automata-ai-expo/ npm run build
```
