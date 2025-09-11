# Tennyson Live - Personal Profile Site

An elegant, regal, and flowy personal profile website built with React, TypeScript, and Tailwind CSS v4. Features a dreamy blue/green and peachy color scheme with smooth animations and a modern theme system.

## ✨ Features

- **Elegant Design**: Dreamy blue/green and peachy color scheme with regal typography
- **Theme System**: Light, dark, dreamy, and regal themes with smooth transitions
- **Static Storyboard**: Featured projects, community empowerment, and support sections
- **Smooth Animations**: React Spring animations throughout the site
- **Responsive Design**: Beautiful on all devices
- **Google Analytics**: Built-in analytics integration
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

The site includes four built-in themes:
- **Light**: Clean and minimal
- **Dark**: Elegant dark mode
- **Dreamy**: Soft, ethereal colors
- **Regal**: Rich, sophisticated palette

### Storyboard

The storyboard system allows you to add:
- **Text Blocks**: Rich text content with titles
- **Image Blocks**: Display images with captions
- **Link Blocks**: Collections of external links

### Colors

Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Blue tones */ },
  secondary: { /* Green tones */ },
  accent: { /* Peachy tones */ },
  neutral: { /* Grayscale */ }
}
```

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
│   ├── ProfileSection.tsx
│   ├── Storyboard.tsx
│   ├── ThemeToggle.tsx
│   └── GoogleAnalytics.tsx
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 📚 Documentation

### Core Documentation
- **[Architecture Guide](docs/ARCHITECTURE.md)** - System architecture and design decisions
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Multiple deployment strategies and platforms
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
- [ ] Contact form
- [ ] More animation presets
- [ ] Custom 3D graphics integration
- [ ] Performance optimizations
- [ ] PWA features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

Tennyson Hull - [@tennysonhull](https://github.com/tennysonhull)

Project Link: [https://github.com/tennysonhull/tennyson.live-react](https://github.com/tennysonhull/tennyson.live-react)