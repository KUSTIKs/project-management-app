'use client';

import { FC, ReactNode } from 'react';

import { AppContext } from '@project-management-app/helpers';
import { AppState } from '@project-management-app/types';

type Props = AppState & {
  children: ReactNode;
};

const AppContextProvider: FC<Props> = ({ children, ...state }) => {
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
