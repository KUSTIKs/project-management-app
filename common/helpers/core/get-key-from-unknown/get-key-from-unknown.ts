import { isObject } from '@project-management-app/helpers';

const getKeyFromUnknown = (value: unknown, key: string) => {
  const isMessage = isObject(value) && 'message' in value;

  return isMessage ? value[key] : undefined;
};

export { getKeyFromUnknown };
