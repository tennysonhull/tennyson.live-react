import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import ProfileSection from './components/ProfileSection';
import Storyboard from './components/Storyboard';
import MyStory from './components/MyStory';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            
            {/* Dreamy theme cloud effects */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-dreamy-500/80 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-40 right-32 w-48 h-48 bg-dreamySecondary-500/75 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
            <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-dreamyAccent-500/70 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-dreamy-600/75 rounded-full blur-2xl animate-float" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-dreamySecondary-600/80 rounded-full blur-xl animate-float" style={{ animationDelay: '4.5s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-52 h-52 bg-dreamyAccent-600/65 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-1/3 right-1/3 w-44 h-44 bg-dreamy-700/70 rounded-full blur-xl animate-float" style={{ animationDelay: '3.5s' }}></div>
          </div>

          {/* Main content */}
          <div className="relative z-10">
            <ThemeToggle />
            <ProfileSection />
            <MyStory />
            <Storyboard />
            <section id="contact-form" className="py-16 px-4">
              <ContactForm />
            </section>
          </div>

          {/* Google Analytics */}
          <GoogleAnalytics trackingId={import.meta.env.VITE_GA_TRACKING_ID} />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
