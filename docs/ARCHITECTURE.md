# Architecture Documentation

## 🏗️ System Overview

Tennyson Live is a modern, single-page application built with React, TypeScript, and Tailwind CSS. The architecture follows a component-based design with a focus on performance, maintainability, and user experience.

## 📁 Project Structure

```
tennyson.live-react/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ProfileSection.tsx
│   │   ├── Storyboard.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── GoogleAnalytics.tsx
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles and Tailwind imports
├── docs/                 # Documentation
├── Dockerfile           # Production container
├── Dockerfile.dev       # Development container
├── docker-compose.yml   # Container orchestration
├── nginx.conf          # Web server configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## 🧩 Component Architecture

### Core Components

#### App.tsx
- **Purpose**: Main application container
- **Responsibilities**: 
  - Provider setup (Helmet, Theme)
  - Background decorative elements
  - Component composition
- **Dependencies**: All major components and contexts

#### ProfileSection.tsx
- **Purpose**: Hero section with profile information
- **Features**:
  - Animated profile picture
  - Social media links
  - Responsive typography
- **Animations**: React Spring for smooth transitions

#### Storyboard.tsx
- **Purpose**: Interactive content management system
- **Features**:
  - Dynamic block creation (text, image, links)
  - Drag-and-drop functionality (future)
  - Content persistence (future)
- **State Management**: Local React state with useState

#### ThemeToggle.tsx
- **Purpose**: Theme switching interface
- **Features**:
  - Four theme options (Light, Dark, Dreamy, Regal)
  - Smooth theme transitions
  - Persistent theme selection
- **Integration**: ThemeContext for state management

#### GoogleAnalytics.tsx
- **Purpose**: Analytics tracking integration
- **Features**:
  - Automatic page view tracking
  - Custom event tracking (future)
  - Environment-based configuration
- **Privacy**: Respects user preferences

### Context System

#### ThemeContext.tsx
- **Purpose**: Global theme state management
- **Features**:
  - Theme persistence in localStorage
  - System preference detection
  - Dynamic theme switching
- **API**: useTheme hook for component access

## 🎨 Styling Architecture

### Tailwind CSS Configuration

#### Color System
```javascript
colors: {
  primary: { /* Blue tones - 50 to 900 */ },
  secondary: { /* Green tones - 50 to 900 */ },
  accent: { /* Peachy tones - 50 to 900 */ },
  neutral: { /* Grayscale - 50 to 900 */ }
}
```

#### Typography
- **Elegant**: Inter (primary font)
- **Futuristic**: JetBrains Mono (monospace)
- **Display**: Playfair Display (headings)

#### Animations
- **Float**: Subtle floating animation
- **Glow**: Pulsing glow effect
- **Fade-in**: Smooth opacity transition
- **Slide-up**: Vertical slide animation

### CSS Architecture

#### Layer Structure
1. **Base Layer**: Global styles and resets
2. **Components Layer**: Reusable component styles
3. **Utilities Layer**: Tailwind utility classes

#### Custom Classes
- `.glass-effect`: Backdrop blur with transparency
- `.gradient-text`: Multi-color text gradient
- `.floating-animation`: Continuous float animation
- `.glow-effect`: Pulsing glow animation

## 🔧 Build System

### Vite Configuration
- **Development**: Hot module replacement
- **Production**: Optimized bundle with code splitting
- **TypeScript**: Full type checking
- **CSS**: PostCSS with Tailwind processing

### Build Process
1. **TypeScript Compilation**: Type checking and compilation
2. **CSS Processing**: Tailwind CSS compilation
3. **Asset Optimization**: Image and font optimization
4. **Bundle Generation**: Optimized JavaScript bundles

## 🐳 Deployment Architecture

### Docker Configuration

#### Production Container
- **Base**: nginx:alpine
- **Build Stage**: Node.js for building assets
- **Runtime**: Nginx for serving static files
- **Port**: 3000

#### Development Container
- **Base**: node:18-alpine
- **Features**: Hot reload, volume mounting
- **Port**: 5173 (Vite dev server)

### Nginx Configuration
- **Static File Serving**: Optimized for SPA
- **Gzip Compression**: Reduced bandwidth usage
- **Security Headers**: XSS protection, content type validation
- **Client-side Routing**: Fallback to index.html

## 📊 State Management

### Local State
- **Component State**: useState for component-specific data
- **Form State**: Controlled components with local state
- **UI State**: Theme, modal, and interaction states

### Global State
- **Theme Context**: Application-wide theme management
- **Analytics State**: Tracking configuration and events

### Future State Management
- **Content State**: Storyboard data persistence
- **User State**: Authentication and preferences
- **Cache State**: API response caching

## 🔌 Integration Points

### External Services
- **Google Analytics**: User behavior tracking
- **Google Fonts**: Typography loading
- **Social Media**: Link integration (GitHub, LinkedIn, Email)

### Future Integrations
- **CMS**: Headless content management
- **CDN**: Asset delivery optimization
- **Email Service**: Contact form processing
- **Database**: Content persistence

## 🚀 Performance Considerations

### Optimization Strategies
- **Code Splitting**: Lazy loading of components
- **Image Optimization**: WebP format with fallbacks
- **Font Loading**: Optimized Google Fonts loading
- **Bundle Analysis**: Regular bundle size monitoring

### Caching Strategy
- **Static Assets**: Long-term caching with versioning
- **API Responses**: Cache headers for dynamic content
- **Service Worker**: Offline functionality (future)

## 🔒 Security Considerations

### Client-side Security
- **XSS Protection**: Content sanitization
- **CSRF Protection**: Token-based validation
- **Content Security Policy**: Resource loading restrictions

### Server-side Security
- **Security Headers**: Comprehensive header configuration
- **HTTPS**: SSL/TLS encryption
- **Input Validation**: Server-side validation (future)

## 📈 Monitoring & Analytics

### Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Bundle Analysis**: Size and performance metrics
- **Error Tracking**: Client-side error monitoring

### User Analytics
- **Google Analytics**: Page views and user behavior
- **Custom Events**: Interaction tracking
- **Conversion Tracking**: Contact form submissions

## 🔄 Development Workflow

### Local Development
1. **Setup**: `npm install`
2. **Development**: `npm run dev`
3. **Testing**: `npm run type-check`
4. **Building**: `npm run build`

### Docker Development
1. **Build**: `docker-compose --profile dev up --build`
2. **Access**: `http://localhost:5173`

### Production Deployment
1. **Build**: `docker build -t tennyson-live .`
2. **Deploy**: `docker run -p 3000:3000 tennyson-live`

## 🧪 Testing Strategy

### Current Testing
- **Type Checking**: TypeScript compilation
- **Linting**: ESLint code quality
- **Build Testing**: Production build verification

### Future Testing
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Playwright for user flows
- **Visual Regression**: Screenshot testing

## 📚 Documentation Standards

### Code Documentation
- **JSDoc**: Function and component documentation
- **TypeScript**: Type definitions and interfaces
- **README**: Setup and usage instructions

### Architecture Documentation
- **Component Docs**: Purpose and API documentation
- **Style Guide**: Design system documentation
- **Deployment Guide**: Infrastructure documentation

---

*This architecture documentation is maintained alongside the codebase and updated with each major change.*
