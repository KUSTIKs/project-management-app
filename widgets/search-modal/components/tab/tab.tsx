import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

import classes from './tab.module.scss';

type Props = {
  children: ReactNode;
  isActive?: boolean;
  handleClick?: () => void;
};

const Tab: FC<Props> = ({ children, isActive, handleClick }) => {
  return (
    <button
      className={classNames(classes.wrapper, {
        [classes.wrapper_active]: isActive,
      })}
      onClick={handleClick}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="search-modal-tab-underline"
          className={classes.underline}
        />
      )}
    </button>
  );
};

export { Tab };
