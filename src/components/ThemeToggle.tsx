import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Crown, Palette, Sparkles } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, toggleTheme } = useTheme();

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 100,
  });

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return Sun;
      case 'dark':
        return Moon;
      case 'fun':
        return Palette;
      case 'majestic':
        return Crown;
      case 'dreamy':
        return Sparkles;
      default:
        return Sun;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'fun':
        return 'Fun';
      case 'majestic':
        return 'Majestic';
      case 'dreamy':
        return 'Dreamy';
      default:
        return 'Light';
    }
  };

  const IconComponent = getThemeIcon();

  return (
    <animated.div style={buttonAnimation} className="fixed top-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-2">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="group flex items-center space-x-2 px-4 py-2 rounded-full glass-effect hover:scale-105 transition-all duration-300"
          aria-label={`Switch to next theme. Current: ${getThemeLabel()}`}
        >
          <IconComponent size={18} className="text-neutral-600 group-hover:text-primary-600 transition-colors" />
          <span className="font-elegant font-medium text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">
            {getThemeLabel()}
          </span>
        </button>

        {/* Theme Selector Dropdown */}
        <div className="flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {(['light', 'dark', 'fun', 'majestic', 'dreamy'] as const).map((themeOption) => {
            const isActive = theme === themeOption;
            const getIcon = () => {
              switch (themeOption) {
                case 'light': return Sun;
                case 'dark': return Moon;
                case 'fun': return Palette;
                case 'majestic': return Crown;
                case 'dreamy': return Sparkles;
              }
            };
            const Icon = getIcon();
            
            return (
              <button
                key={themeOption}
                onClick={() => setTheme(themeOption)}
                className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-elegant transition-all duration-200 ${
                  isActive 
                    ? 'glass-effect text-primary-600' 
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                <Icon size={14} />
                <span className="capitalize">{themeOption}</span>
              </button>
            );
          })}
        </div>
      </div>
    </animated.div>
  );
};

export default ThemeToggle;
