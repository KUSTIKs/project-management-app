import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import {
  getAppPathname,
  parseAppPathname,
} from '@project-management-app/helpers';
import { appInternalizationConfig } from '@project-management-app/config';
import { AppRouter, AppRouterFunctions } from '@project-management-app/types';

const useAppRouter = (): AppRouter => {
  const router = useRouter();
  const fullPathname = usePathname()!;
  const searchParams = useSearchParams();
  const parsedPathname = parseAppPathname(fullPathname);

  const appRouter = useMemo<AppRouterFunctions>(
    () => ({
      ...router,
      push(href, { locale, ...options } = {}) {
        return router.push(
          getAppPathname({
            pathname: href,
            locale,
          }),
          options
        );
      },
      prefetch(href) {
        return router.prefetch(
          getAppPathname({
            pathname: href,
          })
        );
      },
      replace(href, { locale, ...options } = {}) {
        return router.replace(
          getAppPathname({
            pathname: href,
            locale,
          }),
          options
        );
      },
    }),
    [router]
  );

  return {
    ...appRouter,
    ...parsedPathname,
    searchParams,
    locales: appInternalizationConfig.locales,
  };
};

export { useAppRouter };
