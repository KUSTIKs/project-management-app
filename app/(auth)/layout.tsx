import { FC, ReactNode } from 'react';

import classes from './auth.module.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Layout;
