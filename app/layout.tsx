import { ReactNode, FC } from 'react';

import { Footer, Header } from '@project-management-app/widgets';

import '../styles/global-styles.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header isAuthorized={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
