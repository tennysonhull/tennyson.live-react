#!/bin/bash

# Tennyson Live - cPanel Deployment Script
# This script builds the site and prepares it for cPanel deployment

set -e  # Exit on any error

echo "🚀 Tennyson Live - cPanel Deployment Script"
echo "============================================="

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: No .env file found!"
    echo "   Please create a .env file with your environment variables:"
    echo "   - VITE_GA_TRACKING_ID"
    echo "   - VITE_FORMSPREE_FORM_ID"
    echo "   - VITE_SITE_TITLE"
    echo "   - VITE_SITE_DESCRIPTION"
    echo "   - VITE_SITE_URL"
    echo ""
    echo "   You can copy from env.example:"
    echo "   cp env.example .env"
    echo ""
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
npm run clean

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Type check
echo "🔍 Running type check..."
npm run type-check

# Build for production
echo "🏗️  Building for production..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Create deployment package
echo "📁 Creating deployment package..."
cd dist
zip -r ../tennyson-live-deployment.zip . -x "*.DS_Store" "*.git*"
cd ..

# Show deployment info
echo ""
echo "✅ Build completed successfully!"
echo ""
echo "📋 Deployment Package: tennyson-live-deployment.zip"
echo "📁 Contents:"
ls -la dist/
echo ""
echo "📤 Next Steps:"
echo "1. Upload tennyson-live-deployment.zip to your cPanel File Manager"
echo "2. Extract it in your public_html directory"
echo "3. Set file permissions (644 for files, 755 for directories)"
echo "4. Test your site at your domain"
echo ""
echo "📖 For detailed instructions, see: docs/CPANEL_DEPLOYMENT.md"
echo ""
echo "🎉 Ready for deployment!"
