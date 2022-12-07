'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

import { Icon } from '@project-management-app/components';
import { useBooleanState } from '@project-management-app/hooks';

import { InputVariant } from '../inputs.types';
import classes from '../inputs.module.scss';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
  errorMessage?: string | null;
  isError?: boolean;
  variant?: InputVariant;
};

const PasswordInput = forwardRef<HTMLInputElement, Props>(
  (
    { label, errorMessage, isError, variant = 'filled', ...inputAttrs },
    ref
  ) => {
    const [isShown, isShownActions] = useBooleanState(false);
    const inputType = isShown ? 'text' : 'password';

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
            className={classNames(classes.input, classes.input_withAction)}
            placeholder={label}
            {...inputAttrs}
            type={inputType}
            ref={ref}
          />
          <label className={classes.label}>
            {label}
            {!!inputAttrs.required && '*'}
          </label>

          <button
            className={classes.action}
            type="button"
            onClick={isShownActions.toggle}
          >
            {isShown ? <Icon.EyeOffLine /> : <Icon.EyeLine />}
          </button>
        </div>
        {!!errorMessage && (
          <p className={classes.errorMessage}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

export { PasswordInput };
