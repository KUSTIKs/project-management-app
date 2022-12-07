import { FC, FieldsetHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import classes from './modal-fieldset.module.scss';

type Props = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  children: ReactNode;
};

const ModalFieldset: FC<Props> = ({ children, ...fieldsetAttrs }) => {
  return (
    <fieldset
      {...fieldsetAttrs}
      className={classNames(classes.fieldset, fieldsetAttrs.className)}
    >
      {children}
    </fieldset>
  );
};

export { ModalFieldset };
