'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

import { InputVariant } from '../inputs.types';
import classes from '../inputs.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errorMessage?: string | null;
  isError?: boolean;
  variant?: InputVariant;
};

const TextInput = forwardRef<HTMLInputElement, Props>(
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
          <input
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

export { TextInput };
