'use client';

import { createContext } from 'react';

import { ThemeName } from '@project-management-app/enums';

type ThemeContextState = {
  theme: ThemeName;
  resolvedTheme: Omit<ThemeName, ThemeName.SYSTEM>;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeName[];
};

const ThemeContext = createContext<ThemeContextState>({
  theme: ThemeName.LIGHT,
  resolvedTheme: ThemeName.SYSTEM,
  setTheme() {},
  themes: [],
});

export { ThemeContext };
