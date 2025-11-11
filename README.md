<div align="center">
  <img src="./public/favicon.svg" height="80" alt="Logo" />
  <h1>Portfolio – Skander Hakouna</h1>
  <p><strong>Web & Mobile • Robotics / Embedded • Data & Intelligent Systems</strong></p>
  <p>Final-year computer engineering portfolio showcasing projects, media, and PFE focus with a performant animated React + TypeScript + Vite stack.</p>
</div>

## ✨ Features

- Animated, accessible single-page portfolio (Framer Motion with reduced motion support)
- Responsive layout with dark mode (Tailwind CSS)
- Dynamic project filtering (segmented tabs with animated pill)
- Image & video lightbox with keyboard navigation (Esc / Arrow keys)
- Vertical robotics video layout (tall aspect + side media) and standard media grids
- Local asset pipeline (images, videos, PDF rapports) via helper functions
- Email copy-to-clipboard and social links
- Expanded technology stack chips with subtle motion
- Scroll progress indicator for page navigation feedback
- Clean conditional rendering (rapport, demo, code button suppressed for robotics)

## 🗂 Project Highlights

| Category | Project | Notes |
|----------|---------|-------|
| Web | EcoPartage | Community sharing platform with AI-assisted tagging & recommendations |
| Robotics | All-Terrain Rover | Multi-controller teleop, smoothing & latency focus |
| Robotics | Line-Following Robot | PID control, telemetry, vertical media layout |
| AI / Data | Sales Forecasting | End-to-end demand forecasting & evaluation |
| Web | ClubFLOW | Club management (auth, events, resources) |
| Mobile | ShowTime | Event discovery & reservation (rapport included) |
| Web | Interactive Quiz | Gamified quiz with leaderboards & auth |
| Robotics | Maze Solver Robot | Autonomous maze exploration (placeholder media) |

## 🧱 Tech Stack (Representative)

Frontend: React, TypeScript, Vite, Tailwind CSS, Framer Motion  
Backend / Platform: Node, Express, NestJS, Spring Boot  
Data / Intelligent Systems: Python (pandas, scikit-learn, XGBoost), Data Pipelines  
Embedded / Robotics: Arduino, ESP32, C/C++, PID Control, Sensor Fusion, BLE/HID, Servo, Ultrasonic Sensors  
Tooling & Infra: Docker, GitHub Actions, CI/CD  
Databases: PostgreSQL, MySQL, MongoDB  
Other: OpenCV, FastAPI, GraphQL (concepts), REST APIs

## 🚀 Getting Started

### Prerequisites
Node.js 18+ recommended.

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173` (or the next available port) in your browser.

### Build
```bash
npm run build
```
Static output in `dist/`.

### Preview Production Build
```bash
npm run preview
```

## 🧩 Accessibility & UX
- Respects user reduced motion preferences.
- Keyboard lightbox navigation (Esc to close, Arrow keys to cycle).
- Focus-visible styles on interactive chips & buttons.
- Semantic headings & ARIA attributes where relevant.

## 📄 Rapport Integration
Project-level PDF rapports are served from `src/pdf/*` and rendered via a conditional “Rapport” button.

## 🛠 Structure
```
src/
  Portfolio.tsx   # Main portfolio component & layout
  main.tsx        # App bootstrap
  index.css       # Tailwind base + custom utilities
  SCREENS/        # Images & video assets
  pdf/            # Rapport PDFs
```

## 🔄 Future Enhancements
- Add project-level tags & search
- Introduce performance metrics section (bundle size, lighthouse)
- Internationalization (i18n) layer
- Replace placeholder maze solver images with real captures

## 🤝 Contributing
Open to suggestions via Issues & PRs. For major changes, please discuss first to align direction.

## 📄 License
Personal portfolio source – not licensed for commercial redistribution. Feel free to reference structure & patterns.

## 👤 Author
Skander Hakouna – Web & Mobile • Robotics / Embedded • Data & Intelligent Systems  
[LinkedIn](https://www.linkedin.com/in/skander-hakouna) • [GitHub](https://github.com/SkanderTN)

---
If this portfolio inspires you, a star is appreciated. 🚀
