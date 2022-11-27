'use client';

import React, { ReactNode, FC } from 'react';

import classes from '../inputs.module.scss';

type Props = {
  label: string;
  children: ReactNode;
};

const TextPreview: FC<Props> = ({ label, children }) => {
  return (
    <div className={classes.outerWrapper}>
      <div className={classes.inputWrapper}>
        <pre className={classes.preview}>{children}</pre>
        <label className={classes.label}>{label}</label>
      </div>
    </div>
  );
};

export { TextPreview };
