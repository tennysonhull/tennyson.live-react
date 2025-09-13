# Analytics & Tracking Documentation

## Overview

This document outlines the comprehensive Google Analytics 4 (GA4) tracking implementation for tennyson.live, providing detailed insights into user behavior, engagement, and conversion tracking.

## Tracking Implementation

### Core GA4 Configuration

- **Tracking ID**: `G-PS2N7J0EZY`
- **Enhanced Configuration**: Custom parameters for theme, interaction type, and section tracking
- **SPA Support**: Full single-page application route tracking with proper page view events

### Tracked Events

#### 1. Page Views & Navigation
- **Initial Page Load**: Tracks first page view with section identification
- **Route Changes**: Tracks SPA navigation between pages with timing data
- **Page Exit**: Records time spent on each page before navigation
- **Browser Navigation**: Tracks back/forward button usage

#### 2. User Interactions
- **Button Clicks**: Categorized by type (support, theme, general)
- **Link Clicks**: Separates internal vs external link tracking
- **Form Interactions**: Tracks form submissions and engagement
- **Theme Changes**: Records theme switching behavior

#### 3. Engagement Metrics
- **Scroll Depth**: Tracks 25%, 50%, 75%, and 90% scroll milestones
- **Page Visibility**: Monitors when users switch tabs or minimize browser
- **Time on Page**: Calculates duration spent on each section

#### 4. Conversion Tracking
- **Support Button Clicks**: Tracks "Accelerate My Journey" and "Walk With Me" buttons
- **Contact Form Submissions**: Monitors form completion rates
- **External Link Clicks**: Tracks outbound traffic to external resources

## Event Categories

### Navigation Events
- `page_view`: Standard page view tracking
- `page_exit`: User leaving a page
- `internal_navigation`: Moving between site pages
- `outbound_link`: Clicking external links

### Interaction Events
- `button_click`: General button interactions
- `theme_change`: Theme switching
- `contact_interaction`: Contact form engagement
- `support_click`: Support/conversion actions

### Engagement Events
- `scroll`: Scroll depth milestones
- `form_submit`: Form completion
- `page_hide`/`page_show`: Tab visibility changes

## Custom Parameters

### Section Tracking
- `home`: Main landing page
- `uplift`: Community engagement page
- `accelerate`: Support/conversion page
- `unknown`: Fallback for unrecognized routes

### Theme Tracking
- `light`: Light theme
- `dark`: Dark theme
- `fun`: Fun theme (formerly Dreamy)
- `majestic`: Majestic theme (formerly Regal)
- `dreamy`: New Dreamy theme

### Interaction Types
- `support`: Support-related buttons
- `theme`: Theme toggle interactions
- `general`: Standard button clicks

## Data Attributes

Components use `data-track` attributes for enhanced tracking:

```html
<!-- Theme toggle -->
<button data-track="theme-toggle">Switch Theme</button>

<!-- Support buttons -->
<a data-track="support-button">Accelerate My Journey</a>

<!-- Contact form -->
<form data-track="contact-form">...</form>
```

## Analytics Dashboard Setup

### Recommended GA4 Reports

1. **Real-time Reports**
   - Monitor current user activity
   - Track theme usage in real-time
   - View page navigation flow

2. **Engagement Reports**
   - Pages and screens: Track individual route performance
   - Events: Monitor all custom events
   - Conversions: Track support button clicks

3. **Custom Reports**
   - **Theme Usage**: Filter by `theme_change` events
   - **Section Performance**: Compare home vs uplift vs accelerate
   - **User Journey**: Track navigation patterns between sections

### Key Metrics to Monitor

#### Traffic Metrics
- **Page Views**: Total and unique page views per section
- **Session Duration**: Time spent across the site
- **Bounce Rate**: Single-page sessions

#### Engagement Metrics
- **Scroll Depth**: How far users scroll on each page
- **Theme Changes**: User preference for different themes
- **Form Interactions**: Contact form engagement rates

#### Conversion Metrics
- **Support Clicks**: Clicks on "Accelerate My Journey" buttons
- **External Link Clicks**: Traffic to external resources
- **Contact Form Submissions**: Form completion rates

## Troubleshooting

### Common Issues

1. **No Route Tracking**: Ensure GA4 is properly configured and the tracking ID is correct
2. **Missing Events**: Check browser console for JavaScript errors
3. **Delayed Data**: GA4 can take 24-48 hours to show complete data

### Debug Mode

To enable GA4 debug mode, add this to the browser console:
```javascript
gtag('config', 'G-PS2N7J0EZY', {
  debug_mode: true
});
```

### Testing Tracking

Use GA4's Real-time reports to verify tracking is working:
1. Open GA4 dashboard
2. Navigate to Reports > Real-time
3. Perform actions on the site
4. Verify events appear in real-time

## Privacy Considerations

- **No Personal Data**: Only tracks anonymous user behavior
- **GDPR Compliant**: No cookies store personal information
- **Opt-out Available**: Users can disable tracking via browser settings
- **Development Mode**: Tracking disabled in development environment

## Performance Impact

- **Minimal Overhead**: GA4 script loads asynchronously
- **Optimized Events**: Debounced scroll and click tracking
- **Efficient Tracking**: Only essential data is collected

## Future Enhancements

### Planned Features
- **A/B Testing**: Track different theme preferences
- **User Segmentation**: Group users by behavior patterns
- **Conversion Funnels**: Track user journey to support actions
- **Performance Monitoring**: Track page load times and errors

### Advanced Analytics
- **Custom Dimensions**: Track user preferences and behavior
- **Enhanced Ecommerce**: If support features expand
- **Cross-domain Tracking**: If additional domains are added

## Support

For questions about analytics implementation or data interpretation, refer to:
- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [SPA Tracking Guide](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications)
