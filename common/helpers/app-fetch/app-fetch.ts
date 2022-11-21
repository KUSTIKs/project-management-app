import Cookies from 'js-cookie';

import { CookieName } from '@project-management-app/enums';

import { isString } from '../type-checks/type-checks';

const API_URL = 'https://kanban-fdqg.onrender.com';

const appFetch = (resource: string, init?: RequestInit) => {
  const token = Cookies.get(CookieName.NEXT_TOKEN);
  const tokenHeaders = isString(token) && {
    authorization: `Bearer ${token}`,
  };

  const fetchUrl = `${API_URL}${resource}`;
  return fetch(fetchUrl, {
    ...init,
    headers: {
      ...init?.headers,
      ...tokenHeaders,
    },
  });
};

export { appFetch };
