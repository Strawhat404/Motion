# Portfolio Project - Full Stack Engineer, Cybersecurity Analyst & AI Developer

## Overview

This is an animated portfolio website showcasing a multi-disciplinary tech professional's work across full stack development, cybersecurity analysis, and AI/ML development. The application features a modern, motion-driven single-page design with scroll-triggered animations, interactive components, and a comprehensive showcase of projects, skills, certificates, and blog content.

The portfolio emphasizes technical sophistication through dynamic animations, asymmetric layouts, and progressive disclosure patterns inspired by leading creative developer portfolios.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System:**
- **shadcn/ui** component library based on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Framer Motion** for declarative animations and scroll-triggered effects
- Component organization follows atomic design principles with reusable UI primitives in `client/src/components/ui/`

**Design System:**
- Custom color system with HSL-based theming supporting light/dark modes
- Responsive breakpoints: mobile-first with `md:` (768px) and `lg:` breakpoints
- Typography hierarchy using Inter font family with JetBrains Mono for code elements
- Spacing system based on Tailwind's 4px increment scale

**Key Architectural Patterns:**
- **Component Composition:** Complex sections built from smaller, reusable components (e.g., ExpertiseCard, ProjectCard)
- **Theme Context:** Global theme state managed via React Context (ThemeProvider)
- **Animation Strategy:** Framer Motion's viewport-based triggers for scroll animations with staggered delays
- **Mobile Responsiveness:** Custom hook (`use-mobile`) for responsive behavior logic

### Backend Architecture

**Server Framework:**
- **Express.js** with TypeScript for the HTTP server
- **Custom middleware** for request logging and JSON body parsing
- Modular route registration pattern with separation of concerns

**Development vs Production:**
- Development mode uses Vite middleware for HMR and module transformation
- Production mode serves pre-built static assets from `dist/public`
- Environment-based configuration via `NODE_ENV`

**Storage Layer:**
- **In-memory storage** implementation (MemStorage) currently active
- Interface-based design (`IStorage`) allows easy swapping to database-backed storage
- User management with UUID-based identifiers

**Database Configuration (Prepared but not active):**
- Drizzle ORM configured for PostgreSQL with Neon serverless driver
- Schema defined in `shared/schema.ts` with Zod validation
- Migration tooling configured via `drizzle.config.ts`
- Connection pooling through `@neondatabase/serverless`

### External Dependencies

**Third-Party UI Libraries:**
- **Radix UI:** Accessible component primitives (dialogs, dropdowns, tooltips, etc.)
- **Lucide React:** Icon library
- **React Icons:** Additional icon sets (Simple Icons for brand logos)
- **Embla Carousel:** Touch-enabled carousel component
- **CMDK:** Command palette/search interface

**Development Tools:**
- **Replit Plugins:** Runtime error overlay, cartographer, dev banner for Replit environment
- **TSX:** TypeScript execution for development server
- **esbuild:** Fast server-side bundling for production

**Session Management (Configured):**
- **connect-pg-simple:** PostgreSQL session store for Express sessions
- Not currently active but prepared for authentication flows

**Validation & Forms:**
- **Zod:** Runtime type validation
- **React Hook Form** with Hookform Resolvers for form state management
- **drizzle-zod:** Integration between Drizzle schemas and Zod validation

**Animation & Interaction:**
- **Framer Motion:** Production-ready animation library with gesture support
- **class-variance-authority:** Type-safe component variant management
- **clsx + tailwind-merge:** Efficient className composition

**Date Handling:**
- **date-fns:** Lightweight date manipulation and formatting

### Asset Management

- Static assets referenced from `attached_assets/` directory
- Vite alias configuration for clean asset imports (`@assets`)
- Image optimization handled by Vite during build process