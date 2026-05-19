"use client"

import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-surface border border-border text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-start"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      
      {theme === 'dark' ?
      <SunIcon className="w-5 h-5" /> :

      <MoonIcon className="w-5 h-5" />
      }
    </button>);

}
