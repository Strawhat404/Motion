# Portfolio Website

A modern, animated portfolio website showcasing full stack development, cybersecurity analysis, and AI/ML development expertise.

## Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Smooth Animations**: Framer Motion with scroll-triggered effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Dynamic project showcases and skill demonstrations
- **Dark/Light Theme**: Seamless theme switching
- **Performance Optimized**: Fast loading with optimized assets

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- shadcn/ui component library
- Wouter for routing
- TanStack Query for state management

### Backend
- Express.js with TypeScript
- Drizzle ORM (configured for PostgreSQL)
- Session management ready

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

4. **Start production server**
   ```bash
   npm start
   ```

## Project Structure

```
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   └── pages/       # Page components
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
└── attached_assets/ # Static assets and images
```

## Development

The project uses a modern development setup with:
- Hot module replacement (HMR) for fast development
- TypeScript for type safety
- ESLint and Prettier for code quality
- Responsive design testing

## Deployment

The application is configured for easy deployment with:
- Production build optimization
- Static asset serving
- Environment-based configuration

## License

MIT License