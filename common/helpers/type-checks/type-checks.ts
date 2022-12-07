export { isAppLocale } from './is-app-locale/is-app-locale';
export { isValidChild } from './is-valid-child/is-valid-child';

const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};

const isUndefined = (value: unknown): value is undefined => {
  return typeof value === 'undefined';
};

const isArray = <T>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !isArray(value);
};

const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function';
};

export { isString, isNumber, isArray, isUndefined, isObject, isFunction };
