# CampusHub Student Dashboard

## Overview
CampusHub is a comprehensive student dashboard application that provides a centralized platform for managing campus life. The application offers real-time access to course information, assessments, messaging, campus navigation, and announcements. Built as a full-stack web application, it serves as a one-stop solution for students to stay organized and connected with their academic environment.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with **React 18** using **TypeScript** and follows a component-based architecture. The application uses **Vite** as the build tool and development server, providing fast hot module replacement and optimized builds. The UI is constructed with **shadcn/ui** components, which are built on top of **Radix UI** primitives, ensuring accessibility and consistent design patterns.

The styling approach leverages **Tailwind CSS** with a custom design system that includes CSS variables for theming. The color palette supports both light themes with semantic color tokens (primary, secondary, accent, highlight, etc.). Typography uses Google Fonts including Inter, Source Sans Pro, and Geist Mono.

State management is handled through **TanStack Query (React Query)** for server state management, providing caching, synchronization, and background updates. The application uses **wouter** for client-side routing, offering a lightweight alternative to React Router.

### Backend Architecture
The server is built with **Express.js** using TypeScript in ESM modules format. The architecture follows a RESTful API pattern with clear separation of concerns:

- **Routes layer** (`server/routes.ts`) handles HTTP request routing and validation
- **Storage layer** (`server/storage.ts`) provides data access abstractions
- **Schema layer** (`shared/schema.ts`) defines data models and validation

The server implements comprehensive error handling, request logging, and CORS support. In development, it integrates with Vite's middleware system for seamless full-stack development.

### Data Storage Solutions
The application uses **PostgreSQL** as the primary database, accessed through **Drizzle ORM** for type-safe database operations. The database schema supports:

- User management with authentication details
- Course information and scheduling
- Assessment tracking with progress monitoring  
- Real-time messaging system (direct and group)
- Announcements and notifications
- Campus location data

Drizzle provides compile-time type safety and generates TypeScript types from the database schema. Database migrations are managed through Drizzle Kit.

### Authentication and Authorization
The current architecture includes user schemas and session management infrastructure using **connect-pg-simple** for PostgreSQL session storage. User passwords are stored as hashed values, and the system supports user profiles with academic information (GPA, credits).

### External Dependencies
**Database Services:**
- Neon Database (via @neondatabase/serverless) for PostgreSQL hosting
- Drizzle ORM for database operations and migrations

**UI Component Libraries:**  
- Radix UI primitives for accessible components
- Lucide React for icons
- Embla Carousel for interactive carousels
- CMDK for command palette functionality

**Development Tools:**
- Replit-specific plugins for development environment integration
- TSX for TypeScript execution in development
- ESBuild for production bundling

**Validation and Forms:**
- Zod for runtime type validation
- React Hook Form with Hookform Resolvers for form management

The system is designed for deployment on Replit with specific configurations for the development environment, including runtime error overlays and cartographer integration for enhanced debugging.