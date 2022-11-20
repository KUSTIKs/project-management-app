'use client';

import { FC, ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import classes from './auth.module.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.container}>{children}</div>
    </QueryClientProvider>
  );
};

export default Layout;
