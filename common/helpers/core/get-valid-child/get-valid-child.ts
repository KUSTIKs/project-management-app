import { isValidChild } from '@project-management-app/helpers';

const getValidChild = (...children: unknown[]) => {
  return children.find(isValidChild) ?? null;
};

export { getValidChild };
