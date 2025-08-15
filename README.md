# Personal Portfolio

A modern, high-performance personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. It showcases education, research, AI/ML projects, accomplishments, and contact information with an animated, glassmorphism-inspired UI.

## 🚀 Tech Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + custom gradients & animations
- **Icons:** Lucide React
- **Routing:** React Router DOM

## ✨ Features
- Responsive multi-page layout (Home, Education, Skills, Projects, Research, Accomplishments, Coursework, Contact)
- Animated hero section with split layout & starfield effect
- Scroll-triggered section fade animations (Intersection Observer)
- Dynamic project + research content
- Accessible, keyboard-friendly navigation
- Glass / cosmic gradient design system

## 📂 Structure
```
project/
  src/
    components/      # Reusable UI + section blocks
    pages/           # Route-level pages
    main.tsx         # App bootstrap
    App.tsx          # Router + layout wrapper
  index.html
  tailwind.config.js
  vite.config.ts
  package.json
```

## 🧪 Development
Install dependencies:
```powershell
npm install
```
Run dev server (custom port if configured in `vite.config.ts`):
```powershell
npm run dev
```
Build for production:
```powershell
npm run build
```
Preview production build:
```powershell
npm run preview
```

## 🛠 Customization
- Update project entries in `src/components/Projects.tsx`.
- Adjust research content in `src/pages/ResearchPage.tsx`.
- Modify hero messaging in `src/components/HeroSection.tsx`.
- Tailwind theme tweaks via `tailwind.config.js`.

## 🌐 Deployment
You can deploy easily to:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Typical static deploy uses the `dist` folder after `npm run build`.

## 🔒 Housekeeping
`node_modules` is intentionally excluded from version control (will be removed from history). Run `npm install` after cloning.

## 📝 License
Add a license of your choice (e.g., MIT) if you plan to make this public/open source.

---
Maintained by Sujay Sun.
