'use client';

import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try {
      localStorage.setItem('breco-theme', next);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      <span className="theme-to-light"><Sun size={17} aria-hidden="true" /><span className="sr-only">Switch to light theme</span></span>
      <span className="theme-to-dark"><Moon size={17} aria-hidden="true" /><span className="sr-only">Switch to dark theme</span></span>
    </button>
  );
}
