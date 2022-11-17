import { AppLocale } from '../app-locale/app-locale.type';
import { AppRouterFunctions } from '../app-router-functions/app-router-functions.type';
import { ParsedAppPathname } from '../parsed-app-pathname/parsed-app-pathname.type';

type AppRouter = AppRouterFunctions &
  ParsedAppPathname & {
    locales: AppLocale[];
  };

export type { AppRouter };
