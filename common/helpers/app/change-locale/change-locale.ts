import Cookies from 'js-cookie';

import { CookieName } from '@project-management-app/enums';
import { AppRouter } from '@project-management-app/types';

type ChangeLocaleParams = {
  router: AppRouter;
  locale: string;
};

const changeLocale = ({ locale, router }: ChangeLocaleParams) => {
  Cookies.set(CookieName.NEXT_LOCALE, locale, {
    path: '/',
    expires: 1000 * 60 * 60 * 24 * 7,
  });

  router.push(router.appPathname, {
    locale,
  });
};

export { changeLocale };
