# Vite React Nitro Starter

A modern full-stack web application starter template that combines the power of Vite, React, and Nitro to provide a solid foundation for developing high-performance web applications.

## Features

- **Frontend**
  - [React 19](https://react.dev/) - A JavaScript library for building user interfaces
  - [tailwind](https://tailwindcss.com/) - A utility-first CSS framework
  - [@heroui/react](https://github.com/heroui/heroui) - Modern React UI component library
  - [framer-motion](https://www.framer.com/motion/) - React animation library
  - [typescript](https://www.typescriptlang.org/) - JavaScript with syntax for types

- **Backend**
  - [nitro](https://nitro.unjs.io/) - Universal JavaScript server framework

- **Development Tools**
  - [vite](https://vitejs.dev/) - Next generation frontend build tool
  - [eslint](https://eslint.org/) - Pluggable JavaScript linter
  - [swc](https://swc.rs/) - Rust-based JavaScript/TypeScript compiler for fast refresh

- **Routing**
  - File-based API routing (using [nitro-routing](https://nitro.build/guide/routing))
  - File-based page routing (using [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages))
  - Support for dynamic routes (like `/hi/[name]`)

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v10 or higher)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd starter-vite-nitro

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Visit http://localhost:5173 to view your application.

### Build

```bash
# Build for production
pnpm build

# Preview the production build
pnpm preview
```

## Project Structure

```
starter-vite-nitro/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets
│   ├── pages/           # File-based page routes
│   │   ├── index.tsx    # Home page
│   │   ├── [...all].tsx # Catch-all route
│   │   └── hi/
│   │       └── [name].tsx # Dynamic route example
│   ├── routes/          # Nitro API routes
│   │   └── hello.ts     # API route example
│   ├── app.css          # Global styles
│   └── app.tsx          # Application entry component
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── nitro.config.ts      # Nitro configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Usage Guide

### Page Routing

Page routing is file-based and located in the `src/pages` directory:

- `index.tsx` - Home page (`/`)
- `hi/[name].tsx` - Dynamic route (`/hi/:name`)
- `[...all].tsx` - Catch-all route (404 page)

### API Routes

API routes are located in the `src/routes` directory and defined using Nitro's `defineEventHandler` function:

```typescript
// src/routes/example.ts
export default defineEventHandler((event) => {
  return { message: "Hello from API" };
});
```

### Styling

The project uses Tailwind CSS for styling. Global styles are defined in `src/app.css`.

## Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint to check code
- `pnpm prepare` - Run Nitro prepare step
- `pnpm preview` - Preview the production build

## License

[MIT](./LICENSE) License © [Hairyf](https://github.com/haityf)
