import { ReactNode, FC } from 'react';

import { Footer, Header } from '@project-management-app/widgets';

type Props = {
  children: ReactNode;
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
