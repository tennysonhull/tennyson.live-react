# Tennyson Live - Personal Profile Site

An elegant, regal, and flowy personal profile website built with React, TypeScript, and Tailwind CSS v3.4. Features a comprehensive semantic theme system with 5 beautiful themes, smooth animations, and a modern glass-morphism design.

## ✨ Features

- **Comprehensive Theme System**: 5 beautiful themes (Light, Dark, Fun, Majestic, Dreamy) with semantic color variables
- **Glass-morphism Design**: Modern frosted glass effects with backdrop blur and transparency
- **Semantic Color System**: Universal utility classes that work across all themes
- **Multi-page Navigation**: Home, Uplift, and Accelerate pages with smooth transitions
- **Static Storyboard**: Featured projects, community empowerment, and support sections
- **Contact Form**: Formspree integration with spam protection
- **Smooth Animations**: React Spring animations throughout the site
- **Responsive Design**: Beautiful on all devices
- **Google Analytics**: Built-in analytics integration with SPA tracking
- **Docker Support**: Easy deployment with Docker and Docker Compose
- **TypeScript**: Full type safety and better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized deployment)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tennysonhull/tennyson.live-react.git
   cd tennyson.live-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` and add your Google Analytics tracking ID:
   ```
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Docker Development

```bash
# Build and run with Docker Compose
docker-compose --profile dev up --build

# Or build and run manually
docker build -f Dockerfile.dev -t tennyson-live-dev .
docker run -p 5173:5173 tennyson-live-dev
```

## 🏗️ Build & Deploy

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Production

```bash
# Build production image
docker build -t tennyson-live .

# Run production container
docker run -p 3000:3000 tennyson-live

# Or use Docker Compose
docker-compose up --build
```

## 📊 Google Analytics Setup

1. **Create a Google Analytics account** at [analytics.google.com](https://analytics.google.com)

2. **Create a new property** for your website

3. **Get your Measurement ID** (starts with `G-`)

4. **Add to environment variables**
   ```bash
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

5. **Deploy your site** - Analytics will automatically start tracking

## 🎨 Customization

### Themes

The site includes five built-in themes with semantic color systems:
- **Light**: Clean and minimal with blue/green accents
- **Dark**: Elegant dark mode with bright accents
- **Fun**: Vibrant orange/blue/purple with floating elements
- **Majestic**: Rich gold and dark palette with oriental aesthetic
- **Dreamy**: Dark blue-violet with frosted glass effects and psychedelic background

### Storyboard

The storyboard system allows you to add:
- **Text Blocks**: Rich text content with titles
- **Image Blocks**: Display images with captions
- **Link Blocks**: Collections of external links

### Semantic Color System

The site uses a comprehensive semantic color system with CSS variables:

```css
/* Content colors */
.text-content-primary    /* Main text color */
.text-content-secondary  /* Secondary text color */
.text-content-muted      /* Muted text color */
.text-content-subtle     /* Subtle text color */

/* Surface colors */
.bg-surface-primary      /* Primary background */
.bg-surface-secondary    /* Secondary background */
.bg-surface-accent       /* Accent background */

/* Interactive colors */
.text-interactive-primary    /* Primary interactive color */
.hover:text-interactive-primary /* Hover states */
.group-hover:text-interactive-primary /* Group hover states */

/* Special gradients */
.text-panel-header-gradient  /* Panel header gradients */
.bg-icon-gradient           /* Icon background gradients */
.bg-support-button-gradient /* Support button gradients */
```

All colors automatically adapt to the current theme using CSS variables.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build with production optimizations
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build directory
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ProfileSection.tsx    # Profile picture and social links
│   ├── MyStory.tsx          # Personal story section
│   ├── Storyboard.tsx       # Featured projects and community
│   ├── ContactForm.tsx      # Formspree contact form
│   ├── ThemeToggle.tsx      # Theme switcher
│   ├── BackButton.tsx       # Navigation back button
│   ├── UpliftPage.tsx       # Community engagement page
│   ├── AcceleratePage.tsx   # Support and commitment page
│   └── GoogleAnalytics.tsx  # Analytics integration
├── contexts/           # React contexts
│   ├── ThemeContext.tsx     # Theme management
│   └── PageTransitionContext.tsx # Page transition animations
├── App.tsx            # Main app component with routing
├── main.tsx           # App entry point
└── index.css          # Global styles and theme variables
```

## 📚 Documentation

### Core Documentation
- **[Architecture Guide](docs/ARCHITECTURE.md)** - System architecture and design decisions
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Multiple deployment strategies and platforms
- **[Analytics & Tracking Guide](docs/ANALYTICS_TRACKING.md)** - Comprehensive Google Analytics implementation and tracking details
- **[Contributing](docs/CONTRIBUTING.md)** - Simple guide for forking and contributing
- **[Roadmap](docs/ROADMAP.md)** - Future development plans and milestones
- **[Changelog](docs/CHANGELOG.md)** - Version history and release notes
- **[Tailwind v4 Migration](docs/V4_MIGRATION_COMPLETE.md)** - Complete migration documentation

### Quick Links
- **[Getting Started](#-quick-start)** - Setup and installation
- **[Customization](#-customization)** - Themes and styling
- **[Docker Setup](#-docker-development)** - Containerized development
- **[Google Analytics](#-google-analytics-setup)** - Analytics configuration

## 🎯 Roadmap

See our detailed [Roadmap](docs/ROADMAP.md) for comprehensive development plans.

### Upcoming Features
- [ ] Content management system integration
- [ ] Blog functionality
- [ ] More animation presets
- [ ] Custom 3D graphics integration
- [ ] Performance optimizations
- [ ] PWA features
- [ ] Additional theme variations
- [ ] Advanced glass-morphism effects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

Tennyson Hull - [@tennysonhull](https://github.com/tennysonhull)

Project Link: [https://github.com/tennysonhull/tennyson.live-react](https://github.com/tennysonhull/tennyson.live-react)