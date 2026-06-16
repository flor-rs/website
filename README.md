# Flor Documentation Website

This is the official documentation website for **Flor** - a high-performance, signal-driven native GUI framework for Rust.

English | [中文](./README_CN.md)

## About Flor

Flor is a modern, ergonomic, widget-based GUI framework built with a small footprint for general-purpose native desktop applications. It features:

- **Signal-driven architecture** - Reactive state management with fine-grained updates
- **High performance** - Optimized rendering pipeline and efficient memory usage
- **Native look and feel** - Platform-specific styling and behavior
- **Widget-based design** - Modular, reusable UI components
- **Modern Rust** - Leveraging latest Rust features for ergonomic API design

## Tech Stack

- **Rspress** - Static site generator for documentation
- **React** - UI components and interactive elements
- **TypeScript** - Type-safe configuration and scripts
- **MDX** - Markdown with JSX support for rich content

## Project Structure

```
website/
├── docs/                  # Documentation source files
│   ├── en/                # English documentation
│   │   ├── api/           # API reference
│   │   ├── guide/         # User guide
│   │   │   ├── control/   # Widget development
│   │   │   ├── features/  # Framework features
│   │   │   └── use/       # Framework usage
│   │   └── index.md       # Homepage
│   ├── zh/                # Chinese documentation (中文文档)
│   │   ├── api/           # API 参考
│   │   ├── guide/         # 使用指南
│   │   │   ├── control/   # 控件开发
│   │   │   ├── features/  # 框架能力
│   │   │   └── use/       # 框架使用
│   │   └ index.md         # 首页
│   └── public/            # Static assets
├── theme/                 # Custom theme components
│   ├── index.css          # Custom styles
│   └── index.tsx          # Theme configuration
├── rspress.config.ts      # Rspress configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Development

### Prerequisites

- Node.js 18+ or Bun
- npm or Bun package manager

### Setup

Install dependencies:

```bash
npm install
```

Or with Bun:

```bash
bun install
```

### Local Development

Start the development server:

```bash
npm run dev
```

This will start a local server at `http://localhost:3000` with hot reload enabled.

### Build

Build the website for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Documentation Structure

### English Documentation (`docs/en/`)

- **API Reference** (`api/`) - Detailed API documentation
  - Class Syntax
  - Handler
  - Layout Class
  - Signal

- **User Guide** (`guide/`)
  - **Framework Usage** (`use/`)
    - Initialization, Signals, Windows, Events
    - Control States, Builders, Resolver Layer, DSL
  - **Framework Features** (`features/`)
    - Clipboard, Drag-Drop, System Tray
    - Theme, Monitor, Hi-DPI, Cross-thread
  - **Widget Development** (`control/`)
    - ViewId, View Trait, Resolver System
    - Creating Widgets from Scratch

### Chinese Documentation (`docs/zh/`)

Same structure as English, with Chinese translations.

## Contributing

### Adding New Documentation

1. Create a new `.mdx` file in the appropriate directory
2. Add the file to `_meta.json` in the same directory for navigation
3. Update `_nav.json` if it's a top-level navigation item
4. Write content in both English and Chinese

### Translation Guidelines

- Maintain consistent terminology across translations
- Keep code examples identical in both languages
- Preserve document structure and formatting
- Update both language versions simultaneously

### Writing Guidelines

- Use clear, concise language
- Include practical code examples
- Provide context and explanations
- Link to related documentation when appropriate

## Deployment

The website is deployed to GitHub Pages at: https://flor-rs.github.io/website/

## License

This documentation is part of the Flor project. See the main repository for license information.

## Resources

- [Flor GitHub Repository](https://github.com/flor-rs/flor)
- [Rspress Documentation](https://rspress.dev)
- [Rust Documentation](https://doc.rust-lang.org)