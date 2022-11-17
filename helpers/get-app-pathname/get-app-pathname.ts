import { parseAppPathname } from '@project-management-app/helpers';

type GetAppPathnameParams = {
  pathname: string;
  locale?: string | false;
};

const getAppPathname = ({
  pathname: rawPathname,
  locale,
}: GetAppPathnameParams) => {
  const { appPathname } = parseAppPathname(rawPathname);

  if (locale === false) {
    appPathname;
  }

  if (locale) {
    return `/${locale}${appPathname}`;
  }

  return rawPathname;
};

export { getAppPathname };
