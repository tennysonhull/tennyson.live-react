import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface GoogleAnalyticsProps {
  trackingId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    // Disable Google Analytics in development mode
    if (import.meta.env.DEV) {
      console.log('Google Analytics disabled in development mode');
      return;
    }

    if (!trackingId) {
      console.warn('Google Analytics tracking ID not provided. Set VITE_GA_TRACKING_ID in your environment variables.');
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag available globally
    (window as any).gtag = gtag;

    // Track page views on route changes
    const handleRouteChange = () => {
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackingId]);

  // Don't render Google Analytics in development mode
  if (import.meta.env.DEV || !trackingId) {
    return null;
  }

  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
