import { FC, ReactNode } from 'react';
import { cookies } from 'next/headers';

import { Footer, Header } from '@project-management-app/widgets';
import { AppLocale } from '@project-management-app/types';
import { CookieName } from '@project-management-app/enums';
import { decodeToken, isAppLocale } from '@project-management-app/helpers';
import {
  AppContextProvider,
  ReactQueryProvider,
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

  return (
    <html lang={locale}>
      <body>
        <AppContextProvider locale={locale} payload={payload}>
          <ReactQueryProvider>
            <Header isAuthorized={isAuthorized} />
            {children}
            <Footer locale={locale} />
          </ReactQueryProvider>
        </AppContextProvider>
        <div id="modal-portal" />
      </body>
    </html>
  );
};

export default RootLayout;
