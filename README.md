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

## Project Highlights

| Category | Project | Notes |
|----------|---------|-------|
| Web | EcoPartage | Community sharing platform with AI-assisted tagging & recommendations |
| Robotics | All-Terrain Rover | Multi-controller teleop, smoothing & latency focus |
| Robotics | Line-Following Robot | Adaptive control & telemetry (vertical layout) |
| AI / Data | Sales Forecasting | Demand forecasting workflow & evaluation |
| Web | ClubFLOW | Club management (auth, events, resources) |
| Mobile | ShowTime | Event discovery & reservation (rapport included) |
| Web | Interactive Quiz | Gamified quiz with leaderboards & auth |
| Robotics | Maze Solver Robot | Autonomous maze exploration (placeholder media) |

## Representative Tech Stack

Frontend: React, TypeScript, Vite, Tailwind CSS, Framer Motion  
Backend / Platform: Node, Express, NestJS, Spring Boot  
Data & Intelligent Systems: Python (pandas, scikit-learn, XGBoost), Data Pipelines  
Embedded / Robotics: Arduino, ESP32, C/C++, Control & Sensing  
Tooling & Infra: Docker, GitHub Actions, CI/CD  
Databases: PostgreSQL, MySQL, MongoDB  
Other: OpenCV, FastAPI, GraphQL concepts, REST APIs

## Getting Started

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

## Accessibility & UX

- Respects user reduced motion preferences
- Keyboard lightbox navigation (Esc to close, Arrow keys to cycle)
- Focus-visible styles and ARIA labels on interactive elements
- Semantic headings for structure

## Rapport Integration

PDF rapports stored in `src/pdf/*` surfaced via conditional “Rapport” buttons.

## Future Enhancements

- Project-level tag search / filtering
- Performance metrics section (bundle size, Core Web Vitals)
- i18n (multi-language) support
- Replace placeholder maze solver images with real captures

## License

MIT © Skander Hakouna. Please credit if you reuse patterns/component ideas.

## Author & Contact

Skander Hakouna — Web & Mobile • Robotics / Embedded • Data & Intelligent Systems  
LinkedIn: https://www.linkedin.com/in/skander-hakouna  
GitHub: https://github.com/SkanderTN  
Email: skander.hakouna@enicar.ucar.tn
