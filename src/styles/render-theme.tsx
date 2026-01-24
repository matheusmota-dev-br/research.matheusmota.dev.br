import { ReactNode } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

export function renderTheme (children: ReactNode) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
};
