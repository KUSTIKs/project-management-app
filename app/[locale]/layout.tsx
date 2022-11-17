import { FC, ReactNode } from 'react';

import { Footer, Header } from '@project-management-app/widgets';
import { AppLocale } from '@project-management-app/types';

import '../../styles/global-styles.scss';

type Props = {
  children: ReactNode;
  params: {
    locale: AppLocale;
  };
};

const RootLayout: FC<Props> = ({ children, params }) => {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body>
        <Header isAuthorized={true} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
};

export default RootLayout;
