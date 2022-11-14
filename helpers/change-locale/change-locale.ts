import { NextRouter } from 'next/router';

type ChangeLocaleParams = { router: NextRouter; locale: string };

const changeLocale = ({ locale, router }: ChangeLocaleParams) => {
  router.push(
    {
      pathname: router.pathname,
      query: router.query,
    },
    router.asPath,
    {
      locale,
    }
  );
};

export { changeLocale };
