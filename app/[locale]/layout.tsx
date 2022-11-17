import { FC, ReactNode } from 'react';

import { Footer, Header } from '@project-management-app/widgets';
import { AppLocale } from '@project-management-app/types';

type Props = {
  children: ReactNode;
  params: {
    locale: AppLocale;
  };
};

const Layout: FC<Props> = ({ children, params }) => {
  const { locale } = params;

  return (
    <>
      <Header isAuthorized={true} />
      {children}
      <Footer locale={locale} />
    </>
  );
};

export default Layout;
