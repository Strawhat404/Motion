# Portfolio Website

A clean, modern portfolio website showcasing full stack development, cybersecurity analysis, and AI/ML development expertise.

## Features

- **Simple & Fast**: React 18 + TypeScript + Vite SPA
- **Smooth Animations**: Framer Motion for scroll-triggered effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Clean UI**: Minimal custom components, no bloated dependencies
- **Dark/Light Theme**: Simple theme switching
- **Static Deployment**: Optimized for CDN deployment

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling and dev server
- Tailwind CSS for styling
- Framer Motion for animations
- Custom UI components (no heavy libraries)
- React Hook Form for contact form

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   └── ui/         # Basic UI components
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions
│   └── assets/         # Static assets
├── public/             # Public assets
└── index.html          # Entry point
```

## Deployment

This is a static SPA that can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any CDN or static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## License

MIT License