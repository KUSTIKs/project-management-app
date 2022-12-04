'use client';

import { createContext } from 'react';

import { appInternalizationConfig } from '@project-management-app/config';
import { AppState } from '@project-management-app/types';

const AppContext = createContext<AppState>({
  locale: appInternalizationConfig.defaultLocale,
  payload: null,
  isAuthorized: false,
});

export { AppContext };
