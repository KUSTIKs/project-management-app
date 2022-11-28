import { isValidElement, ReactNode } from 'react';

import { isArray, isNumber, isString } from '../type-checks/type-checks';

const isValidChild = (value: unknown): value is ReactNode => {
  const isValueArrayOfValidChildren =
    isArray(value) && value.every(isValidChild);

  return (
    isValidElement(value) ||
    isString(value) ||
    isNumber(value) ||
    isValueArrayOfValidChildren
  );
};

export { isValidChild };
