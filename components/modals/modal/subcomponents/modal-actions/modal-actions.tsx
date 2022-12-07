import { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import classes from './modal-actions.module.scss';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const ModalActions: FC<Props> = ({ children, ...divAttrs }) => {
  return (
    <div
      {...divAttrs}
      className={classNames(classes.actions, divAttrs.className)}
    >
      {children}
    </div>
  );
};

export { ModalActions };
