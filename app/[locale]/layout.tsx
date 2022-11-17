import { ReactNode, FC } from 'react';

import { Footer, Header } from '@project-management-app/widgets';
import { LocaleName } from '@project-management-app/enums';

type Props = {
  children: ReactNode;
  params: {
    locale: LocaleName;
  };
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header isAuthorized={true} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
