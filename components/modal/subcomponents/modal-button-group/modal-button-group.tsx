import { FC, ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames';

import classes from './modal-button-group.module.scss';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const ModalButtonGroup: FC<Props> = ({ children, ...divAttrs }) => {
  return (
    <div
      {...divAttrs}
      className={classNames(classes.buttonGroup, divAttrs.className)}
    >
      {children}
    </div>
  );
};

export { ModalButtonGroup };
