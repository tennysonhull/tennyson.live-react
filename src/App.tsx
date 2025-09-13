import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { PageTransitionProvider, usePageTransition } from './contexts/PageTransitionContext';
import ProfileSection from './components/ProfileSection';
import Storyboard from './components/Storyboard';
import MyStory from './components/MyStory';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import GoogleAnalytics from './components/GoogleAnalytics';
import UpliftPage from './components/UpliftPage';
import AcceleratePage from './components/AcceleratePage';

// Floating dots component - only shows on Fun theme
const FloatingDots: React.FC = () => {
  const { theme } = useTheme();
  
  if (theme !== 'fun') {
    return null;
  }

  return (
    <>
      <div className="absolute top-20 left-20 w-64 h-64 bg-fun-500/80 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-32 w-48 h-48 bg-funSecondary-500/75 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-funAccent-500/70 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-fun-600/75 rounded-full blur-2xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-funSecondary-600/80 rounded-full blur-xl animate-float" style={{ animationDelay: '4.5s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-52 h-52 bg-funAccent-600/65 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-44 h-44 bg-fun-700/70 rounded-full blur-xl animate-float" style={{ animationDelay: '3.5s' }}></div>
    </>
  );
};

// Animated page wrapper component
const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { direction } = usePageTransition();
  const location = useLocation();
  
  const pageAnimation = useSpring({
    from: { 
      opacity: 0,
      transform: direction === 'left' ? 'translateX(20px)' : 'translateX(-20px)'
    },
    to: { 
      opacity: 1,
      transform: 'translateX(0px)'
    },
    config: { 
      tension: 300, 
      friction: 30
    },
    key: location.pathname, // Re-trigger animation on route change
  });

  return (
    <animated.div 
      style={pageAnimation} 
      className="w-full min-h-screen"
    >
      {children}
    </animated.div>
  );
};

// Home page component
const HomePage: React.FC = () => (
  <>
    <Helmet>
      <title>Tennyson Hull - Creative Developer & Digital Architect</title>
      <meta name="description" content="Tennyson Hull - Creative Developer & Digital Architect. Crafting elegant digital experiences with a passion for innovation and community empowerment." />
      <meta name="keywords" content="Tennyson Hull, developer, designer, react, typescript, web development, digital architect, creative developer, community empowerment" />
      <link rel="canonical" href="https://tennyson.live/" />
      
      <meta property="og:title" content="Tennyson Hull - Creative Developer & Digital Architect" />
      <meta property="og:description" content="Crafting elegant digital experiences with a passion for innovation and community empowerment." />
      <meta property="og:url" content="https://tennyson.live/" />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:title" content="Tennyson Hull - Creative Developer & Digital Architect" />
      <meta name="twitter:description" content="Crafting elegant digital experiences with a passion for innovation and community empowerment." />
      <meta name="twitter:card" content="summary_large_image" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Tennyson Hull",
          "jobTitle": "Creative Developer & Digital Architect",
          "description": "Crafting elegant digital experiences with a passion for innovation and community empowerment.",
          "url": "https://tennyson.live",
          "sameAs": [
            "https://github.com/tennysonhull",
            "https://linkedin.com/in/tennysonhull"
          ],
          "knowsAbout": [
            "Web Development",
            "React",
            "TypeScript",
            "Digital Design",
            "Community Building"
          ]
        })}
      </script>
    </Helmet>
    <div className="min-h-screen relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Fun theme floating dots - only visible on Fun theme */}
      <FloatingDots />
    </div>

    {/* Main content */}
    <div className="relative z-10">
      <ThemeToggle />
      <ProfileSection />
      <MyStory />
      <Storyboard />
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </div>

    {/* Google Analytics */}
    <GoogleAnalytics trackingId={import.meta.env.VITE_GA_TRACKING_ID} />
    </div>
  </>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <PageTransitionProvider>
          <Router>
            <Routes>
              {/* Home Page */}
              <Route path="/" element={
                <AnimatedPage>
                  <HomePage />
                </AnimatedPage>
              } />
              
              {/* Uplift Page */}
              <Route path="/uplift" element={
                <AnimatedPage>
                  <UpliftPage />
                </AnimatedPage>
              } />
              
              {/* Accelerate Page */}
              <Route path="/accelerate" element={
                <AnimatedPage>
                  <AcceleratePage />
                </AnimatedPage>
              } />
            </Routes>
          </Router>
        </PageTransitionProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
