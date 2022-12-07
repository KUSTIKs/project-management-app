'use client';

import classNames from 'classnames';
import React, { ReactNode, FC } from 'react';

import classes from '../inputs.module.scss';

type Props = {
  label: string;
  children: ReactNode;
  onClick?: () => void;
};

const TextPreview: FC<Props> = ({ label, children, onClick }) => {
  return (
    <div
      className={classNames(
        classes.outerWrapper,
        classes.outerWrapper_variant_unfilled
      )}
    >
      <div className={classes.inputWrapper}>
        <pre className={classes.preview} onClick={onClick}>
          {children}
        </pre>
        <label className={classes.label}>{label}</label>
      </div>
    </div>
  );
};

export { TextPreview };
