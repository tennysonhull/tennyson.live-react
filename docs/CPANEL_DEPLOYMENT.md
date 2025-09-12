# cPanel Deployment Guide

## 🚀 Deploying to cPanel Hosting

This guide covers deploying your React site to a cPanel hosting provider.

## 📋 Prerequisites

- cPanel hosting account
- File Manager access in cPanel
- Domain configured to point to your hosting
- Node.js build environment (local or CI/CD)

## 🏗️ Build Process

### 1. Build the Site Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist/` directory with all the static files needed for deployment.

### 2. Prepare Environment Variables

Create a `.env` file with your production values:

```bash
# Google Analytics Tracking ID
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Formspree Contact Form ID
VITE_FORMSPREE_FORM_ID=your_form_id_here

# Site Configuration
VITE_SITE_TITLE=Tennyson Live
VITE_SITE_DESCRIPTION=Creative Developer & Digital Architect
VITE_SITE_URL=https://tennyson.live
```

**Important**: Environment variables are baked into the build at build time, so you need to set them before running `npm run build`.

## 📁 Upload to cPanel

### Method 1: File Manager (Recommended)

1. **Access File Manager**
   - Log into your cPanel
   - Click "File Manager"
   - Navigate to `public_html/` (or your domain's root directory)

2. **Upload Files**
   - Upload the entire contents of your `dist/` folder
   - This includes:
     - `index.html`
     - `assets/` folder (CSS and JS files)
     - `images/` folder
     - `protogen.svg` (favicon)

3. **File Structure**
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].css
   │   └── index-[hash].js
   ├── images/
   │   └── tennyson.flow.jpg
   └── protogen.svg
   ```

### Method 2: FTP/SFTP

1. **Use FTP Client**
   - Connect to your hosting via FTP
   - Upload all files from `dist/` to your domain's root directory

2. **Recommended FTP Clients**
   - FileZilla (free)
   - WinSCP (Windows)
   - Cyberduck (Mac)

## 🔧 cPanel Configuration

### 1. Set Up Redirects (if needed)

If your site is in a subdirectory, create a `.htaccess` file:

```apache
# .htaccess for React Router (if using client-side routing)
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### 2. SSL Certificate

1. **Let's Encrypt (Free)**
   - In cPanel, go to "SSL/TLS"
   - Click "Let's Encrypt"
   - Enable SSL for your domain

2. **Force HTTPS**
   - In "SSL/TLS", enable "Force HTTPS Redirect"

### 3. Error Pages (Optional)

Create custom error pages in cPanel:
- 404.html (for missing pages)
- 500.html (for server errors)

## 🔄 Deployment Workflow

### Automated Deployment Script

Create a deployment script to streamline the process:

```bash
#!/bin/bash
# deploy.sh

echo "🚀 Starting deployment to cPanel..."

# Build the site
echo "📦 Building site..."
npm run build

# Create deployment package
echo "📁 Creating deployment package..."
cd dist
tar -czf ../deployment.tar.gz *
cd ..

# Upload to server (replace with your details)
echo "⬆️ Uploading to server..."
scp deployment.tar.gz username@yourdomain.com:/home/username/public_html/

# Extract on server
echo "📂 Extracting files..."
ssh username@yourdomain.com "cd public_html && tar -xzf deployment.tar.gz && rm deployment.tar.gz"

# Clean up
rm deployment.tar.gz

echo "✅ Deployment complete!"
```

### Manual Deployment Steps

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Compress dist folder**
   ```bash
   cd dist
   zip -r ../site.zip *
   cd ..
   ```

3. **Upload via cPanel File Manager**
   - Upload `site.zip`
   - Extract in `public_html/`
   - Delete the zip file

4. **Verify deployment**
   - Visit your domain
   - Check that all assets load
   - Test contact form
   - Verify Google Analytics

## 🐛 Troubleshooting

### Common Issues

#### 1. 404 Errors on Refresh
**Problem**: Pages return 404 when refreshed
**Solution**: Add `.htaccess` file with rewrite rules (see above)

#### 2. Assets Not Loading
**Problem**: CSS/JS files return 404
**Solution**: 
- Check file paths in `dist/`
- Ensure all files uploaded correctly
- Verify file permissions (644 for files, 755 for directories)

#### 3. Environment Variables Not Working
**Problem**: Google Analytics or Formspree not working
**Solution**:
- Environment variables must be set before building
- Rebuild with correct environment variables
- Check browser console for errors

#### 4. Contact Form Not Working
**Problem**: Form submissions fail
**Solution**:
- Verify Formspree form ID is correct
- Check Formspree dashboard for submissions
- Ensure form ID is set in environment variables

### File Permissions

Set correct permissions in cPanel File Manager:
- Files: 644
- Directories: 755
- `.htaccess`: 644

### Performance Optimization

1. **Enable Gzip Compression**
   - Add to `.htaccess` (see above)

2. **Set Cache Headers**
   - Add to `.htaccess` (see above)

3. **Optimize Images**
   - Use WebP format where possible
   - Compress images before upload

## 🔍 Verification Checklist

After deployment, verify:

- [ ] Site loads at your domain
- [ ] All themes work correctly
- [ ] Contact form submits successfully
- [ ] Google Analytics tracking works
- [ ] All images and assets load
- [ ] Site is mobile responsive
- [ ] SSL certificate is active
- [ ] Performance is acceptable

## 📞 Support

If you encounter issues:

1. Check browser console for errors
2. Verify all files uploaded correctly
3. Check file permissions
4. Test with different browsers
5. Contact your hosting provider if needed

---

*This guide assumes standard cPanel hosting. Some providers may have specific requirements or limitations.*
