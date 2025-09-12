import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface PageTransitionContextType {
  direction: 'left' | 'right';
  setDirection: (direction: 'left' | 'right') => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};

interface PageTransitionProviderProps {
  children: ReactNode;
}

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({ children }) => {
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  return (
    <PageTransitionContext.Provider value={{ direction, setDirection }}>
      {children}
    </PageTransitionContext.Provider>
  );
};
