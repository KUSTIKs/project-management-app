import { CookieName } from '@project-management-app/enums';
import { AppRouter } from '@project-management-app/types';

type ChangeLocaleParams = {
  router: AppRouter;
  locale: string;
};

const changeLocale = ({ locale, router }: ChangeLocaleParams) => {
  document.cookie = `${CookieName.NEXT_LOCALE}=${locale}; maxage=${
    1000 * 60 * 60 * 24 * 7
  }; path=/`;

  router.push(router.appPathname, {
    locale,
  });
};

export { changeLocale };
