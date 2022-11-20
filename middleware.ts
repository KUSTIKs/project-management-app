import { NextResponse, NextRequest } from 'next/server';

import {
  appInternalizationConfig,
  appRoutesConfig,
} from '@project-management-app/config';
import { CookieName, LocaleName } from '@project-management-app/enums';
import {
  decodeToken,
  isAppLocale,
  parseAppPathname,
} from '@project-management-app/helpers';

const publicFileRegExp = /\.(.*)$/;

const isRoute = ({ nextUrl }: NextRequest) => {
  return (
    !nextUrl.pathname.startsWith('/_next') &&
    !nextUrl.pathname.includes('/api/') &&
    !publicFileRegExp.test(nextUrl.pathname)
  );
};

const detectLocale = ({ headers }: NextRequest) => {
  const detectedLanguage = headers
    .get('accept-language')
    ?.split(',')[0]
    .split('-')[0]
    .toLowerCase();
  const isValidAppLocale = isAppLocale(detectedLanguage);
  const detectedLocale = isValidAppLocale
    ? detectedLanguage
    : appInternalizationConfig.defaultLocale;

  return detectedLocale;
};

const checkAuth = ({ nextUrl, cookies, url: fullUrl }: NextRequest) => {
  const { appPathname } = parseAppPathname(nextUrl.pathname);

  const isUnauthOnlyRoute =
    appRoutesConfig.unauthOnlyRoutes.includes(appPathname);
  const isSharedRoute = appRoutesConfig.sharedRoutes.includes(appPathname);
  const isUnauthRoute = isUnauthOnlyRoute || isSharedRoute;

  const token = cookies.get(CookieName.NEXT_TOKEN)?.value;
  const { isExpired, payload } = decodeToken(token);
  const isAuthorized = !isExpired && !!payload;

  if (isAuthorized && isUnauthOnlyRoute) {
    const pathname = '/';
    return NextResponse.redirect(new URL(pathname, fullUrl));
  } else if (!isAuthorized && !isUnauthRoute) {
    const pathname = '/sign-in';
    return NextResponse.redirect(new URL(pathname, fullUrl));
  }
};

const middleware = (request: NextRequest) => {
  const { nextUrl, cookies, url: fullUrl } = request;

  if (!isRoute(request)) return;

  const checkAuthResponse = checkAuth(request);
  if (checkAuthResponse) {
    return checkAuthResponse;
  }

  //* /{locale}/{...pathChunks} or /{...pathChunks}

  const { appPathname, pathLocale } = parseAppPathname(nextUrl.pathname);
  const isRootPathLocale = pathLocale === LocaleName.DEFAULT;
  const isDefaultPathLocale =
    pathLocale === appInternalizationConfig.defaultLocale;

  // Stored locale
  const nextLocale = cookies.get(CookieName.NEXT_LOCALE)?.value;
  const isValidNextLocale = !!nextLocale && isAppLocale(nextLocale);
  const isDefaultNextLocale =
    nextLocale === appInternalizationConfig.defaultLocale;

  if (isDefaultNextLocale && isRootPathLocale) {
    const pathname = `/${nextLocale}${appPathname}`;
    return NextResponse.rewrite(new URL(pathname, fullUrl));
  }

  if (isValidNextLocale && isRootPathLocale) {
    const pathname = `/${nextLocale}${appPathname}`;
    return NextResponse.redirect(new URL(pathname, fullUrl));
  }

  if (!isValidNextLocale && isRootPathLocale) {
    const detectedLocale = detectLocale(request);

    const pathname = `/${detectedLocale}${appPathname}`;

    cookies.set(CookieName.NEXT_LOCALE, detectedLocale);

    if (detectedLocale === appInternalizationConfig.defaultLocale) {
      return NextResponse.rewrite(new URL(pathname, fullUrl));
    }

    return NextResponse.redirect(new URL(pathname, fullUrl));
  }

  if (isDefaultPathLocale) {
    const pathname = appPathname;
    return NextResponse.redirect(new URL(pathname, fullUrl));
  }

  return;
};

export { middleware };
