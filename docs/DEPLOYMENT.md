# Deployment Guide

## 🚀 Deployment Options

This guide covers multiple deployment strategies for the Tennyson Live profile site, from simple static hosting to containerized deployments.

## 📋 Prerequisites

- Node.js 18+ (for local builds)
- Docker (for containerized deployment)
- Git (for version control)
- Domain name and DNS configuration (for production)

## 🏗️ Build Process

### Local Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Output
The build process creates a `dist/` directory containing:
- `index.html` - Main HTML file
- `assets/` - Optimized CSS and JavaScript bundles
- Static assets (images, fonts, etc.)

## 🌐 Static Hosting

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy from project directory
   vercel
   ```

2. **Environment Variables**
   - Set `VITE_GA_TRACKING_ID` in Vercel dashboard
   - Configure custom domain if needed

3. **Automatic Deployments**
   - Push to main branch triggers deployment
   - Preview deployments for pull requests

### Netlify

1. **Connect Repository**
   - Link GitHub repository in Netlify dashboard
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   ```bash
   # In Netlify dashboard
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

3. **Custom Domain**
   - Add custom domain in Netlify dashboard
   - Configure DNS records

### GitHub Pages

1. **Setup GitHub Actions**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Repository Settings**
   - Enable GitHub Pages in repository settings
   - Set source to GitHub Actions

## 🐳 Docker Deployment

### Production Container

```bash
# Build production image
docker build -t tennyson-live .

# Run container
docker run -p 3000:3000 tennyson-live

# Or use Docker Compose
docker-compose up --build
```

### Docker Compose Configuration

```yaml
# docker-compose.yml
version: '3.8'

services:
  tennyson-live:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Development Container

```bash
# Build development image
docker build -f Dockerfile.dev -t tennyson-live-dev .

# Run development container
docker run -p 5173:5173 -v $(pwd):/app tennyson-live-dev

# Or use Docker Compose
docker-compose --profile dev up --build
```

## ☁️ Cloud Platform Deployment

### AWS

#### S3 + CloudFront

1. **Build and Upload**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name
   ```

2. **CloudFront Configuration**
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure custom domain and SSL

#### Elastic Beanstalk

1. **Prepare Deployment Package**
   ```bash
   npm run build
   zip -r deployment.zip dist/ Dockerfile nginx.conf
   ```

2. **Deploy to Elastic Beanstalk**
   - Upload deployment package
   - Configure environment variables
   - Set up load balancer

### Google Cloud Platform

#### Cloud Run

1. **Build and Deploy**
   ```bash
   # Build container
   docker build -t gcr.io/PROJECT_ID/tennyson-live .
   
   # Push to registry
   docker push gcr.io/PROJECT_ID/tennyson-live
   
   # Deploy to Cloud Run
   gcloud run deploy --image gcr.io/PROJECT_ID/tennyson-live
   ```

#### App Engine

1. **Create app.yaml**
   ```yaml
   runtime: custom
   env: flex
   
   service: default
   
   automatic_scaling:
     min_num_instances: 1
     max_num_instances: 10
   ```

2. **Deploy**
   ```bash
   gcloud app deploy
   ```

### Azure

#### Static Web Apps

1. **Azure CLI Setup**
   ```bash
   az login
   az staticwebapp create \
     --name tennyson-live \
     --resource-group myResourceGroup \
     --source https://github.com/tennysonhull/tennyson.live-react \
     --location "Central US" \
     --branch main \
     --app-location "/" \
     --output-location "dist"
   ```

2. **Environment Variables**
   - Set in Azure portal under Configuration
   - Add `VITE_GA_TRACKING_ID`

## 🔧 Environment Configuration

### Environment Variables

Create `.env` file for local development:
```bash
# Google Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Site Configuration
VITE_SITE_TITLE=Tennyson Live
VITE_SITE_DESCRIPTION=Creative Developer & Digital Architect
VITE_SITE_URL=https://tennyson.live
```

### Production Environment Variables

Set these in your deployment platform:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_GA_TRACKING_ID` | Google Analytics tracking ID | `G-XXXXXXXXXX` |
| `VITE_SITE_TITLE` | Site title for SEO | `Tennyson Live` |
| `VITE_SITE_DESCRIPTION` | Meta description | `Creative Developer & Digital Architect` |
| `VITE_SITE_URL` | Canonical URL | `https://tennyson.live` |

## 🔒 SSL/TLS Configuration

### Let's Encrypt (Free SSL)

1. **Install Certbot**
   ```bash
   sudo apt-get install certbot
   ```

2. **Generate Certificate**
   ```bash
   sudo certbot certonly --webroot -w /var/www/html -d tennyson.live
   ```

3. **Auto-renewal**
   ```bash
   sudo crontab -e
   # Add: 0 12 * * * /usr/bin/certbot renew --quiet
   ```

### Cloudflare SSL

1. **Add Domain to Cloudflare**
   - Add domain in Cloudflare dashboard
   - Update nameservers

2. **SSL Configuration**
   - Set SSL/TLS encryption mode to "Full (strict)"
   - Enable "Always Use HTTPS"

## 📊 Monitoring & Analytics

### Google Analytics Setup

1. **Create Google Analytics Account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property for your domain

2. **Get Tracking ID**
   - Copy Measurement ID (starts with `G-`)
   - Add to environment variables

3. **Verify Tracking**
   - Deploy site with tracking ID
   - Check Real-time reports in GA

### Performance Monitoring

#### Lighthouse CI

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run performance audit
lhci autorun
```

#### Web Vitals Monitoring

```javascript
// Add to your site for Core Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🔄 CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npm run type-check

# Verify Tailwind configuration
npm run build
```

#### Docker Issues
```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t tennyson-live .
```

#### Environment Variables
- Ensure all required variables are set
- Check variable names match exactly
- Verify values are properly formatted

### Performance Issues

#### Bundle Size
```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer dist/assets/*.js
```

#### Loading Speed
- Optimize images (WebP format)
- Enable gzip compression
- Use CDN for static assets
- Implement lazy loading

## 📞 Support

For deployment issues:
1. Check the [troubleshooting section](#-troubleshooting)
2. Review [architecture documentation](ARCHITECTURE.md)
3. Open an issue on GitHub
4. Contact: hello@tennyson.live

---

*This deployment guide is updated with each release to reflect current best practices.*
