# Skander Hakouna — Portfolio

An animated, accessible, and fast developer portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and lucide-react icons.

- Responsive and keyboard accessible (Esc/Arrows for lightbox)
- Motion with reduced-motion support
- Local media gallery (images + videos) with a lightbox
- Project tabs with animated segmented control
- Contact and “Interests & PFE focus” sections

## Preview

Run it locally to preview; deployment to Vercel/Netlify is one command (see below).

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS for styling
- Framer Motion for animations
- lucide-react for icons

## Features

- Animated hero, metrics, stacks chip cloud
- Project cards with category tabs and animated active pill
- Images and videos per project, with lightbox and keyboard navigation
- Vertical video layout for robotics (side-by-side with thumbnails)
- Rapport (PDF) links and code/demo buttons when available
- Contact section and interests/PFE focus

## Getting Started

Prerequisites: Node 18+ (recommended) and npm.

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/Portfolio.tsx` — Main portfolio page and UI logic
- `src/SCREENS/*` — Images/videos used by projects and profile
- `src/pdf/*` — Project rapports (PDFs)
- `tailwind.config.js`, `postcss.config.js` — Styling config
- `vite.config.ts` — Vite configuration

## Accessibility

- Keyboard support for the lightbox (Esc to close, Arrow keys to navigate)
- Focus-visible styles and ARIA labels on interactive elements
- Respects user “Reduce motion” preferences

## Deployment

- Vercel: import the repo and use `npm run build` (framework auto-detected)
- Netlify: set build command to `npm run build` and publish directory to `dist`

## Contact

- GitHub: https://github.com/SkanderTN
- LinkedIn: https://www.linkedin.com/in/skander-hakouna
- Email: skander.hakouna@enicar.ucar.tn

---

© {new Date().getFullYear()} Skander Hakouna
