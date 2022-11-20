import { isObject } from '../type-checks/type-checks';

const getKeyFromUnknown = (value: unknown, key: string) => {
  const isMessage = isObject(value) && 'message' in value;

  return isMessage ? value[key] : undefined;
};

export { getKeyFromUnknown };
