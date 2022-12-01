import { FC, ReactNode } from 'react';
import { cookies } from 'next/headers';
import classNames from 'classnames';

import { Footer, Header } from '@project-management-app/widgets';
import { AppLocale } from '@project-management-app/types';
import { CookieName, ThemeName } from '@project-management-app/enums';
import {
  decodeToken,
  isAppLocale,
  resolveTheme,
} from '@project-management-app/helpers';
import {
  AppContextProvider,
  ReactQueryProvider,
  ThemeProvider,
} from '@project-management-app/components';
import { appInternalizationConfig } from '@project-management-app/config';

import '../../styles/global-styles.scss';

type Props = {
  children: ReactNode;
  params: {
    locale: AppLocale;
  };
};

const RootLayout: FC<Props> = ({ children, params }) => {
  const locale = isAppLocale(params.locale)
    ? params.locale
    : appInternalizationConfig.defaultLocale;

  const token = cookies().get(CookieName.NEXT_TOKEN)?.value;
  const { isExpired, payload } = decodeToken(token);
  const isAuthorized = !isExpired && !!payload;

  const storedTheme = cookies().get(CookieName.NEXT_THEME)?.value;
  const storedPrefersTheme = cookies().get(
    CookieName.NEXT_PREFERS_THEME
  )?.value;
  const resolvedTheme = resolveTheme({
    theme: storedTheme,
    prefersTheme: storedPrefersTheme,
  });

  return (
    <html
      lang={locale}
      className={classNames({
        [ThemeName.DARK]: resolvedTheme === ThemeName.DARK,
      })}
    >
      <body>
        <AppContextProvider
          locale={locale}
          payload={payload}
          isAuthorized={isAuthorized}
        >
          <ThemeProvider
            storedTheme={storedTheme}
            storedPrefersTheme={storedPrefersTheme}
          >
            <ReactQueryProvider>
              <Header isAuthorized={isAuthorized} />
              {children}
              <Footer locale={locale} />
              <div id="modal-portal" />
            </ReactQueryProvider>
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
