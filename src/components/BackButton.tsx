import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageTransition } from '../contexts/PageTransitionContext';

const BackButton: React.FC = () => {
  const { setDirection } = usePageTransition();

  const handleClick = () => {
    setDirection('right'); // Set direction for right-swipe animation
  };

  return (
    <Link 
      to="/" 
      onClick={handleClick}
      className="fixed top-6 left-6 z-50 inline-flex items-center space-x-2 text-2xl font-elegant transition-all duration-300 hover:scale-105"
    >
      <ArrowLeft 
        size={20} 
        className="text-primary-500"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
        }}
      />
      <span 
        className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent"
        style={{
          textShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
        }}
      >
        home
      </span>
    </Link>
  );
};

export default BackButton;
