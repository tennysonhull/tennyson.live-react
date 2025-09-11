# Environment Variables Guide

## Overview
Environment variables allow you to configure your application without hardcoding sensitive values like API keys and form IDs. This guide explains how to set them up for both development and production (cPanel hosting).

## How Vite Environment Variables Work

### Development (Local)
- **File**: `.env` (create this file in your project root)
- **Format**: `VITE_VARIABLE_NAME=value`
- **Access**: `import.meta.env.VITE_VARIABLE_NAME`
- **Security**: Only variables prefixed with `VITE_` are exposed to the client

### Production (cPanel Hosting)
- **Method**: Build-time environment variables
- **Process**: Variables are baked into the build during `npm run build`
- **Security**: Same as development - only `VITE_` prefixed variables are exposed

## Setting Up Environment Variables

### 1. Development Setup

Create a `.env` file in your project root:

```bash
# Copy the example file
cp env.example .env
```

Edit `.env` with your actual values:

```bash
# Google Analytics
VITE_GA_TRACKING_ID=G-ABC123DEF456

# Formspree Contact Form
VITE_FORMSPREE_FORM_ID=xqkzqkzq

# Site Configuration
VITE_SITE_TITLE=Tennyson Live
VITE_SITE_DESCRIPTION=Creative Developer & Digital Architect
VITE_SITE_URL=https://tennyson.live
```

### 2. Production Setup (cPanel Hosting)

#### Option A: Build Locally with Environment Variables

1. **Set environment variables in your terminal:**
   ```bash
   export VITE_GA_TRACKING_ID=G-ABC123DEF456
   export VITE_FORMSPREE_FORM_ID=xqkzqkzq
   export VITE_SITE_TITLE="Tennyson Live"
   export VITE_SITE_DESCRIPTION="Creative Developer & Digital Architect"
   export VITE_SITE_URL=https://tennyson.live
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Upload the `dist` folder** to your cPanel hosting

#### Option B: Use a Build Script

Create a build script that sets environment variables:

```bash
#!/bin/bash
# build.sh

export VITE_GA_TRACKING_ID=G-ABC123DEF456
export VITE_FORMSPREE_FORM_ID=xqkzqkzq
export VITE_SITE_TITLE="Tennyson Live"
export VITE_SITE_DESCRIPTION="Creative Developer & Digital Architect"
export VITE_SITE_URL=https://tennyson.live

npm run build
```

Make it executable and run:
```bash
chmod +x build.sh
./build.sh
```

#### Option C: Use a .env.production File

1. **Create `.env.production`:**
   ```bash
   VITE_GA_TRACKING_ID=G-ABC123DEF456
   VITE_FORMSPREE_FORM_ID=xqkzqkzq
   VITE_SITE_TITLE=Tennyson Live
   VITE_SITE_DESCRIPTION=Creative Developer & Digital Architect
   VITE_SITE_URL=https://tennyson.live
   ```

2. **Build with production environment:**
   ```bash
   npm run build
   ```

3. **Upload the `dist` folder** to cPanel

## cPanel Hosting Considerations

### Important Notes for cPanel:

1. **Static Files Only**: cPanel typically hosts static files, so environment variables are baked into the build
2. **No Runtime Environment Variables**: Unlike server-side applications, you can't change environment variables after deployment
3. **Build-Time Configuration**: All configuration must be set during the build process
4. **Security**: Only `VITE_` prefixed variables are exposed to the client (browser)

### Recommended Workflow:

1. **Develop locally** with `.env` file
2. **Build with production variables** using one of the methods above
3. **Upload the `dist` folder** to cPanel
4. **Test the deployed site** to ensure all variables work correctly

## Environment Variable Reference

### Current Variables Used:

| Variable | Purpose | Example Value |
|----------|---------|---------------|
| `VITE_GA_TRACKING_ID` | Google Analytics tracking | `G-ABC123DEF456` |
| `VITE_FORMSPREE_FORM_ID` | Formspree form ID | `xqkzqkzq` |
| `VITE_SITE_TITLE` | Site title for meta tags | `Tennyson Live` |
| `VITE_SITE_DESCRIPTION` | Site description for meta tags | `Creative Developer & Digital Architect` |
| `VITE_SITE_URL` | Site URL for meta tags | `https://tennyson.live` |

### Adding New Variables:

1. **Add to `env.example`:**
   ```bash
   VITE_NEW_VARIABLE=example_value
   ```

2. **Use in your code:**
   ```typescript
   const newValue = import.meta.env.VITE_NEW_VARIABLE;
   ```

3. **Add to your build process** (see methods above)

## Security Best Practices

### Do's:
- ✅ Use `VITE_` prefix for client-side variables
- ✅ Keep sensitive data server-side only
- ✅ Use environment variables for configuration
- ✅ Never commit `.env` files to version control
- ✅ Use different values for development and production

### Don'ts:
- ❌ Don't put sensitive API keys in `VITE_` variables
- ❌ Don't commit `.env` files to git
- ❌ Don't hardcode configuration values
- ❌ Don't use environment variables for sensitive server-side data

## Troubleshooting

### Common Issues:

1. **Variable not defined:**
   ```
   Error: Formspree form ID not configured
   ```
   **Solution**: Ensure the environment variable is set during build

2. **Variable is undefined:**
   ```typescript
   console.log(import.meta.env.VITE_MY_VAR); // undefined
   ```
   **Solution**: Check that the variable name starts with `VITE_`

3. **Build fails:**
   ```
   Error: Cannot resolve environment variable
   ```
   **Solution**: Ensure all required variables are set before building

### Debugging:

Add this to your component to debug environment variables:

```typescript
// Debug environment variables (remove in production)
console.log('Environment variables:', {
  GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID,
  FORMSPREE_FORM_ID: import.meta.env.VITE_FORMSPREE_FORM_ID,
  SITE_TITLE: import.meta.env.VITE_SITE_TITLE,
});
```

## Alternative: Runtime Configuration

If you need to change configuration after deployment, consider:

1. **Configuration API**: Create a simple endpoint that returns configuration
2. **JSON Configuration File**: Host a `config.json` file and fetch it at runtime
3. **URL Parameters**: Use URL parameters for configuration (less secure)

Example of runtime configuration:

```typescript
// Fetch configuration at runtime
const config = await fetch('/config.json').then(r => r.json());
const formId = config.formspreeFormId;
```

## Summary

For cPanel hosting with Vite:
1. **Set environment variables during build time**
2. **Use `VITE_` prefix for client-side variables**
3. **Build locally with production variables**
4. **Upload the `dist` folder to cPanel**
5. **Test the deployed site**

This approach gives you the flexibility of environment variables while working within the constraints of static hosting on cPanel.
