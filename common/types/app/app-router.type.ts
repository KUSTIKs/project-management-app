import { AppLocale } from './app-locale.type';
import { AppRouterFunctions } from './app-router-functions.type';
import { ParsedAppPathname } from './parsed-app-pathname.type';

type AppRouter = AppRouterFunctions &
  ParsedAppPathname & {
    locales: AppLocale[];
    searchParams: URLSearchParams;
  };

export type { AppRouter };
