import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import ProfileSection from './components/ProfileSection';
import Storyboard from './components/Storyboard';
import ThemeToggle from './components/ThemeToggle';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 dark:bg-primary-800/20 regal:bg-regal-800/20 dreamy:bg-dreamy-200/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200/20 dark:bg-secondary-800/20 regal:bg-regal-700/20 dreamy:bg-dreamyBlue-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200/10 dark:bg-accent-800/10 regal:bg-regal-600/10 dreamy:bg-dreamyPurple-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Main content */}
          <div className="relative z-10">
            <ThemeToggle />
            <ProfileSection />
            <Storyboard />
          </div>

          {/* Google Analytics */}
          <GoogleAnalytics trackingId={import.meta.env.VITE_GA_TRACKING_ID} />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
