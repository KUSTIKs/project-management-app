'use client';

import React, { FC, ReactNode } from 'react';

import classes from '../inputs.module.scss';

type Props = {
  label: string;
  children: ReactNode;
};

const FilesPreview: FC<Props> = ({ label, children }) => {
  return (
    <div className={classes.inputWrapper}>
      <div className={classes.filesPreview}>{children}</div>
      <label className={classes.label}>{label}</label>
    </div>
  );
};

export { FilesPreview };
