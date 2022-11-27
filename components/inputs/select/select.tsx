'use client';

import React, { forwardRef, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';

import classes from '../inputs.module.scss';

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  errorMessage?: string | null;
  isError?: boolean;
  variant?: 'filled' | 'unfilled';
};

const Select = forwardRef<HTMLSelectElement, Props>(
  (
    { label, errorMessage, isError, variant = 'filled', ...inputAttrs },
    ref
  ) => {
    return (
      <div
        className={classNames(classes.outerWrapper, {
          [classes.outerWrapper_isError]: isError || errorMessage,
          [classes.outerWrapper_variant_filled]: variant === 'filled',
          [classes.outerWrapper_variant_unfilled]: variant === 'unfilled',
        })}
      >
        <div className={classes.inputWrapper}>
          <select
            className={classes.input}
            placeholder={label}
            {...inputAttrs}
            ref={ref}
          />
          <label className={classes.label}>
            {label}
            {!!inputAttrs.required && '*'}
          </label>
        </div>
        {!!errorMessage && (
          <p className={classes.errorMessage}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

export { Select };
