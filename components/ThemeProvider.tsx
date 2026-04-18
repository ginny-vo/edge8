'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

type ThemeMode = 'system' | 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  theme: 'light' | 'dark';
  cycleTheme: () => void;
  setMode: (m: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: 'system',
  theme: 'light',
  cycleTheme: () => {},
  setMode: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

const STORAGE_KEY = 'edge8-theme';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light' || stored === 'system') return stored;
  return 'system';
}

function applyMode(mode: ThemeMode): 'light' | 'dark' {
  const resolved = mode === 'system' ? getSystemTheme() : mode;
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', resolved);
  }
  return resolved;
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(getInitialMode);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => applyMode(getInitialMode()));

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initialMode: ThemeMode = (stored === 'dark' || stored === 'light' || stored === 'system') ? stored : 'system';
    setModeState(initialMode);
    setTheme(applyMode(initialMode));

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (mode === 'system') {
        setTheme(applyMode('system'));
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [mode]);

  const setMode = useCallback((m: ThemeMode) => {
    setModeState(m);
    const resolved = applyMode(m);
    setTheme(resolved);
    localStorage.setItem(STORAGE_KEY, m);
  }, []);

  const cycleTheme = useCallback(() => {
    const order: ThemeMode[] = ['system', 'light', 'dark'];
    const idx = order.indexOf(mode);
    setMode(order[(idx + 1) % order.length]);
  }, [mode, setMode]);

  return (
    <ThemeContext.Provider value={{ mode, theme, cycleTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
