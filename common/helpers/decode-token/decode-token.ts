import { decode } from 'jsonwebtoken';

import { TokenPayload } from '@project-management-app/types';

import { isString, isUndefined } from '../type-checks/type-checks';

const decodeToken = (token: unknown) => {
  const payload = isString(token) ? (decode(token) as TokenPayload) : undefined;
  const isExpired =
    !!payload && !isUndefined(payload.exp) && Date.now() >= payload.exp * 1000;

  return {
    payload,
    isExpired,
  };
};

export { decodeToken };
