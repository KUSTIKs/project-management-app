'use client';

import { FC, ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

type Props = {
  children: ReactNode;
};

const ReactQueryProvider: FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { ReactQueryProvider };
