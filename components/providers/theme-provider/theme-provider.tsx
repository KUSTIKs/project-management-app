'use client';

import { FC, ReactNode, useState, useEffect, useMemo } from 'react';
import Cookies from 'js-cookie';

import { CookieName, ThemeName } from '@project-management-app/enums';
import { resolveTheme, ThemeContext } from '@project-management-app/helpers';
import { useMediaQuery } from '@project-management-app/hooks';

type Props = {
  children: ReactNode;
  storedTheme: unknown;
  storedPrefersTheme: unknown;
};

const isThemeName = (value: unknown): value is ThemeName => {
  return Object.values(ThemeName).includes(value as ThemeName);
};

const ThemeProvider: FC<Props> = ({
  children,
  storedPrefersTheme,
  storedTheme,
}) => {
  const { isMatch: prefersDark } = useMediaQuery(
    '(prefers-color-scheme: dark)'
  );
  const { isMatch: prefersLight } = useMediaQuery(
    '(prefers-color-scheme: light)'
  );

  const [theme, setTheme] = useState(
    isThemeName(storedTheme) ? storedTheme : ThemeName.SYSTEM
  );
  const [prefersTheme, setPrefersTheme] = useState(
    isThemeName(storedPrefersTheme) ? storedPrefersTheme : ThemeName.SYSTEM
  );
  const resolvedTheme = useMemo(
    () =>
      resolveTheme({
        theme,
        prefersTheme,
      }),
    [prefersTheme, theme]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.documentElement.classList.toggle(
      'dark',
      resolvedTheme === ThemeName.DARK
    );
  }, [resolvedTheme]);

  useEffect(() => {
    if (prefersDark) {
      setPrefersTheme(ThemeName.DARK);
    } else if (prefersLight) {
      setPrefersTheme(ThemeName.LIGHT);
    } else {
      setPrefersTheme(ThemeName.SYSTEM);
    }
  }, [prefersDark, prefersLight]);

  useEffect(() => {
    Cookies.set(CookieName.NEXT_THEME, theme);
  }, [theme]);

  useEffect(() => {
    Cookies.set(CookieName.NEXT_PREFERS_THEME, prefersTheme);
  }, [prefersTheme]);

  return (
    <ThemeContext.Provider
      value={{
        resolvedTheme,
        theme,
        setTheme,
        themes: [ThemeName.DARK, ThemeName.LIGHT, ThemeName.SYSTEM],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
