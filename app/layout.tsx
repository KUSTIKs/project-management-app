import { ReactNode, FC } from 'react';

import '../styles/global-styles.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
