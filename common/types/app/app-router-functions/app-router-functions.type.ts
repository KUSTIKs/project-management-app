import { AppNavigateOptions } from '../app-navigate-options/app-navigate-options.type';

type AppRouterFunctions = {
  back: () => void;
  forward: () => void;
  refresh: () => void;
  push: (href: string, options?: AppNavigateOptions) => void;
  replace: (href: string, options?: AppNavigateOptions) => void;
  prefetch: (href: string) => void;
};

export type { AppRouterFunctions };
