import Cookies from 'js-cookie';

import { CookieName } from '@project-management-app/enums';
import { isString } from '@project-management-app/helpers';

const API_URL = 'https://kanban-fdqg.onrender.com';

const appFetch = (resource: string, init?: RequestInit) => {
  const token = Cookies.get(CookieName.NEXT_TOKEN);
  const tokenHeaders = isString(token) && {
    authorization: `Bearer ${token}`,
  };
  const contentHeaders = isString(init?.body) && {
    'Content-Type': 'application/json',
  };

  const fetchUrl = `${API_URL}${resource}`;
  return fetch(fetchUrl, {
    ...init,
    headers: {
      ...contentHeaders,
      ...tokenHeaders,
      ...init?.headers,
    },
  });
};

export { appFetch };
