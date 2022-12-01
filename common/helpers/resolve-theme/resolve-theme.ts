import { ThemeName } from '@project-management-app/enums';

type ResolvedTheme = ThemeName.DARK | ThemeName.LIGHT;

const isResolvedTheme = (theme: unknown): theme is ResolvedTheme => {
  return theme === ThemeName.LIGHT || theme === ThemeName.DARK;
};

type ResolveThemeParams = {
  theme: unknown;
  defaultTheme?: ResolvedTheme;
  prefersTheme?: unknown;
};

const resolveTheme = ({
  theme,
  prefersTheme,
  defaultTheme = ThemeName.LIGHT,
}: ResolveThemeParams): ResolvedTheme => {
  const resolvedTheme = isResolvedTheme(theme)
    ? theme
    : isResolvedTheme(prefersTheme)
    ? prefersTheme
    : defaultTheme;

  return resolvedTheme;
};

export { resolveTheme };
