import { isValidChild } from '../is-valid-child/is-valid-child';

const getValidChild = (...children: unknown[]) => {
  return children.find(isValidChild) ?? null;
};

export { getValidChild };
